import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/types";

export default function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold text-slate-900">What Students Say</h2>
      <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="min-w-[280px] flex-1 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
                {testimonial.avatar}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                <p className="text-sm text-slate-500">{testimonial.role} • {testimonial.company}</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1 text-yellow-500">
              {Array.from({ length: testimonial.rating }).map((_, idx) => (
                <Star key={`${testimonial.id}-star-${idx}`} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="mt-3 text-sm text-slate-600">“{testimonial.review}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}
