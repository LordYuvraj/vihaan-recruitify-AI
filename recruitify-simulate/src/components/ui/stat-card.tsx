
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cva } from "class-variance-authority";
import { LucideIcon } from "lucide-react";

const iconVariants = cva("h-5 w-5", {
  variants: {
    variant: {
      default: "text-neutral-500",
      success: "text-success-500",
      warning: "text-warning-500",
      error: "text-error-500",
      info: "text-brand-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const bgVariants = cva("p-2 rounded-full", {
  variants: {
    variant: {
      default: "bg-neutral-100",
      success: "bg-success-50",
      warning: "bg-warning-50",
      error: "bg-error-50",
      info: "bg-brand-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: number;
  variant?: "default" | "success" | "warning" | "error" | "info";
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  variant = "default",
}: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={bgVariants({ variant })}>
          <Icon className={iconVariants({ variant })} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
        {trend !== undefined && (
          <div className="flex items-center mt-1">
            <span
              className={`text-xs font-medium ${
                trend > 0
                  ? "text-success-600"
                  : trend < 0
                  ? "text-error-600"
                  : "text-neutral-500"
              }`}
            >
              {trend > 0 ? "+" : ""}
              {trend}%
            </span>
            <span className="text-xs text-muted-foreground ml-1">vs last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
