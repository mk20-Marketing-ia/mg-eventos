import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";

interface ServiceCardData {
  title: string;
  description: string;
  href: string;
  imageAlt: string;
}

interface ServicesGridProps {
  title: string;
  subtitle?: string;
  intro?: string;
  services: ServiceCardData[];
}

export function ServicesGrid({
  title,
  subtitle,
  intro,
  services,
}: ServicesGridProps) {
  return (
    <Section variant="light">
      <div className="text-center mb-12">
        <Heading as="h2" className="text-neutral-900">
          {title}
        </Heading>
        {subtitle && (
          <p className="font-heading font-semibold text-secondary text-lg mt-2">
            {subtitle}
          </p>
        )}
        {intro && (
          <p className="text-neutral-600 font-body text-lg mt-4 max-w-2xl mx-auto">
            {intro}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <Link
            key={service.href}
            href={service.href}
            className="animate-slide-up opacity-0"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card className="h-full hover:border-secondary border border-transparent">
              <div className="w-full aspect-[16/10] rounded-lg bg-neutral-200 mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-neutral-400 text-sm font-body">
                    {service.imageAlt}
                  </span>
                </div>
              </div>
              <h3 className="font-heading font-bold text-lg text-neutral-900 group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-neutral-600 font-body text-sm leading-relaxed mt-2">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1 text-secondary font-heading font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                Ver servicio <ArrowRight className="w-4 h-4" />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
