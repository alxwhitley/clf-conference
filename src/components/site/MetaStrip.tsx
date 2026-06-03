const items = [
  { label: "When", value: "Oct 17–19" },
  { label: "Where", value: "Raleigh NC" },
  { label: "Who", value: "Ages 18–30" },
  { label: "Sessions", value: "12 Total" },
];

export function MetaStrip() {
  return (
    <section className="bg-dark text-cream border-b-2 border-gold">
      <div className="mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4">
        {items.map((it, i) => (
          <div
            key={it.label}
            className={`px-5 md:px-10 py-8 md:py-10 ${
              i > 0 ? "md:border-l border-cream/10" : ""
            } ${i % 2 === 1 ? "border-l border-cream/10 md:border-l" : ""} ${
              i >= 2 ? "border-t border-cream/10 md:border-t-0" : ""
            }`}
          >
            <div className="eyebrow !text-cream/40">{it.label}</div>
            <div className="font-display text-3xl md:text-4xl mt-3 tracking-wider">
              {it.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
