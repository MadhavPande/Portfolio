"use client";

import { ArrowUp } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

// Vertical positions are months from Jul 2023, so spacing is proportional to time.
const TOTAL = 37; // Jul 2023 to Aug 2026
const PROMOTED = 12; // 2024, within a year of joining
const VISCADIA = 20; // Mar 2025

const pos = (m: number) => `${(m / TOTAL) * 100}%`;
const ease = [0.16, 1, 0.3, 1] as const;

const segments = [
  { from: 0, to: PROMOTED, tone: "bg-fg/35", delay: 0.3 },
  { from: PROMOTED, to: VISCADIA, tone: "bg-fg", delay: 0.8 },
  { from: VISCADIA, to: TOTAL, tone: "bg-accent", delay: 1.2 },
];

const events = [
  { at: 0, year: "2023", title: "EY", role: "Associate Consultant", delay: 0.25 },
  { at: PROMOTED, year: "2024", title: "Promoted", role: "Consultant", delay: 0.75, promotion: true },
  { at: VISCADIA, year: "2025", title: "Viscadia", role: "Associate", delay: 1.15 },
];

export function CareerTimeline() {
  const reduce = useReducedMotion();
  const t = (delay: number, duration = 0.5) => (reduce ? { duration: 0 } : { duration, delay, ease });

  return (
    <figure className="w-full select-none md:pl-10">
      <div className="relative h-[400px]">
        {/* Track */}
        <div className="absolute inset-y-0 left-[13px] w-1">
          {segments.map((s) => (
            <motion.div
              key={s.from}
              className={`absolute inset-x-0 origin-top ${s.tone} ${s.from === 0 ? "rounded-t-full" : ""} ${s.to === TOTAL ? "rounded-b-full" : ""}`}
              style={{ top: pos(s.from), height: pos(s.to - s.from) }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={t(s.delay)}
            />
          ))}
        </div>

        {/* Events */}
        {events.map((e) => (
          <motion.div
            key={e.title}
            className="absolute left-0 flex items-start gap-6"
            style={{ top: pos(e.at) }}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={t(e.delay)}
          >
            {e.promotion ? (
              <span className="-mt-1 grid size-[30px] shrink-0 place-items-center rounded-full border-2 border-hero bg-accent text-on-accent">
                <ArrowUp size={14} weight="bold" />
              </span>
            ) : (
              <span className="grid size-[30px] shrink-0 -translate-y-1 place-items-center">
                <span className="size-4 rounded-full border-[3px] border-fg bg-hero" />
              </span>
            )}
            <div className="-mt-2">
              <p className="font-mono text-xs text-muted">{e.year}</p>
              <p
                className={`mt-1 font-display font-bold leading-none ${
                  e.promotion ? "text-xl text-accent-ink" : "text-3xl md:text-4xl"
                }`}
              >
                {e.title}
              </p>
              <p className="mt-2 text-[15px] text-muted">{e.role}</p>
            </div>
          </motion.div>
        ))}

        {/* End of track */}
        <p className="absolute left-[54px] top-full -translate-y-full font-mono text-xs text-muted">
          2026
        </p>
      </div>

      <figcaption className="sr-only">
        Career timeline: joined EY as Associate Consultant in July 2023, promoted to Consultant in
        2024, joined Viscadia as Associate in March 2025 through August 2026.
      </figcaption>
    </figure>
  );
}
