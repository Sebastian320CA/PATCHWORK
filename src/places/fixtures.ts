import type { Place } from "@/contracts";

/**
 * MOCK DATA ONLY. Three well-known places so every module has something to
 * work with from day one. The curated list for the demo book is built by the
 * places owner in a later phase and replaces this.
 */
export const MOCK_BOOK_ID = "mock-book";

export const MOCK_PLACES: Place[] = [
  {
    id: "bistritz",
    name: "Bistrița",
    aliases: ["Bistritz"],
    location: { lat: 47.1333, lng: 24.5 },
    bookId: MOCK_BOOK_ID,
    chapter: 1,
    note: "Mock data.",
  },
  {
    id: "whitby",
    name: "Whitby",
    aliases: [],
    location: { lat: 54.4858, lng: -0.6206 },
    bookId: MOCK_BOOK_ID,
    chapter: 6,
    note: "Mock data.",
  },
  {
    id: "london",
    name: "London",
    aliases: [],
    location: { lat: 51.5072, lng: -0.1276 },
    bookId: MOCK_BOOK_ID,
    chapter: 12,
    note: "Mock data.",
  },
];
