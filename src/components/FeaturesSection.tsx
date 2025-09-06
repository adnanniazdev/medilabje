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
      description: "Be in control of your own health and prevent future diseases"
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
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex items-start space-x-4">
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--light-accent)' }}>
                  <IconComponent className="w-8 h-8" style={{ color: 'var(--primary-color)' }} />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
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
