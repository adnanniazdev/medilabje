import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollToTop from "@/components/ScrollToTop";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "MediLab - Medical Laboratory Services in Jersey",
  description: "MEDILAB is a Medical Laboratory with a reputation for excellence in providing quality service to Jersey and beyond. Professional medical testing and diagnostics with accurate, reliable results.",
  keywords: "medical laboratory, Jersey, medical testing, diagnostics, health check, blood tests, laboratory services, medical analysis",
  authors: [{ name: "MediLab Jersey" }],
  creator: "MediLab Jersey",
  publisher: "MediLab Jersey",
  robots: "index, follow",
  alternates: {
    canonical: "https://medilab.je",
  },
  openGraph: {
    title: "MediLab - Medical Laboratory Services in Jersey",
    description: "Professional medical laboratory services with a reputation for excellence in Jersey and beyond.",
    url: "https://medilab.je",
    siteName: "MediLab Jersey",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "https://medilab.je/images/medilab-logo.png",
        width: 1200,
        height: 630,
        alt: "MediLab Jersey - Medical Laboratory Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MediLab - Medical Laboratory Services in Jersey",
    description: "Professional medical laboratory services with a reputation for excellence in Jersey and beyond.",
    images: ["https://medilab.je/images/medilab-logo.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1F97B9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <StructuredData type="organization" />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        {/* <PreFooter /> */}
        <Footer />
        <ScrollToTop />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
