import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        // CHANGED: Reduced padding for mobile (px-6 py-12) -> Desktop remains p-20
        <section className="relative w-full min-h-[85vh] bg-white overflow-hidden flex items-center px-6 py-12 lg:p-20">
            
            {/* BACKGROUND SHAPE (Yellow Polygon) */}
            <div className="absolute top-0 right-0 w-4/6 h-full bg-yellow-400 transform skew-x-[-12deg] translate-x-20 z-0 hidden lg:block"></div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* LEFT SIDE: TEXT CONTENT */}
                <div className="space-y-6 pt-4 lg:pt-0 text-center lg:text-left">
                    <span className="text-orange-600 font-bold tracking-wider uppercase text-sm bg-orange-50 px-3 py-1 rounded-lg inline-block">
                        #1 Digital Menu in Town
                    </span>

                    {/* Main Headline - CHANGED: Responsive text sizes (text-4xl -> 5xl -> 7xl) */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
                        Discover the <br className="hidden md:block" />
                        <span className="text-red-600">Best Flavors</span> Near You
                    </h1>
                    
                    {/* Subheadline */}
                    <p className="text-lg md:text-xl font-medium text-slate-700">
                        Welcome to <span className="text-orange-600 font-bold">FoodieFinds</span>.
                    </p>
                    
                    {/* Body Text */}
                    <p className="text-slate-500 max-w-lg leading-relaxed text-base md:text-lg mx-auto lg:mx-0">
                        Explore our curated menu of hand-crafted dishes. From spicy entrees to sweet desserts, we bring the finest ingredients to your table.
                    </p>

                    {/* Buttons - CHANGED: Centered on mobile, Flex start on desktop */}
                    <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                        <Link href="/menu" className="btn bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3 border-none capitalize text-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                            View Full Menu
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </Link>
                        <Link href="/login" className="btn bg-white hover:bg-slate-50 text-slate-800 rounded-full px-8 py-3 border border-slate-200 capitalize text-lg font-medium shadow-sm">
                            Admin Login
                        </Link>
                    </div>
                </div>

                {/* RIGHT SIDE: IMAGE & BADGE */}
                <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
                    
                    {/* Floating Offer Badge - CHANGED: Adjusted position for mobile to prevent overlap */}
                    <div className="absolute top-0 left-4 md:top-10 md:left-10 lg:-left-12 bg-white p-3 md:p-4 rounded-2xl shadow-xl z-20 max-w-[180px] md:max-w-[220px] border border-slate-100 animate-bounce-slow">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-green-100 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <span className="font-bold text-slate-800 text-sm md:text-base">Fresh Daily</span>
                        </div>
                        <p className="text-xs md:text-sm text-slate-500">
                            Check out our <span className="text-orange-600 font-bold">New Arrivals</span> on the menu today!
                        </p>
                    </div>

                    {/* Main Food Image */}
                    <div className="relative z-10 w-full max-w-[400px] lg:max-w-none lg:w-[90%] aspect-square">
                        {/* Decorative circle */}
                        <div className="absolute inset-0 bg-white rounded-full opacity-30 transform scale-110"></div>
                        
                        <img 
                            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop" 
                            alt="Delicious Food Bowl" 
                            className="object-cover w-full h-full rounded-full shadow-2xl border-8 border-white"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;