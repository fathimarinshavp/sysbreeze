import { Metadata } from 'next';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    User,
    ArrowLeft,
    Check,
    CheckCircle2,
    Briefcase,
    GraduationCap,
    ArrowUpRight
} from "lucide-react";

export const metadata: Metadata = {
    title: "How to Build a Job-Winning Portfolio in 2026 | sysbreeze",
    description: "Learn how students can build a professional portfolio in 2026 using live projects, practical skills and real-world experience.",
    keywords: "how to build a professional portfolio, it training in calicut, internship training kerala, job-ready skills, live projects for students",
    alternates: {
        canonical: "https://www.sysbreeze.com/blog/certificates-are-not-enough-build-job-winning-portfolio-2026",
    },
};

export default function PortfolioBlogPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why is a certificate not enough to get a job in tech?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Certificates show that you finished a course, but a portfolio shows you have practical skills and can build real-world applications or run real-world marketing campaigns. Employers prioritize proof of ability over papers."
                }
            },
            {
                "@type": "Question",
                "name": "What should a web developer include in their portfolio?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Web developers should include business websites, web applications, landing pages, API integrations, and clean GitHub repositories with structured documentation."
                }
            },
            {
                "@type": "Question",
                "name": "How many projects are needed in a professional portfolio?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is best to have three to five high-quality projects. Quality is more important than quantity; each project should demonstrate a different skill and highlight your problem-solving abilities."
                }
            }
        ]
    };

    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Certificates Are Not Enough: How to Build a Job-Winning Portfolio in 2026",
        "description": "Learn how students can build a professional portfolio in 2026 using live projects, practical skills and real-world experience.",
        "datePublished": "2026-08-20",
        "dateModified": "2026-08-20",
        "author": {
            "@type": "Organization",
            "name": "sysbreeze Editorial Team",
            "url": "https://www.sysbreeze.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Sysbreeze Technologies",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.sysbreeze.com/Gemini_Generated_Image_2w2muj2w2muj2w2m.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.sysbreeze.com/blog/certificates-are-not-enough-build-job-winning-portfolio-2026"
        }
    };

    return (
        <main className="min-h-screen bg-black text-white selection:bg-brand-accent selection:text-white pt-32 pb-20 relative overflow-hidden">
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
            />

            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(193,34,125,0.15),transparent_60%)]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                {/* Back to Blog */}
                <div className="mb-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors group text-sm font-semibold uppercase tracking-wider"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Blog
                    </Link>
                </div>

                {/* Article Header */}
                <header className="mb-16">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 w-fit mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#c1227d] animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                            Career Guide
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-8 uppercase bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                        Certificates Are Not Enough: How to Build a Job-Winning Portfolio in 2026
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-white/40 border-y border-white/10 py-6">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[#c1227d]" />
                            <span>August 20, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#c1227d]" />
                            <span>7 Min Read</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-[#c1227d]" />
                            <span>By sysbreeze Editorial Team</span>
                        </div>
                    </div>
                </header>

                {/* Article Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <article className="lg:col-span-12 space-y-12 text-white/70 text-lg md:text-xl leading-relaxed font-light">

                        {/* Introduction */}
                        <section className="space-y-6">
                            <p>
                                Completing a course and receiving a certificate is an important achievement.
                            </p>
                            <p>
                                But in today's competitive job market, employers often want to see something more:
                            </p>
                            <h3 className="text-2xl font-bold text-white uppercase italic text-center py-4 border-y border-white/5 my-6">
                                What can you actually do?
                            </h3>
                            <p>
                                This is why portfolios are becoming increasingly important for students entering technology, digital marketing, design, and other professional careers. A strong portfolio demonstrates practical skills through real projects.
                            </p>
                        </section>

                        <hr className="border-white/10" />

                        {/* What is a Professional Portfolio? */}
                        <section className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                                What is a Professional Portfolio?
                            </h2>
                            <p>
                                A professional portfolio is a collection of projects and work samples that demonstrate your abilities. The exact contents depend on your field:
                            </p>

                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Digital Marketing */}
                                <div className="bg-zinc-950 border border-white/5 p-6 rounded-2xl space-y-4">
                                    <h4 className="text-base font-bold text-white uppercase tracking-wider text-[#c1227d]">
                                        Digital Marketing Students
                                    </h4>
                                    <p className="text-sm text-white/60 font-light">A marketing portfolio can include:</p>
                                    <ul className="text-sm space-y-2 text-white/90">
                                        {["SEO audits", "Keyword research reports", "Content strategies", "Social media campaigns", "Ad campaign analysis"].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <Check className="w-3.5 h-3.5 text-[#c1227d] shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Web Development */}
                                <div className="bg-zinc-950 border border-white/5 p-6 rounded-2xl space-y-4">
                                    <h4 className="text-base font-bold text-white uppercase tracking-wider text-[#c1227d]">
                                        Web Development Students
                                    </h4>
                                    <p className="text-sm text-white/60 font-light">A development portfolio can include:</p>
                                    <ul className="text-sm space-y-2 text-white/90">
                                        {["Business websites", "Web applications", "Landing pages", "API integrations", "GitHub project codes"].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <Check className="w-3.5 h-3.5 text-[#c1227d] shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Data Science */}
                                <div className="bg-zinc-950 border border-white/5 p-6 rounded-2xl space-y-4">
                                    <h4 className="text-base font-bold text-white uppercase tracking-wider text-[#c1227d]">
                                        Data Science Students
                                    </h4>
                                    <p className="text-sm text-white/60 font-light">A data portfolio can include:</p>
                                    <ul className="text-sm space-y-2 text-white/90">
                                        {["Data analysis reports", "Interactive dashboards", "Data visualizations", "Predictive modeling", "Machine learning structures"].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <Check className="w-3.5 h-3.5 text-[#c1227d] shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <hr className="border-white/10" />

                        {/* Why Live Projects Matter */}
                        <section className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                                Why Live Projects Matter
                            </h2>
                            <p>
                                Theoretical knowledge helps students understand concepts, but practical projects help students understand how to apply those concepts to business challenges.
                            </p>
                            <p>
                                Working on live, real-world projects helps students develop:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-zinc-950 border border-white/10 p-6 rounded-2xl">
                                {[
                                    "Problem-solving skills",
                                    "Professional communication",
                                    "Technical confidence",
                                    "Industry understanding",
                                    "Real work experience",
                                    "Collaboration ability"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm text-white/90 font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-[#c1227d] shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <hr className="border-white/10" />

                        {/* How to Build a Strong Portfolio */}
                        <section className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                                How to Build a Strong Portfolio
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { step: "Step 1: Choose Your Career Direction", text: "Focus your portfolio around the specific role you want to pursue (e.g., Frontend Developer, SEO Executive, Data Analyst)." },
                                    { step: "Step 2: Build Three to Five Quality Projects", text: "Quality is more important than quantity. Each project should demonstrate a different set of skills or technologies." },
                                    { step: "Step 3: Explain Your Role & Contributions", text: "Clearly describe the problem you solved, the tools you used, your specific contributions, and the final results achieved." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6 bg-zinc-950 border border-white/5 p-5 rounded-xl items-center">
                                        <div className="text-sm font-black text-[#c1227d] uppercase tracking-wider shrink-0 w-24">
                                            {item.step.split(":")[0]}
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-bold text-white uppercase">{item.step.split(": ")[1]}</h4>
                                            <p className="text-sm text-white/60 font-light">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <hr className="border-white/10" />

                        {/* Conclusion */}
                        <section className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                                Conclusion
                            </h2>
                            <p>
                                A certificate shows you completed a course, but a portfolio shows you can do the job. By working on live corporate projects and building a professional portfolio, you can stand out to employers and launch a successful career.
                            </p>
                        </section>

                        {/* Courses CTA */}
                        <section className="bg-zinc-950 border border-white/10 p-8 rounded-3xl space-y-6">
                            <h3 className="text-2xl font-black text-white uppercase">
                                Suggested Training & Internships
                            </h3>
                            <div className="flex flex-wrap gap-4 text-sm font-bold">
                                <Link href="/web-development-kerala" className="bg-white/5 border border-white/10 hover:border-[#c1227d] px-4 py-2 rounded-full transition-all">
                                    Web Development Course
                                </Link>
                                <Link href="/digital-marketing-training" className="bg-white/5 border border-white/10 hover:border-[#c1227d] px-4 py-2 rounded-full transition-all">
                                    Digital Marketing Training
                                </Link>
                                <Link href="/python-training" className="bg-white/5 border border-white/10 hover:border-[#c1227d] px-4 py-2 rounded-full transition-all">
                                    Python Full Stack Course
                                </Link>
                            </div>
                            <div className="pt-6 border-t border-white/5">
                                <p className="text-base text-white/60 mb-4">
                                    CTA: Start building your portfolio today with practical training and corporate internship programs.
                                </p>
                                <Link href="/trainings" className="inline-flex items-center gap-3 bg-[#c1227d] text-white px-8 py-4 rounded-full font-black text-lg uppercase tracking-tighter shadow-lg shadow-[#c1227d]/20 hover:scale-105 transition-transform active:scale-95 group">
                                    Explore Internship Programs
                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                            </div>
                        </section>

                    </article>
                </div>
            </div>
        </main>
    );
}
