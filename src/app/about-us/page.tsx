import { FC } from 'react';
import PageHero from '@/components/PageHero';
import Image from 'next/image';
import Link from 'next/link';
import ConsultantsCustomersSection from '@/components/ConsultantsCustomersSection';
import SectionComponent from '@/components/SectionComponent';
import HighlightSection from '@/components/HighlightSection';

const AboutPage: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero heading="About Us" />

      {/* Contact & Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Left Column - Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* Location */}
              <div>
                <h2 className="text-3xl font-bold text-primary-light mb-4">Location</h2>
                <p className="text-secondary-light mb-4 font-bold">
                  MediLab Ltd is situated in Strive Health Club
                </p>
                <div className="text-secondary-light space-y-1">
                  <p>Medilab Ltd<br />
                    Medical Suite 2<br />
                    Strive Health Club<br />
                    L'Avenue de la Reine Elizabeth II<br />
                    St Peter<br />
                    Jersey<br />
                    JE3 7BP</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-3xl font-bold text-primary-light mb-4">Contact</h2>
                <p className="text-gray-700 mb-6">
                  Email: <a href="mailto:info@medilab.je" className="text-primary-light hover:underline">info@medilab.je</a>
                </p>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#1FB9B9] rounded-full flex items-center justify-center text-white hover:bg-[#27C2C2] transition-colors"
                    aria-label="Facebook"
                  >
                    <span className="text-sm font-bold">f</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#1FB9B9] rounded-full flex items-center justify-center text-white hover:bg-[#27C2C2] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <span className="text-sm font-bold">in</span>
                  </a>
                </div>
              </div>

              {/* Opening Times */}
              <div>
                <h2 className="text-3xl font-bold text-primary-light mb-4">Opening Times</h2>
                <p className="text-gray-700">
                  Consultation times vary
                </p>
              </div>

            </div>

            {/* Right Column - Google Maps Embed */}
            <div className="lg:col-span-4 lg:sticky lg:top-8">
              <div className="w-full h-[500px] overflow-hidden shadow-lg">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.088543568801!2d-2.1883923232281735!3d49.205827676193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480dad584842aa59%3A0xb6de9bd7c1a24924!2sStrive%20Health%20Club!5e1!3m2!1sen!2s!4v1757850828310!5m2!1sen!2s"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultants and Customers Section with Booking */}
      <ConsultantsCustomersSection />
      <SectionComponent
        title='Quality Assurance & Management'
        titleColor='text-primary-light'
        titleSize='text-4xl'
        image='/images/lab2.jpg'

      >
        <p className='text-secondary-light mb-5'>MediLab is committed to providing clients with pathology of the highest quality. The quality of results is of fundamental importance, and the laboratory operates to stringent technical and administrative standards.</p>
        <p className="text-secondary-light mb-5">
          Internal quality assurance is achieved by strict adherence to standard operating procedures for all analytical processes. MediLab participates in recognised National External Quality Assessment Schemes; these schemes are subscribed to by NHS and private laboratories. The U.K. Accreditation Service (UKAS) provides accreditation to the internationally recognised ISO 15189 Medical Laboratories: Requirements for Quality and Competence standard. Results are subjected to strict internal and external quality control, we are striving for this accreditation
        </p>
        <p className="text-secondary-light mb-5">
          Details of the laboratories to whom MediLab refers specialist testing are available from MediLab Referrals. These laboratories are UKAS accredited or of equal accreditation status.
        </p>

      </SectionComponent>
      <SectionComponent
        title=' '
        titleColor=' '
        titleSize=' '
        image='/images/lab3.avif'
        reverse
      >
        <p className='text-secondary-light'>
          Samples may need to be rejected if they do not meet our sample quality policy. Sometimes tests cannot be performed in the laboratory if samples fall short of the quality, volume or other eligibility criteria. In these cases, the laboratory may need to reject the samples, and not carry out processing.
        </p>
        <p className='text-secondary-light'>
          The laboratory may be able to rectify a situation and although turnaround times may be affected, it avoids having to arrange for samples to be taken again.
        </p>
        <p className='text-secondary-light'>
          <ul>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Incorrect sample types received: <br />
              – Basic incorrect blood tube / other sample.<br />
              – Samples without the appropriate preservative (e.g. acidified urine samples).<br />
              – Samples that are received ambient, when a frozen sample is required.<br />
              – Samples that are received unprotected from light, when they are required to be covered at the point of venepuncture.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Insufficient sample received
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
              No sample received
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Labelling or form issues (mislabelled / unlabelled / no forms / no clinical information)
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Clotted / haemolysed / lipaemic / icteric samples
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Sample is broken or has leaked in transit
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Stability time has been exceeded. Stability time is test dependant, and also refers to tests that can only be carried out on certain days of the week
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Sample contamination (e.g. being in the same bag as a leaking sample).
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Samples are high risk or infectious
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Samples that are received in expired tubes
            </li>
          </ul>
        </p>
      </SectionComponent>
      {/* Contact Section */}
      <HighlightSection slogan='Where your health check is our priority' />

    </div>
  );
};

export default AboutPage;
