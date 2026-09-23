"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
    question: string;
    answer: string;
}

const faqs: FaqItem[] = [
    {
        question: "What services does Sysbreeze Technologies provide?",
        answer: "Sysbreeze Technologies provides a wide range of IT and business solutions, including web development, digital marketing, SEO, ERP software, mobile app development, branding, HR management, and professional IT training."
    },
    {
        question: "Is Sysbreeze Technologies a software company in Calicut?",
        answer: "Yes. Sysbreeze Technologies is an IT and software solutions company serving businesses in Calicut (Kozhikode), Kerala, and other locations with technology, digital marketing, software development, and business solutions."
    },
    {
        question: "Does Sysbreeze provide digital marketing services in Kerala?",
        answer: "Yes. Sysbreeze provides digital marketing services including SEO, social media marketing, Google Ads, Meta Ads, content marketing, and other digital growth solutions for businesses across Kerala."
    },
    {
        question: "Does Sysbreeze offer SEO services?",
        answer: "Yes. Sysbreeze provides SEO services designed to improve website visibility, organic search rankings, qualified traffic, and online presence."
    },
    {
        question: "Does Sysbreeze provide website development services?",
        answer: "Yes. Sysbreeze develops professional websites, business websites, eCommerce websites, and customized web solutions based on business requirements."
    },
    {
        question: "Does Sysbreeze provide ERP software solutions?",
        answer: "Yes. Sysbreeze provides ERP software solutions designed to help businesses manage and streamline their operations, processes, and business data."
    },
    {
        question: "Does Sysbreeze offer professional training programs?",
        answer: "Yes. Sysbreeze offers industry-oriented training programs in areas such as Digital Marketing, Python Full Stack, MERN Stack, Data Science, AI & Robotics, HR Management, Data Analytics, Flutter, Graphic Designing, and other technology and professional fields."
    },
    {
        question: "How can I contact Sysbreeze Technologies?",
        answer: "You can contact Sysbreeze Technologies through the contact options available on the website to discuss your software, digital marketing, training, HR, or other business requirements."
    }
];

export default function HomeFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_100%_100%,rgba(193,34,125,0.08),transparent_50%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-4">
                        <span className="w-2 h-2 rounded-full bg-[#c1227d] animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">FAQ</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-white/60 mt-4 max-w-xl mx-auto font-light text-base md:text-lg">
                        Find answers to common questions about Sysbreeze Technologies and our services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div 
                                key={index}
                                className={`border border-white/10 rounded-2xl transition-all duration-300 ${
                                    isOpen ? "bg-white/5 border-white/20" : "bg-zinc-950/40 hover:bg-zinc-950/80 hover:border-white/15"
                                }`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 font-bold text-base md:text-lg uppercase transition-colors"
                                >
                                    <span className="flex items-center gap-3">
                                        <HelpCircle className="w-5 h-5 text-[#c1227d] shrink-0" />
                                        {faq.question}
                                    </span>
                                    <ChevronDown 
                                        className={`w-5 h-5 text-white/60 transition-transform duration-300 shrink-0 ${
                                            isOpen ? "rotate-180 text-[#c1227d]" : ""
                                        }`}
                                    />
                                </button>
                                
                                <div 
                                    className={`overflow-hidden transition-all duration-300 ${
                                        isOpen ? "max-h-[500px]" : "max-h-0"
                                    }`}
                                >
                                    <div className="p-6 md:p-8 pt-0 border-t border-white/5 text-white/70 text-base md:text-lg leading-relaxed font-light">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
