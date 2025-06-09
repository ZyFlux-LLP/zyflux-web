"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {X, Calendar, Home, Briefcase, FolderOpen, User, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Calendly popup widget interface
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: {
        url: string;
        utm?: Record<string, string>;
        prefill?: Record<string, string>;
        text?: string;
        color?: string;
        textColor?: string;
        branding?: boolean;
      }) => void;
      closePopupWidget: () => void;
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        utm?: Record<string, string>;
        prefill?: Record<string, string>;
      }) => void;
    };
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const CALENDLY_URL = "https://calendly.com/zyflux-info/30min";

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Projects", href: "/projects", icon: FolderOpen },
    { name: "About", href: "/about", icon: User },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setIsCalendlyLoaded(true);
    document.head.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
      if (existingScript) existingScript.remove();
      if (existingLink) existingLink.remove();
    };
  }, []);

  const handleScheduleMeeting = () => {
    if (isCalendlyLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: CALENDLY_URL,
        utm: {
          utmCampaign: "Website Button",
          utmSource: "Navbar",
          utmMedium: "website",
        },
        text: "Schedule time with me",
        color: "#9333ea",
        textColor: "#ffffff",
        branding: true,
      });
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  };

  return (
    <>
      {/* Traditional navbar for larger screens */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:block hidden ${
          scrollY > 50 ? "bg-black/90 backdrop-blur-lg border-b border-gray-800" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/assets/logo3.png"
                  alt="ZyFlux Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
                <span className="text-2xl font-bold text-white">
                  ZyFlux
                </span>
              </Link>
            </div>

              <div className="flex items-center gap-8">
              {/* Lamp-style navigation - centered */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/5 border border-gray-700 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors ${
                        isActive 
                          ? "text-[#4ab9a9]" 
                          : "text-gray-300 hover:text-[#4ab9a9]"
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="lamp-desktop"
                          className="absolute inset-0 w-full bg-[#4ab9a9]/20 rounded-full -z-10"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        >
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full">
                            <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                            <div className="absolute w-8 h-6 bg-white/20 rounded-full blur-md -top-1" />
                            <div className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2" />
                          </div>
                        </motion.div>
                      )}
                    </Link>
                  );
                })}
              </div>

              <button
                onClick={handleScheduleMeeting}
                className="inline-flex items-center gap-2 border border-white bg-transparent text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-label="Schedule a meeting with our team"
              >
                <Calendar className="w-4 h-4" />
                Schedule a meet
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile lamp navigation at bottom */}
      <div className="md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-6">
        <div className="flex items-center gap-2 bg-black/80 border border-gray-700 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative cursor-pointer text-sm font-semibold px-3 py-3 rounded-full transition-colors ${
                  isActive 
                    ? "text-[#4ab9a9]" 
                    : "text-gray-300 hover:text-[#4ab9a9]"
                }`}
              >
                <Icon size={16} strokeWidth={2.5} />
                {isActive && (
                  <motion.div
                    layoutId="lamp-mobile"
                    className="absolute inset-0 w-full bg-[#4ab9a9]/20 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-white rounded-t-full">
                      <div className="absolute w-8 h-4 bg-white/20 rounded-full blur-md -top-1 -left-1" />
                      <div className="absolute w-6 h-4 bg-white/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-3 h-3 bg-white/20 rounded-full blur-sm top-0 left-1.5" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
          
          {/* Schedule button integrated in the same bar */}
          <button
            onClick={handleScheduleMeeting}
            className="relative cursor-pointer text-sm font-semibold px-3 py-3 rounded-full transition-colors text-gray-300 hover:text-white"
            aria-label="Schedule a meeting with our team"
          >
            <Calendar size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Mobile hamburger menu (fallback) */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
            
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <button
              onClick={() => {
                handleScheduleMeeting();
                setIsMenuOpen(false);
              }}
              className="inline-flex items-center gap-2 border border-white bg-transparent text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200"
              aria-label="Schedule a meeting with our team"
            >
              <Calendar className="w-5 h-5" />
              Schedule a meet
            </button>
          </div>
        </div>
      )}
    </>
  );
}