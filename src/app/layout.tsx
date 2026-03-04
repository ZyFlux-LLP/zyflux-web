import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import MetaPixelTracker from "@/components/MetaPixelTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZyFlux – AI & Smart Tech Solutions | Web, App & AI Development",
  description:
    "ZyFlux partners with ambitious businesses to accelerate growth through AI, web development, mobile apps, and UI/UX design. Based in Navi Mumbai. Book a free consultation.",
  keywords: ["ZyFlux", "AI Solutions", "Smart Tech", "Web Development", "App Development", "UI UX", "Mobile App", "Digital Marketing", "Navi Mumbai"],
  metadataBase: new URL("https://zyflux.com"),
  alternates: {
    canonical: "https://zyflux.com",
  },
  openGraph: {
    title: "ZyFlux – AI & Smart Tech Solutions | Web, App & AI Development",
    description:
      "ZyFlux partners with ambitious businesses to accelerate growth through AI, web development, mobile apps, and UI/UX design. Based in Navi Mumbai.",
    url: "https://zyflux.com",
    siteName: "ZyFlux",
    images: [
      {
        url: "/assets/logo3.png",
        width: 1200,
        height: 630,
        alt: "ZyFlux – AI & Smart Tech Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZyFlux – AI & Smart Tech Solutions | Web, App & AI Development",
    description: "AI, Web, Mobile, UI/UX — All under one roof at ZyFlux. Based in Navi Mumbai.",
    creator: "@zyflux_com",
    images: ["/assets/logo3.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4ab9a9" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PKCT5G38');`,
          }}
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["Organization", "LocalBusiness"],
                  "@id": "https://zyflux.com/#organization",
                  name: "ZyFlux",
                  url: "https://zyflux.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://zyflux.com/assets/logo3.png",
                  },
                  description: "AI, web, mobile & digital marketing agency based in Navi Mumbai.",
                  email: "team@zyflux.com",
                  telephone: "+917021309381",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "H-3/1001 Valley Shilp CHS, Kharghar Sec-36",
                    addressLocality: "Navi Mumbai",
                    postalCode: "410210",
                    addressCountry: "IN",
                  },
                  sameAs: [
                    "https://www.linkedin.com/company/zyflux",
                    "https://twitter.com/zyflux_com",
                    "https://instagram.com/zyflux_com",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://zyflux.com/#website",
                  url: "https://zyflux.com",
                  name: "ZyFlux",
                  publisher: { "@id": "https://zyflux.com/#organization" },
                },
              ],
            }),
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKCT5G38"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        {children}
        <CTASection />
        <MetaPixelTracker />
        <Footer />

      </body>
    </html>
  );
}
