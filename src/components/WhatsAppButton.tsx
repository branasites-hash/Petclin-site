import { MessageCircle } from 'lucide-react';
import { company } from '@/constants';

interface WhatsAppButtonProps {
  label?: string;
  variant?: 'primary' | 'outline' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  message?: string;
}

const sizeStyles = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const variantStyles = {
  primary: 'pc-btn-wa',
  outline: 'pc-btn-outline',
  light: 'pc-btn-light',
  dark: 'pc-btn-dark',
};

export function buildWhatsAppUrl(message?: string): string {
  if (!message) return company.whatsappUrl;
  const encoded = encodeURIComponent(message);
  return `${company.whatsappUrl}?text=${encoded}`;
}

export default function WhatsAppButton({
  label = 'Falar no WhatsApp',
  variant = 'primary',
  size = 'md',
  className = '',
  message,
}: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <MessageCircle className="h-5 w-5 flex-shrink-0" />
      {label}
    </a>
  );
}
