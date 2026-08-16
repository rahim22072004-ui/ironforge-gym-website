import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { Check } from "./ui/Icons";
import { pricing } from "@/data/site";

export default function Pricing() {
  return (
    <section
      id="membership"
      aria-labelledby="membership-title"
      className="py-20 sm:py-28 lg:py-36"
    >
      <Container>
        <SectionHeading
          id="membership-title"
          eyebrow="Membership"
          align="center"
          title={
            <>
              Choose the plan that
              <br />
              <span className="text-ember">matches your ambition.</span>
            </>
          }
          intro="No joining fee. No lock-in contract. Switch or cancel your plan any time."
        />

        <ul className="mt-14 grid items-stretch gap-6 lg:mt-20 lg:grid-cols-3">
          {pricing.map((plan, i) => (
            <li
              key={plan.name}
              data-reveal-index={i}
              className={`reveal relative flex flex-col rounded-[var(--radius-card)] border p-8 transition-all duration-500 sm:p-9 ${
                plan.featured
                  ? "border-ember/60 bg-gradient-to-b from-ember/12 to-charcoal-2 shadow-[0_30px_80px_-40px_rgba(255,77,20,0.7)] lg:-translate-y-4 lg:scale-[1.02]"
                  : "border-white/10 bg-charcoal-2 hover:-translate-y-1 hover:border-white/25"
              }`}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-8 rounded-full bg-ember px-4 py-1 font-display text-[0.68rem] font-bold uppercase tracking-[0.2em] text-ink">
                  Most Popular
                </span>
              ) : null}

              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
                {plan.name}
              </h3>

              <p className="mt-5 flex items-end gap-1.5">
                <span className="display text-[3.4rem] leading-none text-white">
                  <span className="align-top text-[1.6rem]">$</span>
                  {plan.price}
                </span>
                <span className="pb-2 text-sm text-muted">{plan.period}</span>
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted">{plan.summary}</p>

              <ul className="mt-8 flex-1 space-y-3.5 border-t border-white/10 pt-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white/85">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        plan.featured ? "bg-ember text-ink" : "bg-white/10 text-ember"
                      }`}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                size="lg"
                variant={plan.featured ? "primary" : "outline"}
                className="mt-9 w-full"
              >
                Choose Plan
              </Button>
            </li>
          ))}
        </ul>

        <p className="reveal mt-10 text-center text-xs text-muted">
          Demo pricing for this preview build — replace with the club&rsquo;s real
          membership rates before launch.
        </p>
      </Container>
    </section>
  );
}
