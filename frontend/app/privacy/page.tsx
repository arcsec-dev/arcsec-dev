export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-on-surface px-6 py-16 md:px-10">
      <div className="max-w-[1000px] mx-auto">

        {/* HEADER */}
        <div className="border-b border-line-mute pb-10 mb-12">
          <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mb-4">
            ArcSec Legal // Privacy
          </div>

          <h1 className="font-display-lg text-4xl md:text-6xl uppercase tracking-tighter">
            Privacy Policy
          </h1>

          <p className="font-mono text-xs text-on-surface-variant uppercase tracking-wider mt-5">
            Last Updated: 07/09/2026
          </p>
        </div>

        {/* INTRODUCTION */}
        <section className="mb-12">
          <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-8">
            ArcSec provides an automated security scanning and code-fixing tool
            for vibe-coded applications. This Privacy Policy explains what
            information we collect, how we use it, and how we protect it when
            you use our website and services (the &quot;Service&quot;).
          </p>

          <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-8 mt-5">
            By using ArcSec, you agree to the practices described in this
            policy.
          </p>
        </section>

        {/* SECTION 1 */}
        <section className="mb-12">
          <SectionTitle number="01" title="Information We Collect" />

          <SubSection title="1.1 Account Information">
            <p>When you sign up, we collect:</p>
            <BulletList
              items={[
                "Name",
                "Email address",
                "Password (encrypted, never stored in plain text)",
              ]}
            />
          </SubSection>

          <SubSection title="1.2 Code You Submit">
            <p>
              When you upload a ZIP file or provide a GitHub link for scanning,
              we temporarily process:
            </p>

            <BulletList
              items={[
                "Source code files",
                "File names and directory structure",
                "Configuration files (excluding files you explicitly exclude)",
              ]}
            />
          </SubSection>

          <SubSection title="1.3 Scan Results">
            <p>We store:</p>

            <BulletList
              items={[
                "Vulnerability findings (type, severity, file location, description)",
                "Fix suggestions generated for your code",
                "Scan history tied to your account (so you can view past reports)",
              ]}
            />
          </SubSection>

          <SubSection title="1.4 Payment Information">
            <p>
              If you subscribe to a paid plan, payments are processed by
              Stripe. We do not store your card number, CVV, or full payment
              details on our servers. Stripe&apos;s own privacy policy governs
              that data.
            </p>
          </SubSection>

          <SubSection title="1.5 Usage Data">
            <p>We automatically collect:</p>

            <BulletList
              items={[
                "IP address",
                "Browser type and device information",
                "Pages visited and actions taken on our Service",
                "Timestamps of scans and logins",
              ]}
            />
          </SubSection>
        </section>

        {/* SECTION 2 */}
        <section className="mb-12">
          <SectionTitle number="02" title="How We Use Your Information" />

          <p>
            We use the information we collect to:
          </p>

          <BulletList
            items={[
              "Perform security scans and generate fix suggestions",
              "Maintain your account and scan history",
              "Process payments and manage subscriptions",
              "Improve and troubleshoot the Service",
              "Send important service updates (not marketing spam)",
              "Detect and prevent abuse, fraud, or violations of our Terms of Service",
            ]}
          />

          <div className="mt-6 border border-red-500/20 bg-red-500/5 p-5">
            <p className="font-mono text-sm text-red-500 font-bold uppercase tracking-wide">
              We do not sell your data to anyone. Ever.
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="mb-12">
          <SectionTitle
            number="03"
            title="How Your Code Is Handled (Most Important Section)"
          />

          <p>
            We know your code is sensitive. Here&apos;s exactly what happens
            to it:
          </p>

          <BulletList
            items={[
              "During a scan: Your code is processed in a temporary, isolated environment solely for the purpose of scanning and generating fixes.",
              "Third-party AI processing: Vulnerability fix generation is powered by a third-party AI model (currently Groq/Llama). Only the specific vulnerable code snippet — not your entire codebase — is sent to generate a fix. This snippet is not used by the AI provider to train their models, per their API terms.",
              "After the scan: Your raw source code is deleted from our active servers within 24 hours of scan completion. We retain only the vulnerability report and fix suggestions (text-based results), not your original code files, unless you explicitly save a project for later re-scanning.",
              "We do not manually view, read, or review your code. All processing is automated.",
              "We never use your code to train any AI model, ours or any third party's.",
            ]}
          />
        </section>

        {/* SECTION 4 */}
        <section className="mb-12">
          <SectionTitle number="04" title="Data Sharing" />

          <div className="border border-line-mute overflow-hidden mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-surface-container-high border-b border-line-mute">
              <div className="px-5 py-4 font-mono text-[10px] uppercase tracking-widest font-bold">
                Party
              </div>

              <div className="px-5 py-4 font-mono text-[10px] uppercase tracking-widest font-bold">
                Purpose
              </div>
            </div>

            <DataRow
              party="Groq (AI provider)"
              purpose="Generating code fix suggestions for the specific vulnerable snippet only"
            />

            <DataRow
              party="Supabase (database & auth provider)"
              purpose="Storing your account and scan results securely"
            />

            <DataRow
              party="Stripe (payment processor)"
              purpose="Processing subscription payments"
            />

            <DataRow
              party="Vercel / Render (hosting providers)"
              purpose="Running our website and backend infrastructure"
            />
          </div>

          <p className="mt-6">
            We do not share your data with advertisers, data brokers, or any
            other third party for marketing purposes.
          </p>

          <p className="mt-5">
            We may disclose information if required by law, court order, or to
            protect the rights, safety, or property of ArcSec or others.
          </p>
        </section>

        {/* SECTION 5 */}
        <section className="mb-12">
          <SectionTitle number="05" title="Data Retention" />

          <BulletList
            items={[
              "Account data: Retained as long as your account is active. Deleted within 30 days of account deletion request.",
              "Source code: Deleted within 24 hours of scan completion (see Section 3).",
              "Scan reports/fix suggestions: Retained until you delete them or delete your account.",
              "Payment records: Retained as required by law for tax and accounting purposes (typically 7 years), handled via Stripe.",
            ]}
          />
        </section>

        {/* SECTION 6 */}
        <section className="mb-12">
          <SectionTitle number="06" title="Your Rights" />

          <p>You have the right to:</p>

          <BulletList
            items={[
              "Access the personal data we hold about you",
              "Request correction of inaccurate data",
              "Request deletion of your account and associated data",
              "Export your scan history and reports",
              "Opt out of non-essential communications",
            ]}
          />

          <p className="mt-6">
            To exercise any of these rights, contact us at{" "}
            <span className="text-signal font-mono">
              Arcsec@gmail.com
            </span>
            .
          </p>
        </section>

        {/* SECTION 7 */}
        <section className="mb-12">
          <SectionTitle number="07" title="Security Measures" />

          <p>
            We take reasonable technical and organizational measures to
            protect your data, including:
          </p>

          <BulletList
            items={[
              "Encrypted data transmission (HTTPS/TLS)",
              "Encrypted password storage",
              "Access controls limiting who can view stored data",
              "Automatic deletion of source code after processing",
            ]}
          />

          <p className="mt-6">
            However, no system is 100% secure. We cannot guarantee absolute
            security, and you use the Service at your own risk.
          </p>
        </section>

        {/* SECTION 8 */}
        <section className="mb-12">
          <SectionTitle number="08" title="Children's Privacy" />

          <p>
            We do not knowingly collect personal information from children.
          </p>
        </section>

        {/* SECTION 9 */}
        <section className="mb-12">
          <SectionTitle number="09" title="International Users" />

          <p>
            If you access ArcSec from outside India, your information may be
            transferred to and processed in India or other countries where our
            service providers operate (e.g., US-based cloud infrastructure).
            By using the Service, you consent to this transfer.
          </p>
        </section>

        {/* SECTION 10 */}
        <section className="mb-12">
          <SectionTitle number="10" title="Cookies" />

          <p>We use minimal cookies necessary for:</p>

          <BulletList
            items={[
              "Keeping you logged in",
              "Remembering your preferences",
            ]}
          />

          <p className="mt-6">
            We do not use third-party advertising or tracking cookies.
          </p>
        </section>

        {/* SECTION 11 */}
        <section className="mb-12">
          <SectionTitle number="11" title="Changes to This Policy" />

          <p>
            We may update this Privacy Policy from time to time. If we make
            material changes, we will notify you via email or a notice on our
            website before the changes take effect.
          </p>
        </section>

        {/* SECTION 12 */}
        <section className="mb-12">
          <SectionTitle number="12" title="Contact Us" />

          <p>
            If you have questions about this Privacy Policy or how your data is
            handled, contact us at:
          </p>

          <div className="mt-6 border border-line-mute bg-surface-container p-6 space-y-3">
            <p className="font-mono text-sm">
              <span className="text-on-surface-variant uppercase text-[10px] tracking-wider">
                Email:
              </span>{" "}
              Arcsec@gmail.com
            </p>

            <p className="font-mono text-sm">
              <span className="text-on-surface-variant uppercase text-[10px] tracking-wider">
                Company:
              </span>{" "}
              ArcSec
            </p>
          </div>
        </section>

        {/* DISCLAIMER NOTE */}
        <div className="border-t border-line-mute pt-8 mt-16">
          <p className="font-mono text-[10px] text-on-surface-variant leading-6 uppercase tracking-wider">
            This policy is designed to be transparent about how a security
            scanning tool handles sensitive code data. If you have specific
            compliance needs (GDPR, HIPAA, etc.), consult a lawyer before your
            public launch to ensure full legal coverage.
          </p>
        </div>

      </div>
    </main>
  );
}


/* ============================================================
   REUSABLE COMPONENTS
   ============================================================ */

function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="border-b border-line-mute pb-3 mb-7">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[10px] text-signal font-bold tracking-wider">
          {number}
        </span>

        <h2 className="font-headline-md text-2xl md:text-3xl uppercase tracking-tight">
          {title}
        </h2>
      </div>
    </div>
  );
}


function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-on-surface mb-4">
        {title}
      </h3>

      <div className="text-sm md:text-[15px] text-on-surface-variant leading-8">
        {children}
      </div>
    </div>
  );
}


function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex gap-3 text-sm md:text-[15px] text-on-surface-variant leading-7"
        >
          <span className="text-signal font-mono shrink-0">—</span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}


function DataRow({
  party,
  purpose,
}: {
  party: string;
  purpose: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-b border-line-mute last:border-b-0">
      <div className="px-5 py-5 font-mono text-xs text-on-surface font-semibold">
        {party}
      </div>

      <div className="px-5 py-5 text-sm text-on-surface-variant leading-6 border-t md:border-t-0 md:border-l border-line-mute">
        {purpose}
      </div>
    </div>
  );
}