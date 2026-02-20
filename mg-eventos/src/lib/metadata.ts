import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

interface CreateMetadataParams {
  title: string;
  description: string;
  slug?: string;
  ogImage?: string;
}

export function createMetadata({
  title,
  description,
  slug = "",
  ogImage = "/og/home.jpg",
}: CreateMetadataParams): Metadata {
  const url = `${SITE_URL}${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} | ${SITE_NAME}`,
        },
      ],
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
