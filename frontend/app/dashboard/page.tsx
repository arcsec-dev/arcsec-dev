"use client";

import { useRef, useState } from "react";
import { uploadProject, scanRepository } from "@/lib/api";

const SCAN_STEPS = [
  "Extracting project archive...",
  "Running OpenGrep rules scanner...",
  "Parsing package dependencies...",
  "Categorizing security findings...",
  "Generating audit report..."
];

const REPOSITORY_SCAN_STEPS = [
  "Cloning repository...",
  "Running OpenGrep rules scanner...",
  "Parsing package dependencies...",
  "Categorizing security findings...",
  "Generating audit report..."
];

export default function DashboardPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStepIndex, setScanStepIndex] = useState(0);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [showRepositoryModal, setShowRepositoryModal] = useState(false);
  const [repositoryUrl, setRepositoryUrl] = useState("");
  const [isRepositoryScanning, setIsRepositoryScanning] = useState(false);


  // Handle drag events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle drop
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.name.toLowerCase().endsWith(".zip")) {
        setFile(droppedFile);
        setUploadError(null);
      } else {
        setUploadError("Only ZIP files are supported.");
      }
    }
  };

  // Handle file select
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.name.toLowerCase().endsWith(".zip")) {
        setFile(selectedFile);
        setUploadError(null);
      } else {
        setUploadError("Only ZIP files are supported.");
      }
    }
  };

  // Handle scan execution
  const startScan = async () => {
    if (!file) return;
    setIsScanning(true);
    setScanStepIndex(0);
    setUploadError(null);

    const stepInterval = setInterval(() => {
      setScanStepIndex((prev) => {
        if (prev < SCAN_STEPS.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 900);

    try {
      const report = await uploadProject(file);

      const animationTime = SCAN_STEPS.length * 900;
      setTimeout(() => {
        clearInterval(stepInterval);
        sessionStorage.setItem("scanResult", JSON.stringify(report));
        window.location.href = "/report";
      }, animationTime + 300);

    } catch (err) {
      clearInterval(stepInterval);
      console.error(err);
      setIsScanning(false);
      setUploadError("Failed to audit codebase. Verify that the VibeSec backend is running.");
    }
  };

  const startRepositoryScan = async () => {
    if (!repositoryUrl.trim()) {
      setUploadError("Please enter a repository URL.");
      return;
    }

    // Validate URL BEFORE closing the modal
    try {
      const parsedUrl = new URL(repositoryUrl.trim());

      if (
        parsedUrl.protocol !== "http:" &&
        parsedUrl.protocol !== "https:"
      ) {
        setUploadError(
          "Invalid repository URL. Please use an HTTP or HTTPS URL.",
        );
        return;
      }
    } catch {
      setUploadError(
        "Invalid repository URL. Please enter a valid Git repository URL.",
      );
      return;
    }

    setIsRepositoryScanning(true);
    setScanStepIndex(0);
    setUploadError(null);
    setShowRepositoryModal(false);

    const stepInterval = setInterval(() => {
      setScanStepIndex((prev) => {
        if (prev < SCAN_STEPS.length - 1) {
          return prev + 1;
        }

        clearInterval(stepInterval);
        return prev;
      });
    }, 900);

    try {
      const report = await scanRepository(repositoryUrl.trim());

      const animationTime = SCAN_STEPS.length * 900;

      setTimeout(() => {
        clearInterval(stepInterval);
        sessionStorage.setItem("scanResult", JSON.stringify(report));
        setRepositoryUrl("");
        window.location.href = "/report";
      }, animationTime + 300);

    } catch (err) {
      clearInterval(stepInterval);
      console.error(err);

      setIsRepositoryScanning(false);

      setUploadError(
        err instanceof Error
          ? err.message
          : "Failed to scan repository.",
      );
    }
  };

  const removeSelectedFile = () => {
    setFile(null);
    setUploadError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-[70vh] py-2 text-center select-none">
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".zip"
        className="hidden"
        onChange={handleFileChange}
      />

      {isScanning || isRepositoryScanning ? (
        /* SCANNING ACTIVE STATE */
        <div className="w-full max-w-2xl bg-ink border border-line-mute hard-shadow-signal overflow-hidden text-left font-mono my-6">
          <div className="bg-surface-container-high border-b border-line-mute px-4 py-3 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-signal animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-xanthous"></div>
              <div className="w-3 h-3 rounded-full bg-line-mute"></div>
            </div>
            <div className="font-technical-xs text-xs text-on-surface-variant font-semibold uppercase tracking-wider">
              Security Audit Progress
            </div>
            <div className="w-12"></div>
          </div>

          <div className="p-8 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                <span>
                  {isRepositoryScanning
                    ? "Analyzing Repository..."
                    : "Analyzing Project..."}
                </span>
                <span>{Math.round(((scanStepIndex + 1) / SCAN_STEPS.length) * 100)}%</span>
              </div>
              <div className="w-full h-1 bg-surface-container border border-line-mute">
                <div
                  className="h-full bg-signal transition-all duration-700"
                  style={{ width: `${((scanStepIndex + 1) / SCAN_STEPS.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="font-technical-sm text-sm space-y-3 min-h-[220px]">
              {(isRepositoryScanning ? REPOSITORY_SCAN_STEPS : SCAN_STEPS)
                .slice(0, scanStepIndex + 1)
                .map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start animate-fade-in">
                    <span className="text-line-mute select-none font-semibold">0{idx + 1}</span>
                    <span className={idx === scanStepIndex ? "text-accent font-bold" : "text-on-surface"}>
                      {idx === scanStepIndex ? "❯ " : "✓ "} {step}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        /* WORKSPACE UPLOAD/READY STATES */
        <>
          {/* Header Section */}
          <div className="text-center mb-8 space-y-3">
            <h2 className="font-headline text-5xl text-on-surface leading-none tracking-tight uppercase">
              Scan Codebase
            </h2>
            <p className="font-body text-sm text-on-surface/60 max-w-xl mx-auto leading-relaxed">
              Upload your codebase to run security diagnostics. ArcSec maps dependencies and matches vulnerabilities against security standards.
            </p>
          </div>

          {/* Upload Zone / Selected File Card */}
          <div
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            onClick={() => !file && fileInputRef.current?.click()}
            className={`w-full max-w-3xl border ${dragActive ? 'border-accent bg-surface-container-high/60 shadow-[0_0_15px_rgba(247,181,56,0.15)]' : 'border-line-mute bg-surface-container-high/40'} backdrop-blur-md group hover:border-accent/30 transition-all duration-300 relative cursor-pointer p-10 md:p-12`}
          >
            {file ? (
              /* FILE SELECTED CARD MODE */
              <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-6 w-20 h-20 bg-primary/10 border border-primary flex items-center justify-center text-accent">
                  <span className="material-symbols-outlined text-4xl">folder_zip</span>
                </div>

                <h3 className="font-headline text-3xl text-on-surface uppercase mb-2 truncate max-w-md">
                  {file.name}
                </h3>
                <p className="font-technical text-xs text-on-surface/40 mb-8 font-mono">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>

                <div className="flex gap-4 z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      startScan();
                    }}
                    className="bg-primary text-white border border-primary px-8 py-3.5 font-technical text-xs font-bold tracking-[0.2em] btn-burgundy uppercase cursor-pointer font-mono"
                  >
                    Scan Project
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeSelectedFile();
                    }}
                    className="bg-transparent text-on-surface/60 border border-line-mute px-8 py-3.5 font-technical text-xs font-bold tracking-[0.2em] hover:border-on-surface hover:text-on-surface transition-colors uppercase cursor-pointer font-mono"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              /* UPLOAD GRAPHIC ZONE */
              <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-6 w-20 h-20 bg-surface-container-lowest border border-line-mute flex items-center justify-center text-on-surface/40 group-hover:text-accent transition-colors">
                  <span className="material-symbols-outlined text-4xl">
                    cloud_upload
                  </span>
                </div>

                <h3 className="font-headline text-3xl text-on-surface uppercase mb-2">
                  Upload Project ZIP
                </h3>
                <p className="font-body text-xs text-on-surface-variant mb-8 max-w-sm leading-relaxed">
                  Drag and drop your project ZIP file here, or click to choose from your system.
                </p>

                <div className="flex gap-4 z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                    className="bg-primary text-white border border-primary px-8 py-3.5 font-technical text-xs font-bold tracking-[0.2em] btn-burgundy uppercase cursor-pointer font-mono"
                  >
                    Choose Local Folder
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowRepositoryModal(true);
                      setUploadError(null);
                    }}
                    className="bg-transparent text-on-surface border border-line-mute px-8 py-3.5 font-technical text-xs font-bold tracking-[0.2em] hover:border-accent hover:text-accent transition-colors uppercase cursor-pointer font-mono"
                  >
                    Repository URL
                  </button>

                </div>
              </div>
            )}
          </div>

          {uploadError && (
            <div className="mt-4 text-xs text-error bg-error-container/20 border border-error-container p-4 max-w-3xl font-mono font-semibold w-full text-left">
              ERROR: {uploadError}
            </div>
          )}
        </>
      )}
      {showRepositoryModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => {
            if (!isRepositoryScanning) {
              setShowRepositoryModal(false);
            }
          }}
        >
          <div
            className="w-full max-w-xl bg-surface-container-high border border-line-mute hard-shadow-ink p-8 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="font-headline text-3xl text-on-surface uppercase tracking-tight">
                  Repository Scanner
                </h3>

                <p className="font-body text-xs text-on-surface-variant mt-2">
                  Enter a public Git repository URL to scan its codebase.
                </p>
              </div>

              {!isRepositoryScanning && (
                <button
                  type="button"
                  onClick={() => {
                    setShowRepositoryModal(false);
                    setRepositoryUrl("");
                    setUploadError(null);
                  }}
                  className="text-on-surface-variant hover:text-on-surface text-xl"
                >
                  ×
                </button>
              )}
            </div>

            <label className="block font-technical text-xs text-on-surface uppercase tracking-widest mb-3">
              Repository URL
            </label>

            <input
              type="url"
              value={repositoryUrl}
              onChange={(e) => setRepositoryUrl(e.target.value)}
              placeholder="https://github.com/username/repository"
              disabled={isScanning}
              className="w-full bg-surface-container-lowest border border-line-mute px-4 py-4 text-sm text-on-surface font-mono outline-none focus:border-accent transition-colors disabled:opacity-50"
            />

            {uploadError && (
              <div className="mt-3 text-xs text-error bg-error-container/20 border border-error-container p-3 font-mono font-semibold">
                ERROR: {uploadError}
              </div>
            )}

            <p className="mt-3 text-[11px] text-on-surface-variant font-mono">
              Example: https://github.com/username/project
            </p>

            <div className="flex justify-end gap-4 mt-8">
              <button
                type="button"
                onClick={() => {
                  setShowRepositoryModal(false);
                  setRepositoryUrl("");
                  setUploadError(null);
                }}
                className="bg-transparent text-on-surface/60 border border-line-mute px-6 py-3 font-technical text-xs font-bold tracking-[0.2em] hover:border-on-surface hover:text-on-surface transition-colors uppercase font-mono disabled:opacity-40"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={startRepositoryScan}
                className="bg-primary text-white border border-primary px-6 py-3 font-technical text-xs font-bold tracking-[0.2em] btn-burgundy uppercase font-mono"
              >
                Scan Repository
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
