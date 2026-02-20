import { Metadata } from "next";
import Link from "next/link";
import { Tent, Users, Cake } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValueProps } from "@/components/sections/ValueProps";
import { ServiceDetailBlock } from "@/components/sections/ServiceDetailBlock";
import { BudgetCTA } from "@/components/sections/BudgetCTA";
import { WhyMGSection } from "@/components/sections/WhyMGSection";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SchemaService } from "@/components/seo/SchemaService";
import { SchemaBreadcrumb } from "@/components/seo/SchemaBreadcrumb";

export const metadata: Metadata = createMetadata({
  title: "DJ para fiestas en Galicia — MG Eventos",
  description:
    "DJ para fiestas en Galicia: verbenas, cumpleaños, fiestas privadas. Sonido, iluminación y animación profesional. +10 años de experiencia. Presupuesto gratis.",
  slug: "/dj-para-fiestas-en-galicia",
  ogImage: "/og/dj-fiestas.jpg",
});

export default function DJFiestasPage() {
  return (
    <>
      <SchemaService
        serviceName="DJ para fiestas en Galicia"
        description="DJ para fiestas en Galicia: verbenas, cumpleaños, fiestas privadas. Sonido, iluminación y animación profesional."
        slug="/dj-para-fiestas-en-galicia"
      />
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: "DJ para fiestas en Galicia", href: "/dj-para-fiestas-en-galicia" },
        ]}
      />

      <HeroSection
        preTitle="¡Contrata un dj para tus fiestas!"
        title="DJ para fiestas en Galicia"
        paragraph="En MG Eventos ponemos a tu disposición un DJ fiesta en Galicia capaz de transformar cualquier celebración en un momento único. Nos adaptamos a fiestas de todo tipo y en cualquier lugar, llevando la música, el sonido y la iluminación necesarios para que la diversión esté garantizada. Con años de experiencia en la zona de Santiago y en toda la comunidad, sabemos cómo hacer que tu fiesta tenga ritmo y energía de principio a fin."
        ctaPrimary={{ text: "¡Contáctanos!", href: "/contacto" }}
        breadcrumbs={[
          { name: "Inicio", href: "/" },
          { name: "DJ para fiestas en Galicia", href: "/dj-para-fiestas-en-galicia" },
        ]}
      />

      <ValueProps
        items={[
          {
            icon: Tent,
            title: "Dj para verbenas",
            description:
              "Las fiestas de parroquia y celebraciones al aire libre en Galicia tienen algo especial: reúnen a vecinos, amigos y visitantes en torno a la música",
          },
          {
            icon: Users,
            title: "Reuniones familiares y de amigos",
            description:
              "Ya sea un aniversario, una comunión o una simple quedada entre amigos, la música transforma cualquier espacio en una pista de baile.",
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
        tag="Algo íntimo"
        title="DJ para fiestas privadas en Galicia"
        paragraphs={[
          "En MG Eventos sabemos que una celebración en casa, en una finca o en un local especial necesita un toque único. Por eso ofrecemos un DJ para fiestas privadas en Galicia capaz de adaptar la música y la animación al ambiente que quieras crear. Desde reuniones familiares más íntimas hasta celebraciones con amigos o pequeños grupos de empresa, contamos con la experiencia y el equipo necesario para que tu fiesta sea recordada.",
          "La ventaja de contar con un servicio profesional es que no tienes que preocuparte de nada: llevamos sonido, iluminación y toda la energía para que la música no falte en ningún momento. Además, nuestro DJ para fiestas privadas en Galicia se desplaza a cualquier lugar, ya sea en Santiago de Compostela o en cualquier rincón de la comunidad.",
        ]}
        listItems={["Cumpleaños", "Celebraciones", "Fiestas íntimas"]}
        cta={{ text: "Hablemos", href: "/contacto" }}
        stat={{ value: 10, prefix: "+", label: "Años de experiencia" }}
      />

      <BudgetCTA
        title="Solicita presupuesto para tu fiesta con DJ en Galicia"
        description="¿Quieres que tu próxima celebración sea inolvidable? En MG Eventos ponemos a tu disposición un DJ para fiestas en Galicia con sonido, iluminación y animación adaptados a cada ocasión. Te asesoramos sin compromiso, resolvemos tus dudas y diseñamos un plan a medida para que disfrutes sin preocuparte de nada."
        ctaText="¡Contáctanos!"
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

      <Section variant="white">
        <Heading as="h2" className="text-neutral-900">
          Otros servicios de fiesta
        </Heading>
        <p className="text-neutral-600 font-body text-lg leading-relaxed mt-4 max-w-4xl">
          Si buscas un montaje completo, ponemos a tu disposición nuestro{" "}
          <Link
            href="/escenario-movil-para-eventos"
            className="text-secondary hover:underline font-semibold"
          >
            camión escenario
          </Link>
          , perfecto para fiestas patronales, conciertos y grandes
          celebraciones. Con él tendrás todo en uno: escenario, sonido
          profesional, iluminación y un DJ para fiestas en Galicia que se adapta
          al estilo de tu fiesta.
        </p>
        <p className="text-neutral-600 font-body text-lg leading-relaxed mt-4 max-w-4xl">
          Nuestras contrataciones de DJ para fiestas incluyen mucho más que
          pinchar música: asesoramiento previo, montaje de sonido e iluminación,{" "}
          <Link
            href="/discotecas-moviles-en-galicia"
            className="text-secondary hover:underline font-semibold"
          >
            discomóvil para fiestas
          </Link>{" "}
          y{" "}
          <Link
            href="/fotomaton-en-galicia"
            className="text-secondary hover:underline font-semibold"
          >
            fotomatón para fiestas
          </Link>
          , siempre buscando las mejores condiciones para que tu fiesta sea un
          éxito sin complicaciones. y la tranquilidad de que todo funcione
          perfecto durante el evento. Nos encargamos de los detalles técnicos
          para que tú solo tengas que preocuparte de disfrutar.
        </p>
        <div className="mt-8">
          <Button href="/contacto">¡Contáctanos!</Button>
        </div>
      </Section>

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
