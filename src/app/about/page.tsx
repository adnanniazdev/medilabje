import { FC } from 'react';
import PageHero from '@/components/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About MediLab - Medical Laboratory Services in Jersey',
  description: 'Learn about MediLab Jersey, a leading medical laboratory with a reputation for excellence in providing quality diagnostic services to Jersey and beyond.',
  keywords: 'about medilab, medical laboratory jersey, diagnostic services, lab history, quality testing',
  openGraph: {
    title: 'About MediLab - Medical Laboratory Services in Jersey',
    description: 'Learn about MediLab Jersey, a leading medical laboratory with a reputation for excellence in providing quality diagnostic services.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About MediLab - Medical Laboratory Services in Jersey',
    description: 'Learn about MediLab Jersey, a leading medical laboratory with a reputation for excellence in providing quality diagnostic services.',
  },
};

const AboutPage: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero heading="About" />
    </div>
  );
};

export default AboutPage;
