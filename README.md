# Portfolio

A static personal portfolio site built with [Astro](https://astro.build) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to see the result.

Copy `.env.example` to `.env` and set `GITHUB_USERNAME` (and optionally `GITHUB_TOKEN`)
to populate the profile and pinned projects from GitHub at build time.

## Project structure

```
src/
  layouts/Layout.astro   # base HTML shell
  pages/index.astro      # homepage
  pages/cv.astro         # printable CV
  lib/github.ts          # GitHub data fetching (build time)
  styles/global.css      # Tailwind entrypoint
```

## Building

```bash
npm run build
npm run preview
```

`npm run build` outputs a fully static site to `dist/`.
