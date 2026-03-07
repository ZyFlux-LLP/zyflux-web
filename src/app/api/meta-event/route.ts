import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const PIXEL_IDS = ['886943537093460', '1544488779907774'];
const CAPI_VERSION = 'v19.0';

function sha256(value: string): string {
  return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

export async function POST(request: NextRequest) {
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  if (!token) {
    return NextResponse.json({ error: 'CAPI token not configured' }, { status: 500 });
  }

  const body = await request.json();
  const { event_name, event_id, event_source_url, user_data = {}, custom_data } = body;

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    '';
  const ua = request.headers.get('user-agent') || '';

  const eventPayload: Record<string, unknown> = {
    event_name,
    event_time: Math.floor(Date.now() / 1000),
    event_id,
    event_source_url,
    action_source: 'website',
    user_data: {
      client_ip_address: ip,
      client_user_agent: ua,
      ...(user_data.fbp && { fbp: user_data.fbp }),
      ...(user_data.fbc && { fbc: user_data.fbc }),
      ...(user_data.em && { em: sha256(user_data.em) }),
      ...(user_data.ph && { ph: sha256(user_data.ph) }),
    },
  };

  if (custom_data) eventPayload.custom_data = custom_data;

  await Promise.allSettled(
    PIXEL_IDS.map((pixelId) =>
      fetch(
        `https://graph.facebook.com/${CAPI_VERSION}/${pixelId}/events?access_token=${token}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data: [eventPayload] }),
        }
      )
    )
  );

  return NextResponse.json({ ok: true });
}
