"use client";

import { useEffect } from "react";

/**
 * Tiny progressive-enhancement layer (~1 KB): adds the `js` class so reveal
 * elements can start hidden only when JS is available, then fades them in once
 * with a single IntersectionObserver. No animation library, no scroll listener.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) return;

    root.classList.add("js");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const index = Number(el.dataset.revealIndex ?? 0);
          el.style.transitionDelay = `${Math.min(index, 5) * 70}ms`;
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    for (const el of elements) {
      // Anything already in view on load reveals immediately (no flash).
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    }

    return () => {
      observer.disconnect();
      root.classList.remove("js");
    };
  }, []);

  return null;
}
