import CustomBulled from '@/components/CustomBulled';
import HealthComponent from '@/components/HealthComponent';
import { male_health_tests, MaleHealthContent, mediManPackage } from '@/utils/constans';
import { FC } from 'react';

const MaleHealthPage: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[url('/images/test-bg-img.jpg')] object-contain text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Male Health</h1>
        </div>
      </section>

      <div className="px-4 py-12 max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {male_health_tests.map((test) => (
            <div
              key={test.title}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <img
                src={test.image}
                alt={test.title}
                className="w-full h-48 object-contain"
              />

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-primary-light mb-2">{test.title}</h3>
                <p className="text-sm text-gray-600 mb-3 flex-1">{test.description}</p>
                <p className="text-4xl font-semibold text-secondary mb-4">{test.fees}</p>
                <p className="text-sm text-gray-600 mb-4 flex-1">Interest-free payments available</p>
                <a
                  href={test.href}
                  className="mt-auto inline-block text-white bg-primary-dark transition-colors duration-200 text-center py-3 px-3"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <HealthComponent HealthContent={MaleHealthContent} />
    </div>
  );
};

export default MaleHealthPage;
