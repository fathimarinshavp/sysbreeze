"use client";

import { motion, useScroll, useMotionValueEvent, useTransform, AnimatePresence } from "framer-motion";
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

/* Per-program internal SVG visuals — faint white strokes, restrained magenta accents */
function SphereInner({ id }: { id: string }) {
    const faint = "#fff";
    if (id === "hr") {
        return (
            <g>
                <circle cx="76" cy="78" r="9" stroke={faint} strokeOpacity="0.35" strokeWidth="1.2" fill="none" />
                <path d="M 60 116 C 60 98 92 98 92 116" stroke={faint} strokeOpacity="0.25" strokeWidth="1.2" fill="none" />
                <circle cx="124" cy="78" r="9" stroke={faint} strokeOpacity="0.35" strokeWidth="1.2" fill="none" />
                <path d="M 108 116 C 108 98 140 98 140 116" stroke={faint} strokeOpacity="0.25" strokeWidth="1.2" fill="none" />
                <rect x="94" y="96" width="20" height="22" rx="4" stroke={faint} strokeOpacity="0.3" strokeWidth="1" fill="none" />
                <path d="M 98 103 h 12 M 98 109 h 12 M 98 115 h 8" stroke={faint} strokeOpacity="0.18" strokeWidth="1" />
                <circle cx="138" cy="122" r="8" fill="none" stroke="#F02AA8" strokeOpacity="0.7" strokeWidth="1" />
                <path d="M 134 122 l 3 3 l 5 -6" stroke="#F02AA8" strokeOpacity="0.8" strokeWidth="1" fill="none" />
            </g>
        );
    }
    if (id === "marketing") {
        return (
            <g>
                <line x1="84" y1="66" x2="84" y2="134" stroke={faint} strokeOpacity="0.2" strokeWidth="1.2" />
                <line x1="104" y1="66" x2="104" y2="134" stroke={faint} strokeOpacity="0.2" strokeWidth="1.2" />
                <line x1="124" y1="66" x2="124" y2="134" stroke={faint} strokeOpacity="0.2" strokeWidth="1.2" />
                <path d="M 66 100 h 24 M 66 112 h 24 M 66 124 h 16" stroke={faint} strokeOpacity="0.3" strokeWidth="1.2" fill="none" />
                <path d="M 62 124 l 6 12 l 8 -14" stroke="#F02AA8" strokeOpacity="0.75" strokeWidth="1.4" fill="none" />
                <circle cx="96" cy="80" r="6" fill="none" stroke={faint} strokeOpacity="0.35" strokeWidth="1" />
                <path d="M 96 74 v 12 M 90 80 h 12" stroke={faint} strokeOpacity="0.25" strokeWidth="1" />
                <path d="M 132 66 h 22 v 22 h -22 z" stroke={faint} strokeOpacity="0.25" strokeWidth="1" fill="none" />
                <path d="M 140 74 l 6 6 l -6 6" stroke="#F02AA8" strokeOpacity="0.7" strokeWidth="1" fill="none" />
            </g>
        );
    }
    if (id === "python") {
        return (
            <g>
                <text x="100" y="96" textAnchor="middle" fill={faint} opacity="0.5" fontSize="22" fontFamily="monospace" fontWeight="bold">{"</>"}</text>
                <path d="M 62 120 q 24 -22 8 -34 q 26 16 4 40" stroke="#F02AA8" strokeOpacity="0.55" strokeWidth="1.4" fill="none" />
                <path d="M 70 130 q 20 -10 16 -32" stroke={faint} strokeOpacity="0.2" strokeWidth="1" fill="none" />
                <circle cx="140" cy="122" r="2.2" fill="#0a0a12" stroke="#F02AA8" strokeOpacity="0.8" strokeWidth="1.2" />
                <circle cx="150" cy="112" r="1.6" fill={faint} opacity="0.3" />
                <line x1="142" y1="120" x2="148" y2="114" stroke={faint} strokeOpacity="0.2" strokeWidth="1" />
            </g>
        );
    }
    if (id === "ai") {
        const pts = [{ x: 100, y: 74 }, { x: 76, y: 100 }, { x: 124, y: 100 }, { x: 84, y: 124 }, { x: 116, y: 124 }, { x: 100, y: 102 }];
        const links: [number, number][] = [[0, 1], [0, 2], [1, 5], [2, 5], [1, 3], [2, 4], [5, 3], [5, 4]];
        return (
            <g>
                {links.map(([a, b], i) => (
                    <line key={i} x1={pts[a].x} y1={pts[a].y} x2={pts[b].x} y2={pts[b].y} stroke="#F02AA8" strokeOpacity="0.3" strokeWidth="0.8" />
                ))}
                {pts.map((p, i) => (
                    <circle key={i} cx={p.x} cy={p.y} r={i === 5 ? 4 : 2.2} fill="#0a0a12" stroke={i === 5 ? "#F02AA8" : faint} strokeOpacity={i === 5 ? 1 : 0.35} strokeWidth="1" />
                ))}
                <path d="M 94 60 l 3 8 M 106 60 l -3 8 M 100 56 l 0 8" stroke={faint} strokeOpacity="0.2" strokeWidth="1" />
                <line x1="100" y1="74" x2="100" y2="64" stroke={faint} strokeOpacity="0.2" strokeWidth="1" />
            </g>
        );
    }
    if (id === "mern") {
        return (
            <g>
                {[72, 92, 112, 132].map((y, i) => (
                    <rect key={i} x="70" y={y} width="60" height="14" rx="5" stroke={faint} strokeOpacity={i % 2 === 0 ? 0.35 : 0.22} strokeWidth="1" fill="none" />
                ))}
                <rect x="70" y="72" width="60" height="14" rx="5" stroke="#F02AA8" strokeOpacity="0.55" strokeWidth="1" fill="none" />
                <circle cx="146" cy="100" r="9" fill="none" stroke={faint} strokeOpacity="0.25" strokeWidth="1" />
                <circle cx="146" cy="100" r="2" fill="#F02AA8" opacity="0.7" />
                <line x1="130" y1="92" x2="142" y2="96" stroke={faint} strokeOpacity="0.2" strokeWidth="0.8" />
            </g>
        );
    }
    if (id === "datascience") {
        return (
            <g>
                {[0, 1, 2, 3, 4].map((i) => (
                    <line key={i} x1={74 + i * 13} y1="134" x2={74 + i * 13} y2={134 - 10 - i * 7} stroke={faint} strokeOpacity={0.3} strokeWidth="1.6" strokeLinecap="round" />
                ))}
                <path d="M 78 80 q 20 26 36 6 q 14 -16 30 2" stroke="#F02AA8" strokeOpacity="0.6" strokeWidth="1.4" fill="none" />
                <circle cx="114" cy="86" r="2.2" fill="#0a0a12" stroke="#F02AA8" strokeOpacity="0.85" strokeWidth="1.2" />
                <path d="M 60 70 h 80" stroke={faint} strokeOpacity="0.12" strokeWidth="0.8" strokeDasharray="2 3" />
            </g>
        );
    }
    /* ml — layered knowledge brain */
    return (
        <g>
            <circle cx="100" cy="92" r="20" stroke="#F02AA8" strokeOpacity="0.4" strokeWidth="1.2" fill="none" strokeDasharray="3 3" />
            {[[78, 84], [122, 84], [78, 112], [122, 112], [100, 70], [100, 122], [92, 108], [108, 108]].map((p, i) => (
                <circle key={i} cx={p[0]} cy={p[1]} r="3.2" fill="#0a0a12" stroke={i < 2 ? "#F02AA8" : faint} strokeOpacity={i < 2 ? 0.85 : 0.35} strokeWidth="1" />
            ))}
            {[[100, 72], [74, 82], [122, 84], [100, 70], [80, 110], [120, 112]].map(([a, b], i) => (
                <line key={`l${i}`} x1={a} y1={b} x2={((i % 3) + 1) * 30} y2="40" stroke={faint} strokeOpacity="0.14" strokeWidth="0.8" />
            ))}
            <line x1="100" y1="72" x2="100" y2="52" stroke={faint} strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="72" y1="82" x2="52" y2="76" stroke={faint} strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="128" y1="86" x2="148" y2="80" stroke={faint} strokeOpacity="0.18" strokeWidth="0.8" />
        </g>
    );
}

export default function TrainingSection() {
    const router = useRouter();
    const wrapRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);
    const n = trainingPrograms.length;

    const { scrollYProgress } = useScroll({
        target: wrapRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        setActive(Math.min(n - 1, Math.max(0, Math.floor(v * n))));
    });

    const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 150]);

    const jumpTo = (i: number) => {
        const el = wrapRef.current;
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const seg = el.offsetHeight / n;
        window.scrollTo({
            top: top + (i + 0.5) * seg - window.innerHeight / 2,
            behavior: "smooth",
        });
    };

    const current = trainingPrograms[active];

    return (
        <section className="bg-[#050505] overflow-clip no-scrollbar" id="training">
            <div ref={wrapRef} className="relative w-full" style={{ height: `${n * 80}vh` }}>
                <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
                    {/* Background: faint grid + particles + data lines */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div
                            className="absolute inset-0 opacity-[0.045]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                                backgroundSize: "72px 72px",
                                maskImage: "radial-gradient(ellipse 60% 60% at 70% 50%, black 20%, transparent 75%)",
                                WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 70% 50%, black 20%, transparent 75%)",
                            }}
                        />
                        <div className="absolute top-1/2 right-[12%] -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[#2a1248]/30 blur-[150px]" />
                        {[
                            { l: "64%", t: "22%" }, { l: "82%", t: "60%" }, { l: "58%", t: "78%" },
                            { l: "90%", t: "34%" }, { l: "72%", t: "12%" },
                        ].map((p, i) => (
                            <span key={i} className="absolute w-[2px] h-[2px] rounded-full bg-white/30" style={{ left: p.l, top: p.t }} />
                        ))}
                    </div>

                    <div className="container mx-auto px-6 md:px-10 grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center w-full relative">
                        {/* LEFT — sticky nav */}
                        <div className="lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto no-scrollbar">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="w-fit flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-3 sm:mb-4"
                            >
                                <span className="w-2 h-2 rounded-full bg-[#c1227d] animate-pulse"></span>
                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                                    Training Programs
                                </span>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-none break-words"
                            >
                                Industry-Focused Training <br className="hidden md:block" /> For Real Careers
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="hidden sm:block text-white/60 mt-3 sm:mt-4 max-w-xl font-light text-sm sm:text-base md:text-lg mb-5 md:mb-8"
                            >
                                Practical, job-oriented training with live projects and expert mentors — available online and offline.
                            </motion.p>

                            <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 lg:mx-0 lg:px-0 pb-2 lg:pb-0">
                                {trainingPrograms.map((s, i) => {
                                    const isActive = i === active;
                                    return (
                                        <button
                                            key={s.id}
                                            onClick={() => jumpTo(i)}
                                            className="group flex items-center gap-4 lg:gap-5 py-2 lg:py-[0.5rem] px-1 text-left shrink-0 cursor-pointer"
                                        >
                                            <span
                                                className={`text-xs font-bold tracking-widest transition-colors duration-500 ${isActive ? "text-[#F02AA8]" : "text-white/25"
                                                    }`}
                                            >
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span className="flex items-center gap-3.5">
                                                <span
                                                    className={`transition-all duration-500 ${isActive
                                                        ? "w-10 h-[2px] bg-gradient-to-r from-[#D61B91] to-[#6B2ACB] shadow-[0_0_14px_rgba(214,27,145,0.55)]"
                                                        : "w-5 h-px bg-white/15"
                                                        }`}
                                                />
                                                <span
                                                    className={`whitespace-nowrap lg:whitespace-normal tracking-tight font-black transition-all duration-500 ${isActive
                                                        ? "text-white text-lg md:text-[1.4rem] [text-shadow:0_0_30px_rgba(214,27,145,0.25)]"
                                                        : "text-white/30 text-sm md:text-base hover:text-white/55"
                                                        }`}
                                                >
                                                    {s.label}
                                                </span>
                                            </span>
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* RIGHT — orbital system */}
                        <div className="relative flex flex-col items-center justify-center h-auto sm:h-[300px] md:h-[460px] lg:h-[560px] [@media(max-height:560px)]:h-[300px]">
                            <motion.div
                                className="relative w-[200px] h-[200px] sm:w-[270px] sm:h-[270px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] [@media(max-height:560px)]:w-[270px] [@media(max-height:560px)]:h-[270px]"
                                style={{ rotate: ringRotate, transformPerspective: 1000 }}
                            >
                                {/* Orbit rings — tilted planes */}
                                <div className="absolute inset-0" style={{ transform: "rotateX(68deg)" }}>
                                    <div className="absolute inset-0 rounded-full border border-white/[0.08]" />
                                    <div className="absolute inset-10 rounded-full border border-white/[0.07]" />
                                    <div className="absolute inset-20 rounded-full border border-white/[0.06]" />
                                    <span className="absolute top-1/2 -left-1 w-1.5 h-1.5 -translate-y-1/2 rounded-full bg-[#F02AA8]/80 shadow-[0_0_10px_rgba(240,42,168,0.8)]" />
                                    <span className="absolute top-1/2 -right-1 w-1 h-1 -translate-y-1/2 rounded-full bg-white/40" />
                                </div>
                                <div className="absolute inset-0" style={{ transform: "rotateX(68deg) rotateZ(38deg)" }}>
                                    <div className="absolute inset-0 [animation:orbit-spin_46s_linear_infinite]">
                                        <div className="absolute inset-6 rounded-full border border-dashed border-white/[0.08]" />
                                        <span className="absolute top-[6%] left-1/2 w-1.5 h-1.5 -translate-x-1/2 rounded-full bg-[#8b3fd9]/80" />
                                    </div>
                                </div>
                                <div className="absolute inset-0" style={{ transform: "rotateX(68deg) rotateZ(-30deg)" }}>
                                    <div className="absolute inset-0 [animation:orbit-spin_64s_linear_infinite_reverse]">
                                        <svg viewBox="0 0 100 100" className="absolute inset-4">
                                            <defs>
                                                <linearGradient id="orbRingTrim" x1="0" y1="0" x2="100" y2="100">
                                                    <stop offset="0%" stopColor="#D61B91" stopOpacity="0.55" />
                                                    <stop offset="100%" stopColor="#6B2ACB" stopOpacity="0.15" />
                                                </linearGradient>
                                            </defs>
                                            <ellipse cx="50" cy="50" rx="46" ry="46" fill="none" stroke="url(#orbRingTrim)" strokeWidth="0.5" />
                                        </svg>
                                        <span className="absolute bottom-[16%] right-[22%] w-1 h-1 rounded-full bg-white/50" />
                                    </div>
                                </div>
                                {/* Vertical ring */}
                                <div className="absolute inset-0" style={{ transform: "rotateY(72deg)" }}>
                                    <div className="absolute inset-16 rounded-full border border-white/[0.06]" />
                                    <span className="absolute top-[8%] left-1/2 w-1 h-1 -translate-x-1/2 rounded-full bg-white/40" />
                                </div>

                                {/* Central glass sphere */}
                                <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "rotateX(0deg)" }}>
                                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden">
                                        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_26%,rgba(255,255,255,0.14),rgba(20,20,28,0.9)_55%,rgba(5,5,8,0.95)_100%)]" />
                                        <div className="absolute inset-0 rounded-full border border-white/[0.12]" />
                                        <div className="absolute inset-0 rounded-full" style={{ boxShadow: "inset -14px -18px 34px rgba(107,42,203,0.22), inset 10px 12px 26px rgba(255,255,255,0.06)" }} />
                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-10 rounded-[100%] bg-[#D61B91]/15 blur-2xl" />
                                        <AnimatePresence>
                                            <motion.svg
                                                key={current.id}
                                                viewBox="0 0 200 200"
                                                className="absolute inset-0 w-full h-full"
                                                initial={{ opacity: 0, scale: 0.94 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 1.04 }}
                                                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                            >
                                                <SphereInner id={current.id} />
                                            </motion.svg>
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Caption */}
                            <div className="relative w-full mt-2 text-center px-4 sm:mt-0 sm:absolute sm:bottom-0 sm:left-0 sm:right-0">
                                <AnimatePresence>
                                    <motion.div
                                        key={`cap-${current.id}`}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -12 }}
                                        transition={{ duration: 0.35 }}
                                    >
                                        <p className="text-white font-black text-base sm:text-lg md:text-xl tracking-tight">{current.label}</p>
                                        <p className="text-[#777782] text-xs md:text-sm mt-1">{current.tagline}</p>
                                        <button
                                            onClick={() => router.push(current.href)}
                                            className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 border border-white/15 hover:border-[#D61B91]/60 hover:text-[#F02AA8] transition-all rounded-full px-5 py-2 cursor-pointer"
                                        >
                                            Learn More <ArrowUpRight className="w-3.5 h-3.5" />
                                        </button>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features strip — preserved from the original section */}
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
                            className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/3 border border-white/5"
                        >
                            <i className={`fa-solid ${item.icon} text-pink-400 text-xl`}></i>
                            <span className="text-[10px] uppercase tracking-widest font-bold text-center text-zinc-500">{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}