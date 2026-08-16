import Image from "next/image";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { gallery } from "@/data/site";

export default function Gallery() {
  return (
    <section
      id="facilities"
      aria-labelledby="gallery-title"
      className="py-20 sm:py-28 lg:py-36"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="gallery-title"
            eyebrow="The Facility"
            title={
              <>
                Every zone built
                <br />
                to be trained in.
              </>
            }
          />
          <p className="reveal max-w-sm text-muted lg:pb-3">
            Two floors of strength, conditioning and recovery space — kept clean,
            calibrated and open around the clock.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {gallery.map((item, i) => (
            <figure
              key={item.src}
              data-reveal-index={i % 4}
              className={`reveal group relative overflow-hidden rounded-2xl border border-white/10 ${item.span} ${item.ratio}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 45vw, (min-width: 640px) 46vw, 92vw"
                className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
                <span
                  aria-hidden="true"
                  className="h-px w-6 bg-ember transition-all duration-500 group-hover:w-10"
                />
                <span className="font-display text-[0.85rem] font-semibold uppercase tracking-[0.2em] text-white">
                  {item.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
