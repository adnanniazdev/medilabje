'use client';

import { FC } from 'react';
import Image from 'next/image';
import AppointmentCalendar from './AppointmentCalendar';

const AboutSection: FC = () => {
  return (
    <section className="relative">
      {/* Overlapping Content */}
      <div className="relative z-10">
        {/* Services Section */}
        <div className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Understanding Your Health */}
              <div className="bg-white   overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/lab1.avif"
                    alt="Understanding Your Health"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="py-8">
                  <h3 className="text-2xl text-secondary font-semibold  mb-5">
                    Understanding Your Health
                  </h3>
                  <p className="text-secondary-light text-sm !font-secondary leading-relaxed">
                    Here at MediLab we love to help you understand your health,
                    allowing you to make informed decisions and take control.
                    We offer a wide range of test profiles to cover every aspect of
                    your health needs.
                  </p>
                </div>
              </div>

              {/* Our Laboratory */}
              <div className="bg-white overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/lab4.avif"
                    alt="Our Laboratory"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
                <div className="py-8">
                  <h3 className="text-2xl text-secondary font-semibold  mb-5">
                    Our Laboratory
                  </h3>
                  <p className="text-secondary-light text-sm leading-relaxed">
                    Our new laboratory is fitted with all the latest equipment, with regular quality control checks, ensuring your testing is accurate and precise.
                  </p>
                </div>
              </div>

              {/* Booking Card */}
              <div className='w-full flex justify-center'>
                <div className="bg-white rounded-lg shadow-lg max-w-[400px]">
                  <div className="bg-primary p-4 w-full rounded-t-md">
                    <h3 className="text-2xl font-bold text-center md:text-left text-white">Book your Appointment today for free</h3>
                  </div>
                  <div className="flex justify-center">
                    <AppointmentCalendar />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
