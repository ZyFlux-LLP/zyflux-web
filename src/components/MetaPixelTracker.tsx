"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (command: string, eventName: string, ...args: unknown[]) => void;
  }
}

const MetaPixelTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof window.fbq !== "function") return;

    // Track a PageView on every route change
    window.fbq("track", "PageView");
  }, [pathname]);

  return null;
};

export default MetaPixelTracker;
