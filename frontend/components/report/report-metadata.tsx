import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DetailItem } from "@/components/ui/detail-item";
import type { ReportMetadata as ReportMetadataModel } from "@/types/metadata";

export function ReportMetadata({
  uploadId,
  metadata,
}: {
  uploadId: string;
  metadata: ReportMetadataModel;
}) {
  return (
    <Card id="report-information">
      <CardHeader>
        <CardTitle className="text-2xl">Report Information</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <DetailItem label="Report ID" value={uploadId} />
          <DetailItem label="Generated" value={metadata.generatedAt} />
          <DetailItem label="Version" value={metadata.reportVersion} />
          <DetailItem label="Scanners" value={metadata.scanners.join(", ")} />
        </div>
      </CardContent>
    </Card>
  );
}
