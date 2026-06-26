"use client";

import { useState } from "react";
import type { Course } from "@/lib/types";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  course: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  course: "",
  message: "",
};

export default function EnquiryForm({
  courses,
  formspreeEndpoint,
}: {
  courses: Course[];
  formspreeEndpoint: string;
}) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.email.trim()) nextErrors.email = "Valid email is required.";
    if (!form.course) nextErrors.course = "Please select a course.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    if (!validate()) return;

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm(initialState);
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-slate-700">Full Name</label>
        <input id="fullName" name="fullName" required className="w-full rounded-md border border-slate-300 px-3 py-2" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
        {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">Email</label>
        <input id="email" name="email" type="email" required className="w-full rounded-md border border-slate-300 px-3 py-2" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">Phone (optional)</label>
        <input id="phone" name="phone" className="w-full rounded-md border border-slate-300 px-3 py-2" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      </div>

      <div>
        <label htmlFor="course" className="mb-1 block text-sm font-medium text-slate-700">Course Interested In</label>
        <select id="course" name="course" required className="w-full rounded-md border border-slate-300 px-3 py-2" value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })}>
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.title}>{course.title}</option>
          ))}
        </select>
        {errors.course && <p className="mt-1 text-sm text-red-600">{errors.course}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">Message</label>
        <textarea id="message" name="message" required rows={4} className="w-full rounded-md border border-slate-300 px-3 py-2" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      <button type="submit" className="w-full rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">
        Submit Enquiry
      </button>

      {status === "success" && <p className="text-sm font-medium text-green-700">✅ Thank you! I&apos;ll get back to you within 24 hours.</p>}
      {status === "error" && <p className="text-sm font-medium text-red-700">❌ Something went wrong. Please try WhatsApp instead.</p>}
    </form>
  );
}
