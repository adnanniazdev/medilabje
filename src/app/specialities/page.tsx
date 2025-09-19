import { FC } from 'react';
import PageHero from '@/components/PageHero';
import SectionComponent from '@/components/SectionComponent';
import Image from 'next/image';
import HighlightSection from '@/components/HighlightSection';
import TestFeatureSection from '@/components/TestFeatureSection';
import { generateMetadata, seoData } from '@/utils/seo';

export const metadata = generateMetadata(seoData.specialities);

const SpecialitiesPage: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero heading="Specialities" />
      <SectionComponent
        titleSize="text-[35px]"
        id='haematology'
        title="Haematology"
        image="/images/specimens.jpg"
        imageAlt="New Advanced Testing Equipment Installed"

      >
        <p className="text-secondary-light mb-4">
          MediLab Haematology section provides a mixture of fully automated and some manual testing of both routine and some more specialised haematological parameters.
        </p>
        <p className="text-secondary-light mb-4">
          We can also refer samples off island for more specialist tests, such as flow cytometry and genetic screening.
        </p>

      </SectionComponent>
      <SectionComponent
        titleSize="text-[35px]"
        id='chemistry'
        title="Chemistry"
        image="/images/lab2.jpg"
        imageAlt="New Advanced Testing Equipment Installed"
        reverse

      >
        <p className="text-secondary-light mb-8">
          Medilabs Biochemistry department is a fully automated, providing chemistry and immune-assays. We use multiple, linked analytical platforms to ensure we have the most extensive range of assays available to ensure health checks are as in depth as possible.
        </p>
        <p className="text-secondary-light mb-15">
          We can also refer samples off island for more specialist tests to the UK if required. Please contact for further information.
        </p>

        <a
          href="mailto:info@medilab.je"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white text-[16px] font-semibold py-3 px-[32px]  transition-colors duration-200"
        >
          CONTACT US
        </a>

      </SectionComponent>
      <SectionComponent
        titleSize="text-[35px]"
        id='virology'
        title="Virology"
        image="/images/patients-reception.avif"
        imageAlt="New Advanced Testing Equipment Installed">
        <p className="text-secondary-light mb-8">
          At Medilab, we provide a full range of virus testing designed to give you fast, accurate
          answers when you need them most. Using the latest technologies—including PCR, RT-PCR,
          next-generation sequencing, antigen detection, and serology we can detect a wide variety of
          viruses, from everyday infections like the flu to long-term conditions such as hepatitis or
          HIV, as well as new and emerging threats. Testing is important if you feel unwell, have been
          exposed to a virus, or simply want peace of mind through routine screening. Quick and
          reliable results help doctors treat infections early, prevent complications, and protect the
          people around you. Your results may show if a virus is currently active, if you’ve had it
          before, or if you’re immune.
        </p>
        <p className="text-secondary-light mb-10">
          With Medilab, you can count on accurate results, expert guidance, and dependable support to
          keep you and your loved ones safe.
        </p>

        <a
          href="mailto:info@medilab.je"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white text-[16px] font-semibold py-3 px-[32px]  transition-colors duration-200"
        >
          CONTACT US
        </a>

      </SectionComponent>
      <SectionComponent
        titleSize="text-[35px]"
        id='immunology'
        title="Immunology"
        image="/images/helpful-information.jpg"
        reverse
        imageAlt="New Advanced Testing Equipment Installed">
        <p className="text-secondary-light mb-8">
          Medilab provides comprehensive immunology testing services, encompassing a wide range
          of laboratory techniques designed to evaluate the components and activity of the immune
          system. These tests are essential for diagnosing, monitoring, and managing conditions such as
          infections, autoimmune disorders, allergies, and immunodeficiencies. By assessing immune
          cells, antibodies, and other biomarkers, immunology testing helps determine whether the
          immune system is functioning normally, overactive, or impaired—providing critical
          information for guiding treatment decisions.
        </p>
      </SectionComponent>

      <TestFeatureSection />
      <HighlightSection />
    </div>
  );
};

export default SpecialitiesPage;
