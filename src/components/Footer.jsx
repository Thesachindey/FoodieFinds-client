import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
            {/* Main Footer Content */}
            <div className="footer p-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                
                {/* Column 1: Brand & Logo */}
                <aside className="flex flex-col gap-4">
                    <Link href="/" className="text-3xl font-bold text-orange-500 tracking-tighter">
                        FoodieFinds<span className="text-white">.</span>
                    </Link>
                    <p className="text-slate-400 leading-relaxed">
                        Serving the best flavors in town since 2010. <br />
                        Fresh ingredients, unforgettable taste.
                    </p>
                    <div className="flex gap-4 mt-2">
                        {/* Social Icons (Pointing to real sites) */}
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                        </a>
                    </div>
                </aside> 
                
                {/* Column 2: Quick Links */}
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title text-white opacity-100">Explore</h6> 
                    <Link href="/" className="link link-hover hover:text-orange-500">Home</Link>
                    <Link href="/menu" className="link link-hover hover:text-orange-500">Our Menu</Link>
                    <Link href="/menu" className="link link-hover hover:text-orange-500">New Arrivals</Link>
                </nav> 
                
                {/* Column 3: Admin & Legal */}
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title text-white opacity-100">Company</h6> 
                    <Link href="/login" className="link link-hover hover:text-orange-500">Admin Login</Link>
                    <Link href="/admin/add-dish" className="link link-hover hover:text-orange-500">Add Dish</Link>
                    <Link href="#" className="link link-hover hover:text-orange-500">Privacy Policy</Link>
                </nav>

                {/* Column 4: Contact Info */}
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title text-white opacity-100">Contact</h6> 
                    <div className="flex items-center gap-2 text-slate-400">
                        <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span>123 Culinary Ave, Food City</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                        <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                        <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <span>hello@foodiefinds.com</span>
                    </div>
                </nav>
            </div>

            {/* Copyright Section */}
            <div className="footer footer-center p-4 bg-black text-slate-500 text-sm">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by FoodieFinds Inc.</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;