import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Finding } from "@/types/finding";

export function FindingsSummary({
  findings,
}: {
  findings: Finding[];
}) {
  const counts = findings.reduce<Record<string, number>>((acc, finding) => {
    acc[finding.category] = (acc[finding.category] ?? 0) + 1;
    return acc;
  }, {});

  const sortedCategories = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  return (
    <Card id="findings-summary">
      <CardHeader>
        <CardTitle className="text-2xl">Findings Summary</CardTitle>
        <CardDescription>
          Vulnerabilities grouped by security category.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {sortedCategories.length === 0 && (
          <p className="text-muted-foreground">No vulnerability categories found.</p>
        )}

        {sortedCategories.map(([category, count]) => (
          <div
            key={category}
            className="flex items-center justify-between rounded-lg border border-border p-4"
          >
            <span className="font-medium">{category}</span>
            <Badge>{count}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
