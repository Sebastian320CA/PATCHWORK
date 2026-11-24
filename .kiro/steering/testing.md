---
inclusion: fileMatch
fileMatchPattern: ["**/*.test.ts"]
---
# Testing conventions

- Tests live next to the code as `*.test.ts` and run with `npm test`.
- Use **property-based tests** (`fast-check`) for anything that parses or matches text: place matching, OCR clean-up, coordinate handling. Typical properties: never throws, ranges stay inside the input, scores stay in [0, 1], coordinates stay in valid ranges, results do not change when extra whitespace is added.
- Reuse the shared suites in `src/contracts/contract-tests.ts` so mock and real implementations are held to the same contract.
- Do not call the network in tests.
