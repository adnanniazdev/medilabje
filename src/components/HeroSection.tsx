'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  id: number;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
}

const HeroSection: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dummy slides - you can replace these with your actual images
  const slides: HeroSlide[] = [
    {
      id: 1,
      image: '/images/hero-slide-1.avif',
      alt: 'Medical laboratory technician working with microscope',
      title: 'Advanced Medical Testing',
      subtitle: 'Precision diagnostics for better health outcomes'
    },
    {
      id: 2,
      image: '/images/hero-slide-2.avif',
      alt: 'Laboratory equipment and analysis',
      title: 'State-of-the-Art Equipment',
      subtitle: 'Cutting-edge technology for accurate results'
    },
    {
      id: 3,
      image: '/images/hero-slide-3.avif',
      alt: 'Professional medical consultation',
      title: 'Expert Medical Consultation',
      subtitle: 'Professional guidance for your health journey'
    }
  ];

  // Auto-slide functionality - changes every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Slides Container */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              {/* Background Image */}
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>

            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className='text-[#1F97B9]' />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className='text-[#1F97B9]' />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide
                  ? 'bg-white'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

  <div className="py-16 px-4" style={{ background: 'var(--section-gradient-primary)' }}>
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-center">
      {/* Text Content */}
      <div className="lg:w-1/2 text-white mb-8 lg:mb-0">
        <h2 className="text-3xl lg:text-4xl font-secondary font-light mb-6 leading-tight">
          MEDILAB is a Medical Laboratory with a reputation for excellence in providing quality service to Jersey and beyond
        </h2>
      </div>

      {/* Logo */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <Image
          src="/images/medilab-logo.png"
          alt="MediLab Logo"
          width={350}
          height={180}
          className="object-contain max-w-full h-auto"
          onError={(e) => {
            // Fallback to text logo if image not found
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="text-white text-5xl lg:text-6xl font-bold">
                  Medi<span style="color: var(--accent-color);">Lab</span>
                </div>
              `;
            }
          }}
        />
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default HeroSection;
