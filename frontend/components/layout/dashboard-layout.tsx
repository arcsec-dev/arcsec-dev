"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";

export function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();


  return (
    <div className="bg-background text-on-surface font-body overflow-hidden h-screen flex w-full">
      {/* SideNavBar Anchor */}
      <aside className="fixed left-0 top-0 h-full flex flex-col z-40 bg-surface-container-lowest border-r border-line-mute w-64">
        {/* Logo / Brand */}
        <div className="px-8 py-10 border-b border-line-mute">
          <Link href="/" className="hover:opacity-90 transition-opacity block">
            <span className="font-display-lg text-4xl tracking-tighter text-on-surface uppercase block">
              ARCSEC<span className="text-red-600">.</span>
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 mt-8 px-4 space-y-2">
          <Link 
            href="/dashboard" 
            className={`px-4 py-3 flex items-center gap-4 transition-all group ${
              pathname === "/dashboard" 
                ? "bg-primary/10 text-accent border-r-2 border-accent" 
                : "text-on-surface/40 hover:text-on-surface hover:bg-surface-container-high"
            }`}
          >
            <span className="material-symbols-outlined text-xl">radar</span>
            <span className="font-technical text-xs font-bold uppercase tracking-widest">Scans</span>
          </Link>
          
          <Link 
            href="/report" 
            className={`px-4 py-3 flex items-center gap-4 transition-all group ${
              pathname === "/report" 
                ? "bg-primary/10 text-accent border-r-2 border-accent" 
                : "text-on-surface/40 hover:text-on-surface hover:bg-surface-container-high"
            }`}
          >
            <span className="material-symbols-outlined text-xl">grid_view</span>
            <span className="font-technical text-xs uppercase tracking-widest font-semibold">Vulnerability & Fixes</span>
          </Link>

          <Link 
            href="/results" 
            className={`px-4 py-3 flex items-center gap-4 transition-all group ${
              pathname === "/results" 
                ? "bg-primary/10 text-accent border-r-2 border-accent" 
                : "text-on-surface/40 hover:text-on-surface hover:bg-surface-container-high"
            }`}
          >
            <span className="material-symbols-outlined text-xl">analytics</span>
            <span className="font-technical text-xs uppercase tracking-widest font-semibold">Download Fixes</span>
          </Link>
          
        </nav>

        {/* CTA Action */}

        {/* Footer Links */}

      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 flex flex-col relative overflow-hidden h-screen bg-surface-container-lowest">
        {/* TopNavBar Anchor */}
        <header className="flex justify-between items-center w-full px-10 h-20 bg-surface-container-lowest/80 backdrop-blur-md border-b border-line-mute z-30">
          <div className="flex items-center gap-10">
            <div className="hidden lg:flex gap-8">
              <Link className="font-technical text-[11px] text-on-surface/50 hover:text-accent transition-colors tracking-widest uppercase font-semibold" href="#">Repository</Link>
              <a className="font-technical text-[11px] text-on-surface/50 hover:text-accent transition-colors tracking-widest uppercase" href="#">Documentation</a>
              <a className="font-technical text-[11px] text-on-surface/50 hover:text-accent transition-colors tracking-widest uppercase" href="#">Changelog</a>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              {/* profile/user section removed */}
            </div>
            <Link 
              href="/dashboard"
              className="border border-primary text-primary px-6 py-2.5 font-technical text-[10px] font-bold tracking-[0.2em] hover:bg-primary hover:text-white transition-all uppercase"
            >
              New Scan
            </Link>
          </div>
        </header>

        {/* Canvas Workspace */}
        <div className="flex-1 relative overflow-auto custom-scrollbar bg-surface-container-lowest">
          {/* Background Dotted Grid */}
          <div className="absolute inset-0 dotted-canvas pointer-events-none"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-10 py-16 flex flex-col min-h-full pb-10">
            {children}
          </div>
        </div>

        {/* System Stats Footer */}
        <footer className="h-12 bg-surface-container-lowest border-t border-line-mute flex items-center justify-between px-10 z-30 font-technical text-[9px]">
          <div className="flex items-center gap-10">
            <span className="text-[9px] text-on-surface/30 uppercase tracking-[0.2em]">© 2026 ARCSEC // SECURE BY DESIGN</span>
            <div className="flex gap-6 border-l border-line-mute pl-10">
              <a className="text-[9px] text-on-surface/40 hover:text-accent transition-colors tracking-widest" href="#">CWE</a>
              <a className="text-[9px] text-on-surface/40 hover:text-accent transition-colors tracking-widest" href="#">CVE DB</a>
              <a className="text-[9px] text-on-surface/40 hover:text-accent transition-colors tracking-widest" href="#">LICENSE</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
