import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { speakers, type Speaker } from "@/data/speakers";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Speakers — The Way Conference" },
      {
        name: "description",
        content:
          "The voices teaching at The Way 2025. Pastors and leaders carrying a heart for the next generation.",
      },
      { property: "og:title", content: "Speakers — The Way Conference" },
      {
        property: "og:description",
        content:
          "Meet the pastors and leaders teaching at The Way 2025 in Raleigh, NC.",
      },
    ],
  }),
  component: SpeakersPage,
});

function SpeakersPage() {
  return (
    <>
      <PageHero
        eyebrow="Who's Speaking"
        title="THE SPEAKERS"
        subtitle="Pastors and leaders who carry the weight of what they teach."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {speakers.map((s) => (
              <SpeakerCard key={s.id} speaker={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="bg-surface flex flex-col">
      <div className="aspect-[4/5] bg-dark/10 overflow-hidden">
        <img
          src={speaker.photo}
          alt={speaker.name}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div className="p-5 md:p-6 flex-1 flex flex-col">
        <h3 className="font-display text-2xl md:text-3xl tracking-wider text-dark">
          {speaker.name}
        </h3>
        {(speaker.title || speaker.church) && (
          <div className="text-sm text-text-muted mt-1">
            {[speaker.title, speaker.church].filter(Boolean).join(" — ")}
          </div>
        )}
        {speaker.bio && (
          <p className="mt-3 text-sm text-text-muted leading-relaxed">{speaker.bio}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {speaker.roles.map((r) => (
            <RoleBadge key={r} role={r} />
          ))}
        </div>
      </div>
    </div>
  );
}

function RoleBadge({ role }: { role: Speaker["roles"][number] }) {
  const label =
    role === "main-session"
      ? "Main Session"
      : role === "breakout-main"
        ? "Breakout — Main"
        : "Breakout — Pastors";
  const cls =
    role === "main-session"
      ? "bg-dark text-cream"
      : role === "breakout-main"
        ? "border border-gold text-gold"
        : "border border-dark/40 text-dark";
  return (
    <span
      className={cn(
        "px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] rounded-[2px]",
        cls,
      )}
    >
      {label}
    </span>
  );
}
