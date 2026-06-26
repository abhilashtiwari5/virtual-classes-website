import { MessageCircle } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import { loadConfig } from "@/lib/loadConfig";
import { createPageMetadata } from "@/lib/metadata";
import type { Course, SeoConfig, SiteConfig } from "@/lib/types";

const seo = loadConfig<SeoConfig>("seo.json");
const site = loadConfig<SiteConfig>("site.json");
const courses = loadConfig<Course[]>("courses.json");

export const metadata = createPageMetadata(seo.contact, "/contact/");

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=Hi%20Abhilash%2C%20I%27m%20interested%20in%20your%20courses`;

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-extrabold text-slate-900">Contact & Enroll</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <section>
          <h2 className="text-2xl font-bold text-slate-900">Send an Enquiry</h2>
          <p className="mt-2 text-slate-600">Fill this form and I&apos;ll respond within 24 hours.</p>
          <div className="mt-4">
            <EnquiryForm courses={courses} formspreeEndpoint={site.formspreeEndpoint} />
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-900">Prefer WhatsApp?</h2>
          <p className="mt-3 text-slate-700">Get a quick response by messaging me directly on WhatsApp.</p>
          <a
            href={whatsappUrl}
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-green-500 px-5 py-3 font-semibold text-white hover:bg-green-600"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
          <div className="mt-6 space-y-1 text-sm text-slate-600">
            <p><strong>Email:</strong> {site.email}</p>
            <p><strong>Phone:</strong> {site.phone}</p>
            <p><strong>Location:</strong> {site.location}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
