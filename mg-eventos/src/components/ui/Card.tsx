import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 hover:-translate-y-1 group",
        className
      )}
    >
      {children}
    </div>
  );
}
