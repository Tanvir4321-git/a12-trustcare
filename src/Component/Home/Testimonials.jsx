'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Ahmed',
      role: 'Daughter of Elderly Client',
      image: '👩‍💼',
      text: 'TrustCare has been a blessing for our family. The caregiver assigned to my mother is not just professional but genuinely caring. She treats my mom like her own family. We finally have peace of mind knowing she\'s in good hands.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Mohammad Rahman',
      role: 'Father of Newborn',
      image: '👨‍💼',
      text: 'As first-time parents, we were overwhelmed. The baby care specialist from TrustCare guided us through everything - from feeding schedules to sleep training. Their expertise made our parenting journey so much easier.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Fatima Khan',
      role: 'Post-Surgery Patient Family',
      image: '👩',
      text: 'After my husband\'s surgery, we needed professional care at home. TrustCare provided an excellent nurse who monitored his recovery, managed medications, and kept us informed. The service exceeded our expectations.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Abdul Karim',
      role: 'Son of Elderly Parent',
      image: '👨',
      text: 'My father has dementia and needs constant supervision. The caregiver from TrustCare is patient, understanding, and trained to handle his condition. They\'ve made such a positive difference in his daily life.',
      rating: 5,
    },
  ];

  const successMetrics = [
    { number: '5,000+', label: 'Happy Families Served', icon: '😊' },
    { number: '95%', label: 'Client Satisfaction Rate', icon: '⭐' },
    { number: '150+', label: 'Certified Caregivers', icon: '👨‍⚕️' },
    { number: '24/7', label: 'Available Support', icon: '🕐' },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gray-700 font-semibold text-sm uppercase tracking-wider mb-2 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D5016] mb-4">
            What Our Families Say
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Real stories from real families who trust us with their loved ones.
          </p>
          <div className="w-24 h-1 bg-[#A5C89E] mx-auto mt-6"></div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {successMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#CCDFC4] to-[#A5C89E] rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{metric.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-[#2D5016] mb-2">
                {metric.number}
              </div>
              <div className="text-[#2D5016]/80 text-sm font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Swiper Carousel */}
        <div className="relative">
          <div className="bg-gradient-to-br from-[#A5C89E] to-[#7DAA6F] rounded-3xl p-8 md:p-12 shadow-2xl">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }}
              navigation={true}
              loop={true}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="max-w-4xl mx-auto pb-16">
                    {/* Testimonial Content */}
                    <div className="bg-white rounded-2xl p-8 md:p-12 relative">
                      {/* Quote Icon */}
                      <div className="absolute top-4 left-4 text-[#A5C89E] opacity-20">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      {/* Rating Stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-6 h-6 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 text-center italic">
                        "{testimonial.text}"
                      </p>

                      {/* Client Info */}
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#A5C89E] to-[#7DAA6F] rounded-full flex items-center justify-center text-3xl mb-3">
                          {testimonial.image}
                        </div>
                        <h4 className="font-bold text-[#2D5016] text-xl">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Trust Badge Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-[#CCDFC4] hover:border-[#A5C89E] transition duration-300">
            <div className="w-16 h-16 bg-[#CCDFC4] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#2D5016]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-[#2D5016] text-lg mb-2">
              Verified & Licensed
            </h3>
            <p className="text-gray-600 text-sm">
              All caregivers are certified and background-checked
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-[#CCDFC4] hover:border-[#A5C89E] transition duration-300">
            <div className="w-16 h-16 bg-[#CCDFC4] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#2D5016]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-[#2D5016] text-lg mb-2">
              24/7 Availability
            </h3>
            <p className="text-gray-600 text-sm">
              Round-the-clock support whenever you need us
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-[#CCDFC4] hover:border-[#A5C89E] transition duration-300">
            <div className="w-16 h-16 bg-[#CCDFC4] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#2D5016]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-[#2D5016] text-lg mb-2">
              Personalized Care
            </h3>
            <p className="text-gray-600 text-sm">
              Customized care plans tailored to individual needs
            </p>
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: white;
          opacity: 1;
          width: 32px;
          border-radius: 6px;
        }
        
     
        
        .testimonial-swiper .swiper-button-next:after,
        .testimonial-swiper .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }
        
       
      `}</style>
    </section>
  );
}