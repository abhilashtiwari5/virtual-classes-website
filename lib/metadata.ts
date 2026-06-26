import type { Metadata } from "next";
import type { SeoPage } from "@/lib/types";

const BASE_URL = "https://codewithabhilash.com";

export function createPageMetadata(seo: SeoPage, path: string): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      type: "website",
      images: [{ url: seo.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage],
    },
  };
}
