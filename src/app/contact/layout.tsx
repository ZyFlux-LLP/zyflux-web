import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ZyFlux – Book a Free Consultation",
  description:
    "Ready to transform your business? Contact ZyFlux at team@zyflux.com or +91 7021309381. Response within 2 hours. Free strategy session included.",
  alternates: {
    canonical: "https://zyflux.com/contact",
  },
  openGraph: {
    title: "Contact ZyFlux – Book a Free Consultation",
    description:
      "Contact ZyFlux at team@zyflux.com or +91 7021309381. Response within 2 hours. Free strategy session included.",
    url: "https://zyflux.com/contact",
  },
  twitter: {
    title: "Contact ZyFlux – Book a Free Consultation",
    description:
      "Contact ZyFlux at team@zyflux.com or +91 7021309381. Response within 2 hours. Free strategy session included.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
