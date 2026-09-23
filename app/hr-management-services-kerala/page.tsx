import { Metadata } from 'next';
import ServiceDetail from '@/components/Services/ServiceDetail';

export const metadata: Metadata = {
    title: "HR Management Services in Calicut | Sysbreeze",
    description: "Get professional HR management services in Calicut, including recruitment, payroll, employee management, HR operations and customized HR solutions.",
    keywords: "HR Management Services in Kerala, hr management company in kerala, hr solutions in kerala, hr outsourcing services, payroll management services, recruitment services kerala, employee management solutions, hr consulting services, attendance management system, hr software solutions, best hr management company",
    alternates: {
        canonical: "https://www.sysbreeze.com/hr-management-services-kerala",
    },
};

export default function HrManagementServicesPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What HR services does sysbreeze provide?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "sysbreeze provides end-to-end HR management solutions, including recruitment & talent acquisition, onboarding, payroll processing, attendance & leave management, policy development, and statutory compliance support."
                }
            },
            {
                "@type": "Question",
                "name": "Can you help customize HR policies for our organization?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we develop and implement customized HR policies tailored to your business structure, culture, and operational goals while ensuring alignment with labor regulations."
                }
            },
            {
                "@type": "Question",
                "name": "What payroll processing services do you offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our payroll management services include salary calculations, tax deductions, compliance filings, benefits administration, and comprehensive monthly payroll reports."
                }
            },
            {
                "@type": "Question",
                "name": "Does sysbreeze support statutory compliance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We provide complete statutory compliance support, helping your business adhere to regional labor laws, PF, ESI, and other regulatory updates."
                }
            },
            {
                "@type": "Question",
                "name": "How does recruitment and talent acquisition work with sysbreeze?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We manage the entire recruitment pipeline: sourcing, screening, interviewing, and onboard assistance to ensure you find the right talent for your business growth."
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
            <ServiceDetail
                title="HR MANAGEMENT SERVICES IN CALICUT"
                subtitle="Build a Smarter Workforce with Professional HR Solutions"
                description="At sysbreeze, we help businesses streamline their human resource operations through efficient, technology-driven HR management solutions. From recruitment and onboarding to payroll, attendance, compliance, and employee performance management, our services are designed to improve productivity and support business growth."
                features={[
                    "Recruitment & Talent Acquisition",
                    "Employee Onboarding & Offboarding",
                    "Payroll Processing",
                    "Attendance & Leave Management",
                    "HR Policy Development",
                    "Performance Management",
                    "Employee Database Management",
                    "Statutory Compliance Support",
                    "Training & Development",
                    "HR Consulting"
                ]}
                image="/images/hr.jpg"
            />
        </>
    );
}
