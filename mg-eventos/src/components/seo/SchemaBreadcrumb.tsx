import { JsonLd } from "./JsonLd";
import { SITE_URL } from "@/lib/constants";
import { BreadcrumbItem } from "@/types";

interface SchemaBreadcrumbProps {
  items: BreadcrumbItem[];
}

export function SchemaBreadcrumb({ items }: SchemaBreadcrumbProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${SITE_URL}${item.href}`,
        })),
      }}
    />
  );
}
