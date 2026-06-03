import { Play } from "lucide-react";
import { SiteLinkButton } from "./Button";
import { Eyebrow } from "./Eyebrow";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-dark text-cream overflow-hidden grain">
      {/* Background video placeholder */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 40%, rgba(196,154,58,0.18), transparent 55%), radial-gradient(circle at 20% 80%, rgba(196,154,58,0.08), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40" />
      </div>

      {/* Centered video placeholder marker */}
      <div className="absolute inset-0 hidden lg:flex items-center justify-end pr-24 xl:pr-40 pointer-events-none">
        <div className="flex flex-col items-center gap-3 opacity-40">
          <div className="w-20 h-20 rounded-full border border-cream/40 flex items-center justify-center">
            <Play size={26} className="text-cream/60 ml-1" />
          </div>
          <div className="eyebrow !text-cream/40">Background Video</div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10 pt-40 md:pt-56 pb-20">
        <Eyebrow>Raleigh, NC — Oct 17–19</Eyebrow>
        <h1 className="font-display text-[80px] sm:text-[110px] md:text-[140px] lg:text-[160px] mt-6 leading-[0.85]">
          THE<br />WAY
        </h1>
        <p className="mt-8 max-w-md text-base md:text-lg text-cream/70 leading-relaxed">
          Restoring a generation to their identity so they can step boldly into their purpose.
        </p>
        <div className="flex flex-wrap gap-3 mt-10">
          <SiteLinkButton variant="primary" href="#register">
            Register Now
          </SiteLinkButton>
          <SiteLinkButton variant="ghost-light" to="/schedule">
            View Schedule
          </SiteLinkButton>
        </div>
      </div>
    </section>
  );
}
