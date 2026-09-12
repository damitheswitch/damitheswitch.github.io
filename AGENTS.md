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
  volunteering), `Contact` (channel-picker popover + vCard),
  `ScrollRail` (right-edge scroll widget: section ticks, detents, synth sfx, haptics).
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

## ScrollRail / mobile input quirks (learned the hard way, don't regress)

- **iOS Safari `pointermove.clientY` is racy during programmatic scroll** — it
  intermittently reports pageY/scroll-offset coordinates mid-gesture (observed:
  3526, -5475 vs the true finger Y). Touch drags MUST be driven by
  `touchmove.touches[0].clientY` (clean stream); `pointermove` handles
  mouse/pen only. This bug caused violent page jumping on iOS.
- Drag uses **detents**: latch within `CAP_PX` (8px) of a tick, `BREAK_PX` (15px)
  of extra finger travel to escape, speed-gated (~18px/event) so flicks sail
  through unlatched. Buzz on latch `[10,45,8]`, release 9ms.
- Mobile: rail sits `right: 18px` — the extreme edge is iOS system territory
  (scrollbar scrubber + forward-swipe gesture). Track is `touch-action: pan-y`
  + tap-only jump (down+up <400ms, <10px); swipes over it scroll the page.
  Thumb keeps `touch-action: none` + window-level `touchmove` preventDefault.
- `measure()` is skipped while `dragging` (iOS toolbar collapse → resize →
  recompute fracs mid-gesture = feedback loop). Re-measured once at drag end.
  `dragRect` is cached at grab for the same reason.
- **iOS haptics**: `navigator.vibrate` is a dead stub on Safari. Fallback is a
  hidden label-wrapped `<input switch>` — click the LABEL, not the input, and
  it only works iOS 17.4-26.4. Apple patched programmatic haptics in 26.5+
  (needs trusted event + activation); there is no further web API. Haptics are
  throttled 120ms (`lastHaptic`).
- **`?debug` URL flag** loads eruda (on-device devtools) + `[rail]` event trace
  (`dlog`/`dmark`, buffered per-drag dump). Zero cost without the flag — eruda
  is a lazy chunk (devDep). Keep it; it caught the iOS bug.

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
- **git ignores the Windows system proxy.** Direct github.com resets even with the
  VPN on. Push with the proxy env on the command:
  `git push` with `HTTPS_PROXY=http://localhost:15236` (find current port:
  registry `HKCU:\...\Internet Settings` → ProxyServer; it changes per VPN session).
- Phone testing over LAN: `npm run dev -- --host --force`, then
  `http://<PC-IP>:4321` on the phone (same wifi; PC IP via `ipconfig`, the
  192.168.0.x one). `?debug` + eruda works on-device for real iOS logs —
  real iPhone is the only ground truth for Safari quirks; Chrome emulation
  is Blink, Playwright-WebKit-in-Docker lacks iOS system chrome.

## Pending / future work

- **Custom .me domain** (free via Namecheap in the GitHub Student Pack; user plans
  to claim in ~2 months): add `public/CNAME` = domain, set `site:` in
  `astro.config.mjs`, Namecheap DNS (A → 185.199.108-111.153, CNAME www →
  damitheswitch.github.io), then Enforce HTTPS. Full table in README.
- **QR code** for a phone sticker: interim codes live in `qr/` (tracked) —
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
