

import Image from 'next/image';
import Link from 'next/link';


export async function ServiceDetails({ params }) {

const services = [
  {
    id: 1,
    title: 'Baby Care',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80',
    description: 'Expert newborn and infant care services including feeding, bathing, sleep training, and developmental support for your precious little one.',
    detailsInfo: 'Our baby care specialists are trained in newborn care, infant development, and pediatric first aid. We provide 24/7 support including night care, feeding schedules, diaper management, bath time routines, and developmental milestone tracking. Each caregiver is certified and experienced in handling newborns with special needs.',
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
    image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&q=80',
    description: 'Compassionate senior care including daily assistance, medication management, companionship, and specialized elderly care services.',
    detailsInfo: 'Our elderly care program offers comprehensive support for seniors, including assistance with daily living activities, medication reminders, mobility support, and companionship. We specialize in dementia care, Alzheimer\'s support, and post-hospitalization recovery. Our caregivers are trained in elderly-specific health conditions and provide respectful, dignified care.',
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
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
    description: 'Professional healthcare support for patients recovering from illness or surgery, including medical monitoring and personalized care plans.',
    detailsInfo: 'We provide professional nursing care for patients recovering at home. Services include wound care, IV medication administration, vital signs monitoring, physical therapy support, and coordination with healthcare providers. Our nurses are licensed and experienced in post-operative care, chronic illness management, and palliative care.',
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

const {id}=await params
const service= services.find(sr=>sr.id==id)

  // If service data is not provided, show error
  if (!service) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold text-[#2D5016]">Service not found</h2>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#7DAA6F] hover:text-[#2D5016] transition">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/#services" className="text-[#7DAA6F] hover:text-[#2D5016] transition">
              Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#2D5016] font-medium">{service.title}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-2 shadow-xl`}>
              <div className="bg-white rounded-xl overflow-hidden">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[400px] bg-gradient-to-br from-[#CCDFC4] to-[#A5C89E] flex items-center justify-center">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right - Title & Description */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className={`bg-gradient-to-br ${service.color} p-4 rounded-xl text-white`}>
                {service.icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2D5016]">
                {service.title}
              </h1>
            </div>
            
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking">
                <button className="w-full sm:w-auto bg-[#2D5016] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1F3D0A] transition duration-200 shadow-lg">
                  Book This Service
                </button>
              </Link>
              <Link href="/contact">
                <button className="w-full sm:w-auto border-2 border-[#2D5016] text-[#2D5016] px-8 py-3 rounded-lg font-semibold hover:bg-[#2D5016] hover:text-white transition duration-200">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-[#2D5016] mb-6">
            About This Service
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {service.detailsInfo}
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2D5016] mb-8 text-center">
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-[#CCDFC4] hover:border-[#A5C89E]"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#CCDFC4] to-[#A5C89E] rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-[#2D5016]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-[#2D5016] mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-[#A5C89E] to-[#7DAA6F] rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Choose TrustCare for {service.title}?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-[#2D5016]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">
                Certified Professionals
              </h3>
              <p className="text-white/90 text-center">
                All caregivers are licensed, certified, and background-checked
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-[#2D5016]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">
                24/7 Availability
              </h3>
              <p className="text-white/90 text-center">
                Round-the-clock support whenever you need us
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-[#2D5016]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">
                Personalized Care
              </h3>
              <p className="text-white/90 text-center">
                Customized care plans tailored to individual needs
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2D5016] mb-8 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#CCDFC4] to-[#A5C89E] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#2D5016]">
                1
              </div>
              <h3 className="font-bold text-[#2D5016] mb-2">Book Online</h3>
              <p className="text-gray-600 text-sm">
                Choose your service and schedule
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#CCDFC4] to-[#A5C89E] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#2D5016]">
                2
              </div>
              <h3 className="font-bold text-[#2D5016] mb-2">Get Matched</h3>
              <p className="text-gray-600 text-sm">
                We assign the perfect caregiver
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#CCDFC4] to-[#A5C89E] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#2D5016]">
                3
              </div>
              <h3 className="font-bold text-[#2D5016] mb-2">Meet & Greet</h3>
              <p className="text-gray-600 text-sm">
                Introduction and care plan review
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#CCDFC4] to-[#A5C89E] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#2D5016]">
                4
              </div>
              <h3 className="font-bold text-[#2D5016] mb-2">Start Care</h3>
              <p className="text-gray-600 text-sm">
                Begin receiving quality care
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D5016] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Book your {service.title} service today and experience the TrustCare difference. 
            Our team is ready to provide the compassionate care you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <button className="bg-[#2D5016] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1F3D0A] transition duration-200 shadow-lg">
                Book Now
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-[#2D5016] text-[#2D5016] px-8 py-3 rounded-lg font-semibold hover:bg-[#2D5016] hover:text-white transition duration-200">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;