import { describe, expect, it } from "vitest";
import { createMockCaptureService } from "./index";

describe("mock capture", () => {
  it("returns text with a confidence between 0 and 1", async () => {
    const result = await createMockCaptureService().recognize(
      new Blob(["x"]),
      "upload",
    );
    expect(result.text.length).toBeGreaterThan(0);
    expect(result.confidence).toBeGreaterThanOrEqual(0);
    expect(result.confidence).toBeLessThanOrEqual(1);
    expect(result.source).toBe("upload");
  });
});
