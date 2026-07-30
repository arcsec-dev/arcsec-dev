import { BarChart3, ShieldCheck, WandSparkles } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: ShieldCheck,
    title: "AI Security Analysis",
    items: [
      "Detect vulnerabilities",
      "AI-generated code issues",
      "Security best practices",
    ],
  },
  {
    icon: WandSparkles,
    title: "AI-Powered Remediation",
    items: [
      "Generate secure replacement code",
      "Explain each fix",
      "Validate fixes",
    ],
  },
  {
    icon: BarChart3,
    title: "Developer Reports",
    items: [
      "Risk score",
      "Downloadable reports",
      "File-level vulnerability analysis",
    ],
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border/50 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Security built for the AI development era
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to ship AI-generated code with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-border/60 bg-card/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-border/60 bg-background/80 text-primary transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
                  <feature.icon className="size-5" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {feature.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
