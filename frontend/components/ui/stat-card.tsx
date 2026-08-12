import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  value: string | number;
  className?: string;
  valueClassName?: string;
};

export function StatCard({
  title,
  value,
  className,
  valueClassName,
}: Props) {
  return (
    <Card className={className}>
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground">
          {title}
        </p>

        <p className={cn("mt-2 text-3xl font-bold", valueClassName)}>
          {value}
        </p>
      </CardContent>
    </Card>
  );
}
