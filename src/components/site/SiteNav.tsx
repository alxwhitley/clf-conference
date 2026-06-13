import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/schedule", label: "Schedule" },
  { to: "/speakers", label: "Speakers" },
  { to: "/resources", label: "Resources" },
  { to: "/pastors", label: "For pastors & leaders" },
] as const;

export function SiteNav() {
  const { location } = useRouterState();
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        solid ? "bg-cream border-b border-border" : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl md:text-3xl tracking-wider text-dark">
          Way Conference
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "text-[11px] font-bold uppercase tracking-[0.25em] transition-colors",
                solid ? "text-dark/60 hover:text-dark" : "text-cream/70 hover:text-cream",
              )}
              activeProps={{ className: solid ? "!text-dark" : "!text-cream" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            hash="register"
            className="hidden sm:inline-flex items-center justify-center px-5 py-3 bg-dark text-cream text-[11px] font-bold uppercase tracking-[0.22em] rounded-[2px] hover:bg-dark-warm"
          >
            Register
          </Link>
          <button
            className={cn(
              "md:hidden p-2",
              solid ? "text-dark" : "text-cream",
            )}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-border">
          <nav className="flex flex-col px-5 py-6 gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-[12px] font-bold uppercase tracking-[0.25em] text-dark"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/"
              hash="register"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-5 py-3 bg-dark text-cream text-[11px] font-bold uppercase tracking-[0.22em] rounded-[2px] w-fit"
            >
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
