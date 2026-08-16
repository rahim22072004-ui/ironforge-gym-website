import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { Quote, Star } from "./ui/Icons";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section
      id="results"
      aria-labelledby="results-title"
      className="relative overflow-hidden border-y border-white/8 bg-charcoal py-20 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[460px] w-[460px] rounded-full bg-ember/10 blur-[150px]"
      />

      <Container className="relative">
        <SectionHeading
          id="results-title"
          eyebrow="Real Results"
          align="center"
          title={
            <>
              Your goals. Your grind.
              <br />
              <span className="text-ember">Your results.</span>
            </>
          }
          intro="Progress here is measured, not guessed. These are demo testimonials created for this preview build."
        />

        <ul className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <li
              key={t.name}
              data-reveal-index={i}
              className="reveal group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-ink p-8 transition-all duration-500 hover:-translate-y-1 hover:border-ember/40"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <Quote className="h-8 w-8 text-ember/60" />
                  <span className="flex gap-0.5" role="img" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }, (_, s) => (
                      <Star key={s} className="h-4 w-4 text-ember" />
                    ))}
                  </span>
                </div>
                <blockquote className="mt-6 text-[1.05rem] leading-relaxed text-white/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-8 flex items-end justify-between gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="font-display text-lg font-bold uppercase tracking-[0.1em] text-white">
                    {t.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">
                    {t.detail}
                  </p>
                </div>
                <div className="text-right">
                  <p className="display text-[1.9rem] leading-none text-ember">
                    {t.result}
                  </p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                    {t.resultLabel}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
