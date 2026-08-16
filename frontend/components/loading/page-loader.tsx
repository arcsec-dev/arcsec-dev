"use client";

import { LoadingSpinner } from "@/components/ui/loading-spinner";

interface PageLoaderProps {
  message?: string;
}

export function PageLoader({
  message = "Loading...",
}: PageLoaderProps) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <LoadingSpinner />
        <p className="text-sm text-muted-foreground">
          {message}
        </p>
      </div>
    </div>
  );
}