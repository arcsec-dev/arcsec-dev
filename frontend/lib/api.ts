import type { ScanReport } from "@/types/report";

const API_BASE = "http://127.0.0.1:8000";

export async function uploadProject(file: File): Promise<ScanReport> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_BASE}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Upload failed.");
  }

  const data = await response.json();

  return data as ScanReport;
}
