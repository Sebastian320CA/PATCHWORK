import type { Narrator } from "@/contracts";

export interface MockNarrator extends Narrator {
  readonly spoken: string[];
}

export function createMockNarrator(supported = true): MockNarrator {
  const spoken: string[] = [];
  return {
    supported,
    spoken,
    async speak(text: string) {
      if (supported) spoken.push(text);
    },
    stop() {},
  };
}
