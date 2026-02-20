import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Check } from "lucide-react";

interface ServiceDetailBlockProps {
  tag?: string;
  title: string;
  paragraphs: string[];
  listItems?: string[];
  cta?: { text: string; href: string };
  stat?: { value: number; prefix?: string; label: string };
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
  variant = "white",
  children,
}: ServiceDetailBlockProps) {
  return (
    <Section variant={variant}>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
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

        {stat && (
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="text-center bg-neutral-50 rounded-2xl p-8 md:p-12 w-full">
              <p className="font-heading font-extrabold text-5xl md:text-6xl text-secondary">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                />
              </p>
              <p className="font-body text-sm uppercase tracking-wider text-neutral-500 mt-3">
                {stat.label}
              </p>
            </div>
          </div>
        )}

        {!stat && <div className="lg:col-span-2" />}
      </div>
    </Section>
  );
}
