import Image from "next/image";
import React from "react";

const HighlightSection: React.FC = () => {
  return (
    <div
      className="py-16 px-4"
      style={{ background: "var(--section-gradient-primary)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 text-white mb-8 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl text-center  font-light mb-6 leading-tight" style={{ fontFamily: 'var(--font-secondary)' , fontWeight: "lighter !important"}}>
              MEDILAB is a Medical Laboratory with a reputation for excellence in
              providing quality service to Jersey and beyond
            </h2>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center ">
            <Image
              src="/images/medilab-logo.png"
              alt="MediLab Logo"
              width={350}
              height={180}
              className="object-contain max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
