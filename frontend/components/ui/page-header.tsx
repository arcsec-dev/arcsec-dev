type Props = {
    title: string;
    subtitle?: string;
  };
  
  export function PageHeader({
    title,
    subtitle,
  }: Props) {
    return (
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          VibeSec AI Security Engineer
        </p>
  
        <h1 className="mt-2 text-5xl font-bold tracking-tight">
          {title}
        </h1>
  
        {subtitle && (
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            {subtitle}
          </p>
        )}
      </header>
    );
  }