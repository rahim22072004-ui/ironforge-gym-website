"use client";

import { useEffect, useState } from "react";
import { Phone } from "./ui/Icons";
import { site } from "@/data/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.9.53 3.68 1.45 5.2L2 22l5.1-1.6a9.8 9.8 0 0 0 4.94 1.32h.01c5.43 0 9.84-4.4 9.84-9.84A9.79 9.79 0 0 0 12.04 2Zm0 17.9h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.02.95.96-2.95-.2-.31a8.14 8.14 0 0 1-1.25-4.35c0-4.51 3.68-8.18 8.2-8.18 2.19 0 4.24.85 5.79 2.4a8.13 8.13 0 0 1 2.4 5.79c0 4.51-3.68 8.18-8.2 8.18Zm4.5-6.13c-.25-.12-1.46-.72-1.68-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06a6.7 6.7 0 0 1-1.97-1.21 7.4 7.4 0 0 1-1.36-1.7c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.09-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.73 2.64 4.2 3.7.58.26 1.04.41 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.17-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

/**
 * Floating call + WhatsApp buttons. They appear once the visitor is past the
 * hero, and sit above the sticky mobile CTA bar so nothing overlaps.
 */
export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <div
      className={`fixed right-4 bottom-24 z-40 flex flex-col gap-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:right-6 lg:bottom-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={site.phoneHref}
        aria-label={`Call ${site.fullName} on ${site.phone}`}
        className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-ink/85 text-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.9)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-ember hover:bg-ember hover:text-ink lg:h-13 lg:w-13"
      >
        <Phone className="h-5 w-5" />
      </a>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message IRONFORGE on WhatsApp"
        className="group grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-ink shadow-[0_10px_30px_-10px_rgba(37,211,102,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 lg:h-13 lg:w-13"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
