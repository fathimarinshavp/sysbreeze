"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqSectionProps {
    title: string;
    subtitle?: string;
    items: FaqItem[];
    categoryTag?: string;
}

export default function FaqSection({ title, subtitle, items, categoryTag = "FAQ" }: FaqSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-black text-white relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_100%_100%,rgba(193,34,125,0.08),transparent_50%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-4">
                        <span className="w-2 h-2 rounded-full bg-[#c1227d] animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">{categoryTag}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-white/60 mt-4 max-w-xl mx-auto font-light text-base md:text-lg">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="space-y-4">
                    {items.map((faq, index) => {
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
                                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 font-bold text-lg md:text-xl uppercase transition-colors"
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
