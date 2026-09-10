import {
  Stethoscope,
  Scissors,
  Syringe,
  FlaskConical,
  HeartPulse,
  ShoppingBag,
  Home,
  Car,
  Clock,
  ShieldCheck,
  Award,
  type LucideIcon,
} from 'lucide-react';

export const company = {
  name: 'PetClin',
  tagline: 'Petshop e Clínica Veterinária 24 horas',
  phone: '(68) 99974-3482',
  phoneDigits: '5568999743482',
  whatsappUrl: 'https://wa.me/5568999743482',
  instagram: '@petclin.ac',
  instagramUrl: 'https://instagram.com/petclin.ac',
  address: {
    street: 'Av. Nações Unidas, 2399 - 7º BEC',
    district: 'Estação Experimental',
    city: 'Rio Branco',
    state: 'AC',
    zip: '69918-093',
    full: 'Av. Nações Unidas, 2399 - 7º BEC - Estação Experimental, Rio Branco - AC, 69918-093',
  },
  googleRating: 4.8,
  googleReviews: 495,
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=PetClin+Av.+Nações+Unidas+2399+Rio+Branco+AC',
  mapsEmbed: 'https://www.google.com/maps?q=Av.+Nações+Unidas,+2399+-+Estação+Experimental,+Rio+Branco+-+AC,+69918-093&output=embed',
};

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    icon: Stethoscope,
    title: 'Consultas',
    description: 'Avaliação clínica e diagnóstico veterinário para o seu pet.',
    image: 'https://images.pexels.com/photos/6235650/pexels-photo-6235650.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: HeartPulse,
    title: 'Cirurgias',
    description: 'Procedimentos cirúrgicos com estrutura equipada e acompanhamento.',
    image: 'https://images.pexels.com/photos/3924779/pexels-photo-3924779.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: FlaskConical,
    title: 'Exames',
    description: 'Exames laboratoriais e de imagem para diagnóstico preciso.',
    image: 'https://images.pexels.com/photos/6235231/pexels-photo-6235231.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: Syringe,
    title: 'Vacinas',
    description: 'Vacinação para prevenir doenças e proteger o seu pet.',
    image: 'https://images.pexels.com/photos/1350591/pexels-photo-1350591.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: Scissors,
    title: 'Banho e Tosa',
    description: 'Higiene e cuidados com a aparência do seu pet.',
    image: 'https://images.pexels.com/photos/19145883/pexels-photo-19145883.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: ShoppingBag,
    title: 'Pet Shop',
    description: 'Rações, acessórios e produtos para o seu animal.',
    image: 'https://images.pexels.com/photos/796584/pexels-photo-796584.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: Home,
    title: 'Hotel Pet',
    description: 'Hospedagem segura e confortável para o seu pet.',
    image: 'https://images.pexels.com/photos/16465605/pexels-photo-16465605.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: Car,
    title: 'Taxi Pet',
    description: 'Transporte do seu pet até a clínica com segurança.',
    image: 'https://images.pexels.com/photos/4422100/pexels-photo-4422100.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
];

export interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const differentials: Differential[] = [
  {
    icon: Clock,
    title: 'Atendimento 24 horas',
    description: 'Disponíveis dia e noite, todos os dias, para o que o seu pet precisar.',
  },
  {
    icon: ShieldCheck,
    title: 'Tudo em um só lugar',
    description: 'Clínica veterinária, pet shop, banho e tosa, hotel pet e taxi pet reunidos para a sua praticidade.',
  },
  {
    icon: Award,
    title: 'Reputação no Google',
    description: 'Nota 4,8 com centenas de avaliações de clientes no Google.',
  },
];

export const navLinks = [
  { label: 'Início', sectionId: 'inicio' },
  { label: 'Serviços', sectionId: 'servicos' },
  { label: 'Sobre', sectionId: 'sobre' },
  { label: 'Localização', sectionId: 'localizacao' },
  { label: 'Contato', sectionId: 'contato' },
];
