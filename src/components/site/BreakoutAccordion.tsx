import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Tag } from "./Tag";
import { cn } from "@/lib/utils";
import type { BreakoutTrack } from "@/data/conference";

export function BreakoutAccordion({
  time,
  title,
  tracks,
  dark = true,
}: {
  time: string;
  title: string;
  tracks: BreakoutTrack[];
  dark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<"Main" | "Pastors">("Main");

  const current = tracks.find((t) => t.track === active);

  return (
    <div className={cn("border-b", dark ? "border-cream/10" : "border-border")}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full grid grid-cols-[100px_1fr_auto] md:grid-cols-[140px_1fr_auto] items-center gap-4 py-5 md:py-6 text-left"
      >
        <div className={cn("eyebrow", dark ? "!text-cream/40" : "!text-text-muted")}>
          {time}
        </div>
        <div
          className={cn(
            "font-display text-xl md:text-2xl",
            dark ? "text-cream" : "text-dark",
          )}
        >
          {title}
        </div>
        <div className="flex items-center gap-3">
          <Tag>Main + Pastors</Tag>
          <span className={cn(dark ? "text-cream/60" : "text-dark/60")}>
            {open ? <Minus size={18} /> : <Plus size={18} />}
          </span>
        </div>
      </button>

      {open && (
        <div className="pb-8 md:pb-10 pl-0 md:pl-[140px]">
          <div className={cn("flex gap-8 border-b mb-6", dark ? "border-cream/10" : "border-border")}>
            {tracks.map((t) => (
              <button
                key={t.track}
                onClick={() => setActive(t.track)}
                className={cn(
                  "pb-3 text-[11px] font-bold uppercase tracking-[0.22em] border-b-2 -mb-px transition-colors",
                  active === t.track
                    ? "border-gold text-gold"
                    : cn(
                        "border-transparent",
                        dark ? "text-cream/40 hover:text-cream/70" : "text-text-muted hover:text-dark",
                      ),
                )}
              >
                {t.track} Track
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {current?.sessions.map((s) => (
              <div
                key={s.title}
                className={cn(
                  "p-5 md:p-6",
                  dark ? "bg-dark/40 border border-cream/10" : "bg-surface",
                )}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h4
                      className={cn(
                        "font-display text-xl md:text-2xl",
                        dark ? "text-cream" : "text-dark",
                      )}
                    >
                      {s.title}
                    </h4>
                    {s.speaker && (
                      <div className="eyebrow mt-2">{s.speaker} — {s.location}</div>
                    )}
                  </div>
                </div>
                {s.description && (
                  <p
                    className={cn(
                      "mt-4 text-sm leading-relaxed",
                      dark ? "text-cream/60" : "text-text-muted",
                    )}
                  >
                    {s.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
