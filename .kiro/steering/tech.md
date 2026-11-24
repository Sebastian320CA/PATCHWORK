---
inclusion: always
---
# Tech rules

- **Stack:** Next.js 16 (App Router) with `output: "export"` (static site), React 19, TypeScript strict, Tailwind CSS 4. Tests: Vitest + fast-check.
- **Before writing Next.js code, read the relevant guide in `node_modules/next/dist/docs/`.** This Next.js version has breaking changes compared to older versions.
- **Fonts:** do not use `next/font/google` (it needs network at build time and breaks offline builds). Use system fonts or local font files with an open license.
- **No secrets, no `.env` needed to run.** The app must build and run from a clean clone.
- **Planned libraries** (add only when their phase starts): `tesseract.js` (OCR), `maplibre-gl` (map), browser Web Speech API (voice).
- **Scripts:** `npm run check` (lint + typecheck + tests) must pass before any PR. `npm run check:submission` verifies hackathon requirements.
- Prefer small pure functions that are easy to test. Put browser-only code behind a check so `next build` never crashes on server rendering.
