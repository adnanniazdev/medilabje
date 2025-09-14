import { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  noIndex?: boolean;
  ogImage?: string;
}

export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
  noIndex = false,
  ogImage = '/images/medilab-logo.png'
}: SEOConfig): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://medilab.je';
  
  return {
    title: `${title} | MediLab Jersey`,
    description,
    keywords: keywords ? `${keywords}, medical laboratory jersey, medilab` : 'medical laboratory jersey, medilab',
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: canonical ? `${baseUrl}${canonical}` : undefined,
    },
    openGraph: {
      title: `${title} | MediLab Jersey`,
      description,
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      siteName: 'MediLab Jersey',
      type: 'website',
      locale: 'en_GB',
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | MediLab Jersey`,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`],
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
