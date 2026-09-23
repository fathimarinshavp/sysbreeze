import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Ui/Header/header";
import Footer from "@/components/Ui/Footer/Footer";
import Script from "next/script";




const instrumentSans = localFont({
  src: [
    {
      path: "../public/font/static/InstrumentSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/static/InstrumentSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/static/InstrumentSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/font/static/InstrumentSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sysbreeze.com"),
  title: {
    default: "Sysbreeze | Business Consulting, IT Services & Training",
    template: "%s"
  },
  description: "Sysbreeze is a future-focused business consulting, IT services, and training company dedicated to helping brands grow, businesses scale, and professionals build real-world skills.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["Business Consulting", "IT Services", "Professional Training", "Branding", "Digital Marketing", "HR Management", "Web Design"],
  authors: [{ name: "Sysbreeze" }],
  creator: "Sysbreeze",
  publisher: "Sysbreeze",
  alternates: {
    canonical: "https://www.sysbreeze.com",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: {
      default: "Sysbreeze | Business Consulting, IT Services & Training",
      template: "%s"
    },
    description: "Helping brands grow, businesses scale, and professionals build real-world skills.",
    url: "https://www.sysbreeze.com",
    siteName: "Sysbreeze",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.sysbreeze.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Sysbreeze Technologies - IT Services & Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Sysbreeze | Business Consulting, IT Services & Training",
      template: "%s"
    },
    description: "Helping brands grow, businesses scale, and professionals build real-world skills.",
    images: ["https://www.sysbreeze.com/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.sysbreeze.com/#organization",
        "name": "Sysbreeze Technologies Pvt. Ltd.",
        "alternateName": [
          "sysbreeze",
          "Sysbreeze"
        ],
        "url": "https://www.sysbreeze.com/",
        "logo": "https://www.sysbreeze.com/Gemini_Generated_Image_2w2muj2w2muj2w2m.png",
        "image": "https://www.sysbreeze.com/Gemini_Generated_Image_2w2muj2w2muj2w2m.png",
        "description": "Sysbreeze Technologies Pvt. Ltd. is a leading IT company in Calicut providing web development, SEO, digital marketing, branding, ERP software, mobile app development, HR solutions, and training programs across Kerala.",
        "email": "info@sysbreeze.com",
        "telephone": "+91-9446621444",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "B1 Floor, Neospace, Kinfra Techno Industrial Park, Kakkanchery",
          "addressLocality": "Calicut",
          "addressRegion": "Kerala",
          "postalCode": "673635",
          "addressCountry": "IN"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "foundingDate": "2012",
        "sameAs": [
          "https://www.instagram.com/sysbreeze/",
          "https://www.facebook.com/sysbreeze/",
          "https://www.linkedin.com/company/sysbreeze-technologies/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.sysbreeze.com/#website",
        "url": "https://www.sysbreeze.com/",
        "name": "sysbreeze",
        "publisher": {
          "@id": "https://www.sysbreeze.com/#organization"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.sysbreeze.com/#service",
        "name": "Sysbreeze Technologies",
        "url": "https://www.sysbreeze.com/",
        "image": "https://www.sysbreeze.com/logo.jpeg",
        "priceRange": "$$",
        "telephone": "+91-9446621444",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kinfra Techno Industrial Park, Kakkanchery",
          "addressLocality": "Calicut",
          "addressRegion": "Kerala",
          "postalCode": "673635",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "11.2588",
          "longitude": "75.7804"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "IT & Digital Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Website Design & Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Marketing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERP Software Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobile Application Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Branding Services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "HR Management Solutions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Training Programs"
              }
            }
          ]
        }
      },
      {
        "@type": "SiteNavigationElement",
        "name": [
          "Home",
          "About Us",
          "Services",
          "Trainings",
          "Careers",
          "Contact"
        ],
        "url": [
          "https://www.sysbreeze.com/",
          "https://www.sysbreeze.com/about",
          "https://www.sysbreeze.com/services",
          "https://www.sysbreeze.com/trainings",
          "https://www.sysbreeze.com/careers",
          "https://www.sysbreeze.com/contact-us"
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XH7X54N7GJ"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XH7X54N7GJ');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body
        className={`${instrumentSans.variable} antialiased relative overflow-x-hidden w-full`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
