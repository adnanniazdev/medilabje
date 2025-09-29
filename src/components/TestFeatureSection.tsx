'use client';

import { FC } from 'react';
import { Clock, HeartPulse,  Sun } from 'lucide-react';
import Link from 'next/link';


const TestFeatureSection: FC = () => {
  const services = [
    {
      icon: '/images/user.png',
      title: "Quality Assurance",
      description: "We have strict Quality Assurance at MediLab ensuring your results are reliable and accurate",
      bgColor: "#E8F6F6"
    },
    {
      icon: '/images/smile.png',
      title: "Superior Service",
      description: "We offer on-site and home service phlebotomy appointments with same day urgent results",
      bgColor: "#DBF1F1"
    },
    {
      icon: '/images/test.png',
      title: "Test Profiles",
      description: "We offer a wide range of test profiles to suit your needs Please see Tests options for more info:",
      bgColor: "#CDECEC"
    }
  ];

  return (
    <>
      {/* Services Overview Section */}
      <div style={{ backgroundColor: '#E8F6F6' }}>   <section className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-6 mx-auto px-4 py-10 w-full">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="flex py-10 px-4 w-full hover:bg-primary-color cursor-pointer"
              >
                {/* Icon Circle */}
                <div className="mx-auto flex items-center justify-center mr-5">
                  <img
                    src={service.icon}
                    alt="Man Test"
                    className="max-w-md object-contain"
                  />
                </div>

                {/* Title */}
                <div className='flex flex-col text-left'>
                  <h3 className="text-xl font-semibold text-secondary-light mb-4">
                    {service.title}
                  </h3>
                  <p className='text-secondary-light'>
                    {service.description}
                    {service.title === 'Test Profiles' && (
                      <>
                        {' '}
                        <Link href={'/tests#TestsA-Z'} className="text-primary-light font-semibold underline">
                          Test A-Z
                        </Link>
                      </>
                    )}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </section></div>
    </>
  );
};

export default TestFeatureSection;
