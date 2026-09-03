# Portfolio front end

`src/app/page.tsx` re-exports `PortfolioPage` from this folder.

| What                          | Where                                   |
| ----------------------------- | --------------------------------------- |
| Page component                | `src/portfolio/PortfolioPage.tsx`       |
| Content, links, skills, brand | `src/portfolio/data.ts`                 |
| Theme switch (light/dark)     | `src/components/theme-toggle.tsx`; default follows the system, saved in `localStorage.theme` |
| GitHub profile / repo fetch   | `src/lib/github.ts`                     |
| CV                            | `public/assets/Jesse_Nieuwenhuis_CV.docx` (served at `/assets/Jesse_Nieuwenhuis_CV.docx`) |
| Env vars                      | `.env.example` (`GITHUB_USERNAME`, `GITHUB_TOKEN`) |
