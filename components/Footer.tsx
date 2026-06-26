import Link from "next/link";
import { ExternalLink, Mail, MessageCircle } from "lucide-react";
import type { SiteConfig } from "@/lib/types";

export default function Footer({ site }: { site: SiteConfig }) {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=Hi%20Abhilash%2C%20I%27m%20interested%20in%20your%20courses`;

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <section>
          <h2 className="text-lg font-semibold text-white">{site.siteName}</h2>
          <p className="mt-2 text-sm text-slate-300">{site.tagline}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Connect</h2>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1 hover:text-white" aria-label="Email"><Mail size={18} /> Email</a>
            {site.socialLinks.linkedin && <a href={site.socialLinks.linkedin} className="inline-flex items-center gap-1 hover:text-white" aria-label="LinkedIn">LinkedIn <ExternalLink size={14} /></a>}
            {site.socialLinks.github && <a href={site.socialLinks.github} className="inline-flex items-center gap-1 hover:text-white" aria-label="GitHub">GitHub <ExternalLink size={14} /></a>}
            <a href={whatsappUrl} className="inline-flex items-center gap-1 hover:text-white" aria-label="Chat on WhatsApp"><MessageCircle size={18} /> WhatsApp</a>
          </div>
          <p className="mt-3 text-sm text-slate-300">{site.email}</p>
        </section>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} {site.siteName}. All rights reserved.
      </div>
    </footer>
  );
}
