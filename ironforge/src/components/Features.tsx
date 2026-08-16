import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { Chart, Clock, Dumbbell, Target, Users, Whistle } from "./ui/Icons";
import { features } from "@/data/site";

const icons = [Whistle, Dumbbell, Target, Users, Chart, Clock];

export default function Features() {
  return (
    <section
      aria-labelledby="features-title"
      className="relative overflow-hidden border-y border-white/8 bg-charcoal py-20 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-ember/10 blur-[140px]"
      />

      <Container className="relative">
        <SectionHeading
          id="features-title"
          eyebrow="Why Choose Us"
          title={
            <>
              Six reasons members
              <br />
              <span className="text-ember">stay for years.</span>
            </>
          }
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <li
                key={feature.number}
                data-reveal-index={i % 3}
                className="reveal group relative bg-charcoal p-8 transition-colors duration-500 hover:bg-charcoal-2 sm:p-9"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-ember transition-all duration-500 group-hover:border-ember/40 group-hover:bg-ember group-hover:text-ink">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-[2.1rem] font-bold leading-none text-white/10 transition-colors duration-500 group-hover:text-ember/35">
                    {feature.number}
                  </span>
                </div>

                <h3 className="display mt-7 text-[1.35rem] leading-tight text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
