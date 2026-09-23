import { Metadata } from 'next';
import ServiceDetail from '@/components/Services/ServiceDetail';

export const metadata: Metadata = {
    title: "AI & Robotics Training in Calicut | Sysbreeze",
    description: "Learn AI and robotics in Calicut through practical training in artificial intelligence, automation, machine vision, robotics systems and modern AI tools.",
    keywords: "AI training in Calicut, artificial intelligence course in Calicut, robotics training in Calicut, AI training in Calicut, artificial intelligence training in Kozhikode, best AI course in Calicut, artificial intelligence and robotics training for students in Calicut",
    alternates: {
        canonical: "https://www.sysbreeze.com/artificial-intelligence-robotics-training",
    },
};

export default function AiRoboticsTrainingPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What topics are covered in the AI & Robotics course?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The course covers Python for AI, machine learning fundamentals, robotics programming, computer vision, and industrial automation."
                }
            },
            {
                "@type": "Question",
                "name": "Are there practical projects included?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our training is highly practical with hands-on AI tools, robotics programming, and real-world projects."
                }
            }
        ]
    };

    const courseJsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Artificial Intelligence & Robotics Training Course",
        "description": "Master the future of technology with our Artificial Intelligence & Robotics Training Course. Learn AI, machine learning, automation, and robotics programming.",
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
                title="AI and Robotics Training in Calicut"
                description="Master the future of technology with our Artificial Intelligence & Robotics Training Course. Gain hands-on experience in AI tools, machine learning, automation, robotics programming, and real-world projects designed to build industry-ready skills."
                features={[
                    "Hands-on AI and Robotics Projects",
                    "Machine Learning Fundamentals",
                    "Robotics Programming & Automation",
                    "Computer Vision & AI Applications",
                    "Python for AI Development",
                    "Industry-Oriented Practical Training",
                    "Expert Mentorship & Guidance",
                    "Certification & Career Support"
                ]}
                image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
                ctaText="Join Course"
            />
        </>
    );
}
