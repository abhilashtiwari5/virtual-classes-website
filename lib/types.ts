export type SiteConfig = {
  siteName: string;
  tagline: string;
  instructorName: string;
  email: string;
  whatsapp: string;
  phone: string;
  location: string;
  socialLinks: {
    linkedin: string;
    github: string;
    youtube: string;
    instagram: string;
  };
  ga4MeasurementId: string;
  formspreeEndpoint: string;
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  price: string;
  duration: string;
  level: string;
  format: string;
  curriculum: string[];
  badge: string;
  image: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
  avatar: string;
};

export type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export type SeoPage = {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
};

export type SeoConfig = {
  home: SeoPage;
  courses: SeoPage;
  about: SeoPage;
  contact: SeoPage;
};
