import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

/**
 * Fonts are self-hosted (woff2, latin subset) so there is no render-blocking
 * request to a third-party origin and no FOUT-driven layout shift.
 */
const display = localFont({
  src: [
    { path: "../fonts/barlow-condensed-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/barlow-condensed-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/barlow-condensed-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Arial Narrow", "system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
});

const body = localFont({
  src: "../fonts/inter-variable-latin.woff2",
  weight: "100 900",
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
  adjustFontFallback: "Arial",
});

const siteUrl = "https://ironforgefitness.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IRONFORGE Fitness Club | Train Hard. Live Strong.",
    template: "%s | IRONFORGE Fitness Club",
  },
  description:
    "Premium fitness training, expert coaching, modern equipment, and personalized programs designed to help you become stronger.",
  keywords: [
    "gym",
    "fitness club",
    "strength training",
    "personal training",
    "HIIT",
    "functional fitness",
    "premium gym",
  ],
  applicationName: "IRONFORGE Fitness Club",
  authors: [{ name: "IRONFORGE Fitness Club" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "IRONFORGE Fitness Club",
    title: "IRONFORGE Fitness Club | Train Hard. Live Strong.",
    description:
      "Premium fitness training, expert coaching, modern equipment, and personalized programs designed to help you become stronger.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Athlete lifting a loaded barbell inside the IRONFORGE training floor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRONFORGE Fitness Club | Train Hard. Live Strong.",
    description:
      "Premium fitness training, expert coaching, modern equipment, and personalized programs designed to help you become stronger.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  additionalType: "https://schema.org/ExerciseGym",
  name: "IRONFORGE Fitness Club",
  slogan: "Train hard. Live strong.",
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  telephone: "+1-555-123-4567",
  email: "hello@ironforgefitness.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Fitness Avenue",
    addressLocality: "Downtown",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "07:00",
      closes: "21:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-ink text-white antialiased">
        <script
          type="application/ld+json"
          // Structured data for search engines.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
