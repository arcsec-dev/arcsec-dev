export type FindingSeverity =
  | "CRITICAL"
  | "HIGH"
  | "MEDIUM"
  | "LOW"
  | "INFO"
  | "WARNING"
  | "ERROR"
  | "UNKNOWN";

export interface Finding {
  title: string;
  severity: FindingSeverity;
  category: string;
  file: string;
  line: number;
  message: string;
  source: string;
  snippet: string;
  explanation: string;
  recommendation: string;
  secure_code: string;
}
