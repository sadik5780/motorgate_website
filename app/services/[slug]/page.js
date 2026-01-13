"use client";
import { useState, use } from "react";
import LoginModal from "../../components/auth/LoginModal";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ServiceDetailsPage({ params }) {
    const { slug } = use(params);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(slug);
    const [activeReviewTab, setActiveReviewTab] = useState('users');
    const serviceSlug = slug;

    // Data corresponding to services
    const servicesData = {
        "maintenance": {
            title: "Maintenance",
            image: "/img/main_img.png",
            step: "/img/1.png",
            heroImage: "/img/main_img.png",
            description: "Vehicle servicing and repairs are provided by verified and trusted workshops. Easily book the required service by selecting a convenient date and time slot. Track the entire service process in real time and receive timely notifications. Review the completed work and make payment only after the service is finished.",
            categories: ["Oil Change", "AC Service", "Wheel Service", "Battery Check", "Engine Diagnostics", "Brake Service", "Car Wash", "Detailing"],
            // Specific alignment for Maintenance
            containerClass: "lg:col-span-12 relative h-[350px] w-full flex items-start justify-start lg:justify-start",
            imageClass: "h-full w-auto object-contain drop-shadow-2xl relative z-10  scale-105"
        },
        "marketplace-buy-sell": {
            title: "Marketplace (Buy & Sell)",
            image: "/img/Marketplace.png",
            step: "/img/2.png",
            heroImage: "/img/Marketplace.png",
            description: "Buy and sell cars with confidence. Browse verified listings, compare prices, and connect with sellers directly. Secure transaction processes ensure peace of mind for both buyers and sellers.",
            categories: ["Used Cars", "New Cars", "Certified Pre-Owned", "Sell My Car", "Car Valuation", "Vehicle History"],
            containerClass: "lg:col-span-8 relative h-[400px] flex items-center justify-center lg:justify-start",
            imageClass: "h-full w-auto object-contain drop-shadow-2xl relative z-10 scale-105"
        },
        "spare-parts": {
            title: "Spare Parts",
            image: "/img/SpareParts.png",
            step: "/img/3.png",
            heroImage: "/img/SpareParts.png",
            description: "Find genuine and compatible spare parts for your vehicle. Compare prices from multiple suppliers and order with fast delivery options.",
            categories: ["Engine Parts", "Body Parts", "Electrical", "Suspension", "Brakes", "Filters", "Accessories"],
            // Default/Separate alignment for Spare Parts
            containerClass: "lg:col-span-10 relative h-[350px] flex items-start justify-start lg:justify-start",
            imageClass: "h-full w-auto object-contain drop-shadow-2xl relative z-10 ml-80 scale-110"
        },
        "towing": {
            title: "Towing",
            image: "/img/Towing.png",
            step: "/img/4.png",
            heroImage: "/img/Towing.png",
            description: "24/7 towing assistance when you need it most. Track your tow truck in real-time and get your vehicle safely to your preferred workshop or location.",
            categories: ["Flatbed Towing", "Wheel Lift Towing", "Emergency Recovery", "Jump Start", "Fuel Delivery"],
            // Default/Separate alignment for Towing
            containerClass: "lg:col-span-7 relative h-[450px] flex items-start justify-start lg:justify-start",
            imageClass: "h-full w-auto object-contain drop-shadow-2xl relative z-10 -ml-60 scale-105"
        },
        "auctions": {
            title: "Auctions",
            image: "/img/Auction.png",
            step: "/img/5.png",
            heroImage: "/img/Auction.png",
            description: "Participate in live vehicle auctions. View detailed inspection reports, place bids securely, and win your dream car at a great price.",
            categories: ["Live Auctions", "Upcoming Auctions", "Salvage Auctions", "Luxury Cars", "Commercial Vehicles"],
            containerClass: "lg:col-span-7 relative h-[450px] flex items-start justify-start lg:justify-start",
            imageClass: "h-full w-auto object-contain drop-shadow-2xl relative z-10 -ml-20 scale-100"
        },
        "insurance": {
            title: "Insurance",
            image: "/img/Insurance.png",
            step: "/img/6.png",
            heroImage: "/img/Insurance.png",
            description: "Compare and buy vehicle insurance policies instantly. Get quotes from top insurers, manage renewals, and file claims digitally.",
            categories: ["Comprehensive", "Third Party", "Collision", "Theft Protection", "Personal Injury"],
            // Default/Separate alignment for Insurance
            containerClass: "lg:col-span-7 relative h-[450px] flex items-start justify-start lg:justify-start",
            imageClass: "h-full w-auto object-contain drop-shadow-2xl relative z-10 -ml-20 scale-130"
        },
        "rentals": {
            title: "Rentals",
            image: "/img/Rentals.png",
            step: "/img/7.png",
            heroImage: "/img/Rentals.png",
            description: "Rent cars for daily, weekly, or monthly use. Choose from a wide fleet of vehicles and enjoy hassle-free booking and pickup.",
            categories: ["Economy", "Luxury", "SUV", "Van", "Long-term Lease"],
            containerClass: "lg:col-span-7 relative h-[450px] flex items-start justify-start lg:justify-start",
            imageClass: "h-full w-auto object-contain drop-shadow-2xl relative z-10 -ml-30 scale-100"
        }
    };

    const currentService = servicesData[serviceSlug] || servicesData["maintenance"];

    return (
        <>
            <main className="min-h-screen bg-white">
                {/* Header is global */}

                {/* Hero Section */}
                <section className="relative pt-8 pb-16 overflow-visible" style={{ backgroundImage: 'url(/img/service_details_bg.png)', backgroundSize: '70% auto', backgroundPosition: 'right top', backgroundRepeat: 'no-repeat' }}>

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-gray-500">
                            <span>Services</span>
                            <span>/</span>
                            <span className="text-gray-900 font-medium">{currentService.title}</span>
                        </nav>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start -mb-6">
                            {/* Text Content */}
                            <div className="lg:col-span-5 mt-2 relative z-20">
                                <h1 className="text-[44px] text-[#1a1a1a] leading-tight">
                                    {currentService.title}
                                </h1>
                            </div>

                            {/* Hero Image - Spanning more columns to overlap background */}
                            <div className={currentService.containerClass || "lg:col-span-7 relative h-[450px] flex items-center justify-center lg:justify-end"}>
                                <img
                                    src={currentService.heroImage}
                                    alt={currentService.title}
                                    className={currentService.imageClass || "h-full w-auto object-contain drop-shadow-2xl relative z-10"}
                                />
                            </div>
                        </div>

                        {/* Description Box - Full Width underneath */}
                        <div className="bg-[#F0F6FF] rounded-[15px] p-5 w-full relative z-20">
                            <p className="text-[#4A5568] text-[16px] leading-[1.8] text-center max-w-5xl mx-auto">
                                {currentService.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="-py-10">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-6">Categories</h2>
                        <div className="flex flex-wrap gap-3">
                            {currentService.categories.map((cat, idx) => (
                                <button key={idx} className="px-6 py-2.5 rounded-full border border-gray-200 text-gray-600 text-sm hover:border-blue-500 hover:text-blue-600 transition-colors bg-white">
                                    {cat}
                                </button>
                            ))}
                            <button className="px-6 py-2.5 rounded-full bg-[#2388FF] text-white text-sm font-medium shadow-lg shadow-blue-500/30">
                                More Services...
                            </button>
                        </div>
                    </div>
                </section>

                {/* Process Steps (How it works) */}
                <section id="how-it-works" className="py-20 relative">
                    <div className="max-w-[1400px] mx-auto px-6">

                        <div className="flex flex-col lg:flex-row items-start">
                            {/* Left Sidebar - Tabs */}
                            <div className="w-full lg:w-1/4 bg-white rounded-[20px] p-6 border border-gray-100" style={{ boxShadow: '3px 13px 13px 3px rgba(45, 83, 219, 0.1)' }}>
                                <h3 className="text-[24px] font-bold text-[#1a1a1a] mb-6">How It Works</h3>
                                <div className="flex flex-col gap-2">
                                    {Object.entries(servicesData).map(([slug, data]) => {
                                        const isActive = activeTab === slug;
                                        return (
                                            <button
                                                key={slug}
                                                onClick={() => setActiveTab(slug)}
                                                className={`px-4 py-3 rounded-lg text-[16px] transition-all duration-200 flex items-center justify-between group text-left w-full ${isActive
                                                    ? "bg-[#2388FF] text-white shadow-md shadow-blue-500/20"
                                                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                                    }`}
                                            >
                                                <span>{data.title}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Right Side - Random Image */}
                            <div className="flex-1 w-full flex items-center justify-center">
                                <div className="relative w-full h-[500px] overflow-hidden flex items-center justify-center">
                                    {/* Placeholder Image */}
                                    {servicesData[activeTab]?.step ? (
                                        <img
                                            src={servicesData[activeTab].step}
                                            alt="How it works"
                                            className="w-[850px] h-full object-contain"
                                        />
                                    ) : (
                                        <span className="text-gray-400">Image Placeholder for {servicesData[activeTab]?.title}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interactive Smart Map Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 text-center">
                        <div className="inline-block bg-[#2388FF] text-white px-4 py-1.5 rounded-full text-[16px] font-medium mb-4">
                            Interactive Smart Map
                        </div>
                        <h2 className="text-[32px] font-normal text-[#1a1a1a] mb-12">
                            The service closest to you, at the right time.
                        </h2>

                        <div className="flex flex-col lg:flex-row gap-4 items-start text-left">
                            {/* Map Area */}
                            <div className="flex-1 w-full bg-[#f3f4f6] rounded-[10px] h-[620px] relative overflow-hidden border border-gray-200 shadow-inner group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115984.77926175133!2d46.72185!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1679234567890!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            {/* Sidebar Wrapper */}
                            <div className="w-full lg:w-[380px] flex-shrink-0 flex flex-col gap-6">
                                {/* Search Wrapper Card */}
                                <div className="bg-[#ECF5FF] rounded-[10px] p-6">
                                    <h3 className="text-[18px] font-bold text-gray-900 mb-4">Nearby Workshops</h3>

                                    {/* Search */}
                                    <div className="relative mb-6">
                                        <input
                                            type="text"
                                            placeholder="Search for location"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-sm focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400"
                                        />
                                        {/* <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> */}
                                        <img className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" src="/icons/search.png" alt="" />
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center justify-between mb-6 text-sm">
                                        <button className="flex items-center gap-2 text-[#2388FF] font-medium hover:text-blue-700 transition-colors">
                                            <div className="">
                                                <img className="w-5 h-5" src="/icons/nearby.png" alt="" />
                                            </div>
                                            Nearby workshops
                                        </button>
                                        <button className="underline decoration-[#000] hover:text-gray-700 text-xs">Choose Services</button>
                                    </div>

                                    {/* Filter Buttons */}
                                    <div className="flex gap-3">
                                        <button className="flex-1 py-2.5 px-1 rounded-[20px] border border-blue-400 text-[#2388FF] text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
                                            Sort by
                                        </button>
                                        <button className="flex-1 py-2.5 px-1 rounded-[20px] border border-blue-400 text-[#2388FF] text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                                            Filter
                                        </button>
                                    </div>
                                </div>

                                {/* Results List - Outside of blue card */}
                                <div>
                                    <div className="text-xs text-gray-400 font-medium mb-4">50 Results found</div>
                                    <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                                        {[
                                            { title: "Oil Change", dist: "3.5 km", price: "99", rating: "4.7", img: "/img/vediothumb.png" },
                                            { title: "Brake Inspection", dist: "5.0 km", price: "199", rating: "4.6", img: "/img/workshop.png" },
                                            { title: "Battery Replacement", dist: "2.8 km", price: "299", rating: "4.8", img: "/img/vediothumb.png" },
                                            { title: "Alignment Check", dist: "6.2 km", price: "179", rating: "4.4", img: "/img/workshop.png" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-3 items-start p-1 rounded-xl transition-colors cursor-pointer group">
                                                <div className="w-[80px] h-[60px] rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center bg-gray-50 border border-gray-100">
                                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex justify-between items-start">
                                                        <h4 className="font-bold text-gray-900 text-sm truncate group-hover:text-[#2388FF] transition-colors">{item.title}</h4>
                                                        <div className="bg-[#4CAF50] text-white text-[10px] px-1.5 py-0.5 rounded-[20px] flex items-center gap-0.5">
                                                            <span className="text-[8px]">★</span>{item.rating}
                                                        </div>
                                                    </div>
                                                    <div className="text-[11px] text-gray-500 mt-0.5 font-medium">Distance ({item.dist})</div>
                                                    <div className="text-[11px] text-gray-400 mt-1">Starting price → <span className="text-gray-900 font-bold">From SAR {item.price}</span></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reviews Section */}
                <section id="reviews" className="pt-40 pb-20 -mt-24 relative z-10">
                    {/* Stable Background Layer */}
                    <div
                        className="absolute top-[-10%] right-[0px] w-[1920px] h-[120%] z-0 pointer-events-none bg-no-repeat bg-right-top"
                        style={{
                            backgroundImage: "url('/img/testimonialbg.png')",
                            backgroundSize: 'contain' // Or fixed size if needed, but absolute container is safer
                        }}
                    />

                    <div className="max-w-[1200px] mx-auto px-6 pointer-events-auto relative z-10">
                        <div className="flex items-center justify-between mb-5">
                            <div>
                                <div className="inline-block bg-[#2388FF] text-white px-4 py-1.5 rounded-full text-xs font-medium mb-4">
                                    Real Customer Reviews
                                </div>
                                <h2 className="text-[32px] text-[#1a1a1a]">
                                    No Courtesy. Read The Opinion Of The People Who <br /> Have Tried Us.
                                </h2>
                            </div>
                            <div className="bg-white rounded-full p-2 flex shadow-sm border border-gray-100">
                                <button
                                    onClick={() => setActiveReviewTab('users')}
                                    className={`px-6 py-2 rounded-full text-sm transition-all ${activeReviewTab === 'users' ? 'bg-[#2388FF] text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                                >
                                    User
                                </button>
                                <button
                                    onClick={() => setActiveReviewTab('providers')}
                                    className={`px-6 py-2 rounded-full text-sm transition-all ${activeReviewTab === 'providers' ? 'bg-[#2388FF] text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                                >
                                    Service Provider
                                </button>
                            </div>
                        </div>

                        <div className="reviews-swiper-container px-0">
                            <Swiper
                                spaceBetween={24}
                                slidesPerView={1}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                    1024: { slidesPerView: 4 }
                                }}
                                className="pb-10 !h-auto"
                            >
                                {(activeReviewTab === 'users' ? [
                                    { name: "Ali Salem", role: "Toyota Camry", rating: 4.5, text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,", img: "/img/profile.jpg" },
                                    { name: "Bella Zhang", role: "Honda Accord", rating: 4.7, text: "An Innovative Sedan Known For Its Reliability And Performance, Making It A Top Choice Among Drivers.", img: "/img/profile.jpg" },
                                    { name: "Carlos Mendez", role: "Ford Fusion", rating: 4.2, text: "With Sleek Design And Advanced Tech Features, This Car Combines Style With Functionality.", img: "/img/profile.jpg" },
                                    { name: "Diana Lee", role: "Nissan Altima", rating: 4.6, text: "A Popular Mid-Size Sedan That Offers Excellent Fuel Efficiency And A Comfortable Ride For Families.", img: "/img/profile.jpg" },
                                    { name: "John Doe", role: "Chevrolet Malibu", rating: 4.8, text: "Reliable and efficient service. I highly recommend this workshop for regular maintenance.", img: "/img/profile.jpg" }
                                ] : [
                                    { name: "Workshop A", role: "Service Provider", rating: 4.9, text: "Great platform to find customers and manage bookings efficiently.", img: "/img/profile.jpg" },
                                    { name: "AutoFix Pro", role: "Service Provider", rating: 4.8, text: "We have seen a significant increase in client base since joining MotorGate.", img: "/img/profile.jpg" },
                                    { name: "Quick Lube", role: "Service Provider", rating: 4.5, text: "Simple interface and excellent support for providers.", img: "/img/profile.jpg" },
                                    { name: "Tire Masters", role: "Service Provider", rating: 4.7, text: "The best way to showcase our services to local car owners.", img: "/img/profile.jpg" },
                                    { name: "Engine Experts", role: "Service Provider", rating: 5.0, text: "Highly recommended for any auto service business.", img: "/img/profile.jpg" }
                                ]).map((review, i) => (
                                    <SwiperSlide key={i} className="!h-auto my-10">
                                        <div className="bg-white rounded-[21px] p-6 flex flex-col shadow-[3px_13px_13px_3px_rgba(45,83,219,0.1)] min-h-[240px] h-full justify-between">
                                            <div>
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0">
                                                        <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-sm">{review.name}</div>
                                                        <div className="text-xs text-gray-500">{review.role}</div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 mb-3">
                                                    {[1, 2, 3, 4, 5].map(s => (
                                                        <span key={s} className={`text-xs ${s <= review.rating ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
                                                    ))}
                                                    <span className="text-xs text-gray-400 ml-1">{review.rating}</span>
                                                </div>
                                                <p className="text-gray-600 text-[14px] leading-relaxed line-clamp-4">
                                                    {review.text}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>

                {/* App Download */}
                <section className="py-20 bg-[#ECF5FF] relative overflow-hidden">
                    <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative z-10 pl-8">
                            <h2 className="text-[40px] text-[#1a1a1a] leading-tight mb-4">
                                All your services<br />
                                are in your pocket.
                            </h2>
                            <div className="w-[180px] h-[3px] bg-[#2388FF] mb-48"></div>

                            <div className="flex flex-col gap-4">
                                <button className="transition-transform hover:scale-105 active:scale-95 w-fit">
                                    <img src="/img/appstore.png" alt="Download on App Store" className="h-[48px] w-auto" />
                                </button>
                                <button className="transition-transform hover:scale-105 active:scale-95 w-fit">
                                    <img src="/img/playstore.png" alt="Get it on Google Play" className="h-[48px] w-auto" />
                                </button>
                            </div>
                        </div>
                        <div className="relative h-[600px] flex items-center justify-center">
                            {/* Circle Background */}
                            <img src="/img/circlebg.png" className="absolute w-[90%] max-w-[600px] object-contain animate-pulse-slow opacity-80" alt="" />
                            {/* Phones Image */}
                            <img src="/img/appmockup.png" className="relative z-10 w-full max-w-[500px] object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" alt="App Mockup" />
                        </div>
                    </div>
                </section>



                {/* Footer Section */}
                <footer className="relative bg-[#303133] text-white">
                    {/* Grid Background Pattern */}
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{
                            backgroundImage: "url('/img/footergrid.png')",
                            backgroundSize: '100% 100%',
                            backgroundRepeat: 'repeat',
                            opacity: 1,
                        }}
                    ></div>

                    <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-16">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                            {/* Left: Logo & Address */}
                            <div>
                                <div className="mb-6">
                                    <img src="/img/logo-full-en.png" alt="MotorGate" className="h-12 w-auto" />
                                    <img src="/img/logounderline.png" alt="" className="w-full mt-2" />
                                </div>
                                <p className="text-sm">123 MotorGate Street, Dubai, UAE</p>
                            </div>

                            {/* Right: Mailing List */}
                            <div className="w-full md:w-auto">
                                <h3 className="text-[24px] font-semibold mb-6">Join our mailing list</h3>
                                <div className="relative w-full md:w-[400px]">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full bg-white text-gray-900 rounded-full h-12 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button className="absolute right-1 top-1 h-10 w-10 bg-[#2388FF] rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="relative z-10 border-t border-gray-800 bg-[#606266] h-[72px] flex items-center">
                        <div className="max-w-[1400px] mx-auto px-6 w-full flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-gray-400 text-sm">© 2026 MotorGate. All Rights Reserved.</p>

                            <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-400">Follow us</span>
                                <div className="flex gap-3">
                                    <a href="#" className="w-8 h-8 bg-white rounded-[10px] flex items-center justify-center hover:bg-gray-200 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-8 h-8 bg-white rounded-[10px] flex items-center justify-center hover:bg-gray-200 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.894-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487 2.982 1.288 2.982.859 3.528.802.544-.058 1.758-.718 2.006-1.411.248-.695.248-1.29.173-1.414z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-8 h-8 bg-white rounded-[10px] flex items-center justify-center hover:bg-gray-200 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
            </main >
        </>
    );
}
