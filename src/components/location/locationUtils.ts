import type { Branch } from './locationData';

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface BranchDistance extends Branch {
  distanceInMeters: number;
}

const EARTH_RADIUS_IN_METERS = 6371000;

export function calculateDistanceInMeters(
  origin: Coordinates,
  destination: Coordinates
): number {
  const latitudeDelta = toRadians(destination.latitude - origin.latitude);
  const longitudeDelta = toRadians(destination.longitude - origin.longitude);
  const originLatitude = toRadians(origin.latitude);
  const destinationLatitude = toRadians(destination.latitude);

  const haversine =
    Math.sin(latitudeDelta / 2) ** 2 +
    Math.cos(originLatitude) *
      Math.cos(destinationLatitude) *
      Math.sin(longitudeDelta / 2) ** 2;

  return 2 * EARTH_RADIUS_IN_METERS * Math.asin(Math.sqrt(haversine));
}

export function formatDistance(distanceInMeters: number): string {
  if (distanceInMeters < 1000) {
    return `Aprox. ${Math.round(distanceInMeters)} m`;
  }

  return `Aprox. ${(distanceInMeters / 1000).toFixed(1).replace('.', ',')} km`;
}

export function sortBranchesByDistance(
  origin: Coordinates,
  availableBranches: Branch[]
): BranchDistance[] {
  return availableBranches
    .filter((branch): branch is Branch & Coordinates => branch.latitude !== null && branch.longitude !== null)
    .map((branch) => ({
      ...branch,
      distanceInMeters: calculateDistanceInMeters(origin, {
        latitude: branch.latitude,
        longitude: branch.longitude,
      }),
    }))
    .sort((first, second) => first.distanceInMeters - second.distanceInMeters);
}

export function toRadians(value: number): number {
  return (value * Math.PI) / 180;
}
