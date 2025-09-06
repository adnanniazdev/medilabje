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
  avatar?: string;
}

const TestimonialsSection: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Nick Campbell",
      title: "Water and current Scottish heavyweight Champion, Nick is also a former Scotland Clan XV international rugby player, playing rugby union for the Glasgow Warriors and the Jersey Reds.",
      content: "I wanted to take a moment to express my utmost satisfaction with my recent experience at MediLab, located at Strive. The service was incredibly professional and efficient, and I thought I'd share my thoughts. I was able to explain all the information on the blood report and patiently answered all my questions I had. It's an impressive service. Based on my experience I am going to try and make it a regular occurrence. I really feel it will make a massive difference in my training. I wouldn't hesitate to recommend MediLab to family and friends who are in need of nutritional testing, vital blood work done. Thanks again to all the team at MediLab.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Healthcare Professional",
      content: "I had to have some tests carried out and was a little nervous, but MediLab is absolutely amazing! They are so friendly and really took the stress out of me. Having my blood work tested, I can't praise them enough, not to mention how quick I got my results reported! Highly recommended... 10 out of 10! ❤️",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Thompson",
      title: "Fitness Enthusiast",
      content: "The comprehensive health screening at MediLab gave me insights I never had before. The staff was professional, the facility was clean, and the results were delivered promptly. This has helped me optimize my training and nutrition significantly.",
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
 <section className="relative py-16 overflow-hidden">
  {/* Background with Parallax */}
  <div
    className="absolute inset-0 bg-fixed bg-center bg-cover"
    style={{
      backgroundImage:
        "linear-gradient(to right, rgba(30, 182, 185, 0.9), rgba(31, 151, 185, 0.9)), url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
      backgroundAttachment: "fixed",
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4">
    {/* Title */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-white mb-4">Testimonials</h2>
    </div>

    {/* Testimonials Slider */}
    <div className="relative max-w-6xl mx-auto">
      <div className="flex justify-center space-x-8">
        {/* Current Testimonial */}
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg">
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
              {testimonials[currentSlide].rating === 5
                ? "Absolutely the best ever"
                : "So pleased with the service"}
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

        {/* Next Testimonial Preview (if exists) */}
        {testimonials.length > 1 && (
          <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 max-w-sm hidden lg:block">
            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--light-accent)" }}
              >
                <User className="w-8 h-8" style={{ color: "var(--primary-color)" }} />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                So pleased with the service
              </h3>

              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-600 text-xs leading-relaxed">
                I had to have some tests carried out and was a little nervous,
                but MediLab is absolutely amazing! They are so friendly and
                really took the stress out of me...
              </p>

              <div className="mt-4">
                <p className="text-xs font-medium" style={{ color: "var(--primary-color)" }}>
                  Sarah El Jundi
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
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
