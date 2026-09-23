import { Metadata } from 'next';
import ServiceDetail from '@/components/Services/ServiceDetail';

export const metadata: Metadata = {
    title: "Mobile App Development Company in Calicut | Sysbreeze",
    description: "Build powerful android and iOS apps with Sysbreeze, a mobile app development company in Calicut offering secure, scalable and user-focused solutions.",
    keywords: "mobile app development services, Android app developers, iOS app development, custom mobile applications, app development company calicut, hybrid app development",
    alternates: {
        canonical: "https://www.sysbreeze.com/mobile-app-development-kerala",
    },
};

export default function MobileAppPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Do you develop Android and iOS applications?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We develop native and cross-platform mobile applications for Android and iOS devices."
                }
            },
            {
                "@type": "Question",
                "name": "Which technologies do you use for app development?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use Flutter, React Native, Kotlin, Swift, and modern backend technologies depending on project requirements."
                }
            },
            {
                "@type": "Question",
                "name": "Can you publish my app to the App Store and Google Play?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We assist with app submission, publishing, testing, and deployment on both Google Play and Apple App Store."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide app maintenance after launch?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We offer app maintenance, updates, bug fixes, and feature enhancements after deployment."
                }
            },
            {
                "@type": "Question",
                "name": "Can you develop custom business applications?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We build custom mobile applications tailored to business workflows and customer requirements."
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
                title="MOBILE APP DEVELOPMENT COMPANY IN CALICUT"
                description="Transform your ideas into powerful mobile applications. We specialize in building high-quality Android and iOS apps that provide seamless user experiences and drive business growth."
                features={[
                    "Native Android Development",
                    "iOS App Development",
                    "Cross-Platform Solutions",
                    "Custom UI/UX Design",
                    "API Integration",
                    "App Store Optimization"
                ]}
                image="/images/mobileapp.jpg"
                testimonial={{
                    quote: "We had a good experience with Sysbreeze Technologies for our mobile app development project. The team was easy to communicate with and took the time to understand what we needed. There were a few changes along the way, but they were handled well and the team was responsive to our feedback. Overall, the development process was smooth and we’re happy with the final app.",
                    author: "Safwan",
                    role: "Mobile App Client"
                }}
            />
        </>
    );
}
