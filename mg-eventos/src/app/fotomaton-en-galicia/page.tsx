import { Metadata } from "next";
import Link from "next/link";
import { Camera, ImageIcon, Users, Heart, Music, Smile, Star } from "lucide-react";
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
  title: "Fotomatón en Galicia — Alquiler para bodas y fiestas",
  description:
    "Alquila un fotomatón en Galicia para bodas, fiestas y eventos. Atrezzo, galería digital y diversión asegurada. Presupuesto sin compromiso. MG Eventos.",
  slug: "/fotomaton-en-galicia",
  ogImage: "/og/fotomaton.jpg",
});

const serviciosRelacionados: ServiceCardItem[] = [
  {
    heading: "DJ para bodas",
    description: "Música perfecta para cada momento de vuestro gran día. Lista personalizada.",
    href: "/dj-para-bodas-en-galicia",
    imgSrc: "https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    heading: "Disco móvil",
    description: "La fiesta donde tú quieras. Sonido e iluminación espectacular incluidos.",
    href: "/discotecas-moviles-en-galicia",
    imgSrc: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    heading: "DJ para eventos",
    description: "Profesionalidad y adaptación para cualquier tipo de evento o celebración.",
    href: "/dj-para-eventos-en-galicia",
    imgSrc: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function FotomatonPage() {
  return (
    <>
      <SchemaService
        serviceName="Fotomatón en Galicia"
        description="Alquila un fotomatón en Galicia para bodas, fiestas y eventos. Atrezzo, galería digital y diversión asegurada."
        slug="/fotomaton-en-galicia"
      />
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: "Fotomatón en Galicia", href: "/fotomaton-en-galicia" },
        ]}
      />

      {/* Hero 3D compact */}
      <SyntheticHero
        compact
        title="Fotomatón en Galicia"
        description="Risas, atrezzo y recuerdos para todos tus invitados. El rincón donde todos quieren estar, desde los más pequeños hasta los más mayores."
        badgeText="Fotomatón"
        badgeLabel="MG Eventos"
        ctaButtons={[
          { text: "¡Contáctanos!", href: "/contacto", primary: true },
          { text: "Háblanos por WhatsApp", href: WHATSAPP_URL },
        ]}
        microDetails={[
          "+10 años de experiencia",
          "Atrezzo incluido",
          "Galería digital",
        ]}
        breadcrumbs={[
          { name: "Inicio", href: "/" },
          { name: "Fotomatón en Galicia", href: "/fotomaton-en-galicia" },
        ]}
      />

      <ValueProps
        items={[
          {
            icon: Camera,
            title: "Diversión y recuerdos",
            description:
              "La clave está en que une a los invitados en un ambiente desenfadado, generando momentos que complementan a la perfección la emoción y el estilo de cualquier evento.",
          },
          {
            icon: ImageIcon,
            title: "Galería digital",
            description:
              "Después del evento, tendrás acceso a un álbum con todos los momentos de tus invitados: risas, poses y anécdotas que quedarán para siempre.",
          },
          {
            icon: Users,
            title: "Para todos los invitados",
            description:
              "Lo que más sorprende es que siempre hay movimiento: grupos de amigos, familias enteras y hasta los abuelos disfrutan participar por igual.",
          },
        ]}
      />

      <ServiceDetailBlock
        tag="Para fiestas"
        title="Fotomatón para eventos"
        paragraphs={[
          "Una foto siempre es una excusa perfecta para echarse unas risas, y tener un fotomatón le da un punto diferente a la celebración. No se trata solo de fotos, sino de crear un rincón en el que todos —niños y mayores— se divierten juntos probando complementos, inventando poses y compartiendo risas.",
        ]}
        listItems={[
          "Atrezzo variado y original",
          "Galería digital compartida",
          "Risas y diversión aseguradas",
          "Personalización con el estilo del evento",
        ]}
        cta={{ text: "Pregúntanos sin compromiso", href: "/contacto" }}
        stats={[
          { value: 10, prefix: "+", label: "Años de experiencia" },
          { value: 1600, prefix: "+", label: "Eventos con fotomatón" },
          { value: 2000, prefix: "+", label: "Clientes satisfechos" },
        ]}
      />

      {/* CTA presupuesto — tarjeta oscura */}
      <CallToAction
        layout="card"
        dark
        badge="Presupuesto sin compromiso"
        title="Solicita presupuesto para tu espejo fotomatón"
        description="Tu boda o fiesta es un día único y merece detalles que lo hagan inolvidable. Con el fotomatón de MG Eventos, tus invitados tendrán un espacio para divertirse, reír y guardar recuerdos especiales. Nos adaptamos a tu estilo y cuidamos cada detalle."
        primaryButton={{ text: "Hablemos", href: "/contacto", icon: "arrow" }}
        secondaryButton={{ text: "WhatsApp directo", href: WHATSAPP_URL, icon: "whatsapp", variant: "whatsapp", external: true }}
      />

      {/* Sección enriquecida: El rincón favorito de tu boda */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#1a1740] to-secondary py-20 md:py-28">
        {/* Decoraciones de fondo */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent/10 -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-secondary/15 translate-x-1/4 translate-y-1/4 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Columna izquierda — texto */}
            <div>
              <span className="inline-block text-accent font-heading font-semibold text-xs uppercase tracking-[0.2em] mb-4">
                Tu gran día
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
                El rincón favorito de tu boda
              </h2>
              <p className="text-white/70 font-body text-lg leading-relaxed mb-4">
                Cada boda es diferente, y por eso ofrecemos un espejo fotomatón que se adapta al estilo de tu celebración. Desde ambientes elegantes y románticos hasta fiestas modernas y desenfadadas, puede personalizarse para encajar con la decoración y la temática del evento.
              </p>
              <p className="text-white/70 font-body text-lg leading-relaxed">
                Si buscas completar la experiencia, combinamos el fotomatón con nuestro{" "}
                <Link
                  href="/dj-para-bodas-en-galicia"
                  className="text-accent font-semibold hover:text-accent/80 underline underline-offset-2 transition-colors"
                >
                  DJ para bodas en Galicia
                </Link>{" "}
                para que música, fotos y diversión vayan de la mano durante toda la celebración.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {[
                  "Se adapta a cualquier decoración y estilo de boda",
                  "Operador incluido para ayudar a los invitados",
                  "Impresión instantánea y galería digital en tiempo real",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                      <Star className="w-2.5 h-2.5 text-accent" />
                    </span>
                    <span className="text-white/80 font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha — tarjetas de ocasiones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Bodas */}
              <Link
                href="/dj-para-bodas-en-galicia"
                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <Heart className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">
                    Fotomatón para bodas
                  </h3>
                  <p className="text-white/50 text-sm font-body leading-snug">
                    El complemento perfecto para el gran día. Recuerdos para siempre.
                  </p>
                  <span className="inline-block mt-3 text-xs font-heading font-semibold text-accent group-hover:translate-x-1 transition-transform">
                    Ver DJ bodas →
                  </span>
                </div>
              </Link>

              {/* Fiestas */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                    <Smile className="w-5 h-5 text-violet-300" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">
                    Fiestas y cumpleaños
                  </h3>
                  <p className="text-white/50 text-sm font-body leading-snug">
                    Desde los 7 hasta los 77 años. Todos quieren una foto en el fotomatón.
                  </p>
                </div>
              </div>

              {/* Combo DJ + Fotomatón — ocupa ancho completo */}
              <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 sm:col-span-2">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light/10 to-transparent" />
                <div className="relative flex items-center gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Music className="w-6 h-6 text-white/70" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base mb-1">
                      Combo DJ + Fotomatón
                    </h3>
                    <p className="text-white/50 text-sm font-body">
                      Contrata ambos servicios juntos y consigue la experiencia completa para tu celebración al mejor precio.
                    </p>
                  </div>
                  <Link
                    href="/contacto"
                    className="ml-auto flex-shrink-0 text-xs font-heading font-semibold text-white/50 hover:text-white/80 hover:translate-x-1 transition-all"
                  >
                    Consultar →
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
                Completa tu evento con más servicios
              </h2>
              <p className="text-white/60 font-body text-lg mt-3 max-w-xl mx-auto">
                Combina el fotomatón con música en vivo para crear una experiencia que nadie olvidará
              </p>
            </div>
            <ColorChangeCards services={serviciosRelacionados} />
          </div>
        </div>
      </section>

      <WhyMGSection
        subtitle="Fotomatón con experiencia y cercanía"
        description="En MG Eventos lo hemos visto una y otra vez: mientras la música suena y la fiesta avanza, el fotomatón se convierte en el lugar donde todos quieren estar. Nuestro equipo cuida cada detalle para que tú solo tengas que preocuparte de disfrutar."
        stats={[
          { value: 10, prefix: "+", label: "Años de experiencia" },
          { value: 2000, prefix: "+", label: "Clientes satisfechos" },
          { value: 1600, prefix: "+", label: "Eventos y fiestas" },
        ]}
      />

      {/* CTA final */}
      <CallToAction
        layout="card"
        badge="¡Reserva tu fotomatón!"
        title="¿Lista tu fiesta para el fotomatón?"
        description="Cuéntanos tu celebración y te preparamos un presupuesto sin compromiso. Nos adaptamos a tu estilo, tus fechas y tu presupuesto para que el fotomatón sea un éxito."
        primaryButton={{ text: "Solicitar presupuesto", href: "/contacto", icon: "arrow" }}
        secondaryButton={{ text: "Háblanos por WhatsApp", href: WHATSAPP_URL, icon: "whatsapp", variant: "whatsapp", external: true }}
      />
    </>
  );
}
