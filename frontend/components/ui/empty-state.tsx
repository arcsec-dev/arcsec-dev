"use client";

import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
}

export function EmptyState({
  title,
  description,
  buttonText,
  onClick,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border p-10 text-center">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-muted-foreground">
        {description}
      </p>

      {buttonText && (
        <Button
          className="mt-6"
          onClick={onClick}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
}