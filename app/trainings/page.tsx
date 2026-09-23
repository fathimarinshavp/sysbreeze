import { Metadata } from 'next';
import TrainingsContent from '@/components/Trainings/TrainingsContent';
import FaqSection from '@/components/Ui/FaqSection/FaqSection';

export const metadata: Metadata = {
    title: "IT Training & Internships in Calicut | Sysbreeze",
    description: "Join job oriented IT training courses in Calicut with online and offline programs in Digital marketing, SEO, Python, AI, HR, MERN, and Data Science.",
    keywords: "digital marketing training in Calicut, SEO and digital marketing course in Calicut, digital marketing training and internships in calicut, job oriented digital marketing course in Calicut, digital marketing training in Kerala, SEO training in Calicut, Python full stack training in Calicut, python full stack internships in calicut, HR management training in Calicut, hr management training internships in calicut, HR certification course in Calicut, job oriented HR course in Calicut, AI and robotics course in Calicut, ai and robotics training and internships in calicut, MERN stack training in Calicut, best MERN stack course in Calicut, data science training in Calicut, machine learning course in Calicut, HR management course with internship in Calicut, where to learn digital marketing in Calicut, job oriented IT courses in Calicut, IT training courses in Calicut, professional IT training in Calicut, IT internship programs in calicut",
    alternates: {
        canonical: "https://www.sysbreeze.com/trainings",
    },
};

const trainingsFaqs = [
    {
        question: "What training programs does Sysbreeze offer?",
        answer: "Sysbreeze offers training programs in Digital Marketing, Python Full Stack, MERN Stack, Data Science, Data Analytics, AI & Robotics, HR Management, Flutter, Graphic Designing, and other professional and technology areas."
    },
    {
        question: "Are the training programs industry-oriented?",
        answer: "Yes. The training programs are designed with practical and industry-relevant learning to help students develop skills that can be applied to real-world projects."
    },
    {
        question: "Does Sysbreeze provide practical projects?",
        answer: "Yes. Practical learning and project-based training can help students gain experience applying concepts and tools to real-world scenarios."
    },
    {
        question: "Does Sysbreeze provide certificates?",
        answer: "Yes. Eligible students can receive certificates upon successful completion of applicable training programs."
    },
    {
        question: "Does Sysbreeze provide placement assistance?",
        answer: "Placement assistance is available for applicable training programs. Students should check the specific course details for the current placement support offered."
    },
    {
        question: "Who can join Sysbreeze training programs?",
        answer: "Eligibility depends on the individual course. Students, graduates, job seekers, working professionals, and learners looking to develop new skills can explore the available programs."
    },
    {
        question: "Are the courses available in Calicut?",
        answer: "Sysbreeze offers training programs for learners in Kerala. Please contact the team to confirm the current course mode, location, batch availability, and schedule."
    },
    {
        question: "How can I enquire about a training program?",
        answer: "You can contact Sysbreeze through the training enquiry options on the website and share the course you are interested in. The team can provide information about the current batch, duration, syllabus, and admission process."
    }
];

export default function TrainingsPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": trainingsFaqs.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <TrainingsContent />
            <FaqSection
                title="Frequently Asked Questions"
                subtitle="Got questions about our training courses and programs? Find answers here."
                items={trainingsFaqs}
                categoryTag="Trainings FAQ"
            />
        </>
    );
}
