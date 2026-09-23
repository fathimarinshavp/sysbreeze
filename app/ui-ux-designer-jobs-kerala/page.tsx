import { Metadata } from 'next';
import ServiceDetail from '@/components/Services/ServiceDetail';

export const metadata: Metadata = {
    title: "UI/UX Designer Jobs in Kerala | Apply for IT Careers | Sysbreeze",
    description: "Looking for UI/UX designer jobs in Kerala? Join sysbreeze and design stunning user interfaces and experiences. We are hiring creative designers with Figma and design system skills.",
    keywords: "ui ux designer jobs kerala, UI UX jobs calicut, designer vacancies kerala, ui designer careers, figma designer jobs, sysbreeze careers, junior ui ux designer jobs",
    alternates: {
        canonical: "https://www.sysbreeze.com/ui-ux-designer-jobs-kerala",
    },
};

export default function UiUxDesignerJobsPage() {
    return (
        <ServiceDetail
            title="UI/UX Designer Roles in Kerala"
            description="Create stunning, user-centric designs for a variety of digital platforms. We are looking for talented UI/UX designers who are passionate about user research, wireframing, high-fidelity design, prototyping, and modern design systems."
            features={[
                "Figma or Adobe XD expertise",
                "Strong layout and color theory",
                "Prototyping & user testing skills",
                "Develop and maintain design systems",
                "Collaborate with developers and PMs",
                "Create user personas & wireframes"
            ]}
            image="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop"
            ctaText="Apply Now"
        />
    );
}
