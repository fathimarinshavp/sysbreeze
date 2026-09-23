import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "sysbreeze Blog | Latest Insights in IT, Software & Digital Transformation",
    description: "Stay updated with the latest trends in software development, SEO, digital marketing, ERP solutions, and business consulting from the sysbreeze team.",
    keywords: "sysbreeze blog, IT blog kerala, software development trends, SEO blogs, digital marketing insights, business technology tips",
    alternates: {
        canonical: "https://www.sysbreeze.com/blog",
    },
};

export default function BlogListingPage() {
    // List of blog posts
    const blogPosts = [
        {
            title: "AI in HR and Recruitment: What Works, What Doesn't",
            excerpt: "Discover how AI is transforming HR management and recruitment through resume screening, automation, chatbots, workforce analytics, and employee self-service.",
            slug: "ai-in-hr-and-recruitment-what-works-what-doesnt",
            date: "September 22, 2026",
            readTime: "9 Min Read",
            category: "HR & Artificial Intelligence",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Generative AI at Work: What Businesses Are Actually Doing With It",
            excerpt: "Discover how businesses use generative AI for automation, customer support, content, data analysis, software development, and internal knowledge management.",
            slug: "generative-ai-at-work-what-businesses-actually-doing",
            date: "September 22, 2026",
            readTime: "10 Min Read",
            category: "Artificial Intelligence",
            image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "What Is LLMO? A Beginner's Guide to AI Search Optimization",
            excerpt: "Learn what LLMO is, how it differs from SEO, and practical strategies businesses can use to improve visibility in AI-powered search.",
            slug: "what-is-llmo-beginners-guide-ai-search-optimization",
            date: "September 22, 2026",
            readTime: "10 Min Read",
            category: "SEO & AI",
            image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Why Businesses Need Both Branding and Digital Marketing in 2026",
            excerpt: "Discover why branding and digital marketing are two sides of the same coin, and how combining them creates a powerful, consistent path for business growth.",
            slug: "why-businesses-need-both-branding-and-digital-marketing-2026",
            date: "August 20, 2026",
            readTime: "6 Min Read",
            category: "Branding & Marketing",
            image: "/images/branding.jpg"
        },
        {
            title: "Top Tech Skills to Learn in 2026: AI, Data Science, Python or MERN Stack?",
            excerpt: "Explore the most high-demand tech skills to learn in 2026, including Artificial Intelligence, Python Full Stack, Data Science, and MERN Stack development.",
            slug: "top-tech-skills-to-learn-in-2026-ai-data-science-python-mern",
            date: "August 20, 2026",
            readTime: "8 Min Read",
            category: "Career Guide",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "How to Become an AI Search and GEO Specialist in 2026: Skills, Career Scope and Training",
            excerpt: "Learn how to optimize your content for ChatGPT, Gemini, and AI Overviews. Discover what it takes to become a Generative Engine Optimization (GEO) specialist.",
            slug: "how-to-become-ai-search-geo-specialist-2026",
            date: "August 20, 2026",
            readTime: "7 Min Read",
            category: "SEO & AI",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Certificates Are Not Enough: How to Build a Job-Winning Portfolio in 2026",
            excerpt: "A certificate shows you finished a course; a portfolio shows you can do the job. Learn how to build a high-quality portfolio in 2026 using live corporate projects.",
            slug: "certificates-are-not-enough-build-job-winning-portfolio-2026",
            date: "August 20, 2026",
            readTime: "7 Min Read",
            category: "Career Guide",
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "HR Management Services in Kerala: How Businesses Can Build a Stronger Workforce in 2026",
            excerpt: "Get professional HR management services in Kerala for recruitment, employee management, performance, HR policies, and business growth.",
            slug: "hr-management-services-kerala-stronger-workforce-2026",
            date: "August 16, 2026",
            readTime: "7 Min Read",
            category: "HR & Business Growth",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "How to Launch a Freelance Digital Marketing Agency from Home in 2026",
            excerpt: "Step-by-step guide to starting a remote digital marketing agency. Learn high-ticket niche selection, client onboarding, SOPs & retention strategies.",
            slug: "launch-freelance-digital-marketing-agency-home-2026",
            date: "August 16, 2026",
            readTime: "9 Min Read",
            category: "Career & Freelancing",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Local SEO for Small Businesses: The Ultimate Playbook for 2026",
            excerpt: "Master Local SEO for small businesses. Learn Google Business Profile optimization, Schema markup, local link building & review tactics.",
            slug: "local-seo-small-businesses-ultimate-playbook-2026",
            date: "August 16, 2026",
            readTime: "7 Min Read",
            category: "Local SEO",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Short-Form Video SEO: Ranking YouTube Shorts & Instagram Reels in 2026",
            excerpt: "Learn how to rank YouTube Shorts & Instagram Reels using Audio SEO, AI tools, metadata optimization, and algorithms in 2026.",
            slug: "short-form-video-seo-ranking-youtube-shorts-reels-2026",
            date: "August 16, 2026",
            readTime: "7 Min Read",
            category: "Social Media",
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Is Digital Marketing Still a Good Career in 2026?",
            excerpt: "Wondering if digital marketing is still a good career in 2026? Explore salary, job opportunities, AI impact, skills, and career growth in Kerala and India.",
            slug: "is-digital-marketing-still-a-good-career-2026",
            date: "August 10, 2026",
            readTime: "7 Min Read",
            category: "Career Guide",
            image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Best SEO Strategies After Google AI Updates (2026 Guide)",
            excerpt: "Discover the best SEO strategies after Google's AI updates. Learn how to improve rankings, increase organic traffic, and optimize your website for AI search.",
            slug: "best-seo-strategies-google-ai-updates-2026",
            date: "August 9, 2026",
            readTime: "9 Min Read",
            category: "SEO & AI",
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "How Generative Engine Optimization (GEO) Is Replacing Traditional SEO in 2026",
            excerpt: "Discover how Generative Engine Optimization (GEO) is replacing traditional SEO in 2026. Learn GEO strategies to rank in ChatGPT, Gemini, AI Overviews, and Perplexity.",
            slug: "how-generative-engine-optimization-geo-replaces-seo-2026",
            date: "August 10, 2026",
            readTime: "8 Min Read",
            category: "SEO & AI",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Best IT Courses After Graduation in Kerala (2026 Guide)",
            excerpt: "Explore the best IT courses after graduation in Kerala, including AI, Digital Marketing, Python, Data Science, and Full Stack Development. Build a successful career with industry-focused training at sysbreeze.",
            slug: "best-it-courses-after-graduation-kerala-2026",
            date: "July 26, 2026",
            readTime: "6 Min Read",
            category: "Career Guide",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "How a Professional Website Can Increase Your Business Revenue",
            excerpt: "Learn how a professionally designed website helps businesses generate leads, improve credibility, increase sales, and grow online with effective digital strategies.",
            slug: "how-professional-website-increases-business-revenue",
            date: "July 26, 2026",
            readTime: "5 Min Read",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Digital Marketing vs AI: Which Skill Should Students Learn in 2026?",
            excerpt: "Compare Digital Marketing and Artificial Intelligence careers, salaries, required skills, and job opportunities to choose the right career path in 2026.",
            slug: "digital-marketing-vs-ai-which-skill-learn-2026",
            date: "July 26, 2026",
            readTime: "6 Min Read",
            category: "Career Comparison",
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Digital Transformation for Modern Businesses: How Technology Drives Sustainable Growth in 2026",
            excerpt: "Digital transformation is no longer a luxury—it's a necessity. Explore our complete guide on how professional web development, SEO, digital marketing, ERP systems, mobile apps, and HR solutions drive long-term business success.",
            slug: "digital-transformation-modern-businesses",
            date: "June 15, 2026",
            readTime: "8 Min Read",
            category: "Digital Transformation",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Agentic AI for Businesses: The Complete Guide for 2026",
            excerpt: "Learn how Agentic AI is transforming businesses through autonomous AI agents, automation, decision-making, and operational efficiency in 2026.",
            slug: "agentic-ai-for-businesses-guide",
            date: "June 26, 2026",
            readTime: "7 Min Read",
            category: "Artificial Intelligence",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Cloud vs AI Supercomputing Platforms: Which Infrastructure Will Power the Future of Business?",
            excerpt: "Discover the differences between cloud computing and AI supercomputing platforms. Learn which infrastructure is best for AI, analytics, and business growth in 2026.",
            slug: "cloud-vs-ai-supercomputing-platforms-guide",
            date: "June 26, 2026",
            readTime: "8 Min Read",
            category: "Tech Infrastructure",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "How Robotics Is Transforming Industries in 2026",
            excerpt: "Discover how robotics is transforming manufacturing, healthcare, logistics, retail, and agriculture through AI-powered automation and smart technologies.",
            slug: "how-robotics-is-transforming-industries-2026",
            date: "June 26, 2026",
            readTime: "9 Min Read",
            category: "Robotics & Automation",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Future of Software Development with AI: What to Expect in 2026 and Beyond",
            excerpt: "Explore how AI is transforming software development in 2026 through AI coding assistants, automation, agentic AI, testing, and intelligent workflows.",
            slug: "future-of-software-development-with-ai-2026",
            date: "June 26, 2026",
            readTime: "8 Min Read",
            category: "Software Engineering",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-brand-accent selection:text-white pt-32 pb-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(193,34,125,0.15),transparent_60%)]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="w-fit mx-auto mb-6">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                            <BookOpen className="w-4 h-4 text-[#c1227d]" />
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                                OUR BLOG
                            </span>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 uppercase">
                        Insights & <span className="text-[#c1227d]">Trends</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed">
                        Stay ahead of the curve with expert perspectives on technology, digital strategy, workforce management, and industrial solutions.
                    </p>
                </div>

                {/* Featured Post / Grid */}
                <div className="space-y-12">
                    <h2 className="text-2xl font-bold uppercase tracking-wider text-white/40 border-b border-white/10 pb-4">
                        Latest Articles
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <article
                                key={index}
                                className="group flex flex-col bg-zinc-950 border border-white/10 rounded-[2rem] overflow-hidden hover:border-[#c1227d]/40 transition-all duration-300 h-full"
                            >
                                {/* Post Image */}
                                <div className="aspect-[16/10] overflow-hidden relative border-b border-white/10">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                    <span className="absolute top-4 left-4 text-xs font-bold tracking-wider text-white uppercase px-3 py-1.5 rounded-full border border-[#c1227d]/30 bg-[#c1227d]/35 backdrop-blur-sm">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Post Body */}
                                <div className="p-8 flex flex-col flex-grow justify-between space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 text-xs text-white/40">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5" />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-[#c1227d] transition-colors leading-snug line-clamp-3">
                                            {post.title}
                                        </h3>
                                        <p className="text-white/60 text-sm leading-relaxed line-clamp-4">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-white/5">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white group-hover:text-[#c1227d] transition-colors"
                                        >
                                            Read Article
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Empty State / Coming Soon placeholder for other items to add richness */}
                <div className="mt-16 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 text-center max-w-4xl mx-auto">
                    <p className="text-white/50 text-base">
                        More articles on Web Engineering, local SEO, custom ERP architecture, and Mobile UX strategies are currently in pipeline. Subscribe to our newsletter or check back soon!
                    </p>
                </div>
            </div>
        </main>
    );
}
