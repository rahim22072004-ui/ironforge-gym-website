import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { ArrowRight } from "./ui/Icons";
import { blurPlaceholders } from "@/data/blur";

export default function CTA() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden">
      <Image
        src="/images/gym-cta-banner.webp"
        alt="Cardio and strength equipment lit by warm accent lighting inside IRONFORGE"
        fill
        loading="lazy"
        sizes="100vw"
        quality={70}
        placeholder="blur"
        blurDataURL={blurPlaceholders["/images/gym-cta-banner.webp"]}
        className="-z-10 object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,6,10,0.9),rgba(5,6,10,0.72))]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(90%_60%_at_50%_50%,rgba(255,77,20,0.22),transparent_65%)]"
      />

      <Container className="py-24 text-center sm:py-28 lg:py-36">
        <p className="eyebrow reveal text-center">Free Trial</p>
        <h2
          id="cta-title"
          className="display reveal mx-auto mt-6 max-w-4xl text-[clamp(2.4rem,7vw,4.75rem)]"
        >
          Ready to become stronger?
        </h2>
        <p className="reveal mx-auto mt-6 max-w-xl text-base text-white/75 sm:text-lg">
          Your strongest chapter starts today.
        </p>
        <div className="reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button href="#contact" size="lg">
            Book Your Free Trial
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
          <Button href="#membership" variant="ghost" size="lg">
            Compare Memberships
          </Button>
        </div>
      </Container>
    </section>
  );
}
