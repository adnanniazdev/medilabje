import { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Excellence in laboratory services and patient care
          </p>
        </div>
      </section>

      {/* About MediLab Section */}
      <section id="about-medilab" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            About MediLab
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 text-lg">
                MediLab is a leading medical laboratory with a reputation for excellence in providing 
                quality diagnostic services to Jersey and beyond. We are committed to delivering 
                accurate, reliable, and timely laboratory results to support healthcare providers 
                and patients in making informed medical decisions.
              </p>
              <p className="text-gray-600 mb-6">
                Our state-of-the-art facility is equipped with the latest technology and staffed by 
                highly qualified professionals who are dedicated to maintaining the highest standards 
                of quality and patient care.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--primary-color)' }}>25+</h3>
                  <p className="text-sm text-gray-600">Years of Experience</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--primary-color)' }}>1000+</h3>
                  <p className="text-sm text-gray-600">Tests Available</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">MediLab Facility Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="our-team" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Our Team
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our dedicated team of laboratory professionals, technicians, and support staff work 
            together to ensure the highest quality of service and patient care.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Laboratory Directors</h3>
              <p className="text-sm text-gray-600">
                Board-certified pathologists and laboratory medicine specialists overseeing all operations.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-2xl">🔬</span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Laboratory Technicians</h3>
              <p className="text-sm text-gray-600">
                Highly trained technicians with expertise in various laboratory disciplines and testing methodologies.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-2xl">🩺</span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Phlebotomists</h3>
              <p className="text-sm text-gray-600">
                Certified phlebotomists providing professional and comfortable sample collection services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section id="quality-assurance" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Quality Assurance
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
                Our Commitment to Quality
              </h3>
              <p className="text-gray-600 mb-6">
                Quality is at the heart of everything we do at MediLab. We maintain rigorous quality 
                control measures and participate in external quality assurance programs to ensure 
                the accuracy and reliability of our test results.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                  Comprehensive quality control protocols
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                  Regular equipment calibration and maintenance
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                  Continuous staff training and education
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                  External quality assurance participation
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
                Quality Standards
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">ISO 15189 Compliance</h4>
                  <p className="text-sm text-gray-600">
                    Our laboratory operates in accordance with ISO 15189 standards for medical laboratories.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Proficiency Testing</h4>
                  <p className="text-sm text-gray-600">
                    Regular participation in external proficiency testing programs to validate our results.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Continuous Improvement</h4>
                  <p className="text-sm text-gray-600">
                    Ongoing process improvement initiatives to enhance quality and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section id="accreditation" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary-color)' }}>
            Accreditation
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            MediLab maintains accreditation from leading healthcare organizations, demonstrating 
            our commitment to excellence and compliance with industry standards.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">ISO</span>
              </div>
              <h3 className="font-semibold mb-2">ISO 15189</h3>
              <p className="text-xs text-gray-600">Medical Laboratory Accreditation</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-xl">CAP</span>
              </div>
              <h3 className="font-semibold mb-2">CAP Certified</h3>
              <p className="text-xs text-gray-600">College of American Pathologists</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xl">CLIA</span>
              </div>
              <h3 className="font-semibold mb-2">CLIA Compliant</h3>
              <p className="text-xs text-gray-600">Clinical Laboratory Improvement</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold text-xl">QA</span>
              </div>
              <h3 className="font-semibold mb-2">External QA</h3>
              <p className="text-xs text-gray-600">Quality Assurance Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <span className="text-white font-bold text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>Our Mission</h2>
              <p className="text-gray-600">
                To provide accurate, reliable, and timely laboratory services that support healthcare 
                providers in delivering the best possible patient care, while maintaining the highest 
                standards of quality and professionalism.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-color)' }}>
                <span className="text-white font-bold text-2xl">👁️</span>
              </div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>Our Vision</h2>
              <p className="text-gray-600">
                To be the leading medical laboratory in the region, recognized for our commitment to 
                excellence, innovation, and patient-centered care, while continuously advancing the 
                field of laboratory medicine.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
