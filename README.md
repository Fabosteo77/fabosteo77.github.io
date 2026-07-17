# Fabien Marié — osteopath website

A small, modern, **multilingual (FR + EN)** one-page website for osteopath Fabien Marié, with a
form-based CMS the owner can edit themselves. Built with **Astro (static) + TinaCMS Cloud + GitHub
Pages**.

> ## 👉 Start here: read [`PROJECT_STATUS.md`](PROJECT_STATUS.md) first
> It's the project's memory and the transfer guide.

## Where the project stands (2026-07-17)

- **Design (Phase 1): ✅ approved** (incl. contact form, 2026-07-17).
- **Build plan (Phase 2): ✅ approved** — see [`BUILD-PLAN.md`](BUILD-PLAN.md).
- **App code (Phases 3–4): built** — local review (gate 3) in progress. Not deployed yet.

## Local development

```bash
npm install
npm run tina:dev      # site + /admin (local mode, no login) on http://localhost:4321
npm run dev           # site only (requires tina/__generated__ to exist)
npm run tina:build    # production build into dist/
```

`.env` (gitignored) holds `SITE_URL`, `TINA_PUBLIC_CLIENT_ID`, `TINA_TOKEN` — see `.env.example`.
Tina Cloud credentials are only needed for the hosted `/admin`; local dev and CI builds run from the
repo content (`--content=local`).

## How editing works (for the owner)

Open `/admin` → log in (Tina Cloud) → pick « Réglages » or « Page d'accueil » → edit the form →
**Save**. Every save commits to `main`, which triggers the GitHub Actions workflow and republishes
the site (~2 minutes). Make several changes back to back rather than saving after every comma.

⚠️ **If the schema changes** (`tina/config.ts` — new fields or sections), a developer must run
`npm run tina:dev` locally and **commit the regenerated `tina/tina-lock.json`**, otherwise `/admin`
shows "GraphQL Schema Mismatch".

## Deployment

Pushes to `main` build and deploy to GitHub Pages via `.github/workflows/deploy.yml`
(repo Settings → Pages → Source = GitHub Actions; secret `TINA_TOKEN`; variable
`TINA_PUBLIC_CLIENT_ID`). Target URL: https://fabosteo77.github.io — the custom domain
**fabosteo.fr** is connected in Phase 6.

## Key files

| File | What it is |
|------|-----------|
| [`PROJECT_STATUS.md`](PROJECT_STATUS.md) | **Read first.** Status, decisions, handover. |
| [`instructions.md`](instructions.md) | The full build workflow (phases 0–6). |
| [`BUILD-PLAN.md`](BUILD-PLAN.md) | Approved build plan (pages, sections, editing model). |
| [`DESIGN-SPEC.md`](DESIGN-SPEC.md) / [`design/`](design/) | Approved design (tokens + styleguide). |
| `src/`, `content/`, `tina/` | The Astro site, its editable content, and the CMS schema. |
