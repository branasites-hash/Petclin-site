import { differentials } from '@/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Differentials() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-16 lg:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mb-14 text-center">
          <span className="section-eyebrow">Por que a PetClin?</span>
          <h2 className="section-title">
            Por que escolher a PetClin
          </h2>
          <p className="section-subtitle">
            Atendimento veterinário completo, disponível quando o seu pet precisar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {differentials.map((item, i) => (
            <div
              key={item.title}
              className={`pc-card pc-card-hover group p-8 text-center reveal ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
                <item.icon className="h-8 w-8" strokeWidth={1.75} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
