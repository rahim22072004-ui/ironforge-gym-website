import Link from "next/link";
import Container from "./ui/Container";
import { Facebook, Instagram, Mail, MapPin, Phone, XSocial, YouTube } from "./ui/Icons";
import { navLinks, programs, site } from "@/data/site";

const socials = [
  { Icon: Instagram, label: "IRONFORGE on Instagram" },
  { Icon: Facebook, label: "IRONFORGE on Facebook" },
  { Icon: XSocial, label: "IRONFORGE on X" },
  { Icon: YouTube, label: "IRONFORGE on YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-ink">
      {/* Extra bottom padding clears the sticky mobile CTA bar. */}
      <Container className="py-16 pb-28 sm:py-20 lg:pb-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="grid h-9 w-9 place-items-center rounded-[10px] bg-ember text-ink"
              >
                <span className="font-display text-[1.15rem] font-extrabold leading-none">
                  IF
                </span>
              </span>
              <span className="font-display text-[1.45rem] font-extrabold uppercase leading-none tracking-[0.16em] text-white">
                Iron<span className="text-ember">forge</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs leading-relaxed text-muted">
              {site.tagline} A premium strength and conditioning club built around
              coaching, community and measurable progress.
            </p>

            <ul className="mt-7 flex gap-3">
              {socials.map(({ Icon, label }) => (
                <li key={label}>
                  <a
                    href="#home"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-ember hover:bg-ember hover:text-ink"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <nav aria-labelledby="footer-links">
            <h2
              id="footer-links"
              className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-white"
            >
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${link.href}`}
                    className="text-muted transition-colors duration-300 hover:text-ember"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Programs */}
          <nav aria-labelledby="footer-programs">
            <h2
              id="footer-programs"
              className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-white"
            >
              Programs
            </h2>
            <ul className="mt-5 space-y-3">
              {programs.map((program) => (
                <li key={program.slug}>
                  <Link
                    href={`/programs/${program.slug}`}
                    className="text-muted transition-colors duration-300 hover:text-ember"
                  >
                    {program.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-white">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-muted">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                <a href={site.phoneHref} className="transition-colors hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 space-y-1 text-sm text-muted">
              {site.hours.map((h) => (
                <p key={h.days}>
                  <span className="text-white/80">{h.days}:</span> {h.time}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/8 pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 IronForge Fitness. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/" className="transition-colors hover:text-ember">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="transition-colors hover:text-ember">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
