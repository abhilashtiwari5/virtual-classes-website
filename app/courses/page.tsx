import type { Metadata } from "next";
import CourseFilterGrid from "@/components/CourseFilterGrid";
import { loadConfig } from "@/lib/loadConfig";
import { createPageMetadata } from "@/lib/metadata";
import type { Course, SeoConfig } from "@/lib/types";

const seo = loadConfig<SeoConfig>("seo.json");
const courses = loadConfig<Course[]>("courses.json");

export const metadata: Metadata = createPageMetadata(seo.courses, "/courses/");

export default function CoursesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-extrabold text-slate-900">All Courses</h1>
      <p className="mt-3 max-w-2xl text-slate-600">Choose from beginner-friendly live courses and start building your coding career.</p>
      <div className="mt-10">
        <CourseFilterGrid courses={courses} />
      </div>
    </main>
  );
}
