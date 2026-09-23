"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Briefcase, GraduationCap, Sparkles } from "lucide-react";

type ReviewCategory = "all" | "services" | "training";

interface Testimonial {
    rating: number;
    text: string;
    author: string;
    role: string;
    category: "services" | "training";
    categoryLabel: string;
}

const testimonials: Testimonial[] = [
    // Client Service Reviews
    {
        rating: 5,
        text: "I had a really good experience with Sysbreeze Technologies for our web development project. The team understood our requirements well, communicated clearly, and delivered the work professionally. They were responsive to feedback and made the overall process smooth and hassle-free. Happy with the final result and would definitely recommend their web development services.",
        author: "Sadin",
        role: "Web Development Client",
        category: "services",
        categoryLabel: "Client Project",
    },
    {
        rating: 5,
        text: "We had a very good experience with Sysbreeze Technologies for our e-commerce development project. The team understood our requirements well, communicated clearly, and was responsive throughout the development process. The final website was professional, user-friendly, and worked well for our needs. Overall, a smooth and reliable experience. Would definitely recommend their team.",
        author: "Irfan",
        role: "E-Commerce Client",
        category: "services",
        categoryLabel: "Client Project",
    },
    {
        rating: 5,
        text: "We had a good experience with Sysbreeze Technologies for our mobile app development project. The team was easy to communicate with and took the time to understand what we needed. There were a few changes along the way, but they were handled well and the team was responsive to our feedback. Overall, the development process was smooth and we’re happy with the final app.",
        author: "Safwan",
        role: "Mobile App Client",
        category: "services",
        categoryLabel: "Client Project",
    },

    // Training & Career Reviews
    {
        rating: 5,
        text: "I had a great experience with the MERN Stack Training at Sysbreeze Technologies Pvt. Ltd. The sessions were practical, interactive, and easy to follow. I learned how to work with React, Node.js, Express.js, and MongoDB and gained valuable hands-on experience. The guidance from the trainers really helped me improve my development skills.",
        author: "Vyshnav",
        role: "MERN Stack Trainee",
        category: "training",
        categoryLabel: "Training Trainee",
    },
    {
        rating: 5,
        text: "My experience with the Python Training at Sysbreeze Technologies Pvt. Ltd. was really good. The training was practical and the concepts were explained in a simple and understandable way. I got the opportunity to improve my Python programming skills through hands-on exercises and practical sessions. The trainers were very supportive and always helped me clear my doubts. Overall, it was a valuable learning experience that gave me more confidence in programming.",
        author: "Athulya",
        role: "Python Trainee",
        category: "training",
        categoryLabel: "Training Trainee",
    },
    {
        rating: 5,
        text: "My experience with the Data Science Training at Sysbreeze Technologies Pvt. Ltd. was really valuable. The training covered important concepts in a clear and practical way, which made learning easier and more interesting. I got hands-on experience with data analysis, Python, and other data science tools. The trainers were knowledgeable, supportive, and always ready to clear my doubts. This training helped me improve my technical skills and gave me more confidence to work on real-world data science projects.",
        author: "Nidha",
        role: "Data Science Trainee",
        category: "training",
        categoryLabel: "Training Trainee",
    },
    {
        rating: 5,
        text: "Joining the Data Analytics Training at Sysbreeze Technologies Pvt. Ltd. gave me a better understanding of how data can be used to make meaningful decisions. The practical sessions helped me learn data analysis tools and apply concepts through real-world examples. I especially appreciated the trainers’ guidance and their willingness to clear doubts. The training strengthened my analytical skills and gave me more confidence to work with data professionally.",
        author: "Rishal",
        role: "Data Analytics Trainee",
        category: "training",
        categoryLabel: "Training Trainee",
    },
    {
        rating: 5,
        text: "Sysbreeze Technologies Pvt. Ltd. provided a great platform to learn the practical side of HR. The training helped me understand recruitment, employee management, and other essential HR processes beyond just theory. The practical guidance and supportive trainers made the sessions engaging and easy to follow. It was a valuable opportunity to develop my HR knowledge and gain confidence for a career in human resources.",
        author: "Jyothi",
        role: "HR Trainee",
        category: "training",
        categoryLabel: "Training Trainee",
    },
    {
        rating: 5,
        text: "Being part of the Digital Marketing Internship at Sysbreeze Technologies Pvt. Ltd. gave me the opportunity to learn by working on real tasks and projects. I got practical exposure to SEO, social media marketing, content creation, keyword research, and other areas of digital marketing. The guidance from the team helped me understand how marketing strategies are applied in a professional environment. This internship improved both my practical skills and confidence as a digital marketer.",
        author: "Akshara K.",
        role: "Digital Marketing Intern",
        category: "training",
        categoryLabel: "Internship & Training",
    },
    {
        rating: 5,
        text: "Working on Mobile App Development during my training at Sysbreeze Technologies Pvt. Ltd. gave me valuable practical knowledge. I learned how to approach app development, understand different development concepts, and turn ideas into functional applications. The hands-on sessions and guidance from the trainers made the learning process engaging and helped me improve my technical skills. It was a valuable step toward building my career in mobile app development.",
        author: "Jasir",
        role: "Mobile App Development Trainee",
        category: "training",
        categoryLabel: "Training Trainee",
    },
    {
        rating: 5,
        text: "Learning AI and Robotics at Sysbreeze Technologies Pvt. Ltd. was an exciting opportunity to explore emerging technologies. The practical sessions helped me understand how artificial intelligence and robotics work together to solve real-world problems. The trainers explained complex concepts clearly and encouraged us to learn through hands-on activities. The training expanded my technical knowledge and sparked my interest in building innovative technology solutions.",
        author: "Parthiv",
        role: "AI & Robotics Trainee",
        category: "training",
        categoryLabel: "Training Trainee",
    },
    {
        rating: 5,
        text: "My experience at Sysbreeze Technologies has been truly rewarding. It has been a journey filled with learning, growth, teamwork, and valuable opportunities to explore my skills. The supportive work environment and amazing team made every challenge a chance to learn something new. Grateful for the experiences, memories, and professional growth I gained here. Highly recommended for anyone looking for a place to learn, grow, and build a strong career.",
        author: "Basila Ummer",
        role: "Digital Marketing Executive",
        category: "training",
        categoryLabel: "Team & Careers",
    },
    {
        rating: 5,
        text: "Working with the MERN Stack team at Sysbreeze Technologies Pvt. Ltd. has been a great opportunity to strengthen my development skills. I’ve gained practical experience in building and working with web applications using MongoDB, Express.js, React.js, and Node.js. The collaborative environment and support from the team have helped me improve my problem-solving skills and understand how development projects are handled in a professional workplace.",
        author: "Jaisal",
        role: "MERN Stack Developer",
        category: "training",
        categoryLabel: "Team & Careers",
    },
];

export default function Testimonials() {
    const [selectedCategory, setSelectedCategory] = useState<ReviewCategory>("all");
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState(0); // 1 for right, -1 for left

    const filteredReviews = useMemo(() => {
        if (selectedCategory === "all") return testimonials;
        return testimonials.filter(t => t.category === selectedCategory);
    }, [selectedCategory]);

    const activeIndex = index >= filteredReviews.length ? 0 : index;

    const handleNext = useCallback(() => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % filteredReviews.length);
    }, [filteredReviews.length]);

    const handlePrev = useCallback(() => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
    }, [filteredReviews.length]);

    // Auto-play logic
    useEffect(() => {
        if (isPaused || filteredReviews.length <= 1) return;
        const timer = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(timer);
    }, [handleNext, isPaused, filteredReviews.length]);

    const handleCategoryChange = (cat: ReviewCategory) => {
        setSelectedCategory(cat);
        setIndex(0);
        setDirection(1);
    };

    const currentItem = filteredReviews[activeIndex] || testimonials[0];

    return (
        <section
            className="bg-black relative py-16 md:py-24 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-4"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#c1227d] animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">Client & Trainee Testimonials</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none"
                    >
                        Trusted by Clients, Trainees & <br className="hidden sm:block" /> Industry Professionals
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 mt-4 max-w-xl mx-auto font-light text-base md:text-lg px-4"
                    >
                        Explore verified reviews from businesses who partnered with us for IT services and trainees who built their tech careers at Sysbreeze.
                    </motion.p>

                    {/* Category Filter Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center p-1.5 bg-zinc-900/90 border border-white/10 rounded-full shadow-inner gap-1 sm:gap-2"
                    >
                        <button
                            onClick={() => handleCategoryChange("all")}
                            className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                                selectedCategory === "all"
                                    ? "bg-[#4B2AAD] text-white shadow-md shadow-[#4B2AAD]/40"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            <Sparkles size={14} />
                            <span>All ({testimonials.length})</span>
                        </button>
                        <button
                            onClick={() => handleCategoryChange("services")}
                            className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                                selectedCategory === "services"
                                    ? "bg-[#4B2AAD] text-white shadow-md shadow-[#4B2AAD]/40"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            <Briefcase size={14} />
                            <span>Client Projects ({testimonials.filter(t => t.category === "services").length})</span>
                        </button>
                        <button
                            onClick={() => handleCategoryChange("training")}
                            className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                                selectedCategory === "training"
                                    ? "bg-[#4B2AAD] text-white shadow-md shadow-[#4B2AAD]/40"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            <GraduationCap size={15} />
                            <span>Training & Careers ({testimonials.filter(t => t.category === "training").length})</span>
                        </button>
                    </motion.div>
                </div>

                {/* Testimonials Slider Container */}
                <div className="relative max-w-4xl mx-auto h-[490px] sm:h-[430px] md:h-[400px]">
                    <AnimatePresence initial={false} mode="wait" custom={direction}>
                        <motion.div
                            key={`${selectedCategory}-${activeIndex}`}
                            custom={direction}
                            variants={{
                                enter: (direction: number) => ({
                                    x: direction > 0 ? 180 : -180,
                                    opacity: 0,
                                    scale: 0.96
                                }),
                                center: {
                                    zIndex: 1,
                                    x: 0,
                                    y: 0,
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: (direction: number) => ({
                                    zIndex: 0,
                                    x: direction < 0 ? 180 : -180,
                                    opacity: 0,
                                    scale: 0.96
                                })
                            }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.8}
                            onDragEnd={(e, { offset }) => {
                                const swipe = offset.x;
                                const swipeThreshold = 50;
                                if (swipe < -swipeThreshold) {
                                    handleNext();
                                } else if (swipe > swipeThreshold) {
                                    handlePrev();
                                }
                            }}
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.35 },
                                scale: { duration: 0.35 }
                            }}
                            className="absolute inset-0 bg-white p-6 sm:p-8 md:p-10 rounded-[32px] md:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col justify-between group cursor-grab active:cursor-grabbing overflow-hidden"
                        >
                            {/* Decorative Quote Mark in Background */}
                            <Quote className="absolute right-6 top-6 w-20 h-20 text-gray-100 -rotate-12 pointer-events-none" />

                            <div className="relative z-10 flex-1 flex flex-col justify-start">
                                {/* Category Badge, Stars & Index */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1">
                                            {[...Array(currentItem.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400" />
                                            ))}
                                        </div>
                                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                                            currentItem.category === "services"
                                                ? "bg-purple-100 text-[#4B2AAD]"
                                                : "bg-blue-50 text-blue-700"
                                        }`}>
                                            {currentItem.categoryLabel}
                                        </span>
                                    </div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                        {activeIndex + 1} / {filteredReviews.length}
                                    </span>
                                </div>

                                {/* Text */}
                                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium italic select-none">
                                    "{currentItem.text}"
                                </p>
                            </div>

                            {/* Author Info */}
                            <div className="relative z-10 flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                                <div>
                                    <h3 className="text-[#1E1B4B] font-bold text-lg md:text-xl tracking-tight">
                                        {currentItem.author}
                                    </h3>
                                    <p className="text-[#4B2AAD] font-semibold tracking-wide text-xs uppercase">
                                        {currentItem.role}
                                    </p>
                                </div>

                                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 text-[#4B2AAD] rounded-full text-xs font-semibold">
                                    <span>{currentItem.category === "services" ? "Verified Client" : "Verified Trainee"}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls - Desktop only */}
                    {filteredReviews.length > 1 && (
                        <>
                            <div className="hidden md:flex absolute -left-16 lg:-left-20 top-1/2 -translate-y-1/2 z-20">
                                <button
                                    onClick={handlePrev}
                                    className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#4B2AAD] shadow-lg hover:bg-[#4B2AAD] hover:text-white transition-all duration-300"
                                    aria-label="Previous Testimonial"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                            </div>
                            <div className="hidden md:flex absolute -right-16 lg:-right-20 top-1/2 -translate-y-1/2 z-20">
                                <button
                                    onClick={handleNext}
                                    className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#4B2AAD] shadow-lg hover:bg-[#4B2AAD] hover:text-white transition-all duration-300"
                                    aria-label="Next Testimonial"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </>
                    )}

                    {/* Pagination Indicators */}
                    {filteredReviews.length > 1 && (
                        <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 flex items-center gap-2 max-w-full overflow-x-auto py-2">
                            {filteredReviews.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setDirection(i > activeIndex ? 1 : -1);
                                        setIndex(i);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-500 ${
                                        i === activeIndex ? "w-8 bg-[#4B2AAD]" : "w-2 bg-gray-600 hover:bg-gray-400"
                                    }`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}


