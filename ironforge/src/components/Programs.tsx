import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { ArrowUpRight } from "./ui/Icons";
import { programs } from "@/data/site";

export default function Programs() {
  return (
    <section
      id="programs"
      aria-labelledby="programs-title"
      className="relative border-t border-white/8 bg-charcoal py-20 sm:py-28 lg:py-36"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="programs-title"
            eyebrow="Our Programs"
            title={
              <>
                Built for every
                <br />
                kind of strength.
              </>
            }
          />
          <p className="reveal max-w-sm text-muted lg:pb-3">
            Four training tracks, one standard of coaching. Start where you are —
            we will handle the progression.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {programs.map((program, i) => (
            <li key={program.title} data-reveal-index={i} className="reveal">
              <Link
                href="#contact"
                aria-label={`${program.title} — learn more`}
                className="group relative block h-full overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-ink transition-colors duration-500 hover:border-ember/50"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,10,0.1)_0%,rgba(5,6,10,0.55)_52%,rgba(5,6,10,0.95)_100%)]"
                  />
                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1 font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
                    0{i + 1}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[0.65rem] uppercase tracking-[0.22em] text-ember">
                    {program.meta}
                  </p>
                  <h3 className="display mt-2.5 text-[1.6rem] leading-tight text-white">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {program.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 font-display text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-white">
                    Learn More
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-white/25 text-white transition-all duration-500 group-hover:border-ember group-hover:bg-ember group-hover:text-ink">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
