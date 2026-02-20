import { Metadata } from "next";
import Link from "next/link";
import { Tent, Users, Cake, Music2, PartyPopper } from "lucide-react";
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
    imgSrc: "https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    heading: "Disco móvil",
    description: "La fiesta donde tú quieras. Sonido de alta calidad e iluminación espectacular.",
    href: "/discotecas-moviles-en-galicia",
    imgSrc: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    heading: "Fotomatón",
    description: "Diversión y recuerdos únicos. Atrezzo y galería digital incluidos.",
    href: "/fotomaton-en-galicia",
    imgSrc: "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        title="DJ para fiestas en Galicia"
        description="Transformamos cualquier celebración en un momento único. Verbenas, cumpleaños, fiestas privadas — llevamos la música, el sonido y la energía."
        badgeText="DJ para fiestas"
        badgeLabel="MG Eventos"
        ctaButtons={[
          { text: "¡Contáctanos!", href: "/contacto", primary: true },
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

      <ServiceDetailBlock
        tag="Algo íntimo"
        title="DJ para fiestas privadas en Galicia"
        paragraphs={[
          "En MG Eventos sabemos que una celebración en casa, en una finca o en un local especial necesita un toque único. Por eso ofrecemos un DJ para fiestas privadas en Galicia capaz de adaptar la música y la animación al ambiente que quieras crear. Desde reuniones familiares más íntimas hasta celebraciones con amigos o pequeños grupos de empresa.",
          "La ventaja de contar con un servicio profesional es que no tienes que preocuparte de nada: llevamos sonido, iluminación y toda la energía para que la música no falte en ningún momento. Además, nuestro DJ para fiestas privadas en Galicia se desplaza a cualquier lugar de la comunidad.",
        ]}
        listItems={["Cumpleaños", "Aniversarios", "Comuniones", "Fiestas íntimas"]}
        cta={{ text: "Hablemos de tu fiesta", href: "/contacto" }}
        stats={[
          { value: 10, prefix: "+", label: "Años de experiencia" },
          { value: 1600, prefix: "+", label: "Fiestas animadas" },
          { value: 2000, prefix: "+", label: "Clientes satisfechos" },
        ]}
      />

      {/* CTA presupuesto — tarjeta oscura */}
      <CallToAction
        layout="card"
        dark
        badge="Presupuesto sin compromiso"
        title="Solicita presupuesto para tu fiesta con DJ en Galicia"
        description="¿Quieres que tu próxima celebración sea inolvidable? En MG Eventos ponemos a tu disposición un DJ para fiestas en Galicia con sonido, iluminación y animación adaptados a cada ocasión. Te asesoramos sin compromiso y diseñamos un plan a medida."
        primaryButton={{ text: "¡Contáctanos!", href: "/contacto", icon: "arrow" }}
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
            <div>
              <span className="inline-block text-accent font-heading font-semibold text-xs uppercase tracking-[0.2em] mb-4">
                Para todo tipo de fiestas
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
                La energía perfecta para cada fiesta
              </h2>
              <p className="text-white/70 font-body text-lg leading-relaxed mb-4">
                Si buscas un montaje completo, ponemos a tu disposición nuestro{" "}
                <Link
                  href="/escenario-movil-para-eventos"
                  className="text-accent font-semibold hover:text-accent/80 underline underline-offset-2 transition-colors"
                >
                  camión escenario
                </Link>
                , perfecto para fiestas patronales, conciertos y grandes celebraciones.
              </p>
              <p className="text-white/70 font-body text-lg leading-relaxed">
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

              <div className="mt-8 flex flex-col gap-3">
                {[
                  "Música adaptada a tu público y estilo",
                  "Montaje y desmontaje incluidos en el servicio",
                  "Desplazamiento a toda Galicia",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                      <PartyPopper className="w-2.5 h-2.5 text-accent" />
                    </span>
                    <span className="text-white/80 font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha — tarjetas de tipos de fiesta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Verbenas */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                    <Tent className="w-5 h-5 text-violet-300" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">Verbenas y fiestas patronales</h3>
                  <p className="text-white/50 text-sm font-body leading-snug">
                    Ambiente festivo al aire libre con el sonido y la energía que merece tu pueblo.
                  </p>
                </div>
              </div>

              {/* Cumpleaños */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <Cake className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">Cumpleaños y aniversarios</h3>
                  <p className="text-white/50 text-sm font-body leading-snug">
                    Desde los 18 hasta los 80. Lista personalizada para que cada invitado baile.
                  </p>
                </div>
              </div>

              {/* Reuniones y conciertos — ocupa ancho completo */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 sm:col-span-2">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Music2 className="w-6 h-6 text-white/70" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base mb-0.5">Conciertos y eventos en vivo</h3>
                    <p className="text-white/50 text-sm font-body">
                      Escenario, sonido profesional e iluminación espectacular para los eventos más grandes.
                    </p>
                  </div>
                  <Link
                    href="/escenario-movil-para-eventos"
                    className="ml-auto flex-shrink-0 text-xs font-heading font-semibold text-white/50 group-hover:text-white/80 group-hover:translate-x-1 transition-all"
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

      <WhyMGSection
        subtitle="Servicio de DJ con experiencia y cercanía"
        description="En MG Eventos ofrecemos un servicio de DJ en Galicia pensado para que disfrutes sin preocupaciones. Nuestro equipo no solo lleva la música, también aporta la energía y la confianza de un profesional que sabe adaptarse a cada tipo de público y celebración."
        stats={[
          { value: 10, prefix: "+", label: "Años de experiencia" },
          { value: 2000, prefix: "+", label: "Clientes satisfechos" },
          { value: 1600, prefix: "+", label: "Eventos y fiestas" },
        ]}
      />

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
