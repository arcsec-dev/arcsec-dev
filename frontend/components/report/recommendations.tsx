import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ScanStatistics } from "@/types/statistics";

export function Recommendations({
  statistics,
}: {
  statistics: ScanStatistics;
}) {
  return (
    <Card id="recommendations">
      <CardHeader>
        <CardTitle className="text-2xl">Recommended Actions</CardTitle>
      </CardHeader>

      <CardContent className="space-y-8">
        {statistics.critical > 0 && (
          <RecommendationGroup
            title="Immediate Priority"
            items={[
              "Resolve all Critical vulnerabilities before deployment.",
              "Review authentication and access control.",
              "Remove exposed secrets and sensitive configuration.",
            ]}
          />
        )}

        {statistics.high > 0 && (
          <RecommendationGroup
            title="High Priority"
            items={[
              "Upgrade vulnerable dependencies.",
              "Fix injection vulnerabilities.",
              "Review file upload and command execution logic.",
            ]}
          />
        )}

        {statistics.medium > 0 && (
          <RecommendationGroup
            title="Medium Priority"
            items={[
              "Implement CSRF protection.",
              "Introduce rate limiting.",
              "Improve session security.",
            ]}
          />
        )}

        {statistics.low > 0 && (
          <RecommendationGroup
            title="Low Priority"
            items={[
              "Remove development-only code.",
              "Review security TODO comments.",
              "Improve secure coding practices.",
            ]}
          />
        )}

        {statistics.total === 0 && (
          <p className="text-muted-foreground">
            No vulnerabilities were detected in this scan.
          </p>
        )}
      </CardContent>
    </Card>
  );
}

function RecommendationGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>

      <ul className="list-disc space-y-2 pl-5">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
