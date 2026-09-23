import { Metadata } from 'next';
import ServiceDetail from '@/components/Services/ServiceDetail';

export const metadata: Metadata = {
    title: "Data Science Course in Calicut | Practical Training",
    description: "Join a Data Science course in Calicut covering Python, data analysis, visualization and machine learning basics using real-world datasets and projects.",
    keywords: "data science course in Calicut, data science training in Calicut, data science trainings and internships in calicut, data science internships in calicut, data science certification course in Calicut, best data science course in Calicut, best data science training in calicut",
    alternates: {
        canonical: "https://www.sysbreeze.com/data-science-certification-course",
    },
};

export default function DataScienceTrainingPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What will I learn in this Data Science course?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You will master Python programming, data analytics, machine learning fundamentals, data visualization, and real-time case studies."
                }
            },
            {
                "@type": "Question",
                "name": "Does the course offer placement assistance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our program includes placement assistance and career support to help you secure a role in data-driven industries."
                }
            }
        ]
    };

    const courseJsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Data Science Certification Course",
        "description": "Learn Data Science with sysbreeze. Master Python, Machine Learning, Data Analytics, and Visualization through practical projects.",
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
                title="Data Science Course in Calicut"
                description="Build a successful career in Data Science with sysbreeze's industry-focused training program. Learn Python, Data Analytics, Machine Learning, Data Visualization, and AI concepts through practical projects and real-world case studies. Gain hands-on experience and job-ready skills to excel in today's data-driven industries."
                features={[
                    "Industry-Oriented Data Science Training",
                    "Python for Data Analysis & Visualization",
                    "Machine Learning Fundamentals",
                    "Real-Time Projects & Case Studies",
                    "Expert Trainer Guidance",
                    "Certification on Course Completion",
                    "Placement Assistance & Career Support",
                    "Beginner to Advanced Learning Path"
                ]}
                image="/images/webdevelop.jpg"
                ctaText="Join Course"
            />
        </>
    );
}
