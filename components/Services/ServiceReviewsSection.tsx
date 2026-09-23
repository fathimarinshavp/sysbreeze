"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import Link from "next/link";

const serviceReviews = [
    {
        quote: "I had a really good experience with Sysbreeze Technologies for our web development project. The team understood our requirements well, communicated clearly, and delivered the work professionally. They were responsive to feedback and made the overall process smooth and hassle-free. Happy with the final result and would definitely recommend their web development services.",
        author: "Sadin",
        role: "Web Development Client",
        serviceName: "Web Development",
        serviceLink: "/web-development-kerala",
    },
    {
        quote: "We had a very good experience with Sysbreeze Technologies for our e-commerce development project. The team understood our requirements well, communicated clearly, and was responsive throughout the development process. The final website was professional, user-friendly, and worked well for our needs. Overall, a smooth and reliable experience. Would definitely recommend their team.",
        author: "Irfan",
        role: "E-Commerce Client",
        serviceName: "E-Commerce Development",
        serviceLink: "/ecommerce-development-kerala",
    },
    {
        quote: "We had a good experience with Sysbreeze Technologies for our mobile app development project. The team was easy to communicate with and took the time to understand what we needed. There were a few changes along the way, but they were handled well and the team was responsive to our feedback. Overall, the development process was smooth and we’re happy with the final app.",
        author: "Safwan",
        role: "Mobile App Client",
        serviceName: "Mobile App Development",
        serviceLink: "/mobile-app-development-kerala",
    },
];

export default function ServiceReviewsSection() {
    return (
        <section className="bg-black text-white py-20 md:py-28 relative overflow-hidden border-t border-white/10">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(193,34,125,0.08),transparent_70%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-4">
                        <span className="w-2 h-2 rounded-full bg-[#c1227d] animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">Client Testimonials</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
                        What Our Clients Say About Our Services
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-lg text-white/60 max-w-2xl font-medium"
                    >
                        Discover real experiences from business leaders and founders who partnered with Sysbreeze Technologies to build and scale their digital products.
                    </motion.p>
                </div>

                {/* 3 Review Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {serviceReviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -6 }}
                            className="bg-[#0e0e11] rounded-[2.5rem] p-8 md:p-10 border border-white/10 hover:border-[#c1227d]/40 flex flex-col justify-between relative overflow-hidden transition-all duration-300 group shadow-2xl"
                        >
                            {/* Decorative Quote Watermark */}
                            <Quote className="absolute right-6 top-6 w-20 h-20 text-white/[0.03] -rotate-12 pointer-events-none group-hover:text-[#c1227d]/10 transition-colors" />

                            <div>
                                {/* Top Badges */}
                                <div className="flex items-center justify-between gap-2 mb-6">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-[#c1227d]/15 text-[#c1227d] text-[11px] font-bold uppercase tracking-wider border border-[#c1227d]/30">
                                        {review.serviceName}
                                    </span>
                                </div>

                                {/* Quote */}
                                <p className="text-white/80 text-base md:text-[17px] leading-relaxed font-medium italic mb-8">
                                    "{review.quote}"
                                </p>
                            </div>

                            {/* Author Row & Service Link */}
                            <div className="pt-6 border-t border-white/10">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-white font-bold text-base md:text-lg tracking-tight">
                                            {review.author}
                                        </h4>
                                        <p className="text-[#c1227d] font-semibold text-xs uppercase tracking-wide">
                                            {review.role}
                                        </p>
                                    </div>

                                    <Link
                                        href={review.serviceLink}
                                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#c1227d] text-white flex items-center justify-center transition-all duration-300 shrink-0 border border-white/10"
                                        aria-label={`View ${review.serviceName}`}
                                    >
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
