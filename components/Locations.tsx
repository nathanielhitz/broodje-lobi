"use client";

import { useInView } from "@/hooks/useInView";

const locations = [
  {
    id: "zwanenburg",
    name: "Zwanenburg",
    address: "Dennelaan 113",
    city: "Zwanenburg",
    hours: [
      { days: "Woensdag – Zaterdag", time: "11:00 – 20:00" },
      { days: "Zondag", time: "16:00 – 20:00" },
    ],
    orderHref:
      "https://tiqs.com/alfred/make_order?vendorid=278312&hidelocal=1",
  },
  {
    id: "oud-beijerland",
    name: "Oud-Beijerland",
    address: "Oost-Voorstraat 63",
    city: "Oud-Beijerland",
    badge: "Nieuw",
    hours: [
      { days: "Woensdag – Zaterdag", time: "11:30 – 19:30" },
      { days: "Zondag", time: "16:00 – 19:30" },
    ],
    orderHref:
      "https://tiqs.com/alfred/make_order?vendorid=334266&hidelocal=1",
  },
];

export default function Locations() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="locaties"
      ref={ref}
      className="relative bg-lobi-surface px-5 py-24 lg:px-10 lg:py-36"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lobi-gold/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lobi-border to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className={`reveal ${inView ? "in-view" : ""} mb-14 text-center`}>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-lobi-gold">
            Waar te vinden
          </p>
          <h2 className="font-display text-4xl font-black italic text-lobi-cream sm:text-5xl lg:text-6xl">
            Onze Locaties
          </h2>
        </div>

        {/* Location cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {locations.map((loc, i) => (
            <div
              key={loc.id}
              className={`reveal reveal-d${i + 1} ${inView ? "in-view" : ""} group relative flex flex-col rounded-3xl border border-lobi-border bg-lobi-surface-2 p-8 transition-all duration-300 hover:border-lobi-gold/40`}
            >
              {/* Badge */}
              {loc.badge && (
                <span className="absolute top-6 right-6 rounded-full bg-lobi-red px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {loc.badge}
                </span>
              )}

              {/* Location name */}
              <div className="mb-6">
                {/* Pin icon */}
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-lobi-gold/30 bg-lobi-gold/10">
                  <svg
                    className="h-5 w-5 text-lobi-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>

                <h3 className="font-display text-2xl font-black italic text-lobi-gold mb-1">
                  {loc.name}
                </h3>
                <p className="text-sm text-lobi-muted">{loc.address}</p>
              </div>

              {/* Hours */}
              <div className="mb-6 flex-1">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-lobi-cream/50">
                  Openingstijden
                </p>
                <ul className="space-y-2.5">
                  {loc.hours.map((h) => (
                    <li
                      key={h.days}
                      className="flex items-center justify-between gap-4 text-sm"
                    >
                      <span className="text-lobi-muted">{h.days}</span>
                      <span className="font-semibold text-lobi-cream tabular-nums">
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="mb-6 h-px bg-lobi-border" />

              {/* CTA */}
              <a
                href={loc.orderHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-lobi-gold/30 px-6 py-3 text-sm font-semibold text-lobi-gold transition-all duration-300 hover:bg-lobi-gold hover:text-lobi-bg hover:border-lobi-gold group-hover:border-lobi-gold/50"
              >
                Bestellen in {loc.name}
                <span className="text-xs">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
