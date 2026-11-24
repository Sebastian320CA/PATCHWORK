---
inclusion: always
---
# Project structure and ownership

```
src/contracts   Shared types + contract tests. Only the integrator edits, via PR.
src/capture     Camera / upload, image prep, OCR.                  -> owner A
src/places      Place list for the book, fuzzy matcher.            -> owner B
src/map         MapLibre map, flights, route.                      -> owner B
src/narration   Text-to-speech.                                    -> owner C
src/ui          Components, atlas styling, "stitch" threads.       -> owner C
src/app         Next.js pages. Wires the modules together.         -> integrator
docs/           Concept, team, credits, Kiro usage log.
.kiro/          Steering, specs, hooks, agents. Never git-ignore this folder.
```

## Rules
1. **Contracts first.** Modules talk only through `src/contracts`. Every module ships a real factory and a mock factory with the same interface (`createMockXxx`).
2. **Touch only your own folder.** Need a contract change? Open a PR on `src/contracts` and tag the others.
3. **One branch per module, small PRs into `main`.** Never push to `main` directly.
4. **A real implementation must pass the same contract tests as the mock** (see `src/contracts/contract-tests.ts`).
5. Use the `@/` alias for imports from `src/`.
