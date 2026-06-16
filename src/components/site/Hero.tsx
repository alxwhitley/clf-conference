import { SiteLinkButton } from "./Button";
import { Eyebrow } from "./Eyebrow";
import heroImage from "@/assets/hero-worship.jpg.asset.json";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-dark text-cream overflow-hidden grain">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage.url}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/30" />
        <div className="absolute inset-0 bg-dark/30" />
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
        <Eyebrow>Raleigh, NC — Oct 16–18</Eyebrow>
        <h1 className="font-display text-[80px] sm:text-[110px] md:text-[140px] lg:text-[170px] mt-6 leading-[0.88]">
          The Way<br /><span className="text-[0.55em] text-cream/85">Conference</span>
        </h1>
        <p className="mt-8 max-w-xl text-base md:text-lg text-cream/70 leading-relaxed">
          A 3-day conference to see an emerging generation move through formation and into mission.
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
