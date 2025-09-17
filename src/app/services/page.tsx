'use client';

import { FC } from 'react';
import PageHero from '@/components/PageHero';
import Image from 'next/image';
import TestFeatureSection from '@/components/TestFeatureSection';
import HighlightSection from '@/components/HighlightSection';
import Link from 'next/link';

const ServicesPage: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <PageHero heading="Services" />

      {/* Requesting & Reporting Options Section - Z Pattern 1 */}
      <section id="requesting-reporting" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            {/* Content Left */}
            <div className='text-secondary-light'>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--primary-light)' }}>
                Requesting & Reporting Options
              </h2>
              <p className=" mb-6">
                For clinicians using MediLab service we offer an electronic results transfer system
                through LabCollector.
              </p>
              <p className=" mb-6">
                Manual request form requesting option also available with printed results
                reporting.
              </p>
              <p className=" mb-6">
                Results will be sent in encrypted format to any number of predetermined email
                addresses. Copy reports will be emailed automatically to email addresses on the
                system.
              </p>
              <p className=" mb-4">
                For private patients, please contact us directly.
              </p>
              <p >
                For more information please contact us at: <a href="mailto:info@medilab.je" className="font-bold hover:underline">info@medilab.je</a>
              </p>
            </div>
            {/* Image Right */}
            <div>
              <img
                src="/images/lab1.avif"
                alt="Laboratory technician working with microscope"
                className="w-full h-96 object-cover  shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Postal Services Section - Z Pattern 2 */}
      <section id="postal-services" className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4 ">
            {/* Image Left */}
            <div>
              <img
                src="/images/heamotology.avif"
                alt="Laboratory test tubes and samples"
                className="w-full h-96 object-cover shadow-md"
              />
            </div>
            {/* Content Right */}
            <div className='text-secondary-light'>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--primary-light)' }}>
                Postal Services
              </h2>
              <p className=" mb-6">
                Postal pathology services should be considered by all practices in Jersey who
                require a rapid delivery service to the UK referral laboratories.
              </p>
              <p className=" mb-6">
                MediLab offers a postal referral service for clients in Jersey requiring samples to
                be sent off island using Royal Mail Tracked 24 and DHL Tracked.
              </p>
              {/* <div className="bg-blue-50 p-4 rounded-lg mb-6"> */}
              <p className=" mb-6">
                Charges with Royal Mail mean that ALL pathology postal specimens now made up
                with Tracked 24 returns. This provides a particularly suitable method of transport
                for any healthcare organisation.
              </p>
              {/* </div> */}
              <p className=" mb-6">
                Postal pathology with Tracked 24 returns provides:
              </p>
              <ul className="space-y-2 ">
                <li>• Simple and convenient sample handling throughout the UK for most tests.</li>
                <li>• It is not suitable for microbiology or coagulation samples.</li>
                <li>• Scope for large and small numbers of samples.</li>
                <li>• Next morning delivery via Royal Mail or DHL.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Collection Section - Z Pattern 3 */}
      <section id="sample-collection" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4 ">
            {/* Content Left */}
            <div className='text-secondary-light'>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--primary-light)' }}>
                Sample Collection
              </h2>
              <p className=" mb-6">
                MediLab provides a dedicated medical sample collection service on a scheduled
                or ad hoc basis from practices in Jersey.
              </p>
              <p className=" mb-6">
                High-risk samples should be clearly labelled and packed separately from other
                samples.
              </p>
              <p className=" mb-6">
                MediLab Polices cannot transport samples containing Hazard Group 4 pathogens,
                such as Ebola fever or Viral haemorrhagic fever.
              </p>
              <p className="">
                We also offer an on-site phlebotomy service, to allow sample collection and
                processing to be efficient and time effective.
              </p>
            </div>
            {/* Image Right */}
            <div>
              <Image
                src="/images/sample-collection.avif"
                alt="Healthcare professional with laptop and medical equipment"
                className="w-full h-96 object-cover  shadow-md"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Sample Collection Section - Z Pattern 3 */}
      <section id="sample-collection" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 ">
            {/* Image Left */}
            <div>
              <Image
                src="/images/lab4.avif"
                alt="Healthcare professional with laptop and medical equipment"
                className="w-full h-96 object-cover shadow-md"
                width={500}
                height={400}
              />
            </div>
            {/* Content Right */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--primary-light)' }}>
                Testing
              </h2>
              <p className="text-gray-600 mb-6">
                We offer a wide range of test profiles and individual tests, please refer to the test profile pages for further information.
              </p>
              <Link
                href="mailto:info@medilab.je"
                className="inline-block bg-[#1FB9B9] hover:bg-[#27C2C2] text-white font-semibold py-4 px-8  transition-colors duration-200"
              >
                CONTACT US
              </Link>

            </div>

          </div>
        </div>
      </section>
      <section id="home-phelabotomy" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 ">
           
            {/* Content Right */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--primary-light)' }}>
                Your Health, Our Priority – Right at Your Doorstep
              </h2>
              <p className="text-gray-600 mb-6">
                At MediLab, we understand that travelling to a clinic or lab isn’t always easy. That’s why we
                offer professional home phlebotomy services, bringing safe and reliable blood collection to
                the comfort of your home.
              </p>
              <Link
                href="mailto:info@medilab.je"
                className="inline-block bg-[#1FB9B9] hover:bg-[#27C2C2] text-white font-semibold py-4 px-8  transition-colors duration-200"
              >
                CONTACT US
              </Link>

            </div>
             {/* Image Left */}
             <div>
              <Image
                src="/images/lab4.avif"
                alt="Healthcare professional with laptop and medical equipment"
                className="w-full h-96 object-cover shadow-md"
                width={500}
                height={400}
              />
            </div>

          </div>
        </div>
      </section>
      <TestFeatureSection />
      <HighlightSection slogan='Where your health check is our priority' />
    </>
  );
};

export default ServicesPage;
