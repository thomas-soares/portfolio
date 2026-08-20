import { NextResponse } from "next/server";

// Minimal webhook endpoint for WhatsApp Cloud API
// - GET: verification (hub.challenge)
// - POST: receives events and forwards statuses to Google Sheets webhook if configured

export async function GET(req: Request) {
  const url = new URL(req.url);
  const challenge =
    url.searchParams.get("hub.challenge") || url.searchParams.get("challenge");
  const token =
    url.searchParams.get("hub.verify_token") ||
    url.searchParams.get("verify_token");
  const expected = process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN;
  if (token && expected && token === expected && challenge) {
    return new Response(challenge, { status: 200 });
  }
  return NextResponse.json(
    { ok: false, message: "verification failed" },
    { status: 400 },
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Optional: forward statuses to Google Sheets webhook
    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK;
    if (sheetsWebhook) {
      // Extract statuses array if present
      const entries = body?.entry ?? [];
      for (const e of entries) {
        const changes = e?.changes ?? [];
        for (const c of changes) {
          const value = c?.value;
          const statuses = value?.statuses ?? [];
          for (const s of statuses) {
            // Send a compact record to sheets
            const record = {
              timestamp: s.timestamp ?? new Date().toISOString(),
              id: s.id ?? null,
              status: s.status ?? null,
              recipient_id: s.recipient_id ?? null,
              error: s.errors ? JSON.stringify(s.errors) : null,
            };
            // fire and forget
            fetch(sheetsWebhook, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(record),
            }).catch(() => null);
          }
        }
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: String(err?.message ?? err) },
      { status: 500 },
    );
  }
}
