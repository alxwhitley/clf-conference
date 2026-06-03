import { Tag } from "./Tag";
import type { Tag as TagType } from "@/data/conference";

export function ScheduleRow({
  day,
  title,
  tag,
  location,
  dark = false,
}: {
  day: string;
  title: string;
  tag?: TagType;
  location?: string;
  dark?: boolean;
}) {
  const dayColor = dark ? "text-cream/40" : "text-text-muted";
  const titleColor = dark ? "text-cream" : "text-dark";
  const metaColor = dark ? "text-cream/50" : "text-text-muted";

  return (
    <div
      className={`grid grid-cols-[100px_1fr_auto] md:grid-cols-[140px_1fr_auto] items-center gap-4 py-5 md:py-6 border-b ${
        dark ? "border-cream/10" : "border-border"
      }`}
    >
      <div className={`eyebrow ${dayColor}`}>{day}</div>
      <div>
        <div className={`font-display text-xl md:text-2xl tracking-wider ${titleColor}`}>
          {title}
        </div>
        {location && (
          <div className={`text-xs mt-1 ${metaColor}`}>{location}</div>
        )}
      </div>
      {tag && <Tag>{tag}</Tag>}
    </div>
  );
}
