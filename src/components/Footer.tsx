import { PawPrint, Instagram, Phone, MapPin } from 'lucide-react';
import { company, services, navLinks } from '@/constants';
import { scrollToId } from '@/lib/scrollTo';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-md">
                <PawPrint className="h-6 w-6" />
              </div>
              <div className="leading-tight">
                <span className="text-xl font-extrabold text-white">PetClin</span>
                <span className="block text-[10px] font-medium tracking-wide text-gray-500">Petshop & Clínica Veterinária</span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-gray-500">
              Clínica veterinária 24 horas em Rio Branco, AC. Cuidado completo para o seu pet em um só lugar.
            </p>
            <a
              href={company.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Instagram className="h-4 w-4" />
              {company.instagram}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">Serviços</h3>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.title}>
                  <button type="button" onClick={() => scrollToId('servicos')} className="text-left transition-colors hover:text-brand-400">
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">Navegação</h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.sectionId}>
                  <button type="button" onClick={() => scrollToId(link.sectionId)} className="text-left transition-colors hover:text-brand-400">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-brand-400"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-brand-500" />
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="leading-relaxed">{company.address.full}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} PetClin — Petshop e Clínica Veterinária 24 horas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
