'use client';

import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

export default function CVPage() {
  return (
    <>
      <style jsx global>{`
        @page {
          size: A4 portrait;
          margin: 0;
        }

        @media print {
          html, body {
            margin: 0;
            padding: 0;
            background: white !important;
            color: black !important;
          }

          .no-print {
            display: none !important;
          }

          .cv-page-bg {
            background: white !important;
            padding: 0 !important;
          }

          .cv-paper {
            width: 210mm !important;
            min-height: 297mm !important;
            padding: 12mm 15mm !important;
            margin: 0 !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
        }

        /* screen sizing handled via inline style on the element */
      `}</style>

      {/* ── Nav ── */}
      <div className="no-print fixed left-0 right-0 top-0 z-50 border-b border-black/[0.06] glass-nav">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3">

          {/* Back button — ghost style */}
          <Link href="/">
            <button className="group flex items-center gap-1.5 rounded-lg border border-black/[0.07] bg-white/60 px-3 py-1.5 text-sm font-medium text-[#6e6e73] transition-all duration-200 ease-out hover:border-black/[0.12] hover:bg-white hover:text-[#1d1d1f] hover:shadow-sm active:scale-[0.97]">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
              Back
            </button>
          </Link>

          {/* Download button — solid */}
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 rounded-lg bg-[#1d1d1f] px-3 py-1.5 text-sm font-medium text-white transition-all duration-200 ease-out hover:bg-black hover:shadow-md active:scale-[0.97]"
          >
            <Download className="h-3.5 w-3.5" />
            Download PDF
          </button>
        </div>
      </div>

      {/* ── Page bg ── */}
      <div className="cv-page-bg min-h-screen pt-[60px] pb-12" style={{ background: '#f0f2f8' }}>
        {/* Center the A4 paper — stable centering via margin auto + max-width inline */}
        <div className="px-4 py-8">
          <div
            className="cv-paper bg-white"
            style={{
              fontFamily: "'Calibri', 'Arial', sans-serif",
              lineHeight: 1.4,
              color: '#000',
              width: '100%',
              maxWidth: '210mm',
              margin: '0 auto',
              minHeight: '297mm',
              padding: '14mm 16mm',
              boxSizing: 'border-box',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08), 0 20px 60px rgba(0,0,0,0.12)',
            }}
          >
            {/* Header */}
            <div className="mb-2.5 border-b-2 border-black pb-2 text-center">
              <h1 className="m-0 mb-1 text-2xl font-bold uppercase tracking-wide">
                Jesse Nieuwenhuis
              </h1>
              <div className="mb-1 text-xs font-semibold">
                Software Engineer &amp; Self-taught Ethical Hacker
              </div>
              <div className="text-[10px] leading-relaxed">
                The Netherlands | <a href="mailto:jessenhs@outlook.com" className="text-black no-underline">jessenhs@outlook.com</a><br />
                Portfolio: <a href="https://jessenhs.dev" className="text-black no-underline">jessenhs.dev</a> | GitHub: <a href="https://github.com/Jessenhs" className="text-black no-underline">github.com/Jessenhs</a>
              </div>
            </div>

            {/* Profile */}
            <div className="mb-2.5">
              <div className="my-2 border-b-[1.5px] border-black pb-0.5 text-[13px] font-bold uppercase tracking-wide">
                PROFILE
              </div>
              <div className="text-[10px] leading-relaxed">
                Ambitious software engineer currently in year 2 of MBO4 Software Development. With hands-on experience across 17+ projects spanning web applications, offensive security tools, desktop software, and e-commerce platforms, I bring a strong foundation in full-stack development combined with a self-taught passion for ethical hacking and cybersecurity. Outside of my studies, I taught myself offensive and defensive security techniques — from analyzing malware behavior to building real-time network monitoring tools — purely driven by curiosity and passion. My long-term goal is to combine both worlds and found a cybersecurity services company that helps businesses protect their digital assets.
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-2.5">
              <div className="my-2 border-b-[1.5px] border-black pb-0.5 text-[13px] font-bold uppercase tracking-wide">
                TECHNICAL SKILLS
              </div>
              <div className="text-[10px] leading-relaxed">
                <strong>Programming Languages:</strong> Python, C#, PHP, JavaScript, TypeScript, HTML, CSS, SQL<br />
                <strong>Frameworks &amp; Libraries:</strong> Next.js, React, Laravel, Tailwind CSS, Prisma ORM, WPF (.NET), Astro<br />
                <strong>Cybersecurity:</strong> Nmap, Kali Linux, malware analysis, network scanning, process scanning, offensive malware<br />
                <strong>Databases:</strong> PostgreSQL, SQLite, MySQL, Prisma ORM<br />
                <strong>DevOps &amp; Tools:</strong> Git, GitHub, Docker, VS Code, Cursor, WSL, npm, CI/CD basics<br />
                <strong>Platforms:</strong> Windows, Linux (Kali &amp; Ubuntu), WSL
              </div>
            </div>

            {/* Projects */}
            <div className="mb-2.5">
              <div className="my-2 border-b-[1.5px] border-black pb-0.5 text-[13px] font-bold uppercase tracking-wide">
                PROJECTS
              </div>

              <div className="mb-0.5 mt-1 text-[10.5px] font-semibold">Web Development</div>

              <div className="mb-1">
                <div className="text-[11px] font-bold">Portfolio (Next.js) — TypeScript, Next.js, Prisma ORM, PostgreSQL · 2026</div>
                <ul className="my-0.5 ml-5 p-0 text-[10px]">
                  <li className="mb-0.5">Modern full-stack portfolio with dynamic content, responsive design, and PostgreSQL database integration via Prisma ORM.</li>
                  <li className="mb-0.5"><strong>GitHub:</strong> github.com/Jessenhs/portfolio-nextjs</li>
                </ul>
              </div>

              <div className="mb-1">
                <div className="text-[11px] font-bold">JamVRC — TypeScript, Next.js, Neon PostgreSQL, NextAuth · 2026</div>
                <ul className="my-0.5 ml-5 p-0 text-[10px]">
                  <li className="mb-0.5">Virtual rally championship tracker with Google OAuth, component-driven architecture, and live data from Neon serverless Postgres. Deployed on Vercel with custom domain.</li>
                  <li className="mb-0.5"><strong>GitHub:</strong> github.com/Jessenhs/jamvrc</li>
                </ul>
              </div>

              <div className="mb-0.5 mt-1.5 text-[10.5px] font-semibold">Security &amp; Networking</div>

              <div className="mb-1">
                <div className="text-[11px] font-bold">Security Scanner — Python · 2026</div>
                <ul className="my-0.5 ml-5 p-0 text-[10px]">
                  <li className="mb-0.5">Multi-component toolkit: AppData sensitive path detection, real-time network connection monitoring, suspicious process scanning, and VirusTotal API integration with MD5 hashing for automated malware analysis.</li>
                  <li className="mb-0.5"><strong>GitHub:</strong> github.com/Jessenhs/security-scanner</li>
                </ul>
              </div>

              <div className="mb-1">
                <div className="text-[11px] font-bold">Admin Panel — Python · 2025</div>
                <ul className="my-0.5 ml-5 p-0 text-[10px]">
                  <li className="mb-0.5">Network security monitoring tool with IP logging and local traffic analysis capabilities. ★ 1 star on GitHub.</li>
                </ul>
              </div>

              <div className="mb-0.5 mt-1.5 text-[10.5px] font-semibold">Desktop &amp; Industrial</div>

              <div className="mb-1">
                <div className="text-[11px] font-bold">HMI Panel — C#, WPF, .NET · 2025</div>
                <ul className="my-0.5 ml-5 p-0 text-[10px]">
                  <li className="mb-0.5">Human-Machine Interface for PLC control systems. Manages industrial inputs/outputs with real-time monitoring and control dashboards.</li>
                  <li className="mb-0.5"><strong>GitHub:</strong> github.com/Jessenhs/hmi-panel</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="mb-2.5">
              <div className="my-2 border-b-[1.5px] border-black pb-0.5 text-[13px] font-bold uppercase tracking-wide">
                EDUCATION
              </div>
              <div className="mb-0.5 flex items-baseline justify-between">
                <div>
                  <div className="text-[11px] font-bold">MBO4 — Software Development</div>
                  <div className="text-[11px] font-semibold">Aventus, The Netherlands</div>
                </div>
                <div className="text-[10px] italic">2024 — Present</div>
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <div>
                  <div className="text-[11px] font-bold">MAVO</div>
                  <div className="text-[11px] font-semibold">De Waerdenborch, Holten</div>
                </div>
                <div className="text-[10px] italic">2020 — 2024</div>
              </div>
            </div>

            {/* Certifications & Goals */}
            <div className="mb-2.5">
              <div className="my-2 border-b-[1.5px] border-black pb-0.5 text-[13px] font-bold uppercase tracking-wide">
                CERTIFICATIONS &amp; GOALS
              </div>
              <div className="text-[10px] leading-relaxed">
                <strong>Target certifications:</strong> CompTIA Security+, CEH (Certified Ethical Hacker), OSCP<br />
                <strong>Career goal:</strong> Founding a cybersecurity services company — offering penetration testing, security audits, and protective products to businesses.
              </div>
            </div>

            {/* Languages */}
            <div className="mb-2.5">
              <div className="my-2 border-b-[1.5px] border-black pb-0.5 text-[13px] font-bold uppercase tracking-wide">
                LANGUAGES
              </div>
              <div className="text-[10px] leading-relaxed">
                <strong>Dutch:</strong> Native speaker | <strong>English:</strong> Professional working proficiency
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
