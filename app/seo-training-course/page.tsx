import { Metadata } from 'next';
import ServiceDetail from '@/components/Services/ServiceDetail';

export const metadata: Metadata = {
    title: "SEO Training course in Calicut | Sysbreeze",
    description: "Learn SEO in Calicut with practical training in keyword research, on-page, technical and off-page SEO, content strategy, analytics and live projects.",
    keywords: "SEO Training in Calicut, SEO course in Calicut with practical training, on-page SEO training in Calicut, AI SEO training in Calicut, seo internship in calicut, seo training and internships in calicut, seo training in kerala, seo internships in kerala",
    alternates: {
        canonical: "https://www.sysbreeze.com/seo-training-course",
    },
};

export default function SeoTrainingPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is SEO training?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO training is a specialized program where you learn to optimize websites to rank higher on search engines like Google, covering keyword research, content optimization, and technical SEO."
                }
            },
            {
                "@type": "Question",
                "name": "What is the duration of the course?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The duration of our SEO training course typically ranges from 2 to 3 months, depending on the learning speed and project requirements."
                }
            }
        ]
    };

    const courseJsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Professional SEO Training Course",
        "description": "Master search engine optimization techniques, keyword research, on-page SEO and off-page optimization with our expert-led course.",
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
                title="SEO TRAINING COURSE IN CALICUT"
                description="Become an SEO expert with our hands-on training program. Learn the latest search engine optimization techniques used by top digital marketing agencies to rank websites."
                features={[
                    "Keyword Research & Analysis",
                    "On-Page SEO Optimization",
                    "Technical SEO Mastery",
                    "Backlink Building Strategies",
                    "Google Search Console & Analytics",
                    "Live Project Experience"
                ]}
                image="/images/digitalmarketing.jpg"
                ctaText="Join Course"
            />
        </>
    );
}
