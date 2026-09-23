"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    '/internship-training/training-gallery-1.jpeg',
    '/internship-training/training-gallery-2.jpeg',
    '/internship-training/training-gallery-3.jpeg',
    '/internship-training/training-gallery-4.jpeg',
    '/internship-training/training-gallery-5.jpeg',
];

const videoUrl = '/internship-training/training-gallery-featured.mp4';

export default function InternshipAndTrainingGallery() {
    return (
        <section className="py-12 md:py-16 relative bg-zinc-950 text-white border-t border-white/5" id="internship-training-gallery">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-fit mx-auto flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-4"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#c1227d] animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                            Glimpses
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none"
                    >
                        Internship & Training <br />
                        Gallery
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 mt-4 max-w-xl mx-auto font-light text-base md:text-lg"
                    >
                        Explore the vibrant learning environment and practical sessions through our multimedia gallery.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Video Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-8 rounded-3xl overflow-hidden shadow-2xl relative group bg-black border border-white/10"
                    >
                        <video
                            src={videoUrl}
                            controls
                            className="w-full h-full object-cover max-h-[500px]"
                            preload="metadata"
                            poster={images[0]}
                        />
                        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Featured Video
                        </div>
                    </motion.div>

                    {/* Images Grid */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-4 lg:flex lg:flex-col">
                        {images.slice(0, 2).map((src, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative h-[240px] rounded-2xl overflow-hidden shadow-lg group border border-white/10 bg-zinc-900"
                            >
                                <Image
                                    src={src}
                                    alt={`Training Image ${idx + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 240px"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Image Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    {images.slice(2).map((src, idx) => (
                        <motion.div
                            key={idx + 2}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative h-[250px] rounded-2xl overflow-hidden shadow-lg group border border-white/10 bg-zinc-900"
                        >
                            <Image
                                src={src}
                                alt={`Training Image ${idx + 3}`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 300px"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
