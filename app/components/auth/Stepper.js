"use client";
import React from 'react';
import { Check } from 'lucide-react';

const Stepper = ({ steps, currentStep }) => {
    return (
        <div className="w-full flex items-center justify-between px-4 mb-8">
            {steps.map((step, index) => {
                const isCompleted = index < currentStep;
                const isCurrent = index === currentStep;
                const isPending = index > currentStep;

                return (
                    <React.Fragment key={index}>
                        <div className="flex flex-col items-center relative z-10">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 border-2 ${isCompleted
                                        ? 'bg-green-500 border-green-500 text-white'
                                        : isCurrent
                                            ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200'
                                            : 'bg-white border-zinc-200 text-zinc-400'
                                    }`}
                            >
                                {isCompleted ? <Check className="w-4 h-4" /> : index + 1}
                            </div>
                            <span
                                className={`absolute -bottom-6 text-xs font-medium whitespace-nowrap transition-colors duration-300 ${isCurrent ? 'text-blue-600' : 'text-zinc-400'
                                    }`}
                            >
                                {step.title}
                            </span>
                        </div>
                        {index < steps.length - 1 && (
                            <div className="flex-1 h-[2px] mx-2 bg-zinc-100 relative">
                                <div
                                    className={`absolute top-0 left-0 h-full bg-green-500 transition-all duration-500`}
                                    style={{ width: isCompleted ? '100%' : '0%' }}
                                />
                            </div>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default Stepper;
