import { Metadata } from "next";
import Link from "next/link";
import { Speaker, Tent, TreePine } from "lucide-react";
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
  title: "Discotecas móviles en Galicia — MG Eventos",
  description:
    "Discomóvil en Galicia para bodas, verbenas y fiestas. Sonido, iluminación y animación profesional. Montaje versátil. +10 años de experiencia.",
  slug: "/discotecas-moviles-en-galicia",
  ogImage: "/og/discomovil.jpg",
});

export default function DiscoMovilPage() {
  return (
    <>
      <SchemaService
        serviceName="Discotecas móviles en Galicia"
        description="Discomóvil en Galicia para bodas, verbenas y fiestas. Sonido, iluminación y animación profesional."
        slug="/discotecas-moviles-en-galicia"
      />
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", href: "/" },
          {
            name: "Discotecas móviles en Galicia",
            href: "/discotecas-moviles-en-galicia",
          },
        ]}
      />

      <HeroSection
        title="Discotecas móviles en Galicia"
        paragraph="En MG Eventos llevamos años montando discotecas móviles en Galicia que se adaptan a cada tipo de público. Es trasladar la experiencia de una sala de fiesta a cualquier lugar: un jardín, una plaza, una finca o el espacio que elijas para celebrar. Lo especial de este servicio es la flexibilidad: puedes tener el sonido, la iluminación y la animación de una discoteca real sin necesidad de desplazarte."
        ctaPrimary={{ text: "¡Contáctanos!", href: "/contacto" }}
        breadcrumbs={[
          { name: "Inicio", href: "/" },
          {
            name: "Discotecas móviles en Galicia",
            href: "/discotecas-moviles-en-galicia",
          },
        ]}
      />

      <ValueProps
        items={[
          {
            icon: Speaker,
            title: "Música, sonido e iluminación",
            description:
              "En plazas, campos de fiesta o jardines, lo importante es que la música llegue a todos y que la iluminación cree un ambiente festivo.",
          },
          {
            icon: Tent,
            title: "Ideal para verbenas y fiestas",
            description:
              "No hay fiesta de pueblo sin música, y ahí es donde una discoteca móvil se convierte en protagonista. Hemos participado en verbenas, fiestas patronales en toda Galicia",
          },
          {
            icon: TreePine,
            title: "Perfecta para el aire libre",
            description:
              "Las fiestas al aire libre tienen un encanto propio, y una discoteca al aire libre en Galicia consigue aprovecharlo al máximo.",
          },
        ]}
      />

      <ServiceDetailBlock
        tag="Días especiales"
        title="Discomóvil para bodas"
        paragraphs={[
          "La música es uno de los pilares de cualquier boda. Una discomóvil para bodas en Galicia permite que la celebración tenga todo lo necesario: sonido de calidad, iluminación que transforma el ambiente y un montaje que se adapta al espacio, ya sea en un pazo, una finca o un salón de banquetes.",
          "Nuestro equipo se encarga de todo el montaje y la animación musical, y si quieres una experiencia aún más completa puedes combinarla con nuestro DJ para bodas. Así tendrás un servicio que une la potencia técnica de la discomóvil con la cercanía y la personalización que aporta un DJ profesional.",
        ]}
        listItems={[
          "Bodas al aire libre",
          "Eventos grandes",
          "Fiesta sin fin",
        ]}
        cta={{ text: "¡Contáctanos!", href: "/contacto" }}
        stat={{ value: 10, prefix: "+", label: "Años de experiencia" }}
      >
        <p className="text-neutral-500 font-body text-sm mt-2">
          Combina con nuestro{" "}
          <Link
            href="/dj-para-bodas-en-galicia"
            className="text-secondary hover:underline font-semibold"
          >
            DJ para bodas
          </Link>
        </p>
      </ServiceDetailBlock>

      <BudgetCTA
        title="Solicita presupuesto para disco móvil para fiestas"
        description="¿Quieres asegurarte de que tu próxima celebración sea un éxito? En MG Eventos ponemos a tu disposición un DJ para eventos en Galicia con la experiencia y la cercanía que necesitas. Te asesoramos sin compromiso, resolvemos todas tus dudas y te ayudamos a elegir el servicio que mejor encaje con tu fiesta, con las mejores condiciones y siempre al mejor precio."
        ctaText="Hablemos"
        ctaHref="/contacto"
      />

      <Section variant="light">
        <Badge className="mb-4">Para cualquier fiesta</Badge>
        <Heading as="h2" className="text-neutral-900">
          Servicio flexible para cada tipo de evento
        </Heading>
        <p className="text-neutral-600 font-body text-lg leading-relaxed mt-4 max-w-4xl">
          Cada celebración es distinta. En unas hay cien invitados, en otras
          apenas treinta, y en algunas miles de personas. Nuestra discomóvil se
          adapta a todas esas situaciones, con un montaje más sencillo para
          eventos íntimos o con una puesta en escena espectacular para grandes
          fiestas.
        </p>
        <p className="text-neutral-600 font-body text-lg leading-relaxed mt-4 max-w-4xl">
          Además, puedes elegir entre diferentes configuraciones: sonido, luces,{" "}
          <Link
            href="/pantallas-led-para-eventos-en-galicia"
            className="text-secondary hover:underline font-semibold"
          >
            pantallas LED
          </Link>{" "}
          e incluso un{" "}
          <Link
            href="/escenario-movil-para-eventos"
            className="text-secondary hover:underline font-semibold"
          >
            camión escenario móvil
          </Link>
          , todo pensado para que tu evento tenga justo lo que necesita y nada
          menos.
        </p>
      </Section>

      <ServiceDetailBlock
        tag="Beneficios"
        title="¿Por qué alquilar una discomóvil?"
        paragraphs={[
          "Elegir una discomóvil para tu fiesta o boda no es solo una cuestión de comodidad, es una forma de asegurar que el evento salga redondo. Estos son algunos de los beneficios más importantes:",
        ]}
        listItems={[
          "Montaje versátil",
          "Iluminación que crea ambiente",
          "Potencia y calidad de sonido",
          "Encaja con cualquier evento",
          "Equipo técnico incluido",
        ]}
        cta={{ text: "¡Pregúntanos!", href: "/contacto" }}
        variant="white"
      />

      <WhyMGSection
        subtitle="Servicio de DJ con experiencia y cercanía"
        description="En MG Eventos ofrecemos un servicio de DJ en Galicia pensado para que disfrutes sin preocupaciones. Nuestro equipo no solo lleva la música, también aporta la energía y la confianza de un profesional que sabe adaptarse a cada tipo de público y celebración."
        stats={[
          { value: 10, prefix: "+", label: "Años de experiencia" },
          { value: 2000, prefix: "+", label: "Clientes satisfechos" },
          { value: 1600, prefix: "+", label: "Eventos y fiestas" },
        ]}
      />
    </>
  );
}
