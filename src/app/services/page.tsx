import { FC } from 'react';

const ServicesPage: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Comprehensive laboratory services designed for your convenience
          </p>
        </div>
      </section>

      {/* Requesting & Reporting Options Section */}
      <section id="requesting-reporting" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Requesting & Reporting Options
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-600 text-center mb-8">
              Multiple convenient ways to request tests and receive your results.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
                  Test Requesting
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                    Online test ordering system
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                    Phone-based test requests
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                    Healthcare provider integration
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                    Walk-in test requests
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
                  Result Reporting
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--accent-color)' }}></span>
                    Secure online portal access
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--accent-color)' }}></span>
                    Email result notifications
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--accent-color)' }}></span>
                    Direct physician reporting
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--accent-color)' }}></span>
                    Mobile app notifications
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Postal Services Section */}
      <section id="postal-services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Postal Services
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 text-center mb-8">
              Convenient postal services for sample collection and result delivery.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                  <span className="text-white font-bold text-xl">📦</span>
                </div>
                <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>Sample Collection Kits</h3>
                <p className="text-sm text-gray-600">
                  Home collection kits delivered to your door with all necessary materials and instructions.
                </p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-color)' }}>
                  <span className="text-white font-bold text-xl">🚚</span>
                </div>
                <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>Sample Transport</h3>
                <p className="text-sm text-gray-600">
                  Secure and temperature-controlled transportation of samples to our laboratory.
                </p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                  <span className="text-white font-bold text-xl">📄</span>
                </div>
                <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>Result Delivery</h3>
                <p className="text-sm text-gray-600">
                  Secure postal delivery of test results and reports directly to your address.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Collection Section */}
      <section id="sample-collection" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Sample Collection
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-600 text-center mb-8">
              Professional sample collection services with multiple convenient options.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                    In-Laboratory Collection
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Visit our state-of-the-art collection facilities with experienced phlebotomists.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Professional phlebotomy services</li>
                    <li>• Comfortable collection environment</li>
                    <li>• Immediate sample processing</li>
                    <li>• Extended operating hours</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                    Mobile Collection
                  </h3>
                  <p className="text-gray-600 mb-4">
                    On-site collection services at your home, office, or healthcare facility.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Home visit services</li>
                    <li>• Corporate health programs</li>
                    <li>• Healthcare facility partnerships</li>
                    <li>• Flexible scheduling</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                    Self-Collection Kits
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Easy-to-use collection kits for specific tests that can be performed at home.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Detailed collection instructions</li>
                    <li>• Pre-paid return shipping</li>
                    <li>• Quality control measures</li>
                    <li>• Customer support available</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                    Specialized Collections
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Specialized collection procedures for complex or sensitive tests.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Timed collections</li>
                    <li>• Special handling requirements</li>
                    <li>• Pediatric collections</li>
                    <li>• Geriatric considerations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Section */}
      <section id="testing" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Testing
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 text-center mb-8">
              Advanced laboratory testing with state-of-the-art equipment and quality assurance.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                  <span className="text-white font-bold">🔬</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Advanced Technology</h3>
                <p className="text-xs text-gray-600">Latest laboratory equipment and methodologies</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-color)' }}>
                  <span className="text-white font-bold">✓</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Quality Control</h3>
                <p className="text-xs text-gray-600">Rigorous quality assurance protocols</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                  <span className="text-white font-bold">⚡</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Fast Turnaround</h3>
                <p className="text-xs text-gray-600">Rapid processing and result delivery</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-color)' }}>
                  <span className="text-white font-bold">🏆</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Accredited</h3>
                <p className="text-xs text-gray-600">Fully accredited laboratory services</p>
              </div>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>Testing Capabilities</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Clinical Chemistry</li>
                  <li>• Hematology</li>
                  <li>• Immunology</li>
                  <li>• Microbiology</li>
                  <li>• Molecular Diagnostics</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>Specialized Testing</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Hormone Analysis</li>
                  <li>• Genetic Testing</li>
                  <li>• Allergy Testing</li>
                  <li>• Toxicology</li>
                  <li>• Therapeutic Drug Monitoring</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>Quality Standards</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• ISO 15189 Accredited</li>
                  <li>• CAP Certified</li>
                  <li>• CLIA Compliant</li>
                  <li>• External Quality Assurance</li>
                  <li>• Continuous Improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
