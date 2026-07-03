type Metadata = {
    generatedAt: string;
    scanners: string[];
    reportVersion: string;
  };
  
  export function ReportMetadata({
    uploadId,
    metadata,
  }: {
    uploadId: string;
    metadata: Metadata;
  }) {
    return (
      <section className="rounded-xl border bg-card p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">
          Report Information
        </h2>
  
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Info title="Report ID" value={uploadId} />
  
          <Info title="Generated" value={metadata.generatedAt} />
  
          <Info
            title="Version"
            value={metadata.reportVersion}
          />
  
          <Info
            title="Scanners"
            value={metadata.scanners.join(", ")}
          />
        </div>
      </section>
    );
  }
  
  function Info({
    title,
    value,
  }: {
    title: string;
    value: string;
  }) {
    return (
      <div className="rounded-lg border p-4">
        <p className="text-sm text-muted-foreground">
          {title}
        </p>
  
        <p className="mt-2 font-semibold">
          {value}
        </p>
      </div>
    );
  }