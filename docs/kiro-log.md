# Kiro usage log

Honest, dated notes on how Kiro was used: what worked, what did not, what it changed.
Add an entry after every meaningful decision or experiment.

Entry format: **date · who · surface (IDE / CLI / Web) · feature · what happened · impact**

---

**2026-11-23 · Sebastian · Web · Vibe session + sub-agent (introspect)**
Used Kiro Web to analyze the hackathon rules and the idea against the judging criteria, then to
scaffold the project. Before writing any `.kiro/` file, asked the `introspect` sub-agent for the
current formats. It corrected two assumptions that would have shaped the build:
- Property-based testing in Kiro is IDE-only, so the PBT owner must use the IDE.
- File-save hook triggers do not run in Web. Hooks that must work everywhere use `Stop`.
Impact: the hook design and the team's Kiro-surface split were changed before any code existed.

**2026-11-23 · Sebastian · Web · Steering, hooks, custom agent**
Created four always-on steering files (product, tech, structure, workflow) and one `fileMatch`
file for tests. Created a `Stop` hook that runs lint, typecheck, tests and the submission check,
and keeps the agent working if anything fails. Created a `PostFileSave` hook on `.gitignore` and
`LICENSE`, and a read-only `demo-checker` agent that audits the repo against the rules.
Impact: _to be measured. Record here what the Stop hook caught._
