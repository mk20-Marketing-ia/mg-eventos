import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "whatsapp" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit";
  external?: boolean;
}

const variantStyles = {
  primary:
    "bg-secondary hover:bg-secondary-light text-white hover:shadow-glow hover:-translate-y-0.5",
  secondary:
    "bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white",
  whatsapp:
    "bg-whatsapp hover:bg-green-600 text-white hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-secondary hover:bg-secondary/10",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  icon,
  type = "button",
  external = false,
}: ButtonProps) {
  const classes = cn(
    "font-heading font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {icon}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {icon}
      {children}
    </button>
  );
}
