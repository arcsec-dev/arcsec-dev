import { Navbar } from "@/components/landing/navbar";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Navbar />

      <main className="max-w-[1000px] mx-auto px-6 md:px-10 py-20">

        {/* HEADER */}
        <div className="mb-16">
          <p className="font-technical-sm text-signal uppercase tracking-widest mb-4">
            Legal / Terms
          </p>

          <h1 className="font-display-lg text-5xl md:text-7xl uppercase tracking-tighter">
            Terms & Conditions
          </h1>

          <p className="font-body-md text-on-surface-variant mt-6">
            Last updated: 16th August 2026
          </p>
        </div>

        {/* TERMS */}
        <div className="space-y-12 font-body-md text-on-surface-variant leading-relaxed">

          <section>
            <h2 className="font-technical-sm text-xl text-on-surface uppercase tracking-widest mb-4">
              01 — Acceptance of Terms
            </h2>
            <p>
              By uploading code, using the scanner, or downloading a fixed ZIP
              from ArcSec ("the Service," "we," "us"), you agree to these Terms.
              If you don't agree, don't use the Service.
            </p>
          </section>

          <section>
            <h2 className="font-technical-sm text-xl text-on-surface uppercase tracking-widest mb-4">
              02 — What ArcSec Does
            </h2>
            <p>
              ArcSec scans code you submit for security vulnerabilities using
              automated tools (including Opengrep) and generates AI-suggested
              fixes (via Groq/LLM models), delivered as a downloadable
              corrected ZIP.
            </p>
          </section>

          <section>
            <h2 className="font-technical-sm text-xl text-on-surface uppercase tracking-widest mb-4">
              03 — No Guarantee of Security
            </h2>
            <p>
              ArcSec is an automated scanning aid, not a guarantee of security.
              Automated scans and AI-generated fixes can miss vulnerabilities or
              introduce new bugs. Passing an ArcSec scan does not mean your app
              is secure, compliant, or production-ready. You are solely
              responsible for reviewing, testing, and validating all code —
              original and AI-fixed — before deploying it.
            </p>
          </section>

          <section>
            <h2 className="font-technical-sm text-xl text-on-surface uppercase tracking-widest mb-4">
              04 — User Responsibilities
            </h2>
            <p>
              You must own the code you upload or have permission to submit it
              for scanning. Do not upload code containing third-party secrets,
              credentials, or data you're not authorized to expose. You are
              responsible for how you use the scan results and fixed code.
            </p>
          </section>

          <section>
            <h2 className="font-technical-sm text-xl text-on-surface uppercase tracking-widest mb-4">
              05 — Intellectual Property
            </h2>
            <p>
              You retain ownership of the code you upload. We do not claim
              ownership of your code or the fixed output. We may use anonymized,
              aggregated data (not your actual code) to improve the Service.
            </p>
          </section>

          <section>
            <h2 className="font-technical-sm text-xl text-on-surface uppercase tracking-widest mb-4">
              06 — Data Handling
            </h2>
            <p>
              Uploaded code is processed to run the scan and generate fixes.
              Code may be transmitted to third-party AI providers (e.g., Groq)
              for fix generation — see their terms for how they handle data.
            </p>
          </section>

          <section>
            <h2 className="font-technical-sm text-xl text-on-surface uppercase tracking-widest mb-4">
              07 — Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, ArcSec and its creators
              are not liable for security breaches, data loss, or damages
              resulting from use (or reliance on) the Service or its output;
              bugs or vulnerabilities introduced by AI-generated fixes; or any
              indirect, incidental, or consequential damages arising from use
              of the Service. The Service is provided "as is" without
              warranties of any kind, express or implied.
            </p>
          </section>

          <section>
            <h2 className="font-technical-sm text-xl text-on-surface uppercase tracking-widest mb-4">
              08 — Service Availability
            </h2>
            <p>
              We may modify, suspend, or discontinue the Service (or any part
              of it) at any time without notice. We do not guarantee
              uninterrupted or error-free operation.
            </p>
          </section>

          <section>
            <h2 className="font-technical-sm text-xl text-on-surface uppercase tracking-widest mb-4">
              09 — Changes to Terms
            </h2>
            <p>
              We may update these Terms at any time. Continued use after
              changes means you accept the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="font-technical-sm text-xl text-on-surface uppercase tracking-widest mb-4">
              10 — Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of India. Any disputes shall
              be subject to the applicable courts in Bangalore, Karnataka.
            </p>
          </section>

          <section>
            <h2 className="font-technical-sm text-xl text-on-surface uppercase tracking-widest mb-4">
              11 — Contact
            </h2>

            <p>
              For questions about these Terms, contact ArcSec:
            </p>

            <div className="mt-4 space-y-2 text-on-surface">
              <p>Phone: +91 123456789</p>
              <p>Email: abc@gmail.com</p>
            </div>
          </section>

        </div>

      </main>
    </div>
  );
}