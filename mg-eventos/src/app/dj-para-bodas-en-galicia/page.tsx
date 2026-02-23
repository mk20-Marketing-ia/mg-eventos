import { Metadata } from "next";
import Link from "next/link";
import { Heart, CalendarCheck, Palette, Camera, Monitor, Music, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
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
  title: "DJ para bodas en Galicia — MG Eventos",
  description:
    "DJ para bodas en Galicia con música personalizada y asesoramiento. +300 bodas animadas y +10 años de experiencia. Presupuesto sin compromiso.",
  slug: "/dj-para-bodas-en-galicia",
  ogImage: "/og/dj-bodas.jpg",
});

const serviciosRelacionados: ServiceCardItem[] = [
  {
    heading: "Fotomatón para bodas",
    description: "Risas y recuerdos para todos tus invitados. Atrezzo y galería digital incluidos.",
    href: "/fotomaton-en-galicia",
    imgSrc: "/mg%20eventos%20en%20galicia%20%20servicios/mg%20eventos%20en%20galicia%20%20servicios%20fotomation.jpg",
  },
  {
    heading: "Pantallas LED",
    description: "Proyecta vuestros momentos en alta resolución. Impacto visual en el gran día.",
    href: "/pantallas-led-para-eventos-en-galicia",
    imgSrc: "/mg%20eventos%20en%20galicia%20%20servicios/mg%20eventos%20en%20galicia%20%20servicios%20pantallas%20led.jpg",
  },
  {
    heading: "DJ para fiestas",
    description: "Cuando la boda termina, la fiesta continúa. Verbenas y celebraciones privadas.",
    href: "/dj-para-fiestas-en-galicia",
    imgSrc: "/mg%20eventos%20en%20galicia%20%20servicios/mg%20eventos%20en%20galicia%20%20servicios%20de%20dj.jpg",
  },
];

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

      {/* Hero 3D compact */}
      <SyntheticHero
        compact
        textWhite
        primaryCtaAccent
        title="DJ para bodas en Galicia"
        description="La música marca la emoción de cada momento de tu gran día. Con MG Eventos, un equipo cercano y con experiencia que se adapta completamente a tu estilo."
        badgeText="DJ para bodas"
        badgeLabel="MG Eventos"
        ctaButtons={[
          { text: "Contáctanos", href: "/contacto", primary: true },
          { text: "Háblanos por WhatsApp", href: WHATSAPP_URL },
        ]}
        microDetails={[
          "+300 bodas animadas",
          "+10 años de experiencia",
          "Asesoramiento personalizado",
        ]}
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
              "Un buen DJ de boda sabe que no es lo mismo ambientar una ceremonia íntima que animar la fiesta final. En MG Eventos creamos una selección musical pensada para cada instante.",
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
              "Nuestros DJs para bodas en Galicia preparan la música contigo, escuchando tus gustos y adaptándose a lo que quieras transmitir en tu día.",
          },
        ]}
      />

      <ServiceDetailMarquee
        title="¿Qué incluye nuestro servicio de DJ para bodas?"
        paragraphs={[
          "Cuando reservas un DJ con MG Eventos, no solo contratas a alguien para poner música, sino que disfrutas de un servicio completo y personalizado que acompaña todo tu día. Estas son algunas de las cualidades que siempre incluimos:",
        ]}
        listItems={[
          "Sonido profesional de alta calidad",
          "Iluminación y ambiente adaptados",
          "Asesoramiento cercano y personalizado",
          "Lista musical elaborada contigo",
        ]}
        cta={{ text: "Pregúntanos sin compromiso", href: "/contacto" }}
        stats={[
          { value: 300, prefix: "+", label: "Bodas animadas" },
          { value: 10, prefix: "+", label: "Años de experiencia" },
          { value: 2000, prefix: "+", label: "Clientes satisfechos" },
        ]}
        marqueeImages={[
          "/images/imagenes%20de%20dj%20para%20bodas/%C2%BFQu%C3%A9%20incluye%20nuestro%20servicio%20de%20DJ%20para%20bodas.jpg",
          "/images/imagenes%20de%20dj%20para%20bodas/DJ%20de%20boda%20en%20Galicia.jpg",
          "/images/imagenes%20de%20dj%20para%20bodas/La%20banda%20sonora%20perfecta.jpg",
          "/images/imagenes%20de%20dj%20para%20bodas/Tu%20DJ%20para%20tu%20d%C3%ADa%20especial.jpg",
          "/images/imagenes%20de%20dj%20para%20bodas/mg%20eventos%20dj%20para%20bodas%20coru%C3%B1a.jpg",
          "/images/imagenes%20de%20dj%20para%20bodas/mg%20eventos%20dj%20para%20bodas%20pontevedra.jpg",
          "/images/imagenes%20de%20dj%20para%20bodas/mg%20eventos%20dj%20para%20bodas%20santiago.jpg",
          "/images/imagenes%20de%20dj%20para%20bodas/Completa%20vuestra%20boda%20con%20m%C3%A1s%20servicios.jpg",
        ]}
      />

      {/* CTA presupuesto — tarjeta oscura */}
      <CallToAction
        layout="card"
        dark
        descriptionWhite
        badge="Presupuesto sin compromiso"
        title="Solicita presupuesto para tu DJ de boda en Galicia"
        description="Tu boda merece la mejor música y un ambiente único. En MG Eventos ponemos a tu disposición un DJ para bodas en Galicia con experiencia, cercanía y un servicio completo. Te asesoramos sin compromiso y nos adaptamos a tu estilo para que tu celebración sea recordada por todos."
        primaryButton={{ text: "Hablemos", href: "/contacto", icon: "arrow", variant: "accent" }}
        secondaryButton={{ text: "WhatsApp directo", href: WHATSAPP_URL, icon: "whatsapp", variant: "whatsapp", external: true }}
      />

      {/* Sección enriquecida: La banda sonora de vuestro día */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#1a1740] to-secondary py-20 md:py-28">
        {/* Decoraciones de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-secondary/15 -translate-x-1/4 translate-y-1/4 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Columna izquierda — texto */}
            <div>
              <span className="inline-block text-accent font-heading font-semibold text-xs uppercase tracking-[0.2em] mb-4">
                Más allá de la música
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
                La banda sonora perfecta para vuestro día
              </h2>
              <p className="text-white font-body text-lg leading-relaxed mb-4">
                Además del DJ, completamos la experiencia de vuestra boda con servicios que crean momentos únicos.
                Nuestro{" "}
                <Link
                  href="/fotomaton-en-galicia"
                  className="text-accent font-semibold hover:text-accent/80 underline underline-offset-2 transition-colors"
                >
                  fotomatón para bodas
                </Link>{" "}
                ofrece a los invitados diversión y recuerdos que se llevan a casa.
              </p>
              <p className="text-white font-body text-lg leading-relaxed">
                Y si queréis un impacto visual especial, las{" "}
                <Link
                  href="/pantallas-led-para-eventos-en-galicia"
                  className="text-accent font-semibold hover:text-accent/80 underline underline-offset-2 transition-colors"
                >
                  pantallas LED para eventos
                </Link>{" "}
                permiten proyectar fotos, vídeos o mensajes durante el banquete y la fiesta, creando una atmósfera incomparable.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {[
                  "Ceremonia, cóctel, banquete y fiesta — todo cubierto",
                  "Lista personalizada elaborada contigo paso a paso",
                  "Servicio completo: sonido, luces y animación",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent/25 border border-accent/40 flex items-center justify-center">
                      <Sparkles className="w-2.5 h-2.5 text-accent" />
                    </span>
                    <span className="text-white font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha — tarjetas de complementos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Fotomatón */}
              <Link
                href="/fotomaton-en-galicia"
                className="group relative overflow-hidden rounded-2xl bg-white/12 border border-white/25 p-6 hover:bg-white/18 hover:border-white/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-accent/30 border border-accent/40 flex items-center justify-center mb-4">
                    <Camera className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">
                    Fotomatón para bodas
                  </h3>
                  <p className="text-white/80 text-sm font-body leading-snug">
                    Risas, atrezzo y fotos instantáneas. El recuerdo perfecto para tus invitados.
                  </p>
                  <span className="inline-block mt-3 text-xs font-heading font-semibold text-accent group-hover:translate-x-1 transition-transform">
                    Ver servicio →
                  </span>
                </div>
              </Link>

              {/* Pantallas LED */}
              <Link
                href="/pantallas-led-para-eventos-en-galicia"
                className="group relative overflow-hidden rounded-2xl bg-white/12 border border-white/25 p-6 hover:bg-white/18 hover:border-white/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-secondary/35 border border-secondary/40 flex items-center justify-center mb-4">
                    <Monitor className="w-5 h-5 text-violet-200" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">
                    Pantallas LED
                  </h3>
                  <p className="text-white/80 text-sm font-body leading-snug">
                    Proyecciones durante el banquete y la fiesta. Un impacto visual que sorprende.
                  </p>
                  <span className="inline-block mt-3 text-xs font-heading font-semibold text-violet-200 group-hover:translate-x-1 transition-transform">
                    Ver servicio →
                  </span>
                </div>
              </Link>

              {/* Momentos de la boda — card ancho completo */}
              <div className="relative overflow-hidden rounded-2xl bg-white/12 border border-white/25 p-6 sm:col-span-2">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
                <div className="relative flex items-center gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base mb-1">
                      Cada momento tiene su música
                    </h3>
                    <p className="text-white/80 text-sm font-body">
                      Ceremonia civil o religiosa, cóctel de bienvenida, banquete y fiesta. Seleccionamos el repertorio perfecto para cada parte de vuestro día.
                    </p>
                  </div>
                </div>
              </div>
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
                Completa vuestra boda con más servicios
              </h2>
              <p className="text-white/60 font-body text-lg mt-3 max-w-xl mx-auto">
                Crea una experiencia completa e inolvidable combinando todos nuestros servicios para el gran día
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
              src="/images/mg%20eventos%20imagen%20home.jpg"
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
                  Tu DJ para tu día especial
                </p>
                <p className="text-white font-body text-lg leading-relaxed max-w-md">
                  Nuestro objetivo es sencillo: que tengas un DJ de boda que entienda tu estilo, que se adapte al ambiente que deseas crear y que haga que tú y tus invitados viváis una celebración inolvidable.
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
        badge="Vuestro gran día"
        title="¿Listos para elegir el DJ de vuestra boda?"
        description="Cuéntanos cómo imagináis ese día y os preparamos una propuesta sin compromiso. Nos adaptamos a vuestro estilo, vuestros gustos y vuestro presupuesto."
        primaryButton={{ text: "Contactar ahora", href: "/contacto", icon: "arrow" }}
        secondaryButton={{ text: "Háblanos por WhatsApp", href: WHATSAPP_URL, icon: "whatsapp", variant: "whatsapp", external: true }}
      />
    </>
  );
}
