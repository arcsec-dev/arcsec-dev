import { cn } from "@/lib/utils";

type DetailItemProps = {
  label: string;
  value: string | number;
  className?: string;
};

export function DetailItem({
  label,
  value,
  className,
}: DetailItemProps) {
  return (
    <div className={cn("rounded-lg border border-border p-4", className)}>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-2 font-semibold">{value}</p>
    </div>
  );
}
