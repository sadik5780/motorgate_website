"use client";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setShowSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Hide success message after 5 seconds
        setTimeout(() => {
            setShowSuccess(false);
        }, 5000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <main className="min-h-screen bg-white">
            <section className="py-20">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Left Side - Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <p className="text-[#2388FF] text-[14px] font-semibold uppercase tracking-wider mb-3">
                                    CONTACT US
                                </p>
                                <h1 className="text-[42px] text-[#1a1a1a] leading-tight mb-4">
                                    How can we <span className="font-bold">help</span> you?
                                </h1>
                                <p className="text-[16px] text-[#909399] flex items-center gap-2">
                                    Fill in the form or drop an email
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#F0F6FF] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-[#2388FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[15px] text-[#606266] font-medium">+966 XXX XXX XXX</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#F0F6FF] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-[#2388FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[15px] text-[#606266] font-medium">info@motorgate.com</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#F0F6FF] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-[#2388FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[15px] text-[#606266] font-medium">123 MotorGate, Riyadh, Saudi Arabia</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="bg-white rounded-[30px] p-8 shadow-xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder=" "
                                        className={`w-full px-4 py-3.5 rounded-[24px] border bg-white outline-none text-[15px] text-[#303133] transition-all peer ${formData.name ? 'border-green-500' : 'border-gray-200'}`}
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute left-4 top-3.5 text-[#909399] text-[15px] transition-all pointer-events-none peer-focus:top-[-10px] peer-focus:left-3 peer-focus:text-[12px] peer-focus:bg-white peer-focus:px-2 peer-focus:text-[#2388FF] peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[#2388FF]"
                                    >
                                        Name
                                    </label>
                                </div>

                                {/* Email Field */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder=" "
                                        className={`w-full px-4 py-3.5 rounded-[24px] border bg-white outline-none text-[15px] text-[#303133] transition-all peer ${formData.email ? 'border-green-500' : 'border-gray-200'}`}
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-4 top-3.5 text-[#909399] text-[15px] transition-all pointer-events-none peer-focus:top-[-10px] peer-focus:left-3 peer-focus:text-[12px] peer-focus:bg-white peer-focus:px-2 peer-focus:text-[#2388FF] peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[#2388FF]"
                                    >
                                        Email
                                    </label>
                                </div>

                                {/* Subject Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder=" "
                                        className={`w-full px-4 py-3.5 rounded-[24px] border bg-white outline-none text-[15px] text-[#303133] transition-all peer ${formData.subject ? 'border-green-500' : 'border-gray-200'}`}
                                    />
                                    <label
                                        htmlFor="subject"
                                        className="absolute left-4 top-3.5 text-[#909399] text-[15px] transition-all pointer-events-none peer-focus:top-[-10px] peer-focus:left-3 peer-focus:text-[12px] peer-focus:bg-white peer-focus:px-2 peer-focus:text-[#2388FF] peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[#2388FF]"
                                    >
                                        Subject
                                    </label>
                                </div>

                                {/* Message Field */}
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder=" "
                                        className={`w-full px-4 py-3.5 rounded-[24px] border bg-white outline-none text-[15px] text-[#303133] transition-all resize-none peer ${formData.message ? 'border-green-500' : 'border-gray-200'}`}
                                    />
                                    <label
                                        htmlFor="message"
                                        className="absolute left-4 top-3.5 text-[#909399] text-[15px] transition-all pointer-events-none peer-focus:top-[-10px] peer-focus:left-3 peer-focus:text-[12px] peer-focus:bg-white peer-focus:px-2 peer-focus:text-[#2388FF] peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[#2388FF]"
                                    >
                                        Message
                                    </label>
                                </div>

                                {/* Success Message */}
                                {showSuccess && (
                                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                                        <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-[14px] font-medium">Thank you for contacting us! We'll get back to you soon.</span>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-[24px] bg-[#409EFF] text-white text-[16px] font-semibold hover:bg-[#3A8EEF] transition-all cursor-pointer shadow-md"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

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
        </main>
    );
}
