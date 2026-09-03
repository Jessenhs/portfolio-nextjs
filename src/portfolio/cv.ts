/**
 * CV content. Rendered by src/pages/cv.astro.
 * Edit this file to update the CV; the layout adapts automatically.
 */

export const CV = {
  name: "Jesse Nieuwenhuis",
  headline: "Full-Stack Developer",
  location: "The Netherlands",

  profile:
    "Software developer in year 3 of MBO4 Software Development. Experienced in building full-stack web apps, desktop software, and security tools. Already running my own company, NHS Services. Driven by building products and turning ideas into business.",

  experience: [
    {
      role: "Founder & Developer",
      company: "NHS Services",
      period: "2026 Apr – Present",
      description:
        "Founded a web development and hosting company. Designed and delivered a custom website for a client, handling the full process from requirements to deployment.",
    },
    {
      role: "Employee",
      company: "Lidl, Goor",
      period: "2025 Feb – Present",
      description:
        "Working in a fast-paced retail environment. Responsible for stock management, customer service, and store operations.",
    },
    {
      role: "Software Development Intern",
      company: "IACT",
      period: "2025 Sept - 2026 Feb",
      description:
        "Internship focused on software development in a professional environment. Applied technical skills on real-world projects and collaborated within a development team.",
    },
    {
      role: "Video Editor",
      company: "Montertube",
      period: "2024  •  6 months",
      description:
        "Edited and produced video content. Managed deadlines and delivered consistent output on schedule.",
    },
  ],

  skills: [
    { label: "Languages", value: "C#/C++, Rust, Python, JavaScript/TypeScript, PHP, SQL, Bash, HTML/CSS" },
    { label: "Frameworks", value: "Next.js, React, Laravel, Tailwind CSS, Prisma ORM, WPF/.NET, Astro" },
    { label: "Databases", value: "PostgreSQL, MySQL, SQLite" },
    { label: "DevOps", value: "Git, GitHub, Docker, CI/CD, WSL2" },
    { label: "Editors", value: "Visual Studio, Zed," },
    { label: "Platforms", value: "Windows, WSL, macOS, Linux, (Kali & Ubuntu)" },
  ],

  projects: [
    {
      name: "Security Scanner",
      stack: "Python",
      description:
        "Real-time network monitoring, process scanning, and VirusTotal API integration for malware detection.",
    },
    {
      name: "HMI Panel",
      stack: "C#/C++, WPF/.NET",
      description:
        "Human-Machine Interface for PLC control systems with real-time industrial I/O monitoring.",
    },
    {
      name: "Portfolio",
      stack: "Next.js, TypeScript, Prisma",
      description:
        "Full-stack portfolio with dynamic content and PostgreSQL integration via Neon.tech.",
    },
    {
      name: "Admin Panel",
      stack: "Python",
      description:
        "Network security dashboard with DDoS attack detection, traffic monitoring",
    },
  ],

  education: {
    title: "MBO4 — Software Development",
    meta: "Year 3  •  Currently enrolled",
    description: "Core focus: software development, databases, web technologies.",
  },

  languages: [
    { label: "Dutch", value: "Native" },
    { label: "English", value: "Professional working proficiency" },
  ],

  interests: ["Building products", "Entrepreneurship", "Ethical hacking", "Gaming Cheats", "Gaming"],
};
