"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Hero() {
  const [terminalStep, setTerminalStep] = useState(0);

  // Animate terminal lines on mount
  useEffect(() => {
    const intervals = [800, 1600, 2400, 3200, 4000, 4800, 5600, 6400];
    const timers = intervals.map((ms, idx) =>
      setTimeout(() => {
        setTerminalStep(idx + 1);
      }, ms)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="max-w-[1240px] mx-auto px-6 md:px-[40px] pt-24 pb-[110px] flex flex-col items-center text-center">
      <div className="reveal active">
        <h1 className="font-display-xl text-5xl md:text-[76px] max-w-4xl mx-auto mb-6 uppercase tracking-tight leading-[0.95] font-normal pt-10">
          AI-BUILDERS SHIP <span className="text-xanthous">VULNERABILITIES</span>.<br />
          YOU SHIP THE FIXES.
        </h1>
        
        <p className="font-body-lg text-lg md:text-[18px] text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
          Automated security remediation for the generative era. Scan exports from Lovable, Bolt, and v0. Receive production-ready code diffs that patch SQLi, hardcoded secrets, and XSS instantly.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 px-4">
          <Link
            href="/dashboard"
            className="bg-signal text-paper px-8 py-4 font-technical-sm text-base uppercase font-bold hard-shadow-ink hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all text-center inline-block cursor-pointer"
          >
            Start Scan
          </Link>
          
          <a
            href="#how-it-works"
            className="border-2 border-line-mute text-on-surface px-8 py-4 font-technical-sm text-base uppercase font-bold hover:bg-surface-bright transition-all inline-block text-center"
          >
            View Flow
          </a>
        </div>
      </div>

      {/* Terminal Window Component */}
      <div className="w-full max-w-4xl bg-ink border border-line-mute hard-shadow-signal overflow-hidden text-left font-mono">
        <div className="bg-surface-container-high border-b border-line-mute px-4 py-2 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-line-mute"></div>
            <div className="w-3 h-3 rounded-full bg-line-mute"></div>
            <div className="w-3 h-3 rounded-full bg-line-mute"></div>
          </div>
          <div className="font-technical-xs text-xs text-on-surface-variant font-semibold">
            arcsec-remediate.sh
          </div>
          <div className="w-12"></div>
        </div>
        
        <div className="p-6 font-technical-sm text-sm text-on-surface leading-relaxed overflow-x-auto min-h-[260px]">
          {terminalStep >= 1 && (
            <div className="flex gap-4">
              <span className="text-line-mute select-none">01</span>
              <span className="text-on-surface-variant">$ arcsec scan ./bolt-export-v4</span>
            </div>
          )}
          {terminalStep >= 2 && (
            <div className="flex gap-4">
              <span className="text-line-mute select-none">02</span>
              <span className="text-primary font-medium">INFO: Analyzing 42 files...</span>
            </div>
          )}
          {terminalStep >= 3 && (
            <div className="flex gap-4">
              <span className="text-line-mute select-none">03</span>
              <span className="text-signal font-bold">CRITICAL: SQL Injection found in /api/users.ts</span>
            </div>
          )}
          {terminalStep >= 4 && (
            <div className="flex gap-4 mt-4">
              <span className="text-line-mute select-none">04</span>
              <span className="text-on-surface-variant font-bold">--- remediation preview ---</span>
            </div>
          )}
          {terminalStep >= 5 && (
            <div className="flex gap-4 bg-red-900/20 border-l-4 border-signal px-2">
              <span className="text-line-mute select-none">05</span>
              <span className="text-signal opacity-50">- const user = await db.query(`SELECT * FROM users WHERE id = &#123;req.body.id&#125;`);</span>
            </div>
          )}
          {terminalStep >= 6 && (
            <div className="flex gap-4 bg-green-900/20 border-l-4 border-green-500 px-2 font-semibold">
              <span className="text-line-mute select-none">06</span>
              <span className="text-green-500">+ const user = await db.query(&apos;SELECT * FROM users WHERE id = $1&apos;, [req.body.id]);</span>
            </div>
          )}
          {terminalStep >= 7 && (
            <div className="flex gap-4 mt-4">
              <span className="text-line-mute select-none">07</span>
              <span className="text-gold font-bold">SUCCESS: [REMEDIATION] applied. Project secure.</span>
            </div>
          )}
          {terminalStep >= 8 && (
            <div className="flex gap-4">
              <span className="text-line-mute select-none">08</span>
              <span className="animate-pulse font-bold">_</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}