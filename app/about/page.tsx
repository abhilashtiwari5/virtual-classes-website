import Script from "next/script";
import { loadConfig } from "@/lib/loadConfig";
import { createPageMetadata } from "@/lib/metadata";
import { personJsonLd } from "@/lib/jsonld";
import type { SeoConfig, SiteConfig } from "@/lib/types";

const seo = loadConfig<SeoConfig>("seo.json");
const site = loadConfig<SiteConfig>("site.json");

export const metadata = createPageMetadata(seo.about, "/about/");

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-extrabold text-slate-900">About {site.instructorName}</h1>
      <section className="mt-8 space-y-4 text-slate-700">
        <p>
          I&apos;m a passionate web developer and mentor helping students build real-world skills in React, JavaScript,
          HTML, CSS, and modern web development.
        </p>
        <p>
          My teaching style is simple: live coding, practical assignments, and continuous feedback so every student
          gains confidence quickly.
        </p>
        <h2 className="pt-2 text-2xl font-bold text-slate-900">Core Skills</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>React.js and modern frontend architecture</li>
          <li>JavaScript fundamentals to advanced patterns</li>
          <li>Responsive web design using HTML5 and CSS3</li>
          <li>Project-based mentoring and interview preparation</li>
        </ul>
      </section>

      <Script id="person-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(site)) }} />
    </main>
  );
}
