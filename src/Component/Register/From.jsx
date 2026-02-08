'use client'

import { postusers } from '@/Action/Server/register';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {

 const params = useSearchParams();
  const router = useRouter();
  const callbackUrl = params.get("callbackUrl") || "/";


    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister = async (data) => {
        setIsLoading(true);
        try {
        const result=   await postusers(data)
    
        if(result.message.acknowledged){
              router.push(callbackUrl);
        }
        else{
            alert(result.message)
        }
            
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2D5016] mb-2">
                        Create Account
                    </h2>
                    <p className="text-gray-600">
                        Join TrustCare and start your journey
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label className="block text-[#2D5016] font-medium mb-2 text-[18px]">
                                Name
                            </label>
                            <input
                                type="text"
                                {...register('name', { required: 'Name is required' })}
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-[#2D5016] placeholder-gray-400 focus:outline-none focus:border-[#A5C89E] focus:bg-white transition duration-200"
                                placeholder="Enter your name"
                            />
                            {errors.name && (
                                <p className='text-red-600 text-[14px] mt-1 flex items-center'>
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        {/* Nid no Field */}
                        <div>
                            <label className="block text-[#2D5016] font-medium mb-2 text-[18px]">
                                Nid No
                            </label>
                            <input
                                type="number"
                                {...register('nid', { required: 'nid is required' })}
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-[#2D5016] placeholder-gray-400 focus:outline-none focus:border-[#A5C89E] focus:bg-white transition duration-200"
                                placeholder="Enter your name"
                            />
                            {errors.nid && (
                                <p className='text-red-600 text-[14px] mt-1 flex items-center'>
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.nid.message}
                                </p>
                            )}
                        </div>
                        {/* contact Field */}
                        <div>
                            <label className="block text-[#2D5016] font-medium mb-2 text-[18px]">
                            Contact No
                            </label>
                            <input
                                type="number"
                                {...register('phone', { required: 'phone is required' })}
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-[#2D5016] placeholder-gray-400 focus:outline-none focus:border-[#A5C89E] focus:bg-white transition duration-200"
                                placeholder="Enter your name"
                            />
                            {errors.phone && (
                                <p className='text-red-600 text-[14px] mt-1 flex items-center'>
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-[#2D5016] font-medium mb-2 text-[18px]">
                                Email
                            </label>
                            <input
                                type="email"
                                {...register('email', { 
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
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

                        {/* Photo Field */}
                        <div>
                            <label className="block text-[#2D5016] font-medium mb-2 text-[18px]">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                {...register('photo', { required: 'Photo URL is required' })}
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-[#2D5016] placeholder-gray-400 focus:outline-none focus:border-[#A5C89E] focus:bg-white transition duration-200"
                                placeholder="Enter photo URL"
                            />
                            {errors.photo && (
                                <p className='text-red-600 text-[14px] mt-1 flex items-center'>
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.photo.message}
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
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters'
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                                        message: "Password must contain at least one uppercase and one lowercase letter"
                                    }
                                })}
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-[#2D5016] placeholder-gray-400 focus:outline-none focus:border-[#A5C89E] focus:bg-white transition duration-200"
                                placeholder="Enter your password"
                            />
                            {errors.password && (
                                <p className='text-red-600 text-[14px] mt-1 flex items-center'>
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.pass.message}
                                </p>
                            )}
                            <p className="text-gray-500 text-sm mt-2">
                                Must be at least 6 characters with uppercase and lowercase letters
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#2D5016] text-white py-3 px-4 rounded-lg font-semibold text-[17px] hover:bg-[#1F3D0A] transition duration-200 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Registering...</span>
                                </>
                            ) : (
                                <>
                                    <span>Register</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </>
                            )}
                        </button>

                        {/* Login Link */}
                        <p className="text-center text-gray-600 text-[16px]">
                            Already have an account?{' '}
                            <Link href='/login' className='font-semibold text-[#2D5016] hover:text-[#A5C89E] underline transition duration-200'>
                                Log in
                            </Link>
                        </p>
                    </form>
                </div>

                {/* Social Login Options (Optional) */}
                {/* <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-gradient-to-br from-[#e0e4e2] to-[#cfd4d0] text-gray-600">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center px-4 py-3 border-2 border-gray-300 rounded-lg hover:border-[#A5C89E] hover:bg-white transition duration-200 bg-white">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            <span className="text-gray-700 font-medium">Google</span>
                        </button>

                        <button className="flex items-center justify-center px-4 py-3 border-2 border-gray-300 rounded-lg hover:border-[#A5C89E] hover:bg-white transition duration-200 bg-white">
                            <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            <span className="text-gray-700 font-medium">Facebook</span>
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default RegisterForm;