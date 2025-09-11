import { FC } from 'react';
import PageHero from '@/components/PageHero';
import SectionComponent from '@/components/SectionComponent';

const SpecialitiesPage: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero heading="Specialities" />
      <SectionComponent
        id='haematology'
        title="Haematology"
        image="/images/specimens.jpg"
        imageAlt="New Advanced Testing Equipment Installed"

      >
        <p className="text-gray-600 mb-4">
          MediLab Haematology section provides a mixture of fully automated and some manual testing of both routine and some more specialised haematological parameters.
        </p>
        <p className="text-gray-600 mb-4">
          We can also refer samples off island for more specialist tests, such as flow cytometry and genetic screening.
        </p>

      </SectionComponent>
      <SectionComponent
        id='chemistry'
        title="Chemistry"
        image="/images/lab2.jpg"
        imageAlt="New Advanced Testing Equipment Installed"
        reverse

      >
        <p className="text-gray-600 mb-8">
          Medilabs Biochemistry department is a fully automated, providing chemistry and immune-assays. We use multiple, linked analytical platforms to ensure we have the most extensive range of assays available to ensure health checks are as in depth as possible.
        </p>
        <p className="text-gray-600 mb-15">
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
        id='virology'
        title="Virology"
        image="/images/patients-reception.avif"
        imageAlt="New Advanced Testing Equipment Installed">
        <p className="text-gray-600 mb-8">
          We offer on island private COVID-19 testing, which can be used for travel documentation.
        </p>
        <p className="text-gray-600 mb-15">
          Please contact for further information.

        </p>

        <a
          href="mailto:info@medilab.je"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white text-[16px] font-semibold py-3 px-[32px]  transition-colors duration-200"
        >
          CONTACT US
        </a>

      </SectionComponent>

    </div>
  );
};

export default SpecialitiesPage;
