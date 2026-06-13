import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Download, FileText, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow } from "@/components/site/Eyebrow";
import { YouTubeCard } from "@/components/site/YouTubeCard";
import { mainSessions, breakoutNotes, videoDownloads } from "@/data/resources";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Way Conference" },
      {
        name: "description",
        content:
          "Watch main session videos, read breakout notes, and download media from Way Conference.",
      },
      { property: "og:title", content: "Resources — Way Conference" },
      {
        property: "og:description",
        content:
          "Watch main session videos, read breakout notes, and download media from Way Conference.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const navigate = useNavigate();
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

  return (
    <div className="bg-dark text-cream">
      <PageHero
        eyebrow="Resources"
        title="Take It With You"
        subtitle="Every main session, every breakout, and everything you need to keep walking the way after the weekend ends."
      />

      {/* Main sessions */}
      <section className="py-20 md:py-28 border-b border-cream/10">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Eyebrow>Main Sessions</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider mt-4 max-w-3xl">
            Watch every main session.
          </h2>
          <p className="mt-4 max-w-xl text-cream/60">
            Click any thumbnail to watch on YouTube.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainSessions.map((s) => (
              <YouTubeCard key={s.id} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Breakout notes */}
      <section className="py-20 md:py-28 border-b border-cream/10">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Eyebrow>Breakout Notes</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider mt-4 max-w-3xl">
            Notes from the breakouts.
          </h2>
          <p className="mt-4 max-w-xl text-cream/60">
            Full session notes, written up and downloadable as PDF.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/10 border border-cream/10">
            {breakoutNotes.map((n) => {
              const hasNotes = n.notesMarkdown.trim().length > 0;
              return (
                <button
                  key={n.slug}
                  type="button"
                  onClick={() => {
                    if (hasNotes) {
                      navigate({ to: "/resources/$slug", params: { slug: n.slug } });
                    } else {
                      setComingSoonOpen(true);
                    }
                  }}
                  className="group block bg-dark p-8 md:p-10 hover:bg-dark-warm transition-colors text-left w-full"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="eyebrow !text-cream/40">{n.day}</div>
                    <FileText
                      size={18}
                      className="text-cream/40 group-hover:text-gold transition-colors"
                    />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl tracking-wider mt-4 group-hover:text-gold transition-colors">
                    {n.title}
                  </h3>
                  <div className="text-sm text-cream/60 mt-2">{n.speaker}</div>
                  <p className="text-cream/70 mt-4 leading-relaxed">{n.excerpt}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
                    Read notes <ArrowUpRight size={14} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <Dialog open={comingSoonOpen} onOpenChange={setComingSoonOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-display text-2xl tracking-wider">
              Notes coming soon
            </DialogTitle>
            <DialogDescription className="pt-2 text-base">
              These notes will be displayed here once they're made available.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>


      {/* Video downloads */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Eyebrow>Downloads</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider mt-4 max-w-3xl">
            Video + audio files.
          </h2>
          <p className="mt-4 max-w-xl text-cream/60">
            Hosted on Google Drive. Free to download and share.
          </p>

          <div className="mt-12 space-y-px bg-cream/10 border border-cream/10">
            {videoDownloads.map((v) => (
              <a
                key={v.title}
                href={v.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 bg-dark p-6 md:p-8 hover:bg-dark-warm transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl tracking-wider group-hover:text-gold transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-cream/60 mt-2 text-sm md:text-base">
                    {v.description}
                  </p>
                  {v.sizeLabel && (
                    <div className="eyebrow !text-cream/40 mt-3">
                      {v.sizeLabel}
                    </div>
                  )}
                </div>
                <div className="inline-flex items-center gap-2 px-5 py-3 bg-gold text-dark text-[11px] font-bold uppercase tracking-[0.22em] rounded-[2px] shrink-0">
                  <Download size={14} /> Download
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
