import { FC } from 'react';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import TestFeatureSection from '@/components/TestFeatureSection';
import Link from 'next/link';
import { generateMetadata, seoData } from '@/utils/seo';
export const metadata = generateMetadata(seoData.privacy);

const PatientsPage: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <PageHero heading="Patients" />

      {/* Covid Policy Section */}
      <section id="covid-policy" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Main content grid with header and image at same level */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side content */}
            <div>
              {/* Header section */}
              <div className="mb-6">
                <h2 className="text-[35px] font-bold mb-4 text-primary-light">
                  Covid Policy
                </h2>
                <h4 className="text-[25px] font-bold text-secondary">Important Patient Notice</h4>
              </div>

              <p className="text-secondary-light mb-6">
                We are sorry, but Medilab CANNOT receive patients who are positive for COVID-19 or who have any of the symptoms shown here.
              </p>

              <p className="text-secondary-light mb-8">
                If you are either positive or have symptoms, please understand that you cannot have your samples taken today, but you will be welcome to return for your tests to be taken at a later date.
              </p>

              <h4 className="font-semibold text-secondary-light">Please remember to:</h4>
              <ul className=" list-disc pl-4">
                <li className="text-secondary-light">Wash your hands often with soap and water for at least 20 seconds</li>
                <li className="text-secondary-light">Avoid touching your eyes, nose or mouth with unwashed hands</li>
                <li className="text-secondary-light">Avoid close contact with people who have the above symptoms</li>
              </ul>
            </div>

            {/* Right side - Symptoms section as image */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/images/covid-symptoms.avif"
                width={500}
                height={200}
                alt="Signs and symptoms to look for - Fever and high temperature, Persistent dry cough, Shortness of breath"
                className="w-full max-w-2xl  shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reception Section */}
      <section id="patient-reception" className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-5 ">
            {/* Image on the left */}
            <div>
              <Image
                src="/images/patients-reception.avif"
                alt="Patient Reception"
                width={500}
                height={400}
                className=" shadow-md object-cover w-full"
              />
            </div>

            {/* Content on the right */}
            <div>
              <h2 className="text-[35px] font-bold mb-6 text-primary-light">
                Patient Reception
              </h2>
              <p className="text-secondary-light mb-6">
                Our client reception provides a sample collection service for patients attending at the request of their doctor/clinic.
              </p>
              <p className="text-secondary-light mb-6">
                Patients, of all ages, are welcome to attend the MediLab reception for their samples to be taken.
              </p>
              <p className="text-secondary-light mb-6">
                Appointments are necessary if a patient needs specialised investigations or care. Instructions can be telephoned or emailed ahead of the patient’s attendance, if this is more convenient.
              </p>
              <p className="text-secondary-light mb-6">
                Sample-taking is undertaken by qualified phlebotomy staff for which a standard sample-taking fee is charged to patients. Doctors and clinics are charged for each patient.
              </p>

              <div className="">
                <h3 className="font-semibold text-secondary-light">Opening Hours</h3>
                <ul className="space-y-2 text-sm list-none">
                  <li className="flex justify-between">
                    <span className="font-medium text-secondary-light">Monday to Friday 9am - 8pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium text-secondary-light">Saturday & Sunday 9am - 6pm</span>
                  </li>
                </ul>

                <h4 className="font-semibold mt-6 text-secondary-light">Appointments</h4>
                <p className="text-sm text-secondary-light">Please contact <strong>info@medilab.je</strong> for an appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phlebotomy Services Section */}
      <section id="phlebotomy-services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 ">
            <div>
              <h2 className="text-[35px] font-bold mb-6 text-primary-light" >
                Phlebotomy Services
              </h2>
              <p className="text-secondary-light mb-6">
                MediLab offers an on-site phlebotomy service to ensure ease and fast turn around times of results.
              </p>
              <p className="text-secondary-light mb-12">
                To arrange an appointment please contact us.
              </p>

              <Link
                href="mailto:info@medilab.je"
                className="inline-block bg-[#1FB9B9] hover:bg-[#27C2C2] text-white font-semibold py-4 px-8  transition-colors duration-200"
              >
                CONTACT US
              </Link>
            </div>
            <div>
              <Image
                src="/images/phelabotomy.avif"
                alt="Phlebotomy Services"
                width={500}
                height={400}
                className=" shadow-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <TestFeatureSection/>

    </>
  );
};

export default PatientsPage;
