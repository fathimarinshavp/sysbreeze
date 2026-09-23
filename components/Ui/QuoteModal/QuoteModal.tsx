"use client";

import { motion, AnimatePresence } from "framer-motion";

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl max-h-[90vh] overflow-y-auto no-scrollbar"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#c1227d]/10 via-transparent to-transparent pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all z-20"
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-2 uppercase text-white">
                                Get a Quote
                            </h2>
                            <p className="text-white/40 font-medium mb-8">
                                Fill out the form below and we'll get back to you within 24 hours.
                            </p>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black tracking-widest uppercase text-white/40 ml-1">
                                            Full Name
                                        </label>
                                        <div className="relative group/input">
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#c1227d] transition-colors font-bold text-white placeholder:text-white/10"
                                            />
                                            <i className="fa-solid fa-user absolute right-6 top-1/2 -translate-y-1/2 text-white/10 group-focus-within/input:text-[#c1227d] transition-colors" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black tracking-widest uppercase text-white/40 ml-1">
                                            Email Address
                                        </label>
                                        <div className="relative group/input">
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#c1227d] transition-colors font-bold text-white placeholder:text-white/10"
                                            />
                                            <i className="fa-solid fa-envelope absolute right-6 top-1/2 -translate-y-1/2 text-white/10 group-focus-within/input:text-[#c1227d] transition-colors" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black tracking-widest uppercase text-white/40 ml-1">
                                        Service Type
                                    </label>
                                    <div className="relative">
                                        <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#c1227d] transition-colors font-bold text-white appearance-none cursor-pointer">
                                            <option className="bg-[#0a0a0a]">Web Development</option>
                                            <option className="bg-[#0a0a0a]">Mobile App Development</option>
                                            <option className="bg-[#0a0a0a]">SEO Services</option>
                                            <option className="bg-[#0a0a0a]">Digital Marketing</option>
                                            <option className="bg-[#0a0a0a]">Branding & Design</option>
                                            <option className="bg-[#0a0a0a]">Other</option>
                                        </select>
                                        <i className="fa-solid fa-chevron-down absolute right-6 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black tracking-widest uppercase text-white/40 ml-1">
                                        Message
                                    </label>
                                    <div className="relative group/input">
                                        <textarea
                                            placeholder="Tell us about your project..."
                                            rows={4}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#c1227d] transition-colors font-bold text-white placeholder:text-white/10 resize-none"
                                        />
                                        <i className="fa-solid fa-comments absolute right-6 top-6 text-white/10 group-focus-within/input:text-[#c1227d] transition-colors" />
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full  bg-gradient-to-r from-[#c1227d] to-[#D81B8C] text-white py-5 rounded-2xl text-lg font-black tracking-tight transition-all shadow-[0_0_30px_rgba(193,34,125,0.3)] hover:shadow-[0_0_40px_rgba(193,34,125,0.5)] mt-8"
                                    type="button"
                                >
                                    Submit Request
                                </motion.button>
                            </form>
                            <div className="h-4 " /> {/* Extra spacing at bottom */}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
