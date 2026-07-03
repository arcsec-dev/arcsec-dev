type Statistics = {
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
  
  export function Recommendations({
    statistics,
  }: {
    statistics: Statistics;
  }) {
    return (
      <section className="rounded-xl border bg-card p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">
          Recommended Actions
        </h2>
  
        <div className="mt-8 space-y-8">
  
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
  
        </div>
      </section>
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
        <h3 className="mb-3 text-lg font-semibold">
          {title}
        </h3>
  
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2"
            >
              <span>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }