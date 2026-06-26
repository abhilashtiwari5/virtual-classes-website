import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({ whatsapp }: { whatsapp: string }) {
  const whatsappUrl = `https://wa.me/${whatsapp}?text=Hi%20Abhilash%2C%20I%27m%20interested%20in%20your%20courses`;

  return (
    <a
      href={whatsappUrl}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-600"
    >
      <MessageCircle size={18} /> WhatsApp
    </a>
  );
}
