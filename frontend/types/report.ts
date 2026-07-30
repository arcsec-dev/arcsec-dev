import type { Finding } from "./finding";
import type { ReportMetadata } from "./metadata";
import type { ProjectSummary } from "./project";
import type { ScanStatistics } from "./statistics";

export interface ScanReport {
  status: string;

  uploadId: string;

  project: ProjectSummary;

  statistics: ScanStatistics;

  securityScore: number;

  overallRisk: string;

  metadata: ReportMetadata;

  findings: Finding[];
}