import Image from "next/image";
import Container from "./ui/Container";
import { blurPlaceholders } from "@/data/blur";
import Button from "./ui/Button";
import { ArrowRight } from "./ui/Icons";

const heroStats = [
  { value: "500+", label: "Members" },
  { value: "10+", label: "Expert Trainers" },
  { value: "24/7", label: "Access" },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[92svh] items-end overflow-hidden pb-14 pt-32 sm:pb-20 lg:min-h-screen lg:pb-24"
    >
      {/* Above-the-fold visual: eager, high priority, fixed aspect via fill. */}
      <Image
        src="/images/gym-hero.webp"
        alt="Athlete standing over a loaded barbell in the dimly lit IRONFORGE training hall"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={72}
        placeholder="blur"
        blurDataURL={blurPlaceholders["/images/gym-hero.webp"]}
        // Shift the crop on narrow screens so the athlete stays in frame.
        className="-z-10 object-cover object-[66%_center] sm:object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,6,10,0.82)_0%,rgba(5,6,10,0.35)_38%,rgba(5,6,10,0.88)_82%,#05060a_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_18%_75%,rgba(255,77,20,0.22),transparent_60%)]"
      />

      <Container>
        <div className="max-w-3xl">
          <p className="eyebrow reveal flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-ember" />
            Premium Strength Club · Est. 2011
          </p>

          <h1
            id="hero-title"
            className="display reveal mt-6 text-[clamp(3rem,12vw,7.5rem)]"
          >
            Train Hard.
            <br />
            <span className="text-ember">Live Strong.</span>
          </h1>

          <p className="reveal mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Push your limits, build your strength, and become the strongest
            version of yourself.
          </p>

          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button href="#membership" size="lg">
              Start Your Journey
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
            <Button href="#programs" variant="outline" size="lg">
              View Programs
            </Button>
          </div>

          <dl className="reveal mt-14 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md">
            {heroStats.map((s) => (
              <div key={s.label} className="bg-ink/60 px-4 py-5 text-center sm:px-6">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="display block text-[1.75rem] leading-none text-white sm:text-4xl">
                    {s.value}
                  </span>
                  <span className="mt-2 block text-[0.68rem] uppercase tracking-[0.18em] text-muted sm:text-xs">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-8 hidden items-center gap-3 lg:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-white/45">
          Scroll
        </span>
        <span className="relative block h-14 w-px overflow-hidden bg-white/20">
          <span className="absolute inset-x-0 top-0 h-5 animate-[scrollcue_2.2s_ease-in-out_infinite] bg-ember" />
        </span>
      </div>
    </section>
  );
}
