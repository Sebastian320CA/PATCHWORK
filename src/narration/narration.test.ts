import { describe, expect, it } from "vitest";
import { createMockNarrator } from "./index";

describe("mock narrator", () => {
  it("stays silent when speech is not supported", async () => {
    const n = createMockNarrator(false);
    await n.speak("hello");
    expect(n.spoken).toEqual([]);
  });
});
