"use client"
import { FC } from 'react';
import PageHero from '@/components/PageHero';
import SectionComponent from '@/components/SectionComponent';
import ServicesOverviewSection from '@/components/ServicesOverviewSection';
import Image from 'next/image';

const NewsPage: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero heading="News" />

      {/* News Articles Section */}

      <SectionComponent
        title="October 2024"
        image="/images/news-2.avif"
        imageAlt="New Advanced Testing Equipment Installed"

      >
        <p className="text-gray-600 mb-4">
          Medilab is offering Allergy testing for food and common allergies. An allergy is a response or hypersensitivity to a substance that would normally be harmless but it produces a reaction in your body. Did you know 6% of the Jersey population has food allergies, making it essential to know your allergy status?
        </p>

      </SectionComponent>
      <SectionComponent
        title="May 2024"
        image="/images/news-1.avif"
        imageAlt="New Advanced Testing Equipment Installed"
        reverse
      >
        <p className='text-gray-600 mb-4'> MediLab Ltd has updated several important Cardiac markers. One test of vital importance, which can significantly improve patient outcomes is our test for Heart-Type Fatty Acid-Binding Protein (H-FABP). This test is able to help aid diagnostically with differentiating between coronary pain and non-cardiac chest pain. </p>

        <p className='text-gray-600 mb-4'> H-FABP is released into the bloodstream within 30 minutes of a heart attack, and is also released from the heart during the early stages of a heart attack. Due to its small size, it can be detected when the heart cells are being damaged, rather than at the stage when cell death has already occurred (current troponin test). The test can also be used to identify people who are at high risk of heart attack in the near future. </p>

        <p className='text-gray-600 mb-4'> MediLab is pleased to offer this test along with several other Cardiac markers. </p>
      </SectionComponent>
      <SectionComponent
        title="March 2024"
        image="/images/calendar.avif"
        imageAlt="New Advanced Testing Equipment Installed"
      >
        <p className='text-gray-600 mb-4'> We listened to customer feedback and wanted to make our booking process easier! We have now built in an online booking calendar to our website to make booking your health check even easier. </p>
      </SectionComponent>
      <SectionComponent
        title="February 2024"
        image="/images/virology.avif"
        imageAlt="New Advanced Testing Equipment Installed"
        reverse
      >
        <p className='text-gray-600 mb-4'> MediLab is proud to include Lipoproteins as part of our testing regime, extending our repetoire to meet our customers needs. The test set includes Lipoprotein (a) Lp(a), Apolipoprotein A (Apo A) , Apolipoprotein B (Apo B).</p>
        <p className='text-gray-600 mb-4'>Lipoproteins are particles made of protein and fats (lipids). They carry cholesterol through your bloodstream to your cells. A lipoprotein (a) blood test can give you a more accurate understanding of your risk than a routine cholesterol test that only measures your total LDL and HDL cholesterol level. That’s because a routine cholesterol test may show that your LDL cholesterol level is “healthy,” but if a large percentage of your LDL cholesterol is carried by lipoprotein (a) particles, your risk for heart disease and stroke could still be high. </p>
      </SectionComponent>
      <SectionComponent
        title="January 2024"
        image="/images/lab1.avif"
        imageAlt="New Advanced Testing Equipment Installed"
      >
        <p className='text-gray-600 mb-4'>MediLab has acheieved a new milestone by upgrading our Quality Management System to a state of the art software provided by our new partner who is trusted by laboratory and quality managers at some of the world’s best known healthcare and research facilities.</p>
        <p className='text-gray-600 mb-4'>This allows MediLab to digitise, streamline and improve the day to day management of quality and compliance providing us with the tools to meet our regulatory compliance requirements. </p>
      </SectionComponent>

      <ServicesOverviewSection />

       <div className="py-16 px-4" style={{ background: 'var(--section-gradient-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Text Content */}
            <div className="lg:w-1/2 text-white mb-8 lg:mb-0">
              <h2 className="text-3xl lg:text-4xl font-secondary font-light mb-6 leading-tight">
                MEDILAB is a Medical Laboratory with a reputation for excellence in providing quality service to Jersey and beyond
              </h2>
            </div>
      
            {/* Logo */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <Image
                src="/images/medilab-logo.png"
                alt="MediLab Logo"
                width={350}
                height={180}
                className="object-contain max-w-full h-auto"
                onError={(e) => {
                  // Fallback to text logo if image not found
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="text-white text-5xl lg:text-6xl font-bold">
                        Medi<span style="color: var(--accent-color);">Lab</span>
                      </div>
                    `;
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default NewsPage;
