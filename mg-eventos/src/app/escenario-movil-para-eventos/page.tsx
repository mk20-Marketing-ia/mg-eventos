import { Metadata } from "next";
import Link from "next/link";
import { Frame, Clock, Scaling, Monitor, Speaker, Music2, Zap, ArrowRight, MessageCircle } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { WHATSAPP_URL } from "@/lib/constants";
import { ValueProps } from "@/components/sections/ValueProps";
import { ServiceDetailMarquee } from "@/components/ui/service-detail-marquee";
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
  title: "Escenario móvil para eventos en Galicia — MG Eventos",
  description:
    "Alquiler de camión escenario en Galicia para verbenas, fiestas y conciertos. Montaje rápido, sonido e iluminación profesional. Presupuesto sin compromiso.",
  slug: "/escenario-movil-para-eventos",
  ogImage: "/og/escenario-movil.jpg",
});

const serviciosRelacionados: ServiceCardItem[] = [
  {
    heading: "Pantallas LED",
    description: "Impacto visual de alto nivel para complementar el escenario en cualquier evento.",
    href: "/pantallas-led-para-eventos-en-galicia",
    imgSrc: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    heading: "Disco móvil",
    description: "La discomóvil perfecta para combinar con el camión escenario en verbenas y fiestas.",
    href: "/discotecas-moviles-en-galicia",
    imgSrc: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    heading: "DJ para eventos",
    description: "El profesional que le da vida al escenario. Música, animación y energía garantizadas.",
    href: "/dj-para-eventos-en-galicia",
    imgSrc: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

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

      {/* Hero 3D compact */}
      <SyntheticHero
        compact
        title="Escenario móvil para eventos en Galicia"
        description="El camión escenario más versátil de Galicia. Se despliega en horas y convierte cualquier espacio en un escenario profesional listo para la música y el público."
        badgeText="Camión escenario"
        badgeLabel="MG Eventos"
        ctaButtons={[
          { text: "¡Contáctanos!", href: "/contacto", primary: true },
          { text: "Háblanos por WhatsApp", href: WHATSAPP_URL },
        ]}
        microDetails={[
          "+10 años de experiencia",
          "Montaje en pocas horas",
          "Sonido e iluminación incluidos",
        ]}
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
            title: "Escenario adaptado a tu evento",
            description:
              "Cada evento es distinto, pero el camión escenario encaja siempre. En una explanada se convierte en punto de encuentro; en la plaza de una aldea, en el corazón de la fiesta.",
          },
          {
            icon: Clock,
            title: "Montaje rápido y sin complicaciones",
            description:
              "En pocas horas está todo listo: estructura, sonido, luces y ambiente preparado para arrancar. Sin quebraderos de cabeza para el organizador.",
          },
          {
            icon: Scaling,
            title: "Para eventos grandes y pequeños",
            description:
              "Desde un festival con miles de personas hasta una feria local o una fiesta patronal íntima. La misma calidad y profesionalidad a cualquier escala.",
          },
        ]}
      />

      <ServiceDetailMarquee
        tag="Servicio completo"
        title="Camión escenario en Galicia"
        paragraphs={[
          "El alquiler de un camión escenario en Galicia es la solución más práctica para quienes organizan conciertos, fiestas o celebraciones al aire libre. Lo mejor es que no necesitas infraestructuras complicadas: el escenario llega sobre ruedas, se despliega en pocas horas y queda listo para recibir música y público.",
          "En MG Eventos lo combinamos con nuestros servicios de DJ para fiestas, discomóvil y pantallas LED para que no tengas que coordinar a múltiples proveedores. Un solo equipo, un solo punto de contacto, toda la experiencia lista.",
        ]}
        listItems={[
          "Verbenas y fiestas patronales",
          "Conciertos y festivales al aire libre",
          "Eventos municipales y ferias",
          "Celebraciones privadas de gran aforo",
        ]}
        cta={{ text: "Hablemos de tu evento", href: "/contacto" }}
        stats={[
          { value: 10, prefix: "+", label: "Años de experiencia" },
          { value: 1400, prefix: "+", label: "Eventos realizados" },
          { value: 1750, prefix: "+", label: "Clientes satisfechos" },
        ]}
        marqueeImages={[
          "/images/imagenes%20verticales%20para%20la%20home/1.jpg",
          "/images/imagenes%20verticales%20para%20la%20home/2.jpg",
          "/images/imagenes%20verticales%20para%20la%20home/3.jpg",
          "/images/imagenes%20verticales%20para%20la%20home/4.jpg",
          "/images/imagenes%20verticales%20para%20la%20home/5.jpg",
          "/images/imagenes%20verticales%20para%20la%20home/6.jpg",
          "/images/imagenes%20verticales%20para%20la%20home/7.jpg",
          "/images/imagenes%20verticales%20para%20la%20home/8.jpg",
          "/images/imagenes%20verticales%20para%20la%20home/9.jpg",
          "/images/imagenes%20verticales%20para%20la%20home/10.jpg",
        ]}
      />

      {/* CTA presupuesto — tarjeta oscura */}
      <CallToAction
        layout="card"
        dark
        badge="Presupuesto sin compromiso"
        title="Solicita presupuesto para tu camión escenario en Galicia"
        description="Organizar un evento es más sencillo cuando cuentas con el apoyo adecuado. Con nuestro camión escenario tendrás estructura, sonido, luces y montaje rápido en un solo servicio. Te asesoramos sin compromiso y buscamos la mejor configuración para tu evento."
        primaryButton={{ text: "¡Pregúntanos!", href: "/contacto", icon: "arrow" }}
        secondaryButton={{ text: "WhatsApp directo", href: WHATSAPP_URL, icon: "whatsapp", variant: "whatsapp", external: true }}
      />

      {/* Sección enriquecida: Sonido, imagen y escenario en uno */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#1a1740] to-secondary py-20 md:py-28">
        {/* Decoraciones de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-secondary/15 -translate-x-1/4 translate-y-1/4 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Columna izquierda — texto */}
            <div>
              <span className="inline-block text-accent font-heading font-semibold text-xs uppercase tracking-[0.2em] mb-4">
                Servicio completo
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
                Sonido, imagen y escenario en un solo servicio
              </h2>
              <p className="text-white font-body text-lg leading-relaxed mb-4">
                No se trata solo de tener un escenario: lo importante es que luzca y suene como debe. Por eso en nuestro alquiler incluimos equipos de sonido potentes y{" "}
                <Link
                  href="/pantallas-led-para-eventos-en-galicia"
                  className="text-accent font-semibold hover:text-accent/80 underline underline-offset-2 transition-colors"
                >
                  pantallas LED
                </Link>{" "}
                adaptadas a cada evento.
              </p>
              <p className="text-white font-body text-lg leading-relaxed">
                No tienes que coordinar a diferentes proveedores: el escenario, el sonido y las luces viajan juntos. Añade nuestro{" "}
                <Link
                  href="/dj-para-fiestas-en-galicia"
                  className="text-accent font-semibold hover:text-accent/80 underline underline-offset-2 transition-colors"
                >
                  DJ para fiestas
                </Link>{" "}
                y tendrás todo lo necesario para arrancar la fiesta desde el primer minuto.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {[
                  "Estructura, sonido y luces en un solo servicio",
                  "Sin necesidad de coordinar múltiples proveedores",
                  "Adaptable a cualquier terreno y condición meteorológica",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent/30 border border-accent/50 flex items-center justify-center">
                      <Zap className="w-2.5 h-2.5 text-accent" />
                    </span>
                    <span className="text-white font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha — tarjetas de complementos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Pantallas LED */}
              <Link
                href="/pantallas-led-para-eventos-en-galicia"
                className="group relative overflow-hidden rounded-2xl bg-white/10 border border-white/25 p-6 hover:bg-white/18 hover:border-white/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-secondary-light/30 border border-white/20 flex items-center justify-center mb-4">
                    <Monitor className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">
                    Pantallas LED
                  </h3>
                  <p className="text-white/80 text-sm font-body leading-snug">
                    Impacto visual de primer nivel. Perfectas para integrar en el escenario.
                  </p>
                  <span className="inline-block mt-3 text-xs font-heading font-semibold text-white/90 group-hover:translate-x-1 transition-transform">
                    Ver servicio →
                  </span>
                </div>
              </Link>

              {/* Disco móvil */}
              <Link
                href="/discotecas-moviles-en-galicia"
                className="group relative overflow-hidden rounded-2xl bg-white/10 border border-white/25 p-6 hover:bg-white/18 hover:border-white/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-accent/30 border border-accent/40 flex items-center justify-center mb-4">
                    <Speaker className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">
                    Disco móvil
                  </h3>
                  <p className="text-white/80 text-sm font-body leading-snug">
                    Combina el escenario con la discomóvil para el montaje más completo.
                  </p>
                  <span className="inline-block mt-3 text-xs font-heading font-semibold text-white/90 group-hover:translate-x-1 transition-transform">
                    Ver servicio →
                  </span>
                </div>
              </Link>

              {/* DJ para fiestas — card ancho completo */}
              <Link
                href="/dj-para-fiestas-en-galicia"
                className="group relative overflow-hidden rounded-2xl bg-white/10 border border-white/25 p-6 hover:bg-white/18 hover:border-white/40 transition-all duration-300 sm:col-span-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/15 border border-white/30 flex items-center justify-center">
                    <Music2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base mb-0.5">
                      DJ para fiestas en Galicia
                    </h3>
                    <p className="text-white/80 text-sm font-body">
                      El profesional que da vida al escenario. Música, energía y animación desde el primer momento hasta el final.
                    </p>
                  </div>
                  <span className="ml-auto flex-shrink-0 text-xs font-heading font-semibold text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all">
                    Ver DJ →
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
                El escenario es la base — añade pantallas, discomóvil y DJ para un montaje profesional completo
              </p>
            </div>
            <ColorChangeCards services={serviciosRelacionados} />
          </div>
        </div>
      </section>

      {/* ¿Por qué MG Eventos? — estilo CtaCard */}
      <section className="bg-white py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl min-h-[320px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mg%20eventos%20imagen%20home.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 md:p-12 lg:p-16">
              {/* Texto izquierda */}
              <div className="flex flex-col items-start text-left text-white">
                <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl font-heading leading-tight mb-3">
                  ¿Por qué MG Eventos?
                </h2>
                <p className="text-accent font-heading font-semibold text-lg mb-5">
                  Escenario móvil con experiencia y cercanía
                </p>
                <p className="text-white font-body text-lg leading-relaxed max-w-md">
                  En MG Eventos ofrecemos un servicio de escenario móvil en Galicia pensado para que organices sin preocupaciones. Nuestro equipo se encarga de todo el montaje técnico para que tú solo tengas que preocuparte de disfrutar del resultado.
                </p>
              </div>

              {/* CTAs derecha */}
              <div className="flex flex-col items-start md:items-center justify-center gap-4">
                <a
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-heading font-bold text-base hover:bg-neutral-100 shadow-lg transition-all group w-full sm:w-auto justify-center"
                >
                  Pedir presupuesto
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-heading font-semibold text-base hover:bg-white/10 backdrop-blur-sm transition-all w-full sm:w-auto justify-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  Háblanos por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <CallToAction
        layout="card"
        badge="¡Monta el escenario!"
        title="¿Tu evento necesita un camión escenario?"
        description="Cuéntanos el aforo, el espacio y la fecha. Te preparamos un presupuesto completo con escenario, sonido e iluminación sin compromiso."
        primaryButton={{ text: "Solicitar presupuesto", href: "/contacto", icon: "arrow" }}
        secondaryButton={{ text: "Háblanos por WhatsApp", href: WHATSAPP_URL, icon: "whatsapp", variant: "whatsapp", external: true }}
      />
    </>
  );
}
