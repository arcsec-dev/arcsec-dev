import type { Finding } from "./finding";

export interface AppliedFix {
  file: string;
  issues: number;
}

export interface ManualReview {
  file: string;
  title: string;
}

export interface RepairResponse {
  success: boolean;
  total: number;
  applied_fixes: AppliedFix[];
  manual_review: ManualReview[];
  findings_before: Finding[];
  files_changed: string[];
  findings_remaining: Finding[];
  zero_change_packaging: boolean;
  verified: boolean;
}
