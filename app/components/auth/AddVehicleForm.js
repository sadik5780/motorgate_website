"use client";
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const AddVehicleForm = ({ onProceed, onSkip }) => {
    const [vin, setVin] = useState('');

    return (
        <div className="w-full max-w-[420px] mx-auto">
            {/* Title and Skip Button - Outside Card */}
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold text-zinc-800 text-[#303133]">
                    Add Vehicle
                </h2>
                <button
                    onClick={onSkip}
                    className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-500 px-5 py-2 rounded-full border border-blue-300 hover:border-blue-400 transition-all cursor-pointer"
                >
                    Skip <ChevronRight size={14} />
                </button>
            </div>

            {/* Card with Shadow, No Border */}
            <div className="bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <label className="block text-sm font-medium text-zinc-500 mb-2">
                    Enter VIN Number
                </label>

                <input
                    type="text"
                    placeholder="— — — — — — — — — — — — — — — — —"
                    value={vin}
                    onChange={(e) => setVin(e.target.value)}
                    className="w-full h-12 px-4 rounded-[4px] border text-center tracking-widest uppercase mb-4 bg-white border-zinc-200 text-zinc-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    autoFocus
                />

                <button
                    onClick={onProceed}
                    className="w-full h-12 bg-[#93C5FD] hover:bg-blue-400 text-white text-sm font-semibold rounded-[4px] transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
                >
                    Proceed
                </button>
            </div>
        </div>
    );
};

export default AddVehicleForm;
