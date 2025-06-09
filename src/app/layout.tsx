import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

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
  description: "ZyFlux delivers innovative solutions in AI, Web Development, Mobile Apps, and UI/UX design.",
  keywords: ["ZyFlux", "AI", "Smart Tech", "Web Development", "UI UX", "Mobile App"],
  metadataBase: new URL("https://www.zyflux.in"), // Replace with your domain
  openGraph: {
    title: "ZyFlux – Smart Tech & AI Solutions",
    description: "Explore AI-powered digital services from ZyFlux including web, mobile, and design.",
    url: "https://www.zyflux.in",
    siteName: "ZyFlux",
    images: [
      {
        url: "https://www.zyflux.in//og-image.jpg", // Replace with your image URL
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
    creator: "@zyflux", // Replace with your handle
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4ab9a9" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ZyFlux",
              url: "https://www.zyflux.in/",
              logo: "https://https://www.zyflux.in/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/zyflux",
                "https://twitter.com/zyflux",
                "https://instagram.com/zyflux",
              ],
            }),
          }}
        />

        {children}
        <CTASection />
        <Footer />
      </body>
    </html>
  );
}
