export function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function getMetaCookies(): { fbp?: string; fbc?: string } {
  if (typeof document === 'undefined') return {};
  const cookies = document.cookie.split(';').reduce<Record<string, string>>((acc, c) => {
    const idx = c.indexOf('=');
    if (idx > 0) acc[c.slice(0, idx).trim()] = c.slice(idx + 1).trim();
    return acc;
  }, {});
  return { fbp: cookies['_fbp'], fbc: cookies['_fbc'] };
}

export async function sendMetaCAPIEvent(params: {
  event_name: string;
  event_id: string;
  event_source_url?: string;
  user_data?: { fbp?: string; fbc?: string; em?: string; ph?: string };
  custom_data?: Record<string, unknown>;
}): Promise<void> {
  try {
    await fetch('/api/meta-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...params,
        event_source_url: params.event_source_url ?? window.location.href,
      }),
    });
  } catch {
    // Silently fail — never block UX for analytics
  }
}
