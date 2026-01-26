"use client";
import Header from "../../components/Header/Header";

export default function AboutPage() {
    return (
        <>
            <main className="min-h-screen bg-white ">
                {/* Hero Section */}
                <section className="relative pt-7 pb-10 lg:pt-10 lg:pb-6 ">
                    {/* Background Elements */}
                    <div className="absolute w-full h-full z-0 pointer-events-none">
                        <img src="/img/about_bg.png" alt="" className="w-full h-full object-cover" />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                            {/* Left Content */}
                            <div className="lg:w-1/2">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-[#2388FF] text-white text-sm font-medium mb-6">
                                    About us
                                </span>
                                <h1 className="text-[52px] md:text-[52px] text-[#1a1a1a] leading-[1.1] mb-6">
                                    Simplifying Automotive Services in One Digital Platform
                                </h1>
                                <p className="text-[#606266] text-[20px] leading-relaxed mb-8 max-w-xl">
                                    MotorGate connects vehicle owners with trusted service providers for maintenance, towing, spare parts, insurance, and more — all in one seamless experience.
                                </p>
                                <button className="px-8 py-3.5 rounded-full bg-[#1a1a1a] text-white font-medium hover:bg-black transition-all cursor-pointer">
                                    Explore Services
                                </button>
                            </div>

                            {/* Right Image - Layered Composition */}
                            <div className="lg:w-1/2 relative h-[400px] md:h-[500px] w-full flex items-end justify-center lg:justify-end">
                                <div className="relative w-full h-full flex items-end justify-end">
                                    {/* Buildings Background - ab3 */}
                                    <img
                                        src="/img/ab1.png"
                                        alt="Buildings"
                                        className="absolute -bottom-17 right-[20%] w-[50%] md:w-[55%] object-contain z-0"
                                    />
                                    {/* Car - ab1 */}
                                    <img
                                        src="/img/ab3.png"
                                        alt="Car"
                                        className="absolute -bottom-31 right-[200px] h-auto w-[80%] md:w-[79%] object-contain z-10"
                                    />
                                    {/* Mechanic - ab2 */}
                                    <img
                                        src="/img/ab2.png"
                                        alt="Mechanic"
                                        className="w-[50%] md:w-[55%] object-contain -bottom-16 left-[-10%] relative z-20"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-20 lg:py-38 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-5 gap-8">
                            {/* Left Blue Card */}
                            <div className="lg:col-span-3 bg-gradient-to-br from-[#409EFF] to-[#2388FF] rounded-[62px] p-10 md:p-16 text-white relative overflow-hidden flex flex-col justify-center min-h-[400px]">
                                <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: "url('/img/whobg.png')", backgroundSize: 'cover' }}></div>
                                <div className="relative z-10">
                                    <h2 className="text-[24px] md:text-[32px] font-bold leading-relaxed mb-20">
                                        Who We Are
                                    </h2>
                                    <p className="mt-8 text-blue-50 text-[20px] leading-relaxed">
                                        MotorGate is a digital automotive services ecosystem built to simplify how vehicle owners manage repairs, maintenance, and emergency services
                                    </p>
                                    <p className="mt-8 text-blue-50 text-[20px] leading-relaxed">
                                        We bring together workshops, towing providers, spare parts suppliers, and service partners into one connected platform — giving users full control, real-time visibility, and easy booking across every vehicle need.
                                    </p>
                                </div>
                            </div>

                            {/* Right Team Card */}
                            <div className="lg:col-span-2 bg-[#F0F7FF] rounded-[62px] p-10 md:p-16 relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
                                {/* Grid lines background */}
                                <div className="absolute inset-0" style={{ backgroundImage: "url('/img/whobg2.png')", backgroundSize: 'cover' }}></div>

                                {/* Orbit visuals */}
                                <div className="relative w-full h-full flex items-center justify-center">
                                    {/* Center Icon */}
                                    <div className="w-24 h-24 bg-[#409EFF] rounded-full flex items-center justify-center shadow-xl shadow-blue-500/20 relative z-10">
                                        <img src="/icons/people.png" alt="" />
                                    </div>

                                    {/* Orbiting Avatars */}
                                    <div className="absolute top-10 left-10 w-20 h-20 rounded-full overflow-hidden ">
                                        <img src="/img/profile.jpg" alt="Team" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full overflow-hidden ">
                                        <img src="/img/profile.jpg" alt="Team" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute top-10 right-10 w-20 h-20 rounded-full overflow-hidden ">
                                        <img src="/img/profile.jpg" alt="Team" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full overflow-hidden ">
                                        <img src="/img/profile.jpg" alt="Team" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Offerings Section */}
                <section className="pb-20 pt-0 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-[36px] font-bold text-[#1a1a1a]">What We Offer</h2>
                        </div>

                        <div className="flex flex-col gap-8 max-w-[1000px] mx-auto">
                            {/* Row 1 */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <OfferCard title="Repairs" icon="/img/w1.png" />
                                <OfferCard title="Towing" icon="/img/w2.png" />
                                <OfferCard title="Spare Parts" icon="/img/w3.png" />
                                <OfferCard title="Marketplace" icon="/img/w4.png" />
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:w-3/4 mx-auto">
                                <OfferCard title="Auctions" icon="/img/w5.png" />
                                <OfferCard title="Insurance" icon="/img/w6.png" />
                                <OfferCard title="Rentals" icon="/img/w7.png" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
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
                                <p className="text-sm">123 MotorGate, Riyadh, Saudi Arabia</p>
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
                                    <button className="absolute right-1 top-1 h-10 w-10 bg-[#2388FF] rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
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
                                        <svg className="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-8 h-8 bg-white rounded-[10px] flex items-center justify-center hover:bg-gray-200 transition-colors">
                                        <svg className="h-5 w-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.894-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487 2.982 1.288 2.982.859 3.528.802.544-.058 1.758-.718 2.006-1.411.248-.695.248-1.29.173-1.414z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-8 h-8 bg-white rounded-[10px] flex items-center justify-center hover:bg-gray-200 transition-colors">
                                        <svg className="h-5 w-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}

function OfferCard({ title, icon }) {
    return (
        <div className="bg-white rounded-[32px] p-6 shadow-[3px_13px_13px_3px_rgba(45,83,219,0.1)] transition-all duration-300 flex flex-col items-center justify-center gap-4 border border-transparent cursor-pointer min-h-[160px]">
            <div className="w-full h-auto relative flex items-center justify-center">
                <img src={icon} alt={title} className="w-full h-full object-contain" />
            </div>
        </div>
    );
}
