import { FC } from 'react';
import PageHero from '@/components/PageHero';
import Image from 'next/image';
import Link from 'next/link';
import ConsultantsCustomersSection from '@/components/ConsultantsCustomersSection';
import SectionComponent from '@/components/SectionComponent';
import HighlightSection from '@/components/HighlightSection';
import TestFeatureSection from '@/components/TestFeatureSection';
import FeedbackForm from '@/components/FeedbackForm';
import { Facebook, Linkedin } from 'lucide-react';

const AboutPage: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero heading="About Us" />

      {/* Intro Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-light mb-4">About MediLab</h2>
          <p className="text-secondary-light mb-4">
            MediLab Ltd is an independent medical laboratory based in Jersey, Channel Islands, providing high-quality diagnostic testing for private individuals, healthcare professionals, and organizations. Located within the Strive Health Club in St Peter, MediLab offers a modern, consultant-led service with a strong focus on accuracy, speed, and patient care. Whether you&#39;re seeking routine health checks, specialized blood tests, or corporate wellness support, MediLab delivers trusted results with quick turnaround time.
          </p>
          <p className="text-secondary-light">
            Supported by experienced consultants in haematology and biochemistry, MediLab combines expert insight with cutting-edge laboratory technology, helping patients and clinicians make informed health decisions quickly and confidently.
          </p>
        </div>
      </section>

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
                    L&apos;Avenue de la Reine Elizabeth II<br />
                    St Peter<br />
                    Jersey<br />
                    JE3 7BP</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-3xl font-bold text-primary-light mb-4">Contact</h2>
                <p className="text-gray-700 mb-6">
                  Email: <Link href="mailto:info@medilab.je" className=" hover:underline">info@medilab.je</Link>
                </p>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#1FB9B9] rounded-full flex items-center justify-center text-white hover:bg-[#27C2C2] transition-colors"
                    aria-label="Facebook"
                  >
                    <span className="text-sm font-bold"><Facebook /></span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#1FB9B9] rounded-full flex items-center justify-center text-white hover:bg-[#27C2C2] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <span className="text-sm font-bold"><Linkedin /></span>
                  </a>
                </div>
              </div>

              {/* Opening Times */}
              <div>
                <h2 className="text-3xl font-bold text-primary-light mb-4">Opening Times</h2>
                <p className="text-secondary-light mb-4">
                  Consultation times vary
                </p>
                <Link href={"https://strive.je"} target='_blank' rel="noreferrer nofollow" >
                  <Image src={"/images/strive-logo.png"} width={170} height={40} alt='strive logo' />
                </Link>
                <p className='text-secondary-light mt-4'>VISIT THE SITE</p>
              </div>
            </div>

            {/* Right Column - Google Maps Embed */}
            <div className="lg:col-span-4 lg:sticky lg:top-8">
              <div className="w-full h-[500px] overflow-hidden shadow-lg">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d41703.515805127776!2d-2.203072!3d49.210618!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480dad584842aa59%3A0xb6de9bd7c1a24924!2sStrive%20Health%20Club!5e0!3m2!1sen!2sus!4v1757884516683!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestFeatureSection />

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

      {/* =Uncomment when API is created */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeedbackForm />
        </div>
      </section> */}

      {/* Contact Section */}
      <HighlightSection slogan='Where your health check is our priority' />

    </div>
  );
};

export default AboutPage;
