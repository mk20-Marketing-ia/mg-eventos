import { Metadata } from "next";
import Link from "next/link";
import { Music, Speaker, Cake, Monitor, Camera, Zap, Star, ArrowRight, MessageCircle } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { WHATSAPP_URL } from "@/lib/constants";
import { ValueProps } from "@/components/sections/ValueProps";
import { CtaSectionWithGallery } from "@/components/ui/cta-section-with-gallery";
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
  title: "DJ para eventos en Galicia — MG Eventos",
  description:
    "Contrata un DJ para eventos en Galicia. Música personalizada, sonido profesional e iluminación adaptada. +10 años de experiencia. Presupuesto sin compromiso.",
  slug: "/dj-para-eventos-en-galicia",
  ogImage: "/og/dj-eventos.jpg",
});

const serviciosRelacionados: ServiceCardItem[] = [
  { heading: "Disco móvil", description: "", href: "/discotecas-moviles-en-galicia", imgSrc: "/mg%20eventos%20en%20galicia%20%20servicios/mg%20eventos%20en%20galicia%20%20servicios%20disco%20movil.jpg" },
  { heading: "Pantallas LED", description: "", href: "/pantallas-led-para-eventos-en-galicia", imgSrc: "/mg%20eventos%20en%20galicia%20%20servicios/mg%20eventos%20en%20galicia%20%20servicios%20pantallas%20led.jpg" },
  { heading: "Fotomatón", description: "", href: "/fotomaton-en-galicia", imgSrc: "/mg%20eventos%20en%20galicia%20%20servicios/mg%20eventos%20en%20galicia%20%20servicios%20fotomation.jpg" },
];

export default function DJEventosPage() {
  return (
    <>
      <SchemaService
        serviceName="DJ para eventos en Galicia"
        description="Contrata un DJ para eventos en Galicia. Música personalizada, sonido profesional e iluminación adaptada a cada celebración."
        slug="/dj-para-eventos-en-galicia"
      />
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: "DJ para eventos en Galicia", href: "/dj-para-eventos-en-galicia" },
        ]}
      />

      {/* Hero 3D compact */}
      <SyntheticHero
        compact
        textWhite
        primaryCtaAccent
        title="DJ para eventos en Galicia"
        description="Música personalizada, sonido profesional e iluminación adaptada. Hacemos que tu evento suene exactamente como lo imaginaste."
        badgeText="Servicio de DJ"
        badgeLabel="MG Eventos"
        ctaButtons={[
          { text: "Contáctanos", href: "/contacto", primary: true },
          { text: "Háblanos por WhatsApp", href: WHATSAPP_URL },
        ]}
        microDetails={[
          "+10 años de experiencia",
          "Música personalizada",
          "Sonido e iluminación incluidos",
        ]}
      />

      <ValueProps
        items={[
          {
            icon: Music,
            title: "Música personalizada",
            description:
              "Cada celebración es diferente. Con nuestro equipo podrás contar con un DJ que entiende tus gustos, prepara la música y crea una banda sonora única para tu celebración.",
          },
          {
            icon: Speaker,
            title: "Sonido e iluminación adaptados",
            description:
              "No solo llevamos la música. Nuestro servicio incluye sonido profesional e iluminación ajustada a cada espacio, desde salones pequeños hasta grandes exteriores.",
          },
          {
            icon: Cake,
            title: "DJ para cumpleaños en Galicia",
            description:
              "Un cumpleaños siempre merece una celebración especial, y tener un DJ para cumpleaños es la mejor forma de asegurar diversión desde el primer minuto.",
          },
        ]}
      />

      <ServiceDetailMarquee
        tag="Para empresas"
        title="DJ para eventos corporativos en Galicia"
        paragraphs={[
          "Sea cual sea el evento de tu empresa, en MG Eventos te ofrecemos un DJ para eventos corporativos en Galicia capaz de adaptarse a cada ocasión. Sabemos que no es lo mismo animar una cena de equipo que acompañar un congreso con música ambiental o dinamizar una presentación de producto. Por eso trabajamos de manera flexible, siempre buscando que tu evento tenga la imagen profesional que merece.",
        ]}
        listItems={[
          "Cenas de empresa",
          "Presentaciones corporativas",
          "Congresos y ferias",
          "Team buildings",
        ]}
        cta={{ text: "Hablemos de tu evento", href: "/contacto" }}
        marqueeImages={[
          "/images/imagenes%20de%20dj%20para%20evento%20coorporativo/DJ%20para%20eventos%20corporativos%20en%20Galicia.jpg",
          "/images/imagenes%20de%20dj%20para%20evento%20coorporativo/mg%20eventos%20dj%20coorporativo%20en%20galicia.jpg",
          "/images/imagenes%20de%20dj%20para%20evento%20coorporativo/mg%20eventos%20dj%20coorporativo%20en%20santiago.jpg",
          "/images/imagenes%20de%20dj%20para%20evento%20coorporativo/DJ%20de%20eventos%20en%20Galicia.jpg",
          "/images/imagenes%20de%20dj%20para%20evento%20coorporativo/DJ%20para%20eventos%20peque%C3%B1os%20en%20Galicia.jpg",
          "/images/imagenes%20de%20dj%20para%20evento%20coorporativo/Completa%20tu%20evento%20con%20m%C3%A1s%20servicios.jpg",
        ]}
      />

      {/* CTA presupuesto — tarjeta oscura */}
      <CallToAction
        layout="card"
        dark
        descriptionWhite
        badge="Presupuesto sin compromiso"
        title="Solicita presupuesto para tu DJ de eventos en Galicia"
        description="¿Quieres asegurarte de que tu próxima celebración sea un éxito? En MG Eventos ponemos a tu disposición un DJ para eventos en Galicia con la experiencia y la cercanía que necesitas. Te asesoramos sin compromiso y nos adaptamos a tu celebración."
        primaryButton={{ text: "Pregúntanos", href: "/contacto", icon: "arrow", variant: "white" }}
        secondaryButton={{ text: "WhatsApp directo", href: WHATSAPP_URL, icon: "whatsapp", variant: "whatsapp", external: true }}
      />

      {/* Sección enriquecida: Ambiente profesional */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#1a1740] to-secondary py-20 md:py-28">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-secondary/10 -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/10 translate-x-1/4 translate-y-1/4 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Columna izquierda — texto */}
            <div className="text-center lg:text-left">
              <span className="inline-block text-accent font-heading font-semibold text-xs uppercase tracking-[0.2em] mb-4">
                Para eventos de empresa
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight mb-6 text-center lg:text-left">
                Ambiente profesional con música y equipos de calidad
              </h2>
              <p className="text-white font-body text-lg leading-relaxed mb-4 text-center lg:text-left text-justify">
                En un evento corporativo, la imagen lo es todo. Por eso, además de un
                DJ profesional en Galicia, contamos con{" "}
                <Link
                  href="/pantallas-led-para-eventos-en-galicia"
                  className="text-accent font-semibold hover:text-accent/80 underline underline-offset-2 transition-colors"
                >
                  pantallas LED para eventos
                </Link>{" "}
                para reforzar la comunicación de tu marca, presentaciones o vídeos.
              </p>
              <p className="text-white font-body text-lg leading-relaxed text-center lg:text-left text-justify">
                Y si buscas un toque más cercano, nuestro{" "}
                <Link
                  href="/fotomaton-en-galicia"
                  className="text-accent font-semibold hover:text-accent/80 underline underline-offset-2 transition-colors"
                >
                  fotomatón para eventos
                </Link>{" "}
                crea recuerdos que quedan ligados a tu empresa para siempre.
              </p>

              {/* Bullets de puntos clave */}
              <div className="mt-8 flex flex-col gap-3 text-left">
                {[
                  "Unimos música, sonido e iluminación en un solo servicio",
                  "Seriedad profesional con entretenimiento garantizado",
                  "Adaptados a cada tipo de espacio y audiencia",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                      <Star className="w-2.5 h-2.5 text-accent" />
                    </span>
                    <span className="text-white font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha — tarjetas de servicios complementarios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Pantallas LED — móvil centrado */}
              <Link
                href="/pantallas-led-para-eventos-en-galicia"
                className="group relative overflow-hidden rounded-2xl bg-white/10 border border-white/25 p-6 hover:bg-white/18 hover:border-white/40 transition-all duration-300 flex flex-col items-center text-center sm:items-stretch sm:text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="w-10 h-10 rounded-xl bg-secondary/30 border border-secondary/40 flex items-center justify-center mb-4">
                    <Monitor className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">
                    Pantallas LED
                  </h3>
                  <p className="text-white/75 text-sm font-body leading-snug">
                    Impacto visual para tu evento. Proyecciones, marcas y logotipos en alta resolución.
                  </p>
                  <span className="inline-block mt-3 text-xs font-heading font-semibold text-white/90 group-hover:translate-x-1 transition-transform">
                    Ver servicio →
                  </span>
                </div>
              </Link>

              {/* Fotomatón — móvil centrado */}
              <Link
                href="/fotomaton-en-galicia"
                className="group relative overflow-hidden rounded-2xl bg-white/10 border border-white/25 p-6 hover:bg-white/18 hover:border-white/40 transition-all duration-300 flex flex-col items-center text-center sm:items-stretch sm:text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="w-10 h-10 rounded-xl bg-accent/30 border border-accent/40 flex items-center justify-center mb-4">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">
                    Fotomatón
                  </h3>
                  <p className="text-white/75 text-sm font-body leading-snug">
                    Diversión y recuerdos para tus invitados. Galería digital incluida.
                  </p>
                  <span className="inline-block mt-3 text-xs font-heading font-semibold text-white/90 group-hover:translate-x-1 transition-transform">
                    Ver servicio →
                  </span>
                </div>
              </Link>

              {/* Camión escenario — centrado en responsive */}
              <Link
                href="/escenario-movil-para-eventos"
                className="group relative overflow-hidden rounded-2xl bg-white/10 border border-white/25 p-6 hover:bg-white/18 hover:border-white/40 transition-all duration-300 sm:col-span-2 flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col items-center gap-3 sm:flex-row sm:gap-5 w-full sm:w-auto">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base mb-0.5">
                      Camión escenario
                    </h3>
                    <p className="text-white/75 text-sm font-body">
                      Para verbenas y conciertos al aire libre. Estructura, sonido e iluminación profesional lista para montar.
                    </p>
                  </div>
                  <span className="sm:ml-auto flex-shrink-0 text-xs font-heading font-semibold text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all">
                    Ver →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSectionWithGallery
        tag="Para cualquier tamaño"
        title="DJ para eventos pequeños en Galicia"
        description="Sea cual sea el evento de tu empresa, en MG Eventos te ofrecemos un DJ para eventos corporativos en Galicia capaz de adaptarse a cada ocasión. Sabemos que no es lo mismo animar una cena de equipo que acompañar un congreso con música ambiental o dinamizar una presentación de producto. Por eso trabajamos de manera flexible, siempre buscando que tu evento tenga la imagen profesional que merece."
        listItems={[
          "Cenas de empresa",
          "Presentaciones corporativas",
          "Congresos",
        ]}
        ctaText="Contáctanos"
        ctaHref="/contacto"
        images={[
          "/images/imagenes%20de%20dj%20para%20evento%20coorporativo/DJ%20para%20eventos%20peque%C3%B1os%20en%20Galicia.jpg",
          "/images/imagenes%20de%20dj%20para%20evento%20coorporativo/DJ%20para%20eventos%20corporativos%20en%20Galicia.jpg",
          "/images/imagenes%20de%20dj%20para%20evento%20coorporativo/mg%20eventos%20dj%20coorporativo%20en%20galicia.jpg",
          "/images/imagenes%20de%20dj%20para%20evento%20coorporativo/mg%20eventos%20dj%20coorporativo%20en%20santiago.jpg",
        ]}
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
                Combina el servicio de DJ con otras soluciones para crear una experiencia completa e inolvidable
              </p>
            </div>
            <ColorChangeCards services={serviciosRelacionados} />
          </div>
        </div>
      </section>

      {/* ¿Por qué MG Eventos? — estilo CtaCard con imagen de fondo */}
      <section className="bg-white py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl min-h-[320px]">
            {/* Imagen de fondo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mg%20eventos%20imagen%20home.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden="true"
            />
            {/* Overlay degradado */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
            {/* Halo decorativo */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

            {/* Contenido */}
            <div className="relative z-10 grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 md:p-12 lg:p-16">

              {/* Texto izquierda */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left text-white">
                <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl font-heading leading-tight mb-3 text-center">
                  ¿Por qué MG Eventos?
                </h2>
                <p className="text-accent font-heading font-semibold text-lg mb-5 text-center">
                  Servicio de DJ con experiencia y cercanía
                </p>
                <p className="text-white font-body text-lg leading-relaxed max-w-md text-center text-justify">
                  En MG Eventos ofrecemos un servicio de DJ en Galicia pensado para que disfrutes sin preocupaciones. Nuestro equipo no solo lleva la música, también aporta la energía y la confianza de un profesional que sabe adaptarse a cada tipo de público y celebración.
                </p>
              </div>

              {/* CTAs derecha — sin stats */}
              <div className="flex flex-col items-center md:items-center justify-center gap-4">
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
    </>
  );
}
