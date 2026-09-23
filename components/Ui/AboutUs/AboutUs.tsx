"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";

const SecondSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const marqueeText = "ABOUT IMMIX TECHNOLOGIES";

    // Array for marquee items
    const items = Array(4).fill(marqueeText);

    // Parallax Logic: Track scroll progress of this specific section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax offset: Moves as you scroll
    const parallaxX = useTransform(scrollYProgress, [0, 1], [200, -200]);
    const smoothParallaxX = useSpring(parallaxX, { stiffness: 100, damping: 30 });

    return (
        <section
            ref={containerRef}
            className="relative bg-black text-white overflow-hidden select-none pt-6"
        >
            {/* Agency Info Section */}
            <div className="container mx-auto px-[5vw] py-16 md:py-24 flex flex-col items-center">
                {/* Section Header & Content */}
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-fit mx-auto flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-4"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#c1227d] animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                            Company Description
                        </span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none"
                    >
                        Best IT Company in Calicut
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/60 mt-4 max-w-4xl mx-auto font-light text-base md:text-lg leading-relaxed"
                    >
                        Sysbreeze Technologies Pvt. Ltd. is a leading IT company in Calicut, providing innovative technology, digital marketing, business consulting, HR solutions, and professional training programs for businesses and aspiring professionals. Located at Kinfra Techno Industrial Park, Kakkanchery, Calicut, we help startups, small businesses, and established organizations build stronger digital presence, improve operational efficiency, and achieve sustainable growth.
                    </motion.p>

                    {/* Expandable Sentences (Without Card Boxes) */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="pt-6 space-y-6 text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed">
                                    <p>
                                        Recognized as one of the best IT companies in Calicut, Sysbreeze delivers a comprehensive range of technology and business solutions, including web design and development, eCommerce website development, mobile app development, ERP software solutions, SEO services, digital marketing, branding, HR management, and IT consulting. Our solutions combine modern technologies, creative strategies, and business-focused approaches to help organizations compete and grow in the digital era.
                                    </p>
                                    <p>
                                        Beyond business solutions, Sysbreeze is also a professional IT training and internship provider in Calicut, offering industry-focused programs designed to develop practical, job-ready skills. Our training programs include Digital Marketing, SEO, Python Full Stack Development, MERN Stack Development, Data Science, Data Analytics, Artificial Intelligence & Robotics, Machine Learning, HR Management, Flutter, and Graphic Designing. Students and professionals can benefit from practical learning, live projects, expert trainers, certifications, and placement assistance.
                                    </p>
                                    <p>
                                        At Sysbreeze Technologies, our goal is to bring technology, talent, and business strategy together. Whether you need a professional website, digital marketing strategy, custom software solution, mobile application, ERP system, branding support, HR solution, or career-oriented IT training, we provide solutions tailored to your specific requirements.
                                    </p>
                                    <p className="text-white/90 font-medium">
                                        Choose Sysbreeze Technologies — a trusted technology and business solutions partner for companies and professionals in Calicut and across Kerala.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Read More / Read Less Toggle */}
                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#c1227d]/60 text-white/90 hover:text-[#c1227d] text-sm font-semibold transition-all duration-300 cursor-pointer group"
                        >
                            <span>{isExpanded ? "Read Less" : "Read More"}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180 text-[#c1227d]" : "group-hover:translate-y-0.5"}`} />
                        </button>
                    </div>
                </div>

                <motion.a
                    href="/about"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="group flex flex-col items-center gap-2 mt-4"
                >
                    <span className="relative text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/60 group-hover:text-white transition-colors duration-300">
                        MORE ABOUT US
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                    </span>
                </motion.a>
            </div>
        </section>
    );
};

export default SecondSection;
