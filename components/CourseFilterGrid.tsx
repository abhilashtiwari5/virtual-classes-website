"use client";

import { useMemo, useState } from "react";
import CourseCard from "@/components/CourseCard";
import type { Course } from "@/lib/types";

export default function CourseFilterGrid({ courses }: { courses: Course[] }) {
  const levels = useMemo(() => ["All", ...new Set(courses.map((course) => course.level))], [courses]);
  const [activeLevel, setActiveLevel] = useState("All");

  const filteredCourses = activeLevel === "All" ? courses : courses.filter((course) => course.level === activeLevel);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {levels.map((level) => (
          <button
            key={level}
            type="button"
            onClick={() => setActiveLevel(level)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${activeLevel === level ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700"}`}
          >
            {level}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </>
  );
}
