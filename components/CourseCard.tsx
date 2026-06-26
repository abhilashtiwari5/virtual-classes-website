import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/types";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <Image
        src={`${BASE_PATH}${course.image}`}
        alt={`${course.title} course cover image`}
        width={600}
        height={340}
        className="h-44 w-full object-cover"
        loading="lazy"
      />
      <div className="p-5">
        <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-slate-900">{course.badge}</span>
        <h3 className="mt-3 text-xl font-bold text-slate-900">{course.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{course.shortDescription}</p>
        <ul className="mt-3 space-y-1 text-sm text-slate-700">
          <li><strong>Level:</strong> {course.level}</li>
          <li><strong>Duration:</strong> {course.duration}</li>
          <li><strong>Price:</strong> {course.price}</li>
        </ul>
        <Link href={`/courses/${course.slug}`} className="mt-4 inline-block font-semibold text-indigo-600 hover:text-indigo-700">
          Learn More →
        </Link>
      </div>
    </article>
  );
}
