import { useMemo, useState } from 'react';
import { Crosshair, MapPin, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import BranchCard from './location/BranchCard';
import LocationMap from './location/LocationMap';
import { branches, type Branch } from './location/locationData';
import {
  sortBranchesByDistance,
  type Coordinates,
} from './location/locationUtils';

type LocationStatus = 'idle' | 'loading' | 'success' | 'denied' | 'error';

const statusMessages: Record<Exclude<LocationStatus, 'idle' | 'loading' | 'success'>, string> = {
  denied: 'Não foi possível acessar sua localização. Escolha uma unidade abaixo.',
  error: 'Não foi possível determinar sua localização. Tente novamente.',
};

export default function Location() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [status, setStatus] = useState<LocationStatus>('idle');
  const [userCoordinates, setUserCoordinates] = useState<Coordinates | null>(null);
  const [selectedBranchId, setSelectedBranchId] = useState(branches[0].id);

  const distanceByBranchId = useMemo(() => {
    if (!userCoordinates) return new Map<string, number>();

    return new Map(
      sortBranchesByDistance(userCoordinates, branches).map((branch) => [
        branch.id,
        branch.distanceInMeters,
      ])
    );
  }, [userCoordinates]);

  const orderedBranches = useMemo(() => {
    if (distanceByBranchId.size === 0) return branches;

    return [...branches].sort((first, second) => {
      const firstDistance = distanceByBranchId.get(first.id);
      const secondDistance = distanceByBranchId.get(second.id);
      if (firstDistance === undefined) return 1;
      if (secondDistance === undefined) return -1;
      return firstDistance - secondDistance;
    });
  }, [distanceByBranchId]);

  const nearestBranchId = orderedBranches[0]?.id;
  const selectedBranch = branches.find((branch) => branch.id === selectedBranchId) ?? branches[0];

  function findNearestBranch() {
    if (!navigator.geolocation) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setUserCoordinates({ latitude: coords.latitude, longitude: coords.longitude });
        setStatus('success');
      },
      (error) => {
        setStatus(error.code === error.PERMISSION_DENIED ? 'denied' : 'error');
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
    );
  }

  function selectBranch(branch: Branch) {
    setSelectedBranchId(branch.id);
  }


  return (
    <section id="localizacao" className="bg-white py-16 lg:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mb-10 flex flex-col items-center text-center lg:mb-14">
          <span className="section-eyebrow inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            Localização
          </span>
          <h2 className="section-title max-w-3xl">Procurando a unidade mais próxima de você?</h2>
          <p className="section-subtitle max-w-2xl">
            Encontre a PetClin mais conveniente para você e fale diretamente com nossa equipe.
          </p>
          <button
            type="button"
            onClick={findNearestBranch}
            disabled={status === 'loading'}
            className="pc-btn mt-6 bg-brand-600 text-white shadow-glow-brand hover:bg-brand-700 disabled:cursor-wait disabled:opacity-70"
          >
            <Crosshair className={`h-5 w-5 ${status === 'loading' ? 'animate-pulse' : ''}`} />
            {status === 'loading' ? 'Encontrando a unidade mais próxima...' : 'Encontrar unidade mais próxima'}
          </button>
        </div>

        <div className="mb-10 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <LocationMap
              branches={branches}
              selectedBranch={selectedBranch}
              distanceByBranchId={distanceByBranchId}
              onSelectBranch={selectBranch}
            />
          </div>

          <aside className="flex flex-col justify-center rounded-4xl border border-brand-100 bg-brand-50/70 p-7 lg:col-span-2 lg:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-sm">
              <ShieldCheck className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-gray-900">Escolha a unidade ideal para você</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Consulte o endereço de cada unidade e fale diretamente com a equipe pelo WhatsApp.
            </p>
            {status === 'success' && userCoordinates && distanceByBranchId.size > 0 && (
              <p className="mt-5 rounded-2xl bg-white px-4 py-3 text-sm font-medium leading-relaxed text-brand-700 shadow-sm">
                A unidade mais próxima foi destacada e os cards foram organizados pela distância aproximada em linha reta.
              </p>
            )}
            {(status === 'denied' || status === 'error') && (
              <p className="mt-5 rounded-2xl bg-white px-4 py-3 text-sm font-medium leading-relaxed text-gray-600 shadow-sm">
                {statusMessages[status]}
              </p>
            )}
          </aside>
        </div>

        <div>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <span className="section-eyebrow">Nossas unidades</span>
              <h3 className="text-2xl font-bold text-gray-900">Encontre a PetClin</h3>
            </div>
            {status === 'success' && distanceByBranchId.size > 0 && (
              <p className="hidden text-right text-xs text-gray-400 sm:block">Ordenadas pela distância aproximada</p>
            )}
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {orderedBranches.map((branch) => (
              <BranchCard
                key={branch.id}
                branch={branch}
                distanceInMeters={distanceByBranchId.get(branch.id)}
                isNearest={branch.id === nearestBranchId && distanceByBranchId.has(branch.id)}
                onSelect={selectBranch}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
