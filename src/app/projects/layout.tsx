import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Portfolio – Case Studies | ZyFlux",
  description:
    "Browse ZyFlux's portfolio of 20+ successful projects including Dainik Nirnayak, SparksFly, MissCallPay, and more. Real results for real businesses.",
  alternates: {
    canonical: "https://zyflux.com/projects",
  },
  openGraph: {
    title: "Projects & Portfolio – Case Studies | ZyFlux",
    description:
      "20+ successful projects by ZyFlux including Dainik Nirnayak, SparksFly, MissCallPay, and more.",
    url: "https://zyflux.com/projects",
  },
  twitter: {
    title: "Projects & Portfolio – Case Studies | ZyFlux",
    description:
      "20+ successful projects by ZyFlux including Dainik Nirnayak, SparksFly, MissCallPay, and more.",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
