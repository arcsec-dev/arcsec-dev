type Project = {
    projectName: string;
    language: string[];
    framework: string;
    files: number;
    directories: number;
  };
  
  export function ProjectSummary({ project }: { project: Project }) {
    return (
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="mb-6 text-2xl font-semibold">
          Project Summary
        </h2>
  
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">Project</p>
            <p className="font-medium">{project.projectName}</p>
          </div>
  
          <div>
            <p className="text-sm text-muted-foreground">Framework</p>
            <p className="font-medium">{project.framework}</p>
          </div>
  
          <div>
            <p className="text-sm text-muted-foreground mb-2">
                Languages
            </p>

            <div className="flex flex-wrap gap-2">
                {project.language.map((lang) => (
                <span
                    key={lang}
                    className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300"
                >
                    {lang}
                </span>
                ))}
            </div>
            </div>
  
          <div>
            <p className="text-sm text-muted-foreground">Files</p>
            <p className="font-medium">{project.files}</p>
          </div>
  
          <div>
            <p className="text-sm text-muted-foreground">Directories</p>
            <p className="font-medium">{project.directories}</p>
          </div>
        </div>
      </div>
    );
  }