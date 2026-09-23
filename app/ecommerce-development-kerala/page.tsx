import { Metadata } from 'next';
import ServiceDetail from '@/components/Services/ServiceDetail';

export const metadata: Metadata = {
    title: "Ecommerce Website Development Calicut | Sysbreeze",
    description: "Launch a secure ecommerce website in Calicut with Sysbreeze. Get responsive online stores, payment gateway integration, product management and support.",
    keywords: "ecommerce website development, ecommerce website development services, online store development, shopping cart website development, ecommerce web design Kerala, ecommerce solutions India, custom ecommerce website, payment gateway integration, responsive ecommerce website, ecommerce development company, online business website, ecommerce SEO services, digital commerce solutions, sysbreeze ecommerce development",
    alternates: {
        canonical: "https://www.sysbreeze.com/ecommerce-development-kerala",
    },
};

export default function EcommerceDevelopmentPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Which ecommerce platforms do you develop?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We develop ecommerce websites using Shopify, WooCommerce, Magento, and custom-built ecommerce solutions."
                }
            },
            {
                "@type": "Question",
                "name": "Do you integrate secure payment gateways?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We integrate trusted payment gateways such as Razorpay, Stripe, PayPal, and other secure payment solutions."
                }
            },
            {
                "@type": "Question",
                "name": "Will my ecommerce website be mobile-friendly?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Every ecommerce website we build is fully responsive and optimized for mobile devices."
                }
            },
            {
                "@type": "Question",
                "name": "Can you migrate my existing online store?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We provide seamless migration services from existing ecommerce platforms without losing important data."
                }
            },
            {
                "@type": "Question",
                "name": "Do you optimize ecommerce websites for SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We implement technical SEO, product schema, optimized URLs, and structured data to improve search visibility."
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
                title="ECOMMERCE WEBSITE DEVELOPMENT SERVICES IN CALICUT"
                subtitle="Online Store Development Solutions"
                description="Transform your business with professional e-commerce website development services from sysbreeze. We build secure, scalable, and user-friendly online stores that help businesses sell products efficiently and grow their revenue. Our e-commerce solutions include responsive design, payment gateway integration, inventory management, shopping cart functionality, and SEO optimization to deliver a seamless shopping experience across all devices."
                features={[
                    "Custom E-Commerce Website Development",
                    "Mobile-Friendly & Responsive Design",
                    "Secure Payment Gateway Integration",
                    "Shopping Cart & Checkout Optimization",
                    "Product & Inventory Management",
                    "SEO-Friendly Store Setup",
                    "Multi-Vendor & Marketplace Solutions",
                    "Ongoing Support & Maintenance"
                ]}
                image="/images/ecommerce.jpg"
                testimonial={{
                    quote: "We had a very good experience with Sysbreeze Technologies for our e-commerce development project. The team understood our requirements well, communicated clearly, and was responsive throughout the development process. The final website was professional, user-friendly, and worked well for our needs. Overall, a smooth and reliable experience. Would definitely recommend their team.",
                    author: "Irfan",
                    role: "E-Commerce Client"
                }}
            />
        </>
    );
}
