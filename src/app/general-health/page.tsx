import { FC } from 'react';

const GeneralHealthPage: FC = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">General Health Tests</h1>
        
        <div className="space-y-8">
          {/* Thyroid */}
          <section id="Thyroid" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
              Thyroid
            </h2>
            <p className="text-gray-600 mb-4">
              Comprehensive thyroid function testing including TSH, T3, T4, and thyroid antibodies to assess thyroid health.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Coming soon - detailed test information and booking options.</p>
            </div>
          </section>

          {/* MediVitamin */}
          <section id="MediVitamin" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
              MediVitamin
            </h2>
            <p className="text-gray-600 mb-4">
              Complete vitamin and mineral deficiency screening to optimize your nutritional health and wellbeing.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Coming soon - detailed test information and booking options.</p>
            </div>
          </section>

          {/* MediDiscover */}
          <section id="MediDiscover" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
              MediDiscover
            </h2>
            <p className="text-gray-600 mb-4">
              Comprehensive health discovery package for those seeking a complete overview of their current health status.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Coming soon - detailed test information and booking options.</p>
            </div>
          </section>

          {/* MediEssential */}
          <section id="MediEssential" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
              MediEssential
            </h2>
            <p className="text-gray-600 mb-4">
              Essential health screening covering the most important markers for overall health and disease prevention.
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

export default GeneralHealthPage;
