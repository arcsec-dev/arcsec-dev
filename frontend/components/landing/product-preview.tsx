import { CheckCircle2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const severityItems = [
  { label: "Critical", count: 1, color: "text-red-400" },
  { label: "High", count: 2, color: "text-orange-400" },
  { label: "Medium", count: 5, color: "text-yellow-400" },
  { label: "Low", count: 7, color: "text-blue-400" },
];

export function ProductPreview() {
  return (
    <Card className="w-full max-w-md border-border/60 bg-card/80 shadow-2xl shadow-cyan-500/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-cyan-500/10 lg:max-w-none">
      <CardHeader className="border-b border-border/50 pb-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Project
            </p>
            <CardTitle className="mt-1 font-mono text-sm font-medium text-foreground">
              ecommerce-app
            </CardTitle>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Risk Score
            </p>
            <p className="mt-1 text-3xl font-semibold tabular-nums tracking-tight text-red-400">
              92
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-5 pt-5">
        <div className="grid grid-cols-2 gap-3">
          {severityItems.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border/50 bg-background/50 px-3 py-2.5 transition-colors duration-200 hover:border-border"
            >
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className={cn("mt-0.5 text-xl font-semibold tabular-nums", item.color)}>
                {item.count}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2.5">
          <CheckCircle2 className="size-4 shrink-0 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">
            Secure Fixes Available
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
