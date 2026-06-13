import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useTrack } from "@/hooks/useTrack";
import { siteConfig } from "@/config/site";

const links = [
  { to: "/about", label: "About" },
  { to: "/schedule", label: "Schedule" },
  { to: "/speakers", label: "Speakers" },
  { to: "/resources", label: "Resources" },
  { to: "/pastors", label: "For Pastors & Leaders" },
] as const;

export function SiteNav() {
  const { location } = useRouterState();
  const { track } = useTrack();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const solid = scrolled || open;
  // Preserve track in URL across nav. On /pastors itself, don't append (page is self-contained).
  const trackSearch = track === "pastors" ? { track: "pastors" as const } : {};

  const registerHref =
    track === "pastors" ? siteConfig.registrationUrlPastors : siteConfig.registrationUrlMain;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        solid ? "bg-cream border-b border-border" : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 h-16 md:h-20 grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto] items-center gap-4">
        {/* Mobile: hamburger left */}
        <button
          className={cn("md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-start", solid ? "text-dark" : "text-cream")}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo: center on mobile, left on desktop */}
        <Link
          to="/"
          search={trackSearch}
          className={cn(
            "font-display text-2xl md:text-3xl tracking-wider text-center md:text-left md:col-start-1 md:row-start-1",
            solid ? "text-dark" : "text-cream",
          )}
        >
          Way Conference
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10 md:col-start-2 md:row-start-1 md:justify-center">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              search={trackSearch}
              className={cn(
                "text-[11px] font-bold uppercase tracking-[0.25em] transition-colors whitespace-nowrap",
                solid ? "text-dark/60 hover:text-dark" : "text-cream/70 hover:text-cream",
              )}
              activeProps={{ className: solid ? "!text-dark" : "!text-cream" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Register: right */}
        <a
          href={registerHref}
          className="inline-flex items-center justify-center min-h-[44px] px-4 md:px-5 bg-gold text-dark text-[11px] font-bold uppercase tracking-[0.22em] rounded-[2px] hover:opacity-90"
        >
          Register
        </a>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-border">
          <nav className="flex flex-col px-5 py-6 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                search={trackSearch}
                onClick={() => setOpen(false)}
                className="text-[12px] font-bold uppercase tracking-[0.25em] text-dark min-h-[44px] flex items-center"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={registerHref}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center min-h-[44px] px-5 bg-gold text-dark text-[11px] font-bold uppercase tracking-[0.22em] rounded-[2px]"
            >
              Register
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
