import type { MapController, Place } from "@/contracts";

export interface MockMapController extends MapController {
  /** Recorded calls, for tests and for UI development without a real map. */
  readonly calls: string[];
}

export function createMockMapController(): MockMapController {
  const calls: string[] = [];
  return {
    calls,
    async flyTo(place: Place) {
      calls.push(`flyTo:${place.id}`);
    },
    showRoute(places: Place[]) {
      calls.push(`showRoute:${places.map((p) => p.id).join(",")}`);
    },
    clear() {
      calls.push("clear");
    },
  };
}
