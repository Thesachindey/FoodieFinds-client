import React from 'react';

const Testimonial = () => {
    
    const reviews = [
        {
            id: 1,
            name: "Sarah Jenkins",
            role: "Food Blogger",
            image: "https://i.pravatar.cc/150?img=5",
            text: "The Basil Chicken is absolutely to die for! I've eaten at many places in the city, but the freshness of ingredients here is unmatched.",
            rating: 5
        },
        {
            id: 2,
            name: "Mike Ross",
            role: "Verified Customer",
            image: "https://i.pravatar.cc/150?img=11",
            text: "Fastest delivery I've ever experienced. The food arrived hot, and the packaging kept everything perfectly intact. 10/10 service!",
            rating: 5
        },
        {
            id: 3,
            name: "Emily Chen",
            role: "Regular Diner",
            image: "https://i.pravatar.cc/150?img=9",
            text: "I love the vegan options! It's hard to find a place that treats plant-based dishes with this much care. The Buddha Bowl is my favorite.",
            rating: 4
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Testimonials</span>
                    <h2 className="text-4xl font-extrabold text-slate-900 mt-2">
                        What Our Customers Say
                    </h2>
                    <p className="text-slate-500 mt-4 text-lg">
                        Don't just take our word for it. Here is what food lovers across the city are saying about FoodieFinds.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="card bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg 
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className={`h-5 w-5 ${i < review.rating ? 'text-orange-500' : 'text-slate-300'}`} 
                                        viewBox="0 0 20 20" 
                                        fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-slate-700 text-lg leading-relaxed mb-8 italic relative">
                                <span className="text-6xl text-orange-200 absolute -top-8 -left-4 font-serif">"</span>
                                {review.text}
                            </p>

                            {/* User Profile */}
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="avatar">
                                    <div className="w-12 h-12 rounded-full ring ring-offset-2 ring-orange-100">
                                        <img src={review.image} alt={review.name} />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide">{review.role}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;