"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

interface TrainingProgram {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    color: string;
    href: string;
}

interface TrainingStackProps {
    programs: TrainingProgram[];
}

export default function TrainingStack({ programs }: TrainingStackProps) {
    const router = useRouter();
    const wrapRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);
    const n = programs.length;

    const { scrollYProgress } = useScroll({
        target: wrapRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        setActive(Math.min(n - 1, Math.max(0, Math.floor(v * n))));
    });

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

    const current = programs[active];

    return (
        <div ref={wrapRef} className="relative w-full" style={{ height: `${n * 60}vh` }}>
            <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
                {/* Ambient tint follows active program */}
                <AnimatePresence>
                    <motion.div
                        key={`bg-${active}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`absolute inset-0 pointer-events-none bg-gradient-to-br ${current.color} opacity-[0.07]`}
                    />
                </AnimatePresence>
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#2a1248]/30 blur-[130px]" />
                </div>
                <div className="container mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12 xl:gap-20 items-center w-full relative">
                    {/* Progress rail */}
                    <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2">
                        {programs.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => jumpTo(i)}
                                aria-label={`Go to program ${i + 1}`}
                                className={`w-1 rounded-full transition-all duration-500 cursor-pointer ${i === active
                                    ? "h-10 bg-gradient-to-b from-[#D61B91] to-[#7b2ff7] shadow-[0_0_10px_rgba(214,27,145,0.7)]"
                                    : i < active
                                        ? "h-5 bg-white/25 hover:bg-white/40"
                                        : "h-5 bg-white/10 hover:bg-white/25"
                                    }`}
                            />
                        ))}
                    </div>
                    {/* LEFT — sticky nav */}
                    <div className="md:pl-10">
                        <p className="text-[11px] font-black tracking-[0.3em] uppercase text-white/40 mb-4">
                            What We Offer
                        </p>
                        <h3 className="text-3xl md:text-4xl font-black tracking-tight uppercase mb-3">
                            Training Programs
                        </h3>
                        <p className="text-white/45 text-sm md:text-base max-w-md mb-10">
                            Technology programs designed to help you learn, build and grow.
                        </p>

                        <nav className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0 pb-2 lg:pb-0">
                            {programs.map((p, i) => {
                                const isActive = i === active;
                                return (
                                    <button
                                        key={i}
                                        onClick={() => jumpTo(i)}
                                        className="group flex items-center gap-4 lg:gap-5 py-2.5 lg:py-3 px-1 text-left shrink-0 cursor-pointer"
                                    >
                                        <span
                                            className={`text-xs font-black tracking-widest transition-colors ${isActive ? "text-[#e14a9b]" : "text-white/25"
                                                }`}
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="flex items-center gap-3">
                                            <span
                                                className={`h-px transition-all duration-500 ${isActive
                                                    ? "w-8 bg-gradient-to-r from-[#D61B91] to-[#7b2ff7] shadow-[0_0_12px_rgba(214,27,145,0.7)]"
                                                    : "w-4 bg-white/15"
                                                    }`}
                                            />
                                            <span
                                                className={`whitespace-nowrap lg:whitespace-normal uppercase tracking-tight font-black transition-all duration-300 ${isActive
                                                    ? "text-white text-lg md:text-[1.7rem] leading-tight"
                                                    : "text-white/30 text-sm md:text-base hover:text-white/60"
                                                    }`}
                                            >
                                                {p.title.replace(/ Training Course| Development Course| Course/g, "")}
                                            </span>
                                        </span>
                                    </button>
                                );
                            })}
                        </nav>
                    </div>

                    {/* RIGHT — dynamic visual */}
                    <div className="relative h-[380px] sm:h-[440px] lg:h-[520px] flex items-center justify-center">
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#2a1248]/40 blur-[120px]" />
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, scale: 0.92, x: 60 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.95, x: -60 }}
                                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                className="relative w-full max-w-[440px] aspect-square"
                            >
                                {/* Orbit rings */}
                                <div className="absolute inset-0 rounded-full border border-white/[0.07]" />
                                <div className="absolute inset-8 rounded-full border border-dashed border-white/10 [animation:orbit-spin_30s_linear_infinite]" />
                                <div className="absolute inset-16 rounded-full border border-white/[0.06]" />
                                {/* Core glow */}
                                <div className={`absolute inset-14 rounded-full bg-gradient-to-br ${current.color} opacity-30 blur-3xl`} />
                                {/* Crosshair lines */}
                                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                {/* Core */}
                                <div className={`absolute inset-24 sm:inset-28 rounded-full bg-gradient-to-br ${current.color} flex items-center justify-center shadow-2xl overflow-hidden ring-1 ring-white/25`}>
                                    <div className="absolute inset-0 bg-black/25" />
                                    <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/15 blur-2xl" />
                                    <i className={`fa-solid ${current.icon} text-6xl sm:text-7xl text-white relative z-10 drop-shadow-2xl`} />
                                    <div className="absolute inset-0 rounded-full border border-white/20" />
                                </div>
                                {/* Satellite dots */}
                                <span className="absolute top-[12%] right-[22%] w-2 h-2 rounded-full bg-[#e14a9b] shadow-[0_0_14px_rgba(225,74,155,0.9)]" />
                                <span className="absolute bottom-[18%] left-[14%] w-1.5 h-1.5 rounded-full bg-white/60" />
                                <span className="absolute top-[48%] left-[4%] w-1.5 h-1.5 rounded-full bg-[#8b3fd9]" />
                                {/* Index */}
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs font-black tracking-[0.3em] text-white/30">
                                    {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                                </span>
                            </motion.div>
                        </AnimatePresence>

                        {/* Caption + CTA */}
                        <div className="absolute bottom-0 left-0 right-0 text-center px-4">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`cap-${active}`}
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -14 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <p className="text-[#e14a9b] text-[11px] font-black uppercase tracking-[0.25em] mb-1.5">{current.subtitle}</p>
                                    <p className="text-white font-black text-lg md:text-xl uppercase tracking-tight">{current.title}</p>
                                    <p className="text-white/45 text-xs md:text-sm mt-1.5 max-w-sm mx-auto leading-relaxed line-clamp-2">{current.description}</p>
                                    <button
                                        onClick={() => router.push(current.href)}
                                        className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.2em] text-white border border-white/15 bg-white/5 hover:border-[#c1227d]/60 hover:text-[#e14a9b] transition-all rounded-full px-5 py-2 cursor-pointer"
                                    >
                                        More Details <ArrowUpRight className="w-3.5 h-3.5" />
                                    </button>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
