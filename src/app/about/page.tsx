import { FC } from 'react';
import PageHero from '@/components/PageHero';

const AboutPage: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero heading="About" />
    </div>
  );
};

export default AboutPage;
