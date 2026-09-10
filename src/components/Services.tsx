import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { services } from '@/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { buildWhatsAppUrl } from './WhatsAppButton';

export default function Services() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="servicos" className="bg-gray-50 py-16 lg:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mb-14 text-center">
          <span className="section-eyebrow">Nossos serviços</span>
          <h2 className="section-title">
            Serviços para o seu pet
          </h2>
          <p className="section-subtitle">
            Da consulta de rotina à emergência 24 horas — tudo em um só lugar.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-gray-100/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-brand-600 shadow-md backdrop-blur">
                  <service.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-2 text-base font-bold text-gray-900">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
                <a
                  href={buildWhatsAppUrl(`Olá! Gostaria de saber mais sobre ${service.title.toLowerCase()} na PetClin.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  Saber mais
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-gray-500">Tem dúvidas sobre qual serviço é o ideal para o seu pet?</p>
          <a
            href={buildWhatsAppUrl('Olá! Gostaria de saber mais sobre os serviços da PetClin.')}
            target="_blank"
            rel="noopener noreferrer"
            className="pc-btn-wa"
          >
            <MessageCircle className="h-5 w-5" />
            Falar com a PetClin
          </a>
        </div>
      </div>
    </section>
  );
}
