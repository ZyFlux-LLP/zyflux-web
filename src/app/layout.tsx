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

        {/* ------------ META PIXEL CODE ------------- */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '886943537093460');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            alt=""
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=886943537093460&ev=PageView&noscript=1"
          />
        </noscript>
        {/* ------------------------------------------ */}
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <CTASection />
        {/* Tracks route-change pageviews – make sure it only calls fbq('track', 'PageView') */}
        <MetaPixelTracker />
        <Footer />
      </body>
    </html>
  );
}
