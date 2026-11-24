---
inclusion: always
---
# Workflow and Kiro usage log

The hackathon judges how well Kiro is used, and the submission needs a write-up with concrete examples.

- **After any meaningful decision or Kiro experiment, append a short entry to `docs/kiro-log.md`:** date, who, which Kiro surface (IDE, CLI, Web), which feature (spec, hook, steering, MCP, PBT, power, custom agent), what happened, what it changed. Be honest, including failures.
- **Features start from a spec** in `.kiro/specs/<feature>/` (requirements in EARS format, then design, then tasks). Do not skip straight to code for anything bigger than a small fix.
- **Commit messages:** short, imperative, English.
- **Before finishing a task:** run `npm run check`. The Stop hook also runs it.
- Do not add `.kiro` to `.gitignore`. Do not remove `LICENSE`.
