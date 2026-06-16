import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost-dark" | "ghost-light" | "nav";

const styles: Record<Variant, string> = {
  primary:
    "bg-gold text-dark hover:bg-[#b08a30] border border-gold",
  "ghost-dark":
    "bg-transparent text-dark border border-dark hover:bg-dark hover:text-cream",
  "ghost-light":
    "bg-transparent text-cream border border-cream/70 hover:bg-cream hover:text-dark",
  nav: "bg-dark text-cream hover:bg-dark-warm border border-dark",
};

const base =
  "inline-flex items-center justify-center px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] transition-colors rounded-none whitespace-nowrap";

export function SiteButton({
  variant = "primary",
  className,
  children,
  ...rest
}: { variant?: Variant; children: ReactNode } & ComponentProps<"button">) {
  return (
    <button className={cn(base, styles[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function SiteLinkButton({
  variant = "primary",
  className,
  children,
  to,
  href,
  ...rest
}: {
  variant?: Variant;
  children: ReactNode;
  to?: string;
  href?: string;
} & Omit<ComponentProps<"a">, "href">) {
  if (href) {
    return (
      <a href={href} className={cn(base, styles[variant], className)} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={cn(base, styles[variant], className)}>
      {children}
    </Link>
  );
}
