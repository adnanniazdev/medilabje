import Image from 'next/image';
import React, { ReactNode } from 'react';

interface SectionComponentProps {
  id?:string;
  title: string;
  titleColor?: string;
  titleSize: string;
  image: string;
  imageAlt?: string;
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}

const SectionComponent: React.FC<SectionComponentProps> = ({
  id,
  title,
  titleColor = "text-primary-light",
  titleSize = "text-[25px]",
  image,
  imageAlt = "",
  children,
  reverse = false,
  className = ""
}) => {
  return (
    <section id={id} className={`w-full max-w-6xl mx-auto py-10 ${className}`}>
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}  gap-5 px-[10px]`}>
        
        {/* Content Section */}
        <div className="flex-1 space-y-4">
          <h2 className={`${titleSize} font-semibold ${titleColor} `}>
            {title}
          </h2>
          
          <div className="text-secondary-light leading-relaxed space-y-4">
            {children}
          </div>
        </div>
        
        {/* Image Section */}
        <div className="flex-1">
          <div className="w-full aspect-[550/365]  overflow-hidden shadow-lg">
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
    </section>
  );
};

export default SectionComponent;