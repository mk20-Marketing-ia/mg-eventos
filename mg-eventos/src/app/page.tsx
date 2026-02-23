import { Metadata } from "next";
import { Sparkles, Heart, Music, Check, MessageCircle, ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { WHATSAPP_URL } from "@/lib/constants";
import dynamic from "next/dynamic";
import Image from "next/image";
import { CollaboratorsSection } from "@/components/sections/CollaboratorsSection";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll";

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
        {/* Contenido post-expansión — estilo morado con textos originales */}
        <div className="relative rounded-3xl bg-gradient-to-br from-primary via-[#2d2875] to-secondary p-12 md:p-16 shadow-2xl overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-light/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Badge original */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-heading font-bold tracking-[0.15em] uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                DJ · Fotomatón · LED · Escenario
              </span>
            </div>

            {/* Descripción original */}
            <p className="text-white/90 font-body text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Somos animadores de fiesta en Galicia con +10 años creando momentos únicos.
              DJ, discomóvil, fotomatón, pantallas LED y escenario móvil para bodas, fiestas y eventos.
            </p>

            {/* Botones CTA originales */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <a
                href="/contacto"
                className="group relative px-10 py-4 rounded-xl text-base font-heading font-bold bg-secondary hover:bg-secondary/90 text-white shadow-xl shadow-secondary/30 transition-all overflow-hidden"
              >
                <span className="relative z-10">Pedir presupuesto</span>
                {/* Efecto shine al hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-xl text-base font-heading font-bold border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Háblanos por WhatsApp
              </a>
            </div>

            {/* Microdetalles originales */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-white/70 font-body">
              {[
                { icon: "⚡", text: "+10 años de experiencia" },
                { icon: "🎉", text: "Bodas, fiestas y empresas" },
                { icon: "📍", text: "Galicia y norte de Portugal" },
              ].map((d, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="text-lg">{d.icon}</span>
                  <span className="font-medium">{d.text}</span>
                </div>
              ))}
            </div>
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

      {/* Sobre MG Eventos — layout split: texto + galería parallax */}
      <section className="bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-center min-h-[40rem]">

            {/* Columna izquierda — texto */}
            <div className="py-16 lg:py-20 lg:pr-8">
              <span className="inline-block text-secondary font-heading font-semibold text-xs uppercase tracking-[0.2em] mb-4">
                Quiénes somos
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 leading-tight mb-6">
                Sobre MG Eventos
              </h2>
              <p className="text-neutral-600 font-body text-lg leading-relaxed mb-8">
                Cada evento tiene su propio carácter, y por eso no existe una
                fórmula única para animarlo. Lo que sí hay es experiencia,
                intuición y muchas ganas de pasarlo bien. En MG Eventos
                sabemos que una buena fiesta no se improvisa: se construye con
                energía, ritmo y un toque personal que hace que todos se
                sientan parte de la fiesta.
              </p>

              {/* Lista de tipos de evento */}
              <ul className="space-y-3 mb-10">
                {[
                  "Fiestas privadas",
                  "Bodas",
                  "Verbenas",
                  "Cumpleaños",
                  "Y el evento que tú quieras...",
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

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white font-heading font-semibold text-sm hover:bg-secondary/90 shadow-md shadow-secondary/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  ¡Háblanos por WhatsApp!
                </a>
                <a
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-secondary/20 text-secondary font-heading font-semibold text-sm hover:bg-secondary/5 transition-all"
                >
                  Ver servicios
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Columna derecha — galería parallax */}
            <div className="hidden lg:block relative">
              {/* Degradado superior para fundir con la sección */}
              <div className="absolute top-0 left-0 right-0 h-24 z-10 bg-gradient-to-b from-white to-transparent pointer-events-none" />
              {/* Degradado inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-24 z-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />

              <ParallaxScrollSecond
                images={[
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
                className="h-[42rem]"
              />
            </div>

            {/* Galería móvil — carrusel simple horizontal */}
            <div className="lg:hidden pb-12 -mx-4 px-4">
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className="flex-shrink-0 w-56 h-72 rounded-xl overflow-hidden snap-start"
                  >
                    <Image
                      src={`/images/imagenes%20verticales%20para%20la%20home/${n}.jpg`}
                      alt={`MG Eventos galería ${n}`}
                      width={400}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
