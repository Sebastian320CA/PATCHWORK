# Haunted Atlas

> Point your camera at a printed page. The places in it come alive on a map.

**Kiroween 2026 · Category: Frankenstein** · Built with [Kiro](https://kiro.dev)

**Live demo:** _coming soon_ · **Demo video:** _coming soon_

## The idea

Printed books are being left behind while everything else goes digital. Haunted Atlas keeps the
paper book and adds what a screen does well: you open the app, point your phone at a page, and
the app reads it, finds the real places mentioned in it, flies a map to them and narrates the
passage. Threads connect each recognized word on the page to its place on the map.

It stitches together things that do not belong together: **paper, in-browser OCR, geography and a
synthetic voice**. Everything runs in the browser. Nothing you scan is uploaded anywhere.

The demo book is *Dracula* (Bram Stoker), using a public-domain edition.

See [docs/CONCEPT.md](docs/CONCEPT.md) for the full concept.

## Status

Phase 1 (project skeleton) is done: structure, shared contracts, mock modules, tests, CI and the
Kiro setup. The real camera, OCR, map and voice come in the next phases.

## Run it

Requires Node.js 22.

```bash
npm install
npm run dev          # http://localhost:3000
npm run check        # lint + typecheck + tests
npm run build        # static site in ./out
```

## Project layout

| Path | What it is |
|---|---|
| `src/contracts` | Shared types and contract tests. Modules only talk through these. |
| `src/capture` | Camera / upload and OCR |
| `src/places` | Place list and matcher |
| `src/map` | Map, flights, route |
| `src/narration` | Text-to-speech |
| `src/ui` | Components and styling |
| `src/app` | Pages that wire everything together |
| `.kiro/` | Kiro steering, specs, hooks and custom agent |
| `docs/` | Concept, team, credits and the Kiro usage log |

Every module has a real implementation and a mock with the same interface, and both must pass
the same contract tests.

## How Kiro was used

Steering files, specs, hooks, a custom agent and property-based tests are in [`.kiro/`](.kiro).
A running, dated log of what worked and what did not is in [docs/kiro-log.md](docs/kiro-log.md).

## License and credits

[MIT](LICENSE). Third-party data, fonts and libraries are credited in [docs/CREDITS.md](docs/CREDITS.md).
