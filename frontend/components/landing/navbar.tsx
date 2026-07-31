import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-surface border-b border-line-mute shadow-[4px_4px_0px_0px_rgba(14,14,14,1)]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-[40px] flex items-center justify-between h-20">
        <Link 
          href="/" 
          className="font-display-lg text-4xl text-on-surface tracking-tighter hover:opacity-90 transition-opacity uppercase"
        >
          ARCSEC<span className="text-red-600">.</span>
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <a 
            className="font-technical-sm text-xs uppercase tracking-wider text-signal font-bold border-b-2 border-signal pb-1 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150" 
            href="#features"
          >
            Product
          </a>
          <a 
            className="font-technical-sm text-xs uppercase tracking-wider text-on-surface-variant hover:text-on-surface hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150" 
            href="#how-it-works"
          >
            How it works
          </a>
          <a 
            className="font-technical-sm text-xs uppercase tracking-wider text-on-surface-variant hover:text-on-surface hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150" 
            href="/results"
          >
            Dashboard
          </a>
        </div>
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
