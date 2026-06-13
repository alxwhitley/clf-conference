import { Play } from "lucide-react";
import { useState } from "react";
import { getYouTubeThumbnail } from "@/lib/youtube";

export function YouTubeCard({
  title,
  speaker,
  day,
  youtubeUrl,
}: {
  title: string;
  speaker: string;
  day: string;
  youtubeUrl: string;
}) {
  const [src, setSrc] = useState(
    () => getYouTubeThumbnail(youtubeUrl, "max") ?? ""
  );

  return (
    <a
      href={youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative aspect-video overflow-hidden bg-dark border border-cream/10">
        {src && (
          <img
            src={src}
            alt={title}
            loading="lazy"
            onError={() => {
              const fallback = getYouTubeThumbnail(youtubeUrl, "hq");
              if (fallback && fallback !== src) setSrc(fallback);
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/10 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold text-dark flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play size={28} className="ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="eyebrow !text-cream/40">{day}</div>
        <h3 className="font-display text-xl md:text-2xl tracking-wider text-cream mt-2 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <div className="text-sm text-cream/60 mt-1">{speaker}</div>
      </div>
    </a>
  );
}
