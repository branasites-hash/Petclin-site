export interface Branch {
  id: string;
  name: string;
  addressLines: string[];
  addressLabel: string;
  whatsapp: string;
  whatsappUrl: string;
  mapsUrl: string;
  latitude: number | null;
  longitude: number | null;
}

export const branches: Branch[] = [
  {
    id: 'matriz',
    name: 'PetClin — Unidade Matriz',
    addressLines: ['Av. Nações Unidas, 2399', '7º BEC — Estação Experimental', 'Rio Branco — AC'],
    addressLabel: 'Av. Nações Unidas, 2399 — 7º BEC — Estação Experimental, Rio Branco — AC',
    whatsapp: '+55 68 99974-3482',
    whatsappUrl: 'https://wa.me/5568999743482',
    mapsUrl: 'https://maps.app.goo.gl/UA3QTPB5NY5sbxpy9',
    latitude: null,
    longitude: null,
  },
  {
    id: 'wanderley-dantas',
    name: 'PetClin — Unidade Filial Wanderley Dantas',
    addressLines: ['Estrada das Placas, 2439 — Sala 03', 'Wanderley Dantas', 'Rio Branco — AC'],
    addressLabel: 'Estrada das Placas, 2439 — Sala 03 — Wanderley Dantas, Rio Branco — AC',
    whatsapp: '+55 68 3224-9947',
    whatsappUrl: 'https://wa.me/556832249947',
    mapsUrl: 'https://maps.app.goo.gl/njGDdKs7jS6EhvUK8',
    latitude: null,
    longitude: null,
  },
  {
    id: 'jardim-europa',
    name: 'PetClin — Unidade Filial Jardim Europa',
    addressLines: ['Alameda Grécia, 190 — Sala 1', 'Jardim Europa', 'Rio Branco — AC'],
    addressLabel: 'Alameda Grécia, 190 — Sala 1 — Jardim Europa, Rio Branco — AC',
    whatsapp: '+55 68 99601-3333',
    whatsappUrl: 'https://wa.me/5568996013333',
    mapsUrl: 'https://maps.app.goo.gl/7jL634unTWaErBzC8',
    latitude: null,
    longitude: null,
  },
];
