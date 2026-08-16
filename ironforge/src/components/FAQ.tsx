import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { faqs } from "@/data/site";

/**
 * Native <details> accordion: works with zero JavaScript, is keyboard
 * accessible out of the box, and is readable by search engines.
 */
export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="py-20 sm:py-28 lg:py-36"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              id="faq-title"
              eyebrow="Good To Know"
              title={
                <>
                  Questions,
                  <br />
                  <span className="text-ember">answered.</span>
                </>
              }
              intro="Everything people usually ask before their first session. Still unsure about something? Ask us directly — we reply within one business day."
            />
            <div className="reveal mt-8">
              <Button href="#contact" variant="outline">
                Ask a Question
              </Button>
            </div>
          </div>

          <ul className="reveal divide-y divide-white/8 border-y border-white/8">
            {faqs.map((faq) => (
              <li key={faq.question}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left transition-colors duration-300 hover:text-ember [&::-webkit-details-marker]:hidden">
                    <h3 className="font-display text-lg font-semibold uppercase tracking-[0.04em] text-white transition-colors duration-300 group-hover:text-ember group-open:text-ember">
                      {faq.question}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="relative mt-1.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/20 transition-colors duration-300 group-open:border-ember group-open:bg-ember"
                    >
                      <span className="absolute h-px w-2.5 bg-current transition-colors group-open:bg-ink" />
                      <span className="absolute h-2.5 w-px bg-current transition-all duration-300 group-open:scale-y-0 group-open:bg-ink" />
                    </span>
                  </summary>
                  <p className="pb-6 pr-10 leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
