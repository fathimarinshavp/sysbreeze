import { Metadata } from 'next';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    User,
    ArrowLeft,
    Check,
    TrendingUp,
    Settings,
    Layers,
    Smartphone,
    Users,
    Target,
    Zap,
    Briefcase,
    ChevronRight,
    ArrowUpRight
} from "lucide-react";

export const metadata: Metadata = {
    title: "Digital Transformation & IT Solutions in Kerala | sysbreeze",
    description: "Boost business growth with website development, SEO, digital marketing, ERP, HR solutions, and IT services from sysbreeze in Kerala.",
    keywords: "Digital Transformation Services, IT Solutions Company in Kerala, Website Development Services, Digital Marketing Services, HR Management Solutions, Business Consulting Services, Mobile App Development, ERP Software Solutions, SEO Services Kerala, Business Growth Strategies",
    alternates: {
        canonical: "https://www.sysbreeze.com/blog/digital-transformation-modern-businesses",
    },
};

export default function BlogPage() {
    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Digital Transformation for Modern Businesses: How Technology Drives Sustainable Growth in 2026",
        "description": "Boost business growth with website development, SEO, digital marketing, ERP, HR solutions, and IT services from sysbreeze in Kerala.",
        "datePublished": "2026-06-15",
        "dateModified": "2026-06-15",
        "author": {
            "@type": "Organization",
            "name": "sysbreeze Editorial Team",
            "url": "https://www.sysbreeze.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Sysbreeze Technologies",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.sysbreeze.com/Gemini_Generated_Image_2w2muj2w2muj2w2m.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.sysbreeze.com/blog/digital-transformation-modern-businesses"
        }
    };

    return (
        <main className="min-h-screen bg-black text-white selection:bg-brand-accent selection:text-white pt-32 pb-20 relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
            />
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(193,34,125,0.15),transparent_60%)]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                {/* Back to Blog */}
                <div className="mb-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors group text-sm font-semibold uppercase tracking-wider"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Blog
                    </Link>
                </div>

                {/* Article Header */}
                <header className="mb-16">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 w-fit mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#c1227d] animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                            Digital Insights
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-8 uppercase bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                        Digital Transformation for Modern Businesses: How Technology Drives Sustainable Growth in 2026
                    </h1>

                    <p className="text-xl md:text-2xl text-white/60 font-medium mb-10 leading-relaxed max-w-4xl">
                        Digital Transformation for Modern Businesses: A Complete Guide to Sustainable Growth
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-white/40 border-y border-white/10 py-6">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[#c1227d]" />
                            <span>June 15, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#c1227d]" />
                            <span>8 Min Read</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-[#c1227d]" />
                            <span>By sysbreeze Editorial Team</span>
                        </div>
                    </div>
                </header>

                {/* Article Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content Body */}
                    <article className="lg:col-span-12 space-y-12 text-white/70 text-lg md:text-xl leading-relaxed font-light">

                        {/* Quote/Intro */}
                        <div className="border-l-4 border-[#c1227d] pl-6 py-2 my-8 bg-white/5 rounded-r-2xl">
                            <p className="text-white font-medium text-xl md:text-2xl italic">
                                "In today's highly competitive digital landscape, businesses must continuously evolve to stay relevant. Whether you are a startup, small business, or enterprise organization, adopting the right technology solutions can significantly improve operational efficiency, customer engagement, and revenue growth."
                            </p>
                        </div>

                        <p>
                            Digital transformation is no longer a luxury—it's a necessity. Companies that invest in modern technologies, strategic marketing, workforce management, and business automation gain a competitive advantage that enables long-term success.
                        </p>

                        <hr className="border-white/10" />

                        {/* What is Digital Transformation? */}
                        <section className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                                What is Digital Transformation?
                            </h2>
                            <p>
                                Digital transformation is the process of integrating technology into every aspect of a business to improve operations, customer experiences, and decision-making.
                            </p>
                            <p className="font-medium text-white">It involves:</p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    "Modern website development",
                                    "Business process automation",
                                    "ERP software implementation",
                                    "Mobile application development",
                                    "Search Engine Optimization (SEO)",
                                    "Digital marketing strategies",
                                    "Workforce management solutions",
                                    "Data-driven business consulting"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/5 hover:border-[#c1227d]/30 p-4 rounded-xl transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-[#c1227d]/10 flex items-center justify-center border border-[#c1227d]/30 shrink-0">
                                            <Check className="w-3.5 h-3.5 text-[#c1227d]" />
                                        </div>
                                        <span className="text-base font-medium text-white/90">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-br from-[#c1227d]/10 to-transparent border border-[#c1227d]/20 p-6 rounded-2xl mt-4">
                                <p className="text-base text-white/80 font-medium italic">
                                    <strong>Key Objective:</strong> The goal is to create efficient systems that support growth while improving customer satisfaction and operational performance.
                                </p>
                            </div>
                        </section>

                        <hr className="border-white/10" />

                        {/* Why Digital Transformation Matters in 2026 */}
                        <section className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                                Why Digital Transformation Matters in 2026
                            </h2>
                            <p>
                                Businesses face increasing challenges, including changing customer expectations, growing competition, and rapidly evolving technologies. Organizations that invest in digital transformation benefit from:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="bg-zinc-950 border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-[#c1227d] border border-white/10">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 uppercase">Improved Customer Experience</h3>
                                    <p className="text-base text-white/60">
                                        Customers expect fast, seamless, and personalized interactions. A modern website, mobile application, and optimized digital presence help businesses meet these expectations.
                                    </p>
                                </div>

                                <div className="bg-zinc-950 border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-[#c1227d] border border-white/10">
                                        <Settings className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 uppercase">Increased Operational Efficiency</h3>
                                    <p className="text-base text-white/60">
                                        Automation reduces manual work, minimizes errors, and improves productivity across departments.
                                    </p>
                                </div>

                                <div className="bg-zinc-950 border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-[#c1227d] border border-white/10">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 uppercase">Better Decision-Making</h3>
                                    <p className="text-base text-white/60">
                                        Real-time analytics and reporting systems provide valuable insights that support informed business decisions.
                                    </p>
                                </div>

                                <div className="bg-zinc-950 border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-[#c1227d] border border-white/10">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 uppercase">Higher Revenue Growth</h3>
                                    <p className="text-base text-white/60">
                                        Digital channels create new opportunities for customer acquisition, lead generation, and sales conversion.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <hr className="border-white/10" />

                        {/* Essential Digital Solutions Every Business Needs */}
                        <section className="space-y-10">
                            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                                Essential Digital Solutions Every Business Needs
                            </h2>

                            {/* Solution 1 */}
                            <div className="bg-zinc-950 border border-white/10 rounded-[2.5rem] p-8 md:p-12 space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                                        1. Professional Website Development
                                    </h3>
                                    <span className="text-xs font-bold tracking-[0.2em] text-[#c1227d] uppercase px-3 py-1 rounded-full border border-[#c1227d]/30 bg-[#c1227d]/10">
                                        Web Dev
                                    </span>
                                </div>
                                <p className="text-white/80">
                                    A website is often the first interaction potential customers have with your business. An effective website should:
                                </p>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {[
                                        "Load quickly",
                                        "Be mobile responsive",
                                        "Provide excellent user experience",
                                        "Follow SEO best practices",
                                        "Include clear calls-to-action",
                                        "Maintain high security standards"
                                    ].map((pt, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-base font-semibold text-white/70">
                                            <span className="w-2 h-2 rounded-full bg-[#c1227d]" />
                                            {pt}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-base text-white/60 pt-4 border-t border-white/5">
                                    Modern web technologies help businesses create websites that not only look professional but also generate leads and conversions. sysbreeze specializes in responsive website development designed for performance, usability, and search engine visibility.
                                </p>
                                <div className="bg-white/5 p-6 rounded-2xl mt-4">
                                    <p className="text-sm font-bold text-white uppercase tracking-wider mb-3">Benefits of Professional Website Development:</p>
                                    <ul className="grid sm:grid-cols-2 gap-2 text-base text-white/70">
                                        <li>✓ Enhanced brand credibility</li>
                                        <li>✓ Better search engine rankings</li>
                                        <li>✓ Improved lead generation</li>
                                        <li>✓ Higher conversion rates</li>
                                        <li>✓ Better customer engagement</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Solution 2 */}
                            <div className="bg-zinc-950 border border-white/10 rounded-[2.5rem] p-8 md:p-12 space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                                        2. Search Engine Optimization (SEO)
                                    </h3>
                                    <span className="text-xs font-bold tracking-[0.2em] text-[#c1227d] uppercase px-3 py-1 rounded-full border border-[#c1227d]/30 bg-[#c1227d]/10">
                                        SEO
                                    </span>
                                </div>
                                <p className="text-white/80">
                                    Search Engine Optimization remains one of the most cost-effective digital marketing strategies available. SEO helps businesses:
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-2 text-base text-white/70">
                                    <li>• Increase organic website traffic</li>
                                    <li>• Improve online visibility</li>
                                    <li>• Generate qualified leads</li>
                                    <li>• Build brand authority</li>
                                    <li>• Achieve long-term marketing results</li>
                                </ul>
                                <p className="text-white/80">
                                    A comprehensive SEO strategy includes:
                                </p>
                                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                                    {[
                                        "Technical SEO",
                                        "On-page optimization",
                                        "Keyword research",
                                        "Content marketing",
                                        "Link building",
                                        "Local SEO optimization"
                                    ].map((seo_pt, idx) => (
                                        <div key={idx} className="bg-white/5 border border-white/5 p-3 rounded-xl text-sm font-semibold text-white/80 text-center">
                                            {seo_pt}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-base text-white/60 italic pt-4 border-t border-white/5">
                                    <strong>SEO Impact:</strong> Businesses that consistently invest in SEO gain a sustainable competitive advantage in search engine rankings.
                                </p>
                            </div>

                            {/* Solution 3 */}
                            <div className="bg-zinc-950 border border-white/10 rounded-[2.5rem] p-8 md:p-12 space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                                        3. Digital Marketing for Business Growth
                                    </h3>
                                    <span className="text-xs font-bold tracking-[0.2em] text-[#c1227d] uppercase px-3 py-1 rounded-full border border-[#c1227d]/30 bg-[#c1227d]/10">
                                        Marketing
                                    </span>
                                </div>
                                <p className="text-white/80">
                                    Digital marketing allows businesses to connect with their target audience through multiple online channels. Effective digital marketing services include:
                                </p>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-base font-bold text-white uppercase tracking-wider">Content Marketing</h4>
                                        <p className="text-sm text-white/60">High-quality content helps educate, engage, and convert potential customers.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-white uppercase tracking-wider">Social Media Marketing</h4>
                                        <p className="text-sm text-white/60">Social media platforms help businesses build brand awareness and customer relationships.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-white uppercase tracking-wider">Search Engine Marketing (SEM)</h4>
                                        <p className="text-sm text-white/60">Paid advertising campaigns generate immediate visibility and targeted traffic.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-white uppercase tracking-wider">Email Marketing</h4>
                                        <p className="text-sm text-white/60">Email campaigns nurture leads and improve customer retention.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-white uppercase tracking-wider">Analytics & Performance Tracking</h4>
                                        <p className="text-sm text-white/60">Data-driven optimization ensures better marketing ROI and campaign performance.</p>
                                    </div>
                                </div>
                                <p className="text-base text-white/60 italic pt-4 border-t border-white/5">
                                    <strong>Strategy Focus:</strong> sysbreeze's digital marketing strategies focus on attracting the right audience, increasing engagement, and driving measurable business growth.
                                </p>
                            </div>

                            {/* Solution 4 */}
                            <div className="bg-zinc-950 border border-white/10 rounded-[2.5rem] p-8 md:p-12 space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                                        4. ERP Software Solutions
                                    </h3>
                                    <span className="text-xs font-bold tracking-[0.2em] text-[#c1227d] uppercase px-3 py-1 rounded-full border border-[#c1227d]/30 bg-[#c1227d]/10">
                                        ERP
                                    </span>
                                </div>
                                <p className="text-white/80">
                                    ERP (Enterprise Resource Planning) software integrates core business processes into a single system, helping organizations streamline operations and improve collaboration.
                                </p>
                                <div className="bg-white/5 p-6 rounded-2xl">
                                    <p className="text-sm font-bold text-white uppercase tracking-wider mb-3">Key benefits of ERP software:</p>
                                    <ul className="grid sm:grid-cols-2 gap-2 text-base text-white/70">
                                        <li>✓ Centralized data management</li>
                                        <li>✓ Improved process automation</li>
                                        <li>✓ Enhanced reporting and analytics</li>
                                        <li>✓ Better resource management</li>
                                        <li>✓ Increased productivity</li>
                                        <li>✓ Enhanced business visibility</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Solution 5 */}
                            <div className="bg-zinc-950 border border-white/10 rounded-[2.5rem] p-8 md:p-12 space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                                        5. Mobile App Development
                                    </h3>
                                    <span className="text-xs font-bold tracking-[0.2em] text-[#c1227d] uppercase px-3 py-1 rounded-full border border-[#c1227d]/30 bg-[#c1227d]/10">
                                        Mobile
                                    </span>
                                </div>
                                <p className="text-white/80">
                                    A mobile app provides a direct channel to connect with customers, improve loyalty, and offer personalized experiences.
                                </p>
                                <div className="bg-white/5 p-6 rounded-2xl">
                                    <p className="text-sm font-bold text-white uppercase tracking-wider mb-3">Key benefits of mobile app development:</p>
                                    <ul className="grid sm:grid-cols-2 gap-2 text-base text-white/70">
                                        <li>✓ Direct customer engagement</li>
                                        <li>✓ Brand recognition and loyalty</li>
                                        <li>✓ Increased sales and revenue</li>
                                        <li>✓ Offline access to key features</li>
                                        <li>✓ Better user experience</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Solution 6 */}
                            <div className="bg-zinc-950 border border-white/10 rounded-[2.5rem] p-8 md:p-12 space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                                        6. HR Management Solutions
                                    </h3>
                                    <span className="text-xs font-bold tracking-[0.2em] text-[#c1227d] uppercase px-3 py-1 rounded-full border border-[#c1227d]/30 bg-[#c1227d]/10">
                                        HR
                                    </span>
                                </div>
                                <p className="text-white/80">
                                    Employees are one of the most valuable assets of any organization. Effective HR management helps businesses:
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-2 text-base text-white/70 mb-4">
                                    <li>• Recruit top talent</li>
                                    <li>• Improve employee performance</li>
                                    <li>• Enhance workforce productivity</li>
                                    <li>• Ensure compliance</li>
                                    <li>• Increase employee retention</li>
                                </ul>
                                <p className="text-base text-white/60 pt-4 border-t border-white/5">
                                    Modern HR solutions streamline recruitment, onboarding, performance management, and workforce planning while supporting organizational growth.
                                </p>
                            </div>

                            {/* Business Consulting */}
                            <div className="border border-[#c1227d]/20 bg-gradient-to-br from-[#c1227d]/5 to-transparent rounded-[2.5rem] p-8 md:p-12 space-y-6">
                                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                                    The Role of Business Consulting in Digital Success
                                </h3>
                                <p className="text-white/80">
                                    Technology alone is not enough. Businesses also need strategic guidance to maximize results. Professional business consulting helps organizations:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 text-base text-white/70">
                                    <div className="flex items-center gap-2">✔ Identify growth opportunities</div>
                                    <div className="flex items-center gap-2">✔ Improve operational efficiency</div>
                                    <div className="flex items-center gap-2">✔ Optimize business processes</div>
                                    <div className="flex items-center gap-2">✔ Develop scalable strategies</div>
                                    <div className="flex items-center gap-2">✔ Implement digital transformation initiatives</div>
                                </div>
                                <p className="text-base text-[#c1227d] font-semibold pt-4 border-t border-white/5">
                                    A well-planned business strategy ensures that technology investments align with organizational goals and long-term growth objectives.
                                </p>
                            </div>
                        </section>

                        <hr className="border-white/10" />

                        {/* How to Start Your Digital Transformation Journey */}
                        <section className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                                How to Start Your Digital Transformation Journey
                            </h2>
                            <p>
                                Embarking on a digital transformation requires a structured approach. Follow these key steps to initiate your journey:
                            </p>

                            <div className="space-y-4 mt-8">
                                {[
                                    { step: "Step 1", title: "Assess Current Business Processes", desc: "Identify inefficiencies and opportunities for improvement." },
                                    { step: "Step 2", title: "Define Business Goals", desc: "Establish clear objectives for growth, customer acquisition, and operational efficiency." },
                                    { step: "Step 3", title: "Invest in Technology", desc: "Implement solutions that align with your business requirements." },
                                    { step: "Step 4", title: "Optimize Your Digital Presence", desc: "Improve your website, SEO, and digital marketing performance." },
                                    { step: "Step 5", title: "Continuously Measure Results", desc: "Use analytics and reporting tools to monitor performance and refine strategies." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex flex-col md:flex-row md:items-center gap-4 bg-zinc-950 border border-white/10 p-6 rounded-2xl hover:border-white/20 transition-all">
                                        <div className="w-16 h-10 rounded-lg bg-[#c1227d]/15 flex items-center justify-center border border-[#c1227d]/30 text-xs font-black uppercase text-[#c1227d] shrink-0">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white">{item.title}</h4>
                                            <p className="text-sm text-white/50">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <hr className="border-white/10" />

                        {/* Why Choose sysbreeze? */}
                        <section className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                                Why Choose sysbreeze?
                            </h2>
                            <p>
                                sysbreeze combines technology, talent, and business strategy to deliver comprehensive solutions that help organizations achieve sustainable growth.
                            </p>
                            <p className="font-semibold text-white">Our complete suite of services includes:</p>

                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    "Website Design & Development",
                                    "Digital Marketing & SEO Services",
                                    "Branding Solutions",
                                    "Mobile Application Development",
                                    "ERP Software Solutions",
                                    "HR Management Services",
                                    "Business Consulting",
                                    "Professional Training Programs"
                                ].map((srv, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm text-white/80">
                                        <span className="text-[#c1227d] font-bold">✔</span>
                                        {srv}
                                    </div>
                                ))}
                            </div>

                            <p className="pt-6">
                                With a focus on innovation, results, and customer success, sysbreeze helps businesses build strong digital foundations for the future.
                            </p>
                        </section>

                        {/* Action Call */}
                        <div className="bg-gradient-to-br from-[#c1227d]/20 via-[#612D91]/10 to-transparent border border-white/15 rounded-[3rem] p-8 md:p-16 text-center space-y-8 mt-16 relative overflow-hidden">
                            <div className="relative z-10 space-y-4">
                                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                                    Ready to Transform Your Business?
                                </h3>
                                <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                                    Talk to our digital transformation experts today and get a custom strategy tailored to your business needs.
                                </p>
                                <div className="pt-6">
                                    <Link href="/contact-us" className="inline-flex items-center gap-3 bg-[#c1227d] text-white px-10 py-5 rounded-full font-black text-xl uppercase tracking-tighter shadow-lg shadow-[#c1227d]/20 hover:scale-105 transition-transform active:scale-95 group">
                                        Get Started Now
                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </article>
                </div>
            </div>
        </main>
    );
}
