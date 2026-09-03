# Portfolio

A static personal portfolio site built with [Astro](https://astro.build) and Tailwind CSS.
Profile and pinned projects are pulled from GitHub at build time.

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

Set `GITHUB_USERNAME` in `.env` (and optionally `GITHUB_TOKEN`, no scopes needed) to
populate the profile and pinned projects. Without a token the six most-starred public
repos are shown instead.

## Project structure

```
src/
  layouts/Layout.astro          # HTML shell, metadata, pre-paint theme script
  pages/index.astro             # the portfolio page
  pages/cv.astro                # CV page with print-to-PDF
  components/ThemeToggle.astro  # sun/moon light-dark switch
  portfolio/data.ts             # content, links, skills, branding
  portfolio/cv.ts               # CV content
  lib/github.ts                 # GitHub profile / repo fetching (build time)
  styles/global.css             # Tailwind entrypoint, Proggy Clean font, theme transition
public/
  fonts/ProggyCleanSZ.ttf       # Proggy Clean (slashed zero) by Tristan Grimmer
  favicon.ico
```

## Building

```bash
npm run build
npm run preview
```

`npm run build` outputs a fully static site to `dist/`. Because GitHub data is fetched
during the build, rebuild (or redeploy) to refresh the project list.
