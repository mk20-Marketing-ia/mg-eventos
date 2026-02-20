import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "white";
  className?: string;
  containerClassName?: string;
  id?: string;
}

const variantStyles = {
  light: "bg-neutral-50",
  dark: "bg-primary text-white",
  white: "bg-white",
};

export function Section({
  children,
  variant = "white",
  className,
  containerClassName,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", variantStyles[variant], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
