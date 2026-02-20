import { Metadata } from "next";
import Link from "next/link";
import { Monitor, Sun, Wrench, Check } from "lucide-react";
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
  title: "Pantallas LED para eventos en Galicia — MG Eventos",
  description:
    "Alquiler de pantallas LED para eventos en Galicia. Interior y exterior, montaje profesional y asistencia técnica. Bodas, conferencias, ferias. Presupuesto gratis.",
  slug: "/pantallas-led-para-eventos-en-galicia",
  ogImage: "/og/pantallas-led.jpg",
});

export default function PantallasLEDPage() {
  return (
    <>
      <SchemaService
        serviceName="Pantallas LED para eventos en Galicia"
        description="Alquiler de pantallas LED para eventos en Galicia. Interior y exterior, montaje profesional y asistencia técnica."
        slug="/pantallas-led-para-eventos-en-galicia"
      />
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", href: "/" },
          {
            name: "Pantallas LED para eventos en Galicia",
            href: "/pantallas-led-para-eventos-en-galicia",
          },
        ]}
      />

      <HeroSection
        preTitle="¿Buscas las mejores pantallas para tu presentación?"
        title="Pantallas LED para eventos en Galicia"
        paragraph="En muchos eventos, lo visual marca la diferencia. Nuestras pantallas LED para eventos en Galicia permiten que todo se vea con la mejor calidad, ya sea una boda, una conferencia, una feria o una fiesta popular. Lo interesante es que no hay un único formato: trabajamos tanto con televisores de gran tamaño, perfectos para presentaciones o proyecciones en interiores, como con pantallas LED modulares, que se montan pieza a pieza y se adaptan al espacio. Esto hace que el servicio encaje igual en una discomóvil, en un concierto al aire libre o en un congreso empresarial en Santiago."
        ctaPrimary={{ text: "¡Contáctanos!", href: "/contacto" }}
        breadcrumbs={[
          { name: "Inicio", href: "/" },
          {
            name: "Pantallas LED para eventos en Galicia",
            href: "/pantallas-led-para-eventos-en-galicia",
          },
        ]}
      />

      <ValueProps
        items={[
          {
            icon: Monitor,
            title: "La mejor solución visual",
            description:
              "En una fiesta o en una boda, las pantallas LED aportan algo más que imagen: crean ambiente. Pueden proyectar vídeos, animaciones, recuerdos de los protagonistas o mensajes personalizados que refuercen el momento.",
          },
          {
            icon: Sun,
            title: "Pantallas LED al aire libre",
            description:
              "Las pantallas LED modulares funcionan igual de bien en exteriores que en interiores. En una plaza de pueblo o en un campo de fiesta, su potencia asegura que la imagen se vea nítida incluso de día.",
          },
          {
            icon: Wrench,
            title: "Montaje y asistencia",
            description:
              "Organizar un evento con pantallas puede sonar complicado, pero en realidad es todo lo contrario. Nuestro servicio incluye montaje completo y asistencia técnica durante todo el evento, para que no tengas que preocuparte de nada.",
          },
        ]}
      />

      <ServiceDetailBlock
        tag="Decoración digital"
        title="Alquiler de pantallas LED para eventos"
        paragraphs={[
          "El alquiler de pantallas LED para eventos en Galicia es cada vez más habitual porque permite que cualquier celebración gane en profesionalidad y en impacto visual. Ya no hablamos solo de proyectar imágenes, sino de crear una experiencia completa en la que el público se sienta parte del evento.",
          "En MG Eventos lo hemos comprobado en todo tipo de celebraciones: desde conferencias en Santiago donde los ponentes se ven con claridad hasta conciertos al aire libre en los que la pantalla se convierte en el foco de atención. Lo especial es que las pantallas no viajan solas, sino que se integran con otros servicios como el sonido, la iluminación o incluso nuestro DJ para eventos en Galicia, creando un conjunto perfecto para que la fiesta tenga ritmo e imagen a la vez.",
        ]}
        listItems={[
          "Sonido profesional",
          "Iluminación y ambiente",
          "Asesoramiento cercano",
        ]}
        cta={{ text: "¡Contáctanos!", href: "/contacto" }}
        stat={{ value: 10, prefix: "+", label: "Años de experiencia" }}
      >
        <p className="text-neutral-500 font-body text-sm mt-2">
          También ofrecemos{" "}
          <Link
            href="/dj-para-eventos-en-galicia"
            className="text-secondary hover:underline font-semibold"
          >
            DJ para eventos en Galicia
          </Link>
        </p>
      </ServiceDetailBlock>

      <BudgetCTA
        title="Solicita presupuesto para tu montaje de pantallas LED"
        description="Tu evento merece una imagen a la altura. En MG Eventos te ofrecemos pantallas LED en Galicia con montaje profesional, asistencia técnica y opciones totalmente adaptadas a tus necesidades. Te asesoramos sin compromiso, te ayudamos a elegir el formato ideal y nos encargamos de que todo se vea perfecto desde el primer minuto."
        ctaText="¡Contáctanos!"
        ctaHref="/contacto"
      />

      <Section variant="light">
        <Badge className="mb-4">Todo tipo de eventos</Badge>
        <Heading as="h2" className="text-neutral-900">
          Pantallas LED para el aire libre o interior
        </Heading>
        <p className="text-neutral-600 font-body text-lg leading-relaxed mt-4 max-w-4xl">
          Las pantallas LED modulares funcionan igual de bien en exteriores que
          en interiores. En una plaza de pueblo o en un campo de fiesta, su
          potencia asegura que la imagen se vea nítida incluso de día. Y en
          espacios cerrados, como auditorios o fincas de boda, los televisores o
          pantallas de menor tamaño ofrecen la cercanía perfecta para seguir
          cada detalle.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Visibilidad para todos los asistentes",
            "Presentaciones espectaculares",
            "Elementos visuales en fiestas",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-neutral-700 font-body"
            >
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-secondary" />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-neutral-500 font-body mt-6">
          Descubre también nuestro{" "}
          <Link
            href="/fotomaton-en-galicia"
            className="text-secondary hover:underline font-semibold"
          >
            fotomatón para boda
          </Link>{" "}
          y nuestra{" "}
          <Link
            href="/"
            className="text-secondary hover:underline font-semibold"
          >
            música para eventos en Galicia
          </Link>
        </p>
      </Section>

      <WhyMGSection
        title="Nuestro servicio de DJ"
        subtitle="Otros servicios"
        description="Nuestro objetivo es sencillo: que tengas un DJ en Galicia que entienda tu estilo, que se adapte al ambiente que deseas crear y que haga que tú y tus invitados viváis una celebración inolvidable."
        stats={[
          { value: 10, prefix: "+", label: "Años de experiencia" },
          { value: 2000, prefix: "+", label: "Clientes satisfechos" },
          { value: 300, prefix: "+", label: "Bodas animadas" },
        ]}
      />
    </>
  );
}
