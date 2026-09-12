# imadcharradi.me — personal site

Astro single-page portfolio. Deployed on GitHub Pages, served on a custom `.me` domain.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

All site content lives in `src/data/resume.ts` — edit that one file to update
experience, projects, skills, etc. Components render from it automatically.

## Deploy (first time)

### 1. Claim the free .me domain

The free `.me` for students is the **Namecheap** offer inside the
**GitHub Student Developer Pack**:

1. Go to <https://education.github.com/pack> and sign up with your edu email.
2. Once verified, find the Namecheap offer → free `.me` domain for 1 year
   (+ free SSL via GitHub Pages' built-in HTTPS).

### 2. Push this repo to GitHub

```bash
gh repo create personal-site --public --source=. --push
# or create the repo on github.com and:
git remote add origin https://github.com/damitheswitch/<repo>.git
git push -u origin main
```

### 3. Enable GitHub Pages

Repo → **Settings → Pages → Source: GitHub Actions**.
The workflow in `.github/workflows/deploy.yml` builds and deploys on every
push to `main`.

### 4. Point the .me domain at GitHub Pages

In Namecheap → Domain List → Manage → **Advanced DNS**:

| Type      | Host | Value                    | TTL  |
|-----------|------|--------------------------|------|
| A Record  | `@`  | `185.199.108.153`        | Auto |
| A Record  | `@`  | `185.199.109.153`        | Auto |
| A Record  | `@`  | `185.199.110.153`        | Auto |
| A Record  | `@`  | `185.199.111.153`        | Auto |
| CNAME     | `www`| `damitheswitch.github.io`| Auto |

(If you only want `www.yourdomain.me`, skip the A records and keep just the CNAME.)

### 5. Tell GitHub about the domain

1. Add `public/CNAME` containing just your domain, e.g. `imadcharradi.me`
   (then commit + push).
2. Update `site:` in `astro.config.mjs` to `https://yourdomain.me`.
3. In repo Settings → Pages, enter the custom domain and tick
   **Enforce HTTPS** once the cert provisions (a few minutes).
