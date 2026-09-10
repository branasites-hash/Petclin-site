import { Check, MapPin, MessageCircle, Navigation } from 'lucide-react';
import type { Branch } from './locationData';
import { formatDistance } from './locationUtils';

interface BranchCardProps {
  branch: Branch;
  distanceInMeters?: number;
  isNearest: boolean;
  onSelect: (branch: Branch) => void;
}

export default function BranchCard({
  branch,
  distanceInMeters,
  isNearest,
  onSelect,
}: BranchCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col rounded-3xl border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
        isNearest ? 'border-brand-300 ring-2 ring-brand-100' : 'border-gray-100'
      }`}
    >
      {isNearest && (
        <div className="absolute -top-3 left-5 inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-brand-600/20">
          <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
          Mais próxima de você
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
          <MapPin className="h-5 w-5" strokeWidth={1.75} />
        </div>
        {distanceInMeters !== undefined && (
          <div className="text-right">
            <p className="text-base font-bold text-brand-700">{formatDistance(distanceInMeters)}</p>
            <p className="text-[11px] text-gray-400">em linha reta</p>
          </div>
        )}
      </div>

      <h3 className="mt-5 text-base font-bold leading-snug text-gray-900">{branch.name}</h3>
      <address className="mt-3 flex-1 not-italic text-sm leading-relaxed text-gray-500">
        {branch.addressLines.map((line) => (
          <span key={line} className="block">{line}</span>
        ))}
      </address>
      <p className="mt-4 text-sm font-medium text-gray-600">WhatsApp: {branch.whatsapp}</p>

      <div className="mt-6 grid grid-cols-2 gap-2">
        <a
          href={branch.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pc-btn border border-brand-200 bg-brand-50 px-3 py-2.5 text-xs text-brand-700 hover:bg-brand-100"
          aria-label={`Como chegar na ${branch.name}`}
        >
          <Navigation className="h-4 w-4" />
          Como chegar
        </a>
        <a
          href={branch.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pc-btn bg-whatsapp px-3 py-2.5 text-xs text-white hover:bg-whatsapp-dark"
          aria-label={`Falar no WhatsApp com a ${branch.name}`}
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
      <button
        type="button"
        onClick={() => onSelect(branch)}
        className="mt-3 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-500 transition-colors hover:text-brand-700"
      >
        <MapPin className="h-3.5 w-3.5" />
        Ver no mapa
      </button>
    </article>
  );
}
