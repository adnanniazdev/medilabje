'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Test {
  id: string;
  name: string;
  icon: string;
  url: string;
  category: 'male-health' | 'female-health' | 'general-health';
}

const TestsSection: FC = () => {
  // Separate slide states for each category on mobile
  const [maleHealthSlide, setMaleHealthSlide] = useState(0);
  const [femaleHealthSlide, setFemaleHealthSlide] = useState(0);
  const [generalHealthSlide, setGeneralHealthSlide] = useState(0);

  const tests: Test[] = [
    // Male Health Tests
    { id: 'mediman', name: 'MediMan', icon: '/images/test-images/ML-man.avif', url: '/male-health#MediMan', category: 'male-health' },
    { id: 'psa', name: 'PSA', icon: '/images/test-images/ML-prost.avif', url: '/male-health#PSA', category: 'male-health' },
    { id: 'medimalebasic', name: 'MediMale Basic', icon: '/images/test-images/ML-male.avif', url: '/male-health#MediMaleBasic', category: 'male-health' },
    { id: 'mediathlete', name: 'MediAthlete', icon: '/images/test-images/ML-ath.avif', url: '/male-health#MediAthlete', category: 'male-health' },

    // Female Health Tests
    { id: 'medimother', name: 'MediMother', icon: '/images/test-images/ML-preg.avif', url: '/female-health#MediMother', category: 'female-health' },
    { id: 'mediwoman', name: 'MediWoman', icon: '/images/test-images/ML-woman.avif', url: '/female-health#MediWoman', category: 'female-health' },
    { id: 'medifemalebasic', name: 'MediFemale Basic', icon: '/images/test-images/ML-fem.avif', url: '/female-health#MediFemaleBasic', category: 'female-health' },
    { id: 'pcos', name: 'PCOS', icon: '/images/test-images/ML-ovary.avif', url: '/female-health#PCOS', category: 'female-health' },
    { id: 'medifertility', name: 'MediFertility', icon: '/images/test-images/ML-fert.avif', url: '/female-health#MediFertility', category: 'female-health' },
    { id: 'earlypregnancy', name: 'Early Pregnancy', icon: '/images/test-images/ML-early.avif', url: '/female-health#EarlyPregnancy', category: 'female-health' },
    { id: 'medimenopause', name: 'MediMenopause', icon: '/images/test-images/ML-meno.avif', url: '/female-health#MediMenopause', category: 'female-health' },
    { id: 'amh', name: 'AMH', icon: '/images/test-images/ML-amh.avif', url: '/female-health#AMH', category: 'female-health' },

    // General Health Tests
    { id: 'thyroid', name: 'Thyroid', icon: '/images/test-images/ML-thy.avif', url: '/general-health#Thyroid', category: 'general-health' },
    { id: 'medivitamin', name: 'MediVitamin', icon: '/images/test-images/ML-vita.avif', url: '/general-health#MediVitamin', category: 'general-health' },
    { id: 'medidiscover', name: 'MediDiscover', icon: '/images/test-images/ML-disc.avif', url: '/general-health#MediDiscover', category: 'general-health' },
    { id: 'mediessential', name: 'MediEssential', icon: '/images/test-images/ML-ess.avif', url: '/general-health#MediEssential', category: 'general-health' },
  ];

  // Group tests by category for mobile slides
  const testsByCategory = {
    'male-health': tests.filter(test => test.category === 'male-health'),
    'female-health': tests.filter(test => test.category === 'female-health'),
    'general-health': tests.filter(test => test.category === 'general-health'),
  };

  // Navigation functions for each category
  const nextMaleHealthSlide = () => {
    setMaleHealthSlide((prev) => (prev + 1) % testsByCategory['male-health'].length);
  };

  const prevMaleHealthSlide = () => {
    setMaleHealthSlide((prev) => (prev - 1 + testsByCategory['male-health'].length) % testsByCategory['male-health'].length);
  };

  const nextFemaleHealthSlide = () => {
    setFemaleHealthSlide((prev) => (prev + 1) % testsByCategory['female-health'].length);
  };

  const prevFemaleHealthSlide = () => {
    setFemaleHealthSlide((prev) => (prev - 1 + testsByCategory['female-health'].length) % testsByCategory['female-health'].length);
  };

  const nextGeneralHealthSlide = () => {
    setGeneralHealthSlide((prev) => (prev + 1) % testsByCategory['general-health'].length);
  };

  const prevGeneralHealthSlide = () => {
    setGeneralHealthSlide((prev) => (prev - 1 + testsByCategory['general-health'].length) % testsByCategory['general-health'].length);
  };

  const TestCard: FC<{ test: Test }> = ({ test }) => (
    <a
      href={test.url}
      className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
    >
      <div className="w-20 h-20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200">
        <Image
          src={test.icon}
          alt={test.name}
          width={80}
          height={80}
          className="object-contain"
          onError={(e) => {
            // Fallback to a simple colored circle with text
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="w-20 h-20 rounded-full flex items-center justify-center text-white text-sm font-bold" style="background-color: var(--primary-color); border: 3px solid var(--primary-color);">
                  ${test.name.substring(0, 2).toUpperCase()}
                </div>
              `;
            }
          }}
        />
      </div>
      <span className="text-sm font-medium text-gray-700 text-center group-hover:text-gray-900">
        {test.name}
      </span>
    </a>
  );

  // Mobile row component for individual category sliding
  const MobileTestRow: FC<{
    categoryName: string;
    tests: Test[];
    currentSlide: number;
    onNext: () => void;
    onPrev: () => void;
  }> = ({ categoryName, tests, currentSlide, onNext, onPrev }) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">
        {categoryName}
      </h3>
      <div className="flex items-center justify-between">
        <button
          onClick={onPrev}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex-shrink-0"
          aria-label={`Previous ${categoryName} test`}
        >
          <ChevronLeft size={20} style={{ color: 'var(--primary-color)' }} />
        </button>

        <div className="flex-1 flex justify-center mx-4">
          <TestCard test={tests[currentSlide]} />
        </div>

        <button
          onClick={onNext}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex-shrink-0"
          aria-label={`Next ${categoryName} test`}
        >
          <ChevronRight size={20} style={{ color: 'var(--primary-color)' }} />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center space-x-1 mt-3">
        {tests.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'w-4'
                : 'bg-gray-300'
            }`}
            style={{
              backgroundColor: index === currentSlide ? 'var(--primary-color)' : undefined
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Tests</h2>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tests.map((test) => (
              <TestCard key={test.id} test={test} />
            ))}
          </div>
        </div>

        {/* Mobile 3-Row Layout */}
        <div className="md:hidden">
          <div className="space-y-6">
            {/* Male Health Row */}
            <MobileTestRow
              categoryName="Male Health"
              tests={testsByCategory['male-health']}
              currentSlide={maleHealthSlide}
              onNext={nextMaleHealthSlide}
              onPrev={prevMaleHealthSlide}
            />

            {/* Female Health Row */}
            <MobileTestRow
              categoryName="Female Health"
              tests={testsByCategory['female-health']}
              currentSlide={femaleHealthSlide}
              onNext={nextFemaleHealthSlide}
              onPrev={prevFemaleHealthSlide}
            />

            {/* General Health Row */}
            <MobileTestRow
              categoryName="General Health"
              tests={testsByCategory['general-health']}
              currentSlide={generalHealthSlide}
              onNext={nextGeneralHealthSlide}
              onPrev={prevGeneralHealthSlide}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestsSection;
