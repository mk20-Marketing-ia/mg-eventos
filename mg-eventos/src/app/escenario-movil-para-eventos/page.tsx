import { Metadata } from "next";
import Link from "next/link";
import { Frame, Clock, Scaling } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValueProps } from "@/components/sections/ValueProps";
import { ServiceDetailBlock } from "@/components/sections/ServiceDetailBlock";
import { BudgetCTA } from "@/components/sections/BudgetCTA";
import { WhyMGSection } from "@/components/sections/WhyMGSection";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { SchemaService } from "@/components/seo/SchemaService";
import { SchemaBreadcrumb } from "@/components/seo/SchemaBreadcrumb";

export const metadata: Metadata = createMetadata({
  title: "Escenario móvil para eventos en Galicia — MG Eventos",
  description:
    "Alquiler de camión escenario en Galicia para verbenas, fiestas y conciertos. Montaje rápido, sonido e iluminación profesional. Presupuesto sin compromiso.",
  slug: "/escenario-movil-para-eventos",
  ogImage: "/og/escenario-movil.jpg",
});

export default function EscenarioMovilPage() {
  return (
    <>
      <SchemaService
        serviceName="Escenario móvil para eventos"
        description="Alquiler de camión escenario en Galicia para verbenas, fiestas y conciertos. Montaje rápido, sonido e iluminación profesional."
        slug="/escenario-movil-para-eventos"
      />
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", href: "/" },
          {
            name: "Escenario móvil para eventos",
            href: "/escenario-movil-para-eventos",
          },
        ]}
      />

      <HeroSection
        preTitle="¿Necesitas un escenario versátil?"
        title="Escenario móvil para eventos"
        paragraph="En MG Eventos ponemos a tu disposición un DJ fiesta en Galicia capaz de transformar cualquier celebración en un momento único. Nos adaptamos a fiestas de todo tipo y en cualquier lugar, llevando la música, el sonido y la iluminación necesarios para que la diversión esté garantizada. Con años de experiencia en la zona de Santiago y en toda la comunidad, sabemos cómo hacer que tu fiesta tenga ritmo y energía de principio a fin."
        ctaPrimary={{ text: "¡Contáctanos!", href: "/contacto" }}
        breadcrumbs={[
          { name: "Inicio", href: "/" },
          {
            name: "Escenario móvil para eventos",
            href: "/escenario-movil-para-eventos",
          },
        ]}
      />

      <ValueProps
        items={[
          {
            icon: Frame,
            title: "Escenario adaptado",
            description:
              "Cada evento es distinto y, sin embargo, el camión escenario encaja siempre. En una explanada se convierte en un punto de encuentro, en la plaza de una aldea pasa a ser el corazón de la fiesta.",
          },
          {
            icon: Clock,
            title: "Montaje rápido y sin complicaciones",
            description:
              "Tener un camión escenario significa montar todo en mucho menos tiempo y sin quebraderos de cabeza. En pocas horas está todo listo: estructura, sonido, luces… y el ambiente preparado para arrancar.",
          },
          {
            icon: Scaling,
            title: "Para eventos grandes y pequeños",
            description:
              "Una de las grandes ventajas de este tipo de escenario es su versatilidad. Puede dar servicio a un festival con miles de personas, pero también encajar en una feria local, un mitin o una fiesta patronal más íntima.",
          },
        ]}
      />

      <ServiceDetailBlock
        tag="Servicio de DJ"
        title="Camión escenario en Galicia"
        paragraphs={[
          "El alquiler de un camión escenario en Galicia es la solución más práctica para quienes organizan conciertos, fiestas o celebraciones al aire libre. Lo mejor es que no necesitas infraestructuras complicadas, solo un DJ para fiestas: el escenario llega sobre ruedas, se despliega en pocas horas y queda listo para recibir música y al público.",
        ]}
        listItems={["Verbenas", "Fiestas", "Eventos"]}
        cta={{ text: "Hablemos", href: "/contacto" }}
        stat={{ value: 10, prefix: "+", label: "Años de experiencia" }}
      >
        <p className="text-neutral-500 font-body text-sm mt-2">
          Complementa con nuestro{" "}
          <Link
            href="/dj-para-fiestas-en-galicia"
            className="text-secondary hover:underline font-semibold"
          >
            DJ para fiestas
          </Link>
        </p>
      </ServiceDetailBlock>

      <BudgetCTA
        title="Solicita presupuesto para tu camión escenario en Galicia"
        description="Organizar un evento es más sencillo cuando cuentas con el apoyo adecuado. Con nuestro camión escenario en Galicia tendrás todo lo necesario para que tu celebración brille: estructura, sonido, luces y un montaje rápido que se adapta al espacio que elijas. Te asesoramos sin compromiso, buscamos la mejor configuración para tu evento y nos encargamos de cada detalle para que tú solo disfrutes del resultado."
        ctaText="¡Pregúntanos!"
        ctaHref="/contacto"
      />

      <Section variant="light">
        <Badge className="mb-4">Servicio completo</Badge>
        <Heading as="h2" className="text-neutral-900">
          Sonido e iluminación para tu evento
        </Heading>
        <p className="text-neutral-600 font-body text-lg leading-relaxed mt-4 max-w-4xl">
          No se trata solo de tener un escenario: lo importante es que luzca y
          suene como debe. Por eso, en nuestro alquiler de camión escenario
          móvil incluimos equipos de sonido potentes y{" "}
          <Link
            href="/pantallas-led-para-eventos-en-galicia"
            className="text-secondary hover:underline font-semibold"
          >
            pantallas led
          </Link>{" "}
          adaptadas a cada evento.
        </p>
        <p className="text-neutral-600 font-body text-lg leading-relaxed mt-4 max-w-4xl">
          Esto significa que no tienes que preocuparte de coordinar a diferentes
          proveedores: el escenario, el sonido y las luces viajan juntos. Y
          puedes contar con nuestro{" "}
          <Link
            href="/dj-para-fiestas-en-galicia"
            className="text-secondary hover:underline font-semibold"
          >
            DJ para fiestas
          </Link>{" "}
          Con un único servicio tienes todo lo necesario para arrancar la fiesta.
        </p>
      </Section>

      {/* NOTA: Esta página usa números distintos: +8 años, +1752 clientes, +1401 eventos */}
      <WhyMGSection
        subtitle="Servicio de DJ con experiencia y cercanía"
        description="En MG Eventos ofrecemos un servicio de DJ en Galicia pensado para que disfrutes sin preocupaciones. Nuestro equipo no solo lleva la música, también aporta la energía y la confianza de un profesional que sabe adaptarse a cada tipo de público y celebración."
        stats={[
          { value: 8, prefix: "+", label: "Años de experiencia" },
          { value: 1752, prefix: "+", label: "Clientes satisfechos" },
          { value: 1401, prefix: "+", label: "Eventos y fiestas" },
        ]}
      />
    </>
  );
}
