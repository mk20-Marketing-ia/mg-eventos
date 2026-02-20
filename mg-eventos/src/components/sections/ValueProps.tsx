import { Section } from "@/components/ui/Section";
import { type LucideIcon } from "lucide-react";

interface ValuePropsItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ValuePropsProps {
  items: ValuePropsItem[];
  variant?: "light" | "white";
}

export function ValueProps({ items, variant = "light" }: ValuePropsProps) {
  return (
    <Section variant={variant}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="text-center animate-slide-up opacity-0"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/10 mb-5">
              <item.icon className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-heading font-bold text-lg text-neutral-900 mb-3">
              {item.title}
            </h3>
            <p className="text-neutral-600 font-body text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
