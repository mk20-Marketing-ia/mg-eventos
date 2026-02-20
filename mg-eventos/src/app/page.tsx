import { Metadata } from "next";
import { Sparkles, Heart, Music } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { WHATSAPP_URL } from "@/lib/constants";
import dynamic from "next/dynamic";
import { CollaboratorsSection } from "@/components/sections/CollaboratorsSection";

const ScrollExpandHero = dynamic(
  () => import("@/components/ui/scroll-expansion-hero"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  }
);
import { ValueProps } from "@/components/sections/ValueProps";
import { ServiceDetailBlock } from "@/components/sections/ServiceDetailBlock";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CallToAction } from "@/components/ui/call-to-action";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SchemaOrganization } from "@/components/seo/SchemaOrganization";
import { SchemaWebSite } from "@/components/seo/SchemaWebSite";

export const metadata: Metadata = createMetadata({
  title: "MG Eventos — Música para eventos en Galicia",
  description:
    "Animadores de fiesta en Galicia con +10 años de experiencia. DJ, discomóvil, fotomatón, pantallas LED y escenario móvil para bodas, fiestas y eventos.",
  slug: "",
  ogImage: "/og/home.jpg",
});

export default function HomePage() {
  return (
    <>
      <SchemaOrganization />
      <SchemaWebSite />

      {/* Hero — Video expansion scroll */}
      <ScrollExpandHero
        mediaType="video"
        mediaSrc="/images/mg%20eventos%20video%20home.mp4"
        posterSrc="/images/mg%20eventos%20imagen%20home.jpg"
        bgImageSrc="/images/mg%20eventos%20imagen%20home.jpg"
        title="Hacemos que nadie se quede sentado"
        tagline="MG Eventos · Galicia"
        scrollToExpand="Desliza para descubrir"
        textBlend
      >
        {/* Contenido post-expansión */}
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-heading font-semibold tracking-widest uppercase mb-6">
            DJ · Fotomatón · LED · Escenario
          </span>
          <p className="text-neutral-600 font-body text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Somos animadores de fiesta en Galicia con +10 años creando momentos únicos.
            DJ, discomóvil, fotomatón, pantallas LED y escenario móvil para bodas, fiestas y eventos.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contacto"
              className="px-8 py-3.5 rounded-xl text-base font-heading font-semibold bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/25 transition-all"
            >
              Pedir presupuesto
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl text-base font-heading font-medium border-2 border-secondary/30 text-secondary hover:bg-secondary/5 transition-all"
            >
              Háblanos por WhatsApp
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-neutral-400 font-body">
            {["+10 años de experiencia", "Bodas, fiestas y empresas", "Galicia y norte de Portugal"].map((d) => (
              <span key={d} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-secondary/50" />
                {d}
              </span>
            ))}
          </div>
        </div>
      </ScrollExpandHero>

      {/* Colaboradores */}
      <CollaboratorsSection />

      {/* Tres pilares */}
      <ValueProps
        items={[
          {
            icon: Sparkles,
            title: "Iluminación profesional",
            description:
              "Transforma cualquier espacio en el escenario perfecto. Iluminación y efectos dinámicos para la pista de baile",
          },
          {
            icon: Heart,
            title: "Evento inolvidable",
            description:
              "Creamos experiencias que dejan huella en la memoria de tus invitados, lo damos todo para que disfrutéis desde el principio hasta el último baile.",
          },
          {
            icon: Music,
            title: "Animación de eventos",
            description:
              "Sabemos conectar con el público, mantener el ritmo y llenar de vida cada celebración, desde bodas hasta verbenas y eventos corporativos",
          },
        ]}
      />

      {/* Sobre MG Eventos */}
      <ServiceDetailBlock
        title="Sobre MG Eventos"
        paragraphs={[
          "Cada evento tiene su propio carácter, y por eso no existe una fórmula única para animar un evento. Lo que sí hay es experiencia, intuición y muchas ganas de pasarlo bien. En MG Eventos sabemos que una buena fiesta no se improvisa: se construye con energía, ritmo y un toque personal que hace que todos se sientan parte de la fiesta.",
        ]}
        listItems={[
          "Fiestas privadas",
          "Bodas",
          "Verbenas",
          "Cumpleaños",
          "Y el evento que tú quieras...",
        ]}
        cta={{ text: "¡Háblanos por WhatsApp!", href: WHATSAPP_URL }}
        stat={{ value: 10, prefix: "+", label: "Años de experiencia" }}
        variant="white"
      />

      {/* Servicios */}
      <ServicesGrid
        title="Servicios de MG Eventos"
        subtitle="Contrata música para tu evento"
        intro="Nuestro trabajo no es solo poner música, sino hacer que todo el evento funcione como un conjunto."
        services={[
          {
            title: "Servicio de DJ",
            description:
              "Creamos la mejor atmósfera para eventos con música adaptada a cada momento. Tú eliges el estilo, nosotros hacemos que suene perfecto.",
            href: "/dj-para-eventos-en-galicia",
            imageAlt: "Servicio de DJ para eventos en Galicia",
          },
          {
            title: "Disco móvil",
            description:
              "Nuestra discomóvil lleva la fiesta donde tú quieras. Montaje rápido, sonido de alta calidad e iluminación espectacular para disfrutar al máximo",
            href: "/discotecas-moviles-en-galicia",
            imageAlt: "Discoteca móvil para eventos en Galicia",
          },
          {
            title: "Camión escenario",
            description:
              "Perfecto para verbenas, conciertos o ferias, incluye estructura, sonido e iluminación profesional. Rápido de montar, versátil y con gran impacto visual.",
            href: "/escenario-movil-para-eventos",
            imageAlt: "Camión escenario para eventos en Galicia",
          },
          {
            title: "Pantallas LED",
            description:
              "Desde conciertos hasta conferencias o bodas, adaptamos el tamaño y la configuración a cada evento. Una experiencia visual inolvidable.",
            href: "/pantallas-led-para-eventos-en-galicia",
            imageAlt: "Pantallas LED para eventos en Galicia",
          },
          {
            title: "Fotomatón",
            description:
              "Divertido, moderno y totalmente personalizable, ideal para bodas, cumpleaños y fiestas. Ríe, posa y guarda un recuerdo único de tu celebración.",
            href: "/fotomaton-en-galicia",
            imageAlt: "Fotomatón para eventos en Galicia",
          },
        ]}
      />

      {/* 1 — CTA WhatsApp */}
      <CallToAction
        layout="card"
        dark
        badge="Contactar ahora"
        title="¡Mándanos un WhatsApp!"
        description="Háblanos por WhatsApp y te asesoraremos para encontrar la animación perfecta para tu evento"
        primaryButton={{
          text: "Háblanos por WhatsApp",
          href: WHATSAPP_URL,
          icon: "whatsapp",
          variant: "whatsapp",
          external: true,
        }}
        secondaryButton={{
          text: "Ver nuestros servicios",
          href: "#servicios",
          icon: "arrow",
          variant: "outline",
        }}
      />

      {/* 2 — Animador de bodas + Stats */}
      <Section variant="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Heading as="h2" className="text-neutral-900">
              MG Eventos es tu Animador de bodas en Galicia
            </Heading>
            <p className="text-neutral-600 font-body text-lg leading-relaxed mt-6">
              Las bodas son momentos únicos, y tener un animador profesional
              marca la diferencia entre una fiesta bonita y una que se recuerda
              toda la vida. Nuestro equipo sabe cuándo subir el ritmo, cuándo
              dejar espacio a la emoción y cómo conseguir que todos, desde los
              novios hasta los abuelos, se sientan parte del ambiente
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl text-neutral-900 mb-2">
              Nuestra experiencia
            </h3>
            <p className="text-neutral-500 font-body mb-8">
              +10 años animando eventos. En MG Eventos llevamos muchos años
              ayudando a animar la fiesta
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { value: 1600, prefix: "+", label: "Eventos y fiestas" },
                { value: 300, prefix: "+", label: "Bodas" },
                { value: 2000, prefix: "+", label: "Clientes satisfechos" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading font-extrabold text-4xl md:text-5xl text-accent">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                    />
                  </p>
                  <p className="font-body text-sm uppercase tracking-wider text-neutral-500 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 3 — CTA Contacto */}
      <CallToAction
        layout="card"
        badge="MG Eventos"
        title="Anima la fiesta con MG Eventos"
        description="Habla con nosotros y te asesoraremos a la hora de elegir lo que puede animar mejor tu evento"
        primaryButton={{
          text: "¡Contáctanos!",
          href: "/contacto",
          icon: "arrow",
          variant: "primary",
        }}
        secondaryButton={{
          text: "Llamar ahora",
          href: "tel:+34600000000",
          icon: "phone",
          variant: "outline",
        }}
      />
    </>
  );
}
