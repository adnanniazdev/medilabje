import { FC } from 'react';

const FemaleHealthPage: FC = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Female Health Tests</h1>
        
        <div className="space-y-8">
          {/* MediMother */}
          <section id="MediMother" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
              MediMother
            </h2>
            <p className="text-gray-600 mb-4">
              Comprehensive maternal health screening for expecting mothers and those planning pregnancy.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Coming soon - detailed test information and booking options.</p>
            </div>
          </section>

          {/* MediWoman */}
          <section id="MediWoman" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
              MediWoman
            </h2>
            <p className="text-gray-600 mb-4">
              Complete women's health screening package covering hormones, reproductive health, and general wellness.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Coming soon - detailed test information and booking options.</p>
            </div>
          </section>

          {/* MediFemaleBasic */}
          <section id="MediFemaleBasic" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
              MediFemale Basic
            </h2>
            <p className="text-gray-600 mb-4">
              Essential female health screening covering basic blood work, hormone levels, and key health indicators.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Coming soon - detailed test information and booking options.</p>
            </div>
          </section>

          {/* PCOS */}
          <section id="PCOS" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
              PCOS (Polycystic Ovary Syndrome)
            </h2>
            <p className="text-gray-600 mb-4">
              Specialized testing for PCOS diagnosis and monitoring, including hormone levels and metabolic markers.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Coming soon - detailed test information and booking options.</p>
            </div>
          </section>

          {/* MediFertility */}
          <section id="MediFertility" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
              MediFertility
            </h2>
            <p className="text-gray-600 mb-4">
              Comprehensive fertility assessment for women trying to conceive or planning for future pregnancy.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Coming soon - detailed test information and booking options.</p>
            </div>
          </section>

          {/* Early Pregnancy */}
          <section id="EarlyPregnancy" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
              Early Pregnancy
            </h2>
            <p className="text-gray-600 mb-4">
              Early pregnancy testing and monitoring to ensure healthy development in the first trimester.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Coming soon - detailed test information and booking options.</p>
            </div>
          </section>

          {/* MediMenopause */}
          <section id="MediMenopause" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
              MediMenopause
            </h2>
            <p className="text-gray-600 mb-4">
              Menopause and perimenopause testing to monitor hormonal changes and manage symptoms effectively.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Coming soon - detailed test information and booking options.</p>
            </div>
          </section>

          {/* AMH */}
          <section id="AMH" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
              AMH (Anti-Müllerian Hormone)
            </h2>
            <p className="text-gray-600 mb-4">
              Ovarian reserve testing to assess fertility potential and reproductive health status.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Coming soon - detailed test information and booking options.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FemaleHealthPage;
