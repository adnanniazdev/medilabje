'use client';

import { FC } from 'react';
import PageHero from '@/components/PageHero';
import Image from 'next/image';
import ServicesOverviewSection from '@/components/ServicesOverviewSection';

const ServicesPage: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <PageHero heading="Services" />

      {/* Requesting & Reporting Options Section - Z Pattern 1 */}
      <section id="requesting-reporting" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--primary-color)' }}>
                Requesting & Reporting Options
              </h2>
              <p className="text-gray-600 mb-6">
                For clinicians using MediLab service we offer an electronic results transfer system
                through LabCollector.
              </p>
              <p className="text-gray-600 mb-6">
                Manual request form requesting option also available with printed results
                reporting.
              </p>
              <p className="text-gray-600 mb-6">
                Results will be sent in encrypted format to any number of predetermined email
                addresses. Copy reports will be emailed automatically to email addresses on the
                system.
              </p>
              <p className="text-gray-600 mb-4">
                For private patients, please contact us directly.
              </p>
              <p className="text-gray-600">
                For more information please contact us at <a href="mailto:info@medilab.je" className="text-blue-600 hover:underline">info@medilab.je</a>
              </p>
            </div>
            {/* Image Right */}
            <div>
              <img
                src="/images/lab1.avif"
                alt="Laboratory technician working with microscope"
                className="w-full h-96 object-cover rounded-lg shadow-md"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjI1MCIgeT0iMjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNkI3Mjg0IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkxhYm9yYXRvcnkgVGVjaG5pY2lhbjwvdGV4dD4KPHN2Zz4K';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Postal Services Section - Z Pattern 2 */}
      <section id="postal-services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Left */}
            <div>
              <img
                src="/images/heamotology.avif"
                alt="Laboratory test tubes and samples"
                className="w-full h-96 object-cover rounded-lg shadow-md"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjI1MCIgeT0iMjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNkI3Mjg0IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkxhYm9yYXRvcnkgU2FtcGxlczwvdGV4dD4KPHN2Zz4K';
                }}
              />
            </div>
            {/* Content Right */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--primary-color)' }}>
                Postal Services
              </h2>
              <p className="text-gray-600 mb-6">
                Postal pathology services should be considered by all practices in Jersey who
                require a rapid delivery service to the UK referral laboratories.
              </p>
              <p className="text-gray-600 mb-6">
                MediLab offers a postal referral service for clients in Jersey requiring samples to
                be sent off island using Royal Mail Tracked 24 and DHL Tracked.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700 mb-4">
                  Charges with Royal Mail mean that ALL pathology postal specimens now made up
                  with Tracked 24 returns. This provides a particularly suitable method of transport
                  for any healthcare organisation.
                </p>
              </div>
              <p className="text-gray-600 mb-4">
                Postal pathology with Tracked 24 returns provides:
              </p>
              <ul className="space-y-2 text-gray-600">
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--primary-color)' }}>
                Sample Collection
              </h2>
              <p className="text-gray-600 mb-6">
                MediLab provides a dedicated medical sample collection service on a scheduled
                or ad hoc basis from practices in Jersey.
              </p>
              <p className="text-gray-600 mb-6">
                High-risk samples should be clearly labelled and packed separately from other
                samples.
              </p>
              <p className="text-gray-600 mb-6">
                MediLab Polices cannot transport samples containing Hazard Group 4 pathogens,
                such as Ebola fever or Viral haemorrhagic fever.
              </p>
              <p className="text-gray-600">
                We also offer an on-site phlebotomy service, to allow sample collection and
                processing to be efficient and time effective.
              </p>
            </div>
            {/* Image Right */}
            <div>
              <Image
                src="/images/sample-collection.avif"
                alt="Healthcare professional with laptop and medical equipment"
                className="w-full h-96 object-cover rounded-lg shadow-md"
                width={500}
                height={400}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjI1MCIgeT0iMjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNkI3Mjg0IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkhlYWx0aGNhcmUgUHJvZmVzc2lvbmFsPC90ZXh0Pgo8L3N2Zz4K';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testing Section */}
       {/* Sample Collection Section - Z Pattern 3 */}
      <section id="sample-collection" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 ">
             {/* Image Left */}
            <div>
              <Image
                src="/images/sample-collection.avif"
                alt="Healthcare professional with laptop and medical equipment"
                className="w-full h-96 object-cover rounded-lg shadow-md"
                width={500}
                height={400}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjI1MCIgeT0iMjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNkI3Mjg0IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkhlYWx0aGNhcmUgUHJvZmVzc2lvbmFsPC90ZXh0Pgo8L3N2Zz4K';
                }}
              />
            </div>
            {/* Content Right */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--primary-color)' }}>
                Testing
              </h2>
              <p className="text-gray-600 mb-6">
               We offer a wide range of test profiles and individual tests, please refer to the test profile pages for further information.
              </p>
              <a
                href="mailto:info@medilab.je"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                CONTACT US
              </a>

            </div>
           
          </div>
        </div>
      </section>

      <ServicesOverviewSection/>
    </>
  );
};

export default ServicesPage;
