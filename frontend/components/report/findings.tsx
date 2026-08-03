"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Finding } from "@/types/finding";

export function Findings({
  findings,
}: {
  findings: Finding[];
}) {
  const scannerErrors = findings.filter(
    (f) => f.severity === "ERROR" || f.category === "System" || f.title.includes("Scanner Error")
  );
  const realFindings = findings.filter(
    (f) => f.severity !== "ERROR" && f.category !== "System" && !f.title.includes("Scanner Error")
  );

  function badgeVariant(severity: string) {
    switch (severity) {
      case "CRITICAL":
        return "critical";

      case "HIGH":
        return "high";

      case "MEDIUM":
        return "medium";

      case "LOW":
        return "low";

      default:
        return "info";
    }
  }

  return (
    <div className="space-y-6">
      {/* Scanner Errors section */}
      {scannerErrors.length > 0 && (
        <Card className="border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              <span>⚠️ System / Scanner Error</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {scannerErrors.map((error, index) => (
              <div key={index} className="border-l-4 border-destructive pl-4 py-2 space-y-2">
                <p className="font-mono text-sm font-semibold text-destructive">{error.title}</p>
                <p className="text-sm text-foreground/80">{error.message}</p>
                {error.recommendation && (
                  <p className="text-xs text-muted-foreground font-mono">
                    Recommendation: {error.recommendation}
                  </p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Real findings section */}
      {(realFindings.length > 0 || scannerErrors.length === 0) && (
        <Card>
          <CardHeader>
            <CardTitle>Security Findings</CardTitle>
          </CardHeader>

          <CardContent className="space-y-8">
            {realFindings.length === 0 ? (
              <p className="text-green-500 font-medium">
                No vulnerabilities were detected.
              </p>
            ) : (
              realFindings.map((finding, index) => (
                <div
                  key={index}
                  className="rounded-lg border p-6"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">
                      {finding.title}
                    </h3>

                    <Badge
                      variant={badgeVariant(finding.severity)}
                    >
                      {finding.severity}
                    </Badge>
                  </div>

                  <div className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                    <p>
                      <strong>Category:</strong>{" "}
                      {finding.category}
                    </p>

                    <p>
                      <strong>Source:</strong>{" "}
                      {finding.source}
                    </p>

                    <p className="sm:col-span-2">
                      <strong>Location:</strong>{" "}
                      {finding.file}:{finding.line}
                    </p>
                  </div>

                  <div className="mt-6 space-y-6">
                    <section>
                      <h4 className="mb-2 font-semibold">
                        Description
                      </h4>

                      <p className="text-sm text-muted-foreground">
                        {finding.message}
                      </p>
                    </section>

                    <section>
                      <h4 className="mb-2 font-semibold">
                        Why This Is Dangerous
                      </h4>

                      <p className="text-sm text-muted-foreground">
                        {finding.explanation}
                      </p>
                    </section>

                    <section>
                      <h4 className="mb-2 font-semibold">
                        Recommended Fix
                      </h4>

                      <p className="text-sm text-muted-foreground">
                        {finding.recommendation}
                      </p>
                    </section>

                    {finding.secure_code && (
                      <section>
                        <h4 className="mb-2 font-semibold">
                          Secure Example
                        </h4>

                        <pre className="overflow-x-auto rounded-lg bg-black p-4 text-sm text-green-300">
                          <code>{finding.secure_code}</code>
                        </pre>
                      </section>
                    )}

                    {finding.snippet && (
                      <section>
                        <h4 className="mb-2 font-semibold">
                          Original Code
                        </h4>

                        <pre className="overflow-x-auto rounded-lg bg-black p-4 text-sm text-red-300">
                          <code>{finding.snippet}</code>
                        </pre>
                      </section>
                    )}
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}