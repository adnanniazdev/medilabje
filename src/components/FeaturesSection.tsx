'use client';

import { FC } from 'react';
import Link from 'next/link';

const FeaturesSection: FC = () => {
  const features = [
    {
      icon: '/images/user.png',
      title: "Superior Service",
      description: "We offer on-site and home service phlebotomy appointments with same day urgent results",
    },
    {
      icon: '/images/smile.png',
      title: "Be In Control",
      description: "Be in control of your own health and prevent future illnesses",
    },
    {
      icon: '/images/test.png',
      title: "Invest In Yourself",
      description: "Track your health and make adjustments for training, health and much more",
    },
    {
      icon: '/images/QA.png',
      title: "Quality Assurance",
      description: "We have strict Quality Assurance at MediLab ensuring your results are reliable and accurate",
    },
    {
      icon: '/images/priority.png',
      title: "Our Priority",
      description: "Your health check is OUR priority",
    },
    {
      icon: '/images/test-profile.png',
      title: "Test Profiles",
      description: "We offer a wide range of test profiles to suit your needs Please see Tests options for more info:",
    }
  ];

  return (
    <section className="w-full bg-[#E8F6F6] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex justify-start items-start"
              >
                {/* Icon Circle */}
                <div className="flex items-center justify-center mr-5">
                  <img
                    src={feature.icon}
                    alt="Man Test"
                    className="max-w-md object-contain"
                  />
                </div>

                {/* Title */}
                <div className='flex flex-col text-left'>
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    {feature.title}
                  </h3>
                  <p className='text-secondary-light'>
                    {feature.description}
                    {feature.title === 'Test Profiles' && (
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
      </div>
    </section>
  );
};

export default FeaturesSection;