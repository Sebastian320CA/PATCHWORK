import type { Place, PlaceFinder, PlaceMatch } from "@/contracts";
import { MOCK_BOOK_ID, MOCK_PLACES } from "./fixtures";

/**
 * Naive exact-name finder used until the real fuzzy matcher exists.
 * Case-insensitive; reports ranges in the original text.
 */
export function createMockPlaceFinder(
  places: Place[] = MOCK_PLACES,
): PlaceFinder {
  return {
    findPlaces(text: string, bookId: string): PlaceMatch[] {
      if (bookId !== MOCK_BOOK_ID) return [];
      const haystack = text.toLowerCase();
      const found: PlaceMatch[] = [];

      for (const place of places) {
        for (const name of [place.name, ...place.aliases]) {
          const needle = name.toLowerCase();
          if (!needle) continue;
          const start = haystack.indexOf(needle);
          // toLowerCase can change length for some Unicode characters.
          if (start < 0 || haystack.length !== text.length) continue;
          const end = start + needle.length;
          found.push({
            place,
            matchedText: text.slice(start, end),
            score: 1,
            start,
            end,
          });
          break;
        }
      }
      return found.sort((a, b) => a.start - b.start);
    },
  };
}
