import {
  ArrowRight,
  ExternalLink,
  GithubIcon,
  LinkedinIcon,
  Mail,
  Star,
  TwitterIcon,
} from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory, Stripe payments, and a custom admin dashboard.",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    link: "#",
    stars: 248,
  },
  {
    title: "DevFlow CLI",
    description:
      "Command-line tool that streamlines development workflows with automatic environment management.",
    tags: ["Node.js", "Go", "Docker"],
    link: "#",
    stars: 156,
  },
  {
    title: "AI Review Bot",
    description:
      "GitHub App that performs automated code reviews using AI, reducing PR review time by 60%.",
    tags: ["Python", "OpenAI", "FastAPI", "GitHub API"],
    link: "#",
    stars: 389,
  },
  {
    title: "DataSync Engine",
    description:
      "High-throughput data synchronisation service handling 10M+ events per day across distributed systems.",
    tags: ["Rust", "Kafka", "PostgreSQL", "Redis"],
    link: "#",
    stars: 112,
  },
];

const skills = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Rust",
  "React",
  "Next.js",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "Prisma",
  "Docker",
  "Kubernetes",
  "AWS",
  "Vercel",
  "GraphQL",
  "REST",
  "gRPC",
  "Git",
];

const socials = [
  { href: "https://github.com", icon: GithubIcon, label: "GitHub" },
  { href: "https://twitter.com", icon: TwitterIcon, label: "Twitter" },
  { href: "https://linkedin.com", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "mailto:hi@example.com", icon: Mail, label: "Email" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ── Navbar ── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <span className="font-mono text-sm">~/portfolio</span>
          <nav className="flex items-center gap-6 text-sm text-zinc-500">
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
            <a href="#projects" className="transition-colors hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Top radial glow */}
        <div
          className="absolute inset-x-0 top-0 h-[600px]"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,255,255,0.07), transparent)",
          }}
        />
        {/* Bottom fade to black */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          {/* Availability badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Available for new projects
          </div>

          {/* Name */}
          <h1
            className="max-w-4xl text-7xl font-bold tracking-tighter md:text-8xl lg:text-9xl"
            style={{
              background:
                "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.35) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Your Name
          </h1>

          {/* Role */}
          <p className="mt-4 font-mono text-lg text-zinc-500">
            Full-Stack Engineer
          </p>

          {/* Tagline */}
          <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-500">
            I build performant, production-ready web applications and enjoy
            working at the intersection of great engineering and design.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-zinc-100"
            >
              View Projects
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              Get in Touch
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-5">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-zinc-600 transition-colors hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="border-t border-white/[0.08] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionLabel>About</SectionLabel>
          <div className="mt-8 grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight">
                Passionate about building things that matter
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-500">
                I&apos;m a full-stack engineer with 5+ years of experience
                building production applications for startups and scale-ups. I
                care deeply about performance, reliability, and crafting
                experiences users actually enjoy.
              </p>
              <p className="mt-4 leading-relaxed text-zinc-500">
                When I&apos;m not coding, I&apos;m contributing to open source,
                writing about software engineering, or exploring the latest
                developments in AI tooling.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Years Experience", value: "5+" },
                { label: "Projects Shipped", value: "40+" },
                { label: "Open Source Stars", value: "900+" },
                { label: "Cups of Coffee", value: "∞" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-white/20"
                >
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="border-t border-white/[0.08] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionLabel>Projects</SectionLabel>
          <h2 className="mt-2 text-3xl font-bold">Things I&apos;ve built</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="group rounded-lg border border-white/[0.08] bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold">{project.title}</h3>
                  <div className="flex shrink-0 items-center gap-3 pl-3">
                    <span className="flex items-center gap-1 text-xs text-zinc-600">
                      <Star className="h-3 w-3" />
                      {project.stars}
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-zinc-700 transition-colors group-hover:text-zinc-400" />
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 font-mono text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="border-t border-white/[0.08] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionLabel>Stack</SectionLabel>
          <h2 className="mt-2 text-3xl font-bold">Technologies I use</h2>

          <div className="mt-10 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-400 transition-all hover:border-white/20 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="border-t border-white/[0.08] py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-2 text-4xl font-bold">Let&apos;s work together</h2>
          <p className="mx-auto mt-4 max-w-sm text-zinc-500">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
          <a
            href="mailto:hi@example.com"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-zinc-200"
          >
            <Mail className="h-4 w-4" />
            hi@example.com
          </a>

          <div className="mt-8 flex items-center justify-center gap-5">
            {socials.slice(0, 3).map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-zinc-600 transition-colors hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.08] py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 text-sm text-zinc-600">
          <span>© {new Date().getFullYear()} Your Name</span>
          <span className="font-mono text-xs">Built with Next.js & Vercel</span>
        </div>
      </footer>
    </div>
  );
}
