import type { Speaker } from "@/data/conference";
import { User } from "lucide-react";

export function SpeakerCard({
  speaker,
  showBio = false,
}: {
  speaker: Speaker;
  showBio?: boolean;
}) {
  return (
    <article className="group bg-surface flex flex-col">
      <div className="relative aspect-[4/5] bg-[#d8d2c4] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-dark/20 transition-transform duration-500 group-hover:scale-105">
          <User size={64} strokeWidth={1} />
        </div>
        <div className="absolute bottom-3 left-4 eyebrow !text-dark/30">Photo</div>
      </div>
      <div className="p-5 md:p-6">
        <h3 className="font-display text-2xl md:text-3xl tracking-wider text-dark">
          {speaker.name}
        </h3>
        <div className="eyebrow mt-2">{speaker.ministry}</div>
        {showBio && (
          <p className="mt-4 text-sm text-text-muted leading-relaxed">
            {speaker.bio}
          </p>
        )}
      </div>
    </article>
  );
}
