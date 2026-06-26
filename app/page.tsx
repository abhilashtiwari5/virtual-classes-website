import Script from "next/script";
import HeroSection from "@/components/HeroSection";
import CourseCard from "@/components/CourseCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import { loadConfig } from "@/lib/loadConfig";
import { createPageMetadata } from "@/lib/metadata";
import { faqJsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import type { Course, FAQ, SeoConfig, SiteConfig, Testimonial } from "@/lib/types";

const seo = loadConfig<SeoConfig>("seo.json");
const site = loadConfig<SiteConfig>("site.json");
const courses = loadConfig<Course[]>("courses.json");
const testimonials = loadConfig<Testimonial[]>("testimonials.json");
const faqs = loadConfig<FAQ[]>("faqs.json");

export const metadata = createPageMetadata(seo.home, "/");

const whyChoose = [
  "Personalized Mentorship",
  "Live Interactive Sessions",
  "Project-Based Learning",
  "Affordable Pricing",
  "Course Completion Certificate",
  "Flexible Schedules",
];

export default function Home() {
  return (
    <main>
      <HeroSection site={site} />

      <section className="border-b border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-sm font-semibold text-slate-700 md:text-base">
          50+ Students Trained | 4 Courses Available | Live Interactive Sessions | Certificate Provided
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Featured Courses</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900">Why Learn With Me</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <article key={item} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider testimonials={testimonials} />
      <FAQAccordion faqs={faqs} />
      <CTABanner whatsapp={site.whatsapp} />

      <Script id="organization-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(site)) }} />
      <Script id="website-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd(site)) }} />
      <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
    </main>
  );
}
