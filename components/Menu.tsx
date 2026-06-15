"use client";

import { menuCategories } from "@/lib/menuData";
import { useInView } from "@/hooks/useInView";

export default function Menu() {
  const { ref, inView } = useInView(0.05);

  return (
    <section
      id="menu"
      ref={ref}
      className="relative bg-lobi-bg px-5 py-24 lg:px-10 lg:py-36"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lobi-border to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className={`reveal ${inView ? "in-view" : ""} mb-14 text-center`}>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-lobi-gold">
            Wat wij serveren
          </p>
          <h2 className="font-display text-4xl font-black italic text-lobi-cream sm:text-5xl lg:text-6xl">
            Ons Menu
          </h2>
          <p className="mt-4 text-sm text-lobi-muted">
            Verse gerechten bereid met authentieke Surinaamse kruiden en
            recepten
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {menuCategories.map((cat, i) => (
            <div
              key={cat.id}
              className={`reveal reveal-d${Math.min(i + 1, 6)} ${inView ? "in-view" : ""} group rounded-2xl border border-lobi-border bg-lobi-surface p-6 transition-all duration-300 hover:border-lobi-gold/40 hover:bg-lobi-surface-2`}
            >
              {/* Category header */}
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-lobi-border group-hover:bg-lobi-gold/30 transition-colors" />
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-lobi-gold">
                  {cat.name}
                </h3>
                <div className="h-px flex-1 bg-lobi-border group-hover:bg-lobi-gold/30 transition-colors" />
              </div>

              {/* Items */}
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start gap-2.5 text-sm text-lobi-muted"
                  >
                    <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-lobi-gold/50" />
                    <span className="leading-snug">{item.name}</span>
                    {item.tags?.includes("vega") && (
                      <span className="ml-auto shrink-0 rounded-full bg-lobi-green/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-lobi-green">
                        Vega
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Order CTA */}
        <div className={`reveal reveal-d6 ${inView ? "in-view" : ""} mt-14 text-center`}>
          <p className="mb-5 text-sm text-lobi-muted">
            Bestel online via onze pick-up locaties
          </p>
          <a
            href="https://www.thuisbezorgd.nl/menu/broodje-lobi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-lobi-gold bg-lobi-gold px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] text-lobi-bg transition-all duration-300 hover:bg-lobi-gold-light hover:border-lobi-gold-light hover:scale-105 active:scale-100"
          >
            Bestel via Thuisbezorgd ↗
          </a>
        </div>
      </div>
    </section>
  );
}
