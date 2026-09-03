# Portfolio front end

`src/pages/index.astro` renders the page using the content in this folder.

| What                          | Where                                   |
| ----------------------------- | --------------------------------------- |
| Page                          | `src/pages/index.astro`                 |
| Content, links, skills, brand | `src/portfolio/data.ts`                 |
| Theme switch (light/dark)     | `src/components/ThemeToggle.astro`; default follows the system, saved in `localStorage.theme` |
| GitHub profile / repo fetch   | `src/lib/github.ts` (runs at build time) |
| Font                          | `public/fonts/ProggyCleanSZ.ttf`, declared in `src/styles/global.css` |
| CV page                       | `src/pages/cv.astro`, content in `src/portfolio/cv.ts`; "Download PDF" uses the browser print dialog |
| Env vars                      | `.env.example` (`GITHUB_USERNAME`, `GITHUB_TOKEN`) |
