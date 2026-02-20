import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "secondary" | "accent";
  className?: string;
}

export function Badge({ children, variant = "secondary", className }: BadgeProps) {
  const styles = {
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent-warm",
  };

  return (
    <span
      className={cn(
        "inline-block px-3 py-1 rounded-full text-sm font-heading font-semibold",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
