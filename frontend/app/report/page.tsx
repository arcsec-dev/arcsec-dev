"use client";

import { useEffect, useState } from "react";
import { repairProject } from "@/lib/api";
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

const FIX_STEPS = [
  "Generating semantic code patches...",
  "Applying security fixes to code targets...",
  "Validating code changes against AST parsers...",
  "Running project build sanity checks...",
  "Bundling repaired project zip archive..."
];

export default function ReportPage() {
  const [report, setReport] = useState<ScanReport | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFixing, setIsFixing] = useState(false);
  const [fixStepIndex, setFixStepIndex] = useState(0);
  const [fixError, setFixError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const data = sessionStorage.getItem("scanResult");
      if (data) {
        setReport(JSON.parse(data));
      }
    } catch (e) {
      console.error(e);
      sessionStorage.removeItem("scanResult");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleFixAll = async () => {
    if (!report) return;
    setIsFixing(true);
    setFixStepIndex(0);
    setFixError(null);

    // Start animated progress steps
    const stepInterval = setInterval(() => {
      setFixStepIndex((prev) => {
        if (prev < FIX_STEPS.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 900);

    try {
      const result = await repairProject(report.uploadId);
      
      const animationTime = FIX_STEPS.length * 900;
      setTimeout(() => {
        clearInterval(stepInterval);
        sessionStorage.setItem("repairResult", JSON.stringify(result));
        window.location.href = "/results";
      }, animationTime + 300);

    } catch (err) {
      console.error(err);
      clearInterval(stepInterval);
      setIsFixing(false);
      setFixError("Fix remediation failed. Check connection to security backend.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-10 font-mono text-on-surface-variant">
        <span>Loading security report data...</span>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="text-center p-16 border border-line-mute bg-surface-container">
        <h1 className="font-headline-md text-3xl uppercase text-signal mb-4">
          No Scan Report Found
        </h1>
        <p className="font-body-md text-sm text-on-surface-variant max-w-md mx-auto mb-8 leading-relaxed">
          Initialize a new scan in your workspace before attempting to view report audits.
        </p>
        <a
          href="/dashboard"
          className="bg-primary text-on-primary-foreground font-technical-sm text-xs font-semibold px-6 py-3 border uppercase tracking-wider"
        >
          Return to Dashboard
        </a>
      </div>
    );
  }

  return (
    <div className="w-full relative">
      {/* Fix Progress State Terminal */}
      {isFixing ? (
        <div className="w-full max-w-4xl mx-auto bg-ink border border-line-mute hard-shadow-signal overflow-hidden text-left font-mono my-10">
          <div className="bg-surface-container-high border-b border-line-mute px-4 py-3 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-signal animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-xanthous"></div>
              <div className="w-3 h-3 rounded-full bg-line-mute"></div>
            </div>
            <div className="font-technical-xs text-xs text-on-surface-variant font-semibold uppercase tracking-wider">
              Remediation Progress
            </div>
            <div className="w-12"></div>
          </div>
          
          <div className="p-8 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                <span>Remediating Codebase...</span>
                <span>{Math.round(((fixStepIndex + 1) / FIX_STEPS.length) * 100)}%</span>
              </div>
              <div className="w-full h-1 bg-surface-container border border-line-mute">
                <div 
                  className="h-full bg-signal transition-all duration-700" 
                  style={{ width: `${((fixStepIndex + 1) / FIX_STEPS.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="font-technical-sm text-sm space-y-3 min-h-[180px]">
              {FIX_STEPS.slice(0, fixStepIndex + 1).map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start animate-fade-in">
                  <span className="text-line-mute select-none font-semibold">0{idx + 1}</span>
                  <span className={idx === fixStepIndex ? "text-accent font-bold" : "text-on-surface"}>
                    {idx === fixStepIndex ? "❯ " : "✓ "} {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Report View Mode */
        <div className="pb-24">
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

            {fixError && (
              <div className="text-sm text-error bg-error-container/20 border border-error-container p-4 font-mono font-semibold">
                ERROR: {fixError}
              </div>
            )}

            <Findings findings={report.findings} />
          </ReportLayout>

          {/* Sticky Fix Navigation Action Bar */}
          <div className="fixed bottom-10 left-64 right-0 px-6 md:px-10 z-20 pointer-events-none">
            <div className="max-w-5xl mx-auto w-full bg-surface-container/90 backdrop-blur-md border border-line-mute px-6 py-4 flex flex-col sm:flex-row items-center justify-between shadow-[8px_8px_0px_0px_rgba(14,14,14,1)] gap-4 pointer-events-auto">
              <div>
                <h3 className="font-technical-sm text-sm font-bold text-on-surface uppercase tracking-wider">
                  Vulnerabilities Detected
                </h3>
                <p className="font-body-md text-xs text-on-surface-variant opacity-80 mt-1">
                  Security scan identified {report.findings.length} issues. Click to resolve them automatically.
                </p>
              </div>

              <button
                onClick={handleFixAll}
                className="bg-signal text-paper px-8 py-3 font-technical-sm text-sm uppercase font-bold hard-shadow-ink hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all text-center inline-block cursor-pointer font-mono whitespace-nowrap"
              >
                Fix All Vulnerabilities
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
