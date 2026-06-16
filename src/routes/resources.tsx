import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow } from "@/components/site/Eyebrow";
import { TrackToggle } from "@/components/site/TrackToggle";
import { useTrack } from "@/hooks/useTrack";
import { siteConfig } from "@/config/site";
import { sessions, type Session } from "@/data/sessions";
import { resources } from "@/data/resources";
import { Download, FileText, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — The Way Conference" },
      {
        name: "description",
        content:
          "Videos, notes, and slides from every session of The Way Conference.",
      },
      { property: "og:title", content: "Resources — The Way Conference" },
      {
        property: "og:description",
        content:
          "Videos, notes, and slides from every session of The Way Conference.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  if (!siteConfig.resourcesUnlocked) return <LockedState />;
  return <UnlockedState />;
}

function LockedState() {
  return (
    <section className="min-h-screen bg-dark text-cream grain flex items-center justify-center px-5 md:px-10 py-32 text-center">
      <div className="max-w-2xl">
        <Eyebrow>Available October 17</Eyebrow>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mt-6">
          RESOURCES DROP WHEN THE CONFERENCE BEGINS.
        </h1>
        <p className="mt-8 text-base md:text-lg text-cream/60 leading-relaxed">
          Check back Friday, October 17.
        </p>
      </div>
    </section>
  );
}

function UnlockedState() {
  const { track } = useTrack();

  const mainSessionList = sessions.filter(
    (s) => s.type !== "breakout" && s.type !== "meal",
  );
  const breakoutList = sessions.filter((s) => s.type === "breakout");

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="TAKE IT WITH YOU"
        subtitle="Every session, captured. Watch, read, and download."
      />

      {/* Main sessions — shared */}
      <section className="bg-dark text-cream py-16 md:py-24 border-b border-cream/10">
        <div className="mx-auto max-w-[1100px] px-5 md:px-10">
          <Eyebrow>Main Sessions</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl mt-4">
            Every main session.
          </h2>
          <div className="mt-10 space-y-4">
            {mainSessionList.map((s) => (
              <ResourceCard key={s.id} session={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Breakouts — track-filtered */}
      <section className="bg-dark-warm text-cream py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <Eyebrow>Breakouts</Eyebrow>
              <h2 className="font-display text-4xl md:text-6xl mt-4">
                Breakout sessions.
              </h2>
            </div>
            <TrackToggle />
          </div>

          <div className="space-y-4">
            {breakoutList.map((s) => (
              <ResourceCard key={s.id} session={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ResourceCard({ session }: { session: Session }) {
  const [open, setOpen] = useState(false);
  const resource = resources.find((r) => r.sessionId === session.id);

  return (
    <div className="bg-dark/40 border border-cream/10">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full p-5 md:p-6 text-left min-h-[44px] flex items-start justify-between gap-4"
      >
        <div>
          <div className="eyebrow !text-cream/40">{session.day} · {session.time}</div>
          <h3 className="font-display text-xl md:text-2xl text-cream mt-2">
            {session.title}
          </h3>
        </div>
        <ChevronDown
          size={20}
          className={cn("text-cream/60 shrink-0 transition-transform", open && "rotate-180")}
        />
      </button>


      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="px-5 md:px-6 pb-6 border-t border-cream/10 pt-5 space-y-5">
            {resource?.videoUrl ? (
              <div className="aspect-video w-full bg-black">
                <iframe
                  src={resource.videoUrl}
                  title={session.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="aspect-video w-full bg-cream/5 flex items-center justify-center text-cream/40 text-sm">
                Video coming soon
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              {resource?.notesUrl && (
                <a
                  href={resource.notesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-5 bg-gold text-dark text-[11px] font-bold uppercase tracking-[0.22em] rounded-none"
                >
                  <FileText size={14} /> Download Notes
                </a>
              )}
              {resource?.slidesUrl && (
                <a
                  href={resource.slidesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-5 border border-cream/30 text-cream text-[11px] font-bold uppercase tracking-[0.22em] rounded-none hover:bg-cream/5"
                >
                  <Download size={14} /> Download Slides
                </a>
              )}
              {!resource?.notesUrl && !resource?.slidesUrl && (
                <div className="text-sm text-cream/40">No downloads available yet.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
