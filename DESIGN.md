# Design

> **How to fill in this file**
>
> This file tells Claude what your website should look like. You don't have to be a designer to fill
> it in — answer in plain words, the way you'd describe it to a friend.
>
> - **Leave anything blank that you don't know.** Blank is a useful answer: it tells Claude to ask you
>   about it, or to propose something for you to approve.
> - Don't worry about being "wrong". Nothing here is final; it's the starting point for a conversation.
> - If you already generated a design system with `npx getdesign@latest`, keep that file too. Where the
>   two disagree about exact colours or sizes, the generated one wins — **except** for anything you
>   state clearly as a preference below (your font, your brand colours, your "please avoid" list).
>   Those are yours, and Claude will check with you before overriding them.
>
> ---

## 1. The feeling

**In three words, how should your website feel?**
(Examples: calm, warm, professional, playful, expensive, honest, bold, quiet, friendly, precise)

>

**What should someone think in the first two seconds of landing on it?**

>

**Is there anything you specifically want to avoid?**
(Examples: "not corporate", "not cheap-looking", "no stock photos of people shaking hands")

>

---

## 2. Examples you like

**1 to 3 websites you like the look of.** They don't have to be in your line of work.
For each one, add one sentence about what exactly you like — the colours, the calm, the photos, the
way the menu works. That sentence matters more than the link.

| Website | What I like about it |
|---------|----------------------|
|         |                      |
|         |                      |
|         |                      |

**Anything you actively dislike?** A site, a style, a colour — anything.

>

---

## 3. Do you have a design already?

Tick whichever applies. If more than one, tick more than one.

- [ ] I have **screenshots** of how the sections should look → put them in the `design/` folder
- [ ] I have a **Figma design** → export it at **2x** and put the images in the `design/` folder
- [ ] I have an **existing website** whose look we're keeping → link:
- [ ] I have a **brand guide / style guide** (from a designer) → put the PDF in the `design/` folder
- [ ] I have **none of these** → that's fine, Claude will propose options and you pick one

---

## 4. Logo and brand

**Do you have a logo?**
- [ ] Yes, it's in the `images/` folder. Filename:
- [ ] Yes, but only as a photo or a low-quality image
- [ ] No, I don't have one

**If you have brand colours already (from a logo, business card, van, shop sign), what are they?**
Hex codes (like `#2F5D50`) are ideal, but "dark green, the same as my logo" works too.

>

**Anything else that's part of your brand?** (A slogan, a shape you always use, a pattern)

>

---

## 5. Colours

**Which colours do you want on the site?**
(Leave blank if you don't know — Claude will propose a palette based on the feeling you described.)

- Main background:
- Text:
- Accent colour (buttons, links, highlights):
- Any colours you definitely don't want:

**Light or dark?**
- [ ] Light (dark text on a light background)
- [ ] Dark (light text on a dark background)
- [ ] No preference

---

## 6. Typeface

Claude will ask you about this even if you leave it blank, so a rough answer here saves a round trip.

**Do you have a font in mind?** (A name, or just a description: "something clean and modern", "a bit
old-fashioned and serious", "handwritten")

>

**Same font for headings and body text, or two different ones?**
- [ ] One font for everything (simplest, usually looks the most cohesive)
- [ ] Two fonts (one for headings, one for reading text)
- [ ] No preference

**Anything about text size?** (For example: "my customers are older, please make it big enough to read")

>

---

## 7. Photos and imagery

**What kind of images will the site use?**
- [ ] My own photos (they're in the `images/` folder)
- [ ] I need help — I don't have good photos yet
- [ ] Mostly no photos; more text and colour

**How should photos be treated?**
- [ ] Large and full-width, they're the main thing
- [ ] Smaller, supporting the text
- [ ] No preference

**Any illustrations, icons or patterns you want?**

>

---

## 8. How it should behave

**How much movement do you want?** (Things sliding in, fading, hovering)
- [ ] None — everything still and calm
- [ ] A little, subtle
- [ ] Quite a lot, it should feel alive
- [ ] No preference

**How chunky or airy should it feel?**
- [ ] Airy: lots of white space, everything spread out
- [ ] Compact: more on the screen, less scrolling
- [ ] No preference

**Rounded or square?** (Corners of buttons, photos, boxes)
- [ ] Rounded and soft
- [ ] Square and sharp
- [ ] Slightly rounded, in between
- [ ] No preference

---

## 9. Practical points

**Will most of your visitors be on a phone or a computer?**
(If you don't know, say so — Claude will build for both, but this decides what gets designed first.)

>

**Is there anything specific your visitors need to be able to do very easily?**
(Examples: "call me in one tap", "find my opening hours", "see my prices without scrolling")

>

**Do any of your visitors have particular needs?**
(Examples: older customers, people reading in bright sunlight, people using a screen reader)

>

---

## 10. Anything else

Anything you want to say about the look and feel that the questions above didn't cover.

>

---
---

# Design tokens

> **You don't fill this in — Claude does.**
>
> After Claude has read your answers above (and any screenshots, Figma exports or reference sites),
> it fills in this section with the exact values it will build with, and shows it to you for approval
> before writing any code. If you generated a `DESIGN.md` with `npx getdesign@latest`, its values go
> here.

## Colours

| Token | Value | Used for | Contrast (WCAG AA) |
|-------|-------|----------|--------------------|
| `--color-bg` | | | |
| `--color-surface` | | | |
| `--color-text` | | | |
| `--color-text-muted` | | | |
| `--color-accent` | | | |
| `--color-accent-contrast` | | | |
| `--color-border` | | | |
| `--color-focus` | | | |
| `--color-error` | | | |
| `--color-success` | | | |

## Typography

- Font family (headings):
- Font family (body):
- Package (`@fontsource/...`):
- Weights loaded:
- Fallback stack:

| Token | Size | Line height | Weight | Used for |
|-------|------|-------------|--------|----------|
| `--text-xs` | | | | |
| `--text-sm` | | | | |
| `--text-base` | | | | |
| `--text-lg` | | | | |
| `--text-xl` | | | | |
| `--text-2xl` | | | | |
| `--text-3xl` | | | | |

## Spacing

| Token | Value |
|-------|-------|
| `--space-1` | |
| `--space-2` | |
| `--space-3` | |
| `--space-4` | |
| `--space-6` | |
| `--space-8` | |
| `--space-12` | |
| `--space-16` | |

## Radius, shadow, borders

| Token | Value |
|-------|-------|
| `--radius-sm` | |
| `--radius-md` | |
| `--radius-lg` | |
| `--radius-full` | |
| `--shadow-sm` | |
| `--shadow-md` | |
| `--border-width` | |

## Layout

- Max content width:
- Page gutter (mobile / desktop):
- Breakpoints:
- Grid:

## Components

- **Buttons** (primary, secondary, hover, focus, disabled):
- **Links** (default, hover, visited, focus):
- **Form fields** (default, focus, error, label position):
- **Cards**:
- **Navigation** (desktop and mobile behaviour):

## Motion

- Duration:
- Easing:
- `prefers-reduced-motion` behaviour:
