"use client";

import { useEffect, useState } from "react";
import { downloadSecureProject } from "@/lib/api";
import type { ScanReport } from "@/types/report";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Download, FileText, RefreshCw } from "lucide-react";

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
  const [repairResult, setRepairResult] = useState<RepairResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  useEffect(() => {
    try {
      const scanData = sessionStorage.getItem("scanResult");
      const repairData = sessionStorage.getItem("repairResult");

      if (scanData) setReport(JSON.parse(scanData));
      if (repairData) setRepairResult(JSON.parse(repairData));
    } catch (e) {
      console.error("Failed to load results from sessionStorage:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto trigger download on mount if not already done
  useEffect(() => {
    if (report && repairResult && !downloadTriggered) {
      setDownloadTriggered(true);
      try {
        downloadSecureProject(report.uploadId);
      } catch (e) {
        console.error("Failed to auto-download zip:", e);
      }
    }
  }, [report, repairResult, downloadTriggered]);

  const handleManualDownload = () => {
    if (report) {
      downloadSecureProject(report.uploadId);
    }
  };

  const handleReset = () => {
    sessionStorage.removeItem("scanResult");
    sessionStorage.removeItem("repairResult");
    window.location.href = "/dashboard";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-10 font-mono text-on-surface-variant">
        <span>Loading remediation results...</span>
      </div>
    );
  }

  if (!repairResult || !report) {
    return (
      <div className="text-center p-16 border border-line-mute bg-surface-container">
        <h1 className="font-headline-md text-3xl uppercase text-signal mb-4">
          No Patches Found
        </h1>
        <p className="font-body-md text-sm text-on-surface-variant max-w-md mx-auto mb-8 leading-relaxed">
          You haven&apos;t run the AI remediation engine for your project yet.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/dashboard"
            className="bg-primary text-on-primary-foreground font-technical-sm text-xs font-semibold px-6 py-3 border uppercase tracking-wider font-mono"
          >
            Dashboard
          </Link>
          {report && (
            <Link
              href="/report"
              className="border border-line-mute text-on-surface hover:bg-surface-bright px-6 py-3 font-technical-sm text-xs uppercase tracking-wider font-mono"
            >
              Back to Report
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-full py-6">
      
      {/* Success Banner Card */}
      <div className="w-full max-w-3xl bg-surface-container border border-line-mute p-8 shadow-[8px_8px_0px_0px_rgba(14,14,14,1)] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <CheckCircle className="size-[200px] text-green-500" />
        </div>

        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="space-y-3">
            <span className="font-technical-xs text-xs text-green-500 bg-green-500/10 px-3 py-1 inline-block border border-green-500/20 font-semibold tracking-wider">
              REPAIR COMPLETED
            </span>
            <h2 className="font-headline-md text-4xl text-on-surface leading-none tracking-tight uppercase">
              Project Successfully Patched
            </h2>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
              Applied **{repairResult.total} fixes** to your code assets. The secured zip project has been prepared and download has started automatically.
            </p>
          </div>

          {/* Diffs & Applied Fixes list */}
          <div className="space-y-4">
            <div className="font-technical-xs text-xs text-on-surface-variant uppercase tracking-wider font-semibold border-b border-line-mute pb-2">
              Patched Code Targets
            </div>
            
            <div className="space-y-3 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
              {repairResult.applied_fixes.map((fix, index) => (
                <div 
                  key={index}
                  className="bg-ink/50 border border-line-mute p-4 flex flex-col gap-1 rounded"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-technical-sm text-sm text-on-surface font-semibold font-mono">
                      {fix.title}
                    </span>
                    <span className="text-[10px] text-green-500 bg-green-500/10 border border-green-500/20 px-2 py-0.5 font-mono uppercase font-bold">
                      Fixed
                    </span>
                  </div>
                  <span className="font-technical-xs text-[11px] text-on-surface-variant font-mono">
                    {fix.file}
                  </span>
                </div>
              ))}
              
              {repairResult.applied_fixes.length === 0 && (
                <div className="text-center py-6 text-sm text-on-surface-variant font-mono">
                  No automatic modifications were applied.
                </div>
              )}
            </div>
          </div>

          {/* Manual reviews warning, if any */}
          {repairResult.manual_review && repairResult.manual_review.length > 0 && (
            <div className="border border-line-mute bg-surface-container-high/40 p-4 space-y-2">
              <span className="font-technical-xs text-xs text-xanthous font-bold uppercase tracking-wider">
                Manual Review Recommended
              </span>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                The scanner flagged vulnerabilities in files that require human review or key rotating (e.g. hardcoded credentials).
              </p>
              <div className="space-y-1 pl-2">
                {repairResult.manual_review.map((review, idx) => (
                  <div key={idx} className="font-technical-xs text-[11px] text-on-surface-variant font-mono">
                    • {review.file} : <span className="underline">{review.title}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 border-t border-line-mute pt-6">
            <button
              onClick={handleManualDownload}
              className="bg-signal text-paper px-8 py-3.5 font-technical-sm text-sm uppercase font-bold hard-shadow-ink hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="size-4" />
              Download ZIP Again
            </button>
            
            <button
              onClick={handleReset}
              className="border border-line-mute text-on-surface hover:bg-surface-bright px-6 py-3.5 font-technical-sm text-sm uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw className="size-4" />
              New Scan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}