import Image from "next/image";
import { getProfile, getPinnedRepos, type Repo } from "@/lib/github";

const SKILLS = [
  {
    category: "Programmeertalen",
    items: ["Python", "C#", "PHP", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Next.js", "React", "Laravel", "Tailwind CSS", "Prisma ORM", "WPF (.NET)"],
  },
  {
    category: "Ethical Hacking",
    items: ["Nmap", "Kali Linux", "Netwerk recon", "Malware-analyse"],
  },
  {
    category: "Databases & DevOps",
    items: ["PostgreSQL", "SQLite", "Git", "Docker", "npm"],
  },
  {
    category: "Linux & OS",
    items: ["Kali Linux", "Ubuntu", "WSL", "Bash scripting", "Windows"],
  },
];

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6", JavaScript: "#f1e05a", Python: "#3572A5",
  Rust: "#dea584", Go: "#00ADD8", HTML: "#e34c26", CSS: "#563d7c",
  "C++": "#f34b7d", C: "#555", Java: "#b07219", Ruby: "#701516",
  Shell: "#89e051", Kotlin: "#A97BFF", Swift: "#F05138", Dart: "#00B4AB",
};

function RepoCard({ repo, index }: { repo: Repo; index: number }) {
  const langColor =
    repo.primaryLanguage?.color ?? LANG_COLORS[repo.primaryLanguage?.name ?? ""] ?? "#444";
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between gap-4 rounded-xl border border-white/[0.08] bg-[#0d0d0d] p-5 transition-all hover:border-white/[0.16] hover:bg-[#111]"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-[10px] text-[#444]">0{index + 1}</span>
        <svg className="h-3.5 w-3.5 text-[#444] transition-colors group-hover:text-white"
          viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="space-y-1.5">
        <h3 className="text-sm font-semibold text-white">{repo.name}</h3>
        <p className="line-clamp-2 text-xs leading-relaxed text-[#666]">
          {repo.description ?? "No description provided."}
        </p>
      </div>
      <div className="flex items-center justify-between">
        {repo.primaryLanguage ? (
          <span className="flex items-center gap-1.5 text-xs text-[#555]">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: langColor }} />
            {repo.primaryLanguage.name}
          </span>
        ) : <span />}
        <div className="flex items-center gap-3 text-xs text-[#444]">
          {repo.stargazerCount > 0 && <span>★ {repo.stargazerCount}</span>}
          {repo.forkCount > 0 && <span>⌥ {repo.forkCount}</span>}
        </div>
      </div>
    </a>
  );
}

export default async function Home() {
  const [profile, repos] = await Promise.all([getProfile(), getPinnedRepos()]);

  const displayName = profile?.name ?? profile?.login ?? "Jesse";
  const username = profile?.login ?? "Jessenhs";
  const bio = profile?.bio ?? "I build things for the web — clean interfaces, solid backends, and everything in between.";

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ── Nav ── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <span className="text-sm font-semibold">{displayName.split(" ")[0]}<span className="text-[#333]">.</span></span>
          <a
            href="mailto:hi@example.com"
            className="rounded-lg bg-white px-4 py-1.5 text-xs font-semibold text-black transition-opacity hover:opacity-80"
          >
            Get in touch
          </a>
        </div>
      </header>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 pt-20 pb-20 md:grid-cols-[240px_1fr]">

        {/* ── LEFT: Profile ── */}
        <aside className="space-y-6 md:sticky md:top-20 md:self-start md:max-h-[calc(100vh-5rem)] md:overflow-y-auto md:pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

          {/* Avatar card */}
          <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
            {profile ? (
              <Image
                src={profile.avatar_url}
                alt={displayName}
                width={240}
                height={240}
                className="w-full object-cover"
                priority
              />
            ) : (
              <div className="aspect-square w-full bg-[#111]" />
            )}
            <div className="border-t border-white/[0.06] p-4">
              <p className="font-semibold text-white">{displayName}</p>
              <p className="mt-0.5 text-xs text-[#555]">@{username}</p>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2 text-xs text-[#666]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Available for work
          </div>

          {/* Links */}
          <div className="space-y-2">
            <a href={profile?.html_url ?? `https://github.com/${username}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm text-[#888] transition-colors hover:text-white">
              <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/jesse-nieuwenhuis-214927360/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm text-[#888] transition-colors hover:text-white">
              <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 16 16" fill="currentColor">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              LinkedIn
            </a>
            {profile?.twitter_username && (
              <a href={`https://x.com/${profile.twitter_username}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[#888] transition-colors hover:text-white">
                <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M9.294 8.027 14.465 2h-1.23L8.731 7.233 4.784 2H1l5.432 7.613L1 14h1.23l4.749-5.354L11.216 14H15L9.294 8.027Zm-1.68 1.895-.55-.761L2.68 2.906h1.883l3.53 4.9.55.761 4.592 6.367h-1.883L7.614 9.922Z" />
                </svg>
                X / Twitter
              </a>
            )}
            {profile?.blog && (
              <a href={profile.blog.startsWith("http") ? profile.blog : `https://${profile.blog}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[#888] transition-colors hover:text-white">
                <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 16 16" fill="currentColor">
                  <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 2 2 0 0 0 2.83 0l2.5-2.5a2 2 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a2 2 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 2 2 0 0 0-2.83 0l-2.5 2.5a2 2 0 0 0 0 2.83Z" />
                </svg>
                Website
              </a>
            )}
            {profile?.location && (
              <div className="flex items-center gap-2.5 text-sm text-[#555]">
                <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 16 16" fill="currentColor">
                  <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192 0Zm-1.06-1.06a5 5 0 1 0-7.072 0L8 14.07ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z" />
                </svg>
                {profile.location}
              </div>
            )}
          </div>

        </aside>

        {/* ── RIGHT ── */}
        <main className="space-y-14">

          {/* About */}
          <section>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[#444]">About</p>
            <h2 className="text-2xl font-semibold leading-snug tracking-tight text-white">
              Hey, I&apos;m {displayName.split(" ")[0]} —<br />
              <span className="text-[#666]">a software engineer who builds applications.</span>
            </h2>
            {bio && bio !== "I build things for the web — clean interfaces, solid backends, and everything in between." && (
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#888]">{bio}</p>
            )}
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#888]">
              I care about clean code, good design, and shipping things that work. Currently open to new opportunities.
            </p>
          </section>

          {/* Projects */}
          <section>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-widest text-[#444]">Projects</p>
              <a
                href={`https://github.com/${username}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#555] transition-colors hover:text-white"
              >
                All on GitHub →
              </a>
            </div>
            {repos.length > 0 ? (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {repos.map((repo, i) => <RepoCard key={repo.name} repo={repo} index={i} />)}
              </div>
            ) : (
              <div className="rounded-xl border border-white/[0.07] p-10 text-center text-sm text-[#444]">
                Set <code className="rounded bg-white/[0.05] px-1.5 py-0.5 text-xs">GITHUB_USERNAME</code> in <code className="rounded bg-white/[0.05] px-1.5 py-0.5 text-xs">.env.local</code>
              </div>
            )}
          </section>

          {/* Skills */}
          <section>
            <p className="mb-5 text-xs font-medium uppercase tracking-widest text-[#444]">Skills</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
              {SKILLS.map(({ category, items }) => (
                <div key={category}>
                  <p className="mb-3 text-xs font-medium text-[#555]">{category}</p>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="text-sm text-white">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.06] py-7">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
          <span className="text-xs text-[#333]">© {new Date().getFullYear()} {displayName}</span>
          <a href="mailto:hi@example.com" className="text-xs text-[#555] transition-colors hover:text-white">
            hi@example.com
          </a>
        </div>
      </footer>

    </div>
  );
}
