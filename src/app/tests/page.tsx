
import { FC } from 'react';
import TestsSection from '@/components/TestsSection';
import { sample_tube_selection, test_profiles, tests_list } from '@/utils/constans';
import { generateMetadata, seoData } from '@/utils/seo';

export const metadata = generateMetadata(seoData.tests);

import HighlightSection from '@/components/HighlightSection';
import TestFeatureSection from '@/components/TestFeatureSection';

const TestsPage: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[url('/images/test-bg-img.jpg')] object-contain text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tests</h1>
        </div>
      </section>


      {/* Tests A-Z Section */}
      <section id="tests-a-z" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-left mb-2 text-primary-light">
            Tests A-Z
          </h2>
          <div className="max-w-7xl mx-auto px-4 py-1">
            <div className="flex flex-col md:flex-row md:space-x-8">
              {/* Left Column: Test List */}
              <div className="md:w-1/2">
                {tests_list.map((testCategory) => (
                  <div key={testCategory.report_type} className="mb-5">
                    <h2 className="text-lg text-secondary-light font-bold mb-4">{testCategory.report_type}</h2>
                    <ul className="list-disc list-inside space-y-1">
                      {(testCategory.report_type === 'Bio-chemistry'
                        ? testCategory.tests.slice(0, 41)
                        : testCategory.tests
                      ).map((test) => (
                        <li key={test} className="text-secondary-light text-sm">
                          {test}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {/* Right Column: Image */}
              <div className="md:w-1/2 mt-8 md:mt-0 items-start">
                <img
                  src="/images/test-img.jpg"
                  alt="Lab"
                  className="w-full max-w-md object-cover"
                />
                <div className='mt-3'>
                  {tests_list
                    .filter((testCategory) => testCategory.report_type === 'Bio-chemistry')
                    .map((testCategory) => (
                      <div key={testCategory.report_type} className="mb-5 text-secondary-light">
                        <ul className="list-disc list-inside space-y-1">
                          {testCategory.tests.slice(41).map((test) => (
                            <li key={test} className="text-secondary-light text-sm">
                              {test}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>



        </div>
      </section>

      {/* Test Profiles Section */}
      <section id="test-profiles" className="py-16 bg-white">
        <div className="object-contain py-10" style={{ backgroundColor: '#E8F6F6' }}>
          <div className="mx-auto px-4 text-center">
            <h1 className="text-4xl text-primary-light font-bold mb-4">Test Profiles</h1>
          </div>
        </div>

        <div className="px-4 py-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {test_profiles.map((profile) => (
              <a
                key={profile.title}
                href={profile.href}
                style={{ border: "1px solid #1FB9B9" }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center justify-center text-center cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-secondary">{profile.title}</h3>
              </a>
            ))}
          </div>
        </div>

      </section>

      {/* Specimens Section */}
      <section id="specimens" className="py-16 px-8 bg-white">
        <div className="flex flex-col md:flex-row items-center md:items-start">

          {/* Left Column: Image */}
          <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
            <img
              src="/images/specimens.jpg"
              alt="Specimens"
              className="w-full max-w-lg object-cover"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="md:w-1/2 w-full text-secondary-light">
            <h2 className="text-4xl font-bold mb-4 text-primary-light">Specimens</h2>
            <p className="mb-4 text-lg text-secondary font-bold">
              Guidance on specimen collection, packaging and transport, and rejection criteria.
            </p>
            <p className="mb-4 text-sm md:text-base">
              A properly collected specimen is critical to quality test results.
            </p>
            <h3 className="font-semibold mb-2">Please ensure that:</h3>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm md:text-base">
              <li>The correct specimen type is collected.</li>
              <li>The correct amount is collected.</li>
              <li>The specimen is collected in the right container with any necessary additives.</li>
              <li>The specimens are collected following safe working practices.</li>
            </ul>
            <p className="mb-2 text-sm md:text-base">Ensure that there is no contamination to virology samples.</p>
            <p className="text-sm md:text-base">
              The container is securely sealed and labelled to meet our labelling requirements.
            </p>
          </div>
        </div>

      </section>

      {/* Sample Requirements Section */}
      <section id="sample-requirements" className="py-16 bg-gray-50">
        <div className="">
          <div className="object-contain py-10" style={{ backgroundColor: '#E8F6F6' }}>
            <div className="mx-auto px-4 text-center">
              <h1 className="text-4xl text-primary-light font-bold mb-4">Sample Requirements</h1>
              <p className='text-secondary text-2xl font-bold'>Blood Sample Tube Selection & Tests</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-6 mx-auto px-4 py-10">
            {sample_tube_selection.map((tube, index) => (
              <div
                key={tube.title}
                className="flex md:flex-row items-center md:items-start 
                 bg-white p-4 rounded-lg shadow-md
                 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] max-w-7xl"
              >
                {/* Left Column: Title + Details */}
                <div className="w-full md:w-1/2 text-secondary-light p-4">
                  <h2 className="text-xl md:text-2xl font-bold mb-5 text-secondary">
                    {tube.title}
                  </h2>
                  <ul className="list-disc space-y-2 text-sm sm:text-base pl-4">
                    {tube.test_points.map((point, idx) => (
                      <li key={idx} className="text-secondary-light text-md">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: Image */}
                <div className="w-full md:w-1/2 flex justify-center relative">
                  <img
                    src={tube.image}
                    alt={tube.title}
                    style={{ width: `${tube.width}px`, height: `${tube.height}px` }}
                    className="object-cover"
                  />
                  {/* Invention Badge */}
                  <span className="absolute sm:top-5  md:top-3 right-2 bg-black text-white md:text-md font-semibold p-3 rounded-4xl z-10">
                    {tube.invention}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Helpful Information Section */}
      <section id="helpful-information" className="bg-white">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 px-4 py-12 max-w-7xl mx-auto">
          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 text-secondary-light">
            <h2 className="text-3xl font-bold mb-4 text-primary-light">Helpful Information</h2>

            <p className="mb-4 text-sm md:text-base">
              <strong>Laboratory times:</strong> We can offer daytime and evening appointments to suit your needs,
              please contact us for more information and to arrange an appointment.
            </p>

            <h3 className="font-semibold mb-2 text-lg">Protecting Personal information:</h3>
            <p className="mb-4 text-sm md:text-base">
              The General Data Protection Regulation (GDPR) came in to force in May 2018 and has had a significant impact
              upon the way that personal data is managed; placing legal requirements upon data processors and controllers
              to manage that information securely, maintain records of the processing that is carried out, and report when
              breaches of the regulation do occur. This has impacted the way many businesses operate and is not restricted
              to the healthcare sector.
            </p>

            <p className="mb-4 text-sm md:text-base">
              The GDPR requirements have been implemented within the context of a mature ISO 27001 Information Security
              Management System – the globally accepted standard by which information is secured.
            </p>

            <p className="mb-4 text-sm md:text-base">
              This ensures that senior management have regular visibility of the threats to the confidentiality, availability
              and integrity of the information that we process, and are able to steer the efforts of their teams to provide
              an efficient service that places the confidentiality of our customers and their patients at the heart of
              everything we do.
            </p>

            <h3 className="font-semibold mb-2 text-lg">Fees for MediLab service:</h3>
            <p className="text-sm md:text-base">
              Fees can be paid directly by patients or by the practice, clinic or requesting organisation.
              A payment instruction clearly identifying to whom invoices need to be sent must be given with each patient’s request.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/helpful-information.jpg"
              alt="Helpful Information"
              className="w-full shadow-md object-cover"
            />
          </div>
        </div>

      </section>

      {/* Request Forms Section */}
      <section id="request-forms" className=" bg-white">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 px-4 py-12 max-w-7xl mx-auto">
          {/* Left Column: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/request-form.jpg"
              alt="Request Forms"
              className="w-full shadow-md object-cover"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full md:w-1/2 text-secondary-light">
            <h2 className="text-3xl font-bold mb-4 text-primary-light">Request Forms</h2>
            <p className="mb-4 text-sm md:text-base">
              To comply with good clinical practice it is important that there is one request form for each patient’s request,
              and specimens and form are correctly matched, fully labelled, and include three unique patient identifiers and
              other relevant Information.
            </p>

            <ul className="list-disc space-y-2 mb-4 text-sm md:text-base pl-3">
              <li>First name, Surname, Date of birth, Hospital/Clinic number, Medical Record Number (MRN)</li>
              <li>Time and Date of collection of samples</li>
              <li>Type of sample</li>
              <li>Relevant clinical information</li>
              <li>Relevant details of medication</li>
              <li>
                High-risk Samples should be clearly identified on the form and individually packed separately from other samples
              </li>
              <li>
                Known cases of Hazard Group 4 pathogens such as Ebola or Viral Haemorrhagic Fever must NOT be sent to the laboratory.
              </li>
            </ul>

            <p className="mb-4 text-sm md:text-base">
              If additional tests are required for a sample already received, please contact the laboratory with your request for
              specific further analysis. Samples are stored within timeframes according to their discipline. Laboratory staff will
              advise on the ability to undertake further testing from samples already received in the laboratory.
            </p>

            <p className="mb-4 text-sm md:text-base">
              <strong>Test add ons:</strong> The majority of samples received in the laboratory are kept for one week. If sample type
              and volume allow, further testing can be requested by email to
              <a href="mailto:info@medilab.je" className="text-primary-light underline ml-1">info@medilab.je</a>
            </p>

            <p className="text-sm md:text-base">
              Please specify the test details to be added. If requests for Add ons are made by email, the <b>patient’s details</b> and <b>Laboratory
                Number</b> need to be referenced.
            </p>
          </div>
        </div>

      </section>


      {/* Test Categories Section */}
      <section className="py-16 bg-white">
      </section>
      <TestFeatureSection />
      <HighlightSection slogan='Where your health check is our priority' />
    </div>
  );
};

export default TestsPage;