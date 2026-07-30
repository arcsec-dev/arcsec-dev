import { cn } from "@/lib/utils";

type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionTitle({
  title,
  subtitle,
  className,
}: Props) {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-3xl font-bold tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}