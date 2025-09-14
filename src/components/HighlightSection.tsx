import Image from "next/image";
import React from "react";
interface HighlightSectionProps {
  slogan?: string;
}
const HighlightSection: React.FC<HighlightSectionProps> = ({slogan}) => {
  return (
    <div
      className=""
      style={{ background: "var(--section-gradient-primary)" }}
    >
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 text-white mt-5 lg:mb-0 p-2 text-center sm:text-left">
            <h2 className="text-3xl lg:text-4xl font-secondary font-light mb-6 leading-tight">
              {slogan ?? "MEDILAB is a Medical Laboratory with a reputation for excellence in providing quality service to Jersey and beyond"}
            </h2>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
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
