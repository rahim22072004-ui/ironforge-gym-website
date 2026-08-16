import Image from "next/image";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { Instagram, XSocial } from "./ui/Icons";
import { trainers } from "@/data/site";
import { blurPlaceholders } from "@/data/blur";

export default function Trainers() {
  return (
    <section
      id="trainers"
      aria-labelledby="trainers-title"
      className="relative py-20 sm:py-28 lg:py-36"
    >
      <Container>
        <SectionHeading
          id="trainers-title"
          eyebrow="The Team"
          align="center"
          title={
            <>
              Coaches who train
              <br />
              <span className="text-ember">alongside you.</span>
            </>
          }
          intro="Certified, experienced and genuinely invested in your progress — our coaches lead every session from the floor, not from an office."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {trainers.map((trainer, i) => (
            <li
              key={trainer.name}
              data-reveal-index={i}
              className="reveal group relative overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-charcoal-2 transition-colors duration-500 hover:border-ember/40 sm:[&:last-child]:col-span-2 sm:[&:last-child]:mx-auto sm:[&:last-child]:w-full sm:[&:last-child]:max-w-[calc(50%-0.75rem)] lg:[&:last-child]:col-span-1 lg:[&:last-child]:max-w-none"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 92vw"
                  placeholder="blur"
                  blurDataURL={blurPlaceholders[trainer.image]}
                  className="object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(5,6,10,0.9)_100%)]"
                />

                <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
                  {trainer.years}
                </span>

                {/* Social rail — slides in on hover, always reachable by keyboard. */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 focus-within:translate-x-0 focus-within:opacity-100">
                  {[
                    { Icon: Instagram, label: `${trainer.name} on Instagram` },
                    { Icon: XSocial, label: `${trainer.name} on X` },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#trainers"
                      aria-label={label}
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-colors hover:border-ember hover:bg-ember hover:text-ink"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative p-6">
                <span
                  aria-hidden="true"
                  className="absolute left-6 top-0 h-0.5 w-10 bg-ember transition-all duration-500 group-hover:w-20"
                />
                <h3 className="display text-[1.55rem] leading-none text-white">
                  {trainer.name}
                </h3>
                <p className="mt-2.5 text-sm font-medium uppercase tracking-[0.14em] text-ember">
                  {trainer.role}
                </p>
                <p className="mt-3 text-sm text-muted">{trainer.focus}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
