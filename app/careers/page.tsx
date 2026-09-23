import { Metadata } from 'next';
import CareersContent from '@/components/Careers/CareersContent';

export const metadata: Metadata = {
    title: "Careers at sysbreeze | IT Jobs in Calicut",
    description: "Explore exciting IT career opportunities at sysbreeze. We're looking for talented developers, designers, and marketers to join our team in Calicut, Kerala.",
    keywords: "Sysbreeze careers page, it careers in calicut, it companies vacancy in calicut, vacancies in calicut, sysbreeze technologies, frontend developer open positions in calicut, frontend developer vacancy in calicut, ui ux vacancy in calicut, vacancies in kinfra techno park",
    alternates: {
        canonical: "https://www.sysbreeze.com/careers",
    },
};

export default function CareersPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Frontend Developer",
        "description": "Build responsive, high-quality interfaces using modern web technologies.",
        "datePosted": "2026-05-15",
        "validThrough": "2026-08-15",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
            "@type": "Organization",
            "name": "sysbreeze",
            "sameAs": "https://www.sysbreeze.com",
            "logo": "https://www.sysbreeze.com/Gemini_Generated_Image_bmzwfebmzwfebmzw-removebg-previewn.png"
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kinfra Techno Industrial Park, Kakkanchery",
                "addressLocality": "Calicut",
                "addressRegion": "Kerala",
                "postalCode": "673635",
                "addressCountry": "IN"
            }
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <CareersContent />
        </>
    );
}
