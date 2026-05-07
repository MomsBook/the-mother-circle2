"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setSuccess(true);
      setEmail("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-2xl border border-[#ead8d1] p-4"
        required
      />

      <button
        type="submit"
        className="w-full rounded-2xl bg-[#b87b6a] px-6 py-4 font-semibold text-white"
      >
        Subscribe
      </button>

      {success && (
        <p className="text-sm text-green-600">
          Thank you for subscribing!
        </p>
      )}
    </form>
  );
}