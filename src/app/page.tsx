import "./globals.css";
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TestsSection from '@/components/TestsSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServicesOverviewSection from '@/components/ServicesOverviewSection';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TestsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ServicesOverviewSection />
      {/* Contact Section */}
      <div className="py-11 text-center" style={{
            backgroundImage:
              "linear-gradient(to right, rgba(30, 182, 185, 0.9), rgba(31, 151, 185, 0.9))",
          }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <h2 className="text-white text-2xl lg:text-3xl font-light">
                For any enquiries please contact us by email
              </h2>
              <Link href={"mailto:info@medilabje.com"} className="bg-[#5db8cd] hover:bg-[#84C8DA] cursor-pointer text-white px-8 py-4  text-lg font-medium transition-colors">
                CONTACT NOW
              </Link>
            </div>
          </div>
    </>
  );
}
