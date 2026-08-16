import Container from "./ui/Container";
import { stats } from "@/data/site";

export default function Stats() {
  return (
    <section
      aria-label="IRONFORGE by the numbers"
      className="border-y border-white/8 bg-charcoal"
    >
      <Container className="py-14 sm:py-16">
        <dl className="grid grid-cols-2 gap-y-10 sm:gap-y-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-reveal-index={i}
              className="reveal flex flex-col-reverse items-center px-2 text-center lg:items-start lg:px-8 lg:text-left lg:[&:not(:last-child)]:border-r lg:[&:not(:last-child)]:border-white/10"
            >
              <dt className="mt-3 text-[0.7rem] uppercase tracking-[0.24em] text-muted sm:text-xs">
                {stat.label}
              </dt>
              <dd className="display text-[2.75rem] leading-none text-white sm:text-[3.5rem]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
