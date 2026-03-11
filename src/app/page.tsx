import Image from "next/image";
import { getProfile, getPinnedRepos, type Repo } from "@/lib/github";

const SKILLS = [
  "TypeScript", "JavaScript", "React", "Next.js", "Node.js",
  "Python", "PostgreSQL", "Prisma", "Docker", "Git",
  "REST", "GraphQL", "AWS", "Vercel", "Tailwind CSS",
];

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6", JavaScript: "#f1e05a", Python: "#3572A5",
  Rust: "#dea584", Go: "#00ADD8", HTML: "#e34c26", CSS: "#563d7c",
  "C++": "#f34b7d", C: "#555", Java: "#b07219", Ruby: "#701516",
  Shell: "#89e051", Kotlin: "#A97BFF", Swift: "#F05138", Dart: "#00B4AB",
};

function VercelLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 76 65" fill="currentColor" className={className}>
      <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
    </svg>
  );
}

function RepoCard({ repo }: { repo: Repo }) {
  const langColor =
    repo.primaryLanguage?.color ?? LANG_COLORS[repo.primaryLanguage?.name ?? ""] ?? "#555";
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-xl border border-white/[0.08] bg-[#111] p-5 transition-all hover:border-white/20 hover:bg-white/[0.04]"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="truncate text-sm font-medium text-white">{repo.name}</span>
        <svg className="h-3.5 w-3.5 shrink-0 text-[#444] transition-colors group-hover:text-[#888]"
          viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="line-clamp-2 flex-1 text-xs leading-relaxed text-[#666]">
        {repo.description ?? "No description."}
      </p>
      <div className="flex items-center gap-4 pt-1">
        {repo.primaryLanguage && (
          <span className="flex items-center gap-1.5 text-xs text-[#666]">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: langColor }} />
            {repo.primaryLanguage.name}
          </span>
        )}
        {repo.stargazerCount > 0 && (
          <span className="flex items-center gap-1 text-xs text-[#555]">
            <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
            </svg>
            {repo.stargazerCount}
          </span>
        )}
      </div>
    </a>
  );
}

export default async function Home() {
  const [profile, repos] = await Promise.all([getProfile(), getPinnedRepos()]);

  const displayName = profile?.name ?? profile?.login ?? "Jessenhs";
  const username = profile?.login ?? "Jessenhs";
  const bio = profile?.bio ?? "";

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <VercelLogo className="h-4 w-4 text-white" />
            <span className="text-sm font-medium">{displayName}</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-[#666]">
            <a href="#about" className="transition-colors hover:text-white">About</a>
            <a href="#skills" className="transition-colors hover:text-white">Skills</a>
            <a href="#work" className="transition-colors hover:text-white">Work</a>
            <a
              href={`mailto:hi@example.com`}
              className="rounded-lg bg-white px-3.5 py-1.5 text-xs font-semibold text-black transition-colors hover:bg-[#eee]"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6">

        {/* ── Hero ── */}
        <section id="about" className="flex flex-col gap-10 py-20 sm:flex-row sm:items-center sm:gap-16">
          {/* Text */}
          <div className="flex-1">
            <p className="mb-3 text-xs uppercase tracking-widest text-[#555]">Portfolio</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{displayName}</h1>
            <p className="mt-1 text-lg text-[#555]">Software Engineer</p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#888]">{bio}</p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#work"
                className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#eee]"
              >
                View work
              </a>
              <a
                href={profile?.html_url ?? `https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-[#888] transition-all hover:border-white/20 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Avatar */}
          {profile && (
            <div className="shrink-0">
              <Image
                src={profile.avatar_url}
                alt={displayName}
                width={120}
                height={120}
                className="rounded-2xl ring-1 ring-white/10"
                priority
              />
            </div>
          )}
        </section>

        {/* ── Divider ── */}
        <div className="border-t border-white/[0.06]" />

        {/* ── Skills ── */}
        <section id="skills" className="py-16">
          <p className="mb-6 text-xs uppercase tracking-widest text-[#555]">Skills</p>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight">What I work with</h2>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-white/[0.08] bg-[#111] px-3 py-1.5 text-sm text-[#888] transition-all hover:border-white/20 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="border-t border-white/[0.06]" />

        {/* ── Work / Repos ── */}
        <section id="work" className="py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-[#555]">Work</p>
              <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            </div>
            <a
              href={`https://github.com/${username}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#555] transition-colors hover:text-white"
            >
              All repos →
            </a>
          </div>

          {repos.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo) => <RepoCard key={repo.name} repo={repo} />)}
            </div>
          ) : (
            <div className="rounded-xl border border-white/[0.08] p-10 text-center text-sm text-[#444]">
              Set{" "}
              <code className="rounded bg-white/[0.06] px-1.5 py-0.5 text-xs">GITHUB_USERNAME</code>
              {" "}in <code className="rounded bg-white/[0.06] px-1.5 py-0.5 text-xs">.env.local</code>
            </div>
          )}
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 text-xs text-[#444]">
          <div className="flex items-center gap-2">
            <VercelLogo className="h-3.5 w-3.5" />
            <span>© {new Date().getFullYear()} {displayName}</span>
          </div>
          <div className="flex gap-5">
            <a href={profile?.html_url ?? "#"} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">GitHub</a>
            {profile?.twitter_username && (
              <a href={`https://x.com/${profile.twitter_username}`} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">X</a>
            )}
            {profile?.blog && (
              <a href={profile.blog.startsWith("http") ? profile.blog : `https://${profile.blog}`} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Website</a>
            )}
          </div>
        </div>
      </footer>

    </div>
  );
}
