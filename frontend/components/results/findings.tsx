type Finding = {
    title: string;
    severity: string;
    file: string;
    line: number;
    message: string;
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
            <div className="text-2xl">
                🛡️
            </div>

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
  
        <div className="space-y-4">
          {findings.map((finding, index) => (
            <div
              key={index}
              className="rounded-lg border p-4"
            >
              <h3 className="font-semibold">
                {finding.title}
              </h3>
  
              <p className="text-sm text-muted-foreground">
                {finding.message}
              </p>
  
              <p className="mt-2 text-sm">
                <strong>Severity:</strong> {finding.severity}
              </p>
  
              <p className="text-sm">
                <strong>Location:</strong>{" "}
                {finding.file}:{finding.line}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }