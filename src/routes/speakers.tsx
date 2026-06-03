import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SpeakerCard } from "@/components/site/SpeakerCard";
import { speakers } from "@/data/conference";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Speakers — New Wave Conference" },
      {
        name: "description",
        content:
          "The voices teaching at New Wave 2025. Pastors, authors, and worship leaders carrying a heart for the next generation.",
      },
      { property: "og:title", content: "Speakers — New Wave Conference" },
      {
        property: "og:description",
        content:
          "Meet the pastors, authors, and worship leaders teaching at New Wave 2025 in Raleigh, NC.",
      },
    ],
  }),
  component: SpeakersPage,
});

function SpeakersPage() {
  return (
    <>
      <PageHero
        eyebrow="Who's Speaking"
        title="THE SPEAKERS"
        subtitle="Pastors, authors, and worship leaders who carry the weight of what they teach."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {speakers.map((s) => (
              <SpeakerCard key={s.id} speaker={s} showBio />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
