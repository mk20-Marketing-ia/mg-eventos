import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Check, TrendingUp } from "lucide-react";
import { StatItem } from "@/types";

interface ServiceDetailBlockProps {
  tag?: string;
  title: string;
  paragraphs: string[];
  listItems?: string[];
  cta?: { text: string; href: string };
  /** Un solo stat (legacy) */
  stat?: { value: number; prefix?: string; label: string };
  /** Múltiples stats en grid */
  stats?: StatItem[];
  variant?: "white" | "light";
  children?: React.ReactNode;
}

export function ServiceDetailBlock({
  tag,
  title,
  paragraphs,
  listItems,
  cta,
  stat,
  stats,
  variant = "white",
  children,
}: ServiceDetailBlockProps) {
  // Normalizar: si llega `stat` (legacy) y no hay `stats`, convertir
  const allStats: StatItem[] = stats ?? (stat ? [stat] : []);
  const hasStats = allStats.length > 0;

  return (
    <Section variant={variant}>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Columna principal */}
        <div className="lg:col-span-3">
          {tag && <Badge className="mb-4">{tag}</Badge>}
          <Heading as="h2" className="text-neutral-900">
            {title}
          </Heading>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-neutral-600 font-body text-lg leading-relaxed mt-4"
            >
              {p}
            </p>
          ))}

          {listItems && listItems.length > 0 && (
            <ul className="mt-6 space-y-3">
              {listItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-neutral-700 font-body"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-secondary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {children}

          {cta && (
            <div className="mt-8">
              <Button href={cta.href}>{cta.text}</Button>
            </div>
          )}
        </div>

        {/* Columna de stats */}
        {hasStats ? (
          <div className="lg:col-span-2 flex flex-col gap-4">
            {allStats.length === 1 ? (
              // Un solo stat — diseño expandido con decoración
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10 border border-secondary/10 p-8 md:p-10 w-full">
                {/* Decoración fondo */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-secondary/10 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-accent/15 blur-xl" />

                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 mb-4">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="font-heading font-extrabold text-6xl md:text-7xl text-secondary leading-none">
                    <AnimatedCounter
                      value={allStats[0].value}
                      prefix={allStats[0].prefix}
                      suffix={allStats[0].suffix}
                    />
                  </p>
                  <p className="font-body text-sm uppercase tracking-widest text-neutral-500 mt-3">
                    {allStats[0].label}
                  </p>
                </div>

                {/* Mini bullets decorativos */}
                <div className="mt-8 pt-6 border-t border-secondary/10 space-y-2">
                  {["Servicio personalizado", "Presupuesto sin compromiso", "Atención cercana"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-neutral-500 text-sm font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Múltiples stats — grid 2x2
              <div className="grid grid-cols-2 gap-4 h-full">
                {allStats.map((s) => (
                  <div
                    key={s.label}
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/8 via-primary/3 to-accent/8 border border-secondary/10 p-6 flex flex-col items-center justify-center text-center"
                  >
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-secondary/10 blur-xl" />
                    <p className="font-heading font-extrabold text-4xl md:text-5xl text-secondary leading-none">
                      <AnimatedCounter
                        value={s.value}
                        prefix={s.prefix}
                        suffix={s.suffix}
                      />
                    </p>
                    <p className="font-body text-xs uppercase tracking-widest text-neutral-500 mt-2">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="lg:col-span-2" />
        )}
      </div>
    </Section>
  );
}
