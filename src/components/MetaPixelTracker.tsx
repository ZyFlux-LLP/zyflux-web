"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    fbq?: (command: string, eventName: string, ...args: unknown[]) => void;
  }
}

const MetaPixelTracker = () => {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip the first render — the inline script in layout.tsx already fired
    // fbq('track', 'PageView') on initial load. Only fire on subsequent navigation.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (typeof window === "undefined") return;
    if (typeof window.fbq !== "function") return;

    window.fbq("track", "PageView");
  }, [pathname]);

  return null;
};

export default MetaPixelTracker;
