/**
 * Reusable contract tests. Both the mock and the real implementation of a
 * module must pass the same suite. Import this only from *.test.ts files.
 */
import { describe, expect, it } from "vitest";
import fc from "fast-check";
import { isValidLatLng, type PlaceFinder } from "./index";

export function placeFinderContract(
  name: string,
  createFinder: () => PlaceFinder,
  bookId: string,
) {
  describe(`${name}: PlaceFinder contract`, () => {
    it("never throws and returns well-formed matches for any text", () => {
      const finder = createFinder();
      fc.assert(
        fc.property(fc.string({ maxLength: 400 }), (text) => {
          const matches = finder.findPlaces(text, bookId);
          for (const m of matches) {
            expect(m.start).toBeGreaterThanOrEqual(0);
            expect(m.end).toBeGreaterThan(m.start);
            expect(m.end).toBeLessThanOrEqual(text.length);
            expect(m.score).toBeGreaterThanOrEqual(0);
            expect(m.score).toBeLessThanOrEqual(1);
            expect(text.slice(m.start, m.end)).toBe(m.matchedText);
            expect(isValidLatLng(m.place.location)).toBe(true);
          }
        }),
      );
    });

    it("returns nothing for an unknown book", () => {
      const finder = createFinder();
      expect(finder.findPlaces("Anything at all", "no-such-book")).toEqual([]);
    });
  });
}
