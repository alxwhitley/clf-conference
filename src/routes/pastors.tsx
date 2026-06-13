import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow } from "@/components/site/Eyebrow";
import { sessions, dayLabels, type Session } from "@/data/sessions";
import { speakers } from "@/data/speakers";
import { siteConfig } from "@/config/site";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pastors")({
  head: () => ({
    meta: [
      { title: "For Pastors & Leaders — The Way Conference" },
      {
        name: "description",
        content:
          "The Way includes a dedicated track for pastors and senior leaders — Thursday through Sunday with its own sessions, breakouts, and Thursday night leaders dinner.",
      },
      { property: "og:title", content: "For Pastors & Leaders — The Way Conference" },
      {
        property: "og:description",
        content:
          "A dedicated track for pastors and senior leaders at The Way 2025.",
      },
    ],
  }),
  component: PastorsPage,
});

function PastorsPage() {
  const days: Session["day"][] = ["thursday", "friday", "saturday", "sunday"];
  const pastorsSpeakers = speakers.filter(
    (s) => s.roles.includes("breakout-pastors") || s.roles.includes("main-session"),
  );

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark text-cream grain pt-32 md:pt-40 pb-16 md:pb-24 border-b-2 border-gold overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 30%, rgba(196,154,58,0.25), transparent 50%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10">
          <Eyebrow>For Pastors & Senior Leaders</Eyebrow>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mt-4 tracking-wider">
            A TRACK BUILT FOR THOSE WHO LEAD.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-cream/70 leading-relaxed">
            The Way includes a dedicated track for pastors and senior leaders — running
            Thursday through Sunday with its own sessions, breakouts, and a Thursday night
            leaders dinner.
          </p>
          <div className="mt-10">
            <a
              href={siteConfig.registrationUrlPastors}
              className="inline-flex items-center justify-center min-h-[44px] px-6 bg-gold text-dark text-[11px] font-bold uppercase tracking-[0.22em] rounded-[2px] hover:opacity-90"
            >
              Register as a Pastor or Leader
            </a>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] px-5 md:px-10">
          <Eyebrow>The Schedule</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider mt-4 text-dark">
            Four days. Together.
          </h2>

          <div className="mt-10 space-y-12">
            {days.map((d) => {
              const items = sessions.filter(
                (s) => s.day === d && s.tracks.includes("pastors"),
              );
              return (
                <div key={d}>
                  <div className="flex items-baseline justify-between mb-4 pb-3 border-b-2 border-dark">
                    <h3 className="font-display text-3xl md:text-4xl tracking-wider text-dark">
                      {dayLabels[d].long}
                    </h3>
                    <div className="eyebrow !text-text-muted">{dayLabels[d].date}</div>
                  </div>
                  <div className="space-y-3">
                    {items.map((s) => (
                      <PastorsSessionCard key={s.id} session={s} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="bg-dark-warm text-cream py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Eyebrow>Who You'll Hear</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider mt-4">
            Speakers for the pastors track.
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {pastorsSpeakers.map((s) => (
              <div key={s.id} className="bg-dark/40 border border-cream/10">
                <div className="aspect-[4/5] bg-cream/5 overflow-hidden">
                  <img
                    src={s.photo}
                    alt={s.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-display text-2xl tracking-wider text-cream">
                    {s.name}
                  </h3>
                  <div className="text-sm text-cream/60 mt-1">
                    {s.title} — {s.church}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[900px] px-5 md:px-10 text-center">
          <Eyebrow className="inline-block">Ready to join us?</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider mt-4 text-dark">
            Register for the pastors track.
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-text-muted leading-relaxed">
            Registration for pastors and leaders is separate. You'll receive a badge and
            dedicated materials for your track.
          </p>
          <div className="mt-10">
            <a
              href={siteConfig.registrationUrlPastors}
              className="inline-flex items-center justify-center min-h-[44px] px-8 bg-dark text-cream text-[11px] font-bold uppercase tracking-[0.22em] rounded-[2px] hover:bg-dark-warm"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function PastorsSessionCard({ session }: { session: Session }) {
  const [open, setOpen] = useState(false);
  const isBreakout = session.type === "breakout";
  const option = session.breakoutOptions?.find((o) => o.track === "pastors");

  if (!isBreakout) {
    return (
      <div className="bg-surface p-5 md:p-6">
        <div className="flex flex-wrap items-baseline gap-x-4">
          <div className="eyebrow !text-text-muted">{session.time}</div>
          {session.type === "meal" && (
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
              Meal
            </span>
          )}
        </div>
        <h4 className="font-display text-2xl tracking-wider text-dark mt-2">
          {session.title}
        </h4>
        {session.description && (
          <p className="mt-2 text-sm text-text-muted leading-relaxed">
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
          <h4 className="font-display text-2xl tracking-wider text-dark mt-2">
            {session.title}
          </h4>
          {option && (
            <div className="text-sm text-text-muted mt-1">
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
          {option && (
            <div className="px-5 md:px-6 pb-6 border-t border-border pt-4">
              <div className="eyebrow !text-gold">{option.speaker}</div>
              <h5 className="font-display text-xl tracking-wider text-dark mt-2">
                {option.title}
              </h5>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                {option.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
