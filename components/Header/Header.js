"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LoginModal from "../../app/components/auth/LoginModal";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const pathname = usePathname();
    const menuRef = useRef(null);
    const [currentHash, setCurrentHash] = useState('');

    // Track hash changes
    useEffect(() => {
        const handleHashChange = () => {
            setCurrentHash(window.location.hash);
        };

        // Set initial hash
        setCurrentHash(window.location.hash);

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // Update hash when pathname changes
    useEffect(() => {
        setCurrentHash(window.location.hash);
    }, [pathname]);

    // Close menu when switching to desktop
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 1024) setOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Close on outside click
    useEffect(() => {
        const onClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        if (open) document.addEventListener("mousedown", onClick);
        return () => document.removeEventListener("mousedown", onClick);
    }, [open]);

    return (
        <>

            <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

                    {/* LOGO */}
                    <img
                        src="/img/logo-full-ar.png"
                        alt="MotorGate"
                        className="h-8 w-auto cursor-pointer"
                    />

                    {/* DESKTOP NAV */}
                    <nav className="hidden lg:flex items-center gap-8 text-[14px] ">
                        <Link href="/" onClick={() => setCurrentHash('')} className={`cursor-pointer ${pathname === '/' ? 'text-[#409EFF] font-bold' : 'text-[#909399] hover:text-[#409EFF]'}`}>Home</Link>
                        <Link href="/services" onClick={() => setCurrentHash('')} className={`cursor-pointer ${pathname.startsWith('/services') && !currentHash ? 'text-[#409EFF] font-bold' : 'text-[#909399] hover:text-[#409EFF]'}`}>Services</Link>
                        <Link
                            href={pathname.startsWith('/services/') && pathname.split('/').length > 2 ? "#how-it-works" : "/services/maintenance#how-it-works"}
                            onClick={() => setCurrentHash('#how-it-works')}
                            className={`cursor-pointer ${currentHash === '#how-it-works' ? 'text-[#409EFF] font-bold' : 'text-[#909399] hover:text-[#409EFF]'}`}
                        >
                            How It Works
                        </Link>
                        <Link
                            href={pathname.startsWith('/services/') && pathname.split('/').length > 2 ? "#reviews" : "/services/maintenance#reviews"}
                            onClick={() => setCurrentHash('#reviews')}
                            className={`cursor-pointer ${currentHash === '#reviews' ? 'text-[#409EFF] font-bold' : 'text-[#909399] hover:text-[#409EFF]'}`}
                        >
                            Reviews
                        </Link>
                        <Link href="/contact" onClick={() => setCurrentHash('')} className={`cursor-pointer ${pathname === '/contact' ? 'text-[#409EFF] font-bold' : 'text-[#909399] hover:text-[#409EFF]'}`}>Contact Us</Link>
                        <span className="cursor-pointer text-[#909399] hover:text-[#409EFF]">For Providers</span>
                    </nav>

                    {/* ACTIONS */}
                    <div className="relative flex items-center gap-5">
                        {/* Language */}
                        <button className="hidden lg:flex items-center gap-1 text-sm text-[#909399] hover:text-[#409EFF] cursor-pointer">
                            Eng <span className="text-xs">▾</span>
                        </button>

                        {/* CTA */}
                        <button
                            onClick={() => setIsLoginOpen(true)}
                            className="hidden md:flex h-10 px-5 rounded-full bg-[#409EFF] text-white text-sm font-semibold flex items-center justify-center leading-none cursor-pointer"
                        >
                            Join us
                        </button>
                        {/* Hamburger */}
                        <button
                            className="lg:hidden text-2xl text-[#303133] cursor-pointer"
                            onClick={() => setOpen((v) => !v)}
                            aria-label="Toggle menu"
                        >
                            ☰
                        </button>

                        {/* FLOATING MENU */}
                        <div
                            ref={menuRef}
                            className={`
              absolute right-0 top-[56px]
              w-64
              bg-white
              rounded-xl
              border border-gray-100
              shadow-lg
              p-5
              flex flex-col gap-4
              transition-all duration-200 ease-out
              ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
            `}
                        >
                            <Link href="/" className={`cursor-pointer text-sm font-medium ${pathname === '/' ? 'text-[#409EFF]' : 'text-[#909399] hover:text-[#409EFF]'}`}>Home</Link>
                            <Link href="/services" className={`cursor-pointer text-sm font-medium ${pathname.startsWith('/services') ? 'text-[#409EFF]' : 'text-[#909399] hover:text-[#409EFF]'}`}>Services</Link>
                            <span className="cursor-pointer text-sm font-medium text-[#909399] hover:text-[#409EFF]">How It Works</span>
                            <span className="cursor-pointer text-sm font-medium text-[#909399] hover:text-[#409EFF]">Reviews</span>
                            <Link href="/contact" className={`cursor-pointer text-sm font-medium ${pathname === '/contact' ? 'text-[#409EFF]' : 'text-[#909399] hover:text-[#409EFF]'}`}>Contact Us</Link>
                            <span className="cursor-pointer text-sm font-medium text-[#909399] hover:text-[#409EFF]">For Providers</span>
                            <button
                                onClick={() => setIsLoginOpen(true)}
                                className="mt-2 h-10 w-full rounded-full bg-[#409EFF] text-white font-semibold flex items-center justify-center leading-none cursor-pointer"
                            >
                                Join Us
                            </button>
                        </div>
                    </div>
                </div>
                <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
            </header>
        </>
    );
}
