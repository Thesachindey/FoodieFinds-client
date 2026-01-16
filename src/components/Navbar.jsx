'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import NavLink from './NavLink';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const checkAuth = () => {
            const hasAuthCookie = document.cookie.split('; ').some((row) => row.startsWith('auth='));
            setIsLoggedIn(hasAuthCookie);
        };
        checkAuth();
    }, [pathname]);

    const handleLogout = () => {
        document.cookie = "auth=; path=/; max-age=0";
        setIsLoggedIn(false);
        router.push('/'); 
        router.refresh(); 
    };

    // Helper: The Auth Link
    const AuthButton = () => {
        if (isLoggedIn) {
            return (
                <button 
                    onClick={handleLogout} 
                    className=" font-bold "
                >
                    Logout
                </button>
            );
        }
        return <Link href="/login" className='font-medium'>Login</Link>;
    };

    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            
            {/* NAVBAR START: Mobile Menu + Logo */}
            <div className="navbar-start">
                
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/menu">Items List</NavLink></li>
                        
                        {/* MOBILE ONLY: Add Item Button inside menu
                        <li>
                            <NavLink href="/admin/add-dish" className=" text-orange-600 font-bold">
                                + Add Item
                            </NavLink>
                        </li> */}
                        
                        <li className="btn  bg-orange-600 hover:bg-orange-700 text-white border-none rounded-full   border-t border-slate-100 ">
                            <AuthButton />
                        </li>
                    </ul>
                </div>

                {/* Logo */}
                <Link href="/" className=" md:px-3 text-xl font-bold text-white">
                    FoodieFinds<span className="text-orange-600">.</span>
                </Link>
            </div>

            {/* NAVBAR CENTER: Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-slate-600 font-medium">
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/menu">Items List</NavLink></li>
                </ul>
            </div>

            {/* NAVBAR END: Desktop Only 'Add Item' Button */}
            <div className="navbar-end md:flex space-x-4">
                    <li className='hidden lg:block bg-orange-600 hover:bg-orange-700 text-white border-none rounded-full   border-t border-slate-100 px-5 py-2 cursor-pointer'>⁘ <AuthButton /></li>
                <Link href="/admin/add-dish" className="btn bg-orange-600 hover:bg-orange-700 text-white border-none rounded-full px-6">
                    + Add Item
                </Link>
            </div>
            
        </div>
    );
};

export default Navbar;