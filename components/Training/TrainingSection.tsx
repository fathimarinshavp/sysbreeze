"use client";

import { motion, useScroll, AnimatePresence, useInView, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const trainingPrograms = [
    {
        id: "hr",
        label: "HR Management",
        tagline: "Job-Oriented Online & Offline HR Training",
        description:
            "Learn recruitment, payroll management, HR operations, and labor law compliance through practical HR training with real-world experience.",
        href: "/hr-management-training-course",
        tint: "#F02AA8",
    },
    {
        id: "marketing",
        label: "Digital Marketing",
        tagline: "Professional Online & Offline Marketing Training",
        description:
            "Master SEO, Google Ads, social media marketing, analytics, and live campaign management with practical digital marketing training.",
        href: "/digital-marketing-training",
        tint: "#8b3fd9",
    },
    {
        id: "python",
        label: "Python Full Stack",
        tagline: "Online & Offline Programming Training",
        description:
            "Learn Python programming, Django framework, APIs, and frontend development by building real-world projects.",
        href: "/python-training",
        tint: "#a78bfa",
    },
    {
        id: "ai",
        label: "AI & Robotics",
        tagline: "Advanced Online & Offline AI Training",
        description:
            "Hands-on AI and robotics training including automation, AI tools, and practical projects.",
        href: "/artificial-intelligence-robotics-training",
        tint: "#e879f9",
    },
    {
        id: "mern",
        label: "MERN Stack",
        tagline: "Full Stack Web Development Training",
        description:
            "Learn MongoDB, Express.js, React, and Node.js to build modern web applications with practical training.",
        href: "/mern-stack-development-training",
        tint: "#7c3aed",
    },
    {
        id: "datascience",
        label: "Data Science",
        tagline: "Professional Data Science Training",
        description:
            "Learn data analysis, data visualization, and business analytics using real-world datasets and tools.",
        href: "/data-science-certification-course",
        tint: "#6B2ACB",
    },
];

export default function TrainingSection() {
    const router = useRouter();
    const sectionRef = useRef<HTMLElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
    const [currentIndex, setCurrentIndex] = useState(0);
    const n = trainingPrograms.length;

    const { scrollYProgress } = useScroll({
        target: carouselRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setCurrentIndex(Math.min(n - 1, Math.max(0, Math.floor(latest * n))));
    });

    const jumpTo = (i: number) => {
        const el = carouselRef.current;
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const seg = el.offsetHeight / n;
        window.scrollTo({
            top: top + (i + 0.5) * seg - window.innerHeight / 2,
            behavior: "smooth",
        });
    };

    const currentProgram = trainingPrograms[currentIndex];

    return (
        <section ref={sectionRef} className="bg-[#050505] overflow-clip no-scrollbar" id="training">
            <div className="container mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-20">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="w-fit mx-auto flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-4"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#c1227d]"></span>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                            Training Programs
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-none mb-4"
                    >
                        Industry-Focused Training For Real Careers
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
                    >
                        Practical, job-oriented training with live projects and expert mentors — available online and offline.
                    </motion.p>
                </motion.div>

                {/* Scroll Carousel */}
                <div ref={carouselRef} className="relative max-w-4xl mx-auto" style={{ height: `${n * 80}vh` }}>
                    <div className="sticky top-0 min-h-[100svh] flex flex-col items-center justify-center gap-5 sm:gap-6 overflow-hidden px-4 py-16">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => router.push(currentProgram.href)}
                                className="relative w-full max-w-3xl overflow-hidden rounded-2xl cursor-pointer border border-white/[0.07] flex flex-col min-h-[480px] sm:min-h-[460px] md:min-h-[480px]"
                                style={{
                                    background: 'linear-gradient(135deg, #101018 0%, #0a0a10 55%, #0d0d14 100%)',
                                    boxShadow: '0 24px 60px -30px rgba(0, 0, 0, 0.8), 0 0 40px -10px rgba(240, 42, 168, 0.08)',
                                }}
                            >
                                {/* Faint corner glow */}
                                <div
                                    className="pointer-events-none absolute -top-1/3 -right-1/4 w-full h-full rounded-full blur-3xl"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(240, 42, 168, 0.06) 0%, transparent 70%)',
                                    }}
                                />
                                {/* Top hairline */}
                                <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F02AA8]/30 to-transparent" />

                                {/* Ghost index number */}
                                <span className="pointer-events-none absolute -top-4 right-4 sm:right-8 text-[6rem] sm:text-[8rem] md:text-[9rem] font-black leading-none select-none text-white/[0.03]">
                                    {String(currentIndex + 1).padStart(2, "0")}
                                </span>

                                {/* Content */}
                                <div className="relative p-6 sm:p-10 md:p-14 flex flex-col items-start gap-3 sm:gap-4 flex-1">
                                    {/* Eyebrow */}
                                    <div className="flex items-center gap-3 text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase">
                                        <span className="text-[#F02AA8]/90">{String(currentIndex + 1).padStart(2, "0")}</span>
                                        <span className="w-8 h-px bg-[#F02AA8]/30" />
                                        <span className="text-white/50">Training Program</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-[1.65rem] leading-[1.1] sm:text-4xl md:text-5xl font-black uppercase tracking-tight sm:leading-[1.05] text-white [text-shadow:0_0_40px_rgba(240,42,168,0.15)] min-h-[3.6rem] sm:min-h-[2.6em] flex items-center text-balance">
                                        {currentProgram.label}
                                    </h3>

                                    {/* Tagline */}
                                    <p className="text-[#F02AA8]/50 text-[11px] sm:text-sm uppercase tracking-[0.15em] font-semibold min-h-[2.5rem] sm:min-h-[1.5rem] flex items-center">
                                        {currentProgram.tagline}
                                    </p>

                                    {/* Description */}
                                    <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl pt-1 min-h-[7.5rem] sm:min-h-[5.5rem] md:min-h-[5rem]">
                                        {currentProgram.description}
                                    </p>

                                    {/* CTA */}
                                    <div className="mt-auto pt-4">
                                    <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest text-[#F02AA8]/90 border border-[#F02AA8]/25 hover:bg-[#F02AA8]/10 hover:border-[#F02AA8]/40 transition-colors duration-300">
                                        Explore Program
                                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Progress Indicator */}
                        <div className="flex gap-2">
                            {trainingPrograms.map((p, idx) => (
                                <motion.button
                                    key={p.id}
                                    onClick={() => jumpTo(idx)}
                                    aria-label={`Go to ${p.label}`}
                                    whileHover={{ scale: 1.5 }}
                                    className={`rounded-full transition-all cursor-pointer ${
                                        idx === currentIndex
                                            ? 'w-8 h-2'
                                            : 'w-2 h-2'
                                    }`}
                                    style={{
                                        backgroundColor: idx === currentIndex ? '#F02AA8' : 'rgba(255,255,255,0.3)',
                                    }}
                                />
                            ))}
                        </div>

                        {/* Scroll Hint */}
                        {currentIndex === 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="hidden sm:flex flex-col items-center gap-2"
                            >
                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
                                >
                                    <motion.div
                                        animate={{ y: [0, 12, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="w-1.5 h-1.5 rounded-full bg-white/50"
                                    />
                                </motion.div>
                                <span className="text-white/40 text-xs uppercase tracking-widest">
                                    Scroll to explore
                                </span>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 py-14 md:py-20">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                        { icon: "fa-certificate", text: "Certification" },
                        { icon: "fa-laptop-code", text: "Live Projects" },
                        { icon: "fa-briefcase", text: "Placement Assistance" },
                        { icon: "fa-chalkboard-user", text: "Expert Trainers" },
                        { icon: "fa-tools", text: "Latest Tools" },
                        { icon: "fa-headset", text: "Support" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center justify-center text-center gap-3 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/15 transition-colors duration-300 min-h-[112px] sm:min-h-[124px]"
                        >
                            <i className={`fa-solid ${item.icon} text-xl text-white/50`} />
                            <span className="text-[11px] uppercase tracking-[0.16em] font-bold text-center leading-tight text-zinc-500">{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}