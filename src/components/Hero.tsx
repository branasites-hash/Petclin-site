import { MapPin, Phone, Star, Clock } from 'lucide-react';
import { company } from '@/constants';
import { scrollToId } from '@/lib/scrollTo';
import WhatsAppButton from './WhatsAppButton';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-brand-800 pt-20 pb-20 lg:pt-28 lg:pb-28">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/6235114/pexels-photo-6235114.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
          alt=""
          className="h-full w-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/95 via-brand-800/90 to-brand-700/85" />
      </div>

      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute right-10 top-20 h-80 w-80 rounded-full bg-accent-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-brand-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Text */}
        <div className="animate-fade-in-up text-center lg:text-left">
          {/* 24h badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-500/15 px-4 py-2 text-sm font-semibold text-accent-300 ring-1 ring-accent-400/30 backdrop-blur">
            <Clock className="h-4 w-4" />
            <span>Atendimento 24 horas • Todos os dias</span>
          </div>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-5xl xl:text-6xl">
            Clínica veterinária
            <span className="mt-1 block bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
              24 horas
            </span>
            <span className="mt-1 block text-3xl font-bold text-brand-100 sm:text-4xl lg:text-4xl xl:text-5xl">
              em Rio Branco, AC
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-100/80 sm:text-lg lg:mx-0">
            Consultas, cirurgias, exames, vacinas, banho e tosa, pet shop, hotel pet e taxi pet — tudo em um só lugar para o seu pet.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <WhatsAppButton
              label="Falar com a PetClin"
              size="lg"
              message="Olá! Encontrei a PetClin pelo site e gostaria de saber mais sobre o atendimento."
            />
            <button
              type="button"
              onClick={() => scrollToId('localizacao')}
              className="pc-btn-light w-full sm:w-auto"
            >
              <MapPin className="h-5 w-5" />
              Como chegar
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} className="h-4 w-4 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-white/90">
                {company.googleRating} no Google
              </span>
            </div>
            <div className="hidden h-5 w-px bg-white/20 sm:block" />
            <span className="inline-flex items-center gap-1.5 text-sm text-white/70">
              <Phone className="h-4 w-4" /> {company.phone}
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-fade-in">
          <div className="relative overflow-hidden rounded-4xl shadow-2xl ring-1 ring-white/10">
            <img
              src="https://images.pexels.com/photos/6235650/pexels-photo-6235650.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200"
              alt="Veterinário examinando um cão com estetoscópio em clínica veterinária"
              className="h-[340px] w-full object-cover sm:h-[440px] lg:h-[520px]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent" />
          </div>

          {/* Floating rating badge */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 animate-float">
            <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50">
                <Star className="h-6 w-6 fill-accent-500 text-accent-500" />
              </div>
              <div className="leading-tight">
                <p className="text-base font-extrabold text-gray-900">{company.googleRating}</p>
                <p className="text-xs text-gray-500">no Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <svg className="absolute bottom-0 left-0 w-full text-white" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 80V40C240 0 480 0 720 20C960 40 1200 60 1440 30V80H0Z" fill="currentColor" />
      </svg>
    </section>
  );
}
