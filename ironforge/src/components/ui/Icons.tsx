import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  focusable: false,
};

export const ArrowUpRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4 12h16m-6-6 6 6-6 6" />
  </svg>
);

export const Check = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="m5 13 4 4L19 7" />
  </svg>
);

export const Dumbbell = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10" />
  </svg>
);

export const Whistle = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M13 5h7M13 8h5" />
    <circle cx="8" cy="14" r="5" />
    <path d="M8 14h5l3-3V6" />
  </svg>
);

export const Target = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </svg>
);

export const Users = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 5.5a3.2 3.2 0 0 1 0 6M17 13.6a5.5 5.5 0 0 1 3.5 5.4" />
  </svg>
);

export const Chart = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4 20h16M7 20v-6M12 20V8M17 20v-9" />
  </svg>
);

export const Clock = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const MapPin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const Phone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M5 4h3.5l1.6 4-2 1.4a12 12 0 0 0 5.5 5.5l1.4-2 4 1.6V18a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
  </svg>
);

export const Mail = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
    <path d="m4 8 8 5 8-5" />
  </svg>
);

export const Quote = (p: SVGProps<SVGSVGElement>) => (
  <svg {...p} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M9.8 5.5 6.4 12H9v6.5H3V12l3.2-6.5h3.6Zm11 0L17.4 12H20v6.5h-6V12l3.2-6.5h3.6Z" />
  </svg>
);

export const Star = (p: SVGProps<SVGSVGElement>) => (
  <svg {...p} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="m12 2.6 2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.44 6.2 20.5l1.1-6.47-4.7-4.58 6.5-.95L12 2.6Z" />
  </svg>
);

export const Instagram = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const Facebook = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <path d="M14.6 8.4h-1.2c-.9 0-1.5.6-1.5 1.5V16M10.4 11.6h3.6" />
  </svg>
);

export const XSocial = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="m4 4 16 16M20 4 4 20" />
  </svg>
);

export const YouTube = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="6" width="19" height="12" rx="4" />
    <path d="m10.5 9.8 4.2 2.2-4.2 2.2V9.8Z" />
  </svg>
);

export const Menu = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M6 6 18 18M18 6 6 18" />
  </svg>
);
