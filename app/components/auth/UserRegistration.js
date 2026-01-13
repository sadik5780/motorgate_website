"use client";
import React, { useState, useEffect } from 'react';


const UserRegistration = ({ onNext, initialMobile, role = 'customer' }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: initialMobile || '',
        role: role
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (role) {
            setFormData(prev => ({ ...prev, role }));
        }
    }, [role]);

    useEffect(() => {
        if (initialMobile) {
            setFormData(prev => ({ ...prev, mobile: initialMobile }));
        }
    }, [initialMobile]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Mock API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            const registrationData = {
                ...formData,
                id: `user_${Math.random().toString(36).substr(2, 9)}`,
            };

            console.log('User registered:', registrationData);
            setSuccess(true);

            if (onNext) {
                setTimeout(() => onNext(), 1000);
            } else {
                setFormData({ firstName: '', lastName: '', email: '', mobile: '', role: 'customer' });
                setTimeout(() => setSuccess(false), 3000);
            }
        } catch (err) {
            setError(err.message || 'Failed to update profile');
        } finally {
            setLoading(false);
        }
    };

    const isEmbedded = !!onNext;

    return (
        <div className={`w-full ${isEmbedded ? '' : 'max-w-2xl mx-auto p-6'}`}>
            {!isEmbedded && <h1 className="text-2xl font-bold mb-6">User Registration</h1>}

            {success && (
                <div className="mb-4 p-4 bg-green-50 text-green-800 rounded-lg flex items-center gap-2">
                    Profile saved successfully!
                </div>
            )}

            {error && (
                <div className="mb-4 p-4 bg-red-50 text-red-800 rounded-lg">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-zinc-700">
                            First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-zinc-900 transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-zinc-700">
                            Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-zinc-900 transition-all"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-zinc-700">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-zinc-900 transition-all"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-zinc-700">
                        Mobile <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        disabled={!!initialMobile}
                        placeholder="+91XXXXXXXXXX"
                        className="w-full px-3 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-zinc-900 transition-all disabled:opacity-70 disabled:bg-gray-50"
                    />
                </div>

                {!isEmbedded ? (
                    <div>
                        <label className="block text-sm font-medium mb-1 text-zinc-700">
                            Role <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-zinc-900"
                        >
                            <option value="customer">Customer</option>
                            <option value="vendor">Vendor</option>
                        </select>
                    </div>
                ) : null}

                <button
                    type="submit"
                    disabled={loading || success}
                    className="w-full h-12 bg-[#93C5FD] hover:bg-blue-400 text-white text-sm font-semibold rounded-[4px] transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer mt-4"
                >
                    {loading ? 'Saving...' : 'Continue'}
                </button>
            </form>
        </div>
    );
};

export default UserRegistration;
