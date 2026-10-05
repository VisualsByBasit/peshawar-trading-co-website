"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

const INTERESTS = ["General enquiry", "Buying a specific car", "Price and shipping quote", "Source a car for me", "Trucks, buses and machinery"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") || "";
    const phone = data.get("phone") || "";
    const email = data.get("email") || "";
    const interest = data.get("interest") || "General enquiry";
    const message = data.get("message") || "";

    const subject = `Website enquiry — ${interest}`;
    const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nInterest: ${interest}\n\nMessage:\n${message}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    form.reset();
  }

  return (
    <div className="form-card">
      <h2>Send us a message</h2>
      <p className="form-lead">Fill out the form and we&apos;ll get back to you &mdash; or message us directly on WhatsApp for a faster reply.</p>

      <div className={`form-success${submitted ? " show" : ""}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>
        Thanks! Your email app should have opened with your message ready to send.
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="field">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="+1 234 567 8900" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="you@example.com" required />
        </div>
        <div className="field">
          <label htmlFor="interest">I&apos;m Interested In</label>
          <select id="interest" name="interest" defaultValue="General enquiry">
            {INTERESTS.map((label) => (
              <option key={label}>{label}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Tell us what you're looking for..." required />
        </div>
        <button type="submit" className="btn btn--gold btn--block">Send Message</button>
        <p className="form-note">By submitting, your email client will open with a pre-filled message to {SITE.email}.</p>
      </form>
    </div>
  );
}
