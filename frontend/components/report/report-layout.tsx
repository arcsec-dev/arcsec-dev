import type { ReactNode } from "react";

export function ReportLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="mx-auto min-h-screen max-w-7xl space-y-8 bg-background p-10">
      {children}
    </main>
  );
}
