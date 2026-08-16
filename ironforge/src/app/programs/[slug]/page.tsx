import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingActions from "@/components/FloatingActions";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight, Check } from "@/components/ui/Icons";
import { programs, site } from "@/data/site";
import { blurPlaceholders } from "@/data/blur";

const siteUrl = "https://ironforgefitness.com";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return {};

  const description = `${program.description} ${program.intro.slice(0, 110)}…`;

  return {
    title: `${program.title} Programme`,
    description,
    alternates: { canonical: `/programs/${program.slug}` },
    openGraph: {
      title: `${program.title} at ${site.fullName}`,
      description,
      url: `${siteUrl}/programs/${program.slug}`,
      images: [{ url: program.image, alt: program.alt }],
    },
  };
}

export default async function ProgramPage({ params }: Params) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const others = programs.filter((p) => p.slug !== slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${program.title} — ${site.fullName}`,
    serviceType: program.title,
    description: program.intro,
    provider: { "@type": "ExerciseGym", name: site.fullName, url: siteUrl },
    areaServed: site.address,
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Programs", item: `${siteUrl}/#programs` },
      {
        "@type": "ListItem",
        position: 3,
        name: program.title,
        item: `${siteUrl}/programs/${program.slug}`,
      },
    ],
  };

  const facts = [
    { label: "Level", value: program.level },
    { label: "Session", value: program.duration },
    { label: "Frequency", value: program.sessions },
    { label: "Focus", value: program.meta },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <Navbar />

      <main id="main">
        {/* Hero */}
        <section className="relative isolate flex min-h-[70svh] items-end overflow-hidden pb-14 pt-32 sm:pb-20">
          <Image
            src={program.image}
            alt={program.alt}
            fill
            priority
            sizes="100vw"
            quality={72}
            placeholder="blur"
            blurDataURL={blurPlaceholders[program.image]}
            className="-z-10 object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,6,10,0.85)_0%,rgba(5,6,10,0.45)_40%,rgba(5,6,10,0.95)_90%,#05060a_100%)]"
          />

          <Container>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-white/55">
                <li>
                  <Link href="/" className="transition-colors hover:text-ember">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/#programs" className="transition-colors hover:text-ember">
                    Programs
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white">{program.title}</li>
              </ol>
            </nav>

            <p className="eyebrow">{program.meta}</p>
            <h1 className="display mt-5 max-w-4xl text-[clamp(2.6rem,9vw,5.5rem)]">
              {program.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              {program.description}
            </p>
          </Container>
        </section>

        {/* Facts strip */}
        <section aria-label="Programme details" className="border-y border-white/8 bg-charcoal">
          <Container className="py-10">
            <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label} className="reveal">
                  <dt className="text-[0.65rem] uppercase tracking-[0.24em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 font-display text-lg font-bold uppercase tracking-[0.04em] text-white">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        {/* Body */}
        <section className="py-20 sm:py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              <div>
                <h2 className="display text-[2rem] leading-tight sm:text-4xl">
                  What the training looks like
                </h2>
                <p className="reveal mt-6 text-lg leading-relaxed text-white/80">
                  {program.intro}
                </p>

                <h3 className="display mt-12 text-2xl">What&rsquo;s included</h3>
                <ul className="reveal mt-6 space-y-4">
                  {program.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3.5 text-white/85">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ember/15 text-ember">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="display mt-12 text-2xl">Who it suits</h3>
                <p className="reveal mt-4 leading-relaxed text-muted">
                  {program.suitedTo}
                </p>
              </div>

              {/* Sidebar CTA */}
              <aside className="reveal h-fit rounded-[var(--radius-card)] border border-white/10 bg-charcoal-2 p-8 lg:sticky lg:top-28">
                <p className="eyebrow">Start Here</p>
                <h2 className="display mt-4 text-[1.75rem] leading-tight">
                  Try it free, no card needed.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Your first {program.title.toLowerCase()} session includes a movement
                  assessment and a walkthrough of the programme with a coach.
                </p>

                <div className="mt-7 space-y-3">
                  <Button href="/#contact" size="lg" className="w-full">
                    Book Free Trial
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                  <Button href="/#membership" variant="outline" size="lg" className="w-full">
                    See Membership Plans
                  </Button>
                </div>

                <p className="mt-6 border-t border-white/10 pt-5 text-sm text-muted">
                  Prefer to talk first? Call{" "}
                  <a href={site.phoneHref} className="text-white hover:text-ember">
                    {site.phone}
                  </a>
                </p>
              </aside>
            </div>
          </Container>
        </section>

        {/* Other programs */}
        <section
          aria-labelledby="other-programs"
          className="border-t border-white/8 bg-charcoal py-20 sm:py-28"
        >
          <Container>
            <h2 id="other-programs" className="display text-[2rem] sm:text-4xl">
              Other programmes
            </h2>

            <ul className="mt-10 grid gap-5 sm:grid-cols-3">
              {others.map((other) => (
                <li key={other.slug} className="reveal">
                  <Link
                    href={`/programs/${other.slug}`}
                    className="group relative block h-full overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-ink transition-colors duration-500 hover:border-ember/50"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={other.image}
                        alt={other.alt}
                        fill
                        loading="lazy"
                        sizes="(min-width: 640px) 31vw, 92vw"
                        placeholder="blur"
                        blurDataURL={blurPlaceholders[other.image]}
                        className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-4 p-6">
                      <div>
                        <h3 className="display text-xl text-white">{other.title}</h3>
                        <p className="mt-1.5 text-sm text-muted">{other.description}</p>
                      </div>
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 transition-all duration-500 group-hover:border-ember group-hover:bg-ember group-hover:text-ink">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>

      <Footer />
      <ScrollReveal />
      <FloatingActions />
    </>
  );
}
