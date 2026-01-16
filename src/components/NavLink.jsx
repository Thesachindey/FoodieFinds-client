'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathName = usePathname();

    // LOGIC FIX:
    // 1. If href is exactly "/", check for exact match.
    // 2. Otherwise, use startsWith to keep sub-pages active (e.g. /menu/123 keeps 'Menu' active)
    const isActive = href === "/" 
        ? pathName === href 
        : pathName.startsWith(href);

    return (
        <Link 
            href={href}
            className={`px-4 py-2 rounded font-medium transition-colors ${
                isActive ? "text-orange-600 font-bold" : "text-slate-600 hover:text-orange-600"
            }`}
        >
            {children}
        </Link>
    );
};

export default NavLink;