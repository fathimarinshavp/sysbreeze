import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | sysbreeze",
    description: "Read sysbreeze's Privacy Policy to understand how we collect, use, protect, and manage your personal information when using our website and services.",
    keywords: "Privacy Policy sysbreeze, Data Protection Policy, Personal Information Security, Website Privacy, Sysbreeze Technologies Privacy Policy",
    alternates: {
        canonical: "https://www.sysbreeze.com/privacy",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-20 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(193,34,125,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            </div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#c1227d] animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                            Legal Policy
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-none mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 font-medium">
                        At sysbreeze, we value your privacy and are committed to protecting your personal information.
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-12 bg-white/5 border border-white/5 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm">
                    <p className="text-lg text-white/70 leading-relaxed font-light">
                        This Privacy Policy explains how we collect, use, store, and protect the information you provide when using our website and services.
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            1. Information We Collect
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            We may collect the following information:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Name",
                                "Email address",
                                "Phone number",
                                "Company name",
                                "Course enrollment details",
                                "Project requirements and business information",
                                "Website usage data through cookies and analytics tools"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-white/80 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#c1227d] flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            2. How We Use Your Information
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            We use collected information to:
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Respond to inquiries and service requests",
                                "Deliver IT, HR, branding, digital marketing, and training services",
                                "Process course registrations",
                                "Improve website functionality and user experience",
                                "Send service updates, newsletters, and promotional communications",
                                "Maintain security and prevent unauthorized activities"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-white/80 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#c1227d] mt-2.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            3. Cookies and Tracking Technologies
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            Our website may use cookies and similar technologies to analyze website traffic, improve performance, and enhance user experience. Users may disable cookies through their browser settings.
                        </p>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            4. Information Sharing
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            We do not sell, rent, or trade personal information to third parties. Information may be shared only:
                        </p>
                        <ul className="space-y-3">
                            {[
                                "When required by law",
                                "With trusted service providers assisting in business operations",
                                "To protect the rights, safety, and security of sysbreeze and its users"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-white/80 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#c1227d] mt-2.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            5. Data Security
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            We implement reasonable technical and organizational measures to protect personal information from unauthorized access, disclosure, alteration, or destruction.
                        </p>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            6. Third-Party Services
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of external websites.
                        </p>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            7. Student and Training Information
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            Information submitted for training programs, internships, certifications, and placement assistance will be used solely for educational and career-related purposes.
                        </p>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            8. Your Rights
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            You may request to:
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Access your personal information",
                                "Correct inaccurate information",
                                "Delete your information where legally permitted",
                                "Withdraw consent for marketing communications"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-white/80 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#c1227d] mt-2.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            9. Changes to This Policy
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            sysbreeze reserves the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date.
                        </p>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            10. Contact Us
                        </h2>
                        <div className="text-white/60 leading-relaxed space-y-1">
                            <p className="font-bold text-white">Sysbreeze Technologies Pvt. Ltd. (sysbreeze)</p>
                            <p>Kinfra Techno Industrial Park, Kakkanchery, Calicut, Kerala, India</p>
                            <p>Email: <a href="mailto:info@sysbreeze.com" className="text-[#c1227d] hover:underline">info@sysbreeze.com</a></p>
                            <p>Phone: <a href="tel:+919446621444" className="text-[#c1227d] hover:underline">+91 94466 21444</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
