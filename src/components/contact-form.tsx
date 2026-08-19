"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorText, setErrorText] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorText("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Request failed");

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      setErrorText(err?.message || "Unknown error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-xl">
      <div>
        <label className="block text-sm font-medium text-(--muted)">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-(--muted)">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-(--muted)">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex items-center rounded-full bg-(--accent-cyan) px-4 py-2 text-sm font-semibold text-black"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send message"}
        </button>
      </div>

      {status === "success" && (
        <p className="text-sm text-(--accent-green)">Message sent — thanks!</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">Error: {errorText}</p>
      )}
    </form>
  );
}
