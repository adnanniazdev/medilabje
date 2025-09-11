"use client"
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

        </div>
      </section>

    </div>
  );
};

export default SpecialitiesPage;
