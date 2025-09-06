'use client';

import { FC } from 'react';
import { Activity, Shield, Sparkles } from 'lucide-react';

const ServicesOverviewSection: FC = () => {
  const services = [
    {
      icon: Activity,
      title: "Medical Laboratory",
      description: "State-of-the-art medical testing and diagnostics"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control and accurate results"
    },
    {
      icon: Sparkles,
      title: "Range of Services",
      description: "Comprehensive testing solutions for all your needs"
    }
  ];

  return (
    <>
      {/* Services Overview Section */}
      <section 
        className="py-16 px-4"
        style={{ background: 'var(--section-gradient-light)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="text-center">
                  {/* Icon Circle */}
                  <div 
                    className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--light-accent)' }}
                  >
                    <IconComponent 
                      className="w-10 h-10" 
                      style={{ color: 'var(--primary-color)' }} 
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        className="py-12 px-4"
        style={{ background: 'var(--section-gradient-primary)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Contact Text */}
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                For any enquiries please contact us by email
              </h2>
            </div>
            
            {/* Contact Button */}
            <div>
              <button 
                className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-gray-100 hover:shadow-lg"
              >
                CONTACT NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesOverviewSection;
