import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import dynamic from "next/dynamic";
import type { ServiceCardItem } from "@/components/ui/color-change-card";

const ColorChangeCards = dynamic(
  () => import("@/components/ui/color-change-card"),
  { ssr: false }
);

// Imágenes locales por slug de servicio (carpeta mg eventos en galicia  servicios)
const SERVICE_IMAGES: Record<string, string> = {
  "/dj-para-eventos-en-galicia":
    "/mg%20eventos%20en%20galicia%20%20servicios/mg%20eventos%20en%20galicia%20%20servicios%20de%20dj.jpg",
  "/discotecas-moviles-en-galicia":
    "/mg%20eventos%20en%20galicia%20%20servicios/mg%20eventos%20en%20galicia%20%20servicios%20disco%20movil.jpg",
  "/escenario-movil-para-eventos":
    "/mg%20eventos%20en%20galicia%20%20servicios/mg%20eventos%20en%20galicia%20%20servicios%20camion%20esenario.jpg",
  "/pantallas-led-para-eventos-en-galicia":
    "/mg%20eventos%20en%20galicia%20%20servicios/mg%20eventos%20en%20galicia%20%20servicios%20pantallas%20led.jpg",
  "/fotomaton-en-galicia":
    "/mg%20eventos%20en%20galicia%20%20servicios/mg%20eventos%20en%20galicia%20%20servicios%20fotomation.jpg",
};

const FALLBACK_IMAGE =
  "/mg%20eventos%20en%20galicia%20%20servicios/mg%20eventos%20en%20galicia%20%20servicios%20de%20dj.jpg";

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
