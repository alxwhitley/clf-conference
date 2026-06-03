import { Eyebrow } from "./Eyebrow";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-dark text-cream grain pt-32 md:pt-40 pb-16 md:pb-24 border-b-2 border-gold overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 30%, rgba(196,154,58,0.25), transparent 50%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mt-4 tracking-wider">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-xl text-base md:text-lg text-cream/60 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
