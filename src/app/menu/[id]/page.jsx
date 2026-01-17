export const dynamic = 'force-dynamic';
import Link from 'next/link';

async function getDish(id) {
  try {
    const res = await fetch(`https://foodiefinds-server.onrender.com/api/dishes/${id}`, {
      cache: 'no-store'
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    return null;
  }
}

// 2. Generate Metadata
export async function generateMetadata({ params }) {
  const { id } = await params;
  const dish = await getDish(id);

  if (!dish) return { title: "Dish Not Found" };

  return {
    title: `${dish.name} | FoodieFinds`,
    description: dish.description,
  };
}

// 3. Main Page Component
export default async function DishDetails({ params }) {
  const { id } = await params; // Captures "1", "2", etc. from URL
  const dish = await getDish(id);

  // Error State: Dish not found
  if (!dish) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
        <div className="text-6xl mb-4">😔</div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Dish not found</h1>
        <p className="text-slate-500 mb-6">
          We couldn't find a dish with ID: <strong>{id}</strong>
        </p>
        <Link href="/menu" className="btn bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8">
          Return to Menu
        </Link>
      </div>
    );
  }

  // Success State
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="container mx-auto max-w-5xl">
        
        {/* Breadcrumbs */}
        <div className="text-sm breadcrumbs mb-6 text-slate-500 font-medium">
          <ul>
            <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
            <li><Link href="/menu" className="hover:text-orange-600">Menu</Link></li>
            <li className="text-orange-600 font-bold">{dish.name}</li>
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
            <div className="absolute top-4 left-4 badge badge-warning gap-2 font-bold p-3 shadow-md z-10 text-slate-800">
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
                <span className="badge badge-lg badge-outline text-slate-500 p-4">
                  20-30 mins prep
                </span>
              </div>
            </div>

            <div className="divider my-2"></div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {dish.description}
            </p>

            {/* Chef's Notes */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                Chef's Notes
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span> 
                  Made with premium quality ingredients
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">ⓘ</span> 
                  Have allergies? Please inquire for details.
                </li>
              </ul>
            </div>

            <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-100">
              <Link href="/menu" className="text-slate-500 hover:text-orange-600 font-bold text-sm flex items-center gap-2 transition-colors">
                ← Back to Menu
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}