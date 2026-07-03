"use client";

import { useEffect, useState } from "react";

import { ExecutiveSummary } from "@/components/report/executive-summary";
import { ReportMetadata } from "@/components/report/report-metadata";
import { RiskBreakdown } from "@/components/report/risk-breakdown";
import { Recommendations } from "@/components/report/recommendations";

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
      <main className="mx-auto min-h-screen max-w-7xl p-10">
        <h1 className="text-4xl font-bold">
          No scan results found.
        </h1>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-7xl space-y-8 p-10">

      <ExecutiveSummary
        securityScore={result.securityScore}
        overallRisk={result.overallRisk}
        statistics={result.statistics}
      />

      <ReportMetadata
        uploadId={result.uploadId}
        metadata={result.metadata}
      />

      <RiskBreakdown
        statistics={result.statistics}
      />

      <ProjectSummary
        project={result.project}
      />

      <Recommendations
        statistics={result.statistics}
      />

      <Findings
        findings={result.findings}
      />

    </main>
  );
}