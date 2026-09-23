"use client";

import { motion } from "framer-motion";
import WorksGrid from "./WorksGrid";

export interface Project {
    id: string;
    title: string;
    category: string;
    location: string;
    countryCode: "OM" | "AE" | "IN";
    flag: string;
    link: string;
    displayUrl: string;
    image: string;
    description: string;
    highlights: string[];
}

const projects: Project[] = [
    {
        id: "omanigulf-food",
        title: "Omanigulf Food",
        category: "Food & Distribution",
        location: "Oman",
        countryCode: "OM",
        flag: "🇴🇲",
        link: "https://omanigulffood.com",
        displayUrl: "omanigulffood.com",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
        description: "Enterprise food supply and FMCG distribution portal serving culinary logistics, international sourcing, and regional wholesale supply chains across the Sultanate of Oman.",
        highlights: ["Food & FMCG Supply", "B2B Catalog & Logistics", "Corporate Web Presence"]
    },
    {
        id: "corbel-technical-services",
        title: "Corbel Technical Services",
        category: "Interiors & Technical Services",
        location: "UAE",
        countryCode: "AE",
        flag: "🇦🇪",
        link: "https://corbeltechnicalservices.com",
        displayUrl: "corbeltechnicalservices.com",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        description: "High-end corporate platform showcasing luxury commercial interior fit-outs, turnkey architectural solutions, contracting, and comprehensive MEP technical engineering in the UAE.",
        highlights: ["Luxury Interior Fit-outs", "MEP & Technical Engineering", "Commercial Contracting"]
    },
    {
        id: "myfezto",
        title: "MyFezto",
        category: "E-Commerce",
        location: "India",
        countryCode: "IN",
        flag: "🇮🇳",
        link: "https://myfezto.com",
        displayUrl: "myfezto.com",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
        description: "Next-generation lifestyle and online retail e-commerce platform built for high-performance shopping experiences, seamless payment flows, and lightning-fast checkout.",
        highlights: ["Modern Online Storefront", "Secure Payment Gateway", "Mobile-First UX"]
    },
    {
        id: "digital-line-graphics",
        title: "Digital Line Graphics",
        category: "Printing & Graphics",
        location: "UAE",
        countryCode: "AE",
        flag: "🇦🇪",
        link: "https://digitallinegraphics.com",
        displayUrl: "digitallinegraphics.com",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
        description: "Creative digital portfolio for large-format commercial printing, retail branding, exhibition signage, vehicle wrapping, and innovative visual graphics production in the UAE.",
        highlights: ["Large-Format Printing", "Retail & Exhibition Signage", "Creative Graphics Studio"]
    },
    {
        id: "properties-wayanad",
        title: "Properties Wayanad",
        category: "Real Estate",
        location: "India",
        countryCode: "IN",
        flag: "🇮🇳",
        link: "https://propertieswayanad.com",
        displayUrl: "propertieswayanad.com",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
        description: "Premier real estate discovery platform featuring curated listings for luxury villas, eco-resorts, hill-country plantations, and prime residential & commercial land in Wayanad, Kerala.",
        highlights: ["Property Listing Portal", "Interactive Filter Search", "High-Conversion Lead Flow"]
    },
    {
        id: "zpro-advertising",
        title: "ZPro Advertising",
        category: "Advertising & Marketing",
        location: "UAE",
        countryCode: "AE",
        flag: "🇦🇪",
        link: "https://zproadvertising.com",
        displayUrl: "zproadvertising.com",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
        description: "Full-service advertising and brand marketing agency website highlighting outdoor billboard media, digital marketing campaigns, creative branding, and PR elevation in UAE.",
        highlights: ["Outdoor Billboard Media", "Brand Strategy & PR", "360° Marketing Campaigns"]
    },
    {
        id: "dream-wagon-travels",
        title: "Dream Wagon Travels",
        category: "Travel & Tourism",
        location: "India",
        countryCode: "IN",
        flag: "🇮🇳",
        link: "https://dreamwagontravels.com",
        displayUrl: "dreamwagontravels.com",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
        description: "Experiential holiday booking and destination travel portal offering personalized national & international tour itineraries, hotel booking, and curated adventure travel experiences.",
        highlights: ["Tour Booking Engine", "Custom Travel Itineraries", "Destination Showcase"]
    },
    {
        id: "tackletips",
        title: "TackleTips",
        category: "E-Commerce",
        location: "India",
        countryCode: "IN",
        flag: "🇮🇳",
        link: "https://tackletips.in",
        displayUrl: "tackletips.in",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
        description: "Specialized niche e-commerce platform dedicated to high-end fishing tackle, angler gear, outdoor equipment, and sports accessories with real-time inventory management.",
        highlights: ["Niche Sport E-Commerce", "Specialized Gear Catalog", "Real-Time Inventory"]
    }
];

export default function WorksSection() {
    return (
        <section className="bg-black py-16 md:py-24 overflow-hidden border-t border-white/5" id="works">
            {/* Header with container constraints */}
            <div className="container mx-auto px-6 md:px-12 text-center mb-12 md:mb-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-fit mx-auto flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-4"
                >
                    <span className="w-2 h-2 rounded-full bg-[#c1227d] animate-pulse"></span>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                        Featured Client Portfolio
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none break-words"
                >
                    Digital Craftsmanship <br className="hidden sm:block" />
                    Our Proven Client Success
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-white/60 mt-4 max-w-xl mx-auto font-light text-base md:text-lg"
                >
                    Explore our featured live projects spanning e-commerce, food distribution, technical services, real estate, travel, and creative advertising across the UAE, Oman, and India.
                </motion.p>
            </div>

            {/* Grid & Filter Component */}
            <WorksGrid projects={projects} />
        </section>
    );
}
