"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "error";
}

export function Alert({
  className,
  variant = "default",
  ...props
}: AlertProps) {
  const variants = {
    default:
      "border-border bg-background text-foreground",

    success:
      "border-green-500 bg-green-500/10 text-green-600",

    warning:
      "border-yellow-500 bg-yellow-500/10 text-yellow-600",

    error:
      "border-red-500 bg-red-500/10 text-red-600",
  };

  return (
    <div
      className={cn(
        "rounded-lg border p-4 text-sm",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}