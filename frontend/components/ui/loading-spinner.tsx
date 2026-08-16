import React from "react";

interface LoadingSpinnerProps {
  size?: number;
}

export function LoadingSpinner({
  size = 24,
}: LoadingSpinnerProps) {
  return (
    <div
      className="animate-spin rounded-full border-4 border-primary border-t-transparent"
      style={{
        width: size,
        height: size,
      }}
    />
  );
}