import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Finding } from "@/types/finding";

function getRepairInfo(finding: Finding) {
  const title = finding.title.toLowerCase();
  const category = finding.category.toLowerCase();

  if (title.includes("secret")) {
    return {
      automatic: true,
      confidence: 100,
      time: "1 min",
      priority: "HIGH",
    };
  }

  if (title.includes("dependency")) {
    return {
      automatic: true,
      confidence: 100,
      time: "30 sec",
      priority: "HIGH",
    };
  }

  if (title.includes("debug")) {
    return {
      automatic: true,
      confidence: 100,
      time: "10 sec",
      priority: "MEDIUM",
    };
  }

  if (title.includes("password")) {
    return {
      automatic: true,
      confidence: 95,
      time: "2 min",
      priority: "HIGH",
    };
  }

  if (title.includes("shell") || title.includes("command")) {
    return {
      automatic: true,
      confidence: 95,
      time: "1 min",
      priority: "HIGH",
    };
  }

  if (category.includes("injection")) {
    return {
      automatic: false,
      confidence: 85,
      time: "10 min",
      priority: "CRITICAL",
    };
  }

  return {
    automatic: false,
    confidence: 80,
    time: "5 min",
    priority: "MEDIUM",
  };
}

export function RepairPlan({
  findings,
}: {
  findings: Finding[];
}) {
  const repairs = findings.map((finding) => ({
    finding,
    ...getRepairInfo(finding),
  }));

  const automatic = repairs.filter((r) => r.automatic).length;
  const manual = repairs.length - automatic;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Repair Plan</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div>
            <p className="text-2xl font-bold">{repairs.length}</p>
            <p className="text-sm text-muted-foreground">
              Total Repairs
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">{automatic}</p>
            <p className="text-sm text-muted-foreground">
              Automatic
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">{manual}</p>
            <p className="text-sm text-muted-foreground">
              Manual
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">
              {automatic * 2 + manual * 5} min
            </p>

            <p className="text-sm text-muted-foreground">
              Estimated Time
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {repairs.map((repair, index) => (
            <div
              key={index}
              className="rounded-lg border p-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">
                  {repair.finding.title}
                </h3>

                <span className="text-sm font-medium">
                  {repair.priority}
                </span>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                {repair.finding.recommendation}
              </p>

              <div className="mt-3 flex flex-wrap gap-5 text-sm">
                <span>
                  Confidence: {repair.confidence}%
                </span>

                <span>
                  Time: {repair.time}
                </span>

                <span>
                  {repair.automatic
                    ? "Automatic"
                    : "Manual"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}