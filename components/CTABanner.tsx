import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function CTABanner({ whatsapp }: { whatsapp: string }) {
  const whatsappUrl = `https://wa.me/${whatsapp}?text=Hi%20Abhilash%2C%20I%27m%20interested%20in%20your%20courses`;

  return (
    <section className="bg-indigo-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold">Ready to Start Your Coding Journey?</h2>
          <p className="mt-2 text-indigo-100">Enroll today and start building real-world projects with live guidance.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-md bg-white px-5 py-3 font-semibold text-indigo-700 hover:bg-slate-100">
            Enroll Now
          </Link>
          <a href={whatsappUrl} className="inline-flex items-center gap-2 rounded-md bg-green-500 px-5 py-3 font-semibold text-white hover:bg-green-600">
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
