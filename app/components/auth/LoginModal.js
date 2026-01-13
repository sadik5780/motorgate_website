"use client";
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import AuthFlow from './AuthFlow';

const LoginModal = ({ isOpen, onClose }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            {/* Modal Container - Simple Centered Card to match mg_feature */}
            {/* Removed overflow-y-auto and max-h to allow country dropdown to overflow visually */}
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-visible animate-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-50 p-2 rounded-full hover:bg-zinc-100 transition-colors cursor-pointer text-zinc-400 hover:text-zinc-800"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Content - AuthFlow handles its own padding (p-6) */}
                <AuthFlow onComplete={onClose} />
            </div>
        </div>
    );
};

export default LoginModal;
