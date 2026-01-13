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
  title: "ZyFlux – Smart Tech & AI Solutions",
  description:
    "ZyFlux delivers innovative solutions in AI, Web Development, Mobile Apps, and UI/UX design.",
  keywords: ["ZyFlux", "AI", "Smart Tech", "Web Development", "UI UX", "Mobile App"],
  metadataBase: new URL("https://www.zyflux.in"),
  openGraph: {
    title: "ZyFlux – Smart Tech & AI Solutions",
    description:
      "Explore AI-powered digital services from ZyFlux including web, mobile, and design.",
    url: "https://www.zyflux.in",
    siteName: "ZyFlux",
    images: [
      {
        url: "https://www.zyflux.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZyFlux Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZyFlux – Smart Tech & AI Solutions",
    description: "AI, Web, Mobile, UI/UX — All under one roof at ZyFlux.",
    creator: "@zyflux",
    images: ["https://www.zyflux.in/og-image.jpg"],
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
              "@type": "Organization",
              name: "ZyFlux",
              url: "https://www.zyflux.in/",
              logo: "https://www.zyflux.in/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/zyflux",
                "https://twitter.com/zyflux_com",
                "https://instagram.com/zyflux_com",
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

              // Pixel 1
              fbq('init', '886943537093460');

              // Pixel 2
              fbq('init', '1544488779907774');

              // Fire PageView for all initialised pixels
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=886943537093460&ev=PageView&noscript=1"
            />
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1544488779907774&ev=PageView&noscript=1"
            />
          </>
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
