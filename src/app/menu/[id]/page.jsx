import Link from 'next/link';

// Fetch specific dish data
async function getDish(id) {
  try {
    const res = await fetch(`http://localhost:5000/api/dishes/${id}`, {
      cache: 'no-store'
    });

    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}
// ... imports and getDish function ...

// DYNAMIC METADATA GENERATOR
export async function generateMetadata({ params }) {
  // 1. Await params 
  const { id } = await params;
  
  // 2. Fetch the specific dish data
  const dish = await getDish(id);

  // 3. Handle case where dish doesn't exist
  if (!dish) {
    return {
      title: "Dish Not Found",
      description: "The requested item could not be found on our menu.",
    };
  }

  // 4. Return custom metadata for this specific dish
  return {
    title: dish.name, // Tab becomes "Spicy Basil Chicken | FoodieFinds"
    description: dish.description, // Search result snippet matches the dish
    openGraph: {
      title: `${dish.name} - Only $${dish.price}`,
      description: "Freshly prepared and available for order now at FoodieFinds.",
      images: [
        {
          url: dish.image, // Social media shares will show the ACTUAL food image
          width: 800,
          height: 600,
          alt: dish.name,
        },
      ],
    },
  };
}

// ... default export function DishDetails ...

export default async function DishDetails({ params }) {
  const { id } = await params; 
  const dish = await getDish(id);

  if (!dish) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
        <div className="text-6xl mb-4">😔</div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Dish not found</h1>
        <p className="text-slate-500 mb-6">The dish you are looking for might have been removed.</p>
        <Link href="/menu" className="btn bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8">
          Return to Menu
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="container mx-auto max-w-5xl">
        
        {/* Breadcrumbs */}
        <div className="text-sm breadcrumbs mb-6 text-slate-500 font-medium">
          <ul>
            <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
            <li><Link href="/menu" className="hover:text-orange-600">Menu</Link></li>
            <li className="text-orange-600">{dish.name}</li>
          </ul>
        </div>

        
        <div className="flex flex-col lg:flex-row bg-white shadow-xl rounded-3xl overflow-hidden border border-slate-100">
          
          {/* LEFT: Image Section */}
          <div className="lg:w-1/2 relative h-80 lg:h-auto min-h-[400px]">
            <img 
              src={dish.image || "https://placehold.co/600x600?text=No+Image"} 
              alt={dish.name} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Tag overlay */}
            <div className="absolute top-4 left-4 badge badge-warning gap-2 font-bold p-3 shadow-md z-10">
              ⭐ Premium Choice
            </div>
          </div>

          {/* RIGHT: Content Section */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            
            <div className="flex flex-col gap-2 mb-4">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                {dish.name}
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-3xl font-bold text-orange-600">
                  ${dish.price}
                </span>
                <span className="badge badge-outline text-slate-400 p-3">20-30 mins prep</span>
              </div>
            </div>

            <div className="divider my-2"></div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {dish.description}
            </p>

        {/* Chef's Notes (Universal Version) */}
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
  <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    Chef's Notes
  </h3>
  <ul className="space-y-2 text-slate-600 text-sm">
    <li className="flex items-start gap-2">
      <span className="text-green-500 font-bold">✓</span> 
      Made with premium quality ingredients
    </li>
    <li className="flex items-start gap-2">
      <span className="text-green-500 font-bold">✓</span> 
      Prepared fresh for the best taste
    </li>
    <li className="flex items-start gap-2">
      <span className="text-blue-500 font-bold">ⓘ</span> 
      Have allergies? Please inquire for details.
    </li>
  </ul>
</div>
            <div className="flex justify-between items-center mt-auto pt-4">
              <Link href="/menu" className="text-slate-500 hover:text-slate-800 font-bold text-sm flex items-center gap-1 transition-colors">
                ← Back to Menu
              </Link>
              
              
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}