"use client";
import { useState } from "react";
import Link from "next/link";
import LoginModal from "../components/auth/LoginModal";

export default function ServicesPage() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const services = [
        {
            title: "Maintenance",
            description: "Regular and emergency vehicle maintenance services from verified workshops. Book, track progress, and pay only after service completion.",
            icon: "/icons/maint_icon.png",
            image: "/img/maintenance_img.png",
            bgColor: "bg-[#2388FF]"
        },
        {
            title: "Marketplace (Buy & Sell)",
            description: "Buy and sell cars. Browse listings, compare options, and connect with verified sellers easily.",
            icon: "/icons/market_icon.png",
            image: "/img/buysell_img.png",
            bgColor: "bg-[#2388FF]"
        },
        {
            title: "Spare Parts",
            description: "Find genuine and compatible spare parts for your vehicle. Compare prices and order from trusted sellers.",
            icon: "/icons/spare_icon.png",
            image: "/img/spare_img.png",
            bgColor: "bg-[#2388FF]"
        }
    ];

    const servicesRow2 = [
        {
            title: "Towing",
            description: "Quick and reliable towing assistance when your vehicle breaks down. Track pickup, delivery, and workshop arrival in real time.",
            icon: "/icons/towing_icon.png",
            image: "/img/towing_img.png",
            bgColor: "bg-[#2388FF]"
        },
        {
            title: "Auctions",
            description: "Participate in transparent vehicle and parts auctions. View listings, place bids, and track auction status easily.",
            icon: "/icons/auct_icon.png",
            image: "/img/auction_img.png",
            bgColor: "bg-[#2388FF]"
        }
    ];

    const servicesRow3 = [
        {
            title: "Insurance",
            description: "Explore and manage vehicle insurance options seamlessly. Compare coverage, renew policies, and access documents anytime.",
            icon: "/icons/insu_icon.png",
            image: "/img/insu_img.png",
            bgColor: "bg-[#2388FF]"
        },
        {
            title: "Rentals",
            description: "Rent vehicles for short or long durations with ease. Choose from available options and manage bookings digitally.",
            icon: "/icons/rental_icon.png",
            image: "/img/rent_img.png",
            bgColor: "bg-[#2388FF]"
        }
    ];

    return (
        <>
            {/* Service Categories Section */}
            <section className="min-h-screen py-12" style={{ backgroundImage: 'url(/img/deals.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                <div className="max-w-[1400px] mx-auto px-6">
                    <h1 className="text-[40px] font-semibold text-[#1a1a1a] mb-8">Services</h1>

                    <div className="flex flex-col gap-6">
                        {/* Row 1: 3 Columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => {
                                const slug = service.title.toLowerCase().replace(/ /g, '-').replace(/[()&]/g, '').replace(/--+/g, '-');
                                return (
                                    <Link href={`/services/${slug}`} key={index} className="contents">
                                        <div className="bg-white rounded-[32px] p-6 h-[300px] flex flex-col relative overflow-hidden group transition-shadow" style={{ boxShadow: '3px 13px 13px 3px rgba(45, 83, 219, 0.1)' }}>
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="w-[60px] h-[60px] bg-[#2388FF] rounded-[18px] flex items-center justify-center" style={{ boxShadow: '3px 13px 13px 3px rgba(45, 83, 219, 0.2)' }}>
                                                    <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
                                                </div>
                                                <div className="w-[300px] h-[120px] relative -mr-4 -mt-2">
                                                    <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <h3 className="text-[24px] font-bold text-[#1a1a1a] mb-3">{service.title}</h3>
                                                <p className="text-[#606266] text-[16px] leading-relaxed line-clamp-3">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Row 2: 2 Columns Centered */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {servicesRow2.map((service, index) => {
                                const slug = service.title.toLowerCase().replace(/ /g, '-').replace(/[()&]/g, '').replace(/--+/g, '-');
                                return (
                                    <Link href={`/services/${slug}`} key={index} className="contents">
                                        <div className="bg-white rounded-[32px] p-6 h-[270px] flex flex-col relative overflow-hidden group transition-shadow w-full md:w-[calc((100%_-_24px)/2)] lg:w-[calc((100%_-_48px)/2.5)]" style={{ boxShadow: '3px 13px 13px 3px rgba(45, 83, 219, 0.1)' }}>
                                            <div className="flex justify-start items-start mb-4">
                                                <div className="w-[60px] h-[60px] bg-[#2388FF] rounded-[18px] flex items-center justify-center" style={{ boxShadow: '3px 13px 13px 3px rgba(45, 83, 219, 0.1)' }}>
                                                    <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain " />
                                                </div>
                                                <div className="w-[300px] h-[110px] relative ml-10">
                                                    <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <h3 className="text-[24px] font-bold text-[#1a1a1a] mb-3">{service.title}</h3>
                                                <p className="text-[#606266] text-[16px] leading-relaxed line-clamp-3">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Row 3: 2 Columns Centered */}
                        <div className="flex flex-wrap justify-center gap-6 pb-10">
                            {servicesRow3.map((service, index) => {
                                const slug = service.title.toLowerCase().replace(/ /g, '-').replace(/[()&]/g, '').replace(/--+/g, '-');
                                return (
                                    <Link href={`/services/${slug}`} key={index} className="contents">
                                        <div className="bg-white rounded-[32px] p-6 h-[250px] flex flex-col relative overflow-hidden group transition-shadow w-full md:w-[calc((100%_-_24px)/2)] lg:w-[calc((100%_-_48px)/2)]" style={{ boxShadow: '3px 13px 13px 3px rgba(45, 83, 219, 0.1)' }}>
                                            <div className="flex justify-between items-center">
                                                <div className="w-[60px] h-[60px] bg-[#2388FF] rounded-[18px] flex items-center justify-center" style={{ boxShadow: '3px 13px 13px 3px rgba(45, 83, 219, 0.1)' }}>
                                                    <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain " />
                                                </div>
                                                <div className="w-[220px] h-[120px] relative mr-10">
                                                    <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <h3 className="text-[24px] font-bold text-[#1a1a1a] mb-3">{service.title}</h3>
                                                <p className="text-[#606266] text-[16px] leading-relaxed line-clamp-3">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/* Footer - Fixed at Bottom */}
                <div className="fixed bottom-0 left-0 right-0 bg-white text-black py-3 z-50 border-t border-gray-200">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                            <p className="text-[16px]m text-gray-600">
                                © 2025 MotorGate. All Rights Reserved.
                            </p>
                            <div className="flex items-center gap-4">
                                <span className="text-[16px]m text-gray-600">Follow us</span>
                                <div className="flex gap-3">
                                    <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Login Modal */}
            {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
        </>
    );
}
