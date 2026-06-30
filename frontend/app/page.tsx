const features = [
  "AI Security Scanning",
  "Automatic Vulnerability Remediation",
  "Developer-Friendly Reports",
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="text-lg font-semibold tracking-tight">
            VibeSec
          </a>

          <div className="hidden items-center gap-8 sm:flex">
            <a
              href="#about"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              About
            </a>
            <a
              href="#results"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Results
            </a>
          </div>

          <button
            type="button"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-gray-950 transition-opacity hover:opacity-90"
          >
            Scan Project
          </button>
        </nav>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.08)_0%,_transparent_50%)]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Security for AI-Built Applications
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Scan your AI-generated applications for security vulnerabilities
              and receive AI-powered remediation in seconds.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-medium text-gray-950 transition-opacity hover:opacity-90 sm:w-auto"
              >
                Upload ZIP
              </button>
              <button
                type="button"
                className="w-full rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card sm:w-auto"
              >
                View Demo
              </button>
            </div>
          </div>
        </section>

        <section className="border-t border-border/60 px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((title) => (
              <article
                key={title}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/30"
              >
                <div className="mb-4 h-1 w-8 rounded-full bg-accent" />
                <h3 className="text-base font-medium">{title}</h3>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 px-6 py-8">
        <p className="text-center text-sm text-muted">© 2026 VibeSec</p>
      </footer>
    </div>
  );
}
