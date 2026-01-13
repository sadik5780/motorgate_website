"use client";
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import OTPForm from './OTPForm';
import AddVehicleForm from './AddVehicleForm';
import SuccessStep from './SuccessStep';
import Stepper from './Stepper';
import RoleSelection from './RoleSelection';
import UserRegistration from './UserRegistration';

// --- Step Definitions ---
const CUSTOMER_STEPS = [
    { title: "Profile" },
    { title: "Vehicle" },
    { title: "Success" }
];

const VENDOR_STEPS = [
    { title: "Business Info" }, // Placeholder for now
    { title: "Verification" },
    { title: "Success" }
];

const AuthFlow = ({ onComplete }) => {
    // Phase State
    const [authPhase, setAuthPhase] = useState('LOGIN'); // 'LOGIN', 'OTP', 'ROLE_SELECTION', 'ONBOARDING', 'SUCCESS'
    const [userRole, setUserRole] = useState(null);
    const [providerType, setProviderType] = useState(null);

    // Stepper State (for Onboarding phase)
    const [currentStep, setCurrentStep] = useState(0);

    // --- Transitions ---
    const goToOTP = () => setAuthPhase('OTP');

    const onOTPVerified = () => {
        // Skip Role/Onboarding -> Go straight to Success
        setUserRole('customer');
        setAuthPhase('SUCCESS');
    };

    const handleNextStep = () => {
        const steps = getSteps();
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            handleOnboardingComplete();
        }
    };

    const handlePrevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        } else {
            setAuthPhase('ROLE_SELECTION');
        }
    };

    const handleOnboardingComplete = () => {
        setAuthPhase('SUCCESS');
    };

    const getSteps = () => {
        if (userRole === 'customer') return CUSTOMER_STEPS;
        if (userRole === 'vendor') return VENDOR_STEPS;
        return [];
    };

    // Render logic for Onboarding Wizard
    const renderOnboardingContent = () => {
        if (userRole === 'customer') {
            switch (currentStep) {
                case 0: return <UserRegistration onNext={handleNextStep} initialMobile="0551234567" />;
                case 1: return <AddVehicleForm onProceed={handleNextStep} onSkip={handleNextStep} />;
                case 2: setCurrentStep(2); return null; // Should trigger Success immediately via handleNextStep logic or just match length
                default: return null;
            }
        }
        if (userRole === 'vendor') {
            // Simplified Vendor Flow for Homepage Demo
            switch (currentStep) {
                case 0: return <UserRegistration onNext={handleNextStep} role="vendor" />; // Reusing UserRegistration as simplified business info
                case 1: return (
                    <div className="w-full text-center p-8">
                        <h3 className="text-lg font-semibold">Vendor Verification</h3>
                        <p className="text-zinc-500 mb-4">Upload documents logic here...</p>
                        <button onClick={handleNextStep} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Simulate Verification</button>
                    </div>
                );
                default: return null;
            }
        }
        return null;
    };

    // Main Render
    return (
        <div className="flex flex-col items-center w-full h-full p-6 animate-in fade-in duration-300">



            <div className="w-full flex flex-col items-center justify-center">
                {authPhase === 'LOGIN' && <LoginForm onLoginSuccess={goToOTP} />}

                {authPhase === 'OTP' && <OTPForm onVerify={onOTPVerified} onBack={() => setAuthPhase('LOGIN')} />}

                {authPhase === 'ONBOARDING' && renderOnboardingContent()}

                {authPhase === 'SUCCESS' && <SuccessStep onContinue={onComplete} />}
            </div>
        </div>
    );
};

export default AuthFlow;
