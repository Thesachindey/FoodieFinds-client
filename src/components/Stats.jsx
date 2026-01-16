import React from 'react';

const Stats = () => {
    return (
        <section className="bg-slate-900 py-20 border-y border-slate-800">
            <div className="container mx-auto px-4">
                
                {/* Grid Layout instead of default DaisyUI stats for better control */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
                    
                    {/* Stat 1: Served */}
                    <div className="flex flex-col items-center p-4">
                        <div className="p-4 bg-slate-800 rounded-full mb-4 text-orange-500">
                            {/* Icon: User Group */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div className="text-5xl font-extrabold text-white mb-2">31K+</div>
                        <div className="text-slate-400 font-medium tracking-wide uppercase text-sm">Happy Customers</div>
                    </div>

                    {/* Stat 2: Dishes */}
                    <div className="flex flex-col items-center p-4">
                        <div className="p-4 bg-slate-800 rounded-full mb-4 text-orange-500">
                            {/* Icon: Utensils / Food */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <div className="text-5xl font-extrabold text-white mb-2">50+</div>
                        <div className="text-slate-400 font-medium tracking-wide uppercase text-sm">Unique Dishes</div>
                    </div>

                    {/* Stat 3: Chefs */}
                    <div className="flex flex-col items-center p-4">
                        <div className="p-4 bg-slate-800 rounded-full mb-4 text-orange-500">
                            {/* Icon: Award / Star */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="text-5xl font-extrabold text-white mb-2">12</div>
                        <div className="text-slate-400 font-medium tracking-wide uppercase text-sm">Master Chefs</div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;