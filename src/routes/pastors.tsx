import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow } from "@/components/site/Eyebrow";
import { ScheduleRow } from "@/components/site/ScheduleRow";
import { SiteLinkButton } from "@/components/site/Button";
import { pastorsSchedule, pastorsBreakouts } from "@/data/conference";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pastors")({
  head: () => ({
    meta: [
      { title: "Pastors Corner — The Way Conference" },
      {
        name: "description",
        content:
          "A track for senior leaders and pastors who care about the next generation. Running alongside The Way 2025.",
      },
      { property: "og:title", content: "Pastors Corner — The Way Conference" },
      {
        property: "og:description",
        content:
          "A leaders track for senior pastors running alongside The Way 2025 in Raleigh, NC.",
      },
    ],
  }),
  component: PastorsPage,
});

function PastorsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Senior Leaders & Pastors"
        title="PASTORS CORNER"
        subtitle="A track running alongside The Way for the leaders who shape the rooms young adults walk into."
      />

      {/* Vision */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1100px] px-5 md:px-10 grid md:grid-cols-[1fr_2fr] gap-12">
          <Eyebrow>The Vision</Eyebrow>
          <div className="space-y-6 text-base md:text-lg text-dark/75 leading-relaxed">
            <p>
              Pastors Corner exists because the next generation will not be reached without the leaders God has already placed over them. Healthy young adults grow out of healthy churches, and healthy churches are led by pastors who have not given up on their own formation.
            </p>
            <p>
              This is a track for pastors and senior leaders who want to learn how to actually love, equip, and release the 18–30s in their cities. Smaller rooms. Slower conversations. Honest questions.
            </p>
            <p>
              It runs alongside the main conference. You'll join the general sessions at night, and have your own teaching, roundtables, and breakouts during the day.
            </p>
          </div>
        </div>
      </section>

      {/* Leaders schedule */}
      <section className="bg-dark-warm text-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1100px] px-5 md:px-10">
          <Eyebrow>Leaders Track</Eyebrow>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider mt-4">
            THE SESSIONS
          </h2>

          <div className="mt-12 border-t border-cream/10">
            {pastorsSchedule.map((s, i) => (
              <ScheduleRow
                key={i}
                day={s.time}
                title={s.title}
                tag={s.tag}
                location={s.location}
                dark
              />
            ))}
          </div>
        </div>
      </section>

      {/* Breakouts */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1100px] px-5 md:px-10">
          <Eyebrow>Leaders Breakouts</Eyebrow>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider mt-4 text-dark">
            DEEPER ROOMS
          </h2>
          <p className="mt-4 max-w-xl text-text-muted">
            Smaller, working sessions for pastors. Pick one per slot.
          </p>

          <div className="mt-12 space-y-3">
            {pastorsBreakouts.map((b, i) => (
              <BreakoutCard key={i} {...b} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream pb-20 md:pb-28">
        <div className="mx-auto max-w-[1100px] px-5 md:px-10 border-t border-border pt-16 md:pt-20 text-center">
          <Eyebrow className="inline-block">Bring Your Team</Eyebrow>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider mt-4 text-dark">
            REGISTER YOUR LEADERS
          </h2>
          <p className="mt-4 max-w-md mx-auto text-text-muted">
            Group registrations for staff teams of 3 or more.
          </p>
          <div className="mt-8">
            <SiteLinkButton variant="primary" href="#register">
              Register Your Team
            </SiteLinkButton>
          </div>
        </div>
      </section>
    </>
  );
}

function BreakoutCard({
  title,
  speaker,
  location,
  description,
}: {
  title: string;
  speaker: string;
  location: string;
  description: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-surface">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
      >
        <div>
          <h3 className="font-display text-2xl md:text-3xl tracking-wider text-dark">
            {title}
          </h3>
          <div className="eyebrow mt-2">{speaker} — {location}</div>
        </div>
        <span className="text-dark/60 shrink-0">
          {open ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="px-5 md:px-6 pb-6 text-sm text-text-muted leading-relaxed border-t border-border pt-5">
          {description}
        </div>
      </div>
    </div>
  );
}
