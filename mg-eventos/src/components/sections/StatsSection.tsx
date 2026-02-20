import { Section } from "@/components/ui/Section";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { StatItem } from "@/types";

interface StatsSectionProps {
  stats: StatItem[];
  title?: string;
  description?: string;
  variant?: "dark" | "white" | "light";
}

export function StatsSection({
  stats,
  title,
  description,
  variant = "dark",
}: StatsSectionProps) {
  const numberColor =
    variant === "dark" ? "text-accent" : "text-secondary";
  const labelColor =
    variant === "dark" ? "text-neutral-400" : "text-neutral-500";
  const titleColor =
    variant === "dark" ? "text-white" : "text-neutral-900";

  return (
    <Section variant={variant}>
      {title && (
        <div className="text-center mb-12">
          <h3 className={`font-heading font-bold text-2xl md:text-3xl ${titleColor}`}>
            {title}
          </h3>
          {description && (
            <p className={`font-body text-lg mt-3 ${labelColor}`}>
              {description}
            </p>
          )}
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className={`font-heading font-extrabold text-4xl md:text-5xl ${numberColor}`}>
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </p>
            <p className={`font-body text-sm uppercase tracking-wider mt-2 ${labelColor}`}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
