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


        </div>
      </div>
    </div>
  );
};

export default FemaleHealthPage;
