import { StatCard } from "@/components/ui/stat-card";

type Props = {
    findings: number;
    files: number;
    languages: number;
  };
  
  export function Stats({ findings, files, languages }: Props) {
    const cards = [
      {
        title: "Risk Score",
        value: findings === 0 ? "Safe" : "Review",
      },
      {
        title: "Findings",
        value: findings,
      },
      {
        title: "Files",
        value: files,
      },
      {
        title: "Languages",
        value: languages,
      },
    ];
  
    return (
      <div className="grid gap-4 md:grid-cols-4">
        {cards.map((card) => (
          <StatCard
            key={card.title}
            title={card.title}
            value={card.value}
            valueClassName={card.title === "Risk Score" ? "text-green-400" : undefined}
          />
        ))}
      </div>
    );
  }
