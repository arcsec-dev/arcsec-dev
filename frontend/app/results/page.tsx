"use client";

import { useEffect, useState } from "react";
import { Stats } from "@/components/results/stats";
import { Findings } from "@/components/results/findings";
import { ProjectSummary } from "@/components/results/project-summary";

export default function ResultsPage() {
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const data = sessionStorage.getItem("scanResult");

    if (data) {
      setResult(JSON.parse(data));
    }
  }, []);

  if (!result) {
    return (
      <main className="mx-auto min-h-screen max-w-6xl p-10">
        <h1 className="text-4xl font-bold">
          No scan results found.
        </h1>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-6xl space-y-8 p-10">
      <div>
        <h1 className="text-4xl font-bold">
          Scan Results
        </h1>
  
        <p className="mt-2 text-green-500 font-medium">
          ✓ Scan completed successfully
        </p>
      </div>
  
      <Stats
        findings={result.findings.length}
        files={result.project.files}
        languages={result.project.language.length}
      />
  
      <ProjectSummary project={result.project} />
  
      <Findings findings={result.findings} />
    </main>
  );
}