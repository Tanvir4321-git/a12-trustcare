'use client';

import Link from "next/link";
import Title from "../Title";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gray-600 font-semibold text-[18px] uppercase tracking-wider mb-2 block">
            About TrustCare
          </span>
        
           <Title>Our Mission & Vision</Title> 
          
          <div className="w-24 h-1 bg-[#A5C89E] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content - Mission */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#CCDFC4] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#2D5016]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2D5016] mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  At TrustCare, we believe everyone deserves compassionate, professional care 
                  in the comfort of their own home. Our mission is to connect families with 
                  trusted, certified caregivers who provide personalized support tailored to 
                  each individual's unique needs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#CCDFC4] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#2D5016]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2D5016] mb-3">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We envision a world where quality healthcare is accessible to all, where 
                  aging with dignity is the standard, and where families have peace of mind 
                  knowing their loved ones are receiving the best possible care.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#A5C89E] to-[#7DAA6F] rounded-2xl p-8 shadow-xl">
              <div className="bg-white rounded-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 pb-4 border-b border-gray-200">
                    <div className="w-16 h-16 bg-[#A5C89E] rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2D5016] text-xl">Compassionate Care</h4>
                      <p className="text-gray-600">Every client is family</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 pb-4 border-b border-gray-200">
                    <div className="w-16 h-16 bg-[#A5C89E] rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2D5016] text-xl">Trusted Professionals</h4>
                      <p className="text-gray-600">Certified & background-checked</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-[#A5C89E] rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2D5016] text-xl">24/7 Availability</h4>
                      <p className="text-gray-600">Round-the-clock support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-[#2D5016] mb-12">
            What We Stand For
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-gradient-to-br from-[#CCDFC4] to-[#A5C89E] rounded-xl p-8 hover:shadow-xl transition duration-300 group">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-[#2D5016]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#2D5016] mb-2">Family-Centered</h4>
              <p className="text-gray-600">
                We treat every client and their family with the respect, dignity, and 
                compassion they deserve.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gradient-to-br from-[#CCDFC4] to-[#A5C89E] rounded-xl p-8 hover:shadow-xl transition duration-300 group">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-[#2D5016]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#2D5016] mb-2">Quality Assured</h4>
              <p className="text-gray-600">
                We maintain the highest standards through rigorous screening, training, 
                and ongoing quality monitoring.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gradient-to-br from-[#CCDFC4] to-[#A5C89E] rounded-xl p-8 hover:shadow-xl transition duration-300 group">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-[#2D5016]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#2D5016] mb-2">Innovation Driven</h4>
              <p className="text-gray-600">
                We leverage technology to make booking, scheduling, and communication 
                seamless and efficient.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-[#A5C89E] to-[#7DAA6F] rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Experience TrustCare?
          </h3>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of families who trust us with their most precious loved ones. 
            Let's discuss how we can support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href='/booking'>
            
            <button className="bg-white text-[#2D5016] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200 shadow-lg">
              Get Started Today
            </button>
            </Link>
           
          </div>
        </div>
      </div>
    </section>
  );
}