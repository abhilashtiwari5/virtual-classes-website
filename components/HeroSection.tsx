import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { SiteConfig } from "@/lib/types";

export default function HeroSection({ site }: { site: SiteConfig }) {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=Hi%20Abhilash%2C%20I%27m%20interested%20in%20your%20courses`;

  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">Learn to Code. Live. Online. 1-on-1.</h1>
        <p className="mt-4 max-w-2xl text-lg text-indigo-100">
          Master React, JavaScript, HTML & CSS, and Web Development basics with interactive live sessions.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/courses" className="rounded-md bg-white px-5 py-3 font-semibold text-indigo-700 hover:bg-slate-100">
            Explore Courses
          </Link>
          <a
            href={whatsappUrl}
            className="inline-flex items-center gap-2 rounded-md bg-green-500 px-5 py-3 font-semibold text-white hover:bg-green-600"
          >
            <MessageCircle size={18} /> WhatsApp Me Now
          </a>
        </div>
      </div>
    </section>
  );
}
