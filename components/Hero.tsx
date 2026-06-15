import Image from "next/image";
import Link from "next/link";

const orderButtons = [
  {
    city: "Oud-Beijerland",
    href: "https://tiqs.com/alfred/make_order?vendorid=334266&hidelocal=1",
  },
  {
    city: "Zwanenburg",
    href: "https://tiqs.com/alfred/make_order?vendorid=278312&hidelocal=1",
  },
  {
    city: "Amsterdam Sloterdijk Nieuw-West",
    href: "https://tiqs.com/alfred/make_order?vendorid=437208",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Authentiek Surinaams eten bij Broodje Lobi"
          fill
          className="object-cover object-top"
          priority
          quality={90}
        />
        {/* Dark warm gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-lobi-bg/90 via-lobi-bg/55 to-lobi-bg" />
        {/* Radial gold glow top-right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 20%, rgba(212,137,10,0.10), transparent)",
          }}
        />
        {/* Red warm tint bottom-left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 10% 80%, rgba(200,67,42,0.08), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-5 pt-28 pb-20 text-center lg:px-10">
        {/* Eyebrow badge */}
        <div
          className="animate-fade-in mb-7 inline-flex items-center gap-2.5 rounded-full border border-lobi-gold/30 bg-lobi-gold/8 px-5 py-2"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-lobi-gold" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-lobi-gold">
            Authentiek Surinaams
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-lobi-gold" />
        </div>

        {/* Main heading */}
        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          <h1 className="font-display leading-none">
            <span className="block text-xl font-light tracking-[0.35em] text-lobi-cream/50 uppercase sm:text-2xl lg:text-3xl">
              Broodje
            </span>
            <span className="block font-black italic text-lobi-gold text-[5.5rem] sm:text-[8rem] lg:text-[12rem] xl:text-[15rem]">
              Lobi
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p
          className="animate-fade-up font-display mt-1 mb-12 max-w-sm text-lg italic leading-relaxed text-lobi-cream/55 sm:text-xl"
          style={{ animationDelay: "0.6s" }}
        >
          Eten met liefde en passie bereid
        </p>

        {/* Order buttons */}
        <div
          className="animate-fade-up grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
          style={{ animationDelay: "0.8s" }}
        >
          {orderButtons.map((btn) => (
            <Link
              key={btn.city}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1.5 rounded-2xl border border-lobi-gold/20 bg-lobi-surface/65 px-4 py-4 backdrop-blur-sm transition-all duration-300 hover:border-lobi-gold hover:bg-lobi-gold hover:scale-[1.04] active:scale-100"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-lobi-gold group-hover:text-lobi-bg transition-colors">
                Pick-up locatie
              </span>
              <span className="text-sm font-semibold leading-tight text-center text-lobi-cream group-hover:text-lobi-bg transition-colors">
                {btn.city}
              </span>
              <span className="text-xs text-lobi-gold/50 group-hover:text-lobi-bg/60 transition-colors mt-0.5">
                ↗
              </span>
            </Link>
          ))}
        </div>

        {/* Scroll cue */}
        <div
          className="animate-fade-in mt-16 flex flex-col items-center gap-3"
          style={{ animationDelay: "1.4s" }}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-lobi-muted/60">
            Ontdek meer
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-lobi-muted/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
