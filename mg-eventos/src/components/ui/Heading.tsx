import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  as?: HeadingTag;
  children: React.ReactNode;
  className?: string;
}

const defaultStyles: Record<HeadingTag, string> = {
  h1: "font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl",
  h2: "font-heading font-bold text-3xl md:text-4xl lg:text-5xl",
  h3: "font-heading font-bold text-xl md:text-2xl",
  h4: "font-heading font-semibold text-lg md:text-xl",
  h5: "font-heading font-semibold text-base md:text-lg",
  h6: "font-heading font-semibold text-sm md:text-base",
};

export function Heading({ as: Tag = "h2", children, className }: HeadingProps) {
  return (
    <Tag className={cn(defaultStyles[Tag], className)}>{children}</Tag>
  );
}
