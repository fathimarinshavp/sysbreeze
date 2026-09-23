import { Metadata } from 'next';
import ContactContent from '@/components/Contact/ContactContent';

export const metadata: Metadata = {
    title: "Contact sysbreeze | Software Company in Calicut",
    description: "Contact sysbreeze for software solutions, ERP, mobile app, web, branding, HR, and digital marketing services in Calicut, Kerala.",
    keywords: "Kinfra techno industrial park kakkanchery, sysbreeze technologies, it companies in calicut, software companies in calicut,best it companies in calicut, it industries in calicut, internships in calicut, training courses in calicut",
    alternates: {
        canonical: "https://www.sysbreeze.com/contact-us",
    },
};

export default function ContactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact sysbreeze",
        "description": "Get in touch with sysbreeze for IT solutions, web development, and digital marketing services.",
        "url": "https://www.sysbreeze.com/contact-us",
        "mainEntity": {
            "@type": "Organization",
            "name": "sysbreeze",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kinfra Techno Industrial Park, Kakkanchery",
                "addressLocality": "Calicut",
                "addressRegion": "Kerala",
                "postalCode": "673635",
                "addressCountry": "IN"
            },
            "telephone": "+91 94466 21444",
            "email": "info@sysbreeze.com"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ContactContent />
        </>
    );
}
