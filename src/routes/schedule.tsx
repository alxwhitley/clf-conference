import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { TrackToggle } from "@/components/site/TrackToggle";
import { sessions, dayLabels, type Session, type Track } from "@/data/sessions";
import { useTrack } from "@/hooks/useTrack";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — The Way Conference" },
      {
        name: "description",
        content:
          "The full The Way schedule. Three days of main sessions and breakouts. Oct 17–19, 2025 in Raleigh, NC.",
      },
      { property: "og:title", content: "Schedule — The Way Conference" },
      {
        property: "og:description",
        content:
          "The full The Way schedule — Friday night through Sunday morning. Main and pastors tracks.",
      },
    ],
  }),
  component: SchedulePage,
});

function SchedulePage() {
  const { track } = useTrack();

  const days: Session["day"][] =
    track === "pastors"
      ? ["thursday", "friday", "saturday", "sunday"]
      : ["friday", "saturday", "sunday"];

  const [activeDay, setActiveDay] = useState<Session["day"]>(days[0]);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Reset active day when track changes
  useEffect(() => {
    setActiveDay(days[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track]);

  // Scrollspy: observe each day section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry that is most "active" (largest intersection ratio among intersecting)
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveDay(visible[0].target.id as Session["day"]);
        }
      },
      {
        // Bias toward the top band of the viewport (below sticky headers)
        rootMargin: "-25% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    days.forEach((d) => {
      const el = sectionRefs.current[d];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track]);

  const handleJump = (d: Session["day"]) => {
    const el = sectionRefs.current[d];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveDay(d);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Oct 16–19, 2025"
        title="THE SCHEDULE"
        subtitle="Main sessions for everyone. Breakouts split between the main and pastors tracks."
      />

      {/* Sticky track toggle */}
      <div className="sticky top-16 md:top-20 z-40 bg-dark-warm border-b border-cream/10">
        <div className="mx-auto max-w-[1100px] px-5 md:px-10 py-3">
          <TrackToggle />
        </div>
      </div>

      {/* Sticky mobile day strip (below toggle) */}
      <div className="md:hidden sticky top-[124px] z-30 bg-cream border-b border-border">
        <div className="mx-auto max-w-[1100px] px-5 py-3 flex gap-2 overflow-x-auto">
          {days.map((d) => (
            <button
              key={d}
              onClick={() => handleJump(d)}
              className={cn(
                "min-h-[44px] px-4 text-[11px] font-bold uppercase tracking-[0.22em] rounded-[2px] border transition-colors whitespace-nowrap",
                activeDay === d
                  ? "bg-dark text-cream border-dark"
                  : "border-border text-text-muted hover:text-dark hover:border-dark",
              )}
            >
              {dayLabels[d].short} · {dayLabels[d].date}
            </button>
          ))}
        </div>
      </div>

      <section className="bg-cream py-12 md:py-20">
        <div className="mx-auto max-w-[1100px] px-5 md:px-10 md:grid md:grid-cols-[200px_1fr] md:gap-12">
          {/* Desktop sticky day sidebar */}
          <aside className="hidden md:block">
            <div className="sticky top-[176px] flex flex-col gap-2">
              {days.map((d) => (
                <button
                  key={d}
                  onClick={() => handleJump(d)}
                  className={cn(
                    "min-h-[44px] px-4 text-left text-[11px] font-bold uppercase tracking-[0.22em] rounded-[2px] border transition-colors",
                    activeDay === d
                      ? "bg-dark text-cream border-dark"
                      : "border-border text-text-muted hover:text-dark hover:border-dark",
                  )}
                >
                  {dayLabels[d].short} · {dayLabels[d].date}
                </button>
              ))}
            </div>
          </aside>

          {/* All days stacked */}
          <div className="space-y-16">
            {days.map((d) => {
              const daySessions = sessions.filter(
                (s) => s.day === d && s.tracks.includes(track),
              );
              return (
                <section
                  key={d}
                  id={d}
                  ref={(el) => {
                    sectionRefs.current[d] = el;
                  }}
                  style={{ scrollMarginTop: "180px" }}
                >
                  <div className="flex items-baseline justify-between mb-6 pb-4 border-b-2 border-dark">
                    <h2 className="font-display text-4xl md:text-5xl tracking-wider text-dark">
                      {dayLabels[d].long}
                    </h2>
                    <div className="eyebrow !text-text-muted">{dayLabels[d].date}</div>
                  </div>

                  <div className="space-y-3">
                    {daySessions.map((s) => (
                      <SessionCard key={s.id} session={s} track={track} />
                    ))}
                    {daySessions.length === 0 && (
                      <p className="text-text-muted">
                        No sessions for this track on this day.
                      </p>
                    )}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function SessionCard({ session, track }: { session: Session; track: Track }) {
  const [open, setOpen] = useState(false);
  const isBreakout = session.type === "breakout";
  const option = session.breakoutOptions?.find((o) => o.track === track);

  if (!isBreakout) {
    return (
      <div className="bg-surface p-5 md:p-6">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <div className="eyebrow !text-text-muted">{session.time}</div>
          {session.type === "meal" && (
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
              Meal
            </span>
          )}
        </div>
        <h3 className="font-display text-2xl md:text-3xl tracking-wider text-dark mt-2">
          {session.title}
        </h3>
        {session.description && (
          <p className="mt-3 text-sm md:text-base text-text-muted leading-relaxed">
            {session.description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="bg-surface">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full p-5 md:p-6 text-left min-h-[44px] flex items-start justify-between gap-4"
      >
        <div>
          <div className="eyebrow !text-text-muted">{session.time}</div>
          <h3 className="font-display text-2xl md:text-3xl tracking-wider text-dark mt-2">
            {session.title}
          </h3>
          {option && (
            <div className="mt-2 text-sm text-text-muted">
              {option.speaker} — {option.title}
            </div>
          )}
        </div>
        <ChevronDown
          size={20}
          className={cn("text-dark/60 shrink-0 transition-transform", open && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          {option ? (
            <div className="px-5 md:px-6 pb-6 border-t border-border pt-4">
              <div className="eyebrow !text-gold">{option.speaker}</div>
              <h4 className="font-display text-xl md:text-2xl tracking-wider text-dark mt-2">
                {option.title}
              </h4>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                {option.description}
              </p>
            </div>
          ) : (
            <div className="px-5 md:px-6 pb-6 text-sm text-text-muted">
              No breakout for this track in this slot.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
