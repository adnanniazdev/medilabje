'use client';

import { FC } from 'react';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import TestFeatureSection from '@/components/TestFeatureSection';

const PatientsPage: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <PageHero heading="Patients" />

      {/* Covid Policy Section */}
      <section id="covid-policy" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main content grid with header and image at same level */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side content */}
            <div>
              {/* Header section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4 text-cyan-500">
                  Covid Policy
                </h2>
                <p className="text-lg text-gray-600">Important Patient Notice</p>
              </div>

              <p className="text-gray-600 mb-6">
                We are sorry, but Medilab CANNOT receive patients who are positive for COVID-19
                or who have any of the symptoms shown here.
              </p>

              <p className="text-gray-600 mb-8">
                If you are either positive or have symptoms, please understand that you cannot
                have your samples taken today, but you will be welcome to return for your tests to
                be taken at a later date.
              </p>

              <h4 className="font-semibold mb-4 text-gray-800">Please remember to:</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 bg-gray-600"></span>
                  <p className="text-gray-700">Wash your hands often with soap and water for at least 20 seconds</p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 bg-gray-600"></span>
                  <p className="text-gray-700">Avoid touching your eyes, nose or mouth with unwashed hands</p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 bg-gray-600"></span>
                  <p className="text-gray-700">Avoid close contact with people who have the above symptoms</p>
                </div>
              </div>
            </div>

            {/* Right side - Symptoms section as image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/images/covid-symptoms.avif"
                alt="Signs and symptoms to look for - Fever and high temperature, Persistent dry cough, Shortness of breath"
                className="w-full max-w-md rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reception Section */}
      <section id="patient-reception" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image on the left */}
            <div>
              <Image
                src="/images/patients-reception.avif"
                alt="Patient Reception"
                width={500}
                height={400}
                className="rounded-lg shadow-md object-cover w-full"
              />
            </div>

            {/* Content on the right */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-cyan-500">
                Patient Reception
              </h2>
              <p className="text-gray-600 mb-6">
                Our patient reception provides a strategic collection service for patients attending at
                the request of their Consultant.
              </p>
              <p className="text-gray-600 mb-6">
                Patients of all ages are welcome to attend MediLab as reception for their
                samples to be taken.
              </p>
              <p className="text-gray-600 mb-6">
                Appointments are necessary if a patient needs specialized investigations or care.
                Appointments can be telephoned or emailed ahead of the visit. Alternatively, if the
                patient is attending for a standard blood or urine collection, they can attend without
                an appointment.
              </p>
              <p className="text-gray-600 mb-6">
                Laboratory testing is undertaken by qualified phlebotomist staff for quality standards
                required testing for a change in a patient. Doctors and Nurses are recognized for such
                appointments.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-4 text-cyan-500">Opening Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday to Friday:</span>
                    <span>8am - 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday & Sunday:</span>
                    <span>9am - 1pm</span>
                  </div>
                </div>

                <h4 className="font-semibold mt-6 mb-2">Appointments</h4>
                <p className="text-sm text-gray-600">Please contact <strong>info@medilab.je</strong> for an appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phlebotomy Services Section */}
      <section id="phlebotomy-services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/phelabotomy.avif"
                alt="Phlebotomy Services"
                width={500}
                height={400}
                className="rounded-lg shadow-md object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjI1MCIgeT0iMjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNkI3Mjg0IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPlBobGVib3RvbXkgU2VydmljZXM8L3RleHQ+Cjwvc3ZnPgo=';
                }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--primary-color)' }}>
                Phlebotomy Services
              </h2>
              <p className="text-gray-600 mb-6">
                MediLab offers a complete phlebotomy service to ensure clean and fast test sample
                blood collection.
              </p>
              <p className="text-gray-600 mb-6">
                To arrange an appointment please contact us.
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

      <TestFeatureSection/>

    </>
  );
};

export default PatientsPage;
