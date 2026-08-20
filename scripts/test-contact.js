// Simple test script for local testing of /api/contact
// Usage: set env vars in the shell, run `node scripts/test-contact.js`

const http = require("http");
const fetch = global.fetch || require("node-fetch");

async function main() {
  const url =
    process.env.TEST_CONTACT_URL || "http://localhost:3000/api/contact";
  const payload = {
    name: process.env.TEST_NAME || "Local Test",
    email: process.env.TEST_EMAIL || "test@example.com",
    message: process.env.TEST_MESSAGE || "Hello from local test",
  };

  console.log("POST", url);
  console.log("Payload", payload);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const text = await res.text();
    console.log("Status:", res.status);
    console.log("Response body:", text);
  } catch (err) {
    console.error("Request failed:", err);
  }
}

main();
