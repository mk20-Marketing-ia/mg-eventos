import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";

interface BudgetCTAProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export function BudgetCTA({
  title,
  description,
  ctaText,
  ctaHref,
}: BudgetCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary-dark to-primary text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <Heading as="h2" className="text-white">
            {title}
          </Heading>
          <p className="text-white/80 font-body text-lg leading-relaxed mt-6">
            {description}
          </p>
          <div className="mt-8">
            <Button
              href={ctaHref}
              className="bg-accent hover:bg-accent-light text-primary font-bold"
              size="lg"
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
