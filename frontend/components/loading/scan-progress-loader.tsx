"use client";

import { ProgressBar } from "@/components/ui/progress-bar";

interface ScanProgressLoaderProps {
  progress: number;
  message?: string;
}

export function ScanProgressLoader({
  progress,
  message = "Scanning project...",
}: ScanProgressLoaderProps) {
  return (
    <div className="w-full max-w-md rounded-xl border border-border bg-background p-6 shadow-lg">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">
            Security Scan
          </h3>
          <p className="text-sm text-muted-foreground">
            {message}
          </p>
        </div>

        <ProgressBar value={progress} />

        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Please wait...</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}