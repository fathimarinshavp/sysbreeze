import { Metadata } from 'next';
import ServicesContent from '@/components/Services/ServicesContent';
import ServiceReviewsSection from '@/components/Services/ServiceReviewsSection';
import FaqSection from '@/components/Ui/FaqSection/FaqSection';

export const metadata: Metadata = {
    title: "IT Services in Calicut | Sysbreeze Technologies",
    description: "Explore IT services in Calicut from Sysbreeze Technologies, including web development, SEO, digital marketing, ERP, mobile apps, branding and HR solutions.",
    keywords: "web development services in calicut, SEO services calicut, ERP software solutions in kerala, digital marketing services kerala, app development company in calicut, branding services, UI UX design company in calicut, sysbreeze technologies, best it services in calicut, best it services in kakkanchery, it training courses in calicut",
    alternates: {
        canonical: "https://www.sysbreeze.com/services",
    },
};

const servicesFaqs = [
    {
        question: "What IT services does Sysbreeze Technologies offer?",
        answer: "Sysbreeze Technologies offers web development, eCommerce development, mobile app development, ERP software, SEO, digital marketing, branding, HR management, and other customized IT solutions."
    },
    {
        question: "Does Sysbreeze provide customized software solutions?",
        answer: "Yes. Sysbreeze can develop customized software solutions based on a company's specific business processes, requirements, and operational needs."
    },
    {
        question: "Does Sysbreeze provide web development in Calicut?",
        answer: "Yes. Sysbreeze provides professional web development solutions for businesses in Calicut and across Kerala."
    },
    {
        question: "Does Sysbreeze provide eCommerce website development?",
        answer: "Yes. Sysbreeze develops eCommerce websites designed to help businesses establish and grow their online stores."
    },
    {
        question: "Can Sysbreeze develop mobile applications?",
        answer: "Yes. Sysbreeze provides mobile application development solutions based on the requirements and objectives of businesses and organizations."
    },
    {
        question: "Does Sysbreeze provide branding services?",
        answer: "Yes. Sysbreeze provides professional branding solutions to help businesses build a consistent and recognizable brand identity."
    },
    {
        question: "Does Sysbreeze provide HR management solutions?",
        answer: "Yes. Sysbreeze provides HR management solutions designed to help businesses improve and manage their HR processes efficiently."
    },
    {
        question: "How can I get a quote for an IT project?",
        answer: "You can contact Sysbreeze Technologies through the website and share your project requirements. The team can then discuss your requirements and provide suitable recommendations and pricing."
    }
];

export default function ServicesPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": servicesFaqs.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <ServicesContent />
            <ServiceReviewsSection />
            <FaqSection
                title="Frequently Asked Questions"
                subtitle="Got questions about our services? Find quick answers here."
                items={servicesFaqs}
                categoryTag="Services FAQ"
            />
        </>
    );
}
