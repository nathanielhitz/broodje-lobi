"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Privacy Policy", href: "/privacy-policy", external: false },
  {
    label: "Thuisbezorgd",
    href: "https://www.thuisbezorgd.nl/menu/broodje-lobi",
    external: true,
  },
  {
    label: "Ons nieuw filiaal in Oud-Beijerland",
    href: "/oud-beijerland",
    external: false,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-lobi-surface/95 backdrop-blur-md border-b border-lobi-border shadow-xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-baseline gap-1"
            aria-label="Broodje Lobi — home"
          >
            <span className="font-display text-base font-medium tracking-widest text-lobi-cream/80 uppercase group-hover:text-lobi-cream transition-colors duration-300">
              Broodje
            </span>
            <span className="font-display text-xl italic font-black text-lobi-gold group-hover:text-lobi-gold-light transition-colors duration-300 ml-1">
              Lobi
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="text-sm font-medium text-lobi-muted hover:text-lobi-cream transition-colors duration-200 tracking-wide"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] p-2 cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            aria-expanded={open}
          >
            <span
              className={`block h-0.5 w-5 bg-lobi-cream origin-center transition-all duration-300 ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-lobi-cream transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-lobi-cream origin-center transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden animate-slide-down border-t border-lobi-border bg-lobi-surface">
          <ul className="flex flex-col gap-1 px-5 py-5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3 text-base font-medium text-lobi-cream border-b border-lobi-border/40 hover:text-lobi-gold transition-colors"
                >
                  {l.label}
                  {l.external && (
                    <span className="text-lobi-muted text-xs">↗</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
