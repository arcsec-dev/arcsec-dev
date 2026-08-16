"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [active, setActive] = useState("product");

  useEffect(() => {
    const features = document.getElementById("features");
    const howItWorks = document.getElementById("how-it-works");

    if (!features || !howItWorks) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(features);
    observer.observe(howItWorks);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="w-full sticky top-0 z-50 bg-surface border-b border-line-mute shadow-[4px_4px_0px_0px_rgba(14,14,14,1)]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-[40px] flex items-center justify-between h-20">

        {/* ARCSEC LOGO */}
        <Link
          href="/"
          className="font-display-lg text-4xl text-on-surface tracking-tighter hover:opacity-90 transition-opacity uppercase"
        >
          ARCSEC<span className="text-red-600">.</span>
        </Link>

        {/* NAVIGATION */}
        <div className="hidden md:flex gap-6 items-center">

          {/* PRODUCT */}
          <Link
            href="/#features"
            className={`font-technical-sm text-xs uppercase tracking-wider transition-all duration-150 ${
              active === "features"
                ? "text-signal font-bold border-b-2 border-signal pb-1"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            Product
          </Link>

          {/* HOW IT WORKS */}
          <Link
            href="/#how-it-works"
            className={`font-technical-sm text-xs uppercase tracking-wider transition-all duration-150 ${
              active === "how-it-works"
                ? "text-signal font-bold border-b-2 border-signal pb-1"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            How it works
          </Link>

          {/* DASHBOARD */}
          <Link
            href="/results"
            className="font-technical-sm text-xs uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Dashboard
          </Link>

        </div>

        {/* DEPLOY SCAN */}
        <Link
          href="/results"
          className="bg-signal text-paper px-6 py-2 font-technical-sm text-xs uppercase font-bold hard-shadow-ink hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all text-center inline-block"
        >
          Deploy Scan
        </Link>

      </div>
    </nav>
  );
}