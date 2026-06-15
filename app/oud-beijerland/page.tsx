import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oud-Beijerland — Broodje Lobi",
  description:
    "Ons nieuwe filiaal in Oud-Beijerland. Oost-Voorstraat 63, open van woensdag t/m zondag.",
};

export default function OudBeijerland() {
  return (
    <main className="min-h-screen bg-lobi-bg px-5 py-24 lg:px-10">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-lobi-muted hover:text-lobi-gold transition-colors"
        >
          ← Terug naar home
        </Link>

        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-lobi-gold">
          Nieuw filiaal
        </p>
        <h1 className="font-display text-5xl font-black italic text-lobi-cream mb-2">
          Oud-Beijerland
        </h1>
        <p className="font-display text-2xl italic text-lobi-gold mb-10">
          ♡ Lobi
        </p>

        <div className="rounded-2xl border border-lobi-border bg-lobi-surface p-8 space-y-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-lobi-muted mb-1">
              Adres
            </p>
            <p className="text-lobi-cream font-medium">Oost-Voorstraat 63</p>
            <p className="text-lobi-muted text-sm">Oud-Beijerland</p>
          </div>

          <div className="h-px bg-lobi-border" />

          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-lobi-muted mb-3">
              Openingstijden
            </p>
            <ul className="space-y-2">
              <li className="flex justify-between text-sm">
                <span className="text-lobi-muted">Woensdag – Zaterdag</span>
                <span className="text-lobi-cream font-semibold tabular-nums">
                  11:30 – 19:30
                </span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-lobi-muted">Zondag</span>
                <span className="text-lobi-cream font-semibold tabular-nums">
                  16:00 – 19:30
                </span>
              </li>
            </ul>
          </div>

          <div className="h-px bg-lobi-border" />

          <a
            href="https://tiqs.com/alfred/make_order?vendorid=334266&hidelocal=1"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center rounded-xl bg-lobi-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-lobi-bg hover:bg-lobi-gold-light transition-colors"
          >
            Bestellen ↗
          </a>
        </div>
      </div>
    </main>
  );
}
