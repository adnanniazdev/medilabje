import Image from 'next/image';
import React, { ReactNode } from 'react';

interface SectionComponentProps {
  title: string;
  titleColor?: string;
  image: string;
  imageAlt?: string;
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}

const SectionComponent: React.FC<SectionComponentProps> = ({
  title,
  titleColor = "text-[#1F97B9]",
  image,
  imageAlt = "",
  children,
  reverse = false,
  className = ""
}) => {
  return (
    <div className={`w-full max-w-6xl mx-auto p-10 ${className}`}>
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}  gap-8 lg:gap-12`}>
        
        {/* Content Section */}
        <div className="flex-1 space-y-4">
          <h2 className={`text-2xl lg:text-3xl font-light ${titleColor}`}>
            {title}
          </h2>
          
          <div className="text-gray-600 leading-relaxed space-y-4">
            {children}
          </div>
        </div>
        
        {/* Image Section */}
        <div className="flex-1">
          <div className="w-full aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden shadow-lg">
            <Image
              src={image} 
              alt={imageAlt}
              width={550}
              height={350}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SectionComponent;