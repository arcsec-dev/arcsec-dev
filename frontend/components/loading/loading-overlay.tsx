"use client";

import { LoadingSpinner } from "@/components/ui/loading-spinner";

interface LoadingOverlayProps {
  show: boolean;
  message?: string;
}

export function LoadingOverlay({
  show,
  message = "Loading...",
}: LoadingOverlayProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-background p-8 shadow-2xl">
        <LoadingSpinner />
        <p className="text-sm text-muted-foreground">
          {message}
        </p>
      </div>
    </div>
  );
}