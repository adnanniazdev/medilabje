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

    </div>
  );
};

export default AthleteHealthPage;
