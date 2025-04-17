
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  className?: string;
  iconClassName?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  className,
  iconClassName,
}: FeatureCardProps) {
  return (
    <div className={cn("module-card p-6 flex flex-col h-full", className)}>
      <div className={cn("rounded-full w-12 h-12 flex items-center justify-center bg-brand-50 mb-4", iconClassName)}>
        <Icon className="h-6 w-6 text-brand-500" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
      <Button asChild className="w-full mt-auto">
        <Link to={href}>
          <span>Open</span>
          <span className="ai-badge ml-2">AI</span>
        </Link>
      </Button>
    </div>
  );
}
