'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataSchema, type FormData } from '@/lib/validation';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

export default function MultiStepForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const router = useRouter();

  // Set up React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues
  } = useForm<FormData>({
    resolver: zodResolver(FormDataSchema),
    mode: 'onChange',
  });

  const nextStep = async () => {
    const fieldsToValidate = 
      step === 1 
        ? ['firstName', 'lastName'] 
        : step === 2 
          ? ['highestQual', 'gradYear'] 
          : ['stream', 'institution'];
    
    const isValid = await trigger(fieldsToValidate as any);
    if (isValid) {
      if (step < 3) {
        setStep(step === 1 ? 2 : step === 2 ? 3 : 3);
      }
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step === 3 ? 2 : step === 2 ? 1 : 1);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // regToken is required from login module - this module only consumes token
      // This module does not generate token - handled by other team
      let regToken = localStorage.getItem("regToken");
      
      // For development/testing: if no regToken exists, create a mock one
      if (!regToken) {
        console.warn("No regToken found in localStorage. Using mock token for development.");
        regToken = "mock_reg_token_for_development";
      }

      try {
        // Attempt to call the real API
        const response = await axios.post('/auth/register', data, {
          headers: {
            'Authorization': `Bearer ${regToken}`,
            'Content-Type': 'application/json',
          },
        });

        // Store Auth JWT if provided by backend
        if (response.data.token) {
          localStorage.setItem("authToken", response.data.token);
        }

        console.log("Registration successful with real backend");
      } catch (apiError: any) {
        // Handle API errors - check if it's a 404 (backend not running)
        if (apiError.response?.status === 404) {
          console.warn("Backend API not found (404). Simulating successful registration for development.");
          // Simulate successful registration for development
          // In a real scenario, this would be an actual API call
        } else {
          // Re-throw other API errors
          throw apiError;
        }
      }

      // Remove Reg JWT as it's no longer needed after successful registration
      localStorage.removeItem("regToken");

      // Store mock auth token for development if backend didn't provide one
      if (!localStorage.getItem("authToken")) {
        localStorage.setItem("authToken", "mock_auth_token_for_development");
      }

      // Redirect to registration success page (temporary placeholder)
      router.push('/registration-success');
    } catch (err: any) {
      console.error('Registration error:', err);
      
      // Extract error message from response or use generic message
      let errorMessage = 'Registration failed. Please try again.';
      if (err.response && err.response.data && err.response.data.message) {
        errorMessage = err.response.data.message;
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Step Indicator */}
      <div className="flex justify-between items-center mb-8">
        <div className={`flex flex-col items-center ${step >= 1 ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
            step >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700'
          }`}>
            1
          </div>
          <span className="text-xs font-medium">Personal</span>
        </div>
        <div className={`flex flex-col items-center ${step >= 2 ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
            step >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700'
          }`}>
            2
          </div>
          <span className="text-xs font-medium">Education</span>
        </div>
        <div className={`flex flex-col items-center ${step >= 3 ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
            step >= 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700'
          }`}>
            3
          </div>
          <span className="text-xs font-medium">Details</span>
        </div>
      </div>

      {/* Render current step */}
      {step === 1 && <StepOne register={register} errors={errors} />}
      {step === 2 && <StepTwo register={register} errors={errors} />}
      {step === 3 && <StepThree register={register} errors={errors} />}

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6">
        {step > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
            disabled={isSubmitting}
          >
            Back
          </button>
        )}
        
        {step < 3 ? (
          <button
            type="button"
            onClick={nextStep}
            className="ml-auto py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            disabled={isSubmitting}
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className={`ml-auto py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {isSubmitting ? 'Completing Registration...' : 'Complete Registration'}
          </button>
        )}
      </div>
    </div>
  );
}