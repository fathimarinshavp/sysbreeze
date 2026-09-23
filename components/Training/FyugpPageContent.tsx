"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    GraduationCap,
    CheckCircle2,
    Briefcase,
    Code,
    BarChart3,
    Palette,
    Smartphone,
    Users,
    Globe,
    ArrowRight,
    Sparkles,
    ChevronDown,
    Building2,
    Rocket,
    Target,
    FolderKanban,
    Award,
    Laptop,
    Check
} from "lucide-react";

export default function FyugpPageContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const itPrograms = [
        "Data Science Internship",
        "Data Analytics Internship",
        "Flutter Development Internship",
        "Web Development Internship",
        "Software Development Internship",
        "Digital Marketing Internship",
        "Graphic Designing Internship",
        "AI & Technology-related internship programs",
        "Other industry-oriented IT training programs"
    ];

    const nonItPrograms = [
        "HR Management Internship",
        "Human Resource Development Internship",
        "Business Management Internship",
        "Office Administration Internship",
        "Marketing Internship",
        "Professional Skill Development Programs",
        "Other business-oriented internship programs"
    ];

    const detailedCourses = [
        {
            number: "01",
            title: "FYUGP Digital Marketing Internship",
            icon: Globe,
            badge: "Marketing & Growth",
            color: "from-pink-500 to-rose-600",
            bgGlow: "rgba(244,63,94,0.12)",
            description:
                "The FYUGP Digital Marketing Internship in Kerala is suitable for students interested in digital marketing, online business, branding, and marketing technology.",
            skills: [
                "Search Engine Optimization (SEO)",
                "Social Media Marketing",
                "Content Marketing",
                "Google Ads",
                "Meta Ads",
                "Email Marketing",
                "Keyword Research",
                "Website and digital marketing analytics",
                "Online branding",
                "Digital marketing tools"
            ],
            takeaway:
                "This internship helps students understand how businesses use digital channels to reach customers and generate growth."
        },
        {
            number: "02",
            title: "FYUGP HR Internship",
            icon: Users,
            badge: "Human Resources",
            color: "from-purple-500 to-indigo-600",
            bgGlow: "rgba(168,85,247,0.12)",
            description:
                "The FYUGP HR Internship in Kerala provides students with practical exposure to human resource management and workplace processes.",
            skills: [
                "Recruitment and selection",
                "Resume screening",
                "Interview coordination",
                "Employee onboarding",
                "HR documentation",
                "Employee engagement",
                "Performance management",
                "Training and development",
                "HR policies and procedures",
                "Basic HR technology and tools"
            ],
            takeaway:
                "It is an excellent option for students interested in HR management, recruitment, talent acquisition, and people management."
        },
        {
            number: "03",
            title: "FYUGP Data Science Internship",
            icon: Code,
            badge: "Data Science & AI",
            color: "from-cyan-500 to-blue-600",
            bgGlow: "rgba(6,182,212,0.12)",
            description:
                "The FYUGP Data Science Internship helps students understand how data can be analyzed and used to support business and decision-making.",
            skills: [
                "Data preparation",
                "Data analysis",
                "Python fundamentals",
                "Data visualization",
                "Statistical concepts",
                "Exploratory data analysis",
                "Machine learning fundamentals",
                "Data science tools",
                "Practical data projects"
            ],
            takeaway:
                "This internship is suitable for students looking to build a foundation for careers in data science, analytics, AI, and technology."
        },
        {
            number: "04",
            title: "FYUGP Data Analytics Internship",
            icon: BarChart3,
            badge: "Business Intelligence",
            color: "from-amber-500 to-orange-600",
            bgGlow: "rgba(245,158,11,0.12)",
            description:
                "The FYUGP Data Analytics Internship in Kerala focuses on developing practical skills for collecting, analyzing, visualizing, and interpreting data.",
            skills: [
                "Data collection",
                "Data cleaning",
                "Excel",
                "Data visualization",
                "Dashboard creation",
                "Business analytics",
                "Data interpretation",
                "Reporting",
                "Analytical tools",
                "Practical analytics projects"
            ],
            takeaway:
                "The program can help students understand how organizations use data to make better business decisions."
        },
        {
            number: "05",
            title: "FYUGP Flutter Internship",
            icon: Smartphone,
            badge: "App Development",
            color: "from-emerald-500 to-teal-600",
            bgGlow: "rgba(16,185,129,0.12)",
            description:
                "The FYUGP Flutter Internship is designed for students interested in mobile application development.",
            skills: [
                "Flutter framework",
                "Dart programming",
                "Mobile UI development",
                "Responsive application design",
                "API integration",
                "Application navigation",
                "Database integration",
                "Mobile application testing",
                "Project development"
            ],
            takeaway:
                "Students can use the internship to develop practical understanding of the mobile app development lifecycle."
        },
        {
            number: "06",
            title: "FYUGP Graphic Designing Internship",
            icon: Palette,
            badge: "Creative & Design",
            color: "from-fuchsia-500 to-pink-600",
            bgGlow: "rgba(217,70,239,0.12)",
            description:
                "The FYUGP Graphic Designing Internship is suitable for students interested in visual communication, branding, creative design, and digital content creation.",
            skills: [
                "Graphic design fundamentals",
                "Social media creatives",
                "Branding design",
                "Poster design",
                "Brochure design",
                "Digital advertisements",
                "Typography",
                "Color and composition",
                "Creative content design",
                "Design tools and workflows"
            ],
            takeaway:
                "This internship is particularly useful for students interested in graphic design, UI/visual design, branding, advertising, and creative careers."
        }
    ];

    const eligibleStudents = [
        "FYUGP students",
        "Undergraduate students",
        "Degree students",
        "College students",
        "Students looking for credit-based internship opportunities",
        "Students seeking practical industry exposure",
        "Students interested in IT careers",
        "Students interested in non-IT careers",
        "Students looking to build a professional portfolio",
        "Students preparing for higher studies or employment"
    ];

    const whyChoosePillars = [
        {
            title: "Practical Learning",
            desc: "Gain exposure to practical activities and industry-oriented tasks rather than depending only on theoretical learning.",
            icon: Laptop,
            color: "text-pink-400"
        },
        {
            title: "Industry Exposure",
            desc: "Understand how concepts learned during your academic studies are applied in professional environments.",
            icon: Building2,
            color: "text-purple-400"
        },
        {
            title: "Skill Development",
            desc: "Develop technical, creative, analytical, management, and communication skills relevant to your chosen field.",
            icon: Target,
            color: "text-cyan-400"
        },
        {
            title: "Project Experience",
            desc: "Work on practical assignments and projects that can help demonstrate your skills.",
            icon: FolderKanban,
            color: "text-emerald-400"
        },
        {
            title: "Career Preparation",
            desc: "Build confidence and familiarity with professional workflows before entering the job market.",
            icon: Rocket,
            color: "text-amber-400"
        },
        {
            title: "Portfolio Development",
            desc: "Create practical work that can strengthen your portfolio, resume, and future career opportunities.",
            icon: Award,
            color: "text-rose-400"
        }
    ];

    const faqs = [
        {
            question: "What is an FYUGP Internship in Kerala?",
            answer:
                "The FYUGP (Four-Year Undergraduate Programme) Internship is a structured industry training initiative in Kerala that bridges academic learning with practical workplace experience. It gives students hands-on exposure to live projects, mentorship from industry professionals, and verification for college academic credits."
        },
        {
            question: "Can FYUGP students get credits for this internship?",
            answer:
                "Yes. Our internship programs provide authorized documentation, attendance logs, verified mentor evaluations, and project completion certificates that satisfy the credit-transfer guidelines of Kerala universities implementing FYUGP."
        },
        {
            question: "Are both IT and Non-IT internships available?",
            answer:
                "Yes. Sysbreeze provides internships across IT domains (Data Science, Data Analytics, Flutter, Web Development, Graphic Design, AI) as well as Non-IT domains (HR Management, Business Administration, Marketing, and Professional Skill Development)."
        },
        {
            question: "What is the duration and mode of the internship?",
            answer:
                "We offer flexible durations ranging from short-term (2–4 weeks) to semester-long (1–3 months) programs. Training is available offline at our Kinfra Techno Industrial Park facility in Calicut, as well as in hybrid modes."
        },
        {
            question: "How can I apply and get started?",
            answer:
                "Students can easily apply by contacting our admissions and student coordinator team through phone, WhatsApp (+91 9446621444), or by submitting an enquiry on our website."
        }
    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#c1227d] selection:text-white pt-24 pb-20 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(193,34,125,0.12),transparent_70%)]" />
                <div className="absolute top-3/4 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(75,42,173,0.08),transparent_70%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* HERO SECTION */}
                <section className="pt-8 pb-16 md:pt-14 md:pb-24 text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-6"
                    >
                        <GraduationCap className="w-4 h-4 text-[#c1227d]" />
                        <span className="text-xs md:text-sm font-bold tracking-wider uppercase text-white/90">
                            FYUGP Internship in Kerala
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 uppercase"
                    >
                        FYUGP Internship in Kerala – <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-400">
                            Industry-Focused Training & Practical Experience
                        </span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90 mb-6"
                    >
                        Build Your Career with Industry-Focused FYUGP Internships
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-4 text-base sm:text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light mb-10 text-justify sm:text-center"
                    >
                        <p>
                            The <strong className="text-white font-semibold">FYUGP Internship in Kerala</strong> provides students with an opportunity to gain practical, industry-oriented experience while developing skills that complement their academic education. Through structured internship programs, students can explore real-world applications, work on practical projects, develop professional skills, and gain valuable exposure to their chosen career field.
                        </p>
                        <p>
                            Our FYUGP internship programs in Kerala are designed for students who want to move beyond classroom learning and develop practical skills that can support their academic and professional journey. Whether you are interested in IT, digital marketing, human resources, data science, data analytics, mobile app development, graphic designing, or other professional fields, our internship programs offer opportunities to learn and gain practical experience.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="#enquire"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#c1227d] to-[#4B2AAD] text-white font-bold text-base uppercase tracking-wider shadow-lg shadow-pink-600/30 hover:scale-105 transition-all duration-300"
                        >
                            <span>Enquire About Internships</span>
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#courses"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-base uppercase tracking-wider backdrop-blur-sm transition-all duration-300"
                        >
                            <span>Explore Courses</span>
                            <ChevronDown className="w-5 h-5" />
                        </a>
                    </motion.div>

                    {/* Value Pill Highlights */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto"
                    >
                        {[
                            "Credit-Eligible Curriculum",
                            "IT & Non-IT Tracks",
                            "Live Practical Projects",
                            "Official Certification"
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-zinc-900/80 border border-white/10 text-xs sm:text-sm font-semibold text-white/90"
                            >
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* IT & NON-IT TRACKS SECTION */}
                <section className="py-16 md:py-20 border-t border-white/10">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="text-[#c1227d] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm block mb-3">
                            Comprehensive Learning Paths
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">
                            FYUGP IT & Non-IT Internship Programs
                        </h2>
                        <p className="text-white/70 text-base md:text-lg">
                            We offer internship opportunities across multiple IT and non-IT domains, allowing students to choose a program based on their academic background, interests, and career goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* IT Track Card */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="bg-gradient-to-br from-zinc-900/90 to-black p-8 sm:p-10 rounded-[2.5rem] border border-cyan-500/30 shadow-2xl relative overflow-hidden group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                                <Code className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black mb-4 uppercase tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                                IT Internship Programs
                            </h3>
                            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 font-light">
                                Our IT-focused FYUGP internships help students develop practical technical skills and understand how technology is applied in real business environments.
                            </p>
                            <div className="space-y-3">
                                {itPrograms.map((prog, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-white/90">
                                        <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span>{prog}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Non-IT Track Card */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="bg-gradient-to-br from-zinc-900/90 to-black p-8 sm:p-10 rounded-[2.5rem] border border-purple-500/30 shadow-2xl relative overflow-hidden group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
                                <Briefcase className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black mb-4 uppercase tracking-tight text-white group-hover:text-purple-300 transition-colors">
                                Non-IT Internship Programs
                            </h3>
                            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 font-light">
                                Students who are interested in management, business, administration, and other professional domains can explore our non-IT internship opportunities.
                            </p>
                            <div className="space-y-3">
                                {nonItPrograms.map((prog, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-white/90">
                                        <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span>{prog}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 6 DETAILED FYUGP INTERNSHIP COURSES */}
                <section id="courses" className="py-16 md:py-24 border-t border-white/10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[#c1227d] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm block mb-3">
                            Specialized Domains
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 uppercase">
                            FYUGP Internship Courses
                        </h2>
                        <p className="text-white/70 text-base md:text-lg">
                            Explore structured internship programs with hands-on learning modules, live assignments, and real-world skills.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {detailedCourses.map((course, idx) => {
                            const IconComponent = course.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="bg-zinc-950 rounded-[2.5rem] p-7 sm:p-8 border border-white/10 hover:border-white/25 flex flex-col justify-between relative overflow-hidden transition-all duration-300 group shadow-2xl"
                                    style={{
                                        boxShadow: `0 20px 40px -15px ${course.bgGlow}`
                                    }}
                                >
                                    {/* Number Watermark */}
                                    <span className="absolute top-6 right-8 font-black text-5xl text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors">
                                        {course.number}
                                    </span>

                                    <div>
                                        {/* Icon & Badge */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white shadow-lg`}>
                                                <IconComponent className="w-6 h-6" />
                                            </div>
                                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/80 uppercase tracking-wider">
                                                {course.badge}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-black tracking-tight text-white mb-3 leading-snug">
                                            {course.title}
                                        </h3>

                                        <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">
                                            {course.description}
                                        </p>

                                        {/* Skills/Modules List */}
                                        <div className="border-t border-white/10 pt-5 mb-6">
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                                                Practical Modules Covered:
                                            </h4>
                                            <div className="space-y-2">
                                                {course.skills.map((skill, sIdx) => (
                                                    <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#c1227d] mt-1.5 shrink-0" />
                                                        <span>{skill}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Takeaway Box */}
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mt-2">
                                        <p className="text-xs text-white/90 italic leading-relaxed">
                                            💡 {course.takeaway}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* WHO CAN DO FYUGP INTERNSHIPS? */}
                <section className="py-16 md:py-20 border-t border-white/10">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-zinc-900 to-black p-8 sm:p-12 md:p-16 rounded-[3rem] border border-white/15 shadow-2xl relative overflow-hidden">
                        <div className="text-center mb-10">
                            <span className="text-pink-400 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm block mb-3">
                                Student Eligibility
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white mb-4">
                                Who Can Do FYUGP Internships?
                            </h2>
                            <p className="text-white/70 text-base md:text-lg font-light max-w-2xl mx-auto">
                                Our FYUGP internships in Kerala can be suitable for students from different academic backgrounds who need practical exposure and industry-oriented learning.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                            {eligibleStudents.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-white/90 text-sm sm:text-base font-medium"
                                >
                                    <div className="w-6 h-6 rounded-full bg-[#c1227d]/20 text-[#c1227d] flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-center text-sm sm:text-base text-white/60 italic">
                            Students can select an internship based on their course, specialization, career interest, and skill level.
                        </p>
                    </div>
                </section>

                {/* WHY CHOOSE AN FYUGP INTERNSHIP? */}
                <section className="py-16 md:py-24 border-t border-white/10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[#c1227d] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm block mb-3">
                            Key Value Pillars
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 uppercase">
                            Why Choose an FYUGP Internship?
                        </h2>
                        <p className="text-white/70 text-base md:text-lg">
                            Empowering students with practical knowledge, workplace confidence, and professional career readiness.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {whyChoosePillars.map((pillar, idx) => {
                            const IconComp = pillar.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -6 }}
                                    className="p-8 rounded-[2rem] bg-zinc-950 border border-white/10 hover:border-white/20 transition-all shadow-lg"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                                        <IconComp className={`w-6 h-6 ${pillar.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-white/70 text-sm leading-relaxed font-light">
                                        {pillar.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* IT AND NON-IT UNDER ONE PLATFORM BANNER */}
                <section className="py-12">
                    <div className="max-w-5xl mx-auto rounded-[3rem] p-8 sm:p-12 md:p-14 bg-gradient-to-r from-purple-950/60 via-zinc-900 to-pink-950/60 border border-white/15 shadow-2xl relative overflow-hidden text-center">
                        <Sparkles className="w-10 h-10 text-amber-400 mx-auto mb-4 animate-pulse" />
                        <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
                            IT and Non-IT Internships Under One Platform
                        </h2>
                        <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-light mb-6">
                            Choosing the right internship can help students connect their academic learning with their career goals. Our internship programs cover both IT and non-IT domains, giving students multiple options based on their interests.
                        </p>
                        <p className="text-white/90 text-sm sm:text-base font-medium max-w-2xl mx-auto">
                            From Digital Marketing and Data Science to HR Management and Graphic Designing, students can choose an area that aligns with their future career plans.
                        </p>
                    </div>
                </section>

                {/* ENQUIRY & CONTACT SECTION */}
                <section id="enquire" className="py-16 md:py-24 border-t border-white/10">
                    <div className="max-w-4xl mx-auto bg-zinc-950 rounded-[3rem] p-8 sm:p-12 md:p-14 border border-white/15 shadow-2xl text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c1227d]/15 text-[#c1227d] text-xs font-bold uppercase tracking-wider mb-6 border border-[#c1227d]/30">
                            Admissions Open
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4">
                            Start Your FYUGP Internship Journey in Kerala
                        </h2>
                        <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-6 font-light">
                            Looking for an FYUGP internship in Kerala that combines academic learning with practical industry exposure? Explore our IT and non-IT internship programs and choose a course that matches your interests and career goals.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold text-pink-300 uppercase tracking-wider mb-8">
                            <span>Build skills.</span>
                            <span>•</span>
                            <span>Gain practical experience.</span>
                            <span>•</span>
                            <span>Create projects.</span>
                            <span>•</span>
                            <span>Prepare for your career.</span>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-2xl mx-auto mb-8 text-left sm:text-center">
                            <h3 className="text-lg font-bold text-white mb-2">
                                Enquire About FYUGP Internship Programs
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed font-light">
                                Students can contact our team to learn more about available internship courses, eligibility, duration, training structure, projects, and internship opportunities.
                            </p>
                        </div>

                        {/* Direct Contact Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <a
                                href="https://wa.me/919446621444?text=Hi%20Sysbreeze,%20I%20am%20interested%20in%20the%20FYUGP%20Internship%20in%20Kerala"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all"
                            >
                                <i className="fa-brands fa-whatsapp text-lg" />
                                <span>WhatsApp Enquiry</span>
                            </a>
                            <a
                                href="tel:+919446621444"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all"
                            >
                                <i className="fa-solid fa-phone text-sm" />
                                <span>Call: +91 9446621444</span>
                            </a>
                            <Link
                                href="/contact-us"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all"
                            >
                                <span>Contact Form</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQS SECTION */}
                <section className="py-16 md:py-20 border-t border-white/10">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="text-[#c1227d] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm block mb-3">
                            Got Questions?
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, idx) => {
                            const isOpen = openFaq === idx;
                            return (
                                <div
                                    key={idx}
                                    className="rounded-2xl bg-zinc-950 border border-white/10 overflow-hidden transition-colors"
                                >
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                                        className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-pink-300 transition-colors"
                                    >
                                        <span>{faq.question}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-pink-400 transition-transform duration-300 shrink-0 ${
                                                isOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 text-sm sm:text-base text-white/70 font-light leading-relaxed border-t border-white/5 pt-4">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </main>
    );
}
