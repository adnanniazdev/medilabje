import { FC } from 'react';
import PageHero from '@/components/PageHero';

const SpecialitiesPage: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero heading="Specialities" />

      {/* Specialities Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
              Our Areas of Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              MediLab offers specialized testing services across multiple medical disciplines, 
              providing healthcare providers with comprehensive diagnostic solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Clinical Chemistry */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
              <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <span className="text-white font-bold text-xl">🧪</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                Clinical Chemistry
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive biochemical analysis including metabolic panels, cardiac markers, 
                liver function tests, and therapeutic drug monitoring.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Comprehensive Metabolic Panel</li>
                <li>• Lipid Profiles</li>
                <li>• Cardiac Biomarkers</li>
                <li>• Liver Function Tests</li>
                <li>• Kidney Function Tests</li>
              </ul>
            </div>

            {/* Hematology */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--accent-color)' }}>
              <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-color)' }}>
                <span className="text-white font-bold text-xl">🩸</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                Hematology
              </h3>
              <p className="text-gray-600 mb-4">
                Complete blood count analysis, coagulation studies, and specialized hematological 
                investigations for blood disorders.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Complete Blood Count (CBC)</li>
                <li>• Coagulation Studies</li>
                <li>• Blood Smear Analysis</li>
                <li>• Hemoglobin Variants</li>
                <li>• Platelet Function Tests</li>
              </ul>
            </div>

            {/* Immunology */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
              <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <span className="text-white font-bold text-xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                Immunology
              </h3>
              <p className="text-gray-600 mb-4">
                Immune system testing including autoimmune markers, allergy testing, and 
                immunodeficiency assessments.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Autoimmune Markers</li>
                <li>• Allergy Testing (IgE)</li>
                <li>• Immunoglobulin Levels</li>
                <li>• Complement Studies</li>
                <li>• Rheumatoid Factors</li>
              </ul>
            </div>

            {/* Microbiology */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--accent-color)' }}>
              <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-color)' }}>
                <span className="text-white font-bold text-xl">🦠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                Microbiology
              </h3>
              <p className="text-gray-600 mb-4">
                Infectious disease testing including bacterial cultures, viral detection, 
                and antimicrobial susceptibility testing.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Bacterial Cultures</li>
                <li>• Viral PCR Testing</li>
                <li>• Antimicrobial Susceptibility</li>
                <li>• Parasitology</li>
                <li>• Mycology (Fungal Testing)</li>
              </ul>
            </div>

            {/* Endocrinology */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
              <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <span className="text-white font-bold text-xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                Endocrinology
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive hormone testing including thyroid function, reproductive hormones, 
                and diabetes monitoring.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Thyroid Function Tests</li>
                <li>• Reproductive Hormones</li>
                <li>• Diabetes Monitoring</li>
                <li>• Adrenal Function</li>
                <li>• Growth Hormone Studies</li>
              </ul>
            </div>

            {/* Molecular Diagnostics */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--accent-color)' }}>
              <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-color)' }}>
                <span className="text-white font-bold text-xl">🧬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                Molecular Diagnostics
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced genetic testing and molecular analysis for inherited disorders, 
                pharmacogenomics, and personalized medicine.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Genetic Testing</li>
                <li>• Pharmacogenomics</li>
                <li>• Inherited Disorders</li>
                <li>• Cancer Genetics</li>
                <li>• Paternity Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--primary-color)' }}>
            Specialized Services
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--primary-color)' }}>
                Advanced Testing Capabilities
              </h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                    Point-of-Care Testing
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Rapid testing solutions for immediate clinical decision-making, including 
                    cardiac markers, infectious disease testing, and blood gas analysis.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                    Specialized Panels
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Custom test panels designed for specific medical conditions or patient 
                    populations, including geriatric, pediatric, and sports medicine panels.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                    Toxicology Services
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive toxicology testing including therapeutic drug monitoring, 
                    drugs of abuse screening, and forensic toxicology.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--primary-color)' }}>
                Quality & Expertise
              </h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                    Expert Consultation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Access to our team of laboratory medicine specialists for test interpretation, 
                    clinical correlation, and diagnostic guidance.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                    Research Collaboration
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Partnership opportunities for clinical research studies and validation of 
                    new diagnostic methods and technologies.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                    Continuing Education
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Educational programs and seminars for healthcare professionals on laboratory 
                    medicine topics and new testing methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
            Need Specialized Testing?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact our laboratory specialists to discuss your specific testing requirements 
            and learn more about our specialized services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 rounded-lg text-white font-medium transition-colors duration-200"
              style={{ backgroundColor: 'var(--primary-color)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-color)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-color)')}
            >
              Contact Specialists
            </button>
            <button className="px-8 py-3 rounded-lg border-2 font-medium transition-colors duration-200"
              style={{ 
                borderColor: 'var(--primary-color)', 
                color: 'var(--primary-color)' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--primary-color)';
              }}
            >
              Request Information
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialitiesPage;
