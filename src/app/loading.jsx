'use client';

// Simple Spinner Loading (Default)
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#e0e4e2] to-[#cfd4d0]">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-[#A5C89E]/30 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-[#2D5016] border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        {/* Text */}
        <p className="text-[#2D5016] text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}

// Dots Loading - use করতে চাইলে export করুন
export function DotsLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#e0e4e2] to-[#cfd4d0]">
      <div className="text-center">
        <div className="flex space-x-2 justify-center mb-4">
          <div className="w-4 h-4 bg-[#2D5016] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-4 h-4 bg-[#2D5016] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-4 h-4 bg-[#2D5016] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
        <p className="text-[#2D5016] text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}

// Pulse Loading - use করতে চাইলে export করুন
export function PulseLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#e0e4e2] to-[#cfd4d0]">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 bg-[#A5C89E] rounded-full animate-ping opacity-75"></div>
          <div className="relative bg-[#2D5016] rounded-full w-20 h-20 flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>
        <p className="text-[#2D5016] text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}

// Bar Loading - use করতে চাইলে export করুন
export function BarLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#e0e4e2] to-[#cfd4d0]">
      <div className="text-center w-64">
        <div className="mb-4">
          <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#A5C89E] to-[#2D5016] rounded-full animate-pulse" style={{ width: '70%' }}></div>
          </div>
        </div>
        <p className="text-[#2D5016] text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}