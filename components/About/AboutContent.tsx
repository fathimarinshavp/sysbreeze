"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Laptop, 
  ShoppingCart, 
  Smartphone, 
  Cpu, 
  Megaphone, 
  Award, 
  Users, 
  CheckCircle2, 
  GraduationCap, 
  Zap, 
  Target, 
  TrendingUp, 
  MapPin, 
  BookOpen, 
  Search, 
  FileText, 
  BrainCircuit, 
  BarChart, 
  Workflow,
  Eye
} from "lucide-react";
import CountUp from "@/components/Ui/CountUp";

const stats = [
    {
        label: "Years of Professional Web Development Experience",
        value: "8+",
        icon: "fa-code"
    },
    {
        label: "Successful Websites & Digital Projects Delivered",
        value: "120+",
        icon: "fa-check-double"
    },
    {
        label: "Industries Served Across Global Business Markets",
        value: "15+",
        icon: "fa-globe"
    },
    {
        label: "Long Term Client Trust and Satisfaction",
        value: "100%",
        icon: "fa-heart"
    }
];

export default function AboutContent() {
  // Services List
  const services = [
    {
      icon: <Laptop className="w-6 h-6 text-[#c1227d]" />,
      title: "Website Design & Development",
      description: "Responsive, modern, fast-loading, and SEO-friendly business websites."
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-[#c1227d]" />,
      title: "Ecommerce Website Development",
      description: "Secure and scalable online stores designed for better customer experiences and business growth."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#c1227d]" />,
      title: "Mobile App Development",
      description: "Custom Android and iOS applications built around specific business requirements."
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#c1227d]" />,
      title: "ERP Software Solutions",
      description: "Custom ERP systems that help businesses automate processes and improve operational efficiency."
    },
    {
      icon: <Megaphone className="w-6 h-6 text-[#c1227d]" />,
      title: "Digital Marketing Services",
      description: "SEO, social media marketing, Google Ads, Meta Ads, content marketing, and other digital growth strategies."
    },
    {
      icon: <Award className="w-6 h-6 text-[#c1227d]" />,
      title: "Professional Branding Services",
      description: "Logo design, brand identity, visual communication, brand messaging, and strategic branding."
    },
    {
      icon: <Users className="w-6 h-6 text-[#c1227d]" />,
      title: "HR Management Services",
      description: "Recruitment, onboarding, payroll support, statutory compliance assistance, workforce management, and HR consulting."
    }
  ];

  // HR Support Areas
  const hrAreas = [
    "Recruitment and talent acquisition",
    "Employee onboarding",
    "Payroll management support",
    "HR operations",
    "Performance management",
    "Workforce planning",
    "Statutory and labor-law compliance support",
    "Employee management",
    "HR consulting"
  ];

  // Training Programs
  const trainingPrograms = [
    {
      icon: <Megaphone className="w-5 h-5 text-white" />,
      title: "Digital Marketing Training",
      description: "Learn SEO, Google Ads, social media marketing, content marketing, analytics, and practical campaign management."
    },
    {
      icon: <Search className="w-5 h-5 text-white" />,
      title: "SEO Training",
      description: "Develop practical knowledge of keyword research, on-page SEO, off-page SEO, technical SEO, analytics, and search engine optimization."
    },
    {
      icon: <Laptop className="w-5 h-5 text-white" />,
      title: "Python Full Stack Development",
      description: "Learn Python, Django, APIs, frontend technologies, and full-stack web application development."
    },
    {
      icon: <Users className="w-5 h-5 text-white" />,
      title: "HR Management Training",
      description: "Build professional HR skills in recruitment, employee onboarding, payroll management, HR operations, and labor-law compliance."
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-white" />,
      title: "Artificial Intelligence & Robotics Training",
      description: "Explore AI fundamentals, machine vision, automation, robotics, and modern AI technologies through practical learning."
    },
    {
      icon: <Workflow className="w-5 h-5 text-white" />,
      title: "MERN Stack Development",
      description: "Learn MongoDB, Express.js, React, and Node.js while developing modern web applications."
    },
    {
      icon: <BarChart className="w-5 h-5 text-white" />,
      title: "Data Science Training",
      description: "Develop skills in Python, data analysis, machine learning fundamentals, data visualization, and real-world data applications."
    }
  ];

  // Approach Principles
  const approachPrinciples = [
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Innovation",
      description: "We continuously explore modern technologies, digital strategies, and industry trends to create solutions that are relevant to today's businesses."
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Practicality",
      description: "Whether it is a business project or a training program, we focus on practical implementation rather than theory alone."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Growth",
      description: "Our goal is to create solutions that help businesses grow and learning programs that help individuals develop meaningful careers."
    }
  ];

  // Why Choose Sysbreeze Bullet Points
  const reasonsToChoose = [
    "Comprehensive IT and digital solutions",
    "Professional HR Management services",
    "Industry-oriented training programs",
    "Practical and project-based learning",
    "Modern technologies and tools",
    "Customized solutions for business requirements",
    "Digital marketing and SEO expertise",
    "Career-focused professional training",
    "Online and offline training options",
    "Business-focused approach to technology"
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-accent selection:text-white pb-24">
      {/* Hero / About Us Intro Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center">
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="w-fit mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-fit flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#c1227d] animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                About Us
              </span>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none mb-4 uppercase"
          >
            Sysbreeze Technologies Pvt. Ltd.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-[#c1227d] font-semibold text-sm sm:text-base mb-12 tracking-wide uppercase"
          >
            <MapPin className="w-4 h-4" />
            <span>Kinfra Techno Industrial Park, Kakkanchery, Calicut, Kerala</span>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8 text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed font-light text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-medium text-white/90"
            >
              Sysbreeze Technologies Pvt. Ltd. is a technology-driven IT services, digital solutions, HR management, business consulting, and professional training company.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              As a growing technology company, we help businesses build stronger digital identities, streamline operations, manage their workforce efficiently, and adopt modern technology for sustainable growth. We also empower students, graduates, and professionals with practical, industry-oriented training designed to build job-ready skills.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              With expertise across technology, digital marketing, branding, HR, and professional education, Sysbreeze aims to be a trusted technology and business growth partner for organizations and individuals across Kerala and beyond.
            </motion.p>
          </div>
        </div>

        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D81B8C] via-[#612D91] to-transparent rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-[#c1227d]/40 transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#c1227d]/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-[#c1227d]/20 transition-colors duration-500" />
            <div className="w-14 h-14 rounded-2xl bg-[#c1227d]/10 border border-[#c1227d]/30 flex items-center justify-center mb-6 text-[#c1227d] group-hover:bg-[#c1227d] group-hover:text-white transition-all duration-300">
              <Target className="w-7 h-7" />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#c1227d]">
                Purpose & Commitment
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6">
              Our Mission
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
              Our mission is to empower businesses and individuals through innovative technology solutions, professional IT services, and industry-focused training programs. We aim to deliver high-quality digital solutions while equipping students and professionals with the practical skills, knowledge, and confidence needed to succeed in the evolving technology industry.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#D81B8C]/10 via-[#612D91]/10 to-transparent border border-white/10 hover:border-[#c1227d]/40 transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#612D91]/20 rounded-full blur-[60px] pointer-events-none group-hover:bg-[#612D91]/30 transition-colors duration-500" />
            <div className="w-14 h-14 rounded-2xl bg-[#612D91]/20 border border-[#c1227d]/30 flex items-center justify-center mb-6 text-[#c1227d] group-hover:bg-[#c1227d] group-hover:text-white transition-all duration-300">
              <Eye className="w-7 h-7" />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#c1227d]">
                Future Direction
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6">
              Our Vision
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
              Our vision is to become a trusted leader in technology services and professional training by driving digital innovation, creating skilled professionals, and helping businesses achieve sustainable growth through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Best IT Company in Calicut Details Section */}
      <section className="py-20 bg-zinc-950 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-5xl font-black tracking-tighter leading-tight uppercase bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent">
                Best IT Company in Calicut for Technology & Business Solutions
              </h2>
              <div className="w-12 h-1 bg-[#c1227d] mt-6 rounded-full" />
            </div>
            <div className="lg:col-span-7 space-y-6 text-white/70 text-lg leading-relaxed font-light">
              <p className="text-white font-medium text-xl">
                Sysbreeze Technologies strives to be recognized as the <span className="text-[#c1227d] font-bold">best IT company in Calicut</span> by delivering practical, innovative, and result-oriented solutions for businesses of different sizes.
              </p>
              <p>
                Our approach goes beyond simply providing technology. We understand your business requirements, identify opportunities for improvement, and develop solutions that support your long-term objectives.
              </p>
              <p>
                From building high-performance websites and mobile applications to implementing ERP solutions, strengthening your online presence, developing your brand, and improving HR processes, our team brings technology and business expertise together under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-6 border-b border-white/5 bg-zinc-950/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-white/10 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center mb-6">
                  <i className={`fa-solid ${stat.icon} text-xl text-[#c1227d]`} />
                </div>
                <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-white/40 mb-6 min-h-[40px]">
                  {stat.label}
                </h4>
                <div className="text-6xl md:text-7xl font-black tracking-tighter text-white/20 group-hover:text-[#c1227d] transition-colors">
                  <CountUp value={stat.value} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
            What We Do
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            We provide comprehensive technology and digital solutions designed to help businesses establish, operate, and grow in a competitive market.
          </p>
        </div>

        {/* IT & Digital Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold tracking-tight uppercase mb-8 border-l-4 border-[#c1227d] pl-4 text-white">
            IT & Digital Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-[#c1227d]/40 transition-all duration-300 group hover:bg-white/10"
              >
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#c1227d] group-hover:text-white transition-colors duration-300 text-white">
                  {svc.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 uppercase tracking-tight text-white group-hover:text-[#c1227d] transition-colors">
                  {svc.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* HR Management Solutions */}
        <div>
          <div className="p-8 md:p-12 rounded-[3.5rem] bg-gradient-to-br from-zinc-900 to-black border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#c1227d]/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-5">
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
                  HR Management Solutions
                </h3>
                <p className="text-white/70 leading-relaxed font-light text-base mb-6">
                  At Sysbreeze, we believe that people are one of the most important assets of every organization.
                </p>
                <p className="text-white/60 leading-relaxed font-light text-sm">
                  Our HR Management Services help businesses improve their workforce and HR operations through structured and practical solutions. We support organizations across all core HR components.
                </p>
              </div>
              <div className="lg:col-span-7">
                <h4 className="text-xs font-black tracking-widest uppercase text-white/40 mb-6">
                  Areas of Support & Expertise:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {hrAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#c1227d] shrink-0" />
                      <span className="text-white/80 text-sm font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Oriented Training Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Section background effects */}
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c1227d]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c1227d]/40 to-transparent" />
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[#c1227d]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-[#612D91]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-fit mx-auto flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#c1227d]/30 bg-[#c1227d]/5 mb-8 backdrop-blur-sm"
            >
              <GraduationCap className="w-4 h-4 text-[#c1227d]" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#c1227d]">
                Career Development
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-8 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent"
            >
              Industry-Oriented Training
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto space-y-4 text-white/60 font-light text-lg leading-relaxed"
            >
              <p>
                Sysbreeze is also committed to developing the next generation of technology and business professionals.
              </p>
              <p>
                Our professional training and internship programs are designed around practical learning, real-world applications, industry-relevant tools, and career development. Training is available through online and offline learning options depending on the program.
              </p>
            </motion.div>
          </div>

          {/* Training Programs Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-[#c1227d]/40 to-transparent" />
            <h3 className="text-sm font-black tracking-[0.3em] uppercase text-white/50">
              Our Training Programs
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-[#c1227d]/40 to-transparent" />
          </motion.div>

          {/* Training Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {trainingPrograms.map((prog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                className="relative p-7 rounded-2xl bg-black/80 border border-white/[0.06] hover:border-[#c1227d]/40 transition-all duration-500 group overflow-hidden backdrop-blur-sm"
              >
                {/* Gradient accent line at top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#c1227d] via-[#D81B8C] to-[#612D91] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Background glow on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#c1227d]/0 group-hover:bg-[#c1227d]/5 rounded-full blur-[40px] transition-all duration-500 pointer-events-none" />

                {/* Number index */}
                <div className="absolute top-6 right-6 text-[3.5rem] font-black text-white/[0.03] group-hover:text-[#c1227d]/10 transition-colors duration-500 leading-none select-none">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.08] flex items-center justify-center mb-5 text-[#c1227d] group-hover:bg-gradient-to-br group-hover:from-[#c1227d] group-hover:to-[#D81B8C] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_0_25px_rgba(193,34,125,0.3)] transition-all duration-400">
                    {prog.icon}
                  </div>
                  <h4 className="text-base font-bold mb-3 uppercase tracking-tight text-white group-hover:text-[#c1227d] transition-colors duration-300">
                    {prog.title}
                  </h4>
                  <p className="text-white/45 text-sm leading-relaxed font-light">
                    {prog.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Training Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl max-w-3xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#c1227d]/10 via-[#612D91]/10 to-[#c1227d]/10" />
            <div className="absolute inset-0 border border-[#c1227d]/15 rounded-2xl" />
            <div className="relative z-10 flex items-center gap-4 px-8 py-5">
              <div className="w-10 h-10 rounded-full bg-[#c1227d]/15 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-[#c1227d]" />
              </div>
              <p className="text-white/70 text-sm sm:text-base font-light">
                We also provide training opportunities in areas such as <span className="text-white font-semibold">Data Analytics</span>, <span className="text-white font-semibold">Flutter</span>, <span className="text-white font-semibold">Graphic Designing</span>, and other professional and technology-focused fields.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/50 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#612D91]/5 rounded-full blur-[200px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-6 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent"
            >
              Our Approach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-white/50 text-lg font-light max-w-xl mx-auto"
            >
              At Sysbreeze, our approach is built around three core principles:
            </motion.p>
          </div>

          {/* Approach Principles — Horizontal Cards */}
          <div className="space-y-6 mb-28">
            {approachPrinciples.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="relative group"
              >
                <div className="relative p-8 md:p-10 rounded-[2rem] border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm transition-all duration-500 overflow-hidden">
                  {/* Animated gradient orb */}
                  <div className={`absolute ${idx === 0 ? 'top-0 right-0' : idx === 1 ? 'bottom-0 left-0' : 'top-1/2 right-0 -translate-y-1/2'} w-[250px] h-[250px] rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${idx === 0 ? 'bg-[#c1227d]/10' : idx === 1 ? 'bg-[#612D91]/10' : 'bg-[#D81B8C]/10'}`} />
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
                    {/* Number + Icon */}
                    <div className="flex items-center gap-5 shrink-0">
                      <span className="text-5xl md:text-6xl font-black text-white/[0.04] group-hover:text-[#c1227d]/15 transition-colors duration-500 select-none leading-none">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.08] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#c1227d] group-hover:to-[#D81B8C] group-hover:border-transparent group-hover:shadow-[0_0_40px_rgba(193,34,125,0.25)] transition-all duration-500">
                        {principle.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black mb-3 uppercase tracking-tight text-white group-hover:text-[#c1227d] transition-colors duration-300">
                        {principle.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed font-light text-base md:text-lg max-w-2xl">
                        {principle.description}
                      </p>
                    </div>

                    {/* Decorative arrow */}
                    <div className="hidden lg:flex w-12 h-12 rounded-full border border-white/[0.06] items-center justify-center shrink-0 group-hover:border-[#c1227d]/30 group-hover:bg-[#c1227d]/5 transition-all duration-500">
                      <TrendingUp className="w-5 h-5 text-white/20 group-hover:text-[#c1227d] transition-colors duration-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Sysbreeze — Bento Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[#c1227d]/20 via-[#612D91]/10 to-[#c1227d]/20 rounded-[3.5rem] blur-sm opacity-50" />
            
            <div className="relative p-8 md:p-14 lg:p-16 rounded-[3.5rem] bg-gradient-to-br from-zinc-900/90 via-black/95 to-zinc-900/90 border border-[#c1227d]/15 overflow-hidden backdrop-blur-xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c1227d]/5 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#612D91]/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c1227d]/30 to-transparent" />
              
              {/* Section Header */}
              <div className="relative z-10 text-center mb-14">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-fit mx-auto flex items-center gap-2 px-4 py-2 rounded-full border border-[#c1227d]/20 bg-[#c1227d]/5 mb-6"
                >
                  <Award className="w-4 h-4 text-[#c1227d]" />
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#c1227d]">
                    Why Us
                  </span>
                </motion.div>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-4">
                  Why Choose Sysbreeze?
                </h3>
                <p className="text-white/40 text-base font-light max-w-lg mx-auto">
                  A trusted technology and business growth partner delivering excellence across every service.
                </p>
              </div>

              {/* Bento Grid */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {reasonsToChoose.map((reason, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06, duration: 0.5 }}
                    className={`relative flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#c1227d]/30 hover:bg-[#c1227d]/[0.04] transition-all duration-400 group ${
                      idx === 0 || idx === 4 || idx === 8 ? 'sm:col-span-2 lg:col-span-1' : ''
                    }`}
                  >
                    {/* Index number */}
                    <div className="w-8 h-8 rounded-lg bg-[#c1227d]/10 border border-[#c1227d]/20 flex items-center justify-center shrink-0 group-hover:bg-[#c1227d] group-hover:border-transparent transition-all duration-300">
                      <span className="text-xs font-black text-[#c1227d] group-hover:text-white transition-colors duration-300">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-white/80 text-sm font-medium leading-relaxed pt-1 group-hover:text-white transition-colors duration-300">
                      {reason}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom accent line */}
              <div className="relative z-10 mt-12 flex justify-center">
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#c1227d]/40 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
