import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DetailItem } from "@/components/ui/detail-item";
import type { ProjectSummary as ProjectSummaryModel } from "@/types/project";

export function ProjectSummary({
  project,
}: {
  project: ProjectSummaryModel;
}) {
  return (
    <Card id="project-information">
      <CardHeader>
        <CardTitle className="text-2xl">Project Information</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <DetailItem label="Project Name" value={project.projectName} />

          <DetailItem label="Framework" value={project.framework} />

          <DetailItem label="Languages" value={project.language.join(", ")} />

          <DetailItem label="Files" value={project.files} />

          <DetailItem label="Directories" value={project.directories} />
        </div>
      </CardContent>
    </Card>
  );
}
