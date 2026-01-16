import Link from 'next/link';
import React from 'react';

async function getDishes() {
  try {
    const res = await fetch('http://localhost:5000/api/dishes', { 
      cache: 'no-store'
    });
    
    if (!res.ok) return [];
    
    return res.json();
  } catch (error) {
    console.error("Failed to fetch dishes:", error);
    return [];
  }
}

const PopularDishes = async () => {
    
    // Fetch data directly from Express
    const allDishes = await getDishes();
    
    // Slice the array to show only the first 3 items as "Popular"
    const popularDishes = allDishes.slice(0, 3);

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                
                {/* SECTION HEADER */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Customer Favorites</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-4">
                        Popular Choices
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Our most loved dishes, crafted with passion and fresh ingredients.
                        Try them once, and you'll be back for more.
                    </p>
                </div>

                {/* CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {popularDishes.length > 0 ? (
                        popularDishes.map((dish, index) => (
                            <div key={dish.id} className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group">
                                
                                {/* IMAGE AREA */}
                                <figure className="relative h-64 overflow-hidden">
                                    <img 
                                        src={dish.image} 
                                        alt={dish.name} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                                    />
                                    {/* Dynamic Badge based on index */}
                                    <div className="absolute top-4 right-4 badge badge-secondary font-bold p-3 shadow-md">
                                        {index === 0 ? "Bestseller" : "Top Rated"}
                                    </div>
                                </figure>

                                {/* CONTENT AREA */}
                                <div className="card-body p-6">
                                    {/* Fake Rating Stars (Just for UI polish) */}
                                    <div className="flex items-center gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="mask mask-star-2 w-4 h-4 bg-orange-400"></div>
                                        ))}
                                        <span className="text-xs text-slate-400 ml-2">(4.9)</span>
                                    </div>

                                    <h2 className="card-title text-slate-800 text-2xl mb-1 group-hover:text-orange-600 transition-colors">
                                        {dish.name}
                                    </h2>
                                    
                                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                                        {dish.description}
                                    </p>
                                    
                                    <div className="card-actions justify-between items-center mt-auto border-t border-slate-100 pt-4">
                                        <div className="text-xl font-bold text-slate-900">
                                            ${dish.price}
                                        </div>
                                        {/* Link to the specific dynamic details page */}
                                        <Link href={`/menu/${dish.id}`} className="btn btn-circle btn-ghost text-orange-600 hover:bg-orange-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Fallback if database is empty or server is down
                        <div className="col-span-3 text-center text-slate-400 py-10">
                            No dishes found. Please check the backend connection.
                        </div>
                    )}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <Link href="/menu" className="btn btn-outline border-slate-300 text-slate-600 hover:bg-slate-900 hover:text-white px-8 rounded-full">
                        View Full Menu
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default PopularDishes;