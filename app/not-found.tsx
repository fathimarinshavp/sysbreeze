import Link from "next/link";
import { ArrowLeft, Home, BookOpen, GraduationCap, Briefcase, Mail } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | Sysbreeze Technologies",
  description: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const quickLinks = [
    { title: "Home", href: "/", icon: Home, desc: "Return to homepage" },
    { title: "IT Services", href: "/services", icon: Briefcase, desc: "Web, Mobile, ERP & Branding" },
    { title: "Training Programs", href: "/trainings", icon: GraduationCap, desc: "AI, Python, MERN & Digital Marketing" },
    { title: "Blog & Insights", href: "/blog", icon: BookOpen, desc: "Latest tech and business trends" },
    { title: "Contact Us", href: "/contact-us", icon: Mail, desc: "Get in touch with our team" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-36 pb-24 relative overflow-hidden flex items-center justify-center">
      {/* Background Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(circle_at_50%_50%,rgba(193,34,125,0.25),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-bold tracking-widest uppercase mb-6">
          Error 404 • Page Not Found
        </div>

        {/* Heading */}
        <h1 className="text-7xl md:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-pink-500 mb-6">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Looks like this page took a detour.
        </h2>

        <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
          The link you followed might be broken, outdated, or the page may have moved. Explore our core services and trainings below.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#c1227d] to-[#612D91] text-white font-semibold rounded-full shadow-lg shadow-pink-500/20 hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </Link>

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/10 transition-all"
          >
            Contact Support
          </Link>
        </div>

        {/* Quick Links Grid */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-6">
            Popular Destinations
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-left">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-pink-500/40 hover:bg-white/[0.06] transition-all group"
                >
                  <Icon className="w-5 h-5 text-pink-400 mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-sm font-semibold text-white group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-tight">
                    {item.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
