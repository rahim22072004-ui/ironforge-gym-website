import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";
import SectionHeading from "./ui/SectionHeading";
import { ArrowUpRight, Check } from "./ui/Icons";

const pillars = [
  "Coaches who know your name and your numbers",
  "Equipment maintained to competition standard",
  "Programs written for your body, not a template",
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Visual */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-white/10">
              <Image
                src="/images/gym-interior.webp"
                alt="Wide view of the IRONFORGE training floor with premium equipment and ambient lighting"
                width={1600}
                height={897}
                loading="lazy"
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
              />
            </div>

            <div className="glass absolute -bottom-6 -right-2 rounded-2xl px-6 py-5 sm:-right-6 sm:px-8">
              <span className="display block text-[2.5rem] leading-none text-ember">15+</span>
              <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.22em] text-white/70">
                Years of
                <br />
                coaching
              </span>
            </div>

            <div
              aria-hidden="true"
              className="absolute -left-6 -top-6 -z-10 hidden h-40 w-40 rounded-2xl border border-ember/30 lg:block"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              id="about-title"
              eyebrow="About IRONFORGE"
              title={
                <>
                  More than a gym.
                  <br />
                  <span className="text-ember">A stronger you.</span>
                </>
              }
              intro="IRONFORGE was built by coaches who were tired of gyms that sell memberships instead of results. We combine expert coaching, modern equipment, structured programming and a community that shows up — so every session moves you forward."
            />

            <p className="reveal mt-5 max-w-2xl leading-relaxed text-muted">
              Whether you are lifting for the first time or chasing a competition
              total, you get a clear plan, honest feedback and a floor that is
              genuinely worth training on.
            </p>

            <ul className="reveal mt-8 space-y-3.5">
              {pillars.map((item) => (
                <li key={item} className="flex items-start gap-3.5 text-white/85">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ember/15 text-ember">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="reveal mt-10">
              <Button href="#trainers" size="lg">
                Discover Our Story
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
