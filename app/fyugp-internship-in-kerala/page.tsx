import FyugpPageContent from '@/components/Training/FyugpPageContent';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "FYUGP Internship in Kerala | IT & Non-IT Internship Programs",
    description: "Join FYUGP internships in Kerala with IT and non-IT programs in Digital Marketing, HR, Data Science, Data Analytics, Flutter, Graphic Design and more.",
    keywords: "fyugp internship in kerala, fyugp internship kerala, fyugp internship program, fyugp internship for students, internship opportunities in kerala, industry internship in kerala, practical training for fyugp students, student internship programs kerala, professional internship kerala, skill development internship kerala, fyugp credit internship, internship training in calicut, internship programs in kozhikode, career internship for students, industry exposure for students, internships in kochi, fyugp internships in kochi, internship in Malappuram, student internship programs Kerala",
    alternates: {
        canonical: "https://www.sysbreeze.com/fyugp-internship-in-kerala",
    },
    openGraph: {
        title: "FYUGP Internship in Kerala | IT & Non-IT Internship Programs",
        description: "Join FYUGP internships in Kerala with IT and non-IT programs in Digital Marketing, HR, Data Science, Data Analytics, Flutter, Graphic Design and more.",
        url: "https://www.sysbreeze.com/fyugp-internship-in-kerala",
        siteName: "Sysbreeze Technologies",
        type: "website",

    },
};

export default function FyugpInternshipPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the FYUGP Internship in Kerala?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The FYUGP (Four-Year Undergraduate Programme) Internship in Kerala provides college students with structured, industry-oriented practical exposure that fulfills academic curriculum requirements and builds job-ready professional skills."
                }
            },
            {
                "@type": "Question",
                "name": "Are both IT and Non-IT FYUGP internships available?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Sysbreeze offers FYUGP internships across IT domains (Data Science, Data Analytics, Flutter, Web Development, Graphic Design, AI) and Non-IT domains (HR Management, Business Administration, Marketing, and Professional Skill Development)."
                }
            },
            {
                "@type": "Question",
                "name": "Do students receive an internship certificate upon completion?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, upon successful completion of the internship and assigned practical projects, students receive an official FYUGP Internship Certificate and project documentation valid for university credits."
                }
            },
            {
                "@type": "Question",
                "name": "Who is eligible to apply for FYUGP internships?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "FYUGP undergraduate students, degree students, and college students from universities across Kerala (Calicut University, Kerala University, MG University, Kannur University, KTU, etc.) looking for credit-based or skill-development internships."
                }
            },
            {
                "@type": "Question",
                "name": "Where is the internship conducted?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Internships are conducted at Sysbreeze Technologies Pvt. Ltd., Kinfra Techno Industrial Park, Kakkanchery, Calicut, with offline classroom/lab sessions as well as flexible hybrid modes."
                }
            }
        ]
    };

    const courseJsonLd = {
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        "name": "FYUGP Internship in Kerala – Industry-Focused Training & Practical Experience",
        "description": "Structured FYUGP internship programs in Kerala for undergraduate students covering IT and Non-IT specializations with hands-on projects and industry certifications.",
        "provider": {
            "@type": "Organization",
            "name": "Sysbreeze Technologies Pvt. Ltd.",
            "url": "https://www.sysbreeze.com",
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
            />
            <FyugpPageContent />
        </>
    );
}
