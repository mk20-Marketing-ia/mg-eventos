import { Metadata } from "next";
import Link from "next/link";
import { Music, Speaker, Cake } from "lucide-react";
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
  title: "DJ para eventos en Galicia — MG Eventos",
  description:
    "Contrata un DJ para eventos en Galicia. Música personalizada, sonido profesional e iluminación adaptada. +10 años de experiencia. Presupuesto sin compromiso.",
  slug: "/dj-para-eventos-en-galicia",
  ogImage: "/og/dj-eventos.jpg",
});

export default function DJEventosPage() {
  return (
    <>
      <SchemaService
        serviceName="DJ para eventos en Galicia"
        description="Contrata un DJ para eventos en Galicia. Música personalizada, sonido profesional e iluminación adaptada a cada celebración."
        slug="/dj-para-eventos-en-galicia"
      />
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: "DJ para eventos en Galicia", href: "/dj-para-eventos-en-galicia" },
        ]}
      />

      <HeroSection
        preTitle="¡Contrata un dj para tu evento!"
        title="DJ para eventos en Galicia"
        paragraph="¿Buscas un DJ para eventos en Galicia? En MG Eventos te ofrecemos un servicio cercano y totalmente adaptado. Buscamos que cada evento en Galicia tenga la música adecuada, el ambiente perfecto y la energía que haga que tus invitados disfruten al máximo."
        ctaPrimary={{ text: "¡Contáctanos!", href: "/contacto" }}
        breadcrumbs={[
          { name: "Inicio", href: "/" },
          { name: "DJ para eventos en Galicia", href: "/dj-para-eventos-en-galicia" },
        ]}
      />

      <ValueProps
        items={[
          {
            icon: Music,
            title: "Música personalizada",
            description:
              "Cada celebración es diferente. Con nuestro equipo podrás contar con un DJ que entiende tus gustos, prepara la música y crea una banda sonora única para tu celebración.",
          },
          {
            icon: Speaker,
            title: "Sonido e iluminación adaptados",
            description:
              "No solo llevamos la música. Nuestro servicio incluye sonido profesional e iluminación ajustada a cada espacio, desde salones pequeños hasta grandes exteriores.",
          },
          {
            icon: Cake,
            title: "DJ para cumpleaños en Galicia",
            description:
              "Un cumpleaños siempre merece una celebración especial, y tener un DJ para cumpleaños es la mejor forma de asegurar diversión desde el primer minuto.",
          },
        ]}
      />

      <ServiceDetailBlock
        tag="Para empresas"
        title="DJ para eventos corporativos en Galicia"
        paragraphs={[
          "Sea cual sea el evento de tu empresa, en MG Eventos te ofrecemos un DJ para eventos corporativos en Galicia capaz de adaptarse a cada ocasión. Sabemos que no es lo mismo animar una cena de equipo que acompañar un congreso con música ambiental o dinamizar una presentación de producto. Por eso trabajamos de manera flexible, siempre buscando que tu evento tenga la imagen profesional que merece.",
        ]}
        listItems={[
          "Cenas de empresa",
          "Presentaciones corporativas",
          "Congresos",
        ]}
        cta={{ text: "Hablemos", href: "/contacto" }}
        stat={{ value: 10, prefix: "+", label: "Años de experiencia" }}
      />

      <BudgetCTA
        title="Solicita presupuesto para tu DJ de eventos en Galicia"
        description="¿Quieres asegurarte de que tu próxima celebración sea un éxito? En MG Eventos ponemos a tu disposición un DJ para eventos en Galicia con la experiencia y la cercanía que necesitas. Te asesoramos sin compromiso, resolvemos todas tus dudas y te ayudamos a elegir el servicio que mejor encaje con tu fiesta, con las mejores condiciones y siempre al mejor precio."
        ctaText="¡Pregúntanos!"
        ctaHref="/contacto"
      />

      <Section variant="light">
        <Badge className="mb-4">Monta tu evento con un</Badge>
        <Heading as="h2" className="text-neutral-900">
          Ambiente profesional con música y equipos de calidad
        </Heading>
        <p className="text-neutral-600 font-body text-lg leading-relaxed mt-4 max-w-4xl">
          En un evento corporativo, la imagen lo es todo. Por eso, además de un
          DJ profesional en Galicia, contamos con{" "}
          <Link
            href="/pantallas-led-para-eventos-en-galicia"
            className="text-secondary hover:underline font-semibold"
          >
            pantallas LED para eventos
          </Link>{" "}
          para reforzar la comunicación de tu marca, presentaciones o vídeos. Y
          si buscas un toque más cercano y divertido para los asistentes, nuestro{" "}
          <Link
            href="/fotomaton-en-galicia"
            className="text-secondary hover:underline font-semibold"
          >
            fotomatón para eventos
          </Link>{" "}
          es perfecto para crear recuerdos que quedarán ligados a tu empresa.
        </p>
        <p className="text-neutral-600 font-body text-lg leading-relaxed mt-4 max-w-4xl">
          Unimos música, sonido, iluminación y recursos visuales en un servicio
          completo que aporta la seriedad necesaria en lo profesional y el
          entretenimiento que hace que tu evento sea recordado.
        </p>
      </Section>

      <ServiceDetailBlock
        tag="Para empresas"
        title="DJ para eventos pequeños en Galicia"
        paragraphs={[
          "Sea cual sea el evento de tu empresa, en MG Eventos te ofrecemos un DJ para eventos corporativos en Galicia capaz de adaptarse a cada ocasión. Sabemos que no es lo mismo animar una cena de equipo que acompañar un congreso con música ambiental o dinamizar una presentación de producto. Por eso trabajamos de manera flexible, siempre buscando que tu evento tenga la imagen profesional que merece.",
        ]}
        listItems={[
          "Cenas de empresa",
          "Presentaciones corporativas",
          "Congresos",
        ]}
        cta={{ text: "¡Contáctanos!", href: "/contacto" }}
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
