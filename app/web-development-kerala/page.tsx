import { Metadata } from 'next';
import ServiceDetail from '@/components/Services/ServiceDetail';

export const metadata: Metadata = {
    title: "Web Development Company in Calicut | Sysbreeze",
    description: "Sysbreeze is a web development company in Calicut creating responsive, SEO-friendly and high-performance websites for businesses, brands and organizations.",
    keywords: "Website Design & Development Services, Custom Website Development, SEO-Friendly Websites, Professional Web Development, Business Website Design, Mobile-Friendly Websites, UI/UX Design, Secure Web Solutions, Lead Generation",
    alternates: {
        canonical: "https://www.sysbreeze.com/web-development-kerala",
    },
};

export default function WebDesignPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What website development services do you provide?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We develop business websites, corporate websites, portfolio websites, custom web applications, and responsive websites tailored to your business goals."
                }
            },
            {
                "@type": "Question",
                "name": "Do you build SEO-friendly websites?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Every website is built with SEO best practices including clean code, responsive design, fast loading speed, and optimized structure."
                }
            },
            {
                "@type": "Question",
                "name": "How long does it take to build a website?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Depending on the project scope, most business websites are completed within 2–6 weeks."
                }
            },
            {
                "@type": "Question",
                "name": "Will my website work on mobile devices?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Every website is fully responsive and optimized for desktops, tablets, and smartphones."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide website maintenance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We offer website maintenance, security updates, backups, and performance optimization."
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
                title="WEB DEVELOPMENT COMPANY IN CALICUT"
                subtitle="SEO-FRIENDLY BUSINESS WEBSITES"
                description="Create a strong digital presence with professional website design and development services from sysbreeze. We build responsive, fast-loading, and SEO-optimized websites that enhance user experience, improve search engine rankings, and help businesses generate more leads. Our custom web solutions combine modern design, performance, and functionality to support your business growth and online success."
                features={[
                    "Mobile-Friendly & Responsive Design",
                    "SEO-Optimized Website Development",
                    "Fast Loading Speed",
                    "Modern UI/UX Design",
                    "Secure & Scalable Solutions",
                    "Custom Business Websites",
                    "Website Maintenance & Support",
                    "Lead Generation Focused Structure"
                ]}
                image="/images/webdevelop.jpg"
                testimonial={{
                    quote: "I had a really good experience with Sysbreeze Technologies for our web development project. The team understood our requirements well, communicated clearly, and delivered the work professionally. They were responsive to feedback and made the overall process smooth and hassle-free. Happy with the final result and would definitely recommend their web development services.",
                    author: "Sadin",
                    role: "Web Development Client"
                }}
            />
        </>
    );
}
