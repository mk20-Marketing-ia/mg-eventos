import { cn } from "@/lib/utils";

interface WaveSeparatorProps {
  variant?: "light-to-dark" | "dark-to-light" | "white-to-light" | "light-to-white";
  className?: string;
}

const fills = {
  "light-to-dark": "fill-primary",
  "dark-to-light": "fill-neutral-50",
  "white-to-light": "fill-neutral-50",
  "light-to-white": "fill-white",
};

export function WaveSeparator({
  variant = "light-to-dark",
  className,
}: WaveSeparatorProps) {
  return (
    <div className={cn("w-full overflow-hidden leading-none -mb-px", className)}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={cn("w-full h-12 md:h-20", fills[variant])}
      >
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
      </svg>
    </div>
  );
}
