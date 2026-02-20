import { Metadata } from "next";
import Link from "next/link";
import { Speaker, Tent, TreePine, Music2, Layers, Zap } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { WHATSAPP_URL } from "@/lib/constants";
import { ValueProps } from "@/components/sections/ValueProps";
import { ServiceDetailBlock } from "@/components/sections/ServiceDetailBlock";
import { WhyMGSection } from "@/components/sections/WhyMGSection";
import { CallToAction } from "@/components/ui/call-to-action";
import { SchemaService } from "@/components/seo/SchemaService";
import { SchemaBreadcrumb } from "@/components/seo/SchemaBreadcrumb";
import dynamic from "next/dynamic";
import type { ServiceCardItem } from "@/components/ui/color-change-card";

const SyntheticHero = dynamic(() => import("@/components/ui/synthetic-hero"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[72vh] bg-primary flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const ColorChangeCards = dynamic(
  () => import("@/components/ui/color-change-card"),
  { ssr: false }
);

export const metadata: Metadata = createMetadata({
  title: "Discotecas móviles en Galicia — MG Eventos",
  description:
    "Discomóvil en Galicia para bodas, verbenas y fiestas. Sonido, iluminación y animación profesional. Montaje versátil. +10 años de experiencia.",
  slug: "/discotecas-moviles-en-galicia",
  ogImage: "/og/discomovil.jpg",
});

const serviciosRelacionados: ServiceCardItem[] = [
  {
    heading: "DJ para eventos",
    description: "Profesionalidad y adaptación para cualquier tipo de evento o celebración.",
    href: "/dj-para-eventos-en-galicia",
    imgSrc: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    heading: "Escenario móvil",
    description: "Estructura completa para verbenas y conciertos al aire libre en Galicia.",
    href: "/escenario-movil-para-eventos",
    imgSrc: "https://images.pexels.com/photos/1647918/pexels-photo-1647918.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    heading: "Fotomatón",
    description: "Diversión y recuerdos para todos tus invitados. Atrezzo incluido.",
    href: "/fotomaton-en-galicia",
    imgSrc: "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

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

      {/* Hero 3D compact */}
      <SyntheticHero
        compact
        title="Discotecas móviles en Galicia"
        description="La experiencia de una sala de fiestas en cualquier lugar: jardines, plazas, fincas, salones. Sonido, iluminación y animación profesional donde tú lo necesites."
        badgeText="Discomóvil"
        badgeLabel="MG Eventos"
        ctaButtons={[
          { text: "¡Contáctanos!", href: "/contacto", primary: true },
          { text: "Háblanos por WhatsApp", href: WHATSAPP_URL },
        ]}
        microDetails={[
          "+10 años de experiencia",
          "Interior y exterior",
          "Montaje completo incluido",
        ]}
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
              "En plazas, campos de fiesta o jardines, lo importante es que la música llegue a todos y que la iluminación cree un ambiente festivo de principio a fin.",
          },
          {
            icon: Tent,
            title: "Ideal para verbenas y fiestas",
            description:
              "No hay fiesta de pueblo sin música, y ahí es donde una discoteca móvil se convierte en protagonista. Hemos participado en verbenas y fiestas patronales en toda Galicia.",
          },
          {
            icon: TreePine,
            title: "Perfecta para el aire libre",
            description:
              "Las fiestas al aire libre tienen un encanto propio, y una discoteca al aire libre en Galicia consigue aprovecharlo al máximo con potencia y calidad.",
          },
        ]}
      />

      <ServiceDetailBlock
        tag="Días especiales"
        title="Discomóvil para bodas"
        paragraphs={[
          "La música es uno de los pilares de cualquier boda. Una discomóvil para bodas en Galicia permite que la celebración tenga todo lo necesario: sonido de calidad, iluminación que transforma el ambiente y un montaje que se adapta al espacio, ya sea en un pazo, una finca o un salón de banquetes.",
          "Nuestro equipo se encarga de todo el montaje y la animación musical, y si quieres una experiencia aún más completa puedes combinarla con nuestro DJ para bodas para unir potencia técnica con personalización.",
        ]}
        listItems={[
          "Bodas al aire libre en pazos y fincas",
          "Eventos grandes con mucho público",
          "Fiesta sin límite de tiempo ni energía",
          "Compatible con DJ profesional",
        ]}
        cta={{ text: "¡Contáctanos!", href: "/contacto" }}
        stats={[
          { value: 10, prefix: "+", label: "Años de experiencia" },
          { value: 1600, prefix: "+", label: "Eventos realizados" },
          { value: 2000, prefix: "+", label: "Clientes satisfechos" },
        ]}
      />

      {/* CTA presupuesto — tarjeta oscura */}
      <CallToAction
        layout="card"
        dark
        badge="Presupuesto sin compromiso"
        title="Solicita presupuesto para disco móvil para fiestas"
        description="¿Quieres asegurarte de que tu próxima celebración sea un éxito? En MG Eventos ponemos a tu disposición una discomóvil en Galicia con la experiencia y cercanía que necesitas. Te asesoramos sin compromiso y elegimos el montaje perfecto para tu fiesta."
        primaryButton={{ text: "Hablemos", href: "/contacto", icon: "arrow" }}
        secondaryButton={{ text: "WhatsApp directo", href: WHATSAPP_URL, icon: "whatsapp", variant: "whatsapp", external: true }}
      />

      {/* Sección enriquecida: Flexible para cada tipo de evento */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#1a1740] to-secondary py-20 md:py-28">
        {/* Decoraciones de fondo */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-secondary/10 -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/10 translate-x-1/4 translate-y-1/4 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Columna izquierda — texto */}
            <div>
              <span className="inline-block text-accent font-heading font-semibold text-xs uppercase tracking-[0.2em] mb-4">
                Para cualquier fiesta
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
                Servicio flexible para cada tipo de evento
              </h2>
              <p className="text-white/70 font-body text-lg leading-relaxed mb-4">
                Cada celebración es distinta. Nuestra discomóvil se adapta a todas las situaciones, con un montaje más sencillo para eventos íntimos o una puesta en escena espectacular para grandes fiestas.
              </p>
              <p className="text-white/70 font-body text-lg leading-relaxed">
                Puedes elegir entre diferentes configuraciones: sonido, luces,{" "}
                <Link
                  href="/pantallas-led-para-eventos-en-galicia"
                  className="text-accent font-semibold hover:text-accent/80 underline underline-offset-2 transition-colors"
                >
                  pantallas LED
                </Link>{" "}
                e incluso un{" "}
                <Link
                  href="/escenario-movil-para-eventos"
                  className="text-accent font-semibold hover:text-accent/80 underline underline-offset-2 transition-colors"
                >
                  camión escenario móvil
                </Link>
                , todo pensado para que tu evento tenga justo lo que necesita.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {[
                  "Montaje versátil para cualquier espacio",
                  "Iluminación que crea el ambiente perfecto",
                  "Potencia y calidad de sonido profesional",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                      <Zap className="w-2.5 h-2.5 text-accent" />
                    </span>
                    <span className="text-white/80 font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha — tarjetas de formatos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Fiestas íntimas */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <Music2 className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">
                    Fiestas íntimas
                  </h3>
                  <p className="text-white/50 text-sm font-body leading-snug">
                    Montaje compacto y cuidado para grupos pequeños. La misma calidad, menor escala.
                  </p>
                </div>
              </div>

              {/* Grandes eventos */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                    <Layers className="w-5 h-5 text-violet-300" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">
                    Grandes eventos
                  </h3>
                  <p className="text-white/50 text-sm font-body leading-snug">
                    Puesta en escena espectacular con sonido potente e iluminación profesional.
                  </p>
                </div>
              </div>

              {/* Combo Discomóvil + Escenario — card ancho completo */}
              <Link
                href="/escenario-movil-para-eventos"
                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 sm:col-span-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Speaker className="w-6 h-6 text-white/70" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base mb-0.5">
                      Combo Discomóvil + Escenario móvil
                    </h3>
                    <p className="text-white/50 text-sm font-body">
                      La combinación más completa para verbenas y conciertos. Escenario, sonido potente, iluminación y DJ en un solo servicio.
                    </p>
                  </div>
                  <span className="ml-auto flex-shrink-0 text-xs font-heading font-semibold text-white/50 group-hover:text-white/80 group-hover:translate-x-1 transition-all">
                    Ver escenario →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceDetailBlock
        tag="Beneficios"
        title="¿Por qué alquilar una discomóvil?"
        paragraphs={[
          "Elegir una discomóvil para tu fiesta o boda no es solo una cuestión de comodidad, es una forma de asegurar que el evento salga redondo. Estos son algunos de los beneficios más importantes:",
        ]}
        listItems={[
          "Montaje versátil en cualquier espacio",
          "Iluminación que crea el ambiente perfecto",
          "Potencia y calidad de sonido profesional",
          "Encaja con cualquier tipo de evento",
          "Equipo técnico incluido en el servicio",
        ]}
        cta={{ text: "¡Pregúntanos!", href: "/contacto" }}
        variant="white"
      />

      {/* Servicios relacionados — dark card */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-br from-primary via-primary-light to-secondary p-8 md:p-14 shadow-xl shadow-primary/20">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-heading font-semibold tracking-widest uppercase backdrop-blur-sm mb-4">
                MG Eventos
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
                Completa tu evento con más servicios
              </h2>
              <p className="text-white/60 font-body text-lg mt-3 max-w-xl mx-auto">
                Combina la discomóvil con DJ, escenario o fotomatón para crear la experiencia perfecta
              </p>
            </div>
            <ColorChangeCards services={serviciosRelacionados} />
          </div>
        </div>
      </section>

      <WhyMGSection
        subtitle="Discomóvil con experiencia y cercanía"
        description="En MG Eventos ofrecemos un servicio de discomóvil en Galicia pensado para que disfrutes sin preocupaciones. Nuestro equipo no solo lleva la música, también aporta la energía y la confianza de un profesional que sabe adaptarse a cada tipo de público y celebración."
        stats={[
          { value: 10, prefix: "+", label: "Años de experiencia" },
          { value: 2000, prefix: "+", label: "Clientes satisfechos" },
          { value: 1600, prefix: "+", label: "Eventos y fiestas" },
        ]}
      />

      {/* CTA final */}
      <CallToAction
        layout="card"
        badge="¡Monta tu fiesta!"
        title="¿Listo para montar la discomóvil?"
        description="Cuéntanos dónde, cuándo y para cuánta gente. Te preparamos un presupuesto a medida y nos encargamos de que todo funcione perfecto desde el primer minuto."
        primaryButton={{ text: "Solicitar presupuesto", href: "/contacto", icon: "arrow" }}
        secondaryButton={{ text: "Háblanos por WhatsApp", href: WHATSAPP_URL, icon: "whatsapp", variant: "whatsapp", external: true }}
      />
    </>
  );
}
