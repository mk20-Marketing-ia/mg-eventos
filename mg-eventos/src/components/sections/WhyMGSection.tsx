import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { StatItem } from "@/types";

interface WhyMGSectionProps {
  title?: string;
  subtitle?: string;
  description: string;
  stats: StatItem[];
}

export function WhyMGSection({
  title = "¿Por qué MG Eventos?",
  subtitle,
  description,
  stats,
}: WhyMGSectionProps) {
  return (
    <Section variant="dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Heading as="h2" className="text-white">
            {title}
          </Heading>
          {subtitle && (
            <p className="text-secondary-light font-heading font-semibold text-lg mt-3">
              {subtitle}
            </p>
          )}
          <p className="text-neutral-300 font-body text-lg leading-relaxed mt-6">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading font-extrabold text-4xl md:text-5xl text-accent">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="font-body text-sm uppercase tracking-wider text-neutral-400 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
