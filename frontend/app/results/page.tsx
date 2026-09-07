"use client";

import { useEffect, useState } from "react";
import {
  downloadSecureProject,
  submitFeedback,
} from "@/lib/api";
import type { ScanReport } from "@/types/report";
import Link from "next/link";
import {
  CheckCircle,
  AlertTriangle,
  Download,
  RefreshCw,
  Star,
  X,
} from "lucide-react";
import { Findings } from "@/components/report/findings";

import type { RepairResponse } from "@/types/repair";

export default function ResultsPage() {
  const [report, setReport] = useState<ScanReport | null>(null);
  const [repairResult, setRepairResult] = useState<RepairResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasDownloaded, setHasDownloaded] = useState(false);

  // ============================================================
  // RATING STATE
  // ============================================================

  const [showRatingPopup, setShowRatingPopup] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  // ============================================================
  // LOAD RESULTS
  // ============================================================

  useEffect(() => {
    const timer = setTimeout(() => {
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
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // ============================================================
  // RATING
  // ============================================================

  const handleSubmitRating = async () => {
    if (selectedRating === 0 || !report?.uploadId) {
      return;
    }

    try {
      await submitFeedback(
        report.uploadId,
        selectedRating,
        review.trim()
      );

      console.log("Feedback submitted successfully");

      setRatingSubmitted(true);

      setTimeout(() => {
        setShowRatingPopup(false);
      }, 700);

    } catch (error) {
      console.error("Feedback submission failed:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Failed to submit feedback. Please try again."
      );
    }
  };

  // ============================================================
  // STAR GRADIENT
  // ============================================================

  const getStarColor = (rating: number) => {
    const colors = [
      "#ef4444", // 1 - red
      "#f97316", // 2 - orange
      "#f59e0b", // 3 - amber
      "#eab308", // 4 - yellow-orange
      "#facc15", // 5 - yellow
    ];

    return colors[rating - 1] || "#525252";
  };

  // ============================================================
  // DOWNLOAD
  // ============================================================

  const handleManualDownload = () => {
    // SECURITY/UI GATE:
    // User must submit a rating before downloading.
    if (!ratingSubmitted) {
      setShowRatingPopup(true);
      return;
    }

    if (report) {
      downloadSecureProject(report.uploadId);
      setHasDownloaded(true);
    }
  };

  // ============================================================
  // RESET
  // ============================================================

  const handleReset = () => {
    sessionStorage.removeItem("scanResult");
    sessionStorage.removeItem("repairResult");
    window.location.href = "/dashboard";
  };

  // ============================================================
  // LOADING
  // ============================================================

  if (loading) {
    return (
      <div className="flex items-center justify-center p-10 font-mono text-on-surface-variant">
        <span>Loading remediation results...</span>
      </div>
    );
  }

  // ============================================================
  // NO RESULTS
  // ============================================================

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

  const hasAppliedFixes = repairResult.applied_fixes.length > 0;
  const originalHadFindings = report.findings.length > 0;
  const isZeroModifications = !hasAppliedFixes;
  const isVerified = repairResult.verified;

  // ============================================================
  // MAIN PAGE
  // ============================================================

  return (
    <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-full py-6">

      {/* ========================================================
          SUCCESS / STATUS BANNER
      ======================================================== */}

      <div className="w-full max-w-3xl bg-surface-container border border-line-mute p-8 shadow-[8px_8px_0px_0px_rgba(14,14,14,1)] relative overflow-hidden">

        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          {isZeroModifications ? (
            <AlertTriangle className="size-[200px] text-amber-500" />
          ) : (
            <CheckCircle
              className={`size-[200px] ${isVerified ? "text-green-500" : "text-amber-500"
                }`}
            />
          )}
        </div>

        <div className="flex flex-col gap-8">

          {/* HEADER */}

          <div className="space-y-3">
            {isZeroModifications ? (
              <>
                <span className="font-technical-xs text-xs text-amber-500 bg-amber-500/10 px-3 py-1 inline-block border border-amber-500/20 font-semibold tracking-wider uppercase font-mono">
                  ZIP Prepared (No Changes)
                </span>

                <h2 className="font-headline-md text-4xl text-on-surface leading-none tracking-tight uppercase">
                  Project Packaged without Modifications
                </h2>

                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  {originalHadFindings ? (
                    <>
                      The scanner identified potential vulnerabilities, but
                      the remediation system could not apply any automatic
                      fixes to the codebase. An unchanged copy of your project
                      has been packaged as a ZIP.
                    </>
                  ) : (
                    <>
                      No vulnerabilities were found in your project. We have
                      packaged a clean copy of your project as a ZIP.
                    </>
                  )}
                </p>
              </>
            ) : (
              <>
                <span
                  className={`font-technical-xs text-xs px-3 py-1 inline-block border font-semibold tracking-wider uppercase font-mono ${isVerified
                      ? "text-green-500 bg-green-500/10 border-green-500/20"
                      : "text-amber-500 bg-amber-500/10 border-amber-500/20"
                    }`}
                >
                  {isVerified
                    ? "Remediation Applied & Scan Verified"
                    : "Remediation Applied (Remaining Issues)"}
                </span>

                <h2 className="font-headline-md text-4xl text-on-surface leading-none tracking-tight uppercase">
                  {isVerified
                    ? "Vulnerabilities Resolved & Verified"
                    : "Code Patched but Remaining Vulnerabilities"}
                </h2>

                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  {isVerified ? (
                    <>
                      The AI remediation engine applied modifications to{" "}
                      <strong>
                        {repairResult.applied_fixes.length} file(s)
                      </strong>
                      , and the post-repair security scan verified that no
                      vulnerabilities remain. The secured project has been
                      packaged.
                    </>
                  ) : (
                    <>
                      The AI remediation engine modified{" "}
                      <strong>
                        {repairResult.applied_fixes.length} file(s)
                      </strong>
                      , but a verification scan detected that some
                      vulnerabilities still remain or need manual attention.
                      Please review the remaining findings below.
                    </>
                  )}
                </p>
              </>
            )}
          </div>

          {/* PATCHED CODE TARGETS */}

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
                    <span className="font-technical-sm text-sm text-on-surface font-semibold font-mono break-all">
                      {fix.file}
                    </span>

                    <span className="text-[10px] text-green-500 bg-green-500/10 border border-green-500/20 px-2 py-0.5 font-mono uppercase font-bold whitespace-nowrap">
                      {fix.issues} issue
                      {fix.issues !== 1 ? "s" : ""} patched
                    </span>
                  </div>
                </div>
              ))}

              {repairResult.applied_fixes.length === 0 && (
                <div className="text-center py-6 text-sm text-on-surface-variant font-mono">
                  No automatic modifications were applied.
                </div>
              )}
            </div>
          </div>

          {/* MANUAL REVIEW */}

          {repairResult.manual_review &&
            repairResult.manual_review.length > 0 && (
              <div className="border border-line-mute bg-surface-container-high/40 p-4 space-y-2">
                <span className="font-technical-xs text-xs text-xanthous font-bold uppercase tracking-wider">
                  Manual Review Recommended
                </span>

                <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                  The scanner flagged vulnerabilities in files that require
                  human review or key rotation.
                </p>

                <div className="space-y-1 pl-2">
                  {repairResult.manual_review.map((review, idx) => (
                    <div
                      key={idx}
                      className="font-technical-xs text-[11px] text-on-surface-variant font-mono"
                    >
                      • {review.file} :{" "}
                      <span className="underline">{review.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* ====================================================
              ACTION BUTTONS
          ==================================================== */}

          <div className="flex flex-col sm:flex-row gap-4 border-t border-line-mute pt-6">

            <button
              onClick={handleManualDownload}
              className={`px-8 py-3.5 font-technical-sm text-sm uppercase font-bold hard-shadow-ink transition-all flex items-center justify-center gap-2 font-mono ${ratingSubmitted
                  ? "bg-signal text-paper hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                  : "bg-surface-container-high text-on-surface-variant opacity-60 cursor-pointer"
                }`}
            >
              <Download className="size-4" />

              {!ratingSubmitted
                ? "Rate Experience to Download"
                : hasDownloaded
                  ? "Download ZIP Again"
                  : "Download ZIP"}
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

      {/* ========================================================
          REMAINING FINDINGS
      ======================================================== */}

      {repairResult.findings_remaining &&
        repairResult.findings_remaining.length > 0 && (
          <div className="w-full max-w-3xl mt-8">
            <div className="mb-4 text-xs font-technical-xs text-on-surface-variant font-mono uppercase tracking-wider font-semibold">
              Vulnerabilities Remaining After Scan Verification
            </div>

            <Findings findings={repairResult.findings_remaining} />
          </div>
        )}

      {/* ========================================================
          RATING POPUP
      ======================================================== */}

      {showRatingPopup && !ratingSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div className="bg-surface-container border border-line-mute shadow-[8px_8px_0px_0px_rgba(14,14,14,1)]">

            {/* POPUP HEADER */}

            <div className="flex items-center justify-between border-b border-line-mute px-5 py-4">

              <div>
                <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.15em]">
                  ArcSec Feedback
                </div>

                <h3 className="font-headline-md text-lg uppercase text-on-surface mt-1">
                  Rate your experience
                </h3>
              </div>

              {/* Close button intentionally does NOT dismiss the popup
                  because rating is mandatory */}
            </div>

            {/* POPUP BODY */}

            <div className="px-5 py-5">

              <p className="font-mono text-xs text-on-surface-variant leading-relaxed mb-5">
                How would you rate your experience using ArcSec?
                <br />
                <span className="text-xanthous">
                  A rating is required before downloading your secured
                  project.
                </span>
              </p>

              {/* STAR RATING */}

              <div className="flex items-center justify-center gap-2 mb-3">

                {[1, 2, 3, 4, 5].map((star) => {
                  const activeRating = hoverRating || selectedRating;
                  const isActive = star <= activeRating;

                  return (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setSelectedRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="group cursor-pointer p-1 transition-transform hover:scale-110 active:scale-95"
                      aria-label={`${star} star${star !== 1 ? "s" : ""
                        }`}
                    >
                      <Star
                        className="size-10 transition-all duration-200"
                        strokeWidth={1.5}
                        fill={
                          isActive
                            ? getStarColor(activeRating)
                            : "transparent"
                        }
                        color={
                          isActive
                            ? getStarColor(activeRating)
                            : "#525252"
                        }
                      />
                    </button>
                  );
                })}
              </div>

              {/* RATING LABEL */}

              <div className="text-center h-5 mb-5">

                {selectedRating > 0 ? (
                  <span
                    className="font-mono text-xs font-bold uppercase tracking-wider"
                    style={{
                      color: getStarColor(selectedRating),
                    }}
                  >
                    {selectedRating === 1 && "Poor"}
                    {selectedRating === 2 && "Needs Improvement"}
                    {selectedRating === 3 && "Good"}
                    {selectedRating === 4 && "Very Good"}
                    {selectedRating === 5 && "Excellent"}
                  </span>
                ) : (
                  <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                    Select a rating
                  </span>
                )}
              </div>

              {/* REVIEW */}

              <div className="space-y-2">

                <div className="flex items-center justify-between">

                  <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                    Review
                  </label>

                  <span className="font-mono text-[9px] text-on-surface-variant opacity-60 uppercase">
                    Optional
                  </span>
                </div>

                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Tell us what you think..."
                  rows={3}
                  maxLength={500}
                  className="w-full resize-none bg-ink border border-line-mute px-3 py-2.5 text-xs font-mono text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-signal transition-colors"
                />

                <div className="text-right font-mono text-[9px] text-on-surface-variant opacity-50">
                  {review.length}/500
                </div>
              </div>

              {/* SUBMIT */}

              <button
                type="button"
                onClick={handleSubmitRating}
                disabled={selectedRating === 0}
                className={`w-full mt-4 py-3 font-mono text-xs uppercase tracking-wider font-bold transition-all ${selectedRating > 0
                    ? "bg-signal text-paper hover:-translate-y-0.5 hard-shadow-ink cursor-pointer"
                    : "bg-surface-container-high text-on-surface-variant opacity-50 cursor-not-allowed"
                  }`}
              >
                {selectedRating === 0
                  ? "Select a Rating"
                  : "Submit Rating & Continue"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}