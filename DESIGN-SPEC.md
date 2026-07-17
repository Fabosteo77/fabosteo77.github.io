# Design spec — exact, reproducible values

> **Purpose:** reproduce the approved design **identically** on any machine. This is the exhaustive,
> pixel-level companion to `DESIGN-BRIEF.md` (which gives the rationale). The three canonical sources,
> in order of authority:
>
> 1. **`design/tokens.css`** — the exact colour/type/spacing/radius/shadow/motion variables. The build
>    copies this to `styles/tokens.css` and uses the variables verbatim — **no hard-coded values**.
> 2. **`design/styleguide.html`** — the approved visual reference and the exact component CSS. When a
>    number here and there ever disagree, **the styleguide wins** (it is what was approved on screen).
> 3. **This file** — human-readable mirror of every value, so a build can be written without reverse-
>    engineering the HTML.
>
> Approved 2026-07-16. To view it: run the preview (see end of file) and open `design/styleguide.html`.

---

## 1. Global

- `*{ box-sizing:border-box; margin:0; padding:0 }`
- **Body:** `font-family: var(--font)` (Figtree); `color: var(--ink)`; `background: var(--canvas)`;
  `line-height: 1.55`; `-webkit-font-smoothing: antialiased`.
- **Container `.wrap`:** `max-width: 1100px; margin: 0 auto; padding: 0 40px` (desktop gutter 40px;
  mobile gutter 20px in the build).
- **Section vertical rhythm:** styleguide uses `72px` top/bottom. Real site target: `96px` desktop /
  `56–64px` mobile (`--space-section`). Confirm on first full-page review; either is on-brand.
- **Fonts:** Figtree, weights **400 / 500 / 600 / 700**.
  - Preview: Google Fonts `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700`.
  - Build: `@fontsource-variable/figtree` (self-hosted), same weights.

## 2. Colour tokens (exact — from tokens.css)

| Variable | Hex / value | Use | Contrast |
|----------|-------------|-----|----------|
| `--blue-deep` | `#0B54E0` | deep-blue section bg, primary button | white **6.2:1** ✓ |
| `--blue` | `#0F62FF` | links, icon strokes, focus ring on light | as text on light **4.6:1** ✓ |
| `--blue-900` | `#082E7A` | footer base | white **10:1** ✓ |
| `--cyan` | `#3FE5FA` | decorative accent, list bullets — **never behind text/icons** | n/a |
| `--cyan-focus` | `#7FF0FF` | focus ring on blue | ✓ |
| `--gradient` | `linear-gradient(135deg,#0668FB 0%,#3FE5FA 100%)` | glows, accent bars, button hover sheen | non-text |
| `--canvas` | `#EAF6FD` | light section bg | — |
| `--surface` | `#FFFFFF` | cards | — |
| `--chip-light` | `#E1EEFF` | icon chip bg on light | — |
| `--ink` | `#0C1B33` | text on light | **15:1** ✓ |
| `--ink-muted` | `#45566E` | muted text on light | **6.8:1** ✓ |
| `--on-blue` | `#FFFFFF` | text on blue | **6.2:1** ✓ |
| `--on-blue-muted` | `#D6E4FF` | muted text on blue | **5.0:1** ✓ |
| `--hairline` | `#D3E3F0` | 1px border on light | — |
| `--hairline-blue` | `rgba(255,255,255,.16)` | divider on blue | — |
| `--star` | `#FFE204` | stars on blue | non-text |
| `--star-light` | `#FFD900` | stars on light | non-text |
| `--error` | `#E5484D` | form error | — |
| `--success` | `#30A46C` | form success | — |

## 3. Typography (exact)

| Role | Size | Weight | Line-height | Letter-spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| H1 (`display-xl`) | **60px** | 700 | 1.05 | **-1.5px** | hero headline; scales to ~44px mobile |
| H2 (`display-lg`) | **42px** | 700 | 1.10 | **-1px** | section heading; +8px margin-bottom |
| H3 (`headline`) | **22px** | 700 | 1.20 | **-0.3px** | card-group / footer brand |
| card title | **20px** | 600 | 1.25 | -0.2px | expertise/audience card title |
| `.lead` (subhead) | **19px** | 400 | 1.45 | — | intro/lead paragraphs |
| body | **16px** | 400 | 1.55 | — | default |
| card body / list | **15px** | 400 | 1.5 | — | `ul.clean` + card paragraphs |
| `.eyebrow` | **14px** | 600 | 1.3 | — | opacity .9; sentence case |
| `.label` (styleguide only) | 12px | 600 | — | .06em, uppercase | section labels in the preview — not used on the real site |
| button | **16px** | 600 | 1 | — | (header contact/lang: 15px) |
| caption/meta | 12–14px | 500–600 | 1.4 | — | review author 14px/600, date 12px |

Colour rules: headings on light may use `--blue-deep` (e.g. expertise titles) or `--ink`; on blue all
headings are `#fff`. Muted text = `--ink-muted` (light) / `--on-blue-muted` (blue).

## 4. Buttons (exact)

Base `.btn`: `font 16px/1 600; border:0; border-radius:12px; padding:13px 22px; display:inline-flex;
align-items:center; gap:9px; transition:transform .18s ease; position:relative; overflow:hidden`.
Icon inside: `svg 19×19, stroke:currentColor, fill:none, stroke-width:1.9, round caps/joins`.

- **`.btn-lg`** (hero CTAs): `padding:16px 28px; border-radius:14px` → rendered height **≈51px** vs
  **≈45px** for the base button.
- **Primary on light** (`.btn-primary`): bg `--blue-deep`, text `#fff`. Hover: gradient sheen via
  `::after` (bg `--gradient`, `opacity 0 → .28`, 0.2s).
- **Primary on blue** (`.on-blue .btn-primary`): **bg `#fff`, text `--blue-deep`,
  box-shadow `0 8px 22px rgba(3,20,55,.22)`**; no gradient sheen. Hover:
  `translateY(-2px); box-shadow 0 14px 30px rgba(3,20,55,.34)`.
- **Secondary on light** (`.btn-secondary`): bg `#fff`, text `--blue-deep`, `1px --hairline`.
  Hover: border+text → `--blue`.
- **Secondary on blue**: transparent, text `#fff`, `1px rgba(255,255,255,.4)`. Hover:
  bg `rgba(255,255,255,.12)`, border `#fff`.
- **Ghost** (hero phone): transparent, `1px rgba(255,255,255,.4)`. Hover bg `rgba(255,255,255,.12)`.
- **Focus (keyboard):** on light `outline:3px solid --blue; outline-offset:3px`; on blue
  `outline:3px solid #7FF0FF; outline-offset:3px`.
- Tap height ≥44px on all touch targets.

## 5. Header (exact)

- `.site-header`: `position:sticky; top:0; z-index:50; background:--blue-deep;
  transition:box-shadow .2s ease`. **No shadow at top.** JS toggles `.scrolled` when `scrollY > 6`,
  adding `box-shadow:0 4px 18px rgba(3,20,55,.22)`.
- `.header-inner`: flex, `align-items:center; height:82px`.
- **Logo:** `.brand img{ height:52px; width:auto }` (white lockup `Images/logo.png` on the blue bar).
- **Nav:** `.nav-links{ flex:1; justify-content:center; gap:38px }`; links `#fff, 16px/500,
  opacity .9 → 1 on hover`. Items (EN): **About · Patients · Expertise · Locations**
  (FR: À propos · Pour qui · Expertise · Cabinets).
- **Right cluster** `.header-cta{ gap:14px }`:
  - **Contact button** `.btn.btn-primary.header-contact`: white (on-blue primary), **no icon**,
    `padding:11px 16px; font-size:15px; border:1px solid transparent` → height **42px**. Scrolls to
    the contact section.
  - **Language switcher** `.lang-switch`: transparent, `#fff, 15px/500`, `1px rgba(255,255,255,.4)`,
    `border-radius:12px; padding:11px 16px; gap:9px`; globe svg `17×17, stroke-width 1.8` → height
    **42px** (equal to Contact). Hover bg `rgba(255,255,255,.12)`.
- **Responsive:** below **900px** `.nav-links{ display:none }` → hamburger (build it); logo, Contact
  and language switcher stay visible.

## 6. Hero (exact)

- Layout `.hero-grid`: `grid-template-columns:1.05fr .95fr; gap:48px; align-items:center`. Stacks to
  1 column below 820px (mobile: photo below text).
- **Accent bar** above: `.accent-bar` `height:6px; background:--gradient; border-radius:999px`, hero
  instance `width:64px; margin-bottom:28px`.
- **Rating badge** `.badge`: inline-flex, `gap:10px; bg rgba(255,255,255,.12); border 1px
  rgba(255,255,255,.2); padding:8px 14px; border-radius:999px; font-size:14px`; stars inside at 17px.
- **Headline** H1; **subhead** `.lead.muted-blue` `margin:20px 0 30px; max-width:30ch`.
- **CTAs:** `.btn-lg.btn-primary` (Book, calendar icon) + `.btn-lg.btn-ghost` (phone icon + number).
- **Portrait** `.photo-frame img`: `width:100%; border-radius:24px`. **Glow** behind:
  `position:absolute; inset:-6%; background:--gradient; filter:blur(28px); opacity:.5;
  border-radius:40px; z-index:0` (photo `z-index:1`).
- **Overlap treatment (build):** the portrait bleeds downward and overlaps the top of the About
  section, bridging the blue→light edge (per the design example). Reduce/remove overlap on mobile.

## 7. Cards, chips, lists (exact)

- **Card** `.card`: `bg --surface; border:1px --hairline; border-radius:16px; padding:24px;
  box-shadow:0 6px 24px rgba(11,84,224,.08)`. **On blue** (`.blue .card`): `bg rgba(255,255,255,.08);
  border 1px rgba(255,255,255,.16); no shadow; text #fff`.
- **Icon chip** `.chip-icon`: `52×52; border-radius:14px; margin-bottom:16px; flex center`. On light:
  `bg --chip-light; color --blue-deep`. On blue: `bg rgba(255,255,255,.14); color #fff`. Icon svg
  `26×26; stroke:currentColor; stroke-width:1.7; round caps`.
- **List** `ul.clean`: no bullets; each `li` `padding:5px 0 5px 22px` with a `--cyan` dot
  `7×7; border-radius:50%; top:12px; left:0`.
- **Divider** `.divider`: `height:1px; background:--hairline; margin:14px 0` (blue: `rgba(255,255,255,.16)`).
- **Stars** `.stars`: `font-size:21px; letter-spacing:3px; color:--star-light`; on blue → `--star`;
  inside `.badge` → 17px.

## 7b. Contact form (exact — added & approved 2026-07-17)

Shown in `design/styleguide.html` ("Contact form" section). Lives on light background; the form sits
in a **white card** (`.form-card`: same as `.card` but `padding:28px`). Left column: heading, phone as
`.btn-secondary` with phone icon, social line-icons in 46×46 chips (`border-radius:12px`, icon 22×22).

- **Layout:** `.contact-grid` `grid-template-columns:.85fr 1.15fr; gap:40px` → 1 col below 820px.
  Fields grid: 2 columns, `gap:16px` (Prénom/Nom, Email/Téléphone side by side; sujet, cabinet,
  préférence, message full-width) → 1 col below 640px.
- **Field label:** 15px/600 `--ink`, 6px gap above the input. Required marker `*` in `--blue-deep`.
- **Input** (`.input`): full-width, font 16px `--ink`, bg `#fff`, `1px solid --input-border (#B9CFE0)`,
  `border-radius: var(--radius-input) (12px)`, `padding:13px 14px`. Placeholder `--input-placeholder
  (#6E8098)`. Textarea: `min-height:120px; resize:vertical`. Select: custom chevron (inline SVG bg,
  right 14px), `padding-right:42px`.
- **Focus:** `border-color:--blue` + `box-shadow:0 0 0 3px var(--focus-ring-form) (rgba(15,98,255,.18))`,
  no outline. **Error:** `border-color:--error` + ring `var(--error-ring-form)`; message below 13px/500
  `--error`.
- **Radios** (contact preference): native, `19×19`, `accent-color:--blue-deep`, label 16px/400,
  focus-visible ring 3px `--blue`.
- **Submit:** `.btn-lg.btn-primary` "Envoyer" with send icon, 20px above.
- **Banners** (`.notice`): `border-radius:12px; padding:14px 16px; 15px/500; icon 19×19`. Success:
  bg `--notice-success-bg #E7F6EE`, text `--notice-success-ink #1B6B47`, border `--success`. Error:
  bg `--notice-error-bg #FDECEC`, text `--notice-error-ink #B3261E`, border `--error`. Approved copy
  (FR): success « Merci ! Votre message a bien été envoyé. Je vous répondrai au plus vite. » / error
  « Désolé, l'envoi a échoué. Réessayez dans un instant ou appelez-moi directement au 06 98 69 48 59. »
- Form tokens live in `design/tokens.css` (“Forms” block).

## 8. Section background rhythm (from CONTENT-MAP.md)

Header (blue) → Hero (blue) → About (light) → Who do I help? (blue) → Expertise (light) →
Reviews (light) → Clinics (blue) → Contact (light) → Footer (blue-900). Alternation lets the gradient
accents read on both grounds.

## 9. Icons

Single-colour **line** icons, consistent stroke (`~1.7` in chips, `~1.9` in buttons). The glyphs in the
styleguide (activity/pulse, heart, smiley, bolt, calendar, phone, globe) are **placeholders to show the
treatment**. Final set: pick a coherent **Lucide** or **Tabler** line set at build; run the specific
audience/expertise glyph choices past the owner. No multi-colour icons. Chips never use the gradient.

## 10. Motion

`transition` durations: general `.18s ease`, fast `.15s`, gradient sheen `.2s`, header shadow `.2s`.
All wrapped by `@media (prefers-reduced-motion: reduce)` → durations 0.

## 11. Breakpoints

Styleguide demo uses 820px (grids → 1 col) and 900px (nav → hamburger). Real responsive build targets
**480 / 768 / 1024 / 1280** (see DESIGN-BRIEF.md): card grids 3-up → 2-up (1024) → 1-up (768); nav
hamburger < ~900; H1 scales 60→~44px; section padding tightens on mobile.

## 12. Reproduction checklist (to get an identical result on another machine)

1. Copy `design/tokens.css` into the build as `styles/tokens.css`; reference every colour/size through
   its variables — never hard-code a hex or px that has a token.
2. Load Figtree 400/500/600/700 via `@fontsource-variable/figtree`.
3. Rebuild each component to the exact numbers in §4–§7 (they are also live in `design/styleguide.html`
   — diff against it).
4. Keep the section rhythm in §8 and the two-tone stars, the shadow-on-scroll header, the white-on-blue
   primary buttons, and the decorative-only gradient.
5. Verify contrast still passes (values in §2) and that `prefers-reduced-motion` is respected.
6. Open the built page next to `design/styleguide.html` and compare side by side.

## 13. Reviewing & adjusting the design on the new machine

The design is meant to be re-openable and tweakable there:

1. Start the preview: from the project root run `npx serve . -l 4321` (or use `.claude/launch.json` via
   Claude Code's preview), then open **http://localhost:4321/design/styleguide** — or just open
   `design/styleguide.html` directly in a browser.
2. To adjust **colours/type/spacing/radius**: edit **`design/tokens.css`** — the preview updates and
   the build stays in sync (single source of truth). Hard-refresh (the static server caches; append
   `?v=N` to bust it).
3. To adjust **component look** (button sizes, header, cards, chips): edit the CSS in
   `design/styleguide.html`, then mirror the change into this spec so it stays authoritative.
4. Re-approve after changes, and update `DESIGN-BRIEF.md` / this file / `PROJECT_STATUS.md` accordingly.
