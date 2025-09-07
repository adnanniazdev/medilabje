import { FC } from 'react';

const AthleteHealthPage: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Athlete Health</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Specialized testing for athletes and active individuals
          </p>
        </div>
      </section>

      {/* MediAthlete Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
              MediAthlete Testing Package
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive health screening designed specifically for athletes and active individuals, 
              focusing on performance optimization, injury prevention, and overall wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--primary-color)' }}>
                What's Included in MediAthlete
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                  <div>
                    <h4 className="font-semibold">Performance Markers</h4>
                    <p className="text-sm text-gray-600">VO2 max indicators, lactate levels, and metabolic efficiency markers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                  <div>
                    <h4 className="font-semibold">Nutritional Assessment</h4>
                    <p className="text-sm text-gray-600">Vitamin D, B12, iron studies, and essential micronutrients</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                  <div>
                    <h4 className="font-semibold">Hormone Profile</h4>
                    <p className="text-sm text-gray-600">Testosterone, cortisol, growth hormone, and thyroid function</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                  <div>
                    <h4 className="font-semibold">Cardiovascular Health</h4>
                    <p className="text-sm text-gray-600">Lipid profile, cardiac markers, and inflammation indicators</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                  <div>
                    <h4 className="font-semibold">Recovery Markers</h4>
                    <p className="text-sm text-gray-600">Creatine kinase, LDH, and muscle damage indicators</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Athlete Testing Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Athletic Testing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--primary-color)' }}>
            Specialized Athletic Testing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <span className="text-white font-bold text-xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                Strength & Power
              </h3>
              <p className="text-gray-600 mb-4">
                Testing focused on muscle function, power output, and strength development for power athletes.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Creatine Kinase (CK)</li>
                <li>• Lactate Dehydrogenase (LDH)</li>
                <li>• Testosterone levels</li>
                <li>• Growth hormone</li>
                <li>• Protein metabolism markers</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-color)' }}>
                <span className="text-white font-bold text-xl">🏃</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                Endurance Performance
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive testing for endurance athletes focusing on aerobic capacity and metabolic efficiency.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• VO2 max indicators</li>
                <li>• Iron studies (ferritin, TIBC)</li>
                <li>• Hemoglobin & hematocrit</li>
                <li>• Lactate threshold markers</li>
                <li>• Electrolyte balance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <span className="text-white font-bold text-xl">🧘</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                Recovery & Wellness
              </h3>
              <p className="text-gray-600 mb-4">
                Testing to optimize recovery, prevent overtraining, and maintain peak performance levels.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Cortisol levels</li>
                <li>• Inflammatory markers (CRP)</li>
                <li>• Sleep quality indicators</li>
                <li>• Stress hormones</li>
                <li>• Immune function markers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Nutrition Testing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--primary-color)' }}>
                Sports Nutrition Testing
              </h2>
              <p className="text-gray-600 mb-6">
                Optimize your nutrition strategy with comprehensive testing that identifies 
                deficiencies and helps tailor your diet for peak performance.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Essential Vitamins</h4>
                  <p className="text-sm text-gray-600">Vitamin D, B-complex, C, E, and other performance-critical vitamins</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Mineral Profile</h4>
                  <p className="text-sm text-gray-600">Iron, magnesium, zinc, calcium, and electrolyte balance assessment</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Metabolic Markers</h4>
                  <p className="text-sm text-gray-600">Glucose metabolism, lipid utilization, and energy production efficiency</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Sports Nutrition Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Monitoring */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--primary-color)' }}>
            Performance Monitoring Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
                Baseline Assessment
              </h3>
              <p className="text-gray-600 mb-6">
                Establish your baseline health and performance markers to track improvements 
                and identify areas for optimization.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Comprehensive health screening</li>
                <li>✓ Performance baseline establishment</li>
                <li>✓ Risk factor identification</li>
                <li>✓ Personalized recommendations</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
                Ongoing Monitoring
              </h3>
              <p className="text-gray-600 mb-6">
                Regular testing to track progress, prevent overtraining, and optimize 
                performance throughout your training cycles.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Quarterly performance reviews</li>
                <li>✓ Training adaptation monitoring</li>
                <li>✓ Recovery optimization</li>
                <li>✓ Injury prevention screening</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
            Ready to Optimize Your Performance?
          </h2>
          <p className="text-gray-600 mb-8">
            Book your MediAthlete testing package today and take the first step towards 
            optimizing your athletic performance and overall health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 rounded-lg text-white font-medium transition-colors duration-200"
              style={{ backgroundColor: 'var(--primary-color)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-color)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-color)')}
            >
              Book MediAthlete Package
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
              Learn More
            </button>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <span className="text-white font-bold">📞</span>
              </div>
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-sm text-gray-600">+44 1534 123456</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-color)' }}>
                <span className="text-white font-bold">✉️</span>
              </div>
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="text-sm text-gray-600">athletes@medilab.je</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <span className="text-white font-bold">📍</span>
              </div>
              <h4 className="font-semibold mb-2">Visit Us</h4>
              <p className="text-sm text-gray-600">MediLab, Jersey</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AthleteHealthPage;
