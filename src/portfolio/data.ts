/**
 * Portfolio content and branding.
 * Kept separate from the UI so it survives front-end rewrites.
 */

export const SITE = {
  title: "Jesse Nieuwenhuis — Software Engineer",
  description: "Software engineer building performant",
  name: "Jesse Nieuwenhuis",
  fallbackUsername: "Jessenhs",
  fallbackBio:
    "I build things for the web — clean interfaces, solid backends, and everything in between.",
  tagline: "a software engineer who builds applications.",
  about:
    "I care about clean code, good design, and shipping things that work. Currently open to new opportunities.",
  email: "jessenieuwenhuis@hotmail.com",
  cvPath: "/assets/Jesse_Nieuwenhuis_CV.docx",
};

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/jesse-nieuwenhuis-214927360/",
};

export const SKILLS = [
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
    items: ["Nmap", "Aircrack-ng", "Kali Linux", "Netwerk recon", "Malware-analyse"],
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

export const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6", JavaScript: "#f1e05a", Python: "#3572A5",
  Rust: "#dea584", Go: "#00ADD8", HTML: "#e34c26", CSS: "#563d7c",
  "C++": "#f34b7d", C: "#555", Java: "#b07219", Ruby: "#701516",
  Shell: "#89e051", Kotlin: "#A97BFF", Swift: "#F05138", Dart: "#00B4AB",
};
