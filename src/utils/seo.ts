import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  author?: string;
  tags?: string[];
}

export function generateMetadata({
  title,
  description,
  keywords = "medical laboratory, Jersey, medical testing, diagnostics, health check, blood tests, laboratory services, medical analysis",
  path = "",
  image = "https://medilab.je/images/medilab-logo.png",
  noIndex = false,
  author = "MediLab Jersey",
  tags = []
}: SEOProps): Metadata {
  const fullTitle = title.includes("MediLab") ? title : `${title} | MediLab Jersey`;
  const url = `https://medilab.je${path}`;
  const fullKeywords = keywords + (tags.length > 0 ? `, ${tags.join(", ")}` : "");

  return {
    title: fullTitle,
    description,
    keywords: fullKeywords,
    authors: [{ name: author }],
    creator: author,
    publisher: "MediLab Jersey",
    robots: noIndex ? "noindex, nofollow" : "index, follow",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "MediLab Jersey",
      type: "website",
      locale: "en_GB",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - MediLab Jersey`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    // verification: {
    //   google: "your-google-verification-code",
    // },
  };
}

// Common SEO data for different page types
export const seoData = {
  home: {
    title: "MediLab - Medical Laboratory Services in Jersey",
    description: "MEDILAB is a Medical Laboratory with a reputation for excellence in providing quality service to Jersey and beyond. Professional medical testing and diagnostics with accurate, reliable results.",
    keywords: "medical laboratory, Jersey, medical testing, diagnostics, health check, blood tests, laboratory services, medical analysis",
    path: "/",
  },
  about: {
    title: "About Us - MediLab Jersey Medical Laboratory",
    description: "Learn about MediLab Jersey, an independent medical laboratory providing high-quality diagnostic testing. Located in Strive Health Club, St Peter, with experienced consultants and cutting-edge technology.",
    keywords: "about medilab, medical laboratory Jersey, diagnostic testing, health professionals, Strive Health Club, medical consultants",
    path: "/about-us",
  },
  tests: {
    title: "Medical Tests & Health Profiles - MediLab Jersey",
    description: "Comprehensive range of medical tests and health profiles at MediLab Jersey. From routine health checks to specialized blood tests, we provide accurate results with quick turnaround times.",
    keywords: "medical tests, health profiles, blood tests, routine health checks, specialized testing, test profiles, male health, female health, athlete health",
    path: "/tests",
  },
  services: {
    title: "Medical Laboratory Services - MediLab Jersey",
    description: "Professional medical laboratory services including sample collection, testing, postal services, and home phlebotomy. Quality diagnostic services for individuals and healthcare professionals.",
    keywords: "laboratory services, sample collection, medical testing, postal services, home phlebotomy, diagnostic services, healthcare professionals",
    path: "/services",
  },
  news: {
    title: "Medical News & Health Awareness - MediLab Jersey",
    description: "Stay updated with the latest medical news, health awareness days, and laboratory updates from MediLab Jersey. Important health information and awareness campaigns.",
    keywords: "medical news, health awareness, laboratory updates, health information, awareness campaigns, health days 2025",
    path: "/news",
  },
  patients: {
    title: "Patient Information - MediLab Jersey",
    description: "Essential information for patients visiting MediLab Jersey. Learn about our COVID policy, patient reception, phlebotomy services, and what to expect during your visit.",
    keywords: "patient information, COVID policy, patient reception, phlebotomy services, medical visit, laboratory visit",
    path: "/patients",
  },
  specialities: {
    title: "Medical Specialities - MediLab Jersey",
    description: "Expert medical laboratory services across multiple specialities including haematology, chemistry, virology, and immunology. Professional diagnostic testing with accurate results.",
    keywords: "medical specialities, haematology, chemistry, virology, immunology, diagnostic testing, laboratory specialities",
    path: "/specialities",
  },
  maleHealth: {
    title: "Male Health Testing - MediLab Jersey",
    description: "Comprehensive male health testing and screening services at MediLab Jersey. From prostate health to testosterone levels, we provide detailed health insights for men.",
    keywords: "male health, men's health, prostate testing, testosterone, male screening, men's health checks",
    path: "/male-health",
  },
  femaleHealth: {
    title: "Female Health Testing - MediLab Jersey",
    description: "Specialized female health testing and screening services at MediLab Jersey. Comprehensive women's health profiles including fertility, menopause, and hormonal testing.",
    keywords: "female health, women's health, fertility testing, menopause, hormonal testing, women's screening",
    path: "/female-health",
  },
  generalHealth: {
    title: "General Health Testing - MediLab Jersey",
    description: "Comprehensive general health testing and screening services at MediLab Jersey. Routine health checks, wellness profiles, and preventive health monitoring.",
    keywords: "general health, routine health checks, wellness profiles, preventive health, health screening, general testing",
    path: "/general-health",
  },
  athleteHealth: {
    title: "Athlete Health Testing - MediLab Jersey",
    description: "Specialized athlete health testing and performance monitoring at MediLab Jersey. Sports medicine testing, performance biomarkers, and injury prevention screening.",
    keywords: "athlete health, sports medicine, performance testing, athlete screening, sports biomarkers, injury prevention",
    path: "/athlete-health",
  },
  corporate: {
    title: "Corporate Information - MediLab Jersey",
    description: "Corporate information and business details for MediLab Jersey. Learn about our company structure, policies, and corporate health services.",
    keywords: "corporate information, business details, company structure, corporate health, business services",
    path: "/corporate-information",
  },
  privacy: {
    title: "Privacy Policy - MediLab Jersey",
    description: "Privacy policy and data protection information for MediLab Jersey. Learn how we protect your personal and medical information.",
    keywords: "privacy policy, data protection, medical privacy, patient confidentiality, GDPR compliance",
    path: "/privacy-policy",
  },
};