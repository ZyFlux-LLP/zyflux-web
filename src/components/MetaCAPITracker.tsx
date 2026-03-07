"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { generateEventId, getMetaCookies, sendMetaCAPIEvent } from "@/lib/meta-capi";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export default function MetaCAPITracker() {
  const pathname = usePathname();

  useEffect(() => {
    const eventId = generateEventId();
    const cookies = getMetaCookies();

    // Push event_id to dataLayer so GTM Pixel tag can use it for deduplication.
    // In GTM: create a dataLayer variable named "metaEventId" and set it as the
    // "Event ID" field on your Facebook Pixel tag.
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ metaEventId: eventId });

    sendMetaCAPIEvent({
      event_name: "PageView",
      event_id: eventId,
      user_data: cookies,
    });
  }, [pathname]);

  return null;
}
