"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const servicesMenu = [
    { name: "Web Development", href: "/web-development-kerala" },
    { name: "SEO & Digital Marketing", href: "/seo-services-kerala" },
    { name: "ERP Software", href: "/erp-software-kerala" },
    { name: "Mobile App Development", href: "/mobile-app-development-kerala" },
    { name: "Branding Services", href: "/branding-services-kerala" },
    { name: "Ecommerce Development", href: "/ecommerce-development-kerala" },
    { name: "HR Management", href: "/hr-management-services-kerala" },
    { name: "All Services", href: "/services" },
];

const trainingsMenu = [
    { name: "Python Full Stack", href: "/python-training" },
    { name: "MERN Stack", href: "/mern-stack-development-training" },
    { name: "Digital Marketing", href: "/digital-marketing-training" },
    { name: "SEO Training", href: "/seo-training-course" },
    { name: "Data Science", href: "/data-science-certification-course" },
    { name: "AI & Robotics", href: "/artificial-intelligence-robotics-training" },
    { name: "HR Management Training", href: "/hr-management-training-course" },
    { name: "FYUGP Internship", href: "/fyugp-internship-in-kerala" },
    { name: "All Trainings", href: "/trainings" },
];

const navLinks = [{ name: "Home", href: "/" },
{ name: "About Us", href: "/about" },
{ name: "Services", href: "/services", children: servicesMenu },
{ name: "Trainings", href: "/trainings", children: trainingsMenu },
{ name: "Careers", href: "/careers" },
{ name: "Blog", href: "/blog" },
{ name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "py-3 bg-white backdrop-blur-md shadow-sm border-b border-gray-50"
                : "py-3 bg-white"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between relative">
                {isScrolled ? <Link href="/" className="relative flex items-center">
                    <Image
                        src="/Gemini_Generated_Image_gglehgglehgglehgn.png"
                        alt="Sysbreeze Technologies - IT Services & Consulting Company Logo"
                        width={130}
                        height={90}
                        className="object-contain"
                        style={{ width: "auto", height: "auto" }}
                        priority
                    />
                </Link> : <Link href="/" className="relative flex items-center">
                    <Image
                        src="/Gemini_Generated_Image_2w2muj2w2muj2w2m.png"
                        alt="Sysbreeze Technologies - IT Services & Consulting Company Logo"
                        width={120}
                        height={90}
                        className="object-contain"
                        style={{ width: "auto", height: "auto" }}
                        priority
                    />
                </Link>}

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            <Link
                                href={link.href}
                                className="flex items-center gap-1 text-sm font-semibold text-zinc-600 hover:text-black transition-colors relative"
                            >
                                {link.name}
                                {'children' in link && link.children && (
                                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                                )}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
                            </Link>
                            {'children' in link && link.children && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                                    <div className="w-64 rounded-2xl bg-white border border-zinc-100 shadow-xl shadow-black/5 p-2 overflow-hidden">
                                        {(link.children as { name: string; href: string }[]).map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-zinc-600 hover:text-black hover:bg-gradient-to-r hover:from-[#D81B8C]/5 hover:to-[#612D91]/5 transition-all"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <Link
                        href="/contact-us"
                        className="px-5 py-2.5 bg-gradient-to-br from-[#D81B8C] via-[#612D91] to-[#21094E] text-white text-sm font-bold rounded-full hover:brightness-110 transition-all transform hover:scale-105 active:scale-95 shadow-lg border border-white/20"
                    >
                        Get Started
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="lg:hidden relative w-12 h-12 rounded-2xl flex items-center justify-center group overflow-hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    <div className="grid grid-cols-2 gap-1 p-1">
                        {[0, 1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                animate={mobileMenuOpen ? {
                                    rotate: i === 0 || i === 3 ? 45 : -45,
                                    scale: 1.1,
                                    x: i === 0 || i === 2 ? 2 : -2,
                                    y: i === 0 || i === 1 ? 2 : -2,
                                } : {
                                    rotate: 0,
                                    scale: 1,
                                    x: 0,
                                    y: 0
                                }}
                                className="w-3 h-3 rounded-sm bg-gradient-to-br from-[#D81B8C] via-[#612D91] to-[#21094E] transition-colors group-hover:brightness-125"
                            />
                        ))}
                    </div>
                </motion.button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, height: "auto", scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, height: 0, scale: 0.95, filter: "blur(10px)" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:hidden relative bg-white/95 backdrop-blur-xl border-b border-zinc-100 overflow-hidden"
                    >
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={{
                                animate: {
                                    transition: {
                                        staggerChildren: 0.08,
                                        delayChildren: 0.1
                                    }
                                }
                            }}
                            className="flex flex-col space-y-4 px-6 py-4"
                        >
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    variants={{
                                        initial: {
                                            opacity: 0,
                                            x: index % 2 === 0 ? -50 : 50,
                                            rotateX: -20,
                                            filter: "blur(10px)"
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0,
                                            rotateX: 0,
                                            filter: "blur(0px)"
                                        }
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 15,
                                        mass: 1
                                    }}
                                >
                                    {'children' in link && link.children ? (
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <Link
                                                    href={link.href}
                                                    className="text-lg font-bold text-zinc-600 hover:text-pink-600 transition-colors"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {link.name}
                                                </Link>
                                                <button
                                                    aria-label={`Expand ${link.name}`}
                                                    onClick={() => setExpandedMobile(expandedMobile === link.name ? null : link.name)}
                                                    className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center"
                                                >
                                                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedMobile === link.name ? "rotate-180" : ""}`} />
                                                </button>
                                            </div>
                                            <AnimatePresence>
                                                {expandedMobile === link.name && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pt-3 pl-3 flex flex-col gap-1 border-l-2 border-[#D81B8C]/20 ml-1 mt-3">
                                                            {(link.children as { name: string; href: string }[]).map((child) => (
                                                                <Link
                                                                    key={child.name}
                                                                    href={child.href}
                                                                    className="text-sm font-semibold text-zinc-500 hover:text-black py-1.5 transition-colors"
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                >
                                                                    {child.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-lg font-bold text-zinc-600 hover:text-pink-600 transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                            <motion.div
                                variants={{
                                    initial: { opacity: 0, scale: 0.8, y: 20 },
                                    animate: { opacity: 1, scale: 1, y: 0 }
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 20,
                                    delay: 0.4
                                }}
                                className="pt-4"
                            >
                                <Link
                                    href="/contact-us"
                                    className="block w-full py-4 bg-gradient-to-br from-[#D81B8C] via-[#612D91] to-[#21094E] text-white text-center font-bold rounded-xl hover:brightness-110 transition-all border border-white/20 active:scale-[0.98]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Ai Powered Training Programs
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
