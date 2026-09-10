import { Phone, MapPin, Instagram } from 'lucide-react';
import { company } from '@/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import WhatsAppButton from './WhatsAppButton';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contato" className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 py-20 lg:py-28">
      {/* Decorative */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <div
        ref={ref}
        className={`relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8 reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <span className="section-eyebrow text-accent-400">Contato</span>
        <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          Precisa de ajuda com o seu pet?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
          Fale agora com a PetClin pelo WhatsApp. Estamos disponíveis 24 horas para atender você e o seu animal.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6">
          <WhatsAppButton
            label="Falar com a PetClin pelo WhatsApp"
            size="lg"
            className="px-10 py-4 text-base"
            message="Olá! Encontrei a PetClin pelo site e gostaria de entrar em contato."
          />

          <a
            href={company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-semibold text-white transition-colors hover:text-accent-300"
          >
            <Phone className="h-5 w-5" />
            {company.phone}
          </a>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={company.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-btn-light"
            >
              <Instagram className="h-5 w-5" />
              {company.instagram}
            </a>
            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-btn-light"
            >
              <MapPin className="h-5 w-5" />
              Ver no mapa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
