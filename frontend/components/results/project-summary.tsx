type Project = {
  projectName: string;
  framework: string;
  language: string[];
  files: number;
  directories: number;
};

export function ProjectSummary({
  project,
}: {
  project: Project;
}) {
  return (
    <section className="rounded-xl border bg-card p-8 shadow-sm">
      <h2 className="text-2xl font-semibold">
        Project Information
      </h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">

        <InfoRow
          label="Project Name"
          value={project.projectName}
        />

        <InfoRow
          label="Framework"
          value={project.framework}
        />

        <InfoRow
          label="Languages"
          value={project.language.join(", ")}
        />

        <InfoRow
          label="Files"
          value={project.files.toString()}
        />

        <InfoRow
          label="Directories"
          value={project.directories.toString()}
        />

      </div>
    </section>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border p-4">
      <p className="text-sm text-muted-foreground">
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold">
        {value}
      </p>
    </div>
  );
}