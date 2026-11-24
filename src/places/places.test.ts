import { describe, expect, it } from "vitest";
import { placeFinderContract } from "@/contracts/contract-tests";
import { isValidLatLng } from "@/contracts";
import { createMockPlaceFinder, MOCK_BOOK_ID, MOCK_PLACES } from "./index";

placeFinderContract("mock", () => createMockPlaceFinder(), MOCK_BOOK_ID);

describe("mock places", () => {
  it("every fixture has valid coordinates", () => {
    for (const p of MOCK_PLACES) expect(isValidLatLng(p.location)).toBe(true);
  });

  it("finds a place by alias, ignoring case", () => {
    const [m] = createMockPlaceFinder().findPlaces(
      "I left BISTRITZ at dawn.",
      MOCK_BOOK_ID,
    );
    expect(m.place.id).toBe("bistritz");
    expect(m.matchedText).toBe("BISTRITZ");
  });
});
