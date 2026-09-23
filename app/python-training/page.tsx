import { Metadata } from 'next';
import ServiceDetail from '@/components/Services/ServiceDetail';

export const metadata: Metadata = {
    title: "Python Full Stack Course in Calicut | Sysbreeze",
    description: "Learn Python Full Stack development in Calicut with Python, Django, APIs and frontend technologies through practical projects and job-oriented training.",
    keywords: "Python full stack training in Calicut, Python full stack development course in Calicut, python training programs in calicut, python internships in calicut, python training programs in kerala, best Python full stack course in Calicut, Python full stack development training for beginners in Calicut",
    alternates: {
        canonical: "https://www.sysbreeze.com/python-training",
    },
};

export default function PythonTrainingPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is Python training?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Python training involves learning the Python programming language, its syntax, and how to use it for web development, data science, and automation."
                }
            },
            {
                "@type": "Question",
                "name": "Is this course job-oriented?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our Python training is fully job-oriented, including live projects and placement assistance to help you start your career in software development."
                }
            }
        ]
    };

    const courseJsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Professional Python Training Course",
        "description": "Learn Python programming from scratch. Our course covers Python fundamentals, data science, web development, and Django.",
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
                title="PYTHON FULL STACK DEVELOPMENT COURSE IN CALICUT"
                description="Master the most versatile programming language. Our Python training course covers everything from basics to advanced full stack development using Django and REST APIs."
                features={[
                    "Python Core & Advanced Concepts",
                    "Django Web Framework",
                    "Database Integration (PostgreSQL)",
                    "REST API Development",
                    "Front-end Integration",
                    "Real-world Capstone Project"
                ]}
                image="/images/python-training.webp"
                ctaText="Start Learning"
            />
        </>
    );
}
