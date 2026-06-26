"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/lib/types";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
      <div className="mt-6 space-y-3">
        {faqs.map((faq) => {
          const isOpen = activeId === faq.id;
          return (
            <article key={faq.id} className="rounded-lg border border-slate-200 bg-white">
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-4 text-left"
                onClick={() => setActiveId(isOpen ? null : faq.id)}
              >
                <span className="font-medium text-slate-900">{faq.question}</span>
                <ChevronDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} size={18} />
              </button>
              <div className={`overflow-hidden px-4 transition-all duration-300 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}>
                <p className="text-sm text-slate-600">{faq.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
