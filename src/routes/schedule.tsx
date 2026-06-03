import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { ScheduleRow } from "@/components/site/ScheduleRow";
import { BreakoutAccordion } from "@/components/site/BreakoutAccordion";
import { schedule } from "@/data/conference";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — The Way Conference" },
      {
        name: "description",
        content:
          "Three days of worship, teaching, and breakouts. The full The Way schedule for Oct 17–19, 2025 in Raleigh, NC.",
      },
      { property: "og:title", content: "Schedule — The Way Conference" },
      {
        property: "og:description",
        content:
          "The full The Way schedule — Friday night through Sunday morning. Main sessions and breakouts.",
      },
    ],
  }),
  component: SchedulePage,
});

function SchedulePage() {
  const [filter, setFilter] = useState<string | null>(null);
  const days = filter ? schedule.filter((d) => d.key === filter) : schedule;

  return (
    <>
      <PageHero
        eyebrow="Oct 17–19, 2025"
        title="THE SCHEDULE"
        subtitle="Three days. Main sessions for everyone. Breakouts split between the main track and pastors track."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] px-5 md:px-10">
          {/* Day filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {[{ key: null, label: "All Days" }, ...schedule.map((d) => ({ key: d.key, label: d.label }))].map((p) => (
              <button
                key={p.label}
                onClick={() => setFilter(p.key)}
                className={cn(
                  "px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] border rounded-[2px] transition-colors",
                  filter === p.key
                    ? "bg-dark text-cream border-dark"
                    : "border-border text-text-muted hover:text-dark hover:border-dark",
                )}
              >
                {p.label}
              </button>
            ))}
          </div>

          {days.map((day) => (
            <div key={day.key} className="mb-16 last:mb-0">
              <div className="flex items-baseline justify-between mb-4 pb-4 border-b-2 border-dark">
                <h2 className="font-display text-4xl md:text-5xl tracking-wider text-dark">
                  {day.label}
                </h2>
                <div className="eyebrow !text-text-muted">{day.date}</div>
              </div>

              <div>
                {day.items.map((item, i) => {
                  if (item.type === "session") {
                    return (
                      <div key={i}>
                        <ScheduleRow
                          day={item.session.time}
                          title={item.session.title}
                          tag={item.session.tag}
                          location={item.session.location}
                        />
                      </div>
                    );
                  }
                  return (
                    <BreakoutAccordion
                      key={i}
                      time={item.time}
                      title={item.title}
                      tracks={item.tracks}
                      dark={false}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
