import { Metadata } from 'next';
import AboutContent from '@/components/About/AboutContent';

export const metadata: Metadata = {
  title: "About Sysbreeze | IT Company in Calicut & Kerala",
  description: "Learn about Sysbreeze Technologies, a leading IT company in Calicut offering IT services, HR management, digital marketing, software solutions, and training.",
  keywords: "why choose sysbreeze, sysbreeze technologies, web design company in Calicut, seo services in kerala, seo services in calicut, erp solutions in kerala, erp solutions in calicut, mobile app development in kerala, mobile app development in calicut, digital marketing courses in calicut, hr management courses in kerala, it companies in calicut, it companies in kerala, software companies in kerala, software companies in calicut",
  alternates: {
    canonical: "https://www.sysbreeze.com/about",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "sysbreeze",
    "url": "https://www.sysbreeze.com",
    "logo": "https://www.sysbreeze.com/Gemini_Generated_Image_bmzwfebmzwfebmzw-removebg-previewn.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 94466 21444",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.facebook.com/sysbreeze",
      "https://www.instagram.com/sysbreeze",
      "https://www.linkedin.com/company/sysbreeze"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </>
  );
}
