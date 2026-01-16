import React from 'react';
import Link from 'next/link';

const Faq = () => {
    
    const questions = [
        {
            id: 1,
            q: "Do you offer vegan or gluten-free options?",
            a: "Absolutely! We have a dedicated section on our menu for vegan and gluten-free lovers. Just look for the 'Green Leaf' icon next to dish names."
        },
        {
            id: 2,
            q: "How far do you deliver?",
            a: "We currently deliver within a 10-mile radius of the city center. Orders over $50 qualify for free delivery! For standard orders, a small $3.99 fee applies."
        },
        {
            id: 3,
            q: "Can I book a table for a large group?",
            a: "Yes, we love hosting parties! For groups larger than 8, please give us a call at (555) 123-4567 or use the 'Contact' form so we can prepare the perfect table for you."
        },
        {
            id: 4,
            q: "Are your ingredients fresh?",
            a: "We pride ourselves on using locally sourced ingredients delivered fresh every single morning. We never use frozen meat or processed preservatives."
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 max-w-3xl">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Got Questions?</span>
                    <h2 className="text-4xl font-extrabold text-slate-900 mt-2">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="flex flex-col gap-4">
                    {questions.map((item, index) => (
                        <div 
                            key={item.id} 
                            className="collapse collapse-plus bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <input type="radio" name="my-accordion-3" defaultChecked={index === 0} /> 
                            
                            <div className="collapse-title text-lg font-bold text-slate-800 py-6">
                                {item.q}
                            </div>
                            
                            <div className="collapse-content text-slate-600 leading-relaxed">
                                <p className="pb-4">{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-slate-500">
                        Still have questions?{' '}
                        <Link href="/contact" className="text-orange-600 font-bold hover:underline">
                            Contact our support team
                        </Link>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Faq;