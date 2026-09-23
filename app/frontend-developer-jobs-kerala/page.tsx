import { Metadata } from 'next';
import ServiceDetail from '@/components/Services/ServiceDetail';

export const metadata: Metadata = {
    title: "Frontend Developer Jobs in Kerala | Apply for IT Careers | Sysbreeze",
    description: "Looking for frontend developer jobs in Kerala? Join sysbreeze and build your career in web development. We are hiring passionate developers with React and JavaScript skills.",
    keywords: "frontend developer jobs kerala, IT jobs calicut, react developer vacancies, web developer careers kerala, junior frontend developer jobs",
    alternates: {
        canonical: "https://www.sysbreeze.com/frontend-developer-jobs-kerala",
    },
};

export default function FrontendDeveloperJobsPage() {
    return (
        <ServiceDetail
            title="Frontend Developer Roles in Kerala"
            description="Join our dynamic tech team and build world-class user interfaces. We are looking for talented frontend developers who are passionate about React, modern CSS, and performance optimization."
            features={[
                "Build Responsive Web Apps",
                "Work with React & Next.js",
                "Collaborate with Design Teams",
                "Optimize Web Performance",
                "Write Clean, Maintainable Code",
                "Participate in Code Reviews"
            ]}
            image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
            ctaText="Apply Now"
        />
    );
}
