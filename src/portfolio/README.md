# Parked portfolio front end

The routed front end (`src/app/page.tsx`, `src/app/layout.tsx`) is the stock
create-next-app template. The custom portfolio UI lives here, unrouted.

| What                          | Where                                   |
| ----------------------------- | --------------------------------------- |
| Portfolio page component      | `src/portfolio/PortfolioPage.tsx`       |
| Content, links, skills, brand | `src/portfolio/data.ts`                 |
| GitHub profile / repo fetch   | `src/lib/github.ts`                     |
| CV                            | `public/assets/Jesse_Nieuwenhuis_CV.docx` (served at `/assets/Jesse_Nieuwenhuis_CV.docx`) |
| Env vars                      | `.env.example` (`GITHUB_USERNAME`, `GITHUB_TOKEN`) |
| Avatar image host allowlist   | `next.config.ts` -> `images.remotePatterns` |

## Restore the portfolio as the home page

```tsx
// src/app/page.tsx
export { default } from "@/portfolio/PortfolioPage";
```

and set `metadata` in `src/app/layout.tsx` from `SITE.title` / `SITE.description`.
