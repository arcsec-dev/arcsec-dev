"use client";

import { useEffect, useState } from "react";

import {
  downloadSecureProject,
  repairProject,
} from "@/lib/api";
import type { ScanReport } from "@/types/report";

import { ExecutiveSummary } from "@/components/report/executive-summary";
import { Findings } from "@/components/report/findings";
import { FindingsSummary } from "@/components/report/findings-summary";
import { ProjectSummary } from "@/components/report/project-summary";
import { Recommendations } from "@/components/report/recommendations";
import { RepairPlan } from "@/components/report/repair-plan";
import { ReportLayout } from "@/components/report/report-layout";
import { ReportMetadata } from "@/components/report/report-metadata";
import { RiskBreakdown } from "@/components/report/risk-breakdown";

type RepairResponse = {
  success: boolean;
  total: number;
  applied_fixes: {
    title: string;
    file: string;
  }[];
  manual_review: {
    title: string;
    file: string;
  }[];
};

export default function ResultsPage() {
  const [report, setReport] = useState<ScanReport | null>(null);
  const [loading, setLoading] = useState(true);

  const [repairing, setRepairing] = useState(false);
  const [repairComplete, setRepairComplete] = useState(false);
  const [repairResult, setRepairResult] =
    useState<RepairResponse | null>(null);

  useEffect(() => {
    try {
      const data = sessionStorage.getItem("scanResult");

      if (data) {
        setReport(JSON.parse(data));
      }
    } catch {
      sessionStorage.removeItem("scanResult");
    } finally {
      setLoading(false);
    }
  }, []);

  async function handleRepair() {
    if (!report) return;

    setRepairing(true);

    try {
      const result = await repairProject(report.uploadId);

      setRepairResult(result);

      setRepairComplete(true);

      downloadSecureProject(report.uploadId);
    } catch (error) {
      console.error(error);
      alert("Repair failed.");
    } finally {
      setRepairing(false);
    }
  }

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

      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
              Automatic Repair
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Repair supported vulnerabilities and download the
              secured project.
            </p>
          </div>

          <button
            onClick={handleRepair}
            disabled={repairing || repairComplete}
            className="rounded-lg bg-black px-6 py-3 text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black"
          >
            {repairing
              ? "Repairing..."
              : repairComplete
                ? "Repair Complete"
                : "Repair Project"}
          </button>
        </div>

        {repairResult && (
          <div className="mt-6 rounded-lg border border-green-600 bg-green-500/10 p-5">
            <h3 className="text-lg font-semibold text-green-500">
              Repair Successful
            </h3>

            <p className="mt-2">
              Applied Fixes:{" "}
              <strong>{repairResult.total}</strong>
            </p>

            <p className="mb-4 text-sm text-muted-foreground">
              Your repaired project has been prepared and the
              download has started automatically.
            </p>

            <div className="space-y-3">
              {repairResult.applied_fixes.map((fix, index) => (
                <div
                  key={index}
                  className="rounded-lg border p-3"
                >
                  <div className="font-medium">
                    {fix.title}
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {fix.file}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Findings findings={report.findings} />
    </ReportLayout>
  );
}