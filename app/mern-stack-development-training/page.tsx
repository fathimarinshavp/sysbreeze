import { Metadata } from 'next';
import ServiceDetail from '@/components/Services/ServiceDetail';

export const metadata: Metadata = {
    title: "MERN Stack Course in Calicut | Full Stack Training",
    description: "Learn MERN Stack development in Calicut with MongoDB, Express.js, React and Node.js by building real-world applications through practical training.",
    keywords: "MERN stack training in Calicut, MERN stack development course in Calicut, MERN stack internships in calicut, MERN stack development internships in kerala, best MERN stack course in Calicut, job oriented MERN course in Calicut",
    alternates: {
        canonical: "https://www.sysbreeze.com/mern-stack-development-training",
    },
};

export default function MernStackTrainingPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the MERN Stack?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MERN stands for MongoDB, Express.js, React.js, and Node.js. It is one of the most popular full stack JavaScript frameworks for building modern web applications."
                }
            },
            {
                "@type": "Question",
                "name": "What is the target profile of this MERN training?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is perfect for aspiring full stack developers, computer science graduates, frontend developers, and anyone looking to build complex web applications."
                }
            }
        ]
    };

    const courseJsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "MERN Stack Development Training Course",
        "description": "Learn MERN Stack Development with practical training in MongoDB, Express.js, React.js, and Node.js. Build real-world projects.",
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
                title="MERN Stack Course in Calicut"
                description="Master full-stack web development with MongoDB, Express.js, React.js, and Node.js. Gain hands-on experience in building modern, scalable web applications through real-world projects and practical training."
                features={[
                    "MongoDB Database Development",
                    "Express.js Backend Programming",
                    "React.js Frontend Development",
                    "Node.js Server-Side Development",
                    "REST API Creation & Integration",
                    "Authentication & Security Implementation",
                    "Real-Time Full-Stack Projects",
                    "Git & GitHub Version Control",
                    "Deployment & Hosting Guidance",
                    "Interview Preparation & Career Support"
                ]}
                image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
                ctaText="Join Course"
            />
        </>
    );
}
