# Agent Guide — imad's personal site

## What this is

Single-page portfolio for **Imad Charradi** (AI Software Engineer), built with Astro.
- Live: https://damitheswitch.github.io
- Repo: `damitheswitch/damitheswitch.github.io` (GitHub Pages *user site* — serves at root)
- Auto-deploys via `.github/workflows/deploy.yml` on every push to `main`

Canonical links: github.com/damitheswitch · linkedin.com/in/imad-charradi ·
x.com/MARCN3334 · therealchina.net (his live side project)

## Architecture

- **`src/data/resume.ts` is the single source of truth for ALL content** — site meta,
  rotatorPhrases, about, experience, projects, skillGroups, education, certificates,
  languages, volunteering. Change content there; components render from it.
- `src/layouts/Base.astro` — html shell, self-hosted `@font-face` fonts, og/twitter
  meta, global design tokens, `.reveal` scroll-animation + `.sr-only` utilities.
- Components: `Nav`, `Hero` (typewriter), `About`, `Experience` (timeline),
  `Projects` (cards with repo+live icons), `Skills`, `Education` (edu/certs/langs/
  volunteering), `Contact` (channel-picker popover + vCard).
- `public/` — `fonts/` (self-hosted woff2), `og-image.png` (1200×630, generated),
  `favicon.svg`, `Imad_Charradi_CV.pdf`, `Imad_Charradi.vcf`.
- Root dir also holds his source docs (CV/LinkedIn PDFs, `_*.txt` extracts) —
  all gitignored, never commit them.

## Design language

- Dark theme: `--bg #0a0e13`, cards `#0f141b`, borders `#1e2835`, accent `#34d399`.
- Fonts: Inter (body) + JetBrains Mono (nav, labels, buttons, terminal card).
- Terminal motif: `~/imad_` logo, `$` prompt labels (`$ pick a channel`), numbered
  section labels (`01 · about`).
- Mobile (≤820px): borderless `≡ menu` button → morphs to `× close`.
- Hero tagline: typewriter after a static accent `I`. Phrases must be
  **grammatically valid after "I"**, lowercase, 2–6 words.

## Hard rules (explicit user decisions — don't revert)

- **No em/en dashes (— or –) anywhere in copy.** User considers them an AI tell.
  Use commas/periods/colons or `·` middot. Date ranges use ASCII `-`.
- Acronyms/proper nouns stay capitalized inside lowercase phrases (`AI`, `Xidian`).
- Fonts are self-hosted on purpose (Google Fonts is slow/blocked in China —
  user is in Xi'an). Do not re-add fonts.googleapis.com links.
- `prefers-reduced-motion` must stay respected (typewriter → static first phrase).
- Conventional commits (`feat:`/`fix:`/`docs:`/`refactor:`).
- **Verify before done:** `npm run build` must pass; eyeball via dev server +
  chrome-devtools screenshot when UI changes.

## Environment quirks (Windows)

- Shell is **PowerShell**: no bash heredocs/`ls -la`. Multi-line commit messages →
  PowerShell here-strings (`$msg = @'...'@`).
- Node v22.23.2, Python 3.12/3.13 present. **Astro 7 needs Node ≥22.12 — CI pins 22,
  never lower it.**
- `gh` CLI authenticated as `damitheswitch` (scopes: repo, workflow).
- MCP servers available: `chrome-devtools`, `MCP_DOCKER` (browser automation),
  plus built-in webfetch/web_search.
- Headless screenshots via chrome-devtools can show an olive tint on scrolled
  regions — capture artifact, not the page. Trust `getComputedStyle`.
- Clipboard API is blocked in headless eval — verify copy features by code path.

## Pending / future work

- **Custom .me domain** (free via Namecheap in the GitHub Student Pack; user plans
  to claim in ~2 months): add `public/CNAME` = domain, set `site:` in
  `astro.config.mjs`, Namecheap DNS (A → 185.199.108-111.153, CNAME www →
  damitheswitch.github.io), then Enforce HTTPS. Full table in README.
- **QR code** for a phone sticker: interim codes live in `qr/` (gitignored) —
  `qr-site.svg` + `qr-site.png`, error-correction H, black on white, encoding
  `https://damitheswitch.github.io/?src=qr`. GitHub Pages 301-redirects to the
  .me domain once configured, so these keep working; optionally regenerate
  pointing at `https://<domain>/?src=qr` after the domain is live. Print ≥2.5cm,
  matte sticker. If the domain ever lapses, remove it from Pages settings or
  github.io will redirect to a dead domain.
- Optional: real photo in hero (drop `photo.jpg` in `public/`, wire into
  `Hero.astro`); Instagram handle if he ever wants it in vcf/socials (he declined).
- `og-image.png` regeneration: `.ogbuild/make_og.py` (gitignored) — Pillow script,
  uses `Inter.ttf`/`JBMono.ttf` in that folder.

## Working with this user

- Wants concise answers; for aesthetic choices, give curated option lists —
  he sometimes runs them by Claude web before picking.
- Correcting his typography/style suggestions is welcome — he asked for honest
  design judgment.
