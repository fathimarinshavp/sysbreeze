"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "./WorksSection";

interface WorksGridProps {
    projects: Project[];
}

export default function WorksGrid({ projects }: WorksGridProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const categories = useMemo(() => {
        return [
            { id: "all", label: "All Projects", count: projects.length },
            { id: "E-Commerce", label: "E-Commerce", count: projects.filter(p => p.category === "E-Commerce").length },
            { id: "Food & Distribution", label: "Food & Distribution", count: projects.filter(p => p.category === "Food & Distribution").length },
            { id: "Interiors & Technical Services", label: "Interiors & Technical", count: projects.filter(p => p.category === "Interiors & Technical Services").length },
            { id: "Real Estate", label: "Real Estate", count: projects.filter(p => p.category === "Real Estate").length },
            { id: "Advertising & Marketing", label: "Advertising", count: projects.filter(p => p.category === "Advertising & Marketing").length },
            { id: "Printing & Graphics", label: "Printing & Graphics", count: projects.filter(p => p.category === "Printing & Graphics").length },
            { id: "Travel & Tourism", label: "Travel & Tourism", count: projects.filter(p => p.category === "Travel & Tourism").length },
        ];
    }, [projects]);

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            return selectedCategory === "all" || project.category === selectedCategory;
        });
    }, [projects, selectedCategory]);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Controls */}
            <div className="flex items-center justify-center mb-10 md:mb-14">
                {/* Category Pills */}
                <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto w-full pb-2 md:pb-0 no-scrollbar">
                    {categories.map((cat) => {
                        const isActive = selectedCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer ${isActive
                                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/25 scale-105"
                                    : "bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/10"
                                    }`}
                            >
                                <span>{cat.label}</span>
                                <span
                                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${isActive ? "bg-white/20 text-white" : "bg-white/5 text-zinc-400"
                                        }`}
                                >
                                    {cat.count}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Projects Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={i}
                            onSelect={() => setSelectedProject(project)}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-20 bg-zinc-900/50 rounded-3xl border border-white/5">
                    <p className="text-zinc-400 text-lg">No projects match the selected filter criteria.</p>
                    <button
                        onClick={() => {
                            setSelectedCategory("all");
                        }}
                        className="mt-4 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-sm font-semibold transition-all"
                    >
                        Reset Filters
                    </button>
                </div>
            )}

            {/* Portfolio Trust Metrics Banner */}
            <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/5">
                    <div className="text-2xl md:text-3xl font-black text-white bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                        8+
                    </div>
                    <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">
                        Live Client Websites
                    </div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/5">
                    <div className="text-2xl md:text-3xl font-black text-white">
                        3 Countries
                    </div>
                    <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">
                        UAE 🇦🇪 • Oman 🇴🇲 • India 🇮🇳
                    </div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/5">
                    <div className="text-2xl md:text-3xl font-black text-white">
                        100%
                    </div>
                    <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">
                        Tailored Engineering
                    </div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/5">
                    <div className="text-2xl md:text-3xl font-black text-pink-500">
                        24/7
                    </div>
                    <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">
                        Technical Support & Growth
                    </div>
                </div>
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.92, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.92, opacity: 0, y: 30 }}
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-[32px] bg-zinc-950 border border-white/15 shadow-2xl text-left"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header Image */}
                            <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-900">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 800px"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 hover:bg-white hover:text-black border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer shadow-lg"
                                    aria-label="Close Project View"
                                >
                                    <i className="fa-solid fa-xmark text-lg"></i>
                                </button>

                                {/* Badges on Image */}
                                <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center gap-2">
                                    <span className="bg-pink-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                                        {selectedProject.category}
                                    </span>
                                    <span className="bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
                                        {selectedProject.flag} {selectedProject.location}
                                    </span>
                                </div>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6 md:p-8 space-y-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-pink-400 text-xs font-mono mt-1">
                                        {selectedProject.displayUrl}
                                    </p>
                                </div>

                                <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                                    {selectedProject.description}
                                </p>

                                {/* Key Highlights */}
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-3">
                                        Key Highlights
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.highlights.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-zinc-300"
                                            >
                                                ✨ {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-pink-500/25 hover:scale-[1.02]"
                                    >
                                        <span>Visit Live Website</span>
                                        <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                                    </a>

                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold text-sm transition-all border border-white/10 cursor-pointer"
                                    >
                                        Close Preview
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function ProjectCard({
    project,
    index,
    onSelect,
}: {
    project: Project;
    index: number;
    onSelect: () => void;
}) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-pink-500/50 transition-all duration-500 flex flex-col shadow-lg hover:shadow-2xl hover:shadow-pink-500/10 cursor-pointer"
            onClick={onSelect}
        >
            {/* Image Preview Box */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    {/* <span className="bg-black/80 backdrop-blur-md border border-white/15 text-pink-400 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {project.category}
                    </span> */}
                    <span className="bg-black/80 backdrop-blur-md border border-white/15 text-zinc-200 text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <span>{project.flag}</span>
                        <span>{project.location}</span>
                    </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-pink-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-1.5">
                        <span>Preview Project</span>
                        <i className="fa-solid fa-expand text-[10px]"></i>
                    </span>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 mt-1.5 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Card Footer with Direct Live Link & Action */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-400 hover:text-pink-300 transition-colors group/link"
                        title={`Open ${project.displayUrl}`}
                    >
                        <span className="underline underline-offset-4 decoration-pink-500/40 group-hover/link:decoration-pink-400">
                            {project.displayUrl}
                        </span>
                        <i className="fa-solid fa-arrow-up-right-from-square text-[10px] transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"></i>
                    </a>

                    <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        {project.location}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
