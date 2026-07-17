# Project status & handover — Fabien Marié osteopath site

> **READ THIS FIRST.** This file is the project's memory and the transfer guide. It is written to be
> self-contained so the project can move to a **different person, computer and accounts** and continue.
> If you are a new Claude Code session on a new machine: read this top-to-bottom, then start at
> **§7 "Transferring to a new computer + accounts"** and run Phase 0 before anything else.

**Resume in one line:** Design (Phase 1) approved; **Phase 0 re-run and PASSED on the owner's own
machine (2026-07-17)** — accounts are now the owner's. Next up is **Phase 2 — the build plan**
(see `instructions.md`). No app code exists yet.

---

## 1. What this project is

A small, modern, **multilingual (French + English)** one-page brochure website for **Fabien Marié**,
an osteopath (3 clinics in the Gironde, France). One page for now; the visitor can switch between the
FR and EN version. More pages are possible later. The owner (non-developer) must be able to edit the
text and photos themselves afterwards via a form-based CMS.

The full build workflow is in **`instructions.md`** — that document is the authoritative process
(phases 0–6). This file tracks where we are within it.

## 2. Fixed stack (from instructions.md — do not deviate)

| Layer | Choice |
|-------|--------|
| Frontend | **Astro**, `output: 'static'`, no adapter |
| CMS | **TinaCMS** + **Tina Cloud** (free tier), form editor at `/admin` (no `ui.router`, no inline visual editing) |
| Content | Flat Markdown/JSON in `content/`, same repo |
| CI/CD | **GitHub Actions** (free for public repos) |
| Hosting | **GitHub Pages** (free, custom domain + HTTPS) |
| Forms | **Formsubmit.co** |
| Fonts | **@fontsource** (self-hosted) — **Figtree** |
| Analytics | Plausible, optional, only after cookie consent |

Hard rules: one **public** GitHub repo; fully static (no SSR); secrets only in `.env` (gitignored) +
GitHub Secrets; **`tina/tina-lock.json` IS committed**. See `instructions.md` §Pitfalls.

## 3. Current phase & approvals

- **Phase 0 (environment):** ✅ **re-run and passed on the OWNER's machine (2026-07-17)** — see §9b
  for the verified baseline. Owner accounts configured: git identity = Fabien Marié /
  fabien.marie07@gmail.com; GitHub CLI authenticated as **Fabosteo77**; public repo agreed;
  contact-form recipient decided: **contact@fabosteo.fr**.
- **Phase 1 (design):** ✅ **COMPLETE & APPROVED (2026-07-16).**
  - Page structure & background rhythm — approved (`CONTENT-MAP.md`).
  - Full design brief with tokens — approved (`DESIGN-BRIEF.md`, marked APPROVED).
  - Visual styleguide — approved (`design/styleguide.html`).
- **Phase 2 (build plan):** ✅ **APPROVED 2026-07-17** — see `BUILD-PLAN.md`. Owner reviewed the
  styleguide first and asked for the contact form to be added to it; done and approved (see
  `DESIGN-SPEC.md` §7b + "Forms" tokens in `design/tokens.css`), then approved the build.
- **Phase 3 (scaffold) + Phase 4 (build):** ✅ **DONE 2026-07-17.** Astro 7 + Tina 3 project in this
  folder; git repo initialised (local only). All pages build (`npm run tina:build`) and were verified
  locally: FR `/`, EN `/en/`, legal ×2, 404, `/styleguide` (matches approved tokens), mobile OK,
  hamburger OK, no console errors. `tina/tina-lock.json` committed. Local `.env` uses placeholder
  Tina credentials until the Tina Cloud project exists (build runs `--content=local`).
  Dev server: `.claude/launch.json` → "site" (`npm run tina:dev`, port 4321).
- **Gate 3 (owner review of the built site):** ⏳ awaiting the owner's page-by-page review.
- **Phase 5 (deploy):** not started — needs owner: create Tina Cloud account (app.tina.io), then
  create public repo `fabosteo77.github.io`, push, set Pages source = Actions, secret `TINA_TOKEN`,
  variable `TINA_PUBLIC_CLIENT_ID`, first Formsubmit confirmation click. Workflow file is ready.

## 4. File inventory (what's in the folder)

| File / folder | What it is | Authoritative? |
|---------------|-----------|----------------|
| `instructions.md` | The full build workflow (phases 0–6). | ✅ process |
| `PROJECT_STATUS.md` | This file — status + handover. | ✅ status |
| `DESIGN-BRIEF.md` | **Approved** design system: rationale, tokens overview, per-section layout, components, motion. | ✅ design (rationale) |
| `DESIGN-SPEC.md` | **Exhaustive exact spec** — every pixel value, so the build reproduces the design identically. Also explains how to review/adjust the design on a new machine. | ✅ design (exact) |
| `design/tokens.css` | **Canonical design tokens** (exact colours/type/spacing/radius/shadow/motion). Shared by the styleguide (linked) and the future build (`styles/tokens.css`). Edit here to change the design everywhere. | ✅ single source |
| `CONTENT-MAP.md` | **Approved** one-page section list + background rhythm. | ✅ structure |
| `content.md` | All site copy in **FR + EN**, mirrored, with some TODO placeholders. | ✅ content |
| `DESIGN.md` | The owner's blank design-intake template (answers were captured into DESIGN-BRIEF instead). | reference |
| `design/styleguide.html` | **Approved** standalone visual preview — **links `tokens.css`** (single source of truth); real portrait, header, hero, buttons, cards, button states. Open it in a browser to see the agreed look. | ✅ visual ref |
| `design/intercom-reference.md` | The Intercom getdesign system we borrowed *structure* from (copied here so it isn't stranded in temp). | reference |
| `Images/Fabien-chat.png` | Portrait photo (hi-res, 1107×1477-ish). | asset |
| `Images/logo.png` | White logo lockup (mark + "Fabien Marié / Ostéopathe D.O"), ~482×160, transparent — shows on the blue header/footer. | asset |
| `Images/design-layout-example.png` | The owner's original hero + "who do I help" layout reference. | reference |
| `.claude/launch.json` | Dev-preview config: runs `npx serve` on port 4321 (used to preview the styleguide). | tooling |

> **For an identical rebuild:** the exact values live in `design/tokens.css` + `DESIGN-SPEC.md`, and
> the approved look is `design/styleguide.html`. The build must copy `tokens.css` to `styles/tokens.css`
> and reproduce the components from `DESIGN-SPEC.md` §4–§7 (diff against the styleguide). The owner can
> re-open and adjust the design on the new machine — see `DESIGN-SPEC.md` §13.

## 5. Design decisions (summary — full detail in DESIGN-BRIEF.md; exact values in DESIGN-SPEC.md)

- **Direction:** Intercom's *structure* (type scale, 8px spacing, hairline cards, restraint) + the
  owner's *blue* colour/energy. **Figtree** throughout (weights 400/500/600/700).
- **Feeling:** reassuring + dynamic. **Avoid:** not corporate, not whimsical; **no multi-coloured icons**.
- **Colour:** deep blue `#0B54E0` carries all text (white 6.2:1 AA). Gradient `#0668FB → #3FE5FA` is
  **decorative only** (hero glow, accent bars, button hover) — never behind text or icons. Light
  sections on pale cyan `#EAF6FD`. Ink `#0C1B33`. Full token table in DESIGN-BRIEF.md.
- **Stars:** `#FFE204` on blue, `#FFD900` on light, rendered slightly larger.
- **Icons:** single-colour **line icons** (Lucide/Tabler) in a subtle solid tinted chip — no gradient
  behind. Final glyph set chosen at build.
- **Imagery:** portrait only for now; expertise/audiences/clinics use icons; design photo slots for
  later. No stock.
- **Shape/space:** airy + rounded (cards 16px, buttons 12px, hero CTAs larger at 14px).
- **Header:** deep-blue **sticky** header, always visible. **No shadow at page top; shadow fades in on
  scroll.** Larger white logo left; centred links **About · Patients · Expertise · Locations**
  (FR: À propos · Pour qui · Expertise · Cabinets); right = white **Contact** button (no icon, same
  height as the switcher) + **Français** language switcher. Booking is NOT in the header — it lives in
  the hero and each clinic card. Below ~900px links → hamburger.
- **Buttons:** primary Book = highest-contrast solid (white-on-blue in blue sections, blue-on-white in
  light). Focus rings: cyan on blue, blue on light.
- **Language routing (proposed, approved):** `/` = French (primary), `/en/` = English, header toggle,
  `hreflang` alternates.
- **Priority:** mobile-first; one-tap call/book above the fold on mobile.

## 6. Content status & placeholders (TODOs the owner must fill after launch)

From `content.md` — all of these are intentionally placeholders; make each **editable in the CMS**,
never hard-coded:

- **Doctolib booking URL** (`bookingUrl`) — every "Book"/"Prendre RDV" button points here. Until it
  exists, wire Book buttons to scroll to the contact section (agreed).
- **Social links** (Instagram, TikTok, Facebook, LinkedIn, YouTube) — empty.
- **Clinic map links** (`mapsUrl` for Talence, Mérignac, Bordeaux) — empty.
- **Expertise / clinic images** — none yet; use line icons (agreed).
- **Contact form recipient email** — needed for Formsubmit; **the new owner must decide this** (see §7).
- Reviews text is truncated as on the live site (ends in "…"); can be pulled in full from Google later.

Business details present as placeholders: phone `06 98 69 48 59`, email `contact@fabienmarieosteo.fr`,
3 clinic addresses & hours. Build a **Settings** collection so all are editable (per instructions.md §3.3).

---

## 7. Transferring to a NEW computer + accounts  ⭐ (do this before Phase 2 on the new machine)

The design was done on Sjoerd's Windows machine, signed in to git/GitHub as **sjoerdkoelewijn**. On the
new machine the OS, tool versions and — crucially — the **accounts** are different, so the environment
and account steps must be redone. Nothing about the design changes; only the environment/accounts do.

### Step 1 — Move the project folder
Copy the entire `Fabien-test/` folder to the new computer. There is **nothing to exclude yet** (no
`node_modules/`, no `.git`, no `.env` exist). Everything needed is in the folder.

### Step 2 — Re-run Phase 0 environment checks on the new machine
Run the checklist in **§8** on the target machine and resolve anything missing. Do **not** assume the
versions in §9 — those are the design machine's and are for reference only.

### Step 3 — Set up the new person's accounts (all belong to the new owner)
- **GitHub account**, and agreement the repo will be **public** (makes Actions + Pages free). Then
  either `gh auth login` as the new account, or create an empty public repo manually.
- **Tina Cloud account** at app.tina.io (free tier) — created later in Phase 3; note it now.
- **Contact-form recipient email** — decide which address form submissions go to (Formsubmit sends it
  a one-time confirmation before it works). This is the one business detail needed up front.
- Reconfigure **git identity** on the new machine: `git config --global user.name/​user.email` to the
  new person.

### Step 4 — Continue the build
Once Phase 0 passes and accounts are lined up, proceed to **Phase 2 (build plan)** in `instructions.md`,
then Phase 3 (scaffold Astro + Tina), Phase 4 (build the page from DESIGN-BRIEF.md + content.md),
Phase 5 (deploy to GitHub Pages), Phase 6 (optional custom domain). All design decisions are already
locked — no need to re-ask; build to DESIGN-BRIEF.md and `design/styleguide.html`.

---

## 8. Phase 0 checklist (run on the target machine)

Detect the OS first, then use the right commands.

1. **Operating system & architecture** — tailor all later commands to it (Windows vs macOS).
2. **Node.js** — `node -v`. Need active LTS **20+**, ideally **22** (the deploy workflow pins Node 22).
   Missing/old → install from nodejs.org or via nvm.
3. **npm** — `npm -v` (ships with Node).
4. **Git** — `git --version`; then `git config --global user.name` and `...user.email`. Not set → set
   to the **new** person.
5. **GitHub CLI** — `gh --version` and `gh auth status`. Not authenticated → `gh auth login` as the new
   account (or create the public repo manually and note the URL).
6. **Free tiers still valid** — verify (web/dashboards) that **Tina Cloud** still has a usable free tier
   and **GitHub Pages/Actions** is still free for public repos. Don't trust old numbers.
7. **Confirm inputs present** — text (`content.md`) ✅, images (`Images/`) ✅, design (`DESIGN-BRIEF.md`,
   `design/styleguide.html`) ✅. Ask the owner for: contact-form email, and languages confirmation
   (FR primary + EN — already agreed).

Then summarise ready/missing per item and only continue once everything missing is resolved.

## 9. Baseline from the design machine (REFERENCE ONLY — re-verify on target)

Captured 2026-07-16 on the machine where the design was done. **Do not rely on these for the new
machine — they will differ.** Listed so you know a working setup looked like this:

- OS: Windows 11 (10.0.26200), MSYS/MinGW bash available, PowerShell primary.
- Node **v24.18.0**, npm **11.16.0**. (Note: v24 worked locally for `npx getdesign`; the CI workflow
  should still pin Node **22** per instructions.md.)
- git **2.38.1**, configured as **Sjoerd / s.koelewijn@gmail.com**.
- gh **2.49.2**, authenticated as GitHub account **sjoerdkoelewijn**.
- `npx getdesign@latest add intercom` succeeded (used to fetch the Intercom reference).

## 9b. Verified baseline on the OWNER's machine (2026-07-17) — Phase 0 PASSED

- OS: Windows 11 Home (10.0.26200), PowerShell primary.
- Node **v24.18.0** (installed via winget), npm **11.16.0**.
- git **2.55.0**, configured as **Fabien Marié / fabien.marie07@gmail.com**.
- gh **2.96.0**, authenticated as GitHub account **Fabosteo77** (owner's account). Repo will be public ✅.
- Tina Cloud free tier re-verified 2026-07-17: $0 forever, 2 users, 1 project, unlimited documents,
  100 MB assets — fine for this site. GitHub Pages/Actions free for public repos re-verified ✅.
- Contact-form recipient: **contact@fabosteo.fr** (owner's choice). ⚠️ Differs from the
  `contact@fabienmarieosteo.fr` placeholder in `content.md` — use contact@fabosteo.fr in the build
  (Settings collection + Formsubmit endpoint).
- The current live site is at **fabosteo.fr** — this project is its replacement.

## 10. Session-specific things NOT to carry over

- A local preview server ran at **http://localhost:4321** (`.claude/launch.json` → `npx serve`) to view
  `design/styleguide.html`. On the new machine, start your own preview; the URL/port are not portable.
  Note: `serve` caches — hard-refresh or append `?v=N` when previewing edits.
- On the design session, the browser-pane **screenshot tool timed out** (infra); rendering was verified
  via page text / DOM queries / server 200s instead. This is not a project problem.

## 11. Suggested first prompt for the new Claude Code session

> "Read `PROJECT_STATUS.md`. This project is being continued on a new computer and new accounts, so
> before anything else run Phase 0 from `instructions.md` §8 of the status file and report ready/missing
> one item at a time. The design (Phase 1) is already approved — build to `DESIGN-BRIEF.md` and
> `design/styleguide.html`; don't re-open design decisions. After Phase 0 passes, present the Phase 2
> build plan for approval."

---

## Decisions log
- Gradient = decorative accents only; deep blue `#0B54E0` for text surfaces.
- Feeling reassuring+dynamic; not corporate/whimsical; monochrome line icons in tinted chips.
- Portrait only + icons; photo slots for later; no stock.
- Airy + rounded; mobile-first.
- Stars two-tone (`#FFE204`/`#FFD900`), larger.
- Sticky header, shadow on scroll only; nav About·Patients·Expertise·Locations; header CTA = **Contact**
  button (no icon); booking lives in hero + clinics; Français switcher.
- Language routing `/` FR + `/en/` EN.
- Gate 1 (design) approved 2026-07-16.
- 2026-07-17: Phase 0 passed on the owner's machine. GitHub account = **Fabosteo77**, repo will be
  **public**, contact-form email = **contact@fabosteo.fr** (replaces the content.md placeholder).

## Open questions (for the build phases)
- ~~Contact-form recipient email~~ → **decided: contact@fabosteo.fr** (2026-07-17).
- ~~Custom domain~~ → **decided 2026-07-17: fabosteo.fr moves to the new site in Phase 6** (build and
  validate on fabosteo77.github.io first). Registrar still unknown — ask when Phase 6 starts.
- ~~Analytics~~ → **decided 2026-07-17: no analytics for now** (cookie banner still included; can add
  Plausible later).
- Doctolib booking URL, socials, clinic map links (owner fills in CMS post-launch).
- Menu/404/form success+error copy, JSON-LD business type = LocalBusiness (confirm in Phase 2).
