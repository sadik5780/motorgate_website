"use client";
import React, { useState, useMemo } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { countries } from './countries';

const LoginForm = ({ onLoginSuccess }) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Default to SA or fallback to first
    const defaultCountry = countries.find(c => c.code === 'sa') || countries[0];
    const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCountries = useMemo(() => {
        return countries.filter(country =>
            country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            country.dial_code.includes(searchQuery)
        );
    }, [searchQuery]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const phoneRegex = /^[0-9]{6,15}$/;
        const cleanNumber = mobileNumber.replace(/\s/g, '');

        if (!phoneRegex.test(cleanNumber)) {
            setError('Please enter a valid mobile number');
            setLoading(false);
            return;
        }

        // Simulate login success
        setTimeout(() => {
            setLoading(false);
            if (onLoginSuccess) onLoginSuccess();
        }, 1000);
    };

    return (

        <div className="w-full max-w-[420px] mx-auto">
            <h2 className="text-xl text-left font-semibold text-zinc-800 mb-3 text-[#303133]">
                Let's Get Started
            </h2>

            <div className="bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-1.5 ">
                        <label className="block text-xs text-left font-medium text-zinc-500">
                            Mobile <span className="text-red-500">*</span>
                        </label>
                        {/* Mobile input with country code */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter Mobile Number"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                                className="w-full pl-[110px] pr-3 h-12 rounded-[4px] border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                                required
                                autoFocus
                            />
                            {/* Flag Selection Trigger */}
                            <button
                                type="button"
                                className="absolute top-1/2 left-3 transform -translate-y-1/2 flex items-center gap-2 cursor-pointer border-r border-zinc-200 pr-2 h-5 text-black hover:bg-zinc-50 rounded-sm transition-colors"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <img
                                    src={`https://flagcdn.com/w40/${selectedCountry.code}.png`}
                                    alt={selectedCountry.name}
                                    className="w-6 h-4 rounded-[2px] object-cover"
                                />
                                <span className="text-sm font-medium text-zinc-600">{selectedCountry.dial_code}</span>
                                <ChevronDown size={12} className="text-zinc-400" />
                            </button>

                            {/* Dropdown Menu */}
                            {dropdownOpen && (
                                <div className="absolute top-full left-0 mt-1 w-[280px] bg-white border border-zinc-100 rounded-lg shadow-xl z-20 overflow-hidden flex flex-col max-h-[300px]">

                                    {/* Search Input */}
                                    <div className="p-2 border-b border-zinc-100 sticky top-0 bg-white z-10">
                                        <div className="relative">
                                            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-zinc-400 h-3 w-3" />
                                            <input
                                                type="text"
                                                placeholder="Search country..."
                                                className="w-full pl-7 pr-3 py-1.5 text-xs rounded-md bg-zinc-50 border-none focus:ring-1 focus:ring-blue-500 text-zinc-800 placeholder:text-zinc-400 outline-none"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                autoFocus
                                            />
                                        </div>
                                    </div>

                                    {/* Country List */}
                                    <div className="overflow-y-auto flex-1 scrollbar-thin">
                                        {filteredCountries.length > 0 ? (
                                            filteredCountries.map((country) => (
                                                <div
                                                    key={country.code}
                                                    className={`flex items-center gap-3 px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors ${selectedCountry.code === country.code ? 'bg-blue-50' : ''}`}
                                                    onClick={() => {
                                                        setSelectedCountry(country);
                                                        setDropdownOpen(false);
                                                        setSearchQuery('');
                                                    }}
                                                >
                                                    <img
                                                        src={`https://flagcdn.com/w40/${country.code}.png`}
                                                        alt={country.name}
                                                        className="w-5 h-3.5 rounded-[2px] object-cover shadow-sm border border-black/5"
                                                        loading="lazy"
                                                    />
                                                    <span className="text-sm font-medium text-zinc-700 w-12">{country.dial_code}</span>
                                                    <span className="text-sm text-zinc-500 truncate flex-1 text-right">{country.name}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="p-4 text-center">
                                                <p className="text-xs text-zinc-500">No countries found</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {error && <p className="text-xs text-red-500 bg-red-50 px-3 py-2 rounded-lg border border-red-100">{error}</p>}

                    <button
                        type="submit"
                        className="w-full h-12 bg-[#93C5FD] hover:bg-blue-400 text-white text-sm font-semibold rounded-[4px] transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? 'Requesting OTP...' : 'Request OTP'}
                    </button>
                </form>

                {/* Divider with "Or" */}
                <div className="flex items-center my-4">
                    <span className="flex-1 border-t border-zinc-200"></span>
                    <span className="px-3 text-zinc-500 text-sm font-medium">Or</span>
                    <span className="flex-1 border-t border-zinc-200"></span>
                </div>

                {/* Social login buttons */}
                <div className="grid grid-cols-2 gap-3">
                    <button className="h-12 flex items-center justify-center gap-2 rounded-[4px] border border-zinc-200 bg-white text-sm font-medium text-zinc-600 hover:bg-gray-50 hover:border-zinc-300 transition-all duration-200 cursor-pointer">
                        <svg className="h-4 w-4" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        Google
                    </button>

                    <button className="h-12 flex items-center justify-center gap-2 rounded-[4px] border border-zinc-200 bg-white text-sm font-medium text-zinc-700 hover:bg-gray-50 hover:border-zinc-300 transition-all duration-200 cursor-pointer">
                        <svg className="h-4 w-4 fill-current text-black" viewBox="0 0 24 24">
                            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.35-1.09-.56-2.09-.48-3.08.35-1.04.86-1.93.42-2.72-.85-4.14-6.6-1.55-11.04 2.85-11.23 1.25-.09 2.22.42 2.94.75.9.42 1.95.14 2.82-.75.78-.85 1.54-.7 2.02-.56 2.86.81 3.51 3.37 3.55 3.46-.04.04-2.12 1.25-1.93 4.25.19 3.1 2.37 4.13 2.52 4.18-.81 2.29-1.97 4.54-3.41 5.86zM12.03 7.25c-.15-2.29 1.57-4.12 3.66-4.22.37 2.34-1.98 4.29-3.66 4.22z" />
                        </svg>
                        Apple
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
