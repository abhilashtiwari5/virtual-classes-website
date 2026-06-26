import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { loadConfig } from "@/lib/loadConfig";
import { courseJsonLd } from "@/lib/jsonld";
import type { Course } from "@/lib/types";

const courses = loadConfig<Course[]>("courses.json");

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found",
      description: "Requested course could not be found.",
    };
  }

  const path = `/courses/${course.slug}/`;

  return {
    metadataBase: new URL("https://codewithabhilash.com"),
    title: course.seo.title,
    description: course.seo.description,
    keywords: course.seo.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: course.seo.title,
      description: course.seo.description,
      type: "website",
      url: `https://codewithabhilash.com${path}`,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: course.seo.title,
      description: course.seo.description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <article className="grid gap-10 lg:grid-cols-2">
        <section>
          <h1 className="text-4xl font-extrabold text-slate-900">{course.title}</h1>
          <p className="mt-4 text-slate-600">{course.longDescription}</p>
          <ul className="mt-6 space-y-2 text-slate-700">
            <li><strong>Level:</strong> {course.level}</li>
            <li><strong>Duration:</strong> {course.duration}</li>
            <li><strong>Format:</strong> {course.format}</li>
            <li><strong>Price:</strong> {course.price}</li>
          </ul>
          <h2 className="mt-8 text-2xl font-bold text-slate-900">Curriculum</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
            {course.curriculum.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
          <Link href="/contact" className="mt-8 inline-block rounded-md bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700">
            Enroll in this Course
          </Link>
        </section>

        <section>
          <Image
            src={course.image}
            alt={`${course.title} detailed course cover image`}
            width={700}
            height={420}
            className="w-full rounded-xl border border-slate-200 object-cover"
            priority
          />
        </section>
      </article>

      <Script id={`course-jsonld-${course.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd(course)) }} />
    </main>
  );
}
