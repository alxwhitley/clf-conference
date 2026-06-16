import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/site/Eyebrow";
import { SiteLinkButton } from "@/components/site/Button";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Way | A Young Adults Gathering" },
      {
        name: "description",
        content:
          "Why The Way exists: a young adults gathering in Raleigh, NC bringing two generations together for discipleship, transformation, and mission.",
      },
      { property: "og:title", content: "About — The Way" },
      {
        property: "og:description",
        content:
          "The Way is not another conference. It is a generation finding its way forward — an invitation for the whole church to witness it.",
      },
    ],
  }),
  component: AboutPage,
});

const subheadCls =
  "font-display text-[clamp(2rem,6vw,3.5rem)]";
const bodyCls = "text-base md:text-lg leading-[1.7]";

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark-warm text-cream grain pt-32 md:pt-40 pb-20 md:pb-32 border-b-2 border-gold overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 30%, rgba(196,154,58,0.25), transparent 50%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
          <Eyebrow>RALEIGH, NC — OCT 17–19</Eyebrow>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mt-6 max-w-5xl">
            WHY THE WAY EXISTS.
          </h1>
        </div>
      </section>

      {/* Section 1 — Origin */}
      <section className="bg-cream text-dark py-20 md:py-32 border-b border-border">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <h2 className={subheadCls}>IT STARTED WITH A GATHERING.</h2>
          <div className={`mt-8 space-y-6 ${bodyCls}`}>
            <p>
              For years, CLF Church has hosted an annual pastors gathering every
              October — a time of refreshment and equipping that has drawn
              leaders from across the globe. Mexico. Africa. Europe. Canada.
              Nations represented under one roof, believing together that the
              local church is still the hope of the world.
            </p>
            <p>But at the start of this year, something shifted.</p>
            <p>
              A strong conviction settled over our community — one that wouldn't
              let go. The emerging generation was not a side project. They were
              the assignment.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Problem */}
      <section className="bg-dark-warm text-cream grain py-20 md:py-32 border-b border-gold/20">
        <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-10">
          <h2 className={subheadCls}>A GENERATION ENCOUNTERED. NOW WHAT?</h2>
          <div className={`mt-8 space-y-6 ${bodyCls} text-cream/85`}>
            <p>
              CLF has been hosting monthly worship and ministry nights called
              After Hours. By grace, something unexpected has happened — over
              500 young adults gather every month in our building, hungry and
              responding to what God is doing.
            </p>
            <p>Which raises the real question: what comes next?</p>
            <p>
              It's one thing for God to grab a generation. It's another for that
              generation to be truly discipled. Most young people are
              disillusioned with discipleship because they've rarely seen it
              actually work — rarely seen it transform lives, homes, families,
              and communities in a way that lasts.
            </p>
            <p>When a generation encounters God, they need a way forward.</p>
          </div>
        </div>
      </section>

      {/* Section 3 — Conviction */}
      <section className="bg-cream text-dark py-20 md:py-32 border-b border-border">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <h2 className={subheadCls}>THE WORLD IS BEING SHAPED RIGHT NOW.</h2>
          <div className={`mt-8 space-y-6 ${bodyCls}`}>
            <p>
              Worldwide chaos is not accidental. It is a war — and the front
              line is the next generation, because whoever shapes them shapes
              the culture of the world.
            </p>
            <p>
              The church cannot afford to be passive. For CLF, this year has
              been all hands on deck: to reach the emerging generation, to
              disciple them deeply, and to send them out as people who carry the
              Kingdom into every corner of their world.
            </p>
            <p>The Way is that effort, concentrated into three days.</p>
          </div>
        </div>
      </section>

      {/* Section 4 — What Makes It Different */}
      <section className="bg-dark-warm text-cream grain py-20 md:py-32 border-b border-gold/20">
        <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-10">
          <h2 className={subheadCls}>TWO GENERATIONS. ONE GATHERING.</h2>
          <div className={`mt-8 space-y-6 ${bodyCls} text-cream/85`}>
            <p>
              At its core, The Way is a young adults conference — built around
              four stages of discipleship that actually work: Deliverance,
              Transformation, Rulership, and Mission. A framework not just for a
              weekend, but for a life.
            </p>
            <p>But what makes this gathering unique is who else is in the room.</p>
            <p>
              The international leaders who have gathered with CLF for years
              will be here — not just as observers, but as participants. Pastors
              and senior leaders from across the nations coming alongside a
              rising generation to witness what God is stirring, to speak into
              it, and to carry it home to their own communities.
            </p>
            <p>
              In a broken world, it is generations working together that opens
              the way forward.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 — Invitation */}
      <section className="bg-cream text-dark py-20 md:py-32 border-b border-border">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <h2 className={`${subheadCls} text-center`}>THIS IS FOR YOU.</h2>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <article className="bg-dark-warm text-cream border-t-2 border-gold p-8 md:p-10">
              <div className="eyebrow">IF YOU'RE A YOUNG ADULT</div>
              <p className={`${bodyCls} mt-6 text-cream/85`}>
                Come hungry. Come ready to be equipped with more than
                inspiration — a discipleship framework that transforms from the
                inside out.
              </p>
            </article>
            <article className="bg-dark-warm text-cream border-t-2 border-gold p-8 md:p-10">
              <div className="eyebrow">IF YOU'RE A PASTOR OR LEADER</div>
              <p className={`${bodyCls} mt-6 text-cream/85`}>
                Come expectant. Come ready to be inspired by what God is doing
                in a generation, and empowered to see it follow you home to your
                own gathering.
              </p>
            </article>
          </div>

          <div className="mt-16 md:mt-24 text-center">
            <p className="font-display text-[clamp(2.25rem,7vw,4.5rem)] max-w-4xl mx-auto">
              THE WAY IS NOT ANOTHER CONFERENCE.
            </p>
            <p className="mt-6 text-base md:text-lg text-text-muted max-w-2xl mx-auto leading-[1.7]">
              It is a generation finding its way forward — and an invitation for
              the whole church to witness it.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-dark-warm text-cream grain py-20 md:py-32">
        <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-10 text-center">
          <Eyebrow>OCT 17–19 · RALEIGH, NC</Eyebrow>
          <h2 className="font-display text-[clamp(2.5rem,8vw,5rem)] mt-6">
            DON'T MISS WHAT GOD IS DOING.
          </h2>
          <div className="mt-10 flex flex-col md:flex-row gap-4 md:gap-5 md:justify-center">
            <SiteLinkButton
              variant="primary"
              href={siteConfig.registrationUrlMain}
              className="w-full md:w-auto"
            >
              Register Now
            </SiteLinkButton>
            <SiteLinkButton
              variant="ghost-light"
              to="/pastors"
              className="w-full md:w-auto"
            >
              For Pastors & Leaders
            </SiteLinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
