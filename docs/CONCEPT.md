# Concept

## Problem
Readers of history, travel and fiction rarely see where the story happens, and looking up each
city in another app breaks the reading. People with low vision also lose out when a book is
only available as paper. The physical book is being left behind as everything becomes digital.

## Solution
Haunted Atlas turns a printed page into a living map.

1. Point the camera at a page, or upload a photo.
2. The page is read in the browser (OCR).
3. Known places in the text are found, tolerating OCR mistakes.
4. The map flies to each place, the passage is read aloud, and the journey is drawn as a route.
5. Thread lines ("stitches") connect words on the page to their place on the map.

## Why Frankenstein
Paper, WebAssembly OCR, geography and speech synthesis are stitched into one app, and the
seams are visible on screen.

## Demo (under 3 minutes)
1. Show the printed book, open the app on a phone.
2. Aim at a page: the map flies to Bistrița and the voice reads the passage.
3. Turn the page: next place, the route grows.
4. Upload a photo as a fallback path.
5. Finish on the full route and the problem it solves.

## Scope
**Minimum:** camera or photo, OCR, place detection, map, voice, one prepared book, deployed.
**If time allows:** route drawing, animated threads, full atlas styling.
**Out of scope:** servers, accounts, support for any book.

## Principles
- Runs entirely in the browser: free to host, private by design.
- Public-domain content only.
- Works without internet for the demo path.
- Fails gracefully: no camera, no speech, bad OCR must never give a blank screen.
