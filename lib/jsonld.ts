import type { Course, FAQ, SiteConfig } from "@/lib/types";

const BASE_URL = "https://codewithabhilash.com";

export function organizationJsonLd(site: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.siteName,
    url: BASE_URL,
    logo: `${BASE_URL}/og-image.jpg`,
    contactPoint: {
      "@type": "ContactPoint",
      email: site.email,
      telephone: site.phone,
      contactType: "customer support",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: Object.values(site.socialLinks).filter(Boolean),
  };
}

export function websiteJsonLd(site: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.siteName,
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/courses/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function personJsonLd(site: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.instructorName,
    jobTitle: "Web Development Instructor",
    email: site.email,
    telephone: site.phone,
    worksFor: {
      "@type": "Organization",
      name: site.siteName,
    },
    sameAs: Object.values(site.socialLinks).filter(Boolean),
  };
}

export function courseJsonLd(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.longDescription,
    provider: {
      "@type": "Organization",
      name: "CodeWithAbhilash",
      sameAs: BASE_URL,
    },
    educationalLevel: course.level,
    offers: {
      "@type": "Offer",
      price: course.price.replace(/[^\d]/g, ""),
      priceCurrency: "INR",
      category: course.format,
    },
    url: `${BASE_URL}/courses/${course.slug}/`,
  };
}

export function faqJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
