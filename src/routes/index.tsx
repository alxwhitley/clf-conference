import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { MetaStrip } from "@/components/site/MetaStrip";
import { Eyebrow } from "@/components/site/Eyebrow";
import { SpeakerCard } from "@/components/site/SpeakerCard";
import { ScheduleRow } from "@/components/site/ScheduleRow";
import { SiteLinkButton } from "@/components/site/Button";
import { speakers } from "@/data/conference";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "New Wave — A Young Adults Gathering | Oct 17–19, Raleigh NC" },
      {
        name: "description",
        content:
          "Bringing the Next Generation into Restore. Oct 17–19, 2025 in Raleigh, NC.",
      },
      { property: "og:title", content: "New Wave — A Young Adults Gathering" },
      {
        property: "og:description",
        content:
          "THREE DAYS. ONE DESIRE. New Wave is a young adults conference in Raleigh, NC. October 17–19, 2025.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <MetaStrip />

      {/* About */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 grid md:grid-cols-[1fr_1.4fr] gap-12">
          <div>
            <Eyebrow>What Is New Wave</Eyebrow>
          </div>
          <div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider text-dark">
              NOT ANOTHER<br />CONFERENCE.
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-base md:text-lg text-dark/70 leading-relaxed">
              <p>
                We're not gathering to sit through talks. And we're not a gathering of a bunch of young people. The heart of New Wave is that an effective move of God to reach this generation requires the older and younger working together.
              </p>
              <p>
                Three days of worship, teaching, and honest conversation that will help an emerging generation carry on the mission and not miss what God is doing in this hour. 
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 max-w-md">
              <div className="border-t border-border pt-4">
                <div className="font-display text-4xl md:text-5xl tracking-wider text-dark">400+</div>
                <div className="eyebrow !text-text-muted mt-2">Expected Attendees</div>
              </div>
              <div className="border-t border-border pt-4">
                <div className="font-display text-4xl md:text-5xl tracking-wider text-dark">18–30</div>
                <div className="eyebrow !text-text-muted mt-2">The Generation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="bg-cream pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 mb-12 md:mb-16">
            <div>
              <Eyebrow>Who's Speaking</Eyebrow>
            </div>
            <div>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider text-dark">
                THE<br />SPEAKERS
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {speakers.slice(0, 3).map((s) => (
              <SpeakerCard key={s.id} speaker={s} />
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/speakers"
              className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-dark border-b border-dark pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Meet All Speakers <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Schedule teaser */}
      <section className="bg-dark-warm text-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 mb-12 md:mb-16">
            <div>
              <Eyebrow>What's Happening</Eyebrow>
            </div>
            <div>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider">
                THE<br />SCHEDULE
              </h2>
            </div>
          </div>

          <div className="border-t border-cream/10">
            <ScheduleRow day="Friday" title="Opening Night Session" tag="Everyone" dark />
            <ScheduleRow day="Saturday" title="Breakout Sessions" tag="Main + Pastors" dark />
            <ScheduleRow day="Saturday" title="Night Session" tag="Everyone" dark />
            <ScheduleRow day="Sunday" title="Morning Gathering" tag="Everyone" dark />
          </div>

          <div className="mt-10">
            <SiteLinkButton variant="ghost-light" to="/schedule">
              See Full Schedule
            </SiteLinkButton>
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section id="register" className="bg-cream py-24 md:py-40">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 text-center">
          <Eyebrow className="inline-block">THREE DAYS. ONE DESIRE.</Eyebrow>
          <h2 className="font-display text-6xl md:text-8xl lg:text-[140px] tracking-wider text-dark mt-6">
            Don't miss what god is doing in this generation.
          </h2>
          <p className="mt-6 max-w-md mx-auto text-base text-text-muted leading-relaxed">
            Early registration is open. Bring your friends. Bring your hunger.
          </p>
          <div className="mt-10">
            <SiteLinkButton variant="primary" href="#register">
              Register Now
            </SiteLinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
