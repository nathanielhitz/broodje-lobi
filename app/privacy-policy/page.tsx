import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Broodje Lobi",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-lobi-bg px-5 py-24 lg:px-10">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-lobi-muted hover:text-lobi-gold transition-colors"
        >
          ← Terug naar home
        </Link>

        <h1 className="font-display text-4xl font-black italic text-lobi-gold mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-lobi-muted leading-relaxed">
          <p>
            Broodje Lobi hecht veel waarde aan de bescherming van uw
            persoonsgegevens. In deze privacy policy willen we heldere en
            transparante informatie geven over hoe wij omgaan met
            persoonsgegevens.
          </p>
          <p>
            Voor meer informatie kunt u contact met ons opnemen via onze
            vestigingen in Zwanenburg of Oud-Beijerland.
          </p>
          <p className="text-lobi-cream/40 text-sm">
            © 2024 Broodje Lobi — www.broodjelobi.nl
          </p>
        </div>
      </div>
    </main>
  );
}
