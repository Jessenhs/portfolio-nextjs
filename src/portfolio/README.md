# Portfolio front end

`src/pages/index.astro` renders the page using the content in this folder.

| What                          | Where                                   |
| ----------------------------- | --------------------------------------- |
| Page                          | `src/pages/index.astro`                 |
| Content, links, skills, brand | `src/portfolio/data.ts`                 |
| Theme switch (light/dark)     | `src/components/ThemeToggle.astro`; default follows the system, saved in `localStorage.theme` |
| GitHub profile / repo fetch   | `src/lib/github.ts` (runs at build time) |
| Font                          | `public/fonts/ProggyCleanSZ.ttf`, declared in `src/styles/global.css` |
| CV                            | `public/assets/Jesse_Nieuwenhuis_CV.docx` (served at `/assets/Jesse_Nieuwenhuis_CV.docx`) |
| Env vars                      | `.env.example` (`GITHUB_USERNAME`, `GITHUB_TOKEN`) |
