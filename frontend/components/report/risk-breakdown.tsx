type Statistics = {
    critical: number;
    high: number;
    medium: number;
    low: number;
    info: number;
  };
  
  export function RiskBreakdown({
    statistics,
  }: {
    statistics: Statistics;
  }) {
    return (
      <section className="rounded-xl border bg-card p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">
          Risk Breakdown
        </h2>
  
        <div className="mt-8 space-y-6">
          <RiskBar
            label="Critical"
            value={statistics.critical}
            color="bg-red-600"
          />
  
          <RiskBar
            label="High"
            value={statistics.high}
            color="bg-orange-500"
          />
  
          <RiskBar
            label="Medium"
            value={statistics.medium}
            color="bg-yellow-500"
          />
  
          <RiskBar
            label="Low"
            value={statistics.low}
            color="bg-blue-500"
          />
  
          <RiskBar
            label="Info"
            value={statistics.info}
            color="bg-green-500"
          />
        </div>
      </section>
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