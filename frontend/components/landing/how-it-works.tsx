import { ArrowDown, Rocket, ScanSearch, ShieldCheck, Upload } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const steps = [
  {
    icon: Upload,
    title: "Upload",
    description: "Drop your project ZIP or connect your repository in seconds.",
  },
  {
    icon: ScanSearch,
    title: "Scan",
    description: "AI analyzes your codebase for vulnerabilities and misconfigurations.",
  },
  {
    icon: ShieldCheck,
    title: "Fix",
    description: "Receive secure code replacements with clear explanations for each issue.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Ship with confidence knowing your application passed security review.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-border/50 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-muted-foreground">
            From upload to deployment in four simple steps.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 lg:flex-row lg:items-stretch lg:justify-center lg:gap-0">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center lg:flex-row">
              <Card className="w-full max-w-xs border-border/60 bg-card/50 transition-all duration-300 hover:border-primary/25 hover:bg-card hover:shadow-lg hover:shadow-primary/5 lg:max-w-[220px]">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-lg border border-border/60 bg-background/80 text-primary">
                    <step.icon className="size-5" />
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>

              {index < steps.length - 1 && (
                <ArrowDown className="my-2 size-5 shrink-0 text-muted-foreground/50 lg:mx-3 lg:my-0 lg:rotate-[-90deg]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
