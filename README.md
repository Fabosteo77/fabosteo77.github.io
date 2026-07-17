# Fabien Marié — osteopath website

A small, modern, **multilingual (FR + EN)** one-page website for osteopath Fabien Marié, with a
form-based CMS the owner can edit themselves. Built with **Astro (static) + TinaCMS Cloud + GitHub
Pages**.

> ## 👉 Start here: read [`PROJECT_STATUS.md`](PROJECT_STATUS.md) first
> It's the project's memory and the transfer guide. **If you're picking this up on a new computer /
> new accounts, do Phase 0 (environment + account checks) before anything else** — see
> `PROJECT_STATUS.md` §7–§8. A ready-to-paste first prompt for a fresh Claude Code session is in §11.

## Where the project stands (2026-07-16)

- **Design (Phase 1): ✅ approved.**
- **App code: not started yet** — there is no `src/` / `content/` / `tina/` / `package.json` / `.git`
  yet. Next step is the **Phase 2 build plan** (on a machine that has passed Phase 0).

## See the design

Run a preview from the project root and open the styleguide:

```bash
npx serve . -l 4321
# then open http://localhost:4321/design/styleguide
```

Or just open [`design/styleguide.html`](design/styleguide.html) directly in a browser. (The static
server caches — hard-refresh or add `?v=2` to the URL after edits.)

## Key files

| File | What it is |
|------|-----------|
| [`PROJECT_STATUS.md`](PROJECT_STATUS.md) | **Read first.** Status, full handover, Phase 0 checklist. |
| [`instructions.md`](instructions.md) | The full build workflow (phases 0–6). |
| [`DESIGN-BRIEF.md`](DESIGN-BRIEF.md) | Approved design — the rationale and overview. |
| [`DESIGN-SPEC.md`](DESIGN-SPEC.md) | Exhaustive **exact** values for an identical rebuild; how to review/adjust the design. |
| [`design/tokens.css`](design/tokens.css) | Canonical design tokens (single source of truth). |
| [`design/styleguide.html`](design/styleguide.html) | Approved visual reference. |
| [`CONTENT-MAP.md`](CONTENT-MAP.md) | Approved one-page section structure. |
| [`content.md`](content.md) | All copy, FR + EN. |
| `Images/` | Portrait, logo, layout reference. |

## Adjusting the design

Edit [`design/tokens.css`](design/tokens.css) for colours/type/spacing (preview + build stay in sync),
or the component CSS in `design/styleguide.html` for layout details. See `DESIGN-SPEC.md` §13.
