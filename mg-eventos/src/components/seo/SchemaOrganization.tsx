import { JsonLd } from "./JsonLd";
import { SITE_NAME, SITE_URL, PHONE_LINK, EMAIL } from "@/lib/constants";

export function SchemaOrganization() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        description:
          "Animadores de fiesta en Galicia con +10 años de experiencia. Música, sonido, iluminación y animación profesional para bodas, fiestas y eventos.",
        telephone: PHONE_LINK.replace("tel:", ""),
        email: EMAIL,
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Galicia, España",
        },
        knowsAbout: [
          "DJ para eventos",
          "Música para bodas",
          "Discoteca móvil",
          "Fotomatón",
          "Pantallas LED",
          "Escenario móvil",
        ],
      }}
    />
  );
}
