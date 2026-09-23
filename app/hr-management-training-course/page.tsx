import { Metadata } from 'next';
import ServiceDetail from '@/components/Services/ServiceDetail';

export const metadata: Metadata = {
    title: "HR Management Course in Calicut | Sysbreeze",
    description: "Join HR management training in Calicut covering recruitment, payroll, HR operations, employee onboarding and labor law through practical training.",
    keywords: "HR Management Training, Human Resource Course, HR Training Institute, Recruitment Training, Payroll Management Course, HR Compliance Training, Employee Relations Course, HR Certification, HR Skills Training, sysbreeze Training",
    alternates: {
        canonical: "https://www.sysbreeze.com/hr-management-training-course",
    },
};

export default function HrManagementTrainingPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the HR Management Training Course?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is a practical, job-oriented program designed to develop essential HR skills including recruitment, payroll, statutory compliance, and labor laws."
                }
            },
            {
                "@type": "Question",
                "name": "Who can join this HR course?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Graduates, MBA students, working professionals, or anyone looking to build a career in Human Resources management."
                }
            }
        ]
    };

    const courseJsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "HR Management Training Course",
        "description": "Develop essential HR skills. Learn recruitment, payroll management, employee engagement, HR policies, compliance, and performance management through practical training.",
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
                title="HR Management Training"
                description="Develop essential HR skills with sysbreeze's HR Management Training Course. Learn recruitment, payroll management, employee engagement, HR policies, compliance, and performance management through practical, industry-focused training."
                features={[
                    "Recruitment & Talent Acquisition",
                    "Employee Onboarding & Documentation",
                    "Payroll & Statutory Compliance",
                    "Performance Management Systems",
                    "Employee Relations & Engagement",
                    "HR Policies & Labor Laws",
                    "HR Analytics & Reporting"
                ]}
                image="/images/hr.jpg"
                ctaText="Join Course"
            />
        </>
    );
}
