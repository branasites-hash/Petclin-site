import { Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import WhatsAppButton from './WhatsAppButton';

const highlights = [
  'Clínica veterinária 24 horas',
  'Consultas, cirurgias e exames',
  'Vacinas e banho e tosa',
  'Pet shop, hotel pet e taxi pet',
  'Localizada em Rio Branco, AC',
  'Nota 4,8 no Google',
];

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="sobre" className="bg-white py-16 lg:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-4xl shadow-2xl ring-1 ring-gray-100">
              <img
                src="https://images.pexels.com/photos/6234612/pexels-photo-6234612.jpeg?auto=compress&cs=tinysrgb&h=800&w=1100"
                alt="Equipe veterinária cuidando de um cão"
                className="h-[320px] w-full object-cover sm:h-[440px]"
                loading="lazy"
              />
            </div>
            {/* Floating stat cards */}
            <div className="absolute -right-4 top-8 hidden animate-float rounded-2xl bg-brand-600 p-5 text-white shadow-glow-brand sm:block">
              <p className="text-3xl font-extrabold leading-none">24h</p>
              <p className="mt-1 text-xs text-brand-100">todos os dias</p>
            </div>
            <div className="absolute -left-4 bottom-8 hidden animate-float-slow rounded-2xl bg-accent-500 p-5 text-white shadow-glow-accent sm:block">
              <p className="text-3xl font-extrabold leading-none">4,8</p>
              <p className="mt-1 text-xs text-orange-100">no Google</p>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="section-eyebrow">Sobre a PetClin</span>
            <h2 className="section-title">
              Tudo para o seu pet em um só lugar
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600">
              A PetClin é um petshop e clínica veterinária 24 horas em Rio Branco, no Acre. Reunimos serviços veterinários e cuidados para pets em um único lugar, oferecendo praticidade para os tutores.
            </p>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              Com atendimento disponível 24 horas e forte reputação no Google, estamos prontos para cuidar do seu animal sempre que precisar.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <WhatsAppButton label="Falar no WhatsApp" size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
