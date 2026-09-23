import { Metadata } from 'next';
import Hero from "@/components/Ui/Hero/hero";
import ServicesSection from "@/components/Services/ServicesSection";
import WorksSection from "@/components/Works/WorksSection";
import TrainingSection from "@/components/Training/TrainingSection";
import InternshipAndTrainingGallery from "@/components/Training/InternshipAndTrainingGallery";
import AboutUs from "@/components/Ui/AboutUs/AboutUs";
import Testimonials from "@/components/Ui/Testimonials/Testimonials";
import HomeFaq from "@/components/Ui/HomeFaq/HomeFaq";



export const metadata: Metadata = {
  title: "Best IT Company in Calicut | Sysbreeze Technologies",
  description:
    "Looking for the best IT company in Calicut? Sysbreeze Technologies offers web development, SEO, digital marketing, ERP and IT solutions.",
  keywords: "Sysbreeze technologies, best it company in calicut, best it company in kerala, training courses in calicut, digital marketing courses in calicut, digital marketing company in calicut, hr management courses in calicut, it companies in calicut, it companies in kochi,software company in calicut, website development company in kerala, mobile application in calicut, ecommerce development in calicut, industry focused training courses in calicut",
  alternates: {
    canonical: "https://www.sysbreeze.com",
  },
};


export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Sysbreeze Technologies provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sysbreeze Technologies provides a wide range of IT and business solutions, including web development, digital marketing, SEO, ERP software, mobile app development, branding, HR management, and professional IT training."
        }
      },
      {
        "@type": "Question",
        "name": "Is Sysbreeze Technologies a software company in Calicut?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Sysbreeze Technologies is an IT and software solutions company serving businesses in Calicut (Kozhikode), Kerala, and other locations with technology, digital marketing, software development, and business solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Does Sysbreeze provide digital marketing services in Kerala?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Sysbreeze provides digital marketing services including SEO, social media marketing, Google Ads, Meta Ads, content marketing, and other digital growth solutions for businesses across Kerala."
        }
      },
      {
        "@type": "Question",
        "name": "Does Sysbreeze offer SEO services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Sysbreeze provides SEO services designed to improve website visibility, organic search rankings, qualified traffic, and online presence."
        }
      },
      {
        "@type": "Question",
        "name": "Does Sysbreeze provide website development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Sysbreeze develops professional websites, business websites, eCommerce websites, and customized web solutions based on business requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Does Sysbreeze provide ERP software solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Sysbreeze provides ERP software solutions designed to help businesses manage and streamline their operations, processes, and business data."
        }
      },
      {
        "@type": "Question",
        "name": "Does Sysbreeze offer professional training programs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Sysbreeze offers industry-oriented training programs in areas such as Digital Marketing, Python Full Stack, MERN Stack, Data Science, AI & Robotics, HR Management, Data Analytics, Flutter, Graphic Designing, and other technology and professional fields."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Sysbreeze Technologies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Sysbreeze Technologies through the contact options available on the website to discuss your software, digital marketing, training, HR, or other business requirements."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Hero />
        <AboutUs />
        <ServicesSection />
        <WorksSection />
        <TrainingSection />
        <InternshipAndTrainingGallery />
        <Testimonials />
        <HomeFaq />
      </main>
    </>
  );
}
