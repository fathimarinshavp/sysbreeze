"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const openPositions = [
    {
        title: "Frontend Developer",
        description: "Build responsive, high-quality interfaces using modern web technologies.",
        badges: ["Full Time", "Remote"],
        requirements: [
            "HTML, CSS, JavaScript",
            "React or Vue (bonus)",
            "Responsive design"
        ],
        href: "/frontend-developer-jobs-kerala"
    },
    {
        title: "UI/UX Designer",
        description: "Create stunning, user-centric designs for a variety of digital platforms.",
        badges: ["Contract", "Remote"],
        requirements: [
            "Figma or Adobe XD",
            "Strong layout and color theory",
            "Prototyping skills"
        ],
        href: "/ui-ux-designer-jobs-kerala"
    }
];

const whyWorkPoints = [
    "Flexible and remote-friendly work",
    "Real-world web development projects",
    "Creative and supportive environment",
    "Opportunities to grow your skills"
];

export default function CareersContent() {
    return (
        <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[480px] bg-gradient-to-br from-[#D81B8C]/15 via-[#612D91]/10 to-transparent rounded-full blur-[120px]" />
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_0%,rgba(34,211,238,0.08),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Hero Section */}
                <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2.5 pl-2 pr-5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur mb-8 shadow-[0_0_40px_rgba(193,34,125,0.15)]"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#c1227d] animate-pulse"></span>
                        <span className="text-[10px] font-black tracking-[0.25em] uppercase text-white/80">
                            Join Us
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] uppercase max-w-5xl"
                    >
                        Build Your Career <br /> with{" "}
                        <span className="bg-gradient-to-r from-[#D81B8C] via-[#ff4da6] to-[#612D91] bg-clip-text text-transparent">
                            sysbreeze
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[#c1227d] to-transparent origin-center"
                    />
                </div>

                {/* Why Work With Us Section */}
                <div className="max-w-3xl mx-auto mb-16 md:mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#c1227d]"></span>
                            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-white/60">
                                Why Work With Us
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.95]">
                            Build, Learn,{" "}
                            <span className="text-white/30">and Grow</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-white/50 font-medium leading-snug mb-12">
                            At Sysbreeze, we focus on quality, creativity, and long-term growth. You&apos;ll work on real projects, sharpen your skills, and grow alongside a passionate team.
                        </p>

                        <ul className="space-y-4 text-left max-w-xl mx-auto">
                            {whyWorkPoints.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group flex items-center gap-4 text-lg font-bold text-white/80 p-4 -ml-4 rounded-2xl hover:bg-white/[0.04] hover:text-white transition-all duration-300"
                                >
                                    <span className="w-8 h-8 rounded-xl bg-[#c1227d]/10 border border-[#c1227d]/25 flex items-center justify-center shrink-0 group-hover:bg-[#c1227d] transition-all duration-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#c1227d] group-hover:bg-white transition-colors duration-300" />
                                    </span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Let's Build Together Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-20 text-center mb-16 md:mb-24 max-w-6xl mx-auto relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(216,27,140,0.12),transparent_55%)]" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-[#c1227d]/60 to-transparent" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 relative z-10 leading-none">
                        Let&apos;s Build Together
                    </h2>
                    <p className="text-xl md:text-2xl text-white/50 font-medium mb-12 max-w-2xl mx-auto relative z-10">
                        Join Sysbreeze and be part of meaningful digital projects.
                    </p>

                    <Link href="/contact-us" className="relative z-10 inline-block">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group/btn inline-flex items-center gap-3 pl-2 pr-10 py-2 rounded-full bg-gradient-to-r from-[#D81B8C] via-[#612D91] to-[#21094E] border border-white/20 font-black text-lg uppercase tracking-tight shadow-[0_10px_40px_-10px_rgba(216,27,140,0.6)] hover:brightness-110 transition-all duration-300"
                        >
                            <span className="w-11 h-11 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white group-hover/btn:rotate-45 group-hover/btn:bg-white group-hover/btn:text-black transition-all duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </span>
                            Contact Us
                        </motion.div>
                    </Link>
                </motion.div>

                {/* Open Positions Section */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c1227d]/30 bg-[#c1227d]/10 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4da6] animate-pulse" />
                            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#ff8ac2]">
                                Open Positions
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                            Open Positions
                        </h2>
                    </motion.div>

                    <div className="flex flex-col gap-8">
                        {openPositions.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-[#0a0a0a] p-10 md:p-14 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 group hover:border-[#c1227d]/40 transition-all duration-500 overflow-hidden relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#D81B8C]/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-[#c1227d]/60 transition-colors duration-500" />

                                <div className="relative z-10">
                                    <div className="flex flex-wrap gap-3 mb-8 justify-center">
                                        {job.badges.map((badge, bIndex) => (
                                            <span
                                                key={bIndex}
                                                className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black tracking-widest uppercase text-white/60 group-hover:border-[#c1227d]/30 group-hover:text-[#ff8ac2] transition-colors duration-500"
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-center mb-6 group-hover:text-[#ff4da6] transition-colors duration-500">
                                        {job.title}
                                    </h3>

                                    <p className="text-xl text-white/50 text-center font-medium mb-10 max-w-2xl mx-auto">
                                        {job.description}
                                    </p>

                                    <ul className="flex flex-col gap-4 items-center mb-12">
                                        {job.requirements.map((req, rIndex) => (
                                            <li key={rIndex} className="flex items-center gap-3 text-lg font-bold text-white/80">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#c1227d]" />
                                                {req}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex justify-center">
                                        <Link
                                            href={job.href || "/contact-us"}
                                            className="px-10 py-4 rounded-2xl border border-[#c1227d] text-[#ff4da6] font-black text-lg uppercase tracking-tight transition-all hover:bg-[#c1227d] hover:text-white shadow-[0_0_30px_rgba(193,34,125,0.2)] hover:shadow-[0_0_50px_rgba(193,34,125,0.45)] text-center"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
