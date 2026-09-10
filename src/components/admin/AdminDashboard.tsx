import { Activity, MapPin, Globe, Stethoscope } from 'lucide-react';
import { branches } from '@/components/location/locationData';

export default function AdminDashboard() {
  const unitCount = branches.length;

  const stats = [
    {
      label: 'Status do sistema',
      value: 'Online',
      description: 'Landing page ativa',
      icon: Activity,
      color: 'bg-green-50 text-green-600',
    },
    {
      label: 'Unidades',
      value: String(unitCount),
      description: 'Unidades cadastradas',
      icon: MapPin,
      color: 'bg-brand-50 text-brand-600',
    },
    {
      label: 'Presença digital',
      value: 'Ativa',
      description: 'Site no ar',
      icon: Globe,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      label: 'Serviços',
      value: '8',
      description: 'Serviços listados no site',
      icon: Stethoscope,
      color: 'bg-accent-50 text-accent-600',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Visão geral</h1>
        <p className="mt-1 text-sm text-gray-500">Status geral do painel administrativo da PetClin.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card"
            >
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${stat.color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="mt-1 text-xs text-gray-400">{stat.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
        <h2 className="text-lg font-bold text-gray-900">Unidades da PetClin</h2>
        <p className="mt-1 text-sm text-gray-500">Unidades atualmente exibidas na landing page.</p>

        <div className="mt-5 space-y-3">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 px-5 py-4"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-gray-900">{branch.name}</p>
                <p className="truncate text-xs text-gray-500">{branch.addressLabel}</p>
              </div>
              <span className="hidden rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600 sm:inline">
                Ativa
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <h3 className="text-sm font-bold text-blue-900">Módulos em desenvolvimento</h3>
        <p className="mt-1 text-sm text-blue-700">
          Serviços, Unidades, Produtos, Pedidos e Configurações estarão disponíveis em breve. O painel atual é a base segura do sistema administrativo.
        </p>
      </div>
    </div>
  );
}
