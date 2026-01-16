import Link from 'next/link';
import React from 'react';

const AboutUs = () => {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* LEFT SIDE: IMAGE COMPOSITION */}
                    <div className="relative">
                        {/* Decorative Pattern Background */}
                        <div className="absolute -top-4 -left-4 w-72 h-72 bg-orange-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-yellow-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        
                        {/* Main Image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <img 
                                src="https://i.pinimg.com/736x/d7/b6/b9/d7b6b9d4c60b00884aeb308196f4eca6.jpg?w=800&q=80" 
                                alt="Chefs cooking in kitchen" 
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                            />
                        </div>

                        {/* Floating Badge (Years of Experience) */}
                        <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                            <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Serving Since</p>
                                <p className="text-xl font-extrabold text-slate-900">2010</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: TEXT CONTENT */}
                    <div className="space-y-6">
                        <span className="text-orange-600 font-bold tracking-wider uppercase text-sm bg-orange-50 px-3 py-1 rounded-lg">
                            Our Story
                        </span>
                        
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            From a Small Truck <br />
                            to <span className="text-orange-600">Your Table</span>
                        </h2>

                        <p className="text-slate-500 text-lg leading-relaxed">
                            Founded in 2010, FoodieFinds started as a humble food truck with a big dream. Today, we bring the world's best flavors to your plate with passion and precision.
                        </p>

                        <p className="text-slate-500 text-lg leading-relaxed">
                            We believe in the power of good food. That's why every dish is crafted with love, using only the freshest, locally sourced ingredients available.
                        </p>

                        {/* Feature List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-slate-700 font-medium">Fresh Ingredients</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-slate-700 font-medium">Expert Chefs</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-slate-700 font-medium">Locally Sourced</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-slate-700 font-medium">Sustainability Focus</span>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Link href="/menu" className="btn btn-primary rounded-full px-8 text-white shadow-lg hover:shadow-orange-200 hover:-translate-y-1 transition-all">
                                Explore Our Menu
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;