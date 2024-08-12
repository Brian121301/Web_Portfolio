"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [navColour, updateNavbar] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY >= 20) {
                updateNavbar(true);
            } else {
                updateNavbar(false);
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <nav className={`p-4 w-full ${navColour ? 'fixed top-0 bg-gray-800 bg-opacity-90' : 'absolute bg-black'}`}>
            <ul className='flex items-center justify-between'>
                <li className='pl-16'>
                    <Link href="/">
                        <p className={`text-xl  flex space-x-12  pr20 ${navColour ? 'text-white' : 'text-gray-300'}`}>Logo</p>
                    </Link>
                </li>
                <div className={`text-xl  flex space-x-12 pr-20 ${navColour ? 'text-white' : 'text-gray-300'}`}>
                    <li>
                        <Link href="#home">
                            <p className=''>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#about">
                            <p className=''>About</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#projects">
                            <p className=''>Projects</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#resume">
                            <p className=''>Resume</p>
                        </Link>
                    </li>
                    <li className='fork-btn'>
                        <Link href="https://github.com/Brian121301/Web_Portfolio">
                            <p className=''>Github</p>
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
