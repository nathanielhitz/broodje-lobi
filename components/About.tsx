"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="over-ons"
      ref={ref}
      className="relative bg-lobi-surface px-5 py-24 lg:px-10 lg:py-36"
    >
      {/* Decorative borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lobi-gold/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lobi-gold/15 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-28">
          {/* ── Text column ── */}
          <div>
            <p
              className={`reveal reveal-d1 ${inView ? "in-view" : ""} mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-lobi-gold`}
            >
              Over Ons
            </p>

            <blockquote
              className={`reveal reveal-d2 ${inView ? "in-view" : ""} font-display text-2xl font-light italic leading-relaxed text-lobi-cream sm:text-3xl lg:text-[2rem] mb-8`}
            >
              "Authentiek Surinaams lekker eten met liefde en passie bereid!"
            </blockquote>

            <div
              className={`reveal reveal-d3 ${inView ? "in-view" : ""} mb-8 h-px w-12 bg-lobi-gold`}
            />

            <p
              className={`reveal reveal-d3 ${inView ? "in-view" : ""} text-[15px] leading-relaxed text-lobi-muted`}
            >
              Welkom bij Broodje Lobi! Hier proef je de authentieke smaken van
              de Surinaamse keuken, bereid met liefde en vakmanschap. Oprichter
              Ryan Rijger, geïnspireerd door de kookkunsten van zijn moeder,
              brengt met Broodje Lobi een stukje Suriname naar Nederland.
            </p>

            <p
              className={`reveal reveal-d4 ${inView ? "in-view" : ""} mt-4 text-[15px] leading-relaxed text-lobi-muted`}
            >
              Samen met zijn partner Laura Ponticorvo zorgt hij voor een warme,
              gastvrije sfeer waar iedereen zich thuis voelt. Bij Broodje Lobi
              staat kwaliteit en klantvriendelijkheid voorop.
            </p>

            {/* Lobi = Love callout */}
            <div
              className={`reveal reveal-d5 ${inView ? "in-view" : ""} mt-10 inline-flex items-center gap-4 rounded-xl border border-lobi-border bg-lobi-surface-2 px-5 py-3.5`}
            >
              <span className="font-display text-2xl italic font-black text-lobi-gold leading-none">
                Lobi
              </span>
              <span className="h-4 w-px bg-lobi-border" />
              <span className="text-sm text-lobi-muted">
                Liefde in het Surinaams Creools
              </span>
            </div>
          </div>

          {/* ── Image column ── */}
          <div className={`reveal reveal-d2 ${inView ? "in-view" : ""} relative`}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="https://picsum.photos/id/488/800/1000"
                alt="Verse Surinaamse gerechten bereid met liefde"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Warm tint overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,8,5,0.65) 0%, transparent 50%), linear-gradient(to bottom-right, rgba(200,67,42,0.08), transparent 60%)",
                }}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-lobi-gold/25 bg-lobi-surface/90 px-5 py-3.5 backdrop-blur-sm shadow-xl">
              <p className="font-display text-3xl font-black text-lobi-gold leading-none">
                ♡
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-lobi-cream/70">
                Met Liefde
              </p>
            </div>

            {/* Corner accent */}
            <div className="absolute -top-3 -right-3 h-16 w-16 rounded-full border border-lobi-gold/20 bg-lobi-gold/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
