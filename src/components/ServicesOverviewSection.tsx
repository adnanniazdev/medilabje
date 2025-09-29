'use client';

import { FC } from 'react';
import { Clock, HeartPulse, Sun } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ServicesOverviewSection: FC = () => {
  const router = useRouter()
  const services = [
    {
      icon: '/images/service-images/heart.png',
      hover_icon: '/images/service-images/hover-heart.png',
      title: "Medical Laboratory",
      bgColor: "#E8F6F6",
      herf: '/tests'
    },
    {
      icon: '/images/service-images/clock.png',
      hover_icon: '/images/service-images/hover-clock.png',
      title: "Quality Assurance",
      bgColor: "#DBF1F1",
      herf: '/about-us/#QualityAssurance'
    },
    {
      icon: '/images/service-images/sun.png',
      hover_icon: '/images/service-images/hover-sun.png',
      title: "Range of Services",
      bgColor: "#CDECEC",
      herf: '/services'
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
                <div onClick={() => {
                  router.push(service?.herf)
                }} className="w-[120px] h-[120px] mx-auto mb-8 bg-white hover:bg-[#1F97B9] rounded-full flex items-center justify-center shadow-sm group transition-colors duration-300">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-[120px] h-[120px] object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />

                  {/* Hover Icon */}
                  <img
                    src={service.hover_icon}
                    alt={service.title}
                    className="w-[120px] h-[120px] object-contain absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-secondary-light mb-4">
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
