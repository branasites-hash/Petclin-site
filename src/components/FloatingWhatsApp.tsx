import { MessageCircle } from 'lucide-react';
import { company } from '@/constants';

export default function FloatingWhatsApp() {
  return (
    <a
      href={company.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-2xl shadow-whatsapp/40 transition-all duration-200 hover:scale-110 hover:shadow-glow-brand active:scale-95 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-accent-500 ring-2 ring-white" />
      </span>
      {/* Tooltip on hover (desktop) */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 lg:block">
        Fale conosco
      </span>
    </a>
  );
}
