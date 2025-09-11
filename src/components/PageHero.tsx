import React from 'react';

const HeroSection = ({ heading }:{heading:string}) => {
  return (
    <section
      className="relative h-48 bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(30, 182, 185, 0.9), rgba(31, 151, 185, 0.9)), url('/images/hero-slide-1.avif')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{heading}</h1>
      </div>
    </section>
  );
};

export default HeroSection;