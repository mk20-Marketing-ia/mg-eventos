import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BreadcrumbItem } from "@/types";

interface HeroSectionProps {
  preTitle?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  paragraph?: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
  breadcrumbs?: BreadcrumbItem[];
  compact?: boolean;
}

export function HeroSection({
  preTitle,
  title,
  subtitle,
  paragraph,
  ctaPrimary,
  ctaSecondary,
  breadcrumbs,
  compact = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative ${
        compact ? "min-h-[50vh]" : "min-h-[70vh] md:min-h-[80vh]"
      } flex items-center bg-primary overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light/50 to-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />

      <Container className="relative z-10 py-24 md:py-32">
        {breadcrumbs && (
          <Breadcrumbs
            items={breadcrumbs}
            className="mb-6 [&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white/40 [&_svg]:text-white/30"
          />
        )}

        {preTitle && (
          <p className="text-accent font-heading font-semibold text-sm md:text-base uppercase tracking-wider mb-4 animate-fade-in">
            {preTitle}
          </p>
        )}

        <Heading
          as="h1"
          className="text-white max-w-4xl animate-fade-in"
        >
          {title}
        </Heading>

        {subtitle && (
          <p className="text-secondary-light font-heading font-bold text-xl md:text-2xl mt-4 animate-fade-in [animation-delay:0.15s] opacity-0">
            {subtitle}
          </p>
        )}

        {paragraph && (
          <p className="text-neutral-300 font-body text-lg md:text-xl max-w-2xl mt-6 leading-relaxed animate-slide-up [animation-delay:0.3s] opacity-0">
            {paragraph}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-up [animation-delay:0.5s] opacity-0">
          <Button href={ctaPrimary.href}>{ctaPrimary.text}</Button>
          {ctaSecondary && (
            <Button variant="secondary" href={ctaSecondary.href}>
              {ctaSecondary.text}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
