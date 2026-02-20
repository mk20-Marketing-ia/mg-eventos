import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contacto — MG Eventos | Asesoramiento para fiestas",
  description:
    "Contáctanos para contratar DJ, discomóvil, fotomatón o escenario móvil en Galicia. Te asesoramos sin compromiso. Llámanos: 636 20 33 45.",
  slug: "/contacto",
  ogImage: "/og/contacto.jpg",
});

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
