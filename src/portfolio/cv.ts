/**
 * CV content. Rendered by src/pages/cv.astro.
 * Edit this file to update the CV; the layout adapts automatically.
 */

export const CV = {
  name: "Jesse Nieuwenhuis",
  headline: "Full-Stack Developer & Cybersecurity Specialist",
  location: "The Netherlands",

  profile:
    "Ambitious software engineer currently in year 2 of MBO4 Software Development. With hands-on experience across 17+ projects spanning web applications, security tools, desktop software, and e-commerce platforms, I bring a strong foundation in full-stack development combined with a self-taught passion for ethical hacking and cybersecurity. Outside of my studies, I taught myself offensive and defensive security techniques — from analyzing malware behavior to building real-time network monitoring tools — purely driven by curiosity and passion. My long-term goal is to combine both worlds and found a cybersecurity services company that helps businesses protect their digital assets.",

  skills: [
    { label: "Languages", value: "Python, C#, PHP, JavaScript, TypeScript, HTML, CSS, SQL, Bash" },
    { label: "Frameworks", value: "Next.js, React, Laravel, Tailwind CSS, Prisma ORM, WPF (.NET), Astro" },
    { label: "Cybersecurity", value: "Nmap, Aircrack-ng, Kali Linux, Wireshark, malware analysis, network recon, reverse shells, process scanning, defensive tooling" },
    { label: "Databases", value: "PostgreSQL (Neon.tech), SQLite, Prisma ORM, MySQL" },
    { label: "DevOps & Tools", value: "Git, GitHub, Docker, VS Code, Cursor, WSL, npm, CI/CD basics" },
    { label: "Platforms", value: "Windows, Linux (Kali & Ubuntu), WSL2" },
  ],

  projectGroups: [
    {
      title: "Web Development",
      projects: [
        { name: "Portfolio (Next.js)", stack: "TypeScript, Next.js, Prisma", year: "2025", description: "Modern full-stack portfolio with dynamic content, responsive design, and PostgreSQL database integration via Neon.tech and Prisma ORM." },
        { name: "Scrapper", stack: "HTML, JavaScript", year: "2025", description: "Web scraping tool for automated data extraction from websites with structured output." },
        { name: "JamVRC", stack: "TypeScript", year: "2025", description: "TypeScript web application with modern architecture and component-driven design patterns." },
        { name: "My-App", stack: "TypeScript", year: "2025", description: "Full-stack TypeScript application showcasing modern development practices and clean architecture." },
        { name: "Sunny Travels", stack: "JavaScript", year: "2025", description: "Travel-themed web application with interactive features and dynamic content rendering." },
        { name: "Chef's Website", stack: "PHP", year: "2025", description: "Professional restaurant website with menu management, reservations, and responsive mobile design." },
        { name: "KrackX Webstore", stack: "PHP", year: "2025", description: "Full e-commerce store with product catalog, shopping cart, checkout flow, and order management." },
        { name: "Portfolio PHP", stack: "PHP", year: "2025", description: "Service-oriented portfolio with integrated payment functionality and client showcase." },
        { name: "Simple PHP Webshop", stack: "PHP", year: "2025", description: "Complete e-commerce platform with product listings, cart system, and order processing." },
        { name: "Portfolio (Astro)", stack: "Astro", year: "2025", description: "Blazing-fast static portfolio built with Astro framework for optimal performance." },
        { name: "BeatVault", stack: "PHP", year: "2025", description: "Music beat marketplace with catalog browsing, preview playback, and purchasing flow." },
        { name: "Beats Website", stack: "Web", year: "2025", description: "Music-focused platform for showcasing and distributing audio content." },
        { name: "Password Generator", stack: "JavaScript, React", year: "2025", description: "Secure password generator with customizable length, character sets, and copy-to-clipboard." },
      ],
    },
    {
      title: "Security & Networking",
      projects: [
        { name: "Security Scanner", stack: "Python", year: "2025", description: "Multi-component toolkit: AppData path detection, real-time network monitoring, suspicious process scanning, and VirusTotal API integration with MD5 hashing for automated malware analysis." },
        { name: "Admin Panel", stack: "Python", year: "2025", description: "Network security monitoring tool with IP logging and traffic analysis capabilities." },
      ],
    },
    {
      title: "Desktop & Industrial",
      projects: [
        { name: "HMI Panel", stack: "C#, WPF, .NET", year: "2025", description: "Human-Machine Interface for PLC control systems. Manages industrial inputs/outputs with real-time monitoring and control dashboards." },
      ],
    },
  ],

  education: {
    title: "MBO4 – Software Development",
    meta: "Year 2  •  Currently enrolled  •  The Netherlands",
    points: [
      "Core focus: software development, databases, web technologies",
      "Self-directed specialization in cybersecurity and ethical hacking",
      "Hands-on approach: building real tools and applications, not just coursework",
    ],
  },

  goals: [
    { label: "Target certifications", value: "CompTIA Security+, CEH (Certified Ethical Hacker), OSCP" },
    { label: "Career goal", value: "Founding a cybersecurity services company — offering penetration testing, security audits, and protective products to businesses." },
  ],

  languages: [
    { label: "Dutch", value: "Native speaker" },
    { label: "English", value: "Professional working proficiency" },
  ],

  interests: [
    "Ethical hacking & CTF challenges",
    "Malware analysis & reverse engineering",
    "Open-source security tooling",
    "Gaming",
    "Building things that work",
  ],
};
