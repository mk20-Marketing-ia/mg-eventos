import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";

interface CTASectionProps {
  title: string;
  description?: string;
  ctaText: string;
  ctaHref: string;
  secondaryTitle?: string;
  secondaryDescription?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  variant?: "dark" | "gradient" | "whatsapp";
}

const bgStyles = {
  dark: "bg-primary",
  gradient: "bg-gradient-to-br from-primary via-primary-light to-secondary",
  whatsapp: "bg-gradient-to-br from-primary via-primary-light to-secondary",
};

export function CTASection({
  title,
  description,
  ctaText,
  ctaHref,
  secondaryTitle,
  secondaryDescription,
  secondaryCtaText,
  secondaryCtaHref,
  variant = "gradient",
}: CTASectionProps) {
  const isWhatsApp = ctaHref.includes("wa.me");

  return (
    <section className={`py-16 md:py-24 ${bgStyles[variant]} text-white`}>
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
            {title}
          </h2>
          {description && (
            <p className="text-neutral-300 font-body text-lg mt-4">
              {description}
            </p>
          )}
          <div className="mt-8">
            <Button
              variant={isWhatsApp ? "whatsapp" : "primary"}
              href={ctaHref}
              size="lg"
              external={isWhatsApp}
              icon={isWhatsApp ? <MessageCircle className="w-5 h-5" /> : undefined}
              className={isWhatsApp ? undefined : "bg-accent hover:bg-accent-light text-primary"}
            >
              {ctaText}
            </Button>
          </div>

          {secondaryTitle && (
            <div className="mt-12 pt-12 border-t border-white/10">
              <h3 className="font-heading font-bold text-2xl text-white">
                {secondaryTitle}
              </h3>
              {secondaryDescription && (
                <p className="text-neutral-300 font-body text-lg mt-3">
                  {secondaryDescription}
                </p>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <div className="mt-6">
                  <Button variant="secondary" href={secondaryCtaHref} className="border-white text-white hover:bg-white hover:text-primary">
                    {secondaryCtaText}
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
