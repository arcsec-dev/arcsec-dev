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
          <div
            key={card.title}
            className="rounded-xl border bg-card p-6 shadow-sm"
          >
            <p className="text-sm text-muted-foreground">
              {card.title}
            </p>
  
            <h2
                className={`mt-2 text-3xl font-bold ${
                    card.title === "Risk Score"
                    ? "text-green-400"
                    : ""
                }`}
                >
                {card.value}
            </h2>
          </div>
        ))}
      </div>
    );
  }