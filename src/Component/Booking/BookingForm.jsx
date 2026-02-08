'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { bookingfrom } from '@/Action/Server/booking';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function BookingForm({ serviceId }) {
    const router=useRouter()
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    duration: { value: 1, unit: 'days' },
    location: {},
    totalCost: 0
  });

  // Location data from Bangladesh
  const divisions = [
    'Dhaka', 'Chattogram', 'Rajshahi', 'Khulna', 'Barishal', 'Sylhet', 'Rangpur', 'Mymensingh'
  ];

  const districts = {
    'Dhaka': ['Dhaka', 'Gazipur', 'Narayanganj', 'Tangail', 'Munshiganj'],
    'Chattogram': ['Chattogram', 'Cox\'s Bazar', 'Cumilla', 'Feni', 'Noakhali'],
    'Rajshahi': ['Rajshahi', 'Bogra', 'Pabna', 'Sirajganj', 'Natore'],
    'Khulna': ['Khulna', 'Jessore', 'Satkhira', 'Bagerhat', 'Kushtia'],
    'Barishal': ['Barishal', 'Patuakhali', 'Bhola', 'Pirojpur', 'Jhalokathi'],
    'Sylhet': ['Sylhet', 'Moulvibazar', 'Habiganj', 'Sunamganj'],
    'Rangpur': ['Rangpur', 'Dinajpur', 'Lalmonirhat', 'Nilphamari', 'Gaibandha'],
    'Mymensingh': ['Mymensingh', 'Jamalpur', 'Netrokona', 'Sherpur']
  };

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

  const watchDivision = watch('division');
  const watchDuration = watch('duration');
  const watchDurationUnit = watch('durationUnit');

  // Calculate total cost
  useEffect(() => {
    const duration = parseInt(watchDuration) || 1;
    const unit = watchDurationUnit || 'days';
    
    // Base rate per hour (you can change this)
    const hourlyRate = 200; // BDT per hour
    
    let totalHours = 0;
    if (unit === 'hours') {
      totalHours = duration;
    } else if (unit === 'days') {
      totalHours = duration * 24;
    }
    
    const cost = totalHours * hourlyRate;
    setBookingData(prev => ({ ...prev, totalCost: cost }));
  }, [watchDuration, watchDurationUnit]);

  const onSubmit = async (data) => {
    if (currentStep < 3) {
      // Move to next step
      setCurrentStep(currentStep + 1);
      setBookingData(prev => ({
        ...prev,
        duration: { value: data.duration, unit: data.durationUnit },
        location: {
          division: data.division,
          district: data.district,
          city: data.city,
          area: data.area,
          address: data.address
        }
      }));
    } else {
      // Final submission
      try {
       const payload = { ...bookingData, ...data }; 
       const result=await bookingfrom(payload)
       
       toast('Booking confirmed successfully!');
       router.push('/')
      } catch (error) {
        console.error(error);
       toast('Booking failed. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D5016] mb-2">
            Book Your Service
          </h1>
          <p className="text-gray-600">
            Complete the steps below to confirm your booking
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step <= currentStep
                      ? 'bg-[#2D5016] text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 md:w-24 h-1 mx-2 ${
                      step < currentStep ? 'bg-[#2D5016]' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 px-4">
            <span className={`text-sm font-medium ${currentStep >= 1 ? 'text-[#2D5016]' : 'text-gray-500'}`}>
              
            </span>
            <span className={`text-sm font-medium ${currentStep >= 2 ? 'text-[#2D5016]' : 'text-gray-500'}`}>
              
            </span>
            <span className={`text-sm font-medium ${currentStep >= 3 ? 'text-[#2D5016]' : 'text-gray-500'}`}>
            
            </span>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step 1: Duration */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#2D5016] mb-6">
                  Select Duration
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Duration Value */}
                  <div>
                    <label className="block text-[#2D5016] font-medium mb-2 text-[18px]">
                      Duration
                    </label>
                    <input
                      type="number"
                      min="1"
                      defaultValue={1}
                      {...register('duration', { required: 'Duration is required', min: 1 })}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-[#2D5016] placeholder-gray-400 focus:outline-none focus:border-[#A5C89E] focus:bg-white transition duration-200"
                      placeholder="Enter duration"
                    />
                    {errors.duration && (
                      <p className='text-red-600 text-[14px] mt-1'>
                        {errors.duration.message}
                      </p>
                    )}
                  </div>

                  {/* Duration Unit */}
                  <div>
                    <label className="block text-[#2D5016] font-medium mb-2 text-[18px]">
                      Unit
                    </label>
                    <select
                      {...register('durationUnit', { required: 'Please select unit' })}
                      defaultValue="days"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-[#2D5016] focus:outline-none focus:border-[#A5C89E] focus:bg-white transition duration-200"
                    >
                      <option value="hours">Hours</option>
                      <option value="days">Days</option>
                    </select>
                  </div>
                </div>

                {/* Cost Preview */}
                <div className="bg-gradient-to-br from-[#CCDFC4] to-[#A5C89E] rounded-xl p-6 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[#2D5016] font-medium text-lg">
                      Estimated Cost:
                    </span>
                    <span className="text-[#2D5016] font-bold text-2xl">
                      ৳{bookingData.totalCost.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-[#2D5016]/80 text-sm mt-2">
                    Rate: ৳200 per hour
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2D5016] text-white py-3 px-4 rounded-lg font-semibold text-[17px] hover:bg-[#1F3D0A] transition duration-200 shadow-lg"
                >
                  Next: Select Location
                </button>
              </div>
            )}

            {/* Step 2: Location */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#2D5016]">
                    Select Location
                  </h2>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-[#7DAA6F] hover:text-[#2D5016] font-medium"
                  >
                    ← Back
                  </button>
                </div>

                {/* Division */}
                <div>
                  <label className="block text-[#2D5016] font-medium mb-2 text-[18px]">
                    Division
                  </label>
                  <select
                    {...register('division', { required: 'Division is required' })}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-[#2D5016] focus:outline-none focus:border-[#A5C89E] focus:bg-white transition duration-200"
                  >
                    <option value="">Select Division</option>
                    {divisions.map(div => (
                      <option key={div} value={div}>{div}</option>
                    ))}
                  </select>
                  {errors.division && (
                    <p className='text-red-600 text-[14px] mt-1'>
                      {errors.division.message}
                    </p>
                  )}
                </div>

                {/* District */}
                <div>
                  <label className="block text-[#2D5016] font-medium mb-2 text-[18px]">
                    District
                  </label>
                  <select
                    {...register('district', { required: 'District is required' })}
                    disabled={!watchDivision}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-[#2D5016] focus:outline-none focus:border-[#A5C89E] focus:bg-white transition duration-200 disabled:opacity-50"
                  >
                    <option value="">Select District</option>
                    {watchDivision && districts[watchDivision]?.map(dist => (
                      <option key={dist} value={dist}>{dist}</option>
                    ))}
                  </select>
                  {errors.district && (
                    <p className='text-red-600 text-[14px] mt-1'>
                      {errors.district.message}
                    </p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="block text-[#2D5016] font-medium mb-2 text-[18px]">
                    City/Upazila
                  </label>
                  <input
                    type="text"
                    {...register('city', { required: 'City is required' })}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-[#2D5016] placeholder-gray-400 focus:outline-none focus:border-[#A5C89E] focus:bg-white transition duration-200"
                    placeholder="Enter city or upazila"
                  />
                  {errors.city && (
                    <p className='text-red-600 text-[14px] mt-1'>
                      {errors.city.message}
                    </p>
                  )}
                </div>

                {/* Area */}
                <div>
                  <label className="block text-[#2D5016] font-medium mb-2 text-[18px]">
                    Area/Thana
                  </label>
                  <input
                    type="text"
                    {...register('area', { required: 'Area is required' })}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-[#2D5016] placeholder-gray-400 focus:outline-none focus:border-[#A5C89E] focus:bg-white transition duration-200"
                    placeholder="Enter area or thana"
                  />
                  {errors.area && (
                    <p className='text-red-600 text-[14px] mt-1'>
                      {errors.area.message}
                    </p>
                  )}
                </div>

                {/* Full Address */}
                <div>
                  <label className="block text-[#2D5016] font-medium mb-2 text-[18px]">
                    Full Address
                  </label>
                  <textarea
                    {...register('address', { required: 'Address is required' })}
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-[#2D5016] placeholder-gray-400 focus:outline-none focus:border-[#A5C89E] focus:bg-white transition duration-200"
                    placeholder="House/Flat no, Road, Block, etc."
                  />
                  {errors.address && (
                    <p className='text-red-600 text-[14px] mt-1'>
                      {errors.address.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2D5016] text-white py-3 px-4 rounded-lg font-semibold text-[17px] hover:bg-[#1F3D0A] transition duration-200 shadow-lg"
                >
                  Next: Review & Confirm
                </button>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#2D5016]">
                    Confirm Booking
                  </h2>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="text-[#7DAA6F] hover:text-[#2D5016] font-medium"
                  >
                    ← Back
                  </button>
                </div>

                {/* Booking Summary */}
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <h3 className="font-bold text-[#2D5016] text-lg mb-4">
                    Booking Summary
                  </h3>

                  {/* Duration */}
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium text-[#2D5016]">
                      {bookingData.duration.value} {bookingData.duration.unit}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="py-3 border-b border-gray-200">
                    <span className="text-gray-600 block mb-2">Location:</span>
                    <div className="font-medium text-[#2D5016] text-sm space-y-1">
                      <p>{bookingData.location.division}, {bookingData.location.district}</p>
                      <p>{bookingData.location.city}, {bookingData.location.area}</p>
                      <p className="text-gray-600">{bookingData.location.address}</p>
                    </div>
                  </div>

                  {/* Total Cost */}
                  <div className="flex justify-between py-4 bg-gradient-to-br from-[#CCDFC4] to-[#A5C89E] rounded-lg px-4 mt-4">
                    <span className="font-bold text-[#2D5016] text-lg">
                      Total Cost:
                    </span>
                    <span className="font-bold text-[#2D5016] text-2xl">
                      ৳{bookingData.totalCost.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <div className="flex">
                    <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-blue-700">
                      By confirming this booking, you agree to our terms and conditions. 
                      A confirmation will be sent to your email.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-[#2D5016] text-white py-3 px-4 rounded-lg font-semibold text-[17px] hover:bg-[#1F3D0A] transition duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Confirm Booking'
                    )}
                  </button>
                  
                  <Link href="/" className="flex-1">
                    <button
                      type="button"
                      className="w-full border-2 border-[#2D5016] text-[#2D5016] py-3 px-4 rounded-lg font-semibold hover:bg-[#2D5016] hover:text-white transition duration-200"
                    >
                      Cancel
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}