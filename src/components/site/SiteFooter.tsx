import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-dark text-cream border-t border-copper-frame">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="font-display text-4xl md:text-5xl">Way Conference</div>
            <p className="mt-4 text-sm text-cream/60 max-w-sm leading-relaxed">
              A young adults gathering. Raleigh, NC. October 16–18, 2026.
            </p>
            <div className="flex items-center gap-4 mt-6 text-cream/60">
              <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-gold transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gold transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <div className="eyebrow !text-cream/40 mb-4">Conference</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/schedule" className="text-cream/80 hover:text-gold">Schedule</Link></li>
              <li><Link to="/speakers" className="text-cream/80 hover:text-gold">Speakers</Link></li>
              <li><Link to="/pastors" className="text-cream/80 hover:text-gold">For pastors & leaders</Link></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow !text-cream/40 mb-4">Hosted By</div>
            <p className="text-sm text-cream/80 leading-relaxed">
              CLF Church<br />
              Raleigh, North Carolina
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/40">
          <div>© 2026 The Way Conference. A gathering of CLF Church.</div>
          <div>Made with intention in Raleigh.</div>
        </div>
      </div>
    </footer>
  );
}
