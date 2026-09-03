import { getProfile, getPinnedRepos, type Repo } from "@/lib/github";
import { ThemeToggle } from "@/components/theme-toggle";
import { SITE, LINKS, SKILLS } from "./data";

const link =
  "text-neutral-500 transition-colors hover:text-black dark:hover:text-white";

function Project({ repo }: { repo: Repo }) {
  return (
    <li>
      <a
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group -mx-3 flex items-baseline justify-between gap-6 rounded px-3 py-2.5 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
      >
        <div className="min-w-0">
          <p className="text-sm font-medium">{repo.name}</p>
          {repo.description && (
            <p className="mt-0.5 truncate text-sm text-neutral-500">
              {repo.description}
            </p>
          )}
        </div>
        {repo.primaryLanguage && (
          <span className="shrink-0 text-xs text-neutral-400 dark:text-neutral-600">
            {repo.primaryLanguage.name}
          </span>
        )}
      </a>
    </li>
  );
}

export default async function PortfolioPage() {
  const [profile, repos] = await Promise.all([getProfile(), getPinnedRepos()]);

  const displayName = profile?.name ?? profile?.login ?? SITE.fallbackName;
  const username = profile?.login ?? SITE.fallbackUsername;
  const github = profile?.html_url ?? `https://github.com/${username}`;

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto flex max-w-4xl flex-col md:min-h-screen md:flex-row">

        {/* Left */}
        <aside className="flex flex-col justify-between px-6 py-10 md:sticky md:top-0 md:h-screen md:w-56 md:shrink-0 md:py-16">
          <div>
            <h1 className="text-base font-semibold tracking-tight">{displayName}</h1>
            <p className="mt-1 text-sm text-neutral-500">Software engineer</p>

            <nav className="mt-10">
              <ul className="space-y-2 text-sm">
                <li><a href={github} target="_blank" rel="noopener noreferrer" className={link}>GitHub</a></li>
                <li><a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a></li>
                <li><a href={`mailto:${SITE.email}`} className={link}>Email</a></li>
                <li><a href={SITE.cvPath} download className={link}>CV</a></li>
              </ul>
            </nav>
          </div>

          <div className="mt-10 md:mt-0">
            <ThemeToggle />
          </div>
        </aside>

        {/* Right */}
        <main className="flex-1 space-y-16 px-6 py-10 md:py-16 md:pl-12">
          <section>
            <h2 className="mb-4 text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
              Projects
            </h2>
            {repos.length > 0 ? (
              <ul>
                {repos.map((repo) => <Project key={repo.name} repo={repo} />)}
              </ul>
            ) : (
              <p className="text-sm text-neutral-500">
                No projects yet.{" "}
                <a href={`${github}?tab=repositories`} target="_blank" rel="noopener noreferrer" className={`${link} underline underline-offset-4`}>
                  See GitHub
                </a>
              </p>
            )}
          </section>

          <section>
            <h2 className="mb-4 text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
              Skills
            </h2>
            <dl className="space-y-4">
              {SKILLS.map(({ category, items }) => (
                <div key={category} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <dt className="text-sm text-neutral-500">{category}</dt>
                  <dd className="text-sm">{items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </section>
        </main>

      </div>
    </div>
  );
}
