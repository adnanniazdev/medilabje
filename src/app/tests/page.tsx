'use client'
import { FC } from 'react';
import TestsSection from '@/components/TestsSection';
import { sample_tube_selection, tests_list } from '@/utils/constans';

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
      <section id="test-profiles" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Test Profiles
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 text-center mb-6">
              Comprehensive test packages designed for specific health assessments and screening purposes.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Health Screening</h3>
                <p className="text-sm text-gray-600">Complete health assessment packages</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Specialized Profiles</h3>
                <p className="text-sm text-gray-600">Targeted testing for specific conditions</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Monitoring Profiles</h3>
                <p className="text-sm text-gray-600">Regular health monitoring packages</p>
              </div>
            </div>
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
          <div className="flex max-w-7xl mx-auto px-4 py-10">
            {sample_tube_selection.map((tube, index) => (
              <div
                key={tube.title}
                className={`flex flex-col md:flex-row items-center md:items-start mb-8 p-6 bg-white shadow-md
           w-full sm:max-w-md md:max-w-3xl lg:max-w-5xl mx-auto`}
              >
                {/* Left Column: Title + Details */}
                <div className="w-full text-secondary-light">
                  <h2 className="text-xl md:text-2xl font-bold mb-3 text-primary-light">{tube.title}</h2>
                  <p className="text-sm mb-3 font-semibold">{tube.invention}</p>
                  <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                    {tube.test_points.map((point, idx) => (
                      <li key={idx} className="text-secondary">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: Image */}
                <div className="md:w-1/2 w-full flex justify-center">
                  <img
                    src={tube.image}
                    alt={tube.title}
                    style={{ width: `${tube.width}px` }} // Convert number to px
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>

              </div>

            ))}
          </div>
        </div>
      </section>

      {/* Request Forms Section */}
      <section id="request-forms" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Request Forms
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-600 text-center mb-6">
              Download and access test request forms for efficient laboratory ordering.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>Standard Request Forms</h3>
                <p className="text-sm text-gray-600 mb-4">General laboratory test request forms</p>
                <button
                  className="px-4 py-2 rounded text-white text-sm"
                  style={{ backgroundColor: 'var(--primary-color)' }}
                >
                  Download Forms
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>Specialized Forms</h3>
                <p className="text-sm text-gray-600 mb-4">Specialized test request forms</p>
                <button
                  className="px-4 py-2 rounded text-white text-sm"
                  style={{ backgroundColor: 'var(--primary-color)' }}
                >
                  Download Forms
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Information Section */}
      <section id="helpful-information" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Helpful Information
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 text-center mb-8">
              Additional resources and information to help you understand our testing services.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                  <span className="text-white font-bold text-xl">?</span>
                </div>
                <h3 className="font-semibold mb-2">FAQs</h3>
                <p className="text-sm text-gray-600">Frequently asked questions about our tests and services</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-color)' }}>
                  <span className="text-white font-bold text-xl">📋</span>
                </div>
                <h3 className="font-semibold mb-2">Test Guides</h3>
                <p className="text-sm text-gray-600">Comprehensive guides for test preparation and understanding results</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                  <span className="text-white font-bold text-xl">📞</span>
                </div>
                <h3 className="font-semibold mb-2">Contact Support</h3>
                <p className="text-sm text-gray-600">Get in touch with our laboratory support team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Test Categories
          </h2>
          <TestsSection />
        </div>
      </section>
    </div>
  );
};

export default TestsPage;