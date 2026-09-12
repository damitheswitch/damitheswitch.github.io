# damitheswitch.github.io

Personal site of **Imad Charradi** — AI Software Engineer.
Single-page dark/terminal-themed portfolio: hero with a typewriter tagline,
experience timeline, projects, skills, education, and a contact section with
a channel picker + downloadable vCard.

Live at **https://damitheswitch.github.io** (custom `.me` domain coming).

## Stack

- [Astro](https://astro.build) — static output, zero client JS framework
- Self-hosted Inter + JetBrains Mono (variable woff2, no external requests)
- Vanilla TS/JS only: typewriter rotator, scroll reveal, mobile nav,
  contact popover, clipboard copy
- GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`)

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
npm run preview  # preview the production build
```

All site content lives in **`src/data/resume.ts`** — experience, projects,
skills, education, languages, rotating tagline phrases. Edit that one file;
every component renders from it.

```
src/
  data/resume.ts        <- all content
  layouts/Base.astro    <- html shell, fonts, seo/og meta, global styles
  components/           <- Nav, Hero, About, Experience, Projects,
                           Skills, Education, Contact
  pages/index.astro     <- composition
public/
  fonts/                <- self-hosted woff2
  og-image.png          <- link preview card (1200x630)
  Imad_Charradi_CV.pdf  <- downloadable resume
  Imad_Charradi.vcf     <- downloadable contact card
```

## Deploy

Pushes to `main` auto-deploy via the Actions workflow
(Settings → Pages → Source: **GitHub Actions**).

### Custom domain (when the .me is claimed)

The free `.me` for students is the Namecheap offer inside the
[GitHub Student Developer Pack](https://education.github.com/pack).

1. Namecheap → Domain → **Advanced DNS**:

   | Type  | Host | Value                      |
   |-------|------|----------------------------|
   | A     | `@`  | `185.199.108.153`          |
   | A     | `@`  | `185.199.109.153`          |
   | A     | `@`  | `185.199.110.153`          |
   | A     | `@`  | `185.199.111.153`          |
   | CNAME | `www`| `damitheswitch.github.io`  |

2. `public/CNAME` containing just the domain (e.g. `imadcharradi.me`).
3. `astro.config.mjs` → `site: 'https://yourdomain.me'`.
4. Repo Settings → Pages → enter domain → **Enforce HTTPS**.
