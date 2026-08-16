"use client";

import { useState, type FormEvent } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { Clock, Mail, MapPin, Phone } from "./ui/Icons";
import { site } from "@/data/site";

const fieldClass =
  "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3.5 text-white placeholder:text-white/35 transition-colors duration-300 hover:border-white/25 focus:border-ember focus:bg-white/[0.06] focus:outline-none";

const labelClass =
  "mb-2 block font-display text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-white/70";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  /**
   * Submissions are delivered straight to the inbox via Web3Forms — no server
   * of our own to run or maintain. The access key is public by design; swap it
   * in src/data/site.ts to change the receiving inbox.
   */
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const payload = new FormData(form);
      payload.append("access_key", site.formAccessKey);
      payload.append("subject", "New enquiry from the IRONFORGE website");
      payload.append("from_name", "IRONFORGE Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const details = [
    { Icon: MapPin, label: "Address", value: site.address },
    { Icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
    { Icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-white/8 bg-charcoal py-20 sm:py-28 lg:py-36"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Details */}
          <div>
            <SectionHeading
              id="contact-title"
              eyebrow="Get In Touch"
              title={
                <>
                  Come train
                  <br />
                  <span className="text-ember">with us.</span>
                </>
              }
              intro="Book a tour, claim a free trial session, or ask us anything about programs and membership."
            />

            <ul className="reveal mt-10 space-y-5">
              {details.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-ember">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block break-words text-white transition-colors hover:text-ember"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 break-words text-white">{value}</p>
                    )}
                  </div>
                </li>
              ))}

              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-ember">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                    Opening Hours
                  </p>
                  <dl className="mt-2 space-y-1.5 text-sm">
                    {site.hours.map((h) => (
                      <div key={h.days} className="flex flex-wrap gap-x-3">
                        <dt className="text-white/70">{h.days}:</dt>
                        <dd className="text-white">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="reveal rounded-[var(--radius-card)] border border-white/10 bg-ink p-6 sm:p-9">
            <h3 className="display text-2xl text-white">Send us a message</h3>
            <p className="mt-2 text-sm text-muted">
              We reply within one business day.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Honeypot — bots fill this, humans never see it. */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Jordan Miller"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@email.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+1 (555) 000-0000"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your goals…"
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <Button
                size="lg"
                className="w-full"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </Button>

              <p aria-live="polite" className="min-h-5 text-sm">
                {status === "sent" && (
                  <span className="text-ember">
                    Thanks — your message has been sent. We&rsquo;ll get back to you
                    within one business day.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-ember">
                    Something went wrong. Please email us directly at {site.email}.
                  </span>
                )}
                {status === "idle" && (
                  <span className="text-muted">
                    We never share your details. No spam — ever.
                  </span>
                )}
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
