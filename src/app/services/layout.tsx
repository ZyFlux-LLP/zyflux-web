import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services – Web, App, AI & Digital Marketing | ZyFlux",
  description:
    "Explore ZyFlux's full-stack services: custom web development, Flutter app development, AI/ML solutions, UI/UX design, graphics, and digital marketing. Get started today.",
  alternates: {
    canonical: "https://zyflux.com/services",
  },
  openGraph: {
    title: "Services – Web, App, AI & Digital Marketing | ZyFlux",
    description:
      "Custom web development, Flutter apps, AI/ML solutions, UI/UX design, graphics, and digital marketing from ZyFlux.",
    url: "https://zyflux.com/services",
  },
  twitter: {
    title: "Services – Web, App, AI & Digital Marketing | ZyFlux",
    description:
      "Custom web development, Flutter apps, AI/ML solutions, UI/UX design, graphics, and digital marketing from ZyFlux.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
