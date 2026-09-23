import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms of Service | sysbreeze",
    description: "Review the Terms of Service governing the use of sysbreeze's website, training programs, digital marketing, branding, and web development services.",
    keywords: "Terms of Service sysbreeze, Website Terms and Conditions, Digital Marketing Service Terms, Web Development Agreement, Sysbreeze Technologies Terms",
    alternates: {
        canonical: "https://www.sysbreeze.com/terms",
    },
};

export default function TermsOfServicePage() {
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
                        Terms of Service
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 font-medium">
                        Welcome to sysbreeze. By accessing or using our website and services, you agree to comply with these Terms of Service.
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-12 bg-white/5 border border-white/5 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm">

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            Acceptance of Terms
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            By using our website, you acknowledge that you have read, understood, and agreed to these Terms.
                        </p>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            Services
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            sysbreeze provides services including but not limited to:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Website Design and Development",
                                "E-Commerce Development",
                                "SEO Services",
                                "Digital Marketing",
                                "Branding Solutions",
                                "Mobile Application Development",
                                "Professional Training Programs",
                                "IT Consulting Services"
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
                            User Responsibilities
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            Users agree to:
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Provide accurate information",
                                "Use the website lawfully",
                                "Not engage in activities that may harm the website or services",
                                "Respect intellectual property rights"
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
                            Intellectual Property
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            All website content, logos, graphics, text, software, and materials are the property of sysbreeze unless otherwise stated. Unauthorized use, reproduction, or distribution is prohibited.
                        </p>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            Payments and Refunds
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            Service fees, payment schedules, and refund policies will be outlined in separate agreements or proposals provided to clients. Training fees may be subject to specific refund terms communicated during enrollment.
                        </p>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            Project Deliverables
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            Project timelines and deliverables depend on client cooperation, content availability, and agreed project scope. Delays caused by incomplete client inputs may affect delivery schedules.
                        </p>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            Limitation of Liability
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            sysbreeze shall not be liable for indirect, incidental, consequential, or special damages arising from the use of our website or services.
                        </p>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            Third-Party Platforms
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            Our services may integrate with third-party platforms such as search engines, social media networks, payment gateways, or hosting providers. We are not responsible for the policies or actions of such third parties.
                        </p>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            Termination
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            We reserve the right to suspend or terminate access to our website or services for violations of these Terms.
                        </p>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            Modifications
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            We may modify these Terms at any time. Continued use of our website after updates constitutes acceptance of the revised Terms.
                        </p>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            Governing Law
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            These Terms shall be governed by and interpreted in accordance with the laws of India.
                        </p>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#c1227d]">
                            Contact Information
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
