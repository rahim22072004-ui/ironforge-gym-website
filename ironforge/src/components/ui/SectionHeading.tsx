import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  id,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  id?: string;
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={`reveal ${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}
    >
      <p
        className={`eyebrow flex items-center gap-3 ${centered ? "justify-center" : "justify-start"}`}
      >
        <span aria-hidden="true" className="h-px w-8 bg-ember/70" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="display mt-5 text-[2.4rem] leading-[0.95] sm:text-5xl lg:text-[3.6rem]"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>
      ) : null}
    </div>
  );
}
