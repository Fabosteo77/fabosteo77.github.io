# Claude Code Instructions: Website for a Solo Business Owner
### Stack: Astro (static) + TinaCMS Cloud + GitHub Pages — completely free

You are building a small, modern, SEO-friendly website together with a business owner, which they
will then be able to update themselves. Follow this document exactly.

**Before you do anything else:** if a file named `PROJECT_STATUS.md` already exists in the project
folder, read it first and continue from where the last session left off. If it doesn't exist, you
are starting fresh (you create it in Phase 0). See "Session continuity" in the behavioural rules: a
build this size will not fit into a single session.

**Language:** communicate in whatever language the owner uses. This document is your instruction, not
your script.

---

## Who you are working with (read this first)

The person you are working with is a business owner, **not a developer**. They may have opened a
terminal for the first time today. That changes how you communicate:

- **Use plain language.** No jargon. If you must use a technical word ("repository", "API token"),
  explain it in one short sentence the first time you use it.
- **Ask ONE question at a time.** Never send a list of questions. Ask, wait for the answer, then ask
  the next one. This is the most important communication rule in this document.
- **Give options with a recommendation.** Where possible offer 2-4 clear options, say which one you
  recommend and why. If they say "I don't know" or "you decide", pick your recommendation and tell
  them what you picked.
- **Announce every phase in plain words.** What is about to happen, what you will do, what they need
  to do, roughly how long it takes. A few sentences.
- **Explain before you act.** Before doing anything that touches their accounts (GitHub, Tina Cloud,
  DNS), say what you are about to do and why.
- **Never blame the user.** If something fails, stay calm, explain it simply, fix it or propose a fix.
- **Explain the working style early.** Tell them they have a choice: you can ask permission before
  every technical step, or work through the technical steps on your own and stop only for decisions a
  non-developer can actually make (approving the plan, choosing between design options, reviewing each
  page). Explain that "approve everything" is not safer for them: it mostly means approving things
  they can't evaluate. Real safety comes from the approval gates plus the fact that everything is in
  Git and is reversible. Recommend the autonomous style, but respect their choice.
  **Whichever style they pick, the three approval gates always stay:** the design brief (Phase 1), the
  build plan (Phase 2), and the styleguide plus page-by-page review (Phase 4).

---

## What you are building

- A **home page**
- **2 to 4 more pages**, typically: About, Services, Contact (the exact pages follow from the content
  and the plan)
- Content the owner can edit themselves in a friendly form-based panel at `/admin` (TinaCMS), after
  which the site republishes itself automatically

## Architecture (fixed: do not deviate)

| Layer | Choice |
|-------|--------|
| Frontend | **Astro**, `output: 'static'`, no adapter |
| CMS | **TinaCMS** + **Tina Cloud** (free tier), form editor at `/admin` |
| Content | **Flat files** (Markdown/JSON) in `content/`, in the same repo |
| CI/CD | **GitHub Actions** (free and unlimited for public repos) |
| Hosting | **GitHub Pages** (free, custom domain + HTTPS) |
| Forms | **Formsubmit.co** (static-friendly, emails submissions through) |
| Fonts | **@fontsource** (self-hosted; privacy + speed) |
| Analytics | **Plausible**, optional, only after cookie consent |

Hard rules that come with this architecture:

- **One public GitHub repo.** Public, because that makes Actions and Pages free and unlimited.
  Explain this to the owner: the code is public, and so is their content (it's a website — it's
  public anyway), but secrets never go in there.
- **Fully static, no server functions.** Do **not** use TinaCMS inline visual editing
  (`<TinaIsland>` / `/tina-island/[name]`): that requires SSR and does not work on GitHub Pages. The
  owner edits through **forms** at `/admin`. That works everywhere and is just as pleasant for a
  non-technical user.
- **No `ui.router`** in the Tina schema. With a router the admin opens in preview mode and you get
  "TinaCMS form fields will appear here". Without a router you get the normal form editor.
- **No SSR, no other CMS, no other host, no database.** The stack is fixed.
- **Secrets live only in `.env`** (gitignored) and in **GitHub Secrets**. Commit a `.env.example`
  with empty placeholders. Never put a real token in a file that gets committed.
- **`tina/tina-lock.json` IS committed.** See Pitfall 1 — this is the most common mistake.

## On-disk layout (fixed)

Everything lives in the project folder the owner opened in Claude Code:

```
my-website/                      (the folder they selected)
  instructions.md                (this file)
  PROJECT_STATUS.md              (you create and maintain this)
  DESIGN.md                      (the owner's design system / design answers)
  DESIGN-BRIEF.md                (you create this in Phase 1)
  CONTENT-MAP.md                 (you create this in Phase 1)
  website-content.md             (the owner's text)
  images/                        (photos, logo, illustrations)
  design/                        (screenshots / Figma exports per section)
  src/  content/  tina/  public/ (the Astro + Tina project, same repo)
```

The text is in **`website-content.md`**, the imagery in **`images/`**, the design references in
**`design/`**. Read from those directly; never ask the owner to re-paste something that is already
sitting in the folder.

---

# Phase 0: Getting ready (technical)

**Announce the phase.** For example: "Before we build anything, I'm going to check that your computer
and your accounts are ready. Some things I can check myself; for others I'll need you. This usually
takes 15 to 30 minutes."

First, create **`PROJECT_STATUS.md`** (if it doesn't exist) with: current phase, an empty decisions
list, an empty open-questions list. Keep it updated from here on.

## What you check yourself

1. **Operating system.** Detect **first** whether they are on Windows or macOS (and the
   architecture), then tailor every instruction, path and command to it. Never give macOS commands to
   a Windows user or the other way round.
2. **Node.js.** `node -v`. Astro and the Tina CLI need an active LTS (20+, preferably 22). Missing or
   too old → simple install instructions for **their** operating system.
3. **Git.** `git --version`, plus `git config user.name` / `user.email`. Not configured → set it up
   together.
4. **GitHub access.** Is `gh` (GitHub CLI) installed and authenticated (`gh auth status`)? If yes,
   you can create the repo yourself. If not: walk them through `gh auth login` step by step, or have
   them create an empty **public** repo manually and give you the URL.
5. **npm** available.
6. **Free tiers still valid.** Actively verify (via the web or the dashboards) that **Tina Cloud**
   still has a usable free tier and that **GitHub Pages/Actions** is still free for public repos.
   Terms change; don't rely on the numbers in this document. If a limit looks tight, explain in plain
   language what that means and what the options are.

## What you ask the owner — ONE question at a time

7. **Tina Cloud account.** "Do you have an account at app.tina.io? Tina is the panel where you'll
   edit your text and photos later. The free tier is enough for one website."
8. **GitHub account**, and agreement that the repo will be **public** (explain why: it makes hosting
   and building free and unlimited).
9. **Text.** Confirm the text is in **`website-content.md`**. If parts are missing, offer to draft
   text they can refine later.
10. **Images.** Confirm the photos and logo are in **`images/`**. If something is missing, offer free
    placeholders. Mention that you'll optimise large photos before they go on the site.
11. **Contact form recipient.** "Which email address should messages from the contact form go to?"
    This is the one business detail you need up front, because the form provider has to send a
    confirmation email to it before it starts working. **All the other business details in
    `website-content.md` (name, address, phone, opening hours, social links) are placeholders on
    purpose.** Build with them as they are, make every one of them editable in the CMS, and tell the
    owner they'll fill in the real ones themselves after launch. Don't interrogate them about their
    opening hours now.
12. **Languages.** "Will the site be in one language or more? If more: which ones, and which is the
    main one?"
13. **Analytics.** "Do you want to see visitor statistics? If so, I'd recommend a privacy-friendly
    option. Either way, analytics only loads after visitors accept cookies."
14. **Custom domain.** "Do you already have a domain name, and if so, who is it registered with?"
    (Needed for Phase 6; without one we publish to `<owner>.github.io`.)

Then give a short summary (ready / missing, per item) and only continue once everything missing is
resolved. Update `PROJECT_STATUS.md`.

---

# Phase 1: Design intake ⭐ (the most important phase)

**Announce the phase.** For example: "Now we decide what your site will look like. I'm going to ask
you quite a lot of questions here — that's deliberate. The better I understand how it should look, the
less we have to rebuild later. I'm not going to invent anything myself as long as you have material."

> **Core rule for this phase: you invent NOTHING while a source of truth could still exist.**
> Screenshots > Figma > DESIGN.md > reference sites > your own proposal. You only start designing
> yourself once you have explicitly established that none of the above exists — and even then only
> after a direction has been approved.

## 1a. The design system (DESIGN.md)

Ask these one by one:

1. **"Do you have a `DESIGN.md`?"** Explain what it is: a file that holds the colours, typography,
   spacing and overall style of the site. It can come from two places: generated with
   `npx getdesign@latest` (a catalogue of ready-made design systems), or filled in by hand from the
   `DESIGN.md` template in this folder.
   - **Yes, it's in the folder** → read it in full and go to 1b.
   - **Yes, but I still need to pick one** → ask which style from the getdesign catalogue they want,
     have them run `npx getdesign@latest` and put the file in the project folder. Help them choose by
     describing 2-3 styles that suit their trade and their text.
   - **No, but I have another design to work from** → go to 1b (Figma / screenshots / an existing
     site) and treat that as the leading source. Offer to distil a `DESIGN.md` from it yourself, so
     there is one place where the tokens live.
   - **No, and I have nothing** → note this, continue with the questions, and apply 1e.

2. **If both exist, a generated getdesign `DESIGN.md` wins on token values** (colours, scales,
   radii). The hand-filled template still wins on anything the owner stated explicitly as a
   preference — their font choice, their must-keep brand colours, their "please avoid" list. If those
   two clash, don't average them: **ask**.

3. **Check what's missing in DESIGN.md.** At minimum you need: colours (background, text, accent,
   borders, states), a typographic scale, a spacing scale, border radius, shadows, breakpoints, button
   and form styles. **If something is missing, ask. Never fill a gap silently.** One question per
   missing item.

4. **Contrast check.** If the colours in DESIGN.md fail WCAG AA, say so in plain words ("this light
   grey text on white is hard to read for a lot of people") and propose an adjusted colour. Never ship
   a failing contrast quietly.

## 1b. The typeface (always ask explicitly)

Never assume what DESIGN.md says without confirming it. Ask, one by one:

5. **"Which typeface do you want?"** Give 2-4 options with a recommendation, suited to their trade and
   style. If DESIGN.md already names a font, offer that as your recommendation and ask if they'll keep
   it.
6. **Same font for headings and body text, or two fonts?**
7. **Which weights** (regular / medium / bold) do they need? More weights = a heavier site.
8. **Availability.** Check whether the font is installable via **`@fontsource`** (self-hosted; the
   default in this stack). If it's a paid or non-free font, say honestly that a licence is needed and
   propose a free alternative that gets close.

Record in `DESIGN-BRIEF.md`: font name, weights, fallback stack, package.

## 1c. Reading the content and mapping the sections

9. Read **`website-content.md`** in full. Extract **every section**: every heading, block, list, and
   any piece of text that is clearly its own section on a page (hero, about, services, how we work,
   reviews, FAQ, contact, footer, and so on).
10. Create **`CONTENT-MAP.md`** with a table: `section-slug | provisional page | heading | type of
    content (text / list / image / form)`. Present that table to the owner and ask whether you missed
    anything or grouped anything wrongly. That's a *table to read*, not a list of questions — the only
    question attached to it is: "does this structure look right?"
11. Look at what's in **`images/`** and provisionally match images to sections. If it isn't obvious
    which photo belongs to which section, **ask**, one photo at a time.

## 1d. Design references per section (screenshots / Figma)

12. Ask the key question: **"Do you have screenshots or a design for these sections?"**

13. **If there are screenshots:** ask for **one screenshot per section**, and give them the exact
    filenames you expect, derived from `CONTENT-MAP.md`:

    ```
    design/01-hero.png
    design/02-services.png
    design/03-about.png
    design/04-contact.png
    ...
    ```

    Ask them to drop the screenshots into the `design/` folder. Wait until they say they're done, then
    check which files are actually there and **name explicitly which sections are still missing**. For
    each missing section, ask — one at a time — whether an image is still coming or whether you may
    propose something.

14. **If there's a Figma design:** ask for an **export at 2x** (PNG @2x per frame/section, or a PDF
    export of the frames), using the same filename convention in `design/`. Also ask if they can share
    the Figma link; if you can't open it, the exports are what counts. Ask whether the design covers
    desktop, mobile or both — if you only have desktop, say clearly that you'll be filling in the
    mobile behaviour yourself and walk them through your approach per section.

15. **If there's an existing site, or a site they like:** ask for 1-3 links, and for one sentence per
    link: what exactly do they like about it? ("how calm it feels", "the big photos", "the way the menu
    works"). Look at those sites. Reference sites are **secondary**: good for mood, layout and section
    order, not for exact colours and tokens.

16. **Turn every screenshot into words.** Describe what you see and what you're going to rebuild
    (layout, columns, alignment, image ratios, whitespace, button style) and have the owner confirm it.
    That's how you know you're both looking at the same thing.

## 1e. Only when there is genuinely nothing: you design

Only if there are **no screenshots, no Figma export, no existing site and no usable DESIGN.md** may you
design it yourself. If so:

17. Tell them you're now going to propose something, and that they will choose.
18. Present **2 to 3 directions** in plain words (e.g. "calm and businesslike, lots of white, one
    accent colour" versus "warm and personal, big photos, soft colours"), each with what it means for
    their content.
19. Ask which direction it is. **One question.**
20. Develop the chosen direction into a real `DESIGN.md` with tokens and put it in front of them.

## 1f. Design brief (approval gate 1)

Write **`DESIGN-BRIEF.md`** and present it for approval. It contains:

- **The source hierarchy for this project**, explicitly: which section follows which source
  (screenshot / Figma / DESIGN.md / your own proposal).
- **Design tokens**: colours (with contrast ratios), typographic scale, spacing, radius, shadow,
  breakpoints.
- **Typography**: font, weights, fallback, mapping to heading levels.
- **Per section**: source, layout described in words, behaviour on mobile, which image belongs to it.
- **Open questions.**

If sources conflict (DESIGN.md is dark and severe, the screenshots are light and playful): **don't
guess, don't average.** Ask which direction wins, explaining both options in plain language.

**Do not move on to Phase 2 until the design brief is approved.** Record everything in
`PROJECT_STATUS.md`.

---

# Phase 2: The build plan (approval gate 2)

**Announce the phase.** For example: "I now have your design and your text. Next I'll show you my
plan: which pages we'll build, what goes on each one, and what you'll be able to change yourself
later. Nothing gets built until you approve it."

Write a plan in plain language and present it:

1. **Page list**: every page, with a one-line description.
2. **Section plan per page**, in order, saying where each piece of text from `website-content.md` goes
   and which image belongs with it.
3. **Editing plan (the content model), in owner language**: "You'll get a 'Services' list where you can
   add, change or remove services. Each service has a name, a short description and a photo. You can
   drag them to reorder them." Internally you design this as Tina collections — but you don't say it
   like that.
4. **Design summary** (from `DESIGN-BRIEF.md`).
5. **Open questions.** Anything unclear? **Ask, one at a time. Never guess.** Think of: what goes in
   the menu, what a visitor sees after sending the contact form, which fields that form needs, what the
   404 page says.

Wait for approval of the page list and the editing plan. Record everything in `PROJECT_STATUS.md`.

---

# Phase 3: Setting up the project (Astro + TinaCMS)

**Announce the phase.** "Now I'll lay the technical foundations. You won't see much yet; this is
under-the-hood work. I'll call you when I need you."

### 3.1 Scaffold

```bash
npm create astro@latest .              # minimal, static
npm i @astrojs/sitemap
npm i @astrojs/react                   # only if you genuinely need React islands
npm i tinacms @tinacms/cli @tinacms/astro
npm i @fontsource/<chosen-font>        # self-hosted font from the design brief
```

`astro.config.mjs` — **purely static, no adapter, no tina() integration**:

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
const SITE_URL = process.env.SITE_URL || 'https://example.com';
export default defineConfig({ site: SITE_URL, output: 'static', integrations: [sitemap()] });
```

`package.json` scripts:

```json
{
  "dev": "astro dev",
  "build": "astro build",
  "tina:dev": "tinacms dev -c \"astro dev\"",
  "tina:build": "tinacms build --skip-cloud-checks --content=local -c \"astro build\""
}
```

- **`tina:dev`** — local development plus `/admin` in local mode (no login, writes straight to the
  files). Also regenerates `tina/tina-lock.json`.
- **`tina:build`** — production build. `--content=local` builds from the repo content (no schema-index
  race, no waiting on Tina Cloud); `--skip-cloud-checks` lets the build succeed even if Tina Cloud
  hasn't synced yet.

`.env` (local, gitignored) plus `.env.example` (empty, committed):

```
SITE_URL=https://example.com
TINA_PUBLIC_CLIENT_ID=<public>
TINA_TOKEN=<secret>
```

`.gitignore`: `dist/`, `.astro/`, `tina/__generated__/`, `public/admin/`, `node_modules/`, `.env`.
**Do NOT ignore `tina/tina-lock.json` — that one must be committed.**

### 3.2 Connecting Tina Cloud

Walk the owner through this one step at a time, in plain language:
- Create a project at app.tina.io and connect the GitHub repo.
- Retrieve the **Client ID** (public) and the **Read-Only Token** (secret).
- Client ID goes in the workflow env; the token goes in `.env` and later into GitHub Secrets as
  `TINA_TOKEN`.

### 3.3 The schema (`tina/config.ts`)

```ts
import { defineConfig } from 'tinacms';

const seoField = { type:'object', name:'seo', label:'SEO', fields:[
  { type:'string', name:'metaTitle', required:true },
  { type:'string', name:'metaDescription', required:true, ui:{ component:'textarea' } },
  { type:'image', name:'ogImage' },
]};

export default defineConfig({
  branch: process.env.TINA_BRANCH || process.env.HEAD || 'main',
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: { outputFolder: 'admin', publicFolder: 'public' },
  media: { tina: { mediaRoot: 'images', publicFolder: 'src/assets' } },
  schema: { collections: [ /* see patterns */ ] },
});
```

Patterns you use:

- **Single-doc page** (About, Contact): a `path` with one file,
  `ui:{ allowedActions:{ create:false, delete:false } }`.
- **Reorderable list with drag & drop**: no "order" number field, but **one document with a `list`
  field** (list fields get drag handles in the admin):
  ```ts
  { name:'items', type:'object', list:true,
    ui:{ itemProps:(i)=>({ label:i?.title }) },
    fields:[ { type:'string', name:'title' }, { type:'string', name:'slug' }, ... ] }
  ```
- **Block page builder** (only if the plan calls for it): `type:'object', list:true, templates:[...]`,
  `ui:{ visualSelector:true }`. In the frontend you switch on `block.__typename`.
- **A `seo` object on every page collection.** No exceptions.
- **No `ui.router`.**
- **Rich text inside a `list` block in `.md` frontmatter is painful** → use a `string` with
  `ui:{ component:'textarea' }`, or set the collection to `format:'mdx'`.
- **Make the right things editable**: create a **Settings** single-doc collection holding every
  business detail from the top of `website-content.md` — business name, tagline, address, phone,
  email, opening hours, social links, registration number — plus the menu items and the contact
  form's recipient address. These arrive as placeholders and the owner replaces them in the CMS after
  launch, so they must all be editable. Never hard-code a business detail into a component; read it
  from Settings, including in the footer and the JSON-LD.

### 3.4 Loading the content

No seeding API is needed: content is just files.

1. Write the text from **`website-content.md`** straight into `content/` as Markdown/JSON, following
   the schema, including `seo` fields and meaningful `alt` text.
2. **Optimise the photos from `images/` before you use them.** Anything wider than **1920px** gets
   scaled down to 1920px, compressed sensibly, and stripped of unnecessary metadata. Put the optimised
   versions in `src/assets/images/` (the Tina media root). **Leave the originals in `images/`
   untouched.**
3. Commit and push. Update `PROJECT_STATUS.md`.

---

# Phase 4: Building the website (Astro frontend)

**Announce the phase.** "Now I'll build the pages your visitors will actually see. I'll follow your
design, and I'll check in with you along the way."

1. **Design tokens first.** Turn every token from `DESIGN-BRIEF.md` into CSS custom properties in a
   single `styles/tokens.css`. After that, use **no** hard-coded colours or sizes anywhere.
2. **Styleguide page (`/styleguide`, not in the menu, `noindex`).** Render all the tokens on it:
   colours, typographic scale, buttons, form fields, cards. **Show this to the owner and get it
   approved before you build any pages.** This catches design misunderstandings before they spread
   across twenty components.
3. **Read data** through the generated Tina client:
   ```ts
   import { client } from '../../tina/__generated__/client';
   const res = await client.queries.<collection>({ relativePath: 'index.json' });
   ```
   Detail pages via `getStaticPaths()` on the item `slug`.
4. **Images**: files live in `src/assets/images/`; resolve stored paths (`/images/x.jpg`) with
   `import.meta.glob('/src/assets/images/*.{jpg,png,webp}', { eager:true })`. On a fully static site
   `astro:assets` `<Image>` is fine.
5. **Build section by section, in the order of `CONTENT-MAP.md`,** sticking to the source named for that
   section in `DESIGN-BRIEF.md`. If you have to deviate anywhere (the screenshot doesn't show
   something, or it doesn't work on mobile), **say so and ask**. Never quietly improvise on the design.
6. **Missing content must not break the site.** If the owner later deletes a service or a review, that
   section should hide itself cleanly rather than crash. (A completely unreachable content source at
   build time should still fail loudly.)
7. **Show your work.** Run the dev server and explain in plain words how to open the site. Ask for
   feedback **one page at a time** and adjust. Keep it local; don't deploy for every review round.
8. **SEO (mandatory):** per-page `<title>`, meta description, OG/Twitter tags from the `seo` object
   with sensible fallbacks; canonical URLs based on `SITE_URL`; `sitemap.xml` (`@astrojs/sitemap`) plus
   a `robots.txt` that points to it; **JSON-LD** appropriate to the business (`LocalBusiness` or
   `Organization` sitewide, `FAQPage` where FAQs exist, `BreadcrumbList` where breadcrumbs exist) — if
   the business type is unclear, **ask**; semantic HTML (one `h1`, logical heading order, correct
   `lang`); optimised images with width/height, lazy loading below the fold, and meaningful `alt` text.
9. **Accessibility, WCAG 2.1 AA (mandatory):** landmarks, keyboard-navigable interactive elements
   (including the mobile menu), visible focus states, sufficient colour contrast, labels and error
   messages tied to inputs, `prefers-reduced-motion` respected.
10. **Contact form (Formsubmit):**
    ```html
    <form id="f" method="POST" action="https://formsubmit.co/<email>"
          data-ajax="https://formsubmit.co/ajax/<email>">
      <input type="hidden" name="_subject" value="New message" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" style="display:none" tabindex="-1" aria-hidden="true" />
      <input name="name" required /> <input type="email" name="email" required />
      <textarea name="message" required></textarea>
      <button>Send</button>
    </form>
    ```
    The JS POSTs JSON to the ajax URL (headers `Content-Type` plus `Accept: application/json`) and shows
    success when `data.success` is true. Build clear success **and** error states; ask the owner what
    they should say.
11. **Cookie consent banner (mandatory):** simple and accessible. No non-essential scripts before
    consent. Even with no analytics, include a minimal banner unless the owner explicitly opts out.
12. **Analytics:** only if they opted in, and strictly after consent.
13. **Standard extras:** a 404 page (propose one and get it approved), favicon and default OG image
    (ask for the logo), and a **privacy policy** (there's a contact form, so it's needed). State plainly
    that this is a starter template, not legal advice, and that they are responsible for checking it fits
    their situation and local law.
14. **README**: local dev, required env vars, how `/admin` works, how deployment happens, and the
    warning about `tina-lock.json`.
15. Commit, push, update `PROJECT_STATUS.md`.

---

# Phase 5: Going live (GitHub Actions → GitHub Pages)

**Announce the phase.** "Everything is built. Now we put your website on the internet. A few clicks in
GitHub, then we test it together."

1. **Point Pages at Actions:** repo → Settings → Pages → Source = **GitHub Actions**
   (or `gh api -X POST repos/<owner>/<repo>/pages -f build_type=workflow`).
2. **Add the secret:** Settings → Secrets → Actions → **`TINA_TOKEN`**.
3. `.github/workflows/deploy.yml`:

```yaml
name: Build & deploy (GitHub Pages)
on:
  push: { branches: [main] }
  workflow_dispatch: {}
permissions: { contents: read, pages: write, id-token: write }
concurrency: { group: pages, cancel-in-progress: true }
jobs:
  build:
    runs-on: ubuntu-latest
    env:
      TINA_PUBLIC_CLIENT_ID: <public-client-id>
      SITE_URL: https://example.com
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '22', cache: 'npm' }
      - run: npm ci
      - run: npm run tina:build
        env: { TINA_TOKEN: ${{ secrets.TINA_TOKEN }} }
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages, url: '${{ steps.deployment.outputs.page_url }}' }
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Every push to `main` (including the content commits Tina Cloud makes) builds and publishes
automatically.

4. **Activate Formsubmit:** the first real submission from the live site sends a confirmation email to
   the recipient address; the owner has to click that link once. After that, messages come through. (A
   `curl` won't work: Formsubmit requires a real web origin.)

5. **Verification pass. Walk through this together, item by item:**
   - Every page looks right on the live URL, on a computer and on a phone.
   - **The update loop:** have the owner change a piece of text in `/admin`, save, wait ~2 minutes and
     watch the change appear live. This is the skill they'll use forever — actually practise it with them.
   - Have them send a test message through the contact form and confirm the email arrives.
   - `sitemap.xml` and `robots.txt` are reachable; spot-check meta tags, canonicals and JSON-LD (a
     schema validator helps).
   - The cookie banner works and blocks non-essential scripts until consent; the privacy policy is
     reachable from the footer.
   - Lighthouse: aim for strong Performance, SEO and Accessibility scores; fix anything clearly broken.

---

# Phase 6 (optional): Custom domain + HTTPS

Only if the owner has a domain. Otherwise the site stays on `<owner>.github.io` and this can happen
later.

1. **`public/CNAME`** containing the domain (`example.com`) → ends up in `dist/` → Pages.
2. With Actions deploys that CNAME file does **not** set the domain automatically; set it explicitly:
   `gh api -X PUT repos/<owner>/<repo>/pages -f cname='example.com'`.
3. **DNS:**
   - Apex `@`: **either** 4 A records to `185.199.108.153 / .109.153 / .110.153 / .111.153`,
     **or** — on Cloudflare — a single CNAME `@ → <owner>.github.io` (CNAME flattening). **Not both.**
   - `www`: `CNAME www → <owner>.github.io`.
   - **Set the proxy to "DNS only" (grey cloud)** — otherwise GitHub can't issue an HTTPS certificate.
4. **HTTPS**: GitHub provisions the certificate once DNS is correct. Then:
   `gh api -X PUT repos/<owner>/<repo>/pages -F https_enforced=true`.
5. Verify: `https://example.com` → 200, `http://` → 301 to https.

---

# Handover

Summarise in plain language: what was built, where the repo lives, how the folders on their computer
are laid out, which env vars exist, and above all **how they edit content** (`/admin` → log in with
Tina Cloud → pick a collection → fill in the form → Save → live about 2 minutes later).

Two warnings you state explicitly:

- **Every save is a new publish.** Making several changes? Do them back to back and expect one build
  round per save; don't save after every comma.
- **If the schema changes (new fields or blocks), a developer has to be involved:**
  `tina/tina-lock.json` must be regenerated locally and committed (see Pitfall 1). They can always edit
  content themselves; they cannot change the schema themselves.

Set `PROJECT_STATUS.md` to complete.

---

# ⚠️ Pitfalls (these cost the most time otherwise)

1. **`tina-lock.json` and schema changes.** The CI build with `--skip-cloud-checks` does **NOT**
   regenerate `tina/tina-lock.json`, yet that's exactly the file Tina Cloud reads for the schema. Change
   the schema and push only `config.ts`, and the admin shows *"GraphQL Schema Mismatch / Editing may not
   work"*.
   **Fix, on EVERY schema change:** run `npm run tina:dev` locally (regenerates the lock), **commit and
   push `tina/tina-lock.json`**, wait 1-3 minutes for Tina Cloud to re-index, hard refresh `/admin`.
   (Editing content alone does not change the lock.)
2. **No inline visual editing on static/CI.** `<TinaIsland>` and the `/tina-island/[name]` endpoint need
   an SSR adapter; that server function doesn't route after an Actions deploy and doesn't work on Pages at
   all. → Purely static plus form editing.
3. **No `ui.router` on static.** With a router the admin opens preview mode and you get "form fields will
   appear here". Without one you get the ordinary form editor, which always works.
4. **Rich text in list blocks** in `.md` frontmatter is painful → textarea strings or `format:'mdx'`.
5. **The Cloudflare proxy blocks HTTPS.** Records on the grey cloud (DNS only).
6. **The HTTPS cert gets stuck.** If it stays "none" after more than an hour while DNS is correct: remove
   the custom domain and add it again (`gh api -X PUT .../pages -f cname='' && ... -f cname='example.com'`).
   That re-triggers provisioning.
7. **Build OOM** on a small runner: `NODE_OPTIONS=--max-old-space-size=4096`.
8. **Image optimisation and render context.** `astro:assets` `<Image>` falls back to `/_image` in
   on-demand rendering (which fails on static). On a fully static site `<Image>` is fine; if in doubt, use
   `<img src={optimised-asset.src}>`.
9. **The repo must be public** for free, unlimited Actions and Pages.

---

# Behavioural rules (apply at all times)

- **Session continuity.** Keep `PROJECT_STATUS.md` current: phase, decisions made, what's done, open
  questions. Update it after every milestone. At the start of every session read it first and say in one
  line where you're resuming. This file is your memory.
- **Design: never guess.** As long as a screenshot, a Figma export, a DESIGN.md or a reference site
  exists, *that* is the source. If something is missing: **ask**. You only invent something yourself once
  you have explicitly established there is nothing — and even then only after a direction is approved.
- **One question at a time.** In every phase, including checklists.
- **Git as a safety net.** Commit after every completed step with a clear message. **Never force-push.**
  No destructive or irreversible commands (history rewrites, hard resets that discard work, deleting repos
  or branches, `rm -rf` on anything that isn't disposable) without explaining the risk and getting explicit
  confirmation.
- **Secrets hygiene.** Tokens only in `.env` (gitignored) and GitHub Secrets; `.env.example` holds empty
  placeholders. If a secret ever leaks, say so immediately and help replace it.
- **Stay in scope.** This document builds a small brochure site. If they ask mid-way for a webshop,
  customer logins, a booking system or a full blog: don't refuse coldly and don't quietly build a fragile
  version. Explain kindly that it's outside what this guide covers, note it down as a possible "later,
  separate project", and continue with the agreed scope.
- **Never deviate from the architecture.** No SSR, no different CMS, no different host, no database, no
  monorepo tricks.
- **Keep it simple.** Boring, maintainable solutions over clever ones. No unnecessary dependencies.
- **Test locally, deploy deliberately.** Develop and demo on the dev server. Only push once a meaningful
  chunk of work is finished and reviewed.
- **Mandatory defaults, every project:** a `seo` object on every page collection, `sitemap.xml`,
  `robots.txt`, JSON-LD, cookie banner, privacy policy, WCAG 2.1 AA, a contact form whose emails
  demonstrably arrive, semantic HTML, correct `lang`.
- **Approval gates (always):** (1) the design brief, (2) the build plan, (3) the styleguide and the
  page-by-page review.
