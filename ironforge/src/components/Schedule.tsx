"use client";

import { useState } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { ArrowRight, Clock } from "./ui/Icons";
import { schedule, scheduleDays, type ScheduleDay } from "@/data/site";

const intensityStyles: Record<string, string> = {
  Low: "border-white/15 text-white/70",
  Moderate: "border-ember/40 text-ember-soft",
  High: "border-ember bg-ember/15 text-ember",
};

export default function Schedule() {
  const [active, setActive] = useState<ScheduleDay>("Monday");
  const classes = schedule[active];

  return (
    <section
      id="schedule"
      aria-labelledby="schedule-title"
      className="border-t border-white/8 bg-charcoal py-20 sm:py-28 lg:py-36"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="schedule-title"
            eyebrow="Class Timetable"
            title={
              <>
                Find a session
                <br />
                that fits your week.
              </>
            }
          />
          <p className="reveal max-w-sm text-muted lg:pb-3">
            Classes are included on the Popular and Elite plans. Book at the front
            desk or reserve your spot in the member app.
          </p>
        </div>

        {/* Day switcher */}
        <div
          role="tablist"
          aria-label="Day of the week"
          className="no-scrollbar reveal mt-12 flex gap-2 overflow-x-auto pb-2"
        >
          {scheduleDays.map((day) => {
            const selected = day === active;
            return (
              <button
                key={day}
                role="tab"
                type="button"
                id={`tab-${day}`}
                aria-selected={selected}
                aria-controls={`panel-${day}`}
                onClick={() => setActive(day)}
                className={`shrink-0 rounded-full border px-5 py-2.5 font-display text-[0.8rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                  selected
                    ? "border-ember bg-ember text-ink"
                    : "border-white/12 text-white/70 hover:border-white/35 hover:text-white"
                }`}
              >
                <span className="sm:hidden">{day.slice(0, 3)}</span>
                <span className="hidden sm:inline">{day}</span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          className="reveal mt-8 overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-ink"
        >
          <ul className="divide-y divide-white/8">
            {classes.map((item) => (
              <li
                key={`${item.time}-${item.name}`}
                className="group flex flex-col gap-3 p-5 transition-colors duration-300 hover:bg-white/[0.03] sm:flex-row sm:items-center sm:gap-6 sm:p-6"
              >
                <div className="flex items-center gap-2.5 sm:w-28 sm:shrink-0">
                  <Clock className="h-4 w-4 text-ember sm:hidden" />
                  <span className="display text-2xl leading-none text-white">
                    {item.time}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-white">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {item.coach} · {item.duration}
                  </p>
                </div>

                <span
                  className={`w-fit rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] ${intensityStyles[item.intensity]}`}
                >
                  {item.intensity}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            Demo timetable for this preview build — swap in the club&rsquo;s real
            class times before launch.
          </p>
          <Button href="#contact" variant="outline">
            Reserve a Class
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
