import { JsonLd } from "./JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

interface SchemaServiceProps {
  serviceName: string;
  description: string;
  slug: string;
}

export function SchemaService({
  serviceName,
  description,
  slug,
}: SchemaServiceProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: serviceName,
        description,
        url: `${SITE_URL}${slug}`,
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Galicia, España",
        },
      }}
    />
  );
}
