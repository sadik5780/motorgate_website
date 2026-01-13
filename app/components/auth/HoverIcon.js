"use client";
import React, { useState } from 'react';

const HoverIcon = ({ src, alt, text, className, position = 'top' }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`${className?.includes('absolute') ? '' : 'relative'} flex flex-col items-center justify-center cursor-pointer ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
            />

            <div
                className={`absolute ${position === 'bottom' ? 'top-full mt-2' : '-top-10'} left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap transition-opacity duration-200 pointer-events-none z-50 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            >
                {text}
            </div>
        </div>
    );
};

export default HoverIcon;
