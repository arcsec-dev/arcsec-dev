"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useUser, SignOutButton } from "@clerk/nextjs";
import { Shield, LayoutDashboard, History, Users, PlusCircle, Settings, LogOut } from "lucide-react";

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useUser();
  const [projectName, setProjectName] = useState("ACTIVE-SCAN");

  useEffect(() => {
    try {
      const data = sessionStorage.getItem("scanResult");
      if (data) {
        const report = JSON.parse(data);
        if (report?.project?.name) {
          setProjectName(report.project.name.toUpperCase());
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="bg-background text-on-background font-body-md overflow-hidden h-screen flex w-full">
      {/* SideNavBar Anchor */}
      <aside className="fixed left-0 top-0 h-full flex flex-col z-40 bg-surface-container border-r border-line-mute w-64">
        {/* Logo / Brand */}
        <div className="px-6 py-8 border-b border-line-mute">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <h1 className="font-display-lg text-2xl text-on-surface uppercase tracking-tight">
              ARCSEC<span className="text-signal">.</span> TERMINAL
            </h1>
          </Link>
          <p className="font-technical-xs text-[10px] text-line-mute mt-1 uppercase tracking-widest font-mono font-semibold">
            v2.4.0-stable
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 mt-6 px-2 space-y-1">
          {/* Active: Scans */}
          <Link 
            href="/results" 
            className="bg-surface-variant text-xanthous border-l-4 border-xanthous px-4 py-3 flex items-center gap-3 transition-all"
          >
            <Shield className="size-5" />
            <span className="font-technical-sm text-xs uppercase tracking-wider font-semibold font-mono">Scans</span>
          </Link>
          <Link 
            href="/results" 
            className="text-on-surface-variant px-4 py-3 flex items-center gap-3 hover:bg-surface-bright transition-all"
          >
            <LayoutDashboard className="size-5" />
            <span className="font-technical-sm text-xs uppercase tracking-wider font-semibold font-mono">Dashboard</span>
          </Link>
          <a 
            href="#" 
            className="text-on-surface-variant px-4 py-3 flex items-center gap-3 hover:bg-surface-bright transition-all"
          >
            <History className="size-5" />
            <span className="font-technical-sm text-xs uppercase tracking-wider font-semibold font-mono">History</span>
          </a>
          <a 
            href="#" 
            className="text-on-surface-variant px-4 py-3 flex items-center gap-3 hover:bg-surface-bright transition-all"
          >
            <Users className="size-5" />
            <span className="font-technical-sm text-xs uppercase tracking-wider font-semibold font-mono">Team</span>
          </a>
        </nav>

        {/* CTA Action */}
        <div className="px-4 py-6 border-t border-line-mute">
          <Link 
            href="/"
            className="w-full bg-primary text-on-primary-foreground font-technical-sm text-xs font-semibold py-4 border border-surface-container-lowest flex items-center justify-center gap-2 transition-transform active:scale-95 btn-primary-hover uppercase tracking-wider"
          >
            <PlusCircle className="size-4" />
            NEW ANALYSIS
          </Link>
        </div>

        {/* Footer Links */}
        <div className="px-2 pb-6 space-y-1">
          <a 
            href="#" 
            className="text-on-surface-variant px-4 py-2 flex items-center gap-3 hover:bg-surface-bright transition-all"
          >
            <Settings className="size-4" />
            <span className="font-technical-sm text-xs uppercase tracking-wider font-mono">Settings</span>
          </a>
          <div className="text-on-surface-variant px-4 py-2 flex items-center gap-3 hover:bg-surface-bright transition-all cursor-pointer">
            <LogOut className="size-4" />
            <SignOutButton>
              <button className="font-technical-sm text-xs uppercase tracking-wider font-mono text-left w-full cursor-pointer bg-transparent border-none p-0">
                Log Out
              </button>
            </SignOutButton>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 flex flex-col relative overflow-hidden h-screen">
        {/* TopNavBar Anchor */}
        <header className="flex justify-between items-center w-full px-10 h-16 bg-background border-b border-line-mute z-30">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="font-technical-sm text-xs text-line-mute font-mono uppercase tracking-wider">PROJECT /</span>
              <span className="font-technical-sm text-xs text-on-surface font-mono uppercase tracking-wider font-semibold">{projectName}</span>
            </div>
            <div className="hidden md:flex gap-6">
              <Link className="font-technical-sm text-xs text-on-surface-variant hover:text-xanthous transition-colors font-mono uppercase" href="/">Home</Link>
              <a className="font-technical-sm text-xs text-on-surface-variant hover:text-xanthous transition-colors font-mono uppercase" href="#">Docs</a>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="font-technical-sm text-xs text-on-surface leading-none font-mono font-semibold">
                  {user?.primaryEmailAddress?.emailAddress ? user.primaryEmailAddress.emailAddress.split("@")[0].toUpperCase() : "OPERATOR_01"}
                </p>
                <p className="font-technical-xs text-[10px] text-line-mute leading-none mt-1 font-mono">Tier: Enterprise</p>
              </div>
              <div className="w-10 h-10 border border-line-mute flex items-center justify-center bg-surface-container-high overflow-hidden rounded">
                <img 
                  alt="Profile avatar" 
                  className="w-full h-full object-cover grayscale" 
                  src={user?.imageUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuAu5tECVdXSZ-AsF5nAaTgCNREewNnnMQia_537IQgyKlB4-iXz7H1awHOQBm11bC7fB6oDmXLXvs4r4_cLoNRNg-H1IECAWtupf_h5ipkhS9SOSGUwILC0CGp2uBG6N2ytFvaPxEdszNrJJj-HHO6YrUoE9EE4GqOMrsfDyvxRdsXf12YK_Cae0ShkWjhdj6fTFWEbdfRdc4J2xCsYt9dE2BbBXCBwz5FDG1NJAqOIQOk6xdb7Cn2NBg"} 
                />
              </div>
            </div>
            <Link 
              href="/"
              className="bg-primary text-on-primary-foreground px-5 py-2 font-technical-sm text-xs border border-surface-container-lowest btn-primary-hover uppercase tracking-wider font-semibold"
            >
              DEPLOY SCAN
            </Link>
          </div>
        </header>

        {/* Canvas Workspace */}
        <div className="flex-1 relative overflow-auto custom-scrollbar p-6 md:p-10">
          {/* Background Dotted Grid */}
          <div className="absolute inset-0 dotted-canvas pointer-events-none"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto flex flex-col min-h-full pb-10">
            {children}
          </div>
        </div>

        {/* System Stats Footer */}
        <footer className="h-10 bg-surface-container border-t border-line-mute flex items-center justify-between px-10 z-30 font-mono text-[10px]">
          <div className="flex items-center gap-6">
            <span className="font-technical-xs text-line-mute uppercase font-semibold">© 2026 ARCSEC SYSTEMS. SECURE BY DEFAULT.</span>
            <div className="h-4 w-px bg-line-mute"></div>
            <div className="flex gap-4">
              <a className="font-technical-xs text-on-surface-variant hover:text-on-surface uppercase" href="#">CWE COMPLIANCE</a>
              <a className="font-technical-xs text-on-surface-variant hover:text-on-surface uppercase" href="#">OWASP TOP 10</a>
              <a className="font-technical-xs text-on-surface-variant hover:text-on-surface uppercase" href="#">PRIVACY</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="font-technical-xs text-line-mute uppercase">UPTIME:</span>
              <span className="font-technical-xs text-on-surface font-semibold">99.992%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-technical-xs text-line-mute uppercase">ENGINE:</span>
              <span className="font-technical-xs text-primary font-semibold">STABLE_V4</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
