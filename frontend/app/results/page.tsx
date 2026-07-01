"use client";

import { useEffect, useState } from "react";

export default function ResultsPage() {
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const data = sessionStorage.getItem("scanResult");

    if (data) {
      setResult(JSON.parse(data));
    }
  }, []);

  if (!result) {
    return (
      <main className="mx-auto min-h-screen max-w-6xl p-10">
        <h1 className="text-4xl font-bold">
          No scan results found.
        </h1>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-6xl p-10">
      <h1 className="mb-8 text-4xl font-bold">
        Scan Results
      </h1>

      <pre className="overflow-auto rounded-lg bg-zinc-900 p-6 text-sm text-white">
        {JSON.stringify(result, null, 2)}
      </pre>
    </main>
  );
}