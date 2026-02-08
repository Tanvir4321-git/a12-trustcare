'use client';

import Link from 'next/link';
import Title from '../Title';
import SubTitle from '../SubTitle';



export default function Banner() {
  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/banner.jpg)`,
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-[#2D5016]/50"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="">
          {/* Main Heading */}
          
          <h1 className='text-4xl text-white text-center md:text-5xl lg:text-6xl font-bold  leading-tight mb-6'> Compassionate care,
            exceptional results.</h1 >
          
          {/* Subheading */}
          
          <p className='text-lg md:text-xl text-gray-300 text-center leading-relaxed mb-10'> Professional caregiving services with love, dedication, and expertise.
Your loved ones deserve the best care, and we are here to provide it — ensuring comfort, dignity, and peace of mind every step of the way.</p>

          {/* CTA Button */}
          <div className="mb-12 flex justify-center">
            <Link href="/booking">
              <button className="group flex items-center space-x-3 bg-white text-[#2D5016] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#CCDFC4] transition duration-300 shadow-xl">
                <span>LET'S GET STARTED</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>

          {/* Stats Section */}
          <div className='flex justify-center'>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center md:text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">20+</div>
              <div className="text-sm md:text-base text-white/80 font-medium">Years Experience</div>
            </div>
            <div className="text-center md:text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">95%</div>
              <div className="text-sm md:text-base text-white/80 font-medium">Satisfaction Rate</div>
            </div>
            <div className="text-center md:text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">5,000+</div>
              <div className="text-sm md:text-base text-white/80 font-medium">Happy Families</div>
            </div>
            <div className="text-center md:text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">10+</div>
              <div className="text-sm md:text-base text-white/80 font-medium">Service Areas</div>
            </div>
          </div>
          </div>
        </div>
      </div>

     
    </section>
  );
}