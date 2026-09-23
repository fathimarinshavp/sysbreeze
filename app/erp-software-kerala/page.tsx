import { Metadata } from 'next';
import ServiceDetail from '@/components/Services/ServiceDetail';

export const metadata: Metadata = {
    title: "ERP Software Service in Calicut | Sysbreeze",
    description: "Get custom ERP software in Calicut for inventory, HR, payroll, finance, and analytics. Sysbreeze builds secure, scalable ERP solutions for growing businesses.",
    keywords: "ERP software kerala, custom ERP solutions, business automation software, resource management system, ERP developers calicut, industrial software solutions",
    alternates: {
        canonical: "https://www.sysbreeze.com/erp-software-kerala",
    },
};

export default function ErpSoftwarePage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is ERP software?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ERP software integrates business processes such as finance, HR, inventory, sales, and operations into one centralized system."
                }
            },
            {
                "@type": "Question",
                "name": "Which industries can use ERP solutions?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our ERP software is suitable for manufacturing, retail, healthcare, education, logistics, hospitality, and service industries."
                }
            },
            {
                "@type": "Question",
                "name": "Can ERP software be customized?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We customize ERP modules according to your business workflows and operational requirements."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide cloud-based ERP solutions?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We offer both cloud-hosted and on-premise ERP software depending on business needs."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide ERP training and support?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We provide user training, technical support, software maintenance, and implementation assistance."
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
                title="ERP SOFTWARE SERVICE IN CALICUT"
                description="Optimize your business operations with our tailored ERP systems. From inventory management to HR and finance, we build scalable software that helps you manage everything in one place."
                features={[
                    "Custom Module Development",
                    "Inventory & Supply Chain",
                    "HR & Payroll Management",
                    "Financial Accounting",
                    "Real-time Data Analytics",
                    "Secure Cloud Hosting"
                ]}
                image="/images/hr.jpg"
            />
        </>
    );
}
