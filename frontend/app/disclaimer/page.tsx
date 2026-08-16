import { Navbar } from "@/components/landing/navbar";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Navbar />

      <main className="max-w-[1000px] mx-auto px-6 md:px-10 py-20">

        {/* HEADER */}
        <div className="mb-16">
          <p className="font-technical-sm text-signal uppercase tracking-widest mb-4">
            Legal / Security
          </p>

          <h1 className="font-display-lg text-5xl md:text-7xl uppercase tracking-tighter">
            Disclaimer
          </h1>

          <p className="font-body-md text-on-surface-variant mt-6">
            Last updated: 16th August 2026
          </p>
        </div>

        {/* DISCLAIMER */}
        <div className="space-y-10 font-body-md text-on-surface-variant leading-relaxed">

          <section>
            <p>
              ArcSec uses automated static analysis and AI (large language
              models) to detect and suggest fixes for security vulnerabilities
              in code. It is intended as a supplementary security tool, not a
              replacement for manual security audits, penetration testing, or
              professional security review by a qualified expert.
            </p>
          </section>

          <section>
            <p>
              No tool can guarantee 100% vulnerability detection or 100%
              correct fixes. AI-generated code fixes may contain errors, break
              functionality, or fail to fully resolve the underlying issue.
              Always test AI-fixed code thoroughly in a safe environment before
              deploying to production.
            </p>
          </section>

          <section>
            <p>
              ArcSec, its creators, and affiliates disclaim all liability for
              security incidents, data breaches, financial loss, or damages
              arising from use of this tool or reliance on its output.
            </p>
          </section>

          <section className="border-l-4 border-signal pl-6 py-2">
            <p className="text-on-surface">
              By using ArcSec, you acknowledge and accept this disclaimer.
            </p>
          </section>

        </div>

      </main>
    </div>
  );
}