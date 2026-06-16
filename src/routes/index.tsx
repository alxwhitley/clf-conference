import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { MetaStrip } from "@/components/site/MetaStrip";
import { Eyebrow } from "@/components/site/Eyebrow";
import { SpeakerCard } from "@/components/site/SpeakerCard";
import { SiteLinkButton } from "@/components/site/Button";
import { TrackToggle } from "@/components/site/TrackToggle";
import { speakers } from "@/data/conference";
import { sessions, dayLabels } from "@/data/sessions";
import { useTrack } from "@/hooks/useTrack";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Way — A Young Adults Gathering | Oct 16–18, Raleigh NC" },
      {
        name: "description",
        content:
          "A three-day gathering for young adults in Raleigh, NC. October 16–18, 2026.",
      },
      { property: "og:title", content: "The Way — A Young Adults Gathering" },
      {
        property: "og:description",
        content:
          "THREE DAYS. ONE DESIRE. The Way is a young adults conference in Raleigh, NC. October 16–18, 2026.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { track } = useTrack();
  const previewSessions = sessions
    .filter((s) => s.tracks.includes(track) && s.type !== "meal")
    .slice(0, 4);
  const registerHref =
    track === "pastors" ? siteConfig.registrationUrlPastors : siteConfig.registrationUrlMain;
  return (
    <>
      <Hero />
      <MetaStrip />


      {/* About */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 grid md:grid-cols-[1fr_1.4fr] gap-12">
          <div>
            <Eyebrow>What Is The Way</Eyebrow>
          </div>
          <div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider text-dark">
              NOT ANOTHER<br />CONFERENCE.
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-base md:text-lg text-dark/70 leading-relaxed">
              <p>
                Every month, 500+ young adults pack a room through After Hours — hungry, showing up, responding to what God is doing. The question that keeps surfacing is the only one that matters: what comes next?
              </p>
              <p>
                The church has never been more resourced — and yet a generation is still circling the same issues, unsure of who they are or why they're here. Something is missing. It's not more information. It's formation.
              </p>
              <p>
                The Way isn't built to shove more into your head. It's built to move you through four stages that actually work — Deliverance, Transformation, Rulership, and Mission. It exists to move a generation through formation and into mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Way — four steps */}
      <section className="bg-cream py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 mb-12 md:mb-16">
            <div>
              <Eyebrow>The Way Forward</Eyebrow>
            </div>
            <div>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider text-dark">
                A JOURNEY BACK TO WHO YOU WERE MADE TO BE.
              </h2>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-dark/70 leading-relaxed">
                The weekend is structured around four essential stages of the formation process.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-5">
            {[
              { n: "01", title: "Deliverance", body: "Most believers are circling the same issues, thinking more information or trying harder will break them out.", close: "We must be set free before we can go anywhere." },
              { n: "02", title: "Transformation", body: "Most believers get free in a moment but never walk through the process that makes freedom last.", close: "We must let freedom become who we are." },
              { n: "03", title: "Rulership", body: "Real transformation produces rulers — people who carry God's authority into their homes, work, and world.", close: "We must take up the authority we were given." },
              { n: "04", title: "Mission", body: "It was never about our freedom alone — but the unique way we'd advance the gospel into the world.", close: "We must be sent." },
            ].map((step) => (
              <div key={step.n} className="border-t border-dark/20 pt-5">
                <div className="font-display text-5xl md:text-6xl tracking-wider text-gold leading-none">
                  {step.n}
                </div>
                <h3 className="font-display text-2xl md:text-3xl tracking-wider text-dark mt-4">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-dark/70 leading-relaxed">
                  {step.body}
                </p>
                <p className="mt-3 text-sm md:text-base text-gold font-semibold leading-relaxed">
                  {step.close}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 md:mt-16 max-w-2xl text-base md:text-lg text-dark/70 leading-relaxed">
            What you'll leave with isn't just a weekend experience. It's a framework you'll carry for the rest of your life.
          </p>
        </div>
      </section>

      {/* Pastors on-ramp */}
      <section className="bg-dark text-cream border-b-2 border-gold py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-center">
          <div>
            <Eyebrow>For Pastors & Leaders</Eyebrow>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <p className="text-base md:text-lg text-cream/80 leading-relaxed max-w-xl">
              Leading a church or ministry? The Way runs a dedicated track for pastors and international leaders — built around the same four stages, made for those who carry others.
            </p>
            <SiteLinkButton variant="ghost-light" to="/pastors">
              For Pastors & Leaders →
            </SiteLinkButton>
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
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 mb-10 md:mb-12">
            <div>
              <Eyebrow>What's Happening</Eyebrow>
            </div>
            <div>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider">
                THE<br />SCHEDULE
              </h2>
            </div>
          </div>

          <div className="mb-8">
            <TrackToggle />
          </div>

          <div className="border-t border-cream/10">
            {previewSessions.map((s) => {
              const opt = s.breakoutOptions?.find((o) => o.track === track);
              return (
                <div
                  key={s.id}
                  className="grid grid-cols-[100px_1fr] md:grid-cols-[180px_1fr] items-baseline gap-4 py-5 md:py-6 border-b border-cream/10"
                >
                  <div className="eyebrow !text-cream/40">
                    {dayLabels[s.day].short} · {s.time}
                  </div>
                  <div>
                    <div className="font-display text-xl md:text-2xl tracking-wider text-cream">
                      {opt?.title ?? s.title}
                    </div>
                    {opt?.speaker && (
                      <div className="text-xs text-cream/50 mt-1">{opt.speaker}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <Link
              to="/schedule"
              search={{ track }}
              className="inline-flex items-center justify-center px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] rounded-[2px] bg-transparent text-cream border border-cream/70 hover:bg-cream hover:text-dark transition-colors"
            >
              See Full Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section id="register" className="bg-cream py-24 md:py-40">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 text-center">
          <Eyebrow className="inline-block">Three Days. One Desire.</Eyebrow>
          <h2 className="font-display text-6xl md:text-8xl lg:text-[140px] tracking-wider text-dark mt-6">
            Restoring a generation to their identity so they can step boldly into their purpose.
          </h2>
          <p className="mt-6 max-w-md mx-auto text-base text-text-muted leading-relaxed">
            Early registration is open. Bring your friends. Bring your hunger.
          </p>
          <div className="mt-10">
            <SiteLinkButton variant="primary" href={registerHref}>
              Register Now
            </SiteLinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
