import { FC } from 'react';
import TestsSection from '@/components/TestsSection';

const TestsPage: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Tests</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Comprehensive laboratory testing services for your health needs
          </p>
        </div>
      </section>

      {/* Tests A-Z Section */}
      <section id="tests-a-z" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Tests A-Z
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-600 text-center">
              Browse our complete alphabetical listing of all available laboratory tests.
              Find detailed information about test procedures, requirements, and results interpretation.
            </p>
            <div className="mt-6 text-center">
              <button
                className="px-6 py-3 rounded-lg text-white font-medium transition-colors duration-200"
                style={{ backgroundColor: 'var(--primary-color)' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-color)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-color)')}
              >
                Browse All Tests
              </button>
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
      <section id="specimens" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Specimens
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-600 text-center mb-6">
              Information about specimen collection, handling, and transportation requirements.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>Collection Guidelines</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Proper collection techniques</li>
                  <li>• Container requirements</li>
                  <li>• Timing considerations</li>
                  <li>• Patient preparation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>Handling & Transport</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Storage conditions</li>
                  <li>• Transportation requirements</li>
                  <li>• Stability information</li>
                  <li>• Processing timeframes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Requirements Section */}
      <section id="sample-requirements" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Sample Requirements
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 text-center mb-6">
              Detailed requirements for sample collection to ensure accurate test results.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 pl-4" style={{ borderColor: 'var(--primary-color)' }}>
                <h3 className="font-semibold mb-2">Pre-analytical Requirements</h3>
                <p className="text-sm text-gray-600">Fasting requirements, medication considerations, and patient preparation instructions.</p>
              </div>
              <div className="border-l-4 pl-4" style={{ borderColor: 'var(--accent-color)' }}>
                <h3 className="font-semibold mb-2">Sample Volume & Type</h3>
                <p className="text-sm text-gray-600">Minimum sample volumes, preferred sample types, and alternative options.</p>
              </div>
              <div className="border-l-4 pl-4" style={{ borderColor: 'var(--primary-color)' }}>
                <h3 className="font-semibold mb-2">Quality Assurance</h3>
                <p className="text-sm text-gray-600">Quality control measures and sample integrity requirements.</p>
              </div>
            </div>
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