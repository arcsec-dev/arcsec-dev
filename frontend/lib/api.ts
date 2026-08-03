import type { ScanReport } from "@/types/report";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export async function uploadProject(
  file: File,
): Promise<ScanReport> {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(`${API_BASE}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Upload failed.");
  }

  return await response.json();
}

export async function repairProject(uploadId: string) {
  const response = await fetch(`${API_BASE}/repair`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uploadId,
    }),
  });

  if (!response.ok) {
    let errorDetail = "Repair failed.";
    try {
      const errorJson = await response.json();
      if (errorJson && errorJson.detail) {
        errorDetail = errorJson.detail;
      }
    } catch {
      // ignore
    }
    throw new Error(errorDetail);
  }

  return await response.json();
}

export function downloadSecureProject(uploadId: string) {
  const link = document.createElement("a");

  link.href = `${API_BASE}/download/${uploadId}`;

  link.download = "secured-project.zip";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}

export { API_BASE };