import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ZyFlux – Our Story, Team & Values | AI Tech Agency",
  description:
    "Founded by four engineering graduates, ZyFlux is a Navi Mumbai-based tech agency delivering web, mobile, and AI solutions with innovation, quality, and measurable results.",
  alternates: {
    canonical: "https://zyflux.com/about",
  },
  openGraph: {
    title: "About ZyFlux – Our Story, Team & Values | AI Tech Agency",
    description:
      "Navi Mumbai-based tech agency delivering web, mobile, and AI solutions with innovation, quality, and measurable results.",
    url: "https://zyflux.com/about",
  },
  twitter: {
    title: "About ZyFlux – Our Story, Team & Values | AI Tech Agency",
    description:
      "Navi Mumbai-based tech agency delivering web, mobile, and AI solutions with innovation, quality, and measurable results.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
