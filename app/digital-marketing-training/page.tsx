import { Metadata } from 'next';
import ServiceDetail from '@/components/Services/ServiceDetail';

export const metadata: Metadata = {
    title: "Digital Marketing Course in Calicut | Sysbreeze",
    description: "Join a practical digital marketing course in Calicut covering SEO, Social Media Marketing, Google Ads, Content Marketing, Analytics and live projects.",
    keywords: "Digital Marketing Course in Calicut, Digital Marketing Training in Calicut, digital marketing internships in calicut, Best digital marketing course in Calicut, Which is the best digital marketing course in Calicut?, Job-oriented digital marketing course in Calicut, Practical digital marketing training in Calicut, Digital marketing course with live projects in Calicut",
    alternates: {
        canonical: "https://www.sysbreeze.com/digital-marketing-training",
    },
};

export default function DigitalMarketingTrainingPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is Digital Marketing training?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Digital marketing training covers various online marketing strategies including SEO, social media marketing, email marketing, and paid advertising to help brands grow online."
                }
            },
            {
                "@type": "Question",
                "name": "Who can join this course?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Any student, graduate, or professional looking to build a career in the digital space can join our comprehensive training program."
                }
            }
        ]
    };

    const courseJsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Professional Digital Marketing Course",
        "description": "Learn digital marketing course in Calicut, Kerala. Our training covers SEO, SEM, SMM, Google Ads, content marketing, and web analytics.",
        "provider": {
            "@type": "Organization",
            "name": "Sysbreeze Technologies",
            "sameAs": "https://www.sysbreeze.com"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
            />
            <ServiceDetail
                title="DIGITAL MARKETING COURSE IN CALICUT"
                description="Gain practical skills in the fast-growing field of digital marketing. Our course is designed to turn you into a professional marketer capable of managing global campaigns."
                features={[
                    "Social Media Marketing (SMM)",
                    "Google Ads & PPC Management",
                    "Email Marketing Automation",
                    "Content Strategy & Planning",
                    "Web Analytics & Reporting",
                    "Live Ad Campaign Management"
                ]}
                image="/images/digitalmarketing.jpg"
                ctaText="Enroll Now"
            />
        </>
    );
}
