import React from "react";

interface ProgressBarProps {
  value: number;
}

export function ProgressBar({
  value,
}: ProgressBarProps) {
  return (
    <div className="w-full rounded-full bg-secondary h-3 overflow-hidden">
      <div
        className="h-full bg-primary transition-all duration-300"
        style={{
          width: `${value}%`,
        }}
      />
    </div>
  );
}