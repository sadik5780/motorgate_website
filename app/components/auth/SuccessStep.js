"use client";
import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

const SuccessStep = ({ onContinue }) => {
    const [count, setCount] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => prev - 1);
        }, 1000);

        const redirect = setTimeout(() => {
            window.location.href = 'http://localhost:5173/';
        }, 5000);

        return () => {
            clearInterval(timer);
            clearTimeout(redirect);
        };
    }, []);

    const handleManualRedirect = () => {
        window.location.href = 'http://localhost:5173/';
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in duration-300">
            {/* Green Bubbles Background Effect (css-only approximation) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-10 left-10 w-8 h-8 rounded-full bg-green-400"></div>
                <div className="absolute top-20 right-20 w-12 h-12 rounded-full bg-green-200"></div>
                <div className="absolute bottom-10 left-1/4 w-6 h-6 rounded-full bg-green-300"></div>
                <div className="absolute bottom-20 right-10 w-10 h-10 rounded-full bg-green-400"></div>
            </div>

            <div className="relative mb-6">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center relative z-10">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200">
                        <Check className="w-10 h-10 text-white stroke-[3]" />
                    </div>
                </div>
                {/* Decorative border/starburst effect could go here */}
            </div>

            <h2 className="text-2xl font-bold text-zinc-800 mb-2">You're All Set!</h2>
            <p className="text-zinc-500 mb-8">
                Welcome <span className="text-blue-500 font-medium">Mr. Sadik</span>
            </p>

            <button
                onClick={handleManualRedirect}
                className="w-full h-12 bg-[#409eff] hover:bg-blue-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
                Go to Dashboard ({count})
            </button>
        </div>
    );
};

export default SuccessStep;
