import type { ScanReport } from "@/types/report";

const API_BASE = "http://127.0.0.1:8000";

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
    throw new Error("Repair failed.");
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