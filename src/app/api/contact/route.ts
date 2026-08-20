import { NextResponse } from "next/server";

type FormData = {
  name: string;
  email: string;
  message: string;
};

async function sendToGoogleSheetsWebhook(webhookUrl: string, data: any) {
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return { ok: res.ok, status: res.status };
}

async function sendViaWhatsAppCloud(
  token: string,
  phoneId: string,
  to: string,
  text: string,
) {
  const url = `https://graph.facebook.com/v17.0/${phoneId}/messages`;
  const body = {
    messaging_product: "whatsapp",
    to,
    type: "text",
    text: { body: text },
  };
  // retry a couple times on transient failures
  let lastErr: any = null;
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const json = await res.json().catch(() => null);
      if (res.ok) return { ok: res.ok, status: res.status, body: json };
      // store last error and retry
      lastErr = { ok: res.ok, status: res.status, body: json };
    } catch (err: any) {
      lastErr = err;
    }
    // small delay between attempts
    await new Promise((r) => setTimeout(r, 300 * attempt));
  }
  return { ok: false, status: 0, body: lastErr };
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const { name, email, message } = json as FormData;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const results: Record<string, any> = {};

    // 1) WhatsApp Cloud API (Meta) - send first so we can record message id
    const whatsappToken = process.env.WHATSAPP_CLOUD_TOKEN;
    const whatsappPhoneId = process.env.WHATSAPP_CLOUD_PHONE_ID;
    const whatsappTo = process.env.WHATSAPP_TO; // recipient phone in international format
    let whatsappMessageId: string | null = null;
    if (whatsappToken && whatsappPhoneId && whatsappTo) {
      try {
        const resp = await sendViaWhatsAppCloud(
          whatsappToken,
          whatsappPhoneId,
          whatsappTo,
          `New contact form message from ${name} (${email}): ${message}`,
        );
        results.whatsapp_cloud = resp;
        whatsappMessageId = resp?.body?.messages?.[0]?.id ?? null;
        results.whatsapp_message_id = whatsappMessageId ?? false;
      } catch (err: any) {
        results.whatsapp_cloud = `error:${err?.message || "unknown"}`;
        results.whatsapp_message_id = false;
      }
    } else {
      results.whatsapp_cloud = false;
      results.whatsapp_message_id = false;
    }

    // 2) Google Sheets webhook (e.g., Google Apps Script web app) - include whatsapp id when available
    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK;
    if (sheetsWebhook) {
      try {
        const ok = await sendToGoogleSheetsWebhook(sheetsWebhook, {
          name,
          email,
          message,
          whatsapp_message_id: whatsappMessageId,
        });
        results.sheets = ok;
      } catch (err: any) {
        results.sheets = { error: err?.message || "unknown" };
      }
    } else {
      results.sheets = false;
    }

    return NextResponse.json({ ok: true, results });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "unknown" },
      { status: 500 },
    );
  }
}
