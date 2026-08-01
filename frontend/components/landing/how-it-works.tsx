import Link from "next/link";

export function HowItWorks() {
  return (
    <div id="how-it-works" className="w-full bg-background text-on-background">
      {/* Operational Flow */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-[40px] py-[110px]">
        <div className="text-center mb-20">
          <h2 className="font-headline-md text-2xl text-xanthous mb-2 tracking-wide font-normal uppercase">
            OPERATIONAL FLOW
          </h2>
          <h3 className="font-display-lg text-4xl md:text-5xl uppercase tracking-tight">
            THREE STEPS TO TOTAL SECURITY
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="border border-grid-dot p-10 bg-surface-container-low hover:bg-surface-container transition-colors duration-200">
            <div className="font-technical-xs text-xs text-signal mb-4 font-semibold">
              01 // INGESTION
            </div>
            <h4 className="font-headline-md text-2xl mb-4 uppercase">
              Upload ZIP
            </h4>
            <p className="font-body-md text-sm text-on-surface-variant mb-8 leading-relaxed">
              Connect your repo or upload a direct ZIP of your codebase. We handle legacy and AI-generated scripts instantly.
            </p>
            <div className="h-32 w-full bg-ink flex items-center justify-center border border-line-mute">
              <span className="material-symbols-outlined text-signal text-5xl select-none">
                upload_file
              </span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border border-grid-dot p-10 bg-surface-container-low hover:bg-surface-container transition-colors duration-200">
            <div className="font-technical-xs text-xs text-signal mb-4 font-semibold">
              02 // ANALYSIS
            </div>
            <h4 className="font-headline-md text-2xl mb-4 uppercase">
              Scan for CWE
            </h4>
            <p className="font-body-md text-sm text-on-surface-variant mb-8 leading-relaxed">
              Our proprietary LLM-aware scanner maps code flows to the Common Weakness Enumeration database.
            </p>
            <div className="h-32 w-full bg-ink flex items-center justify-center border border-line-mute">
              <span className="material-symbols-outlined text-signal text-5xl select-none">
                security
              </span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border border-grid-dot p-10 bg-surface-container-low hover:bg-surface-container transition-colors duration-200">
            <div className="font-technical-xs text-xs text-signal mb-4 font-semibold">
              03 // RESOLUTION
            </div>
            <h4 className="font-headline-md text-2xl mb-4 uppercase">
              Auto-fix
            </h4>
            <p className="font-body-md text-sm text-on-surface-variant mb-8 leading-relaxed">
              Review the proposed patches and merge them with a single click. Ship with confidence.
            </p>
            <div className="h-32 w-full bg-ink flex items-center justify-center border border-line-mute">
              <span className="material-symbols-outlined text-signal text-5xl select-none">
                build_circle
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visualization */}
      <section className="bg-surface-container-highest py-[110px] border-y border-line-mute relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 md:px-[40px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display-lg text-4xl md:text-5xl mb-6 tracking-tight">
                SEE THE <span className="text-xanthous">TRANSFORMATION</span>
              </h2>
              <p className="font-body-lg text-base text-on-surface-variant mb-8 leading-relaxed">
                Legacy security tools just tell you what&apos;s broken. ArcSec shows you exactly how to fix it, maintaining your coding style while hardening the logic.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-signal mt-1 select-none">
                    check_circle
                  </span>
                  <span className="font-technical-sm text-sm">
                    Eliminate SQL Injection in generated TypeScript and Python API routes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-signal mt-1 select-none">
                    check_circle
                  </span>
                  <span className="font-technical-sm text-sm">
                    Patch Cross-Site Scripting (XSS) in interactive frontend components.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-signal mt-1 select-none">
                    check_circle
                  </span>
                  <span className="font-technical-sm text-sm">
                    Secure sensitive secrets and API keys leaking through your client bundle.
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-ink border border-line-mute p-6 rounded shadow-2xl">
                <div className="flex justify-between items-center mb-4 border-b border-line-mute pb-4">
                  <span className="font-technical-xs text-xs text-on-surface-variant font-mono">
                    VULNERABILITY_FIX_V2.JS
                  </span>
                  <span className="bg-signal/10 text-signal px-2 py-0.5 font-technical-xs text-xs border border-signal/20 font-mono">
                    CRITICAL CWE-89
                  </span>
                </div>
                <div className="font-technical-sm text-[13px] text-on-surface space-y-1 font-mono leading-relaxed">
                  <div className="opacity-40">11 const query = `SELECT * FROM users WHERE id = $&#123;req.body.id&#125;`;</div>
                  <div className="code-line-removed text-error pl-1 font-semibold">12 // DANGEROUS: Direct template literal injection</div>
                  <div className="code-line-added text-xanthous pl-1 font-semibold">13 const query = &apos;SELECT * FROM users WHERE id = $1&apos;;</div>
                  <div className="code-line-added text-xanthous pl-1 font-semibold">14 const result = await db.query(query, [req.body.id]);</div>
                  <div className="opacity-40">15 return res.json(result.rows);</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-[40px] py-[110px] text-center relative">
        <div className="relative z-10 py-20 border-2 border-dashed border-signal/30">
          <h2 className="font-display-xl text-5xl md:text-6xl mb-6 uppercase tracking-tight">
            STOP TRIAGING.<br />
            <span className="text-xanthous">START SHIPPING.</span>
          </h2>
          <p className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-xl mx-auto mb-12 leading-relaxed">
            Join security-conscious developers using ArcSec to audit and secure generated code before it runs.
          </p>
          <div className="flex justify-center px-4">
            <Link 
              href="/results"
              className="bg-signal text-paper border-1.5 border-ink font-technical-sm text-sm px-12 py-4 md:px-16 md:py-6 hard-shadow-ink btn-hover-active transition-all uppercase tracking-widest font-bold"
            >
              Get Started For Free
            </Link>
          </div>
          <p className="mt-8 font-technical-xs text-xs text-on-surface-variant uppercase opacity-50 tracking-wider">
            No credit card required. Scan up to 10k lines/mo.
          </p>
        </div>
      </section>
    </div>
  );
}
