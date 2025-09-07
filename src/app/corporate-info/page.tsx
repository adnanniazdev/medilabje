import { FC } from 'react';

const CorporateInfoPage: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Corporate Information</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Learn more about MediLab as a company
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Company Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
                About MediLab
              </h3>
              <p className="text-gray-600 mb-6">
                MediLab is a leading medical laboratory company established to provide comprehensive 
                diagnostic services to the healthcare community in Jersey and surrounding regions. 
                We are committed to excellence in laboratory medicine and patient care.
              </p>
              <p className="text-gray-600 mb-6">
                Our company operates with the highest standards of quality, integrity, and 
                professionalism, ensuring that healthcare providers and patients receive accurate, 
                reliable, and timely laboratory results.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
                Key Facts
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Founded:</span>
                  <span className="text-gray-600">1998</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Location:</span>
                  <span className="text-gray-600">Jersey, Channel Islands</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Employees:</span>
                  <span className="text-gray-600">50+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Tests Performed:</span>
                  <span className="text-gray-600">100,000+ annually</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Structure Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Corporate Structure
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <span className="text-white font-bold text-xl">👥</span>
              </div>
              <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>Board of Directors</h3>
              <p className="text-sm text-gray-600">
                Experienced healthcare and business leaders providing strategic guidance and oversight.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-color)' }}>
                <span className="text-white font-bold text-xl">🏢</span>
              </div>
              <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>Executive Team</h3>
              <p className="text-sm text-gray-600">
                Senior management team with extensive experience in laboratory medicine and healthcare.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <span className="text-white font-bold text-xl">🔬</span>
              </div>
              <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>Operations</h3>
              <p className="text-sm text-gray-600">
                Dedicated teams managing laboratory operations, quality assurance, and patient services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Financial Information
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-center text-gray-600 mb-8">
              MediLab maintains strong financial performance and stability, enabling continued 
              investment in technology, facilities, and staff development.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2" style={{ color: 'var(--primary-color)' }}>£2.5M</div>
                <p className="text-sm text-gray-600">Annual Revenue</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2" style={{ color: 'var(--primary-color)' }}>15%</div>
                <p className="text-sm text-gray-600">Growth Rate</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2" style={{ color: 'var(--primary-color)' }}>£500K</div>
                <p className="text-sm text-gray-600">Annual Investment</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2" style={{ color: 'var(--primary-color)' }}>AAA</div>
                <p className="text-sm text-gray-600">Credit Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Corporate Governance
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
                Governance Principles
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                  Transparency in all business operations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                  Accountability to stakeholders and community
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                  Ethical business practices and integrity
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                  Compliance with all regulatory requirements
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                  Commitment to continuous improvement
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
                Compliance & Regulations
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Healthcare Regulations</h4>
                  <p className="text-sm text-gray-600">
                    Full compliance with healthcare regulations and medical laboratory standards.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Data Protection</h4>
                  <p className="text-sm text-gray-600">
                    Strict adherence to GDPR and data protection regulations for patient information.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Quality Standards</h4>
                  <p className="text-sm text-gray-600">
                    Compliance with ISO 15189 and other international quality standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Corporate Contact Information
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <span className="text-white font-bold text-xl">📍</span>
              </div>
              <h3 className="font-semibold mb-2">Registered Office</h3>
              <p className="text-sm text-gray-600">
                MediLab Limited<br />
                123 Healthcare Avenue<br />
                St. Helier, Jersey<br />
                JE2 3AB
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-color)' }}>
                <span className="text-white font-bold text-xl">📞</span>
              </div>
              <h3 className="font-semibold mb-2">Corporate Enquiries</h3>
              <p className="text-sm text-gray-600">
                Phone: +44 1534 123456<br />
                Email: corporate@medilab.je<br />
                Fax: +44 1534 123457
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <span className="text-white font-bold text-xl">📄</span>
              </div>
              <h3 className="font-semibold mb-2">Legal Information</h3>
              <p className="text-sm text-gray-600">
                Company Registration: 12345678<br />
                VAT Number: GB123456789<br />
                Regulated by: Jersey FSC
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateInfoPage;
