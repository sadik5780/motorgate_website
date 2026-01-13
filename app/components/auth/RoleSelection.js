"use client";
import React, { useState } from 'react';
import { User, Briefcase, Wrench, ChevronRight } from 'lucide-react';

const RoleSelection = ({ onRoleSelect }) => {
    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedProviderType, setSelectedProviderType] = useState(null);

    const handleContinue = () => {
        if (selectedRole === 'customer') {
            onRoleSelect('customer');
        } else if (selectedRole === 'vendor' && selectedProviderType) {
            onRoleSelect('vendor', selectedProviderType);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-zinc-900">Choose your account type</h2>
                <p className="text-zinc-500 mt-2 text-sm">Select how you want to use MotorGate</p>
            </div>

            <div className="space-y-6">
                {/* Level 1: Role Selection */}
                <div className="grid md:grid-cols-2 gap-4">
                    {/* Customer Card */}
                    <div
                        onClick={() => { setSelectedRole('customer'); setSelectedProviderType(null); }}
                        className={`cursor-pointer p-6 rounded-2xl transition-all hover:shadow-md border-2 ${selectedRole === 'customer'
                                ? "border-blue-600 bg-blue-50 ring-2 ring-blue-100"
                                : "border-gray-200 bg-white hover:border-blue-200"
                            }`}
                    >
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className={`p-4 rounded-full ${selectedRole === 'customer' ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
                                }`}>
                                <User className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-zinc-900">Vehicle Owner</h3>
                                <p className="text-sm text-zinc-500 mt-1">
                                    I want to book services, maintain my vehicle, and track history.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Vendor Card */}
                    <div
                        onClick={() => setSelectedRole('vendor')}
                        className={`cursor-pointer p-6 rounded-2xl transition-all hover:shadow-md border-2 ${selectedRole === 'vendor'
                                ? "border-blue-600 bg-blue-50 ring-2 ring-blue-100"
                                : "border-gray-200 bg-white hover:border-blue-200"
                            }`}
                    >
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className={`p-4 rounded-full ${selectedRole === 'vendor' ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
                                }`}>
                                <Briefcase className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-zinc-900">Service Provider</h3>
                                <p className="text-sm text-zinc-500 mt-1">
                                    I provide automotive services, repairs, or sell parts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Level 2: Provider Subtype Selection */}
                {selectedRole === 'vendor' && (
                    <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-300">
                        <h4 className="text-sm font-semibold text-zinc-900 mb-4 px-1">Select Provider Type</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            <button
                                type="button"
                                onClick={() => setSelectedProviderType('workshop')}
                                className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${selectedProviderType === 'workshop'
                                        ? "border-blue-600 bg-white shadow-sm"
                                        : "border-gray-200 bg-gray-50 hover:bg-white hover:border-blue-200"
                                    }`}
                            >
                                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                                    <Briefcase className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <div className="font-semibold text-zinc-900">Workshop / Merchant</div>
                                    <div className="text-xs text-zinc-500">Service centers, shops, and garages</div>
                                </div>
                                {selectedProviderType === 'workshop' && <div className="w-3 h-3 bg-blue-600 rounded-full" />}
                            </button>

                            <button
                                type="button"
                                onClick={() => setSelectedProviderType('technician')}
                                className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${selectedProviderType === 'technician'
                                        ? "border-blue-600 bg-white shadow-sm"
                                        : "border-gray-200 bg-gray-50 hover:bg-white hover:border-blue-200"
                                    }`}
                            >
                                <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                                    <Wrench className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <div className="font-semibold text-zinc-900">Technician / Freelancer</div>
                                    <div className="text-xs text-zinc-500">Mobile mechanics and individual pros</div>
                                </div>
                                {selectedProviderType === 'technician' && <div className="w-3 h-3 bg-blue-600 rounded-full" />}
                            </button>
                        </div>
                    </div>
                )}

                <div className="pt-6">
                    <button
                        onClick={handleContinue}
                        disabled={!selectedRole || (selectedRole === 'vendor' && !selectedProviderType)}
                        className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                        Continue
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoleSelection;
