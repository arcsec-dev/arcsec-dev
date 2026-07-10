"use client";

import { useEffect, useState } from "react";

import type { ScanReport } from "@/types/report";

import { ExecutiveSummary } from "@/components/report/executive-summary";
import { Findings } from "@/components/report/findings";
import { FindingsSummary } from "@/components/report/findings-summary";
import { ProjectSummary } from "@/components/report/project-summary";
import { Recommendations } from "@/components/report/recommendations";
import { ReportLayout } from "@/components/report/report-layout";
import { ReportMetadata } from "@/components/report/report-metadata";
import { RiskBreakdown } from "@/components/report/risk-breakdown";
import { RepairPlan } from "@/components/report/repair-plan";

export default function ResultsPage() {
  const [report, setReport] = useState<ScanReport | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const data = sessionStorage.getItem("scanResult");

      if (data) {
        setReport(JSON.parse(data) as ScanReport);
      }
    } catch (error) {
      console.error("Failed to load scan result:", error);
      sessionStorage.removeItem("scanResult");
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <main className="mx-auto min-h-screen max-w-7xl p-10">
        <p className="text-muted-foreground">
          Loading report...
        </p>
      </main>
    );
  }

  if (!report) {
    return (
      <main className="mx-auto min-h-screen max-w-7xl p-10">
        <h1 className="text-4xl font-bold">
          No scan results found.
        </h1>
      </main>
    );
  }

  return (
    <ReportLayout>
      <ExecutiveSummary
        securityScore={report.securityScore}
        overallRisk={report.overallRisk}
        statistics={report.statistics}
      />

      <ReportMetadata
        uploadId={report.uploadId}
        metadata={report.metadata}
      />

      <ProjectSummary project={report.project} />

      <RiskBreakdown statistics={report.statistics} />

      <FindingsSummary findings={report.findings} />

      <Recommendations statistics={report.statistics} />

      <RepairPlan findings={report.findings} />

      <Findings findings={report.findings} />
    </ReportLayout>
  );
}