import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 font-display font-bold uppercase tracking-[0.14em] rounded-full transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-ember text-ink shadow-[0_10px_30px_-12px_rgba(255,77,20,0.9)] hover:bg-ember-soft hover:shadow-[0_16px_40px_-12px_rgba(255,77,20,0.95)] hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-white/25 text-white hover:border-white hover:bg-white hover:text-ink hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "border border-white/10 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:border-white/25",
};

const sizes: Record<Size, string> = {
  md: "text-[0.82rem] px-6 py-3",
  lg: "text-[0.95rem] px-8 py-4",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type AnchorProps = BaseProps & { href: string } & Omit<
    ComponentPropsWithoutRef<"a">,
    "href" | "className" | "children"
  >;

type ButtonProps = BaseProps & { href?: undefined } & Omit<
    ComponentPropsWithoutRef<"button">,
    "className" | "children"
  >;

export default function Button(props: AnchorProps | ButtonProps) {
  const { variant = "primary", size = "md", className = "", children } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
