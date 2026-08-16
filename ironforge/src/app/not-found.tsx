import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { blurPlaceholders } from "@/data/blur";

export const metadata = {
  title: "Page not found",
  description: "The page you were looking for has moved or no longer exists.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen items-center overflow-hidden py-24">
      <Image
        src="/images/gym-cta-banner.webp"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        quality={60}
        placeholder="blur"
        blurDataURL={blurPlaceholders["/images/gym-cta-banner.webp"]}
        className="-z-10 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,6,10,0.92),rgba(5,6,10,0.8))]"
      />

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Error 404</p>
          <h1 className="display mt-6 text-[clamp(3.5rem,16vw,9rem)] leading-[0.85]">
            Missed
            <br />
            <span className="text-ember">the rep.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
            This page doesn&rsquo;t exist — or it moved while you were resting
            between sets. Let&rsquo;s get you back to the training floor.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href="/" size="lg">
              Back to Home
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
            <Button href="/#membership" variant="outline" size="lg">
              View Memberships
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
