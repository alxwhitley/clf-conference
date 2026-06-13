import { useTrack, type Track } from "@/hooks/useTrack";
import { cn } from "@/lib/utils";

export function TrackToggle({
  className,
  value,
  onChange,
}: {
  className?: string;
  value?: Track;
  onChange?: (t: Track) => void;
}) {
  const { track, setTrack } = useTrack();
  const active = value ?? track;
  const setActive = onChange ?? setTrack;

  const opts: { key: Track; label: string }[] = [
    { key: "main", label: "Main Conference" },
    { key: "pastors", label: "Pastors & Leaders" },
  ];

  return (
    <div
      className={cn(
        "inline-flex w-full sm:w-auto rounded-[2px] border border-cream/20 bg-dark/30 p-1",
        className,
      )}
      role="tablist"
      aria-label="Track"
    >
      {opts.map((o) => {
        const isActive = active === o.key;
        return (
          <button
            key={o.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => setActive(o.key)}
            className={cn(
              "flex-1 sm:flex-none min-h-[44px] px-5 text-[11px] font-bold uppercase tracking-[0.22em] rounded-[2px] transition-colors",
              isActive
                ? "bg-gold text-dark"
                : "text-cream/60 hover:text-cream",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
