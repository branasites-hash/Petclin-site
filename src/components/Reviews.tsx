import { Star, ExternalLink, MessageSquare } from 'lucide-react';
import { company } from '@/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Reviews() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const googleReviewsUrl = `https://www.google.com/maps/search/?api=1&query=PetClin+Rio+Branco+AC`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mb-14 text-center">
          <span className="section-eyebrow">Avaliações</span>
          <h2 className="section-title">
            Reputação no Google
          </h2>
          <p className="section-subtitle">
            A nota e a quantidade de avaliações da PetClin falam por si.
          </p>
        </div>

        {/* Google rating showcase */}
        <div className="mb-10 flex flex-col items-center gap-8 lg:flex-row lg:justify-center">
          {/* Big rating card */}
          <div className="flex flex-col items-center rounded-4xl bg-white px-10 py-8 shadow-soft ring-1 ring-gray-100">
            <div className="mb-3 flex items-center gap-2">
              <svg className="h-7 w-7" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-sm font-semibold text-gray-600">Google</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-extrabold leading-none text-gray-900">{company.googleRating}</span>
              <div className="flex flex-col">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      className={`h-5 w-5 ${
                        n <= Math.round(company.googleRating)
                          ? 'fill-accent-400 text-accent-400'
                          : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-500">
              Aprox. {company.googleReviews} avaliações
            </p>
          </div>

          {/* Quick stats */}
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <div className="rounded-2xl bg-brand-50 px-6 py-5 text-center">
              <p className="text-3xl font-extrabold text-brand-700">{company.googleRating}</p>
              <p className="mt-1 text-xs font-medium text-brand-600">Nota média</p>
            </div>
            <div className="rounded-2xl bg-accent-50 px-6 py-5 text-center">
              <p className="text-3xl font-extrabold text-accent-600">{company.googleReviews}+</p>
              <p className="mt-1 text-xs font-medium text-accent-600">Avaliações</p>
            </div>
          </div>
        </div>

        {/* CTA to Google Reviews */}
        <div className="mx-auto max-w-2xl rounded-4xl border border-gray-100 bg-white p-8 text-center shadow-card sm:p-10">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
            <MessageSquare className="h-7 w-7" strokeWidth={1.75} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            Veja as avaliações reais da PetClin no Google
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-500">
            Confira o que os clientes dizem sobre o atendimento da PetClin diretamente no Google.
          </p>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pc-btn mt-6 bg-gray-900 text-white hover:bg-gray-800"
          >
            Ver avaliações no Google
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
