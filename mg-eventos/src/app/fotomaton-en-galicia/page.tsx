import { Metadata } from "next";
import Link from "next/link";
import { Camera, Image, Users } from "lucide-react";
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
  title: "Fotomatón en Galicia — Alquiler para bodas y fiestas",
  description:
    "Alquila un fotomatón en Galicia para bodas, fiestas y eventos. Atrezzo, galería digital y diversión asegurada. Presupuesto sin compromiso. MG Eventos.",
  slug: "/fotomaton-en-galicia",
  ogImage: "/og/fotomaton.jpg",
});

export default function FotomatonPage() {
  return (
    <>
      <SchemaService
        serviceName="Fotomatón en Galicia"
        description="Alquila un fotomatón en Galicia para bodas, fiestas y eventos. Atrezzo, galería digital y diversión asegurada."
        slug="/fotomaton-en-galicia"
      />
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: "Fotomatón en Galicia", href: "/fotomaton-en-galicia" },
        ]}
      />

      <HeroSection
        preTitle="¿Buscas un fotomatón para tu fiesta?"
        title="Fotomatón en Galicia"
        paragraph="Un fotomatón es mucho más que una máquina de fotos: es un rincón que aporta espontaneidad, risas y recuerdos compartidos en uno de los días más importantes de tu vida. En MG Eventos lo hemos visto una y otra vez: mientras la música suena y la fiesta avanza, el fotomatón se convierte en el lugar donde todos quieren estar, desde los más jóvenes hasta los más mayores."
        ctaPrimary={{ text: "¡Contáctanos!", href: "/contacto" }}
        breadcrumbs={[
          { name: "Inicio", href: "/" },
          { name: "Fotomatón en Galicia", href: "/fotomaton-en-galicia" },
        ]}
      />

      <ValueProps
        items={[
          {
            icon: Camera,
            title: "Diversión y recuerdos",
            description:
              "La clave está en que une a los invitados en un ambiente desenfadado, generando momentos que complementan a la perfección la emoción y el estilo de cualquier evento.",
          },
          {
            icon: Image,
            title: "Galería digital",
            description:
              "Después de la boda, tendrás acceso a un álbum con momentos de todos los invitados durante la boda, con momentos memorables y risas y anécdotas aseguradas.",
          },
          {
            icon: Users,
            title: "Rincón especial para tus invitados",
            description:
              "Lo que más sorprende es que siempre hay movimiento alrededor del fotomatón: grupos de amigos, familias enteras y hasta los abuelos disfrutan de participar.",
          },
        ]}
      />

      <ServiceDetailBlock
        tag="Para fiestas"
        title="Fotomatón para eventos"
        paragraphs={[
          "Una foto siempre es una excusa perfecta para echarse unas risas, y tener un fotomatón le da un punto diferente a la celebración. No se trata solo de fotos, sino de crear un rincón en el que todos —niños y mayores— se divierten juntos probando complementos, inventando poses y compartiendo risas.",
        ]}
        listItems={[
          "Atrezzo variado y original",
          "Galería digital",
          "Risas aseguradas",
        ]}
        cta={{ text: "Pregúntanos", href: "/contacto" }}
        stat={{ value: 10, prefix: "+", label: "Años de experiencia" }}
      />

      <BudgetCTA
        title="Solicita presupuesto para tu espejo fotomatón"
        description="Tu boda es un día único y merece detalles que lo hagan inolvidable. Con el fotomatón para bodas en Galicia de MG Eventos, tus invitados tendrán un espacio para divertirse, reír y guardar recuerdos especiales. Te asesoramos sin compromiso, nos adaptamos a tu estilo y cuidamos cada detalle para que no tengas que preocuparte de nada."
        ctaText="Hablemos"
        ctaHref="/contacto"
      />

      <Section variant="light">
        <Badge className="mb-4">Tu gran día</Badge>
        <Heading as="h2" className="text-neutral-900">
          Fotomatón para bodas
        </Heading>
        <p className="text-neutral-600 font-body text-lg leading-relaxed mt-4 max-w-4xl">
          Cada boda es diferente, y por eso ofrecemos un espejo fotomatón que se
          adapta al estilo de tu celebración. Desde ambientes elegantes y
          románticos hasta fiestas modernas y desenfadadas, el fotomatón puede
          personalizarse para encajar con la decoración y la temática del evento.
          También contamos con servicio de{" "}
          <Link
            href="/dj-para-bodas-en-galicia"
            className="text-secondary hover:underline font-semibold"
          >
            DJ para bodas en Galicia
          </Link>
          .
        </p>
        <p className="text-neutral-600 font-body text-lg leading-relaxed mt-4 max-w-4xl">
          Es mucho más que una máquina de fotos: es un rincón que aporta
          espontaneidad, risas y recuerdos compartidos en uno de los días más
          importantes de tu vida. En MG Eventos lo hemos visto una y otra vez:
          mientras la música suena y la fiesta avanza, el fotomatón se convierte
          en el lugar donde todos quieren estar, desde los más jóvenes hasta los
          más mayores.
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
