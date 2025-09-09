'use client';

import { FC, useState } from 'react';
import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { accordionItems } from '@/data/corporate-data';



const CorporateInformationPage: FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);



  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax Background */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(30, 182, 185, 0.9), rgba(31, 151, 185, 0.9)), url('/images/hero-slide-1.avif')",
            backgroundAttachment: "fixed",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 h-auto flex flex-col  items-center px-4">
          <div className="max-w-7xl mx-auto w-full bg-[#0CB2AC] p-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Corporate Information
            </h1>
          </div>

          {/* Accordion */}
          <div className="max-w-7xl mx-auto w-full space-y-4">
            {accordionItems.map((item) => (
              <div
                key={item.id}
                className="bg-white bg-opacity-90 backdrop-blur-sm  shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-4xl font-medium text-gray-800">
                    {item.title}
                  </span>
                  {openAccordion === item.id ? (
                    <Minus className="w-8 h-8 text-[#1F97B9]" />
                  ) : (
                    <Plus className="w-8 h-8 text-[#1F97B9]" />
                  )}
                </button>

                {openAccordion === item.id && (
                  <div className="px-6 pb-6">
                    <div className="px-6 pb-6">
                      <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                        {item.content}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateInformationPage;
