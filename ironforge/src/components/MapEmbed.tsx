"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin } from "./ui/Icons";
import { site } from "@/data/site";

/**
 * Click-to-load map. Google's iframe pulls ~1 MB and sets third-party cookies,
 * so it only loads once the visitor actually asks for it — the section costs
 * nothing until then.
 */
export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);
  const query = encodeURIComponent(site.mapQuery);

  return (
    <div className="reveal relative mt-10 overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-charcoal-2">
      <div className="relative aspect-[16/10] w-full sm:aspect-[2/1]">
        {loaded ? (
          <iframe
            title={`Map showing ${site.fullName} at ${site.address}`}
            src={`https://maps.google.com/maps?q=${query}&z=15&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0 grayscale-[35%] contrast-[1.05]"
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(120%_100%_at_50%_0%,rgba(255,77,20,0.16),transparent_60%)] p-6 text-center"
          >
            {/* Decorative street-grid backdrop */}
            <span
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:44px_44px]"
            />
            <span className="relative grid h-14 w-14 place-items-center rounded-full border border-ember/40 bg-ember/15 text-ember transition-transform duration-500 group-hover:scale-110">
              <MapPin className="h-6 w-6" />
            </span>
            <span className="relative">
              <span className="block font-display text-lg font-bold uppercase tracking-[0.12em] text-white">
                View us on the map
              </span>
              <span className="mt-1 block text-sm text-muted">
                {site.address} — tap to load
              </span>
            </span>
          </button>
        )}
      </div>

      <div className="flex flex-col gap-3 border-t border-white/8 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Free member parking on site · Two minutes from the metro
        </p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${query}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-display text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:text-ember"
        >
          Get Directions
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
