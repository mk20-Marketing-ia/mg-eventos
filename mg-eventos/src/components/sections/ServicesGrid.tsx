import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import dynamic from "next/dynamic";
import type { ServiceCardItem } from "@/components/ui/color-change-card";

const ColorChangeCards = dynamic(
  () => import("@/components/ui/color-change-card"),
  { ssr: false }
);

// Mapa de imágenes de Pexels por slug/título de servicio
const SERVICE_IMAGES: Record<string, string> = {
  "/dj-para-eventos-en-galicia":
    "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800",
  "/discotecas-moviles-en-galicia":
    "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
  "/escenario-movil-para-eventos":
    "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg?auto=compress&cs=tinysrgb&w=800",
  "/pantallas-led-para-eventos-en-galicia":
    "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
  "/fotomaton-en-galicia":
    "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800",
};

const FALLBACK_IMAGE =
  "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=800";

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

export function ServicesGrid({ title, subtitle, intro, services }: ServicesGridProps) {
  const cardItems: ServiceCardItem[] = services.map((s) => ({
    heading: s.title,
    description: s.description,
    href: s.href,
    imgSrc: SERVICE_IMAGES[s.href] ?? FALLBACK_IMAGE,
  }));

  return (
    <Section variant="light" id="servicios">
      <div className="text-center mb-10">
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

      <ColorChangeCards services={cardItems} />
    </Section>
  );
}
