/**
 * SHARED CONTRACTS. Every module builds against these types.
 *
 * Rules:
 *  - Only the integrator changes this file, through a PR everyone reviews.
 *  - Each module exports a real factory and a mock factory with the same
 *    interface, so nobody waits for anybody else.
 */

export interface LatLng {
  /** Degrees, -90 to 90. */
  lat: number;
  /** Degrees, -180 to 180. */
  lng: number;
}

export function isValidLatLng(p: LatLng): boolean {
  return (
    Number.isFinite(p.lat) &&
    Number.isFinite(p.lng) &&
    p.lat >= -90 &&
    p.lat <= 90 &&
    p.lng >= -180 &&
    p.lng <= 180
  );
}

/** A real-world place mentioned in a book. */
export interface Place {
  /** Stable slug, e.g. "bistritz". */
  id: string;
  /** Name shown to the user. */
  name: string;
  /** Other spellings found in the book text (old names, OCR-friendly variants). */
  aliases: string[];
  location: LatLng;
  bookId: string;
  chapter?: number;
  /** Short context shown next to the place on the map. */
  note?: string;
}

/** Output of the capture module (camera or upload, then OCR). */
export interface OcrResult {
  text: string;
  /** 0 (garbage) to 1 (perfect). */
  confidence: number;
  source: "camera" | "upload";
}

/** One place found inside a piece of text. */
export interface PlaceMatch {
  place: Place;
  /** Exact text that matched, as it appears in the input. */
  matchedText: string;
  /** 0 to 1. */
  score: number;
  /** Character range in the input text: start inclusive, end exclusive. */
  start: number;
  end: number;
}

/** Owner: capture module. Turns an image into text. */
export interface CaptureService {
  recognize(image: Blob, source: OcrResult["source"]): Promise<OcrResult>;
}

/** Owner: places module. Finds known places inside text. */
export interface PlaceFinder {
  findPlaces(text: string, bookId: string): PlaceMatch[];
}

/** Owner: map module. Controls the map the user sees. */
export interface MapController {
  flyTo(place: Place): Promise<void>;
  showRoute(places: Place[]): void;
  clear(): void;
}

/** Owner: narration module. Reads text aloud. */
export interface Narrator {
  /** False when the browser has no speech synthesis. The UI must degrade gracefully. */
  readonly supported: boolean;
  speak(text: string): Promise<void>;
  stop(): void;
}
