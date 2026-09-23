import { Metadata } from 'next';
import ServiceDetail from '@/components/Services/ServiceDetail';

export const metadata: Metadata = {
    title: "Professional Branding Services in Calicut | Sysbreeze",
    description: "Build a strong brand with professional branding services in Calicut, including logo design, brand identity , corporate branding and creative brand solutions.",
    keywords: "Professional Branding Services, Brand Strategy Services, Corporate Branding, Brand Identity Design, Business Branding Solutions, Digital Branding Services, Logo Design Services, Brand Development Company, Branding Agency Kerala, Brand Positioning Services, Marketing and Branding Services, sysbreeze Branding Services",
    alternates: {
        canonical: "https://www.sysbreeze.com/branding-services-kerala",
    },
};

export default function BrandingServicesPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What branding services do you offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide logo design, brand identity, visual branding, brand strategy, packaging design, social media branding, and corporate branding."
                }
            },
            {
                "@type": "Question",
                "name": "Why is branding important for a business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Strong branding builds customer trust, improves recognition, and helps businesses stand out in competitive markets."
                }
            },
            {
                "@type": "Question",
                "name": "Can you redesign an existing brand?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We modernize existing brands while maintaining consistency with your business identity and goals."
                }
            },
            {
                "@type": "Question",
                "name": "Do you design professional logos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We create unique and memorable logos that reflect your company's vision and values."
                }
            },
            {
                "@type": "Question",
                "name": "How long does a branding project take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The timeline depends on project requirements, but most branding projects are completed within 2 to 6 weeks."
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
                title="PROFESSIONAL BRANDING SERVICES IN CALICUT"
                subtitle="Create a Strong Business Brand Identity"
                description="Build a powerful brand that stands out in today's competitive market. At sysbreeze, we help businesses create a strong brand identity through strategic branding, logo design, brand messaging, visual identity development, and digital brand positioning. Our professional branding services are designed to increase brand awareness, build customer trust, and drive long-term business growth. Whether you're a startup or an established company, we create branding solutions that reflect your unique vision and values."
                features={[
                    "Strategic Brand Development",
                    "Professional Logo Design",
                    "Brand Messaging & Voice",
                    "Visual Identity Systems",
                    "Digital Brand Positioning",
                    "Brand Style Guidelines"
                ]}
                image="/images/branding.jpg"
            />
        </>
    );
}
