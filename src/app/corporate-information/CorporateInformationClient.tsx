'use client';

import { FC, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { accordionItems } from '@/data/corporate-data';
import Image from 'next/image';
import Link from 'next/link';

const CorporateInformationClient: FC = () => {
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);

  const toggleAccordion = (id: string) => {
    if (openAccordions.includes(id)) {
      setOpenAccordions(openAccordions.filter(itemId => itemId !== id));
    } else {
      setOpenAccordions([...openAccordions, id]);
    }
  };

  return (
    <>
      {/* Parallax Section */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(30, 182, 185, 0.9), rgba(31, 151, 185, 0.9)), url('/images/hero-slide-1.avif')",
            backgroundAttachment: "fixed",
          }}
        ></div>

        <div className="relative z-10 h-auto flex flex-col my-16 items-center px-4">
          <div className="max-w-7xl mx-auto w-full bg-[#0CB2AC] mb-12 p-6 text-center">
            <h1 className="text-4xl font-bold text-white">Corporate Information</h1>
          </div>

          <div className="max-w-7xl mx-auto w-full space-y-4">
            {accordionItems.map((item) => (
              <div
                key={item.id}
                className="bg-white bg-opacity-90 backdrop-blur-sm shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-7 cursor-pointer text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-4xl !font-thin font-sans text-gray-800">
                    {item.title}
                  </span>
                  {openAccordions.includes(item.id) ? (
                    <Minus className="w-8 h-8 text-[#1F97B9]" />
                  ) : (
                    <Plus className="w-8 h-8 text-[#1F97B9]" />
                  )}
                </button>

                {openAccordions.includes(item.id) && (
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openAccordions.includes(item.id)
                        ? "max-h-auto opacity-100 px-6 pb-6"
                        : "max-h-0 opacity-0 px-6"
                    }`}
                  >
                    <div
                      className="text text-secondary-light leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: item.content.replace(/\n/g, '<br/>')
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Images Section */}
      <div className="w-full bg-white py-3 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-0">
            <div className="flex-1">
              <div className="w-full h-80 overflow-hidden">
                <Image
                  src={"/images/lab4.avif"}
                  alt={"Microscope"}
                  width={550}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="w-full h-80 overflow-hidden">
                <Image
                  src={"/images/lab3.avif"}
                  alt={"Test tubes"}
                  width={550}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        className="py-11 text-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(30, 182, 185, 0.9), rgba(31, 151, 185, 0.9))",
        }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <h2 className="text-white text-2xl lg:text-3xl font-light">
            For any enquiries please contact us by email
          </h2>
          <Link 
            href={"mailto:info@medilab.je"} 
            className="bg-[#5db8cd] hover:bg-[#84C8DA] text-white px-8 py-5 text-lg font-medium transition-colors"
          >
            CONTACT NOW
          </Link>
        </div>
      </div>
    </>
  );
};

export default CorporateInformationClient;
