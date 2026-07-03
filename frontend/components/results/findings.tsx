type Finding = {
  title: string;
  severity: string;
  file: string;
  line: number;
  message: string;
  source: string;
  snippet: string;
};

export function Findings({
  findings,
}: {
  findings: Finding[];
}) {
  if (findings.length === 0) {
    return (
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-semibold">
          Security Findings
        </h2>

        <div className="flex items-center gap-3 rounded-lg border border-green-500/20 bg-green-500/10 p-4">
          <div className="text-2xl">🛡️</div>

          <div>
            <p className="font-semibold text-green-400">
              No vulnerabilities detected
            </p>

            <p className="text-sm text-muted-foreground">
              Your project passed the initial security scan.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold">
        Security Findings
      </h2>

      <div className="space-y-6">
        {findings.map((finding, index) => (
          <div
            key={index}
            className="rounded-xl border border-border bg-card p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                {finding.title}
              </h3>

              <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
                {finding.severity}
              </span>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              {finding.message}
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>
                <strong>Source:</strong> {finding.source}
              </span>

              <span>
                <strong>Location:</strong>{" "}
                {finding.file}:{finding.line}
              </span>
            </div>

            {finding.snippet && (
              <div className="mt-5 overflow-x-auto rounded-lg border bg-black p-4">
                <pre className="font-mono text-sm text-green-300">
                  <code>{finding.snippet}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}