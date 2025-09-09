'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, User } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  rating: number;
  tagline:string;
  avatar?: string;
}

const TestimonialsSection: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Nick Campbell",
      title: "Nick Campbell, boxer and current Scottish Heavyweight Champion. Nick is also a former Scotland Club XV international rugby union player, playing rugby union for the Glasgow Warriors and the Jersey Reds.",
      content: "I wanted to take a moment to express my utmost satisfaction with my recent experience at Medilab, located at Strive. The service was incredibly professional and went above and beyond to assist me. They took time to explain all the information on the blood report and patiently answered all questions I had. It's an impressive service. Based on my experience I am going to try and make it a regular occurrence, I really feel it will make a massive difference in my training. I wouldn't hesitate to recommend MediLab to family and friends who are in need or interested in having their blood work done. Thanks again to all the team at MediLab.",
      tagline:"Absolutely the best ever",
      rating: 5,
      // avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Salwa El Jurdi",
      title: "Healthcare Professional",
      content: "I had to have some tests carried out and was a little nervous, but MediLab is absolutely amazing! They are so friendly and really took the stress out of me. Having my blood work tested, I can't praise them enough, not to mention how quick I got my results' reported! Highly recommended.. 10 out of 10 ❤️",
      tagline:"So pleased with the service",
      rating: 5
    },
    {
      id: 3,
      name: "Anon",
      title: "Fitness Enthusiast",
      content: "It is important that we all take responsibility for our own good health, and Medilab offer a range of blood screening tests for a great variety of conditions by way of a health check. I had the Mediwoman test, with a follow up consultation with their expert haematologist, who explained my results clearly. The service was very good, from first contact, very prompt responses and pleasant staff.",
      tagline:"Very good and comprehensive service.",
      rating: 5
    }
  ];

  // Auto-slide functionality - changes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
  {/* Background with Parallax */}
  <div
    className="absolute inset-0 bg-fixed bg-center bg-cover"
    style={{
      backgroundImage:
        "linear-gradient(to right, rgba(30, 182, 185, 0.9), rgba(31, 151, 185, 0.9)), url('/images/hero-slide-1.avif')",
      backgroundAttachment: "fixed",
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col max-w-7xl mx-auto px-4">
    {/* Title */}
    <div className="text-center pt-16 pb-8 flex-shrink-0">
      <h2 className="text-4xl font-bold text-white mb-4">Testimonials</h2>
    </div>

    {/* Testimonials Slider - Takes remaining space */}
    <div className="flex-1 flex items-center justify-center">
      <div className="relative max-w-6xl mx-auto w-full">
        <div className="flex justify-center space-x-8">
          {/* Current Testimonial */}
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full max-h-[70vh] overflow-y-auto">
            <div className="text-center mb-6">
              {testimonials[currentSlide].avatar ? (
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentSlide].avatar}
                    alt={testimonials[currentSlide].name}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--light-accent)" }}
                >
                  <User className="w-10 h-10" style={{ color: "var(--primary-color)" }} />
                </div>
              )}

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {testimonials[currentSlide].name}
              </h3>

              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <h4 className="text-lg font-medium text-gray-800 mb-4">
                {testimonials[currentSlide].tagline}
              </h4>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
              {testimonials[currentSlide].content}
            </p>

            <div className="text-center">
              <p className="text-sm font-medium" style={{ color: "var(--primary-color)" }}>
                {testimonials[currentSlide].title}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} className='text-[#1F97B9]' />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} className='text-[#1F97B9]' />
        </button>
      </div>
    </div>

    {/* Slide Indicators - Fixed at bottom */}
    <div className="flex justify-center pb-8 flex-shrink-0">
      <div className="flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-white"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
</section>
  );
};

export default TestimonialsSection;
