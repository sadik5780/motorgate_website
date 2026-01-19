"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LoginModal from "./components/auth/LoginModal";

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);

  // Prevent body scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, []);

  return (
    <>
      {/* Hero Section - Full Screen, No Scroll */}
      <section className="relative w-full h-screen bg-gradient-to-br from-[#E9F3FF] to-[#F5F9FF] overflow-hidden">
        <div className="absolute top-[50px] bottom-[48px] left-0 right-0 flex items-center justify-center">
          <div className="max-w-[1400px] mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">

              {/* Left Column - Content */}
              <div className="relative z-10 space-y-5">
                <h1 className="text-[38px] lg:text-[46px] leading-[1.15] font-normal text-[#303133]">
                  Your car service is{" "}
                  <span className="font-bold">easier, smarter</span>, and more{" "}
                  <span className="font-bold">honest</span> than ever.
                </h1>

                <p className="text-[18px] leading-relaxed text-[#909399] max-w-[450px]">
                  Book trusted workshops, compare services, and manage your car with confidence.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 pt-1">
                  <button className="px-6 py-2.5 rounded-full bg-[#1D1D1F] text-white text-[14px] font-medium hover:bg-[#2D2D2F] transition-colors">
                    Explore Services
                  </button>
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="px-7 py-3 rounded-full bg-[#409EFF] text-white text-[15px] font-medium hover:bg-[#3A8EEF] transition-colors"
                  >
                    Get Started Now
                  </button>
                </div>

                {/* App Store Badges with Phone */}
                <div className="flex items-center gap-0 pt-2 relative">
                  {/* Phone Image */}
                  <div className="w-[110px] h-auto relative z-10 mr-4">
                    <img
                      src="/img/phone.png"
                      alt="App Screen"
                      className="w-full object-cover"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-2 pb-2 mb-1">
                    <a href="#" className="block hover:opacity-90 transition-opacity">
                      <img
                        src="/img/appstore.png"
                        alt="Download on App Store"
                        className="h-[42px] w-auto"
                      />
                    </a>
                    <a href="#" className="block hover:opacity-90 transition-opacity">
                      <img
                        src="/img/playstore.png"
                        alt="Get it on Google Play"
                        className="h-[42px] w-auto"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual */}
              <div className="relative h-[450px] lg:h-[480px]">
                {/* Gradient Background Circle - Outer */}
                <div className="absolute left-[30%] top-[-10px] w-[420px] h-[420px] rounded-full z-[-1]" style={{ background: 'linear-gradient(135deg, #E9F3FF 6%, #2388FF 97%)', opacity: '0.1' }}>
                </div>

                {/* Blue Circle Background - Inner */}
                <div className="absolute left-[35%] top-[20px] w-[480px] h-[480px] rounded-full overflow-hidden z-0">
                  <img
                    src="/img/circlebg.png"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt=""
                  />
                </div>

                {/* Floating Icons Container */}
                <div className="absolute inset-0 z-40">

                  {/* Maintenance - Big */}
                  <Link href="#" className="absolute top-[-10%] left-[68%] group cursor-pointer inline-block">
                    <div className="w-[85px] h-[85px] rounded-full flex items-center justify-center animate-scale-pulse hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg, #2388FF 0%, #E9F3FF 100%)', boxShadow: 'rgb(255 255 255 / 45%) 0px 0px 0px 6px' }}>
                      <img src="/icons/hero_icons/maintenance.png" alt="Maintenance" className="w-10 h-10" />
                    </div>
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white text-black text-[14px] px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg z-[9999]">
                      Maintenance
                    </div>
                  </Link>

                  {/* Spare Parts - Big */}
                  <Link href="#" className="absolute top-[-5%] left-[40%] group cursor-pointer inline-block">
                    <div className="w-[85px] h-[85px] rounded-full flex items-center justify-center animate-scale-pulse hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg, #2388FF 0%, #E9F3FF 100%)', boxShadow: 'rgb(255 255 255 / 45%) 0px 0px 0px 6px' }}>
                      <img src="/icons/hero_icons/sparepart.png" alt="Spare Parts" className="w-10 h-10" />
                    </div>
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white text-black text-[14px] px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg z-[9999]">
                      Spare Parts
                    </div>
                  </Link>

                  {/* Marketplace - Big */}
                  <Link href="#" className="absolute bottom-[45%] left-[20%] group cursor-pointer inline-block">
                    <div className="w-[85px] h-[85px] rounded-full flex items-center justify-center animate-scale-pulse hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg, #2388FF 0%, #E9F3FF 100%)', boxShadow: 'rgb(255 255 255 / 45%) 0px 0px 0px 6px' }}>
                      <img src="/icons/hero_icons/market.png" alt="Marketplace" className="w-12 h-12" />
                    </div>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[14px] px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg z-[9999]">
                      Marketplace
                    </div>
                  </Link>

                  {/* Towing - Big */}
                  <Link href="#" className="absolute top-[25%] left-[58%] group cursor-pointer inline-block">
                    <div className="w-[85px] h-[85px] rounded-full flex items-center justify-center animate-scale-pulse hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg, #2388FF 0%, #E9F3FF 100%)', boxShadow: 'rgb(255 255 255 / 45%) 0px 0px 0px 6px' }}>
                      <img src="/icons/hero_icons/tow.png" alt="Towing" className="w-12 h-12" />
                    </div>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[14px] px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg z-[9999]">
                      Towing
                    </div>
                  </Link>

                  {/* Rental - Small */}
                  <Link href="#" className="absolute top-[32%] left-[42%] group cursor-pointer inline-block">
                    <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center animate-float-slow delay-400 hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg, #2388FF 0%, #E9F3FF 100%)', boxShadow: 'rgb(255 255 255 / 45%) 0px 0px 0px 6px' }}>
                      <img src="/icons/hero_icons/renta.png" alt="Rental" className="w-7 h-7" />
                    </div>
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white text-black text-[14px] px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg z-[9999]">
                      Rental
                    </div>
                  </Link>

                  {/* Insurance - Small */}
                  <Link href="#" className="absolute top-[20%] left-[30%] group cursor-pointer inline-block">
                    <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center animate-float-medium delay-500 hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg, #2388FF 0%, #E9F3FF 100%)', boxShadow: 'rgb(255 255 255 / 45%) 0px 0px 0px 6px' }}>
                      <img src="/icons/hero_icons/insu.png" alt="Insurance" className="w-6 h-6" />
                    </div>
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white text-black text-[14px] px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg z-[9999]">
                      Insurance
                    </div>
                  </Link>

                  {/* Auction - Small */}
                  <Link href="#" className="absolute top-[5%] left-[58%] group cursor-pointer inline-block">
                    <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center animate-float-slow delay-600 hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg, #2388FF 0%, #E9F3FF 100%)', boxShadow: 'rgb(255 255 255 / 45%) 0px 0px 0px 6px' }}>
                      <img src="/icons/hero_icons/auct.png" alt="Auction" className="w-6 h-6" />
                    </div>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[14px] px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg z-[9999]">
                      Auction
                    </div>
                  </Link>
                </div>

                {/* Phone Mockup - Positioned to cover right half of blue circle */}
                <div className="absolute bottom-[-190px] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] z-20">
                  <img
                    src="/img/hero_car2.png"
                    alt="App Screenshot"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Mechanic Image - Overlapping Phone */}
                <div className="absolute bottom-[-50px] right-[-18%] w-[400px] z-30">
                  <img
                    src="/img/mech2.png"
                    alt="Mechanic"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

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

      {/* Floating AI Button & Chat Card */}
      <div className="fixed bottom-[90px] right-6 z-[100] flex flex-col items-end gap-4">
        {/* Chat Card */}
        {isAiOpen && (
          <div className="bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-[320px] overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-200">
            <div className="bg-[#2388FF] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <img
                    src="/icons/ai_img.png"
                    alt="AI"
                    className="w-5 h-5 object-contain brightness-0 invert"
                  />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">MotorGate AI</h3>
                  <p className="text-white/80 text-xs">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsAiOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 h-[300px] bg-gray-50 flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-[#2388FF] rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <img
                      src="/icons/ai_img.png"
                      alt="AI"
                      className="w-3 h-3 object-contain brightness-0 invert"
                    />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none text-sm text-gray-600 shadow-sm border border-gray-100">
                    Hi! I can help you find services, compare prices, or answer questions about your car. How can I assist you today?
                  </div>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask a question..."
                  className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 focus:border-[#2388FF] focus:ring-2 focus:ring-[#2388FF]/10 outline-none text-sm bg-white"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[#2388FF] hover:bg-[#1a7ae6] rounded-lg transition-colors group">
                  <svg className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <div
          onClick={() => setIsAiOpen(!isAiOpen)}
          className="bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-1.5 pr-6 flex items-center gap-3 transition-transform hover:scale-105 cursor-pointer border border-gray-50"
        >
          <div className="w-12 h-12 bg-[#2388FF] rounded-full flex items-center justify-center">
            {isAiOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            ) : (
              <img
                src="/icons/ai_img.png"
                alt="AI"
                className="w-7 h-7 object-contain brightness-0 invert"
              />
            )}
          </div>
          <span className="text-[#606266] text-lg font-medium">
            {isAiOpen ? 'Close AI' : 'Ask Ai'}
          </span>
        </div>
      </div>

      {/* Login Modal */}
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }

        @keyframes scale-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-scale-pulse {
          animation: scale-pulse 2s ease-in-out infinite;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        body {
          overflow: hidden;
          height: 100vh;
        }
      `}</style>
    </>
  );
}
