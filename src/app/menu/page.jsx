import Link from 'next/link';
import React from 'react';
export const metadata = {
  title: "Our Menu", // Will become "Our Menu | FoodieFinds" thanks to the template in layout.js
  description: "Browse our complete menu of fresh, locally sourced dishes. From appetizers to desserts, find your next favorite meal at FoodieFinds.",
  openGraph: {
    title: "Our Menu | Delicious Dishes & Prices",
    description: "Check out our latest offerings! Fresh ingredients, great prices, and fast delivery.",
  },
};
// Server Action to fetch dishes
async function getDishes() {
  try {
    const res = await fetch('http://localhost:5000/api/dishes', { 
      cache: 'no-store' // Ensure fresh data on every request
    });
    
    if (!res.ok) {
      return [];
    }
    
    return res.json();
  } catch (error) {
    console.error("Failed to load dishes:", error);
    return [];
  }
}

export default async function MenuPage() {
  const dishes = await getDishes();

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      
      {/* PAGE HEADER */}
      <section className="bg-slate-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Discover Taste</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-4">Our Menu</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Explore our diverse collection of dishes, crafted with passion and fresh ingredients.
          </p>
        </div>
      </section>

      {/* MENU GRID */}
      <div className="container mx-auto px-4 -mt-10 relative z-10">
        
        {dishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dishes.map((dish) => (
              <div 
                key={dish.id} 
                className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group overflow-hidden"
              >
                
                {/* Image Section with Zoom Effect */}
                <figure className="h-64 w-full overflow-hidden relative">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Price Tag Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg font-bold text-slate-900">
                    ${dish.price}
                  </div>
                </figure>

                {/* Content Section */}
                <div className="card-body p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="card-title text-2xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                      {dish.name}
                    </h2>
                  </div>
                  
                  <p className="text-slate-500 line-clamp-2 mb-6 h-12">
                    {dish.description}
                  </p>
                  
                  <div className="card-actions mt-auto">
                    <Link 
                      href={`/menu/${dish.id}`} 
                      className="btn bg-slate-900 hover:bg-orange-600 text-white w-full border-none transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* EMPTY STATE (If server is down or no dishes) */
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-bold text-slate-800">Menu Unavailable</h3>
            <p className="text-slate-500 mt-2">
              We couldn't load the dishes right now. Please check if your backend server is running.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}