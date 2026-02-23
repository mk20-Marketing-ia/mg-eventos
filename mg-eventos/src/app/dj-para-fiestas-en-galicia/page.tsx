import { Metadata } from "next";
import Link from "next/link";
import { Tent, Users, Cake, Music2, PartyPopper, ArrowRight, MessageCircle } from "lucide-react";
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
  title: "DJ para fiestas en Galicia — MG Eventos",
  description:
    "DJ para fiestas en Galicia: verbenas, cumpleaños, fiestas privadas. Sonido, iluminación y animación profesional. +10 años de experiencia. Presupuesto gratis.",
  slug: "/dj-para-fiestas-en-galicia",
  ogImage: "/og/dj-fiestas.jpg",
});

const serviciosRelacionados: ServiceCardItem[] = [
  {
    heading: "DJ para bodas",
    description: "El momento más especial merece la música perfecta. Asesoramiento y lista personalizada.",
    href: "/dj-para-bodas-en-galicia",
    imgSrc: "/mg%20eventos%20en%20galicia%20%20servicios/servicio%20de%20dj%20para%20boda%20en%20galicia.jpg",
  },
  {
    heading: "Disco móvil",
    description: "La fiesta donde tú quieras. Sonido de alta calidad e iluminación espectacular.",
    href: "/discotecas-moviles-en-galicia",
    imgSrc: "/mg%20eventos%20en%20galicia%20%20servicios/mg%20eventos%20en%20galicia%20%20servicios%20disco%20movil.jpg",
  },
  {
    heading: "Fotomatón",
    description: "Diversión y recuerdos únicos. Atrezzo y galería digital incluidos.",
    href: "/fotomaton-en-galicia",
    imgSrc: "/mg%20eventos%20en%20galicia%20%20servicios/mg%20eventos%20en%20galicia%20%20servicios%20fotomation.jpg",
  },
];

export default function DJFiestasPage() {
  return (
    <>
      <SchemaService
        serviceName="DJ para fiestas en Galicia"
        description="DJ para fiestas en Galicia: verbenas, cumpleaños, fiestas privadas. Sonido, iluminación y animación profesional."
        slug="/dj-para-fiestas-en-galicia"
      />
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: "DJ para fiestas en Galicia", href: "/dj-para-fiestas-en-galicia" },
        ]}
      />

      {/* Hero 3D compact */}
      <SyntheticHero
        compact
        textWhite
        primaryCtaAccent
        title="DJ para fiestas en Galicia"
        description="Transformamos cualquier celebración en un momento único. Verbenas, cumpleaños, fiestas privadas — llevamos la música, el sonido y la energía."
        badgeText="DJ para fiestas"
        badgeLabel="MG Eventos"
        ctaButtons={[
          { text: "Contáctanos", href: "/contacto", primary: true },
          { text: "Háblanos por WhatsApp", href: WHATSAPP_URL },
        ]}
        microDetails={[
          "+10 años de experiencia",
          "Verbenas y fiestas privadas",
          "Sonido e iluminación incluidos",
        ]}
        breadcrumbs={[
          { name: "Inicio", href: "/" },
          { name: "DJ para fiestas en Galicia", href: "/dj-para-fiestas-en-galicia" },
        ]}
      />

      <ValueProps
        items={[
          {
            icon: Tent,
            title: "DJ para verbenas",
            description:
              "Las fiestas de parroquia y celebraciones al aire libre en Galicia tienen algo especial: reúnen a vecinos, amigos y visitantes en torno a la música.",
          },
          {
            icon: Users,
            title: "Reuniones familiares y de amigos",
            description:
              "Ya sea un aniversario, una comunión o una simple quedada entre amigos, la música transforma cualquier espacio en una pista de baile.",
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
        tag="Algo íntimo"
        title="DJ para fiestas privadas en Galicia"
        paragraphs={[
          "En MG Eventos sabemos que una celebración en casa, en una finca o en un local especial necesita un toque único. Por eso ofrecemos un DJ para fiestas privadas en Galicia capaz de adaptar la música y la animación al ambiente que quieras crear. Desde reuniones familiares más íntimas hasta celebraciones con amigos o pequeños grupos de empresa.",
          "La ventaja de contar con un servicio profesional es que no tienes que preocuparte de nada: llevamos sonido, iluminación y toda la energía para que la música no falte en ningún momento. Además, nuestro DJ para fiestas privadas en Galicia se desplaza a cualquier lugar de la comunidad.",
        ]}
        listItems={["Cumpleaños", "Aniversarios", "Comuniones", "Fiestas íntimas"]}
        cta={{ text: "Hablemos de tu fiesta", href: "/contacto" }}
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
        descriptionWhite
        badge="Presupuesto sin compromiso"
        title="Solicita presupuesto para tu fiesta con DJ en Galicia"
        description="¿Quieres que tu próxima celebración sea inolvidable? En MG Eventos ponemos a tu disposición un DJ para fiestas en Galicia con sonido, iluminación y animación adaptados a cada ocasión. Te asesoramos sin compromiso y diseñamos un plan a medida."
        primaryButton={{ text: "Contáctanos", href: "/contacto", icon: "arrow", variant: "accent" }}
        secondaryButton={{ text: "WhatsApp directo", href: WHATSAPP_URL, icon: "whatsapp", variant: "whatsapp", external: true }}
      />

      {/* Sección enriquecida: La energía perfecta para cada fiesta */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#1a1740] to-secondary py-20 md:py-28">
        {/* Decoraciones de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-secondary/15 -translate-x-1/4 translate-y-1/4 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Columna izquierda — texto */}
            <div className="text-center md:text-left">
              <span className="inline-block text-accent font-heading font-semibold text-xs uppercase tracking-[0.2em] mb-4">
                Para todo tipo de fiestas
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
                La energía perfecta para cada fiesta
              </h2>
              <p className="text-white/85 font-body text-lg leading-relaxed mb-4">
                Si buscas un montaje completo, ponemos a tu disposición nuestro{" "}
                <Link
                  href="/escenario-movil-para-eventos"
                  className="text-accent font-semibold hover:text-accent/80 underline underline-offset-2 transition-colors"
                >
                  camión escenario
                </Link>
                , perfecto para fiestas patronales, conciertos y grandes celebraciones.
              </p>
              <p className="text-white/85 font-body text-lg leading-relaxed">
                Nuestras contrataciones incluyen mucho más que pinchar música: asesoramiento previo, montaje de sonido e iluminación,{" "}
                <Link
                  href="/discotecas-moviles-en-galicia"
                  className="text-accent font-semibold hover:text-accent/80 underline underline-offset-2 transition-colors"
                >
                  discomóvil
                </Link>{" "}
                y{" "}
                <Link
                  href="/fotomaton-en-galicia"
                  className="text-accent font-semibold hover:text-accent/80 underline underline-offset-2 transition-colors"
                >
                  fotomatón para fiestas
                </Link>
                . Nos encargamos de los detalles técnicos para que tú solo disfrutes.
              </p>

              <div className="mt-8 flex flex-col items-center md:items-stretch gap-3">
                {[
                  "Música adaptada a tu público y estilo",
                  "Montaje y desmontaje incluidos en el servicio",
                  "Desplazamiento a toda Galicia",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent/25 border border-accent/40 flex items-center justify-center">
                      <PartyPopper className="w-2.5 h-2.5 text-accent" />
                    </span>
                    <span className="text-white font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha — tarjetas de tipos de fiesta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Verbenas */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/12 border border-white/25 p-6 hover:bg-white/18 hover:border-white/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-secondary/35 border border-secondary/40 flex items-center justify-center mb-4">
                    <Tent className="w-5 h-5 text-violet-200" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">Verbenas y fiestas patronales</h3>
                  <p className="text-white/80 text-sm font-body leading-snug">
                    Ambiente festivo al aire libre con el sonido y la energía que merece tu pueblo.
                  </p>
                </div>
              </div>

              {/* Cumpleaños */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/12 border border-white/25 p-6 hover:bg-white/18 hover:border-white/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-accent/30 border border-accent/40 flex items-center justify-center mb-4">
                    <Cake className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">Cumpleaños y aniversarios</h3>
                  <p className="text-white/80 text-sm font-body leading-snug">
                    Desde los 18 hasta los 80. Lista personalizada para que cada invitado baile.
                  </p>
                </div>
              </div>

              {/* Reuniones y conciertos — ocupa ancho completo */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/12 border border-white/25 p-6 hover:bg-white/18 hover:border-white/40 transition-all duration-300 sm:col-span-2">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center">
                    <Music2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base mb-0.5">Conciertos y eventos en vivo</h3>
                    <p className="text-white/80 text-sm font-body">
                      Escenario, sonido profesional e iluminación espectacular para los eventos más grandes.
                    </p>
                  </div>
                  <Link
                    href="/escenario-movil-para-eventos"
                    className="ml-auto flex-shrink-0 text-xs font-heading font-semibold text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all"
                  >
                    Ver escenario →
                  </Link>
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
                Completa tu fiesta con más servicios
              </h2>
              <p className="text-white/60 font-body text-lg mt-3 max-w-xl mx-auto">
                Combina el DJ con otros servicios para que tu fiesta sea una experiencia completa e inolvidable
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
                <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl font-heading leading-tight mb-3">
                  ¿Por qué MG Eventos?
                </h2>
                <p className="text-accent font-heading font-semibold text-lg mb-5">
                  Servicio de DJ con experiencia y cercanía
                </p>
                <p className="text-white font-body text-lg leading-relaxed max-w-md">
                  En MG Eventos ofrecemos un servicio de DJ en Galicia pensado para que disfrutes sin preocupaciones. Nuestro equipo no solo lleva la música, también aporta la energía y la confianza de un profesional que sabe adaptarse a cada tipo de público y celebración.
                </p>
              </div>

              {/* CTAs derecha */}
              <div className="flex flex-col items-center md:items-center justify-center gap-4">
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

      {/* CTA final — invitación a contacto */}
      <CallToAction
        layout="card"
        badge="¡Cuéntanos tu fiesta!"
        title="¿Tienes una celebración en mente?"
        description="Llámanos, escríbenos o rellena el formulario. En MG Eventos te asesoramos sin compromiso y preparamos un presupuesto a medida para que tu fiesta sea exactamente como la imaginas."
        primaryButton={{ text: "Ir al formulario de contacto", href: "/contacto", icon: "arrow" }}
        secondaryButton={{ text: "Háblanos por WhatsApp", href: WHATSAPP_URL, icon: "whatsapp", variant: "whatsapp", external: true }}
      />
    </>
  );
}
