'use client';

import { FC } from 'react';
import { User, Smile, Heart, Calendar, Briefcase, BarChart3 } from 'lucide-react';

const FeaturesSection: FC = () => {
  const features = [
    {
      icon: User,
      title: "Superior Service",
      description: "We offer on-site appointments with results within 2 working days"
    },
    {
      icon: Smile,
      title: "Be In Control",
      description: "Be in control of your own health and prevent future illnesses"
    },
    {
      icon: BarChart3,
      title: "Invest In Yourself",
      description: "Track your health and make adjustments for training, health and much more"
    },
    {
      icon: Heart,
      title: "Quality Assurance",
      description: "We have strict Quality Assurance at MediLab ensuring your results are reliable and accurate"
    },
    {
      icon: Calendar,
      title: "Our Priority",
      description: "Your health check is OUR priority"
    },
    {
      icon: Briefcase,
      title: "Test Profiles",
      description: "We offer a wide range of test profiles to suit your needs"
    }
  ];

  return (
    <section className="w-full bg-[#E8F6F6] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex items-start space-x-6">
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-[80px] h-[80px] bg-[#B8E6E6] rounded-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-[#1F97B9]" />
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;