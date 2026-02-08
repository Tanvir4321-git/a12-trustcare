'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from "next-auth/react"

import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
const LoginForm = () => {
    const params = useSearchParams();
    const router = useRouter();
    const callback = params.get("callbackUrl") || "/";
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const handleLogin = async (data) => {
        try {

            const result = await signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false
            }
            )
         
            
              if (result?.error) {
    // show toast
    toast(result.error || "Invalid credentials");
    return; 
  }

  // login successful
  toast("Login successful!");
  router.push(callback);


        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2D5016] mb-2">
                        Welcome Back
                    </h2>
                    <p className="text-gray-600">
                        Log in to your TrustCare account
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label className="block text-[#2D5016] font-medium mb-2 text-[18px]">
                                Email
                            </label>
                            <input
                                type="email"
                                {...register('email', { required: 'Email is required' })}
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-[#2D5016] placeholder-gray-400 focus:outline-none focus:border-[#A5C89E] focus:bg-white transition duration-200"
                                placeholder="Enter your email"
                            />
                            {errors.email && (
                                <p className='text-red-600 text-[14px] mt-1 flex items-center'>
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-[#2D5016] font-medium mb-2 text-[18px]">
                                Password
                            </label>
                            <input
                                type="password"
                                {...register('password', { required: 'Password is required' })}
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-[#2D5016] placeholder-gray-400 focus:outline-none focus:border-[#A5C89E] focus:bg-white transition duration-200"
                                placeholder="Enter your password"
                            />
                            {errors.password && (
                                <p className='text-red-600 text-[14px] mt-1 flex items-center'>
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#2D5016] text-white py-3 px-4 rounded-lg font-semibold text-[17px] hover:bg-[#1F3D0A] transition duration-200 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Logging in...</span>
                                </>
                            ) : (
                                <span>Log In</span>
                            )}
                        </button>

                        {/* Register Link */}
                        <p className="text-center text-gray-600 text-[16px]">
                            Don't have an account?{' '}
                            <Link href='/register' className='font-semibold text-[#2D5016] hover:text-[#A5C89E] underline transition duration-200'>
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;