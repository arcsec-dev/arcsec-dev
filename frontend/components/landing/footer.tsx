export function Footer() {
  return (
    <footer className="bg-background border-t border-line-mute pt-[110px] pb-12 w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-[40px] max-w-[1240px] mx-auto py-16">
        <div className="flex flex-col gap-6">
          <span className="font-display-lg text-4xl text-on-surface tracking-tighter uppercase select-none">
            ARCSEC<span className="text-red-600">.</span>
          </span>
          <p className="font-technical-xs text-[11px] uppercase tracking-wider text-on-surface-variant">
            SECURE BY DEFAULT. FORGED IN CODE.
          </p>
          <div className="flex gap-4">
            <a className="text-on-surface-variant hover:text-signal transition-colors select-none" href="#">
              <span className="material-symbols-outlined text-lg">terminal</span>
            </a>
            <a className="text-on-surface-variant hover:text-signal transition-colors select-none" href="#">
              <span className="material-symbols-outlined text-lg">code</span>
            </a>
            <a className="text-on-surface-variant hover:text-signal transition-colors select-none" href="#">
              <span className="material-symbols-outlined text-lg">hub</span>
            </a>
          </div>
        </div>
        
        <div>
          <h5 className="font-technical-sm text-sm text-on-surface mb-6 font-bold uppercase tracking-widest">
            Protocol
          </h5>
          <ul className="space-y-4 font-body-md text-sm text-on-surface-variant">
            <li>
              <a className="hover:text-on-surface transition-colors" href="#">
                CWE Compliance
              </a>
            </li>
            <li>
              <a className="hover:text-on-surface transition-colors" href="#">
                OWASP Top 10
              </a>
            </li>
            <li>
              <a className="hover:text-on-surface transition-colors" href="#">
                SCA Integration
              </a>
            </li>
            <li>
              <a className="hover:text-on-surface transition-colors" href="#">
                SAST Engine
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-technical-sm text-sm text-on-surface mb-6 font-bold uppercase tracking-widest">
            Workspace
          </h5>
          <ul className="space-y-4 font-body-md text-sm text-on-surface-variant">
            <li>
              <a className="hover:text-on-surface transition-colors" href="#">
                Documentation
              </a>
            </li>
            <li>
              <a className="hover:text-on-surface transition-colors" href="/results">
                Dashboard
              </a>
            </li>
            <li>
              <a className="hover:text-on-surface transition-colors" href="#">
                API Keys
              </a>
            </li>
            <li>
              <a className="hover:text-on-surface transition-colors" href="#">
                CLI Download
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-technical-sm text-sm text-on-surface mb-6 font-bold uppercase tracking-widest">
            Legal
          </h5>
          <ul className="space-y-4 font-body-md text-sm text-on-surface-variant">
            <li>
              <a className="hover:text-on-surface transition-colors" href="/privacy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-on-surface transition-colors" href="/terms">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a className="hover:text-on-surface transition-colors" href="/disclaimer">
                Disclaimer
              </a>
            </li>
            <li>
              <a className="hover:text-on-surface transition-colors" href="#">
                Cookie Prefs
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1240px] mx-auto px-6 md:px-[40px] border-t border-line-mute pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-technical-xs text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
          © 2026 ARCSEC SYSTEMS. ALL RIGHTS RESERVED.
        </span>
        <div className="flex gap-4 items-center">
          <span className="font-technical-xs text-[10px] border border-line-mute px-2 py-1 text-on-surface-variant tracking-wider uppercase font-semibold">
            SOC2 Type II
          </span>
          <span className="font-technical-xs text-[10px] border border-line-mute px-2 py-1 text-on-surface-variant tracking-wider uppercase font-semibold">
            ISO 27001
          </span>
        </div>
      </div>
    </footer>
  );
}
