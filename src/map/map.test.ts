import { describe, expect, it } from "vitest";
import { MOCK_PLACES } from "@/places";
import { createMockMapController } from "./index";

describe("mock map", () => {
  it("records what it was asked to do", async () => {
    const map = createMockMapController();
    await map.flyTo(MOCK_PLACES[0]);
    map.showRoute(MOCK_PLACES);
    map.clear();
    expect(map.calls).toEqual([
      "flyTo:bistritz",
      "showRoute:bistritz,whitby,london",
      "clear",
    ]);
  });
});
