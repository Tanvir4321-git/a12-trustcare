'use client';

import Link from 'next/link';
import Title from '../Title';
import SubTitle from '../SubTitle';

export default function ServicesOverview() {
  const services = [
    {
      id: 1,
      title: 'Baby Care',
      description: 'Expert newborn and infant care services including feeding, bathing, sleep training, and developmental support for your precious little one.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        'Newborn care specialist',
        'Feeding & nutrition guidance',
        'Sleep training support',
        'Developmental activities',
      ],
      color: 'from-[#7DAA6F] to-[#6B9A5E]',
    },
    {
      id: 2,
      title: 'Elderly Service',
      description: 'Compassionate senior care including daily assistance, medication management, companionship, and specialized elderly care services.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      features: [
        'Personal care assistance',
        'Medication management',
        'Companionship & activities',
        'Mobility support',
      ],
      color: 'from-[#7DAA6F] to-[#6B9A5E]',
    },
    {
      id: 3,
      title: 'Sick People Service',
      description: 'Professional healthcare support for patients recovering from illness or surgery, including medical monitoring and personalized care plans.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: [
        'Post-surgery care',
        'Vital signs monitoring',
        'Medical appointment assistance',
        'Recovery support',
      ],
      color: 'from-[#7DAA6F] to-[#6B9A5E]',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gray-600 font-semibold text-[18px] uppercase tracking-wider mb-2 block">
            Our Services
          </span>
          <Title>

            Comprehensive Care Solutions
          </Title>
          
        <SubTitle>

            From newborns to seniors, we provide specialized care services tailored to meet 
            the unique needs of every individual and family.
        </SubTitle>
         
          <div className="w-24 h-1 bg-[#A5C89E] mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-3  lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-br ${service.color} p-4 lg:p-8 text-white`}>
                <div className="flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="lg:text-2xl text-[18px] font-bold mb-2">{service.title}</h3>
              </div>

              {/* Card Body */}
             <div className="lg:p-8 p-6 flex flex-col">
  <div className='flex-shrink-0'>
    <p className="text-gray-700 mb-6 leading-relaxed">
      {service.description}
    </p>
  </div>
  
  <div className='flex-grow'>
    {/* Features List */}
    <ul className="space-y-3 mb-6">
      {service.features.map((feature, idx) => (
        <li key={idx} className="flex items-start space-x-3">
          <svg
            className="w-5 h-5 text-[#7DAA6F] flex-shrink-0 mt-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-700">{feature}</span>
        </li>
        
      ))}
    </ul>
  </div>

  <div className='flex-shrink-0 mt-auto'>
    {/* Learn More Button */}
    <Link href={`/services/${service.id}`}>
      <button className="w-full bg-[#2D5016] text-white py-3 rounded-lg font-semibold hover:bg-[#1F3D0A] transition duration-200 flex items-center justify-center space-x-2 group">
        <span>Learn More</span>
        <svg
          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </Link>
  </div>
</div>
            </div>
          ))}
        </div>

        {/* Bottom Info Card */}
        <div className="bg-gradient-to-r from-[#A5C89E] to-[#7DAA6F] rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Our care consultants are here to help you find the perfect care solution 
              for your loved ones. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <button className="bg-white text-[#2D5016] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200 shadow-lg">
                  Book a Consultation
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition duration-200">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-[#2D5016] mb-2">150+</div>
            <div className="text-gray-600 text-sm">Certified Caregivers</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-[#2D5016] mb-2">24/7</div>
            <div className="text-gray-600 text-sm">Available Support</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-[#2D5016] mb-2">100%</div>
            <div className="text-gray-600 text-sm">Background Checked</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-[#2D5016] mb-2">5★</div>
            <div className="text-gray-600 text-sm">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}