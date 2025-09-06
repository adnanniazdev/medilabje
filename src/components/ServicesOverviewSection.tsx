'use client';

import { FC } from 'react';
import {  Clock, HeartPulse, Sun } from 'lucide-react';

const ServicesOverviewSection: FC = () => {
  const services = [
    {
      icon: HeartPulse,
      title: "Medical Laboratory",
      description: "State-of-the-art medical testing and diagnostics",
      bgColor: "#E8F6F6"
    },
    {
      icon: Clock,
      title: "Quality Assurance", 
      description: "Rigorous quality control and accurate results",
      bgColor: "#DBF1F1"
    },
    {
      icon: Sun,
      title: "Range of Services",
      description: "Comprehensive testing solutions for all your needs",
      bgColor: "#CDECEC"
    }
  ];

  return (
    <>
      {/* Services Overview Section */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="text-center py-20 px-8 w-full hover:bg-primary-color cursor-pointer"
                style={{ backgroundColor: service.bgColor }}
              >
                {/* Icon Circle */}
                 <div className="w-[120px] h-[120px] mx-auto mb-8 bg-white hover:bg-[#1F97B9] rounded-full flex items-center justify-center shadow-sm group transition-colors duration-300">
                  <IconComponent 
                    className="w-15 h-15 text-teal-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ServicesOverviewSection;
