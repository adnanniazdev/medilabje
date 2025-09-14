import Script from 'next/script';

interface StructuredDataProps {
  type?: 'organization' | 'medicalBusiness' | 'service';
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = 'organization' }) => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "MediLab Jersey",
    "description": "MEDILAB is a Medical Laboratory with a reputation for excellence in providing quality service to Jersey and beyond. Professional medical testing and diagnostics with accurate, reliable results.",
    "url": "https://medilab.je",
    "logo": "https://medilab.je/images/medilab-logo.png",
    "image": "https://medilab.je/images/lab1.avif",
    "telephone": "+44-1534-XXXXXX",
    "email": "info@medilabje.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jersey Medical Laboratory",
      "addressLocality": "Jersey",
      "addressCountry": "JE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.2144",
      "longitude": "-2.1312"
    },
    "openingHours": "Mo-Fr 08:00-17:00",
    "priceRange": "$$",
    "medicalSpecialty": [
      "Clinical Pathology",
      "Hematology",
      "Clinical Chemistry",
      "Microbiology",
      "Immunology"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "49.2144",
        "longitude": "-2.1312"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medical Laboratory Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTest",
            "name": "Blood Tests",
            "description": "Comprehensive blood testing and analysis"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTest",
            "name": "Diagnostic Testing",
            "description": "Advanced diagnostic testing services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTest",
            "name": "Health Screening",
            "description": "Preventive health screening tests"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/medilabjersey",
      "https://www.linkedin.com/company/medilab-jersey"
    ]
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Medical Laboratory Services",
    "description": "Professional medical laboratory services including blood tests, diagnostic testing, and health screenings in Jersey.",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "MediLab Jersey"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Jersey"
    },
    "serviceType": "Medical Laboratory Testing",
    "offers": {
      "@type": "Offer",
      "description": "Comprehensive medical testing services",
      "priceCurrency": "GBP"
    }
  };

  const data = type === 'service' ? serviceData : organizationData;

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
};

export default StructuredData;
