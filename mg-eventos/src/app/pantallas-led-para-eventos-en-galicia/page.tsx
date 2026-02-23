import { Metadata } from "next";
import Link from "next/link";
import { Monitor, Sun, Wrench, Tv, Building2, Music2, Zap, ArrowRight, MessageCircle } from "lucide-react";
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
  title: "Pantallas LED para eventos en Galicia — MG Eventos",
  description:
    "Alquiler de pantallas LED para eventos en Galicia. Interior y exterior, montaje profesional y asistencia técnica. Bodas, conferencias, ferias. Presupuesto gratis.",
  slug: "/pantallas-led-para-eventos-en-galicia",
  ogImage: "/og/pantallas-led.jpg",
});

const serviciosRelacionados: ServiceCardItem[] = [
  {
    heading: "DJ para eventos",
    description: "Imagen y sonido juntos. El combo perfecto para cualquier tipo de evento.",
    href: "/dj-para-eventos-en-galicia",
    imgSrc: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    heading: "Escenario móvil",
    description: "Estructura profesional para grandes eventos al aire libre en Galicia.",
    href: "/escenario-movil-para-eventos",
    imgSrc: "https://images.pexels.com/photos/1647918/pexels-photo-1647918.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    heading: "Disco móvil",
    description: "Sonido e iluminación espectacular donde tú necesites.",
    href: "/discotecas-moviles-en-galicia",
    imgSrc: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

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

      {/* Hero 3D compact */}
      <SyntheticHero
        compact
        title="Pantallas LED para eventos en Galicia"
        description="Imagen de alta calidad para cualquier celebración. Interior o exterior, bodas, conferencias, ferias y fiestas populares. Montaje y asistencia técnica incluidos."
        badgeText="Pantallas LED"
        badgeLabel="MG Eventos"
        ctaButtons={[
          { text: "¡Contáctanos!", href: "/contacto", primary: true },
          { text: "Háblanos por WhatsApp", href: WHATSAPP_URL },
        ]}
        microDetails={[
          "+10 años de experiencia",
          "Interior y exterior",
          "Montaje profesional incluido",
        ]}
        breadcrumbs={[
          { name: "Inicio", href: "/" },
          {
            name: "Pantallas LED para eventos",
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
              "En una fiesta o en una boda, las pantallas LED aportan algo más que imagen: crean ambiente. Pueden proyectar vídeos, animaciones, recuerdos o mensajes personalizados que refuercen el momento.",
          },
          {
            icon: Sun,
            title: "Pantallas LED al aire libre",
            description:
              "Las pantallas LED modulares funcionan igual de bien en exteriores que en interiores. En una plaza o en un campo de fiesta, su potencia asegura visibilidad nítida incluso de día.",
          },
          {
            icon: Wrench,
            title: "Montaje y asistencia",
            description:
              "Nuestro servicio incluye montaje completo y asistencia técnica durante todo el evento, para que no tengas que preocuparte de nada técnico.",
          },
        ]}
      />

      <ServiceDetailMarquee
        tag="Decoración digital"
        title="Alquiler de pantallas LED para eventos"
        paragraphs={[
          "El alquiler de pantallas LED para eventos en Galicia es cada vez más habitual porque permite que cualquier celebración gane en profesionalidad y en impacto visual. Ya no hablamos solo de proyectar imágenes, sino de crear una experiencia completa en la que el público se sienta parte del evento.",
          "En MG Eventos lo hemos comprobado en todo tipo de celebraciones: desde conferencias en Santiago hasta conciertos al aire libre donde la pantalla se convierte en el foco de atención. Las pantallas se integran con otros servicios como sonido, iluminación y DJ, creando un conjunto perfecto.",
        ]}
        listItems={[
          "Pantallas modulares para exteriores",
          "Televisores grandes para interiores",
          "Montaje y desmontaje profesional",
          "Asistencia técnica durante el evento",
        ]}
        cta={{ text: "Solicitar presupuesto", href: "/contacto" }}
        stats={[
          { value: 10, prefix: "+", label: "Años de experiencia" },
          { value: 1600, prefix: "+", label: "Eventos realizados" },
          { value: 2000, prefix: "+", label: "Clientes satisfechos" },
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
        title="Solicita presupuesto para tu montaje de pantallas LED"
        description="Tu evento merece una imagen a la altura. En MG Eventos te ofrecemos pantallas LED en Galicia con montaje profesional, asistencia técnica y opciones adaptadas a tus necesidades. Te asesoramos sin compromiso y elegimos el formato ideal para tu espacio."
        primaryButton={{ text: "¡Contáctanos!", href: "/contacto", icon: "arrow" }}
        secondaryButton={{ text: "WhatsApp directo", href: WHATSAPP_URL, icon: "whatsapp", variant: "whatsapp", external: true }}
      />

      {/* Sección enriquecida: Para cada espacio, la pantalla perfecta */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#1a1740] to-secondary py-20 md:py-28">
        {/* Decoraciones de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/10 translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/10 -translate-x-1/4 translate-y-1/4 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Columna izquierda — texto */}
            <div>
              <span className="inline-block text-accent font-heading font-semibold text-xs uppercase tracking-[0.2em] mb-4">
                Todo tipo de eventos
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
                Para cada espacio, la pantalla perfecta
              </h2>
              <p className="text-white font-body text-lg leading-relaxed mb-4">
                Las pantallas LED modulares funcionan igual de bien en exteriores que en interiores. En una plaza de pueblo o en un campo de fiesta, su potencia asegura imagen nítida incluso de día.
              </p>
              <p className="text-white font-body text-lg leading-relaxed">
                Combinamos las pantallas con nuestro{" "}
                <Link
                  href="/fotomaton-en-galicia"
                  className="text-accent font-semibold hover:text-accent/80 underline underline-offset-2 transition-colors"
                >
                  fotomatón para boda
                </Link>{" "}
                o nuestra{" "}
                <Link
                  href="/dj-para-eventos-en-galicia"
                  className="text-accent font-semibold hover:text-accent/80 underline underline-offset-2 transition-colors"
                >
                  música para eventos en Galicia
                </Link>{" "}
                para crear una experiencia visual y sonora de primer nivel.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {[
                  "Visibilidad perfecta para todos los asistentes",
                  "Presentaciones corporativas impactantes",
                  "Vídeos y animaciones en bodas y fiestas",
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

            {/* Columna derecha — tarjetas de tipos de uso */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Bodas y celebraciones */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/12 border border-white/25 p-6 hover:bg-white/18 hover:border-white/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-accent/30 border border-accent/40 flex items-center justify-center mb-4">
                    <Tv className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">
                    Bodas y celebraciones
                  </h3>
                  <p className="text-white/80 text-sm font-body leading-snug">
                    Proyecta momentos, vídeos y mensajes durante el banquete. Un toque diferente y emotivo.
                  </p>
                </div>
              </div>

              {/* Eventos corporativos */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/12 border border-white/25 p-6 hover:bg-white/18 hover:border-white/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-secondary/35 border border-secondary/40 flex items-center justify-center mb-4">
                    <Building2 className="w-5 h-5 text-violet-200" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">
                    Eventos corporativos
                  </h3>
                  <p className="text-white/80 text-sm font-body leading-snug">
                    Presentaciones, congresos y ferias con imagen profesional de alta resolución.
                  </p>
                </div>
              </div>

              {/* Fiestas al aire libre — card ancho completo */}
              <Link
                href="/escenario-movil-para-eventos"
                className="group relative overflow-hidden rounded-2xl bg-white/12 border border-white/25 p-6 hover:bg-white/18 hover:border-white/40 transition-all duration-300 sm:col-span-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center">
                    <Music2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base mb-0.5">
                      Fiestas populares y conciertos al aire libre
                    </h3>
                    <p className="text-white/80 text-sm font-body">
                      Pantallas LED de gran formato integradas con nuestro camión escenario para el mayor impacto visual.
                    </p>
                  </div>
                  <span className="ml-auto flex-shrink-0 text-xs font-heading font-semibold text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all">
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
                Combina las pantallas LED con sonido y escenario para un montaje profesional completo
              </p>
            </div>
            <ColorChangeCards services={serviciosRelacionados} />
          </div>
        </div>
      </section>

      {/* ¿Por qué MG Eventos? — tarjeta con imagen de fondo */}
      <section className="bg-white py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl min-h-[320px]">
            {/* Imagen de fondo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/animacion-eventos-galicia%20(1).jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
              aria-hidden="true"
            />
            {/* Overlay degradado */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/80 to-primary/40" />
            {/* Halo decorativo */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

            {/* Contenido */}
            <div className="relative z-10 grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 md:p-12 lg:p-16">

              {/* Texto izquierda */}
              <div className="flex flex-col items-start text-left text-white">
                <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl font-heading leading-tight mb-3">
                  ¿Por qué MG Eventos?
                </h2>
                <p className="text-accent font-heading font-semibold text-lg mb-5">
                  Pantallas LED con experiencia y cercanía
                </p>
                <p className="text-white font-body text-lg leading-relaxed max-w-md">
                  Nuestro objetivo es sencillo: que tu evento tenga el impacto visual que merece. En MG Eventos nos encargamos de todo el montaje técnico para que tú solo tengas que preocuparte de disfrutar del resultado.
                </p>
              </div>

              {/* CTAs derecha */}
              <div className="flex flex-col items-start md:items-center justify-center gap-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/contacto"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-primary font-heading font-bold text-sm hover:bg-neutral-100 shadow-lg transition-all group"
                  >
                    Pedir presupuesto
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/40 text-white font-heading font-semibold text-sm hover:bg-white/10 backdrop-blur-sm transition-all"
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
        badge="¡Hablemos de tu evento!"
        title="¿Tu evento necesita pantallas LED?"
        description="Cuéntanos el espacio, el aforo y el tipo de evento y te proponemos la solución visual perfecta. Presupuesto sin compromiso y asesoramiento personalizado."
        primaryButton={{ text: "Solicitar presupuesto", href: "/contacto", icon: "arrow" }}
        secondaryButton={{ text: "Háblanos por WhatsApp", href: WHATSAPP_URL, icon: "whatsapp", variant: "whatsapp", external: true }}
      />
    </>
  );
}
