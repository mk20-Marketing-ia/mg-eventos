import { Metadata } from "next";
import Link from "next/link";
import { Speaker, Tent, TreePine, Music2, Layers, Zap, ArrowRight, MessageCircle } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { WHATSAPP_URL } from "@/lib/constants";
import { ValueProps } from "@/components/sections/ValueProps";
import { CallToAction } from "@/components/ui/call-to-action";
import { SchemaService } from "@/components/seo/SchemaService";
import { SchemaBreadcrumb } from "@/components/seo/SchemaBreadcrumb";
import { ServiceDetailMarquee } from "@/components/ui/service-detail-marquee";
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
  { heading: "DJ para eventos", description: "", href: "/dj-para-eventos-en-galicia", imgSrc: "/mg%20eventos%20en%20galicia%20%20servicios/mg%20eventos%20en%20galicia%20%20servicios%20de%20dj.jpg" },
  { heading: "Escenario móvil", description: "", href: "/escenario-movil-para-eventos", imgSrc: "/mg%20eventos%20en%20galicia%20%20servicios/mg%20eventos%20en%20galicia%20%20servicios%20camion%20esenario.jpg" },
  { heading: "Fotomatón", description: "", href: "/fotomaton-en-galicia", imgSrc: "/mg%20eventos%20en%20galicia%20%20servicios/mg%20eventos%20en%20galicia%20%20servicios%20fotomation.jpg" },
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
        textWhite
        primaryCtaAccent
        title="Discotecas móviles en Galicia"
        description="La experiencia de una sala de fiestas en cualquier lugar: jardines, plazas, fincas, salones. Sonido, iluminación y animación profesional donde tú lo necesites."
        badgeText="Discomóvil"
        badgeLabel="MG Eventos"
        ctaButtons={[
          { text: "Contáctanos", href: "/contacto", primary: true },
          { text: "Háblanos por WhatsApp", href: WHATSAPP_URL },
        ]}
        microDetails={[
          "+10 años de experiencia",
          "Interior y exterior",
          "Montaje completo incluido",
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

      <ServiceDetailMarquee
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
        marqueeImages={[
          "/images/Discotecas%20m%C3%B3viles%20en%20Galicia/Discom%C3%B3vil%20para%20bodas.jpg",
          "/images/Discotecas%20m%C3%B3viles%20en%20Galicia/Discotecas%20m%C3%B3viles%20en%20Galicia.jpg",
          "/images/Discotecas%20m%C3%B3viles%20en%20Galicia/Discotecas%20m%C3%B3viles%20en%20coru%C3%B1a.jpg",
          "/images/Discotecas%20m%C3%B3viles%20en%20Galicia/Discotecas%20m%C3%B3viles%20en%20santiago.jpg",
          "/images/Discotecas%20m%C3%B3viles%20en%20Galicia/Discom%C3%B3vil%20con%20experiencia%20y%20cercan%C3%ADa.jpg",
          "/images/Discotecas%20m%C3%B3viles%20en%20Galicia/Solicita%20presupuesto%20para%20disco%20m%C3%B3vil%20para%20fiestas.jpg",
          "/images/Discotecas%20m%C3%B3viles%20en%20Galicia/mg%20eventos%20Discotecas%20m%C3%B3viles%20en%20galicia.jpg",
        ]}
      />

      {/* CTA presupuesto — tarjeta oscura */}
      <CallToAction
        layout="card"
        dark
        descriptionWhite
        badge="Presupuesto sin compromiso"
        title="Solicita presupuesto para disco móvil para fiestas"
        description="¿Quieres asegurarte de que tu próxima celebración sea un éxito? En MG Eventos ponemos a tu disposición una discomóvil en Galicia con la experiencia y cercanía que necesitas. Te asesoramos sin compromiso y elegimos el montaje perfecto para tu fiesta."
        primaryButton={{ text: "Hablemos", href: "/contacto", icon: "arrow", variant: "accent" }}
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
            <div className="text-center md:text-left">
              <span className="inline-block text-accent font-heading font-semibold text-xs uppercase tracking-[0.2em] mb-4">
                Para cualquier fiesta
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight mb-6 text-center">
                Servicio flexible para cada tipo de evento
              </h2>
              <p className="text-white font-body text-lg leading-relaxed mb-4 text-center text-justify">
                Cada celebración es distinta. Nuestra discomóvil se adapta a todas las situaciones, con un montaje más sencillo para eventos íntimos o una puesta en escena espectacular para grandes fiestas.
              </p>
              <p className="text-white font-body text-lg leading-relaxed text-center text-justify">
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

              <div className="mt-8 flex flex-col gap-3 text-left">
                {[
                  "Montaje versátil para cualquier espacio",
                  "Iluminación que crea el ambiente perfecto",
                  "Potencia y calidad de sonido profesional",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent/25 border border-accent/40 flex items-center justify-center">
                      <Zap className="w-2.5 h-2.5 text-accent" />
                    </span>
                    <span className="text-white font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha — tarjetas de formatos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Fiestas íntimas */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/12 border border-white/25 p-6 hover:bg-white/18 hover:border-white/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-accent/30 border border-accent/40 flex items-center justify-center mb-4">
                    <Music2 className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">
                    Fiestas íntimas
                  </h3>
                  <p className="text-white/80 text-sm font-body leading-snug">
                    Montaje compacto y cuidado para grupos pequeños. La misma calidad, menor escala.
                  </p>
                </div>
              </div>

              {/* Grandes eventos */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/12 border border-white/25 p-6 hover:bg-white/18 hover:border-white/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-secondary/35 border border-secondary/40 flex items-center justify-center mb-4">
                    <Layers className="w-5 h-5 text-violet-200" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">
                    Grandes eventos
                  </h3>
                  <p className="text-white/80 text-sm font-body leading-snug">
                    Puesta en escena espectacular con sonido potente e iluminación profesional.
                  </p>
                </div>
              </div>

              {/* Combo Discomóvil + Escenario — card ancho completo, centrado en responsive */}
              <Link
                href="/escenario-movil-para-eventos"
                className="group relative overflow-hidden rounded-2xl bg-white/12 border border-white/25 p-6 hover:bg-white/18 hover:border-white/40 transition-all duration-300 sm:col-span-2 flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col items-center gap-3 sm:flex-row sm:gap-5 w-full sm:w-auto">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center">
                    <Speaker className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base mb-0.5">
                      Combo Discomóvil + Escenario móvil
                    </h3>
                    <p className="text-white/80 text-sm font-body">
                      La combinación más completa para verbenas y conciertos. Escenario, sonido potente, iluminación y DJ en un solo servicio.
                    </p>
                  </div>
                  <span className="sm:ml-auto flex-shrink-0 text-xs font-heading font-semibold text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all">
                    Ver escenario →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

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

      <section className="bg-white py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl min-h-[320px]">
            <img
              src="/images/mg%20eventos%20imagen%20home.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
            {/* Halos decorativos */}
            <div className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />
            <div className="relative z-10 grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 md:p-12 lg:p-16">
              <div className="flex flex-col items-center text-center md:items-start md:text-left text-white">
                <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-3 text-center">
                  ¿Por qué MG Eventos?
                </h2>
                <p className="text-accent font-heading font-semibold text-lg mb-5 text-center">
                  Discomóvil con experiencia y cercanía
                </p>
                <p className="text-white font-body text-lg leading-relaxed max-w-md text-center text-justify">
                  En MG Eventos ofrecemos un servicio de discomóvil en Galicia pensado para que disfrutes sin preocupaciones. Nuestro equipo no solo lleva la música, también aporta la energía y la confianza de un profesional que sabe adaptarse a cada tipo de público y celebración.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-center justify-center gap-6">
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <a
                    href="/contacto"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-heading font-semibold text-primary shadow-md hover:bg-white/90 transition-colors"
                  >
                    Pedir presupuesto
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-7 py-3 text-sm font-heading font-semibold text-white hover:bg-white/20 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Háblanos por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
