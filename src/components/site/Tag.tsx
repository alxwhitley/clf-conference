import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-[9px] font-bold uppercase tracking-[0.22em] border border-gold text-gold rounded-none",
        className,
      )}
    >
      {children}
    </span>
  );
}
