import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant =
  | "critical"
  | "high"
  | "medium"
  | "low"
  | "info"
  | "success"
  | "neutral";

type BadgeProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function Badge({
  children,
  variant = "neutral",
  className,
}: BadgeProps) {
  const variants = {
    critical:
      "border-red-700/30 bg-red-700/20 text-red-400",

    high:
      "border-red-500/30 bg-red-500/20 text-red-300",

    medium:
      "border-yellow-500/30 bg-yellow-500/20 text-yellow-300",

    low:
      "border-blue-500/30 bg-blue-500/20 text-blue-300",

    info:
      "border-gray-500/30 bg-gray-500/20 text-gray-300",

    success:
      "border-green-500/30 bg-green-500/20 text-green-300",

    neutral:
      "border-border bg-muted text-muted-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
