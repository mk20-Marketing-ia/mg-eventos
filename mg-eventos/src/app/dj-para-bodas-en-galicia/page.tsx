import { Metadata } from "next";
import { Heart, CalendarCheck, Palette, Check } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValueProps } from "@/components/sections/ValueProps";
import { ServiceDetailBlock } from "@/components/sections/ServiceDetailBlock";
import { BudgetCTA } from "@/components/sections/BudgetCTA";
import { WhyMGSection } from "@/components/sections/WhyMGSection";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { SchemaService } from "@/components/seo/SchemaService";
import { SchemaBreadcrumb } from "@/components/seo/SchemaBreadcrumb";

export const metadata: Metadata = createMetadata({
  title: "DJ para bodas en Galicia — MG Eventos",
  description:
    "DJ para bodas en Galicia con música personalizada y asesoramiento. +300 bodas animadas y +10 años de experiencia. Presupuesto sin compromiso.",
  slug: "/dj-para-bodas-en-galicia",
  ogImage: "/og/dj-bodas.jpg",
});

export default function DJBodasPage() {
  return (
    <>
      <SchemaService
        serviceName="DJ para bodas en Galicia"
        description="DJ para bodas en Galicia con música personalizada y asesoramiento. +300 bodas animadas y +10 años de experiencia."
        slug="/dj-para-bodas-en-galicia"
      />
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: "DJ para bodas en Galicia", href: "/dj-para-bodas-en-galicia" },
        ]}
      />

      <HeroSection
        preTitle="¡Contrata un dj para tu boda!"
        title="DJ para bodas en Galicia"
        paragraph="Elegir el DJ para bodas en Galicia es una de las decisiones más importantes para el gran día. La música no solo acompaña, sino que marca la emoción de cada momento. En MG Eventos contamos con un equipo de confianza, con años de experiencia y un trato cercano, para que disfrutes de tu boda sin preocuparte de nada."
        ctaPrimary={{ text: "¡Contáctanos!", href: "/contacto" }}
        breadcrumbs={[
          { name: "Inicio", href: "/" },
          { name: "DJ para bodas en Galicia", href: "/dj-para-bodas-en-galicia" },
        ]}
      />

      <ValueProps
        items={[
          {
            icon: Heart,
            title: "Música personalizada",
            description:
              "Un buen DJ boda sabe que no es lo mismo ambientar una ceremonia íntima que animar la fiesta final. En MG Eventos creamos una selección musical pensada para cada instante",
          },
          {
            icon: CalendarCheck,
            title: "Asesoramiento y planificación",
            description:
              "Te acompañamos antes y durante el evento, resolviendo dudas y ajustando cada detalle para que el resultado sea perfecto.",
          },
          {
            icon: Palette,
            title: "Entendemos tu estilo",
            description:
              "Nuestros djs para bodas en Galicia preparan la música contigo, escuchando tus gustos y adaptándose a lo que quieras transmitir en tu día.",
          },
        ]}
      />

      <ServiceDetailBlock
        title="¿Qué incluye nuestro servicio de DJ para bodas?"
        paragraphs={[
          "Cuando reservas un DJ con MG Eventos, no solo contratas a alguien para poner música, sino que disfrutas de un servicio completo y personalizado que acompaña todo tu día. Estas son algunas de las cualidades que siempre incluimos:",
        ]}
        listItems={[
          "Sonido profesional",
          "Iluminación y ambiente",
          "Asesoramiento cercano",
        ]}
        cta={{ text: "Pregúntanos", href: "/contacto" }}
        stat={{ value: 10, prefix: "+", label: "Años de experiencia" }}
      />

      <BudgetCTA
        title="Solicita presupuesto para tu DJ de boda en Galicia"
        description="Tu boda merece la mejor música y un ambiente único. En MG Eventos ponemos a tu disposición un DJ para bodas en Galicia con experiencia, cercanía y un servicio completo para que no falte nada en tu gran día. Te asesoramos sin compromiso, te ayudamos a organizar cada detalle y nos adaptamos a tu estilo para que tu celebración sea recordada por todos."
        ctaText="Hablemos"
        ctaHref="/contacto"
      />

      <Section variant="light">
        <p className="text-neutral-500 font-heading font-semibold text-sm uppercase tracking-wider mb-2">
          Otros servicios
        </p>
        <Heading as="h2" className="text-neutral-900">
          Fotomatón para bodas
        </Heading>
        <p className="text-neutral-600 font-body text-lg leading-relaxed mt-4 max-w-4xl">
          Además del servicio de dj, puede que queráis hacer algo especial para
          vuestro día.
        </p>
        <p className="text-neutral-600 font-body text-lg leading-relaxed mt-4 max-w-4xl">
          Para que tus invitados se lleven un recuerdo divertido, ofrecemos el
          servicio de fotomatón con atrezzo y fotos instantáneas.
        </p>
        <ul className="mt-6 space-y-3">
          {["Risas aseguradas", "Inmortaliza el momento", "Anima la fiesta"].map(
            (item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-neutral-700 font-body"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-secondary" />
                </span>
                {item}
              </li>
            )
          )}
        </ul>
        <div className="mt-8">
          <Button variant="secondary" href="/fotomaton-en-galicia">
            Fotomatón para boda
          </Button>
        </div>
      </Section>

      <WhyMGSection
        subtitle="Tu DJ para tu día especial"
        description="Nuestro objetivo es sencillo: que tengas un DJ de boda que entienda tu estilo, que se adapte al ambiente que deseas crear y que haga que tú y tus invitados viváis una celebración inolvidable."
        stats={[
          { value: 10, prefix: "+", label: "Años de experiencia" },
          { value: 2000, prefix: "+", label: "Clientes satisfechos" },
          { value: 300, prefix: "+", label: "Bodas animadas" },
        ]}
      />
    </>
  );
}
