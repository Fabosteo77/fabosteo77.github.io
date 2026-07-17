# Design brief — Fabien Marié osteopath site

> **STATUS: APPROVED (gate 1) — 2026-07-16.** This brief gives the rationale and overview. The
> **exact, reproducible values** live in **`design/tokens.css`** (canonical tokens) and
> **`DESIGN-SPEC.md`** (every pixel value); the approved visual reference is **`design/styleguide.html`**
> (which links `tokens.css`). Build from those three — this brief explains the "why".

---

## Feeling & guardrails (from design intake)

- **Feeling:** reassuring + dynamic — warm, trustworthy, calm core with a confident energetic accent.
- **Avoid:** not corporate/clinical-cold, and not whimsical — a refined, human middle. **No
  multi-coloured icons** (they read cheap).
- **Icons:** single-colour **line icons in a subtle solid tinted chip** — white icon on a
  translucent-white chip on blue; blue icon on a pale-blue chip (`#E1EEFF`) on light. No gradient
  behind icons. Consistent line set (Lucide/Tabler) chosen at build.
- **Imagery:** portrait photo only for now (hero, optionally About). Expertise, audiences and clinics
  use line icons, **not** photos. Design photo slots so real images can drop in later. No stock.
- **Shape & space:** airy + rounded — generous whitespace, cards 16px, buttons 12px.
- **Priority:** **mobile-first.** Most visitors are on phones; keep one-tap **call** and **book**
  above the fold on mobile. Comfortable, legible body text.

## Source hierarchy (which source leads where)

| Area | Leading source |
|------|----------------|
| Colour direction, mood, hero + "Who do I help?" layout | Your blue design example (`Images/design-layout-example.png`) |
| Structure: type scale, spacing, radii, card style, components | Intercom getdesign DESIGN.md |
| Font | **Figtree** (you specified) — replaces Intercom's Saans |
| Content (FR + EN) | `content.md` |
| Remaining sections (expertise, reviews, clinics, contact, footer) | Designed to the approved direction, in Intercom's card idiom |

**The one real tension, resolved:** Intercom is a cream/charcoal, near-monochrome editorial
system — the opposite of a bold blue brand. We take Intercom's *discipline* (typographic scale,
8px spacing, hairline cards, restraint) and your blue example's *colour and energy*. Where they
disagree, your blue direction wins on colour; Intercom wins on structure.

---

## Colour tokens

Deep blue carries text; the gradient is decorative only (never under text). All ratios vs. the
surface the colour is used on.

| Token | Value | Used for | Contrast |
|-------|-------|----------|----------|
| `--color-blue-deep` | `#0B54E0` | Deep-blue section backgrounds, primary button | White text **6.2:1** ✓ AA |
| `--color-blue` | `#0F62FF` | Brand blue: links, icon strokes, small accents on light | White (button) **5.0:1** ✓; as text on light **4.6:1** ✓ |
| `--color-blue-900` | `#082E7A` | Deepest blue: footer base, pressed button | White **10:1** ✓ AAA |
| `--color-cyan` | `#3FE5FA` | Bright accent — decorative only, **never** behind text | n/a (non-text) |
| `--gradient-brand` | `linear-gradient(135deg,#0668FB 0%,#3FE5FA 100%)` | Hero glow, icon chips, accent bar, button hover sheen, dividers | non-text only |
| `--color-canvas` | `#EAF6FD` | Light section background (a whisper of cyan, not white/cream) | — |
| `--color-surface` | `#FFFFFF` | Cards lifted off canvas | — |
| `--color-ink` | `#0C1B33` | Primary text on light | On canvas **15:1** ✓ AAA |
| `--color-ink-muted` | `#45566E` | Secondary text on light | On canvas **6.8:1** ✓ AA |
| `--color-heading-blue` | `#0F62FF` | Blue headings on light sections (large text) | On canvas **4.6:1** ✓ (large ✓) |
| `--color-on-blue` | `#FFFFFF` | Text on deep blue | **6.2:1** ✓ AA |
| `--color-on-blue-muted` | `#D6E4FF` | Muted text on deep blue | **5.0:1** ✓ AA |
| `--color-hairline` | `#D3E3F0` | 1px card/border on light | — |
| `--color-hairline-blue` | `rgba(255,255,255,.16)` | Divider on deep blue | — |
| `--color-focus` | `#0F62FF` on light / `#7FF0FF` on blue | Focus ring (2px, 2px offset) | ✓ visible on both |
| `--color-error` | `#E5484D` | Form validation | ✓ |
| `--color-success` | `#30A46C` | Form success | ✓ |
| `--color-star` | `#FFE204` on blue / `#FFD900` on light | Rating & review stars (two-tone: bright on blue, slightly deeper on white so it holds up). Rendered a touch larger. | non-text |

**Reintroducing the gradient (decorative-only inventory):** ambient glow/blob behind the hero
photo · a thin accent bar under the logo / above the footer · button hover sheen · a few hairline
section dividers · the frame corner behind the photo. **Not** behind icons (icon chips are solid
tint) and **never** behind text.

---

## Typography — Figtree

One family carries everything (like Intercom). `@fontsource-variable/figtree`, weights **400 / 500 /
600 / 700**. Fallback: `Figtree, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
Figtree is friendlier and a touch wider than Saans, so display sizes are slightly smaller and
negative tracking is gentler.

| Token | Size (mobile → desktop) | Weight | Line height | Tracking | Used for |
|-------|--------------------------|--------|-------------|----------|----------|
| `--text-display-xl` | 44 → 68px | 700 | 1.05 | -1.5px | Hero headline |
| `--text-display-lg` | 34 → 44px | 700 | 1.1 | -1px | Section headings ("Who do I help?") |
| `--text-display-md` | 26 → 32px | 700 | 1.15 | -0.5px | Sub-section headings |
| `--text-headline` | 22 → 24px | 700 | 1.2 | -0.3px | Card-group titles |
| `--text-card-title` | 20px | 600 | 1.25 | -0.2px | Card titles |
| `--text-subhead` | 18 → 20px | 400 | 1.45 | — | Intro / lead paragraphs |
| `--text-body-lg` | 18px | 400 | 1.55 | — | Hero subhead, lead body |
| `--text-body` | 16px | 400 | 1.55 | — | Default body |
| `--text-body-sm` | 14px | 400 | 1.5 | — | Card body, footer |
| `--text-caption` | 12px | 500 | 1.4 | — | Meta, review dates |
| `--text-button` | 16px | 600 | 1 | — | Buttons |
| `--text-eyebrow` | 14px | 600 | 1.3 | — | Section eyebrows (sentence case) |

---

## Spacing, radius, shadow, layout

- **Spacing (8px base):** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96. Section padding **96px** desktop /
  56–64px mobile.
- **Radius:** buttons **12px**, cards **16px**, photo/media frames **20–24px**, tags & rating badge
  **pill**. _(Slightly rounder than Intercom's 8–16 cap — intentional, for the warmer wellness feel
  and to match your example.)_
- **Shadow:** Intercom avoids shadows; we allow **one** soft, brand-tinted lift on white cards:
  `0 6px 24px rgba(11,84,224,.08)`. Not gray — a faint blue lift. _(Intentional deviation, noted.)_
- **Layout:** max content width **1200px**; gutters 20px mobile / 40px desktop. Breakpoints
  480 / 768 / 1024 / 1280. Card grids 3-up → 2-up (1024) → 1-up (768).

## Components

- **Buttons.** Primary **Book** CTA is always the highest-contrast solid on its background:
  on **light** sections = `--color-blue-deep` bg + white text + gradient sheen on hover; on **deep-blue**
  sections = **white bg + deep-blue text + soft drop shadow** (lifts off the blue, most noticeable —
  matches the design example). Secondary = white/hairline on light, transparent-outline-white on blue.
  Ghost/phone = transparent with border. 12px radius, ≥44px tap height. **Hero CTAs use a larger
  size** (taller padding, 14px radius, same 16px text) for presence under the headline.
- **Cards.** White surface, 1px hairline, 16px radius, soft blue lift, 24px padding. Audience &
  expertise cards lead with a **subtle tinted chip holding a single-colour line icon** (no gradient).
- **Form fields.** White bg, 1px hairline, 12px radius, label above, blue focus ring, inline error
  in `--color-error` tied to the input.
- **Nav.** Deep-blue **sticky header, visible at all times** (pinned on scroll). **No shadow at page
  top; a soft shadow fades in only once the user scrolls** (JS toggles a `scrolled` class). Larger white
  logo lockup left; centred links **About · Patients · Expertise · Locations** (EN labels; FR:
  À propos · Pour qui · Expertise · Cabinets). Right side: a white **Contact** button (no icon) that
  scrolls to the contact section, sat next to the **Français** language switcher (globe) — **both the
  same height**. Booking is NOT in the header CTA; it lives in the hero and each clinic card. Below
  ~900px the centred links collapse to a hamburger; logo, Contact button and language switcher stay
  visible.
- **Rating badge / tags.** Pill, translucent-white on blue / hairline on light, with star row.

## Motion

Subtle: 180–220ms ease-out; gentle fade-and-rise on scroll-in; slow ambient drift on the hero
gradient glow only. Everything disabled under `prefers-reduced-motion: reduce`.

---

## Per-section layout (words)

1. **Hero** (deep blue) — Left: rating badge (stars + "5★ · N Google reviews"), display-xl headline,
   body-lg subhead, **large-size** primary **Book** CTA + phone (ghost). Right: profile photo in a
   20–24px rounded frame with a gradient glow behind it. **The portrait bleeds downward and overlaps
   the top of the About section** (as in the design example), bridging the blue→light boundary.
   Mobile: photo below text, stacked; overlap reduced/removed so it stays clean on small screens.
2. **About** (light) — Left column: blue heading + two paragraphs. Right column: one pulled Google
   review (stars, quote, name) + "See all Google reviews" button. Mobile: stacks, review below.
3. **Who do I help?** (deep blue) — display-lg heading + intro paragraph; 3 cards (Adults & Seniors,
   Pregnant Women, Infants & Children), each a tinted chip + line icon + title + hairline + list.
   Footnote line below. 3-up → 1-up.
4. **Areas of Expertise** (light) — heading + 4 white cards (tinted chip + line icon + title + body).
   2×2 → 1-up.
5. **Patient Reviews** (light) — heading + 4 white review cards (star row, text, author, date) +
   "View more reviews" button linking to Google. 2×2 → 1-up.
6. **My Clinics** (deep blue) — heading + intro; 3 clinic cards (name, address, hours, note, **Book**
   CTA) on translucent-white/hairline; payment note below. 3-up → 1-up.
7. **Contact** (light) — Left: heading, subhead, phone (tap-to-call), social row. Right: contact form
   (first/last name, email, phone, subject, message, clinic select, contact-preference radio, submit).
8. **Footer** (deep-blue-900) — brand + tagline, social row, nav, contact; thin gradient bar on top.

Every section exists in both FR and EN.

---

## Proposals for the last few opens (my recommendation in each)

1. **Language routing.** French is the primary practice, so: `/` = **French**, `/en/` = English,
   header **FR/EN** toggle links to the mirrored URL, `hreflang` alternates for SEO. _Recommend this._
2. **Booking CTA target.** The Doctolib URL is a TODO in `content.md`. I'll wire every **Book** button
   to one editable setting; until you supply the URL it points to the phone/contact section so nothing
   is dead. _Recommend this._
3. **Motion level.** Subtle (as above), reduced-motion respected. _Recommend this._

---

## Open questions
- Confirm the three proposals above (or adjust).
- Anything in the palette/type you want to push warmer, cooler, bigger, or calmer.
