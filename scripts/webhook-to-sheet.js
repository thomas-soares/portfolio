// Simple script to POST a status record to a Google Sheets webhook URL
// Usage: set SHEETS_WEBHOOK env var and run `node scripts/webhook-to-sheet.js`

const fetch = global.fetch || require("node-fetch");

async function main() {
  const webhook =
    process.env.SHEETS_WEBHOOK || process.env.GOOGLE_SHEETS_WEBHOOK;
  if (!webhook) {
    console.error("Set SHEETS_WEBHOOK or GOOGLE_SHEETS_WEBHOOK env var");
    process.exit(1);
  }
  const sample = {
    timestamp: Math.floor(Date.now() / 1000),
    id: "wamid.sampleid",
    status: "delivered",
    recipient_id: "+5511999999999",
    error: null,
  };
  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sample),
  });
  console.log("sent, status", res.status);
}

main().catch(console.error);
