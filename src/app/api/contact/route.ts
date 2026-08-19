import { NextResponse } from "next/server";

type FormData = {
  name: string;
  email: string;
  message: string;
};

async function sendToGoogleSheetsWebhook(webhookUrl: string, data: FormData) {
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.ok;
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
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.ok;
}

async function sendViaTwilio(
  accountSid: string,
  authToken: string,
  from: string,
  to: string,
  bodyText: string,
) {
  const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
  const form = new URLSearchParams();
  form.append("From", from);
  form.append("To", to);
  form.append("Body", bodyText);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form.toString(),
  });
  return res.ok;
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const { name, email, message } = json as FormData;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const results: Record<string, boolean | string> = {};

    // 1) Google Sheets webhook (e.g., Google Apps Script web app)
    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK;
    if (sheetsWebhook) {
      try {
        const ok = await sendToGoogleSheetsWebhook(sheetsWebhook, {
          name,
          email,
          message,
        });
        results.sheets = ok;
      } catch (err: any) {
        results.sheets = `error:${err?.message || "unknown"}`;
      }
    } else {
      results.sheets = false;
    }

    // 2) WhatsApp Cloud API (Meta)
    const whatsappToken = process.env.WHATSAPP_CLOUD_TOKEN;
    const whatsappPhoneId = process.env.WHATSAPP_CLOUD_PHONE_ID;
    const whatsappTo = process.env.WHATSAPP_TO; // recipient phone in international format
    if (whatsappToken && whatsappPhoneId && whatsappTo) {
      try {
        const ok = await sendViaWhatsAppCloud(
          whatsappToken,
          whatsappPhoneId,
          whatsappTo,
          `New contact form message from ${name} (${email}): ${message}`,
        );
        results.whatsapp_cloud = ok;
      } catch (err: any) {
        results.whatsapp_cloud = `error:${err?.message || "unknown"}`;
      }
    } else {
      results.whatsapp_cloud = false;
    }

    // 3) Twilio WhatsApp (optional)
    const twilioSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioFrom = process.env.TWILIO_WHATSAPP_FROM; // e.g. 'whatsapp:+1415...'
    const twilioTo = process.env.TWILIO_WHATSAPP_TO; // e.g. 'whatsapp:+55...'
    if (twilioSid && twilioToken && twilioFrom && twilioTo) {
      try {
        const ok = await sendViaTwilio(
          twilioSid,
          twilioToken,
          twilioFrom,
          twilioTo,
          `New contact form message from ${name} (${email}): ${message}`,
        );
        results.twilio = ok;
      } catch (err: any) {
        results.twilio = `error:${err?.message || "unknown"}`;
      }
    } else {
      results.twilio = false;
    }

    return NextResponse.json({ ok: true, results });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "unknown" },
      { status: 500 },
    );
  }
}
