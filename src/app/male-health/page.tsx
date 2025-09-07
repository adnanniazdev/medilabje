import { FC } from 'react';

const MaleHealthPage: FC = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Male Health Tests</h1>
        
        <div className="space-y-8">
          {/* MediMan */}
          <section id="MediMan" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
              MediMan
            </h2>
            <p className="text-gray-600 mb-4">
              Comprehensive male health screening package designed to assess overall wellness and detect potential health issues early.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Coming soon - detailed test information and booking options.</p>
            </div>
          </section>

          {/* PSA */}
          <section id="PSA" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
              PSA (Prostate-Specific Antigen)
            </h2>
            <p className="text-gray-600 mb-4">
              Prostate health screening test to detect potential prostate issues including cancer, enlargement, and inflammation.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Coming soon - detailed test information and booking options.</p>
            </div>
          </section>

          {/* MediMaleBasic */}
          <section id="MediMaleBasic" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
              MediMale Basic
            </h2>
            <p className="text-gray-600 mb-4">
              Essential male health screening covering basic blood work, hormone levels, and key health indicators.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Coming soon - detailed test information and booking options.</p>
            </div>
          </section>

          {/* MediAthlete */}
          <section id="MediAthlete" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
              MediAthlete
            </h2>
            <p className="text-gray-600 mb-4">
              Specialized testing for active men and athletes, focusing on performance, recovery, and sports-related health metrics.
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

export default MaleHealthPage;
