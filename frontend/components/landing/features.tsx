export function Features() {
  return (
    <div id="features">
      {/* Authority Band */}
      <section className="bg-surface-container-lowest border-y border-line-mute py-12 mb-[110px]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-[40px]">
          <p className="font-technical-xs text-xs text-center uppercase tracking-[0.3em] text-on-surface-variant mb-8">
            Built for the generation of AI-Builders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-60">
            <div className="font-display-lg text-3xl md:text-4xl text-on-surface tracking-wider">LOVABLE</div>
            <div className="font-display-lg text-3xl md:text-4xl text-on-surface tracking-wider">BOLT.NEW</div>
            <div className="font-display-lg text-3xl md:text-4xl text-on-surface tracking-wider">V0.DEV</div>
            <div className="font-display-lg text-3xl md:text-4xl text-on-surface tracking-wider">CURSOR</div>
          </div>
        </div>
      </section>

      {/* Feature/Comparison Grid */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-[40px] mb-[110px]">
        <div className="mb-16">
          <h2 className="font-display-lg text-4xl md:text-5xl mb-4 tracking-tight">ENGINEERING PRECISION</h2>
          <p className="font-body-md text-base text-on-surface-variant max-w-xl">
            Don&apos;t just find bugs. Solve them with technical structural integrity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 border border-line-mute divide-y md:divide-y-0 md:divide-x divide-line-mute">
          {/* Header Row */}
          <div className="hidden md:block bg-surface-container-high p-4 font-technical-xs text-[11px] uppercase text-on-surface-variant border-b border-line-mute tracking-wider font-semibold">
            Vulnerability Category
          </div>
          <div className="hidden md:block bg-surface-container-high p-4 font-technical-xs text-[11px] uppercase text-on-surface-variant border-b border-line-mute tracking-wider font-semibold">
            AI Gen Root Cause
          </div>
          <div className="hidden md:block bg-surface-container-high p-4 font-technical-xs text-[11px] uppercase text-signal border-b border-line-mute tracking-wider font-bold">
            ArcSec Remediation
          </div>
 
          {/* Row 1 */}
          <div className="p-6 md:p-8 flex flex-col gap-2 justify-center">
            <span className="md:hidden font-technical-xs text-[11px] text-on-surface-variant uppercase tracking-wider mb-2 font-semibold">
              Category
            </span>
            <span className="font-headline-md text-2xl text-on-surface uppercase font-normal tracking-tight">
              Injection Vectors
            </span>
          </div>
          <div className="p-6 md:p-8 flex flex-col gap-2 bg-surface-container-low justify-center">
            <span className="md:hidden font-technical-xs text-[11px] text-on-surface-variant uppercase tracking-wider mb-2 font-semibold">
              Root Cause
            </span>
            <p className="font-body-md italic text-sm text-on-surface-variant">
              &quot;LLMs often prefer string interpolation for readability over parameterized queries.&quot;
            </p>
          </div>
          <div className="p-6 md:p-8 flex flex-col gap-4 border-l-2 border-signal justify-center">
            <span className="md:hidden font-technical-xs text-[11px] text-signal uppercase tracking-wider mb-2 font-semibold">
              ArcSec Fix
            </span>
            <div className="font-technical-sm text-[13px] bg-ink p-3 rounded">
              <span className="text-gold font-medium">
                Auto-injects prepared statements and ORM sanitation logic.
              </span>
            </div>
          </div>
 
          {/* Row 2 */}
          <div className="p-6 md:p-8 flex flex-col gap-2 justify-center">
            <span className="md:hidden font-technical-xs text-[11px] text-on-surface-variant uppercase tracking-wider mb-2 font-semibold">
              Category
            </span>
            <span className="font-headline-md text-2xl text-on-surface uppercase font-normal tracking-tight">
              Secret Leakage
            </span>
          </div>
          <div className="p-6 md:p-8 flex flex-col gap-2 bg-surface-container-low justify-center">
            <span className="md:hidden font-technical-xs text-[11px] text-on-surface-variant uppercase tracking-wider mb-2 font-semibold">
              Root Cause
            </span>
            <p className="font-body-md italic text-sm text-on-surface-variant">
              &quot;Hardcoded keys in generated React components for &apos;rapid prototyping&apos; speed.&quot;
            </p>
          </div>
          <div className="p-6 md:p-8 flex flex-col gap-4 border-l-2 border-signal justify-center">
            <span className="md:hidden font-technical-xs text-[11px] text-signal uppercase tracking-wider mb-2 font-semibold">
              ArcSec Fix
            </span>
            <div className="font-technical-sm text-[13px] bg-ink p-3 rounded">
              <span className="text-gold font-medium">
                Extracts to .env, adds .gitignore, and rotates compromised keys.
              </span>
            </div>
          </div>
 
          {/* Row 3 */}
          <div className="p-6 md:p-8 flex flex-col gap-2 justify-center">
            <span className="md:hidden font-technical-xs text-[11px] text-on-surface-variant uppercase tracking-wider mb-2 font-semibold">
              Category
            </span>
            <span className="font-headline-md text-2xl text-on-surface uppercase font-normal tracking-tight">
              Auth Bypass
            </span>
          </div>
          <div className="p-6 md:p-8 flex flex-col gap-2 bg-surface-container-low justify-center">
            <span className="md:hidden font-technical-xs text-[11px] text-on-surface-variant uppercase tracking-wider mb-2 font-semibold">
              Root Cause
            </span>
            <p className="font-body-md italic text-sm text-on-surface-variant">
              &quot;Incomplete middleware logic in route exports leads to unprotected API endpoints.&quot;
            </p>
          </div>
          <div className="p-6 md:p-8 flex flex-col gap-4 border-l-2 border-signal justify-center">
            <span className="md:hidden font-technical-xs text-[11px] text-signal uppercase tracking-wider mb-2 font-semibold">
              ArcSec Fix
            </span>
            <div className="font-technical-sm text-[13px] bg-ink p-3 rounded">
              <span className="text-gold font-medium">
                Standardizes JWT/Session validation across all routes and views.
              </span>
            </div>
          </div>
        </div>
      </section>
 
      {/* Detailed Feature Section with Bento Feel */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-[40px] mb-[110px]">
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-surface-container border border-line-mute p-10 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="font-technical-xs text-xs text-signal uppercase mb-4 tracking-widest font-semibold">
                Core Engine
              </div>
              <h3 className="font-display-lg text-4xl md:text-5xl mb-6 tracking-tight">
                REAL-TIME PATCHING FOR AI OUTPUTS
              </h3>
              <p className="font-body-lg text-base text-on-surface-variant max-w-xl leading-relaxed">
                ArcSec doesn&apos;t just bark. It bites back at vulnerabilities. Our engine understands the context of AI-generated code and applies semantic patches that preserve your app&apos;s logic while hardening its shell.
              </p>
            </div>
            <div className="mt-10 flex gap-4 overflow-x-auto pb-4">
              <span className="bg-surface-bright border border-line-mute px-4 py-2 font-technical-xs text-[11px] uppercase tracking-wider font-semibold whitespace-nowrap">
                CWE Compliance
              </span>
              <span className="bg-surface-bright border border-line-mute px-4 py-2 font-technical-xs text-[11px] uppercase tracking-wider font-semibold whitespace-nowrap">
                OWASP Top 10
              </span>
              <span className="bg-surface-bright border border-line-mute px-4 py-2 font-technical-xs text-[11px] uppercase tracking-wider font-semibold whitespace-nowrap">
                Snyk Integration
              </span>
              <span className="bg-surface-bright border border-line-mute px-4 py-2 font-technical-xs text-[11px] uppercase tracking-wider font-semibold whitespace-nowrap">
                Github Actions
              </span>
            </div>
          </div>
          
          <div className="md:col-span-4 bg-signal p-10 flex flex-col justify-center items-center text-center text-paper hard-shadow-ink">
            <span className="material-symbols-outlined text-6xl mb-6 select-none">
              security
            </span>
            <h3 className="font-display-lg text-3xl mb-2 uppercase tracking-wide">
              SECURE BY DESIGN
            </h3>
            <p className="font-technical-sm text-xs uppercase opacity-90 tracking-wider">
              Protect your software assets with production-ready code fixes.
            </p>
            <div className="mt-8 bg-ink text-left p-4 font-technical-xs text-[11px] w-full text-on-surface opacity-80 border border-line-mute font-mono">
              $ arcsec scan
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
