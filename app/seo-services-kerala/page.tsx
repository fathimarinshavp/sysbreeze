import { Metadata } from 'next';
import ServiceDetail from '@/components/Services/ServiceDetail';

export const metadata: Metadata = {
    title: "Digital Marketing services in Calicut | Sysbreeze",
    description: "Grow your business with digital marketing services in Calicut, including SEO, Social Media Marketing, Google Ads, Content Marketing and Online Strategies.",
    keywords: "SEO services kerala, top SEO company calicut, search engine optimization india, SEO consulting, digital marketing kerala, organic traffic growth",
    alternates: {
        canonical: "https://www.sysbreeze.com/seo-services-kerala",
    },
};

export default function SeoServicesPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What digital marketing services does sysbreeze provide?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "sysbreeze provides SEO, Google Ads, Meta Ads, Social Media Marketing, Content Marketing, Email Marketing, Local SEO, and AI-powered digital marketing solutions."
                }
            },
            {
                "@type": "Question",
                "name": "Which advertising platforms do you manage?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We manage campaigns on Google Ads, Facebook, Instagram, LinkedIn, YouTube, and other digital advertising platforms."
                }
            },
            {
                "@type": "Question",
                "name": "Can digital marketing increase my business leads?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Our strategies are designed to improve online visibility, generate qualified leads, and increase conversions for businesses of all sizes."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide monthly performance reports?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We provide monthly reports covering website traffic, keyword rankings, advertising performance, leads, and recommendations."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer customized digital marketing plans?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Every digital marketing strategy is customized based on your business goals, industry, and target audience."
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
                title="DIGITAL MARKETING SERVICES IN CALICUT"
                description="Rank higher on Google and attract more customers with our data-driven SEO strategies. We help businesses in Kerala dominate search results through technical SEO and high-quality content."
                features={[
                    "Comprehensive SEO Audit",
                    "Advanced Keyword Research",
                    "On-Page SEO Optimization",
                    "Technical SEO Fixes",
                    "Content Marketing Strategy",
                    "Monthly Performance Reports"
                ]}
                image="/images/digitalmarketing.jpg"
            />
        </>
    );
}
