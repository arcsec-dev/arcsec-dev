import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ScanStatistics } from "@/types/statistics";

const riskBars: Array<{
  key: Exclude<keyof ScanStatistics, "total">;
  label: string;
  color: string;
}> = [
  { key: "critical", label: "Critical", color: "bg-red-600" },
  { key: "high", label: "High", color: "bg-orange-500" },
  { key: "medium", label: "Medium", color: "bg-yellow-500" },
  { key: "low", label: "Low", color: "bg-blue-500" },
  { key: "info", label: "Info", color: "bg-green-500" },
];

export function RiskBreakdown({
  statistics,
}: {
  statistics: ScanStatistics;
}) {
  return (
    <Card id="risk-breakdown">
      <CardHeader>
        <CardTitle className="text-2xl">Risk Breakdown</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {riskBars.map((bar) => (
          <RiskBar
            key={bar.key}
            label={bar.label}
            value={statistics[bar.key]}
            color={bar.color}
          />
        ))}
      </CardContent>
    </Card>
  );
}

function RiskBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  const width = Math.min(value * 8, 100);

  return (
    <div>
      <div className="mb-2 flex justify-between text-sm font-medium">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-muted">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
