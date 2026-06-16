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




      <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10 pt-40 md:pt-56 pb-20">
        <Eyebrow>Raleigh, NC — Oct 16–18</Eyebrow>
        <h1 className="font-display text-[80px] sm:text-[110px] md:text-[140px] lg:text-[170px] mt-6 leading-[0.88] uppercase">
          The Way<br /><span className="text-[0.32em] tracking-[0.28em] text-cream/80 font-sans font-semibold">Conference</span>
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
