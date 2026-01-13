"use client";
import React, { useState, useEffect } from 'react';

const OTPForm = ({ onVerify, onBack }) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Focus next input
        if (element.nextSibling && element.value !== "") {
            element.nextSibling.focus();
        }
    };

    const handleVerify = () => {
        // Mock verification
        onVerify();
    };

    return (
        <div className="w-full max-w-[420px] mx-auto">
            {/* Title - Outside Card */}
            <h2 className="text-xl text-left font-semibold text-zinc-800 mb-3 text-[#303133]">
                Enter OTP
            </h2>

            {/* Card with Shadow, No Border */}
            <div className="bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">

                {/* Description with Change Number Link */}
                <div className="flex justify-between items-center mb-4">
                    <p className="text-xs text-zinc-400">
                        OTP has been sent to your Mobile Number
                    </p>
                    <button
                        onClick={onBack}
                        className="text-xs text-blue-500 hover:text-blue-600 font-medium transition-colors whitespace-nowrap cursor-pointer"
                    >
                        Change Number
                    </button>
                </div>

                {/* OTP Input Boxes - 4px Border Radius */}
                <div className="flex gap-2 justify-between mb-4">
                    {otp.map((data, index) => (
                        <input
                            className="w-12 h-12 text-center border rounded-[4px] text-lg font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white border-zinc-200 text-zinc-900 transition-all placeholder:text-zinc-300"
                            type="text"
                            name="otp"
                            maxLength="1"
                            key={index}
                            value={data}
                            placeholder="–"
                            onChange={e => handleChange(e.target, index)}
                            onFocus={e => e.target.select()}
                            autoFocus={index === 0}
                        />
                    ))}
                </div>

                {/* Resend Code Timer */}
                <p className="text-xs text-zinc-400 mb-3">
                    Resend code (after {timeLeft}s)
                </p>

                {/* Didn't get OTP? Resend */}
                <p className="text-xs text-zinc-500 mb-4">
                    Didn't get OTP?{' '}
                    <button
                        disabled={timeLeft > 0}
                        onClick={() => setTimeLeft(30)}
                        className="text-blue-500 hover:text-blue-600 font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-opacity cursor-pointer"
                    >
                        Resend
                    </button>
                </p>

                {/* Verify Button - 4px Border Radius */}
                <button
                    onClick={handleVerify}
                    className="w-full h-10 bg-[#93C5FD] hover:bg-blue-400 text-white text-sm font-semibold rounded-[4px] transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
                >
                    Verify OTP
                </button>
            </div>
        </div>
    );
};

export default OTPForm;
