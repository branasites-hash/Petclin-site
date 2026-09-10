import { MapPin, MessageCircle, Navigation, MapPinned } from 'lucide-react';
import type { Branch } from './locationData';
import { formatDistance } from './locationUtils';

interface LocationMapProps {
  branches: Branch[];
  selectedBranch: Branch;
  distanceByBranchId: Map<string, number>;
  onSelectBranch: (branch: Branch) => void;
}

export default function LocationMap({
  branches,
  selectedBranch,
  distanceByBranchId,
  onSelectBranch,
}: LocationMapProps) {
  const branchesWithCoordinates = branches.filter(
    (branch): branch is Branch & { latitude: number; longitude: number } =>
      branch.latitude !== null && branch.longitude !== null
  );

  const selectedDistance = distanceByBranchId.get(selectedBranch.id);

  const latitudeValues = branchesWithCoordinates.map((branch) => branch.latitude);
  const longitudeValues = branchesWithCoordinates.map((branch) => branch.longitude);

  const minLatitude = latitudeValues.length > 0 ? Math.min(...latitudeValues) : 0;
  const maxLatitude = latitudeValues.length > 0 ? Math.max(...latitudeValues) : 0;
  const minLongitude = longitudeValues.length > 0 ? Math.min(...longitudeValues) : 0;
  const maxLongitude = longitudeValues.length > 0 ? Math.max(...longitudeValues) : 0;

  const latitudeRange = maxLatitude - minLatitude || 1;
  const longitudeRange = maxLongitude - minLongitude || 1;

  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-4xl bg-[#e8f1eb] shadow-soft ring-1 ring-brand-100 sm:min-h-[520px]">

      {/* Fundo visual do mapa */}
      <div className="absolute inset-0 opacity-70" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(28deg,transparent_46%,rgba(255,255,255,.8)_47%,rgba(255,255,255,.8)_51%,transparent_52%),linear-gradient(112deg,transparent_42%,rgba(255,255,255,.7)_43%,rgba(255,255,255,.7)_47%,transparent_48%)] bg-[length:180px_180px,240px_240px]" />

        <div className="absolute left-[8%] top-[22%] h-32 w-56 rotate-12 rounded-[50%] bg-brand-100/80 blur-sm" />

        <div className="absolute bottom-[13%] right-[10%] h-40 w-64 -rotate-12 rounded-[50%] bg-brand-100/70 blur-sm" />

        <div className="absolute left-1/2 top-0 h-full w-5 -translate-x-1/2 rotate-[25deg] bg-white/70" />

        <div className="absolute left-0 top-[54%] h-5 w-full -rotate-[12deg] bg-white/70" />
      </div>

      {/* Cabeçalho do mapa */}
      <div className="absolute left-5 top-5 z-10 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur sm:left-7 sm:top-7">
        <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
          <MapPinned className="h-4 w-4 text-brand-600" />
          PetClin em Rio Branco
        </div>

        <p className="mt-1 text-xs text-gray-500">
          Selecione uma unidade para ver os detalhes
        </p>
      </div>

      {/* Quantidade de unidades */}
      <div className="absolute right-5 top-5 z-10 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-gray-600 shadow-lg backdrop-blur sm:right-7 sm:top-7">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-600 ring-4 ring-brand-100" />
        {branches.length} unidades
      </div>

      {/* Unidade selecionada */}
      <div className="absolute inset-x-5 bottom-5 z-10 sm:inset-x-7 sm:bottom-7">
        <div className="rounded-3xl border border-white/70 bg-white/95 p-5 shadow-xl backdrop-blur sm:p-6">

          <div className="flex items-start gap-3">

            <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
              <MapPin className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1">

              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                Unidade selecionada
              </p>

              <h3 className="mt-1 truncate text-base font-bold text-gray-900">
                {selectedBranch.name}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {selectedBranch.addressLabel}
              </p>

              {selectedDistance !== undefined && (
                <p className="mt-2 text-sm font-semibold text-brand-700">
                  {formatDistance(selectedDistance)} de você
                </p>
              )}

            </div>
          </div>

          {/* Botões */}
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">

            <a
              href={selectedBranch.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-btn flex-1 bg-gray-900 px-4 py-2.5 text-xs text-white hover:bg-gray-800"
            >
              <Navigation className="h-4 w-4" />
              Como chegar
            </a>

            <a
              href={selectedBranch.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-btn flex-1 bg-whatsapp px-4 py-2.5 text-xs text-white hover:bg-whatsapp-dark"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>

          </div>
        </div>
      </div>

      {/* Marcadores das unidades */}
      {branchesWithCoordinates.map((branch) => {

        const left =
          15 +
          ((branch.longitude - minLongitude) / longitudeRange) * 70;

        const top =
          18 +
          (1 - (branch.latitude - minLatitude) / latitudeRange) * 50;

        return (
          <button
            key={branch.id}
            type="button"
            onClick={() => onSelectBranch(branch)}
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
            className={`absolute z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white shadow-lg transition-all hover:scale-110 ${
              branch.id === selectedBranch.id
                ? 'bg-brand-700 text-white ring-4 ring-brand-200'
                : 'bg-brand-500 text-white'
            }`}
            aria-label={`Selecionar ${branch.name}`}
          >
            <MapPin className="h-5 w-5" />
          </button>
        );
      })}

    </div>
  );
}