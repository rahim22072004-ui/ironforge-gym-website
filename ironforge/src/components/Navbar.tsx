"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { Close, Menu } from "./ui/Icons";
import { navLinks, site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const panelRef = useRef<HTMLDivElement>(null);

  // Solidify the bar once the hero starts scrolling away.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock scroll + trap focus while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ember focus:px-5 focus:py-3 focus:font-display focus:text-sm focus:font-bold focus:uppercase focus:tracking-widest focus:text-ink"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "border-b border-white/10 bg-ink/80 backdrop-blur-xl py-2.5"
            : "border-b border-transparent bg-gradient-to-b from-black/60 to-transparent py-4"
        }`}
      >
        <Container className="flex items-center justify-between gap-6">
          <Link
            href="#home"
            aria-label={`${site.fullName} — back to top`}
            className="group flex items-center gap-2.5"
          >
            <span
              aria-hidden="true"
              className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-[10px] bg-ember text-ink"
            >
              <span className="font-display text-[1.15rem] font-extrabold leading-none">
                IF
              </span>
            </span>
            <span className="font-display text-[1.45rem] font-extrabold uppercase leading-none tracking-[0.16em] text-white">
              Iron<span className="text-ember">forge</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-active={active === link.href}
                    aria-current={active === link.href ? "page" : undefined}
                    className="link-underline font-display text-[0.95rem] font-semibold uppercase tracking-[0.18em] text-white/75 transition-colors duration-300 hover:text-white data-[active=true]:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Button href="#membership">Join Now</Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </Container>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        className={`fixed inset-0 z-[60] flex flex-col bg-ink/97 backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 sm:px-8">
          <span className="font-display text-[1.4rem] font-extrabold uppercase tracking-[0.16em]">
            Iron<span className="text-ember">forge</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white"
          >
            <Close className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pt-6 sm:px-8">
          <ul className="flex flex-col">
            {navLinks.map((link, i) => (
              <li key={link.href} className="border-b border-white/8">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-5 font-display text-[2rem] font-bold uppercase leading-none tracking-wide text-white"
                >
                  <span className="text-[0.7rem] tracking-[0.3em] text-ember">
                    0{i + 1}
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-3 pb-10">
            <Button href="#membership" size="lg" className="w-full" onClick={() => setOpen(false)}>
              Join Now
            </Button>
            <p className="pt-2 text-sm text-muted">
              {site.address}
              <br />
              <a href={site.phoneHref} className="text-white hover:text-ember">
                {site.phone}
              </a>
            </p>
          </div>
        </nav>
      </div>

      {/* Sticky mobile conversion bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/90 px-4 py-3 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          scrolled && !open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-white">
              First week free
            </p>
            <p className="truncate text-xs text-muted">No contract. Cancel anytime.</p>
          </div>
          <Button href="#membership">Join Now</Button>
        </div>
      </div>
    </>
  );
}
