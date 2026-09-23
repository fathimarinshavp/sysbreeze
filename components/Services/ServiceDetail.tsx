"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Star, Quote, ArrowUpRight, Check } from "lucide-react";

interface ServiceDetailProps {
    title: string;
    subtitle?: string;
    description: string;
    features: string[];
    image: string;
    ctaText?: string;
    ctaLink?: string;
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
}

export default function ServiceDetail({
    title,
    subtitle,
    description,
    features,
    image,
    ctaText = "Get a Free Quote",
    ctaLink = "/contact-us",
    testimonial
}: ServiceDetailProps) {
    const handleCtaClick = (e: React.MouseEvent) => {
        if (ctaLink === "#quote" || /quote|consultation/i.test(ctaText)) {
            e.preventDefault();
            window.open("https://wa.me/919446621444", "_blank", "noopener,noreferrer");
        }
    };

    const titleWords = title.split(" ");
    const titleHead = titleWords.slice(0, -2).join(" ");
    const titleTail = titleWords.slice(-2).join(" ");

    return (
        <>
            <main className="min-h-screen bg-black text-white pt-32 md:pt-40 pb-20 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(193,34,125,0.1),transparent_65%)]" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
                </div>

                <div className="container mx-auto px-6 md:px-10 relative z-10 max-w-6xl">
                    {/* BENTO GRID */}
                    <div className="grid md:grid-cols-3 gap-4 md:gap-5">
                        {/* Title tile */}
                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="md:col-span-2 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12 flex flex-col justify-center overflow-hidden relative"
                        >
                            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#c1227d]/10 blur-3xl pointer-events-none" />
                            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tighter uppercase leading-[0.95] mb-4 relative">
                                {titleHead}{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c1227d] via-[#e14a9b] to-purple-500">
                                    {titleTail}
                                </span>
                            </h1>
                            {subtitle && (
                                <p className="text-[#e14a9b] font-bold uppercase tracking-[0.2em] text-sm relative">
                                    {subtitle}
                                </p>
                            )}
                        </motion.div>

                        {/* CTA tile */}
                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="rounded-[2rem] border border-white/10 bg-zinc-950 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden min-h-[240px]"
                        >
                            <Link href={ctaLink} onClick={handleCtaClick} className="relative block">
                                <motion.span
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#c1227d] to-[#8a0f4d] hover:from-[#e14a9b] hover:to-[#c1227d] text-white font-black uppercase tracking-tight text-base md:text-lg px-6 py-5 rounded-2xl shadow-xl shadow-[#c1227d]/25 cursor-pointer transition-all"
                                >
                                    {ctaText}
                                    <ArrowUpRight className="w-5 h-5 shrink-0" />
                                </motion.span>
                            </Link>
                        </motion.div>

                        {/* Image tile */}
                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/3]"
                        >
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-[1.2s]"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                        </motion.div>

                        {/* Description tile */}
                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="md:col-span-2 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12 flex items-center"
                        >
                            <p className="text-white/60 text-base md:text-xl leading-relaxed">
                                {description}
                            </p>
                        </motion.div>

                        {/* Feature tiles */}
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
                                className="group rounded-[1.6rem] border border-white/10 bg-white/[0.025] hover:bg-[#c1227d]/[0.07] hover:border-[#c1227d]/35 transition-all p-6 flex items-center gap-4"
                            >
                                <span className="w-10 h-10 shrink-0 rounded-xl bg-[#c1227d]/12 border border-[#c1227d]/25 flex items-center justify-center group-hover:bg-[#c1227d] group-hover:border-[#c1227d] transition-all">
                                    <Check className="w-5 h-5 text-[#c1227d] group-hover:text-white transition-colors" />
                                </span>
                                <span className="text-sm md:text-[15px] font-bold text-white/75 group-hover:text-white transition-colors leading-snug">
                                    {feature}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* TESTIMONIAL — original content */}
                    {testimonial && (
                        <motion.figure
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.65 }}
                            className="mt-4 md:mt-5 p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-zinc-900/90 to-black border border-white/10 relative overflow-hidden"
                        >
                            <Quote className="absolute right-8 top-8 w-20 h-20 text-white/[0.05] -rotate-12 pointer-events-none" />
                            <div className="flex gap-1.5 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                            <blockquote className="text-xl md:text-2xl text-white/90 italic font-medium leading-relaxed mb-8 max-w-4xl">
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>
                            <figcaption className="flex items-center gap-4">
                                <span className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c1227d] to-purple-600 flex items-center justify-center font-black text-white text-lg">
                                    {testimonial.author.charAt(0)}
                                </span>
                                <span>
                                    <span className="block font-bold text-white text-lg">{testimonial.author}</span>
                                    <span className="block text-[#c1227d] text-xs uppercase tracking-wider font-semibold">{testimonial.role}</span>
                                </span>
                            </figcaption>
                        </motion.figure>
                    )}
                </div>
            </main>
        </>
    );
}
