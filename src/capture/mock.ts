import type { CaptureService, OcrResult } from "@/contracts";

/** Returns a fixed page of text. Lets the UI be built before real OCR exists. */
export function createMockCaptureService(
  text = "3 May. Bistritz. Left Munich at 8:35 P.M. and arrived at Vienna early next morning.",
): CaptureService {
  return {
    async recognize(_image: Blob, source: OcrResult["source"]) {
      return { text, confidence: 0.9, source };
    },
  };
}
