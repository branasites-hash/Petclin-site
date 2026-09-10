import { useEffect, useState } from 'react';
import { Menu, X, PawPrint, Clock } from 'lucide-react';
import { company, navLinks } from '@/constants';
import { scrollToId } from '@/lib/scrollTo';
import WhatsAppButton from './WhatsAppButton';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <button type="button" onClick={() => scrollToId('inicio')} className="flex items-center gap-2.5" aria-label="PetClin - Início">
          <div className={`flex h-11 w-11 items-center justify-center rounded-2xl shadow-md transition-all duration-300 ${
            isScrolled ? 'bg-brand-600' : 'bg-white/15 backdrop-blur-md ring-1 ring-white/25'
          }`}>
            <PawPrint className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
          </div>
          <div className="leading-tight">
            <span className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-brand-700' : 'text-white'
            }`}>
              PetClin
            </span>
            <span className={`block text-[10px] font-medium tracking-wide transition-colors duration-300 ${
              isScrolled ? 'text-gray-400' : 'text-white/60'
            }`}>
              Petshop & Clínica Veterinária
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.sectionId}
              type="button"
              onClick={() => scrollToId(link.sectionId)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isScrolled
                  ? 'text-gray-600 hover:bg-brand-50 hover:text-brand-700'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${isScrolled ? 'text-brand-600' : 'text-white/70'}`}>
            <Clock className="h-3.5 w-3.5" />
            24h
          </span>
          <WhatsAppButton size="sm" variant={isScrolled ? 'primary' : 'light'} />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-xl p-2 transition-colors lg:hidden ${
            isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          isOpen ? 'max-h-screen border-t border-gray-100 shadow-lg' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-5">
          {navLinks.map((link) => (
            <button
              key={link.sectionId}
              type="button"
              onClick={() => { setIsOpen(false); scrollToId(link.sectionId); }}
              className="rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {link.label}
            </button>
          ))}
          <div className="mt-3">
            <WhatsAppButton className="w-full" size="md" />
          </div>
        </nav>
      </div>
    </header>
  );
}
