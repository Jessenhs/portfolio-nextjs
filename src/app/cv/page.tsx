'use client';

import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CVPage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleDownloadPDF = () => {
    window.print();
  };

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
            width: 210mm;
            height: 297mm;
            overflow: hidden;
          }

          .no-print {
            display: none !important;
            visibility: hidden !important;
          }

          .cv-container {
            margin: 0 !important;
            padding: 12mm 15mm !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
        }
      `}</style>

      {/* Navigation bar - hidden when printing */}
      <div className={`no-print fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className={`${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 text-white' : 'bg-black/5 hover:bg-black/10 border-gray-200 hover:border-gray-300 text-black'} backdrop-blur-md border transition-all duration-200 rounded-lg`}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <Button
            onClick={handleDownloadPDF}
            size="sm"
            className={`${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 text-white' : 'bg-black/5 hover:bg-black/10 border-gray-200 hover:border-gray-300 text-black'} backdrop-blur-md border transition-all duration-200 rounded-lg`}
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* CV Content */}
      <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-gray-100'} pt-20 pb-12 print:pt-0 print:pb-0 print:bg-white`}>
        <div
          className="cv-container max-w-[210mm] mx-auto bg-white shadow-lg print:shadow-none"
          style={{
            fontFamily: "'Calibri', 'Arial', sans-serif",
            lineHeight: 1.4,
            color: '#000',
            width: '210mm',
            minHeight: '297mm',
            padding: '14mm 16mm',
            boxSizing: 'border-box',
          }}
        >
          {/* Header */}
          <div className="text-center mb-2.5 border-b-2 border-black pb-2">
            <h1 className="m-0 mb-1 text-2xl font-bold uppercase tracking-wide">
              Jesse Nieuwenhuis
            </h1>
            <div className="text-xs font-semibold mb-1">
              Software Engineer &amp; Self-taught Ethical Hacker
            </div>
            <div className="text-[10px] leading-relaxed">
              The Netherlands | <a href="mailto:jesse@jessenhs.dev" className="text-black no-underline">jessenhs@outlook.com</a><br />
              Portfolio: <a href="https://jessenhs.dev" className="text-black no-underline">jessenhs.dev</a> | GitHub: <a href="https://github.com/Jessenhs" className="text-black no-underline">github.com/Jessenhs</a>
            </div>
          </div>

          {/* Profile */}
          <div className="mb-2.5">
            <div className="text-[13px] font-bold uppercase my-2 border-b-[1.5px] border-black pb-0.5 tracking-wide">
              PROFILE
            </div>
            <div className="text-[10px] leading-relaxed">
              Ambitious software engineer currently in year 2 of MBO4 Software Development. With hands-on experience across 17+ projects spanning web applications, offensive security tools, desktop software, and e-commerce platforms, I bring a strong foundation in full-stack development combined with a self-taught passion for ethical hacking and cybersecurity. Outside of my studies, I taught myself offensive and defensive security techniques — from analyzing malware behavior to building real-time network monitoring tools — purely driven by curiosity and passion. My long-term goal is to combine both worlds and found a cybersecurity services company that helps businesses protect their digital assets.
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-2.5">
            <div className="text-[13px] font-bold uppercase my-2 border-b-[1.5px] border-black pb-0.5 tracking-wide">
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
            <div className="text-[13px] font-bold uppercase my-2 border-b-[1.5px] border-black pb-0.5 tracking-wide">
              PROJECTS
            </div>

            {/* Web Development */}
            <div className="font-semibold text-[10.5px] mt-1 mb-0.5">Web Development</div>

            <div className="mb-1">
              <div className="font-bold text-[11px]">Portfolio (Next.js) — TypeScript, Next.js, Prisma ORM, PostgreSQL · 2026</div>
              <ul className="my-0.5 ml-5 p-0 text-[10px]">
                <li className="mb-0.5">Modern full-stack portfolio with dynamic content, responsive design, and PostgreSQL database integration via Prisma ORM.</li>
                <li className="mb-0.5"><strong>GitHub:</strong> github.com/Jessenhs/portfolio-nextjs</li>
              </ul>
            </div>

            <div className="mb-1">
              <div className="font-bold text-[11px]">JamVRC — TypeScript, Next.js, Neon PostgreSQL, NextAuth · 2026</div>
              <ul className="my-0.5 ml-5 p-0 text-[10px]">
                <li className="mb-0.5">Virtual rally championship tracker with Google OAuth, component-driven architecture, and live data from Neon serverless Postgres. Deployed on Vercel with custom domain.</li>
                <li className="mb-0.5"><strong>GitHub:</strong> github.com/Jessenhs/jamvrc</li>
              </ul>
            </div>

            {/* Security */}
            <div className="font-semibold text-[10.5px] mt-1.5 mb-0.5">Security &amp; Networking</div>

            <div className="mb-1">
              <div className="font-bold text-[11px]">Security Scanner — Python · 2026</div>
              <ul className="my-0.5 ml-5 p-0 text-[10px]">
                <li className="mb-0.5">Multi-component toolkit: AppData sensitive path detection, real-time network connection monitoring, suspicious process scanning, and VirusTotal API integration with MD5 hashing for automated malware analysis.</li>
                <li className="mb-0.5"><strong>GitHub:</strong> github.com/Jessenhs/security-scanner</li>
              </ul>
            </div>

            <div className="mb-1">
              <div className="font-bold text-[11px]">Admin Panel — Python · 2025</div>
              <ul className="my-0.5 ml-5 p-0 text-[10px]">
                <li className="mb-0.5">Network security monitoring tool with IP logging and local traffic analysis capabilities. ★ 1 star on GitHub.</li>
              </ul>
            </div>

            {/* Desktop */}
            <div className="font-semibold text-[10.5px] mt-1.5 mb-0.5">Desktop &amp; Industrial</div>

            <div className="mb-1">
              <div className="font-bold text-[11px]">HMI Panel — C#, WPF, .NET · 2025</div>
              <ul className="my-0.5 ml-5 p-0 text-[10px]">
                <li className="mb-0.5">Human-Machine Interface for PLC control systems. Manages industrial inputs/outputs with real-time monitoring and control dashboards.</li>
                <li className="mb-0.5"><strong>GitHub:</strong> github.com/Jessenhs/hmi-panel</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mb-2.5">
            <div className="text-[13px] font-bold uppercase my-2 border-b-[1.5px] border-black pb-0.5 tracking-wide">
              EDUCATION
            </div>
            <div className="flex justify-between items-baseline mb-0.5">
              <div>
                <div className="font-bold text-[11px]">MBO4 — Software Development</div>
                <div className="font-semibold text-[11px]">Aventus, The Netherlands</div>
              </div>
              <div className="text-[10px] italic">2024 — Present</div>
            </div>
            <ul className="my-0.5 ml-5 p-0 text-[10px]">
            </ul>
            <div className="flex justify-between items-baseline mt-2 mb-0.5">
              <div>
                <div className="font-bold text-[11px]">MAVO</div>
                <div className="font-semibold text-[11px]">De Waerdenborch, Holten</div>
              </div>
              <div className="text-[10px] italic">2020 — 2024</div>
            </div>
          </div>

          {/* Certifications & Goals */}
          <div className="mb-2.5">
            <div className="text-[13px] font-bold uppercase my-2 border-b-[1.5px] border-black pb-0.5 tracking-wide">
              CERTIFICATIONS &amp; GOALS
            </div>
            <div className="text-[10px] leading-relaxed">
              <strong>Target certifications:</strong> CompTIA Security+, CEH (Certified Ethical Hacker), OSCP<br />
              <strong>Career goal:</strong> Founding a cybersecurity services company — offering penetration testing, security audits, and protective products to businesses.
            </div>
          </div>

          {/* Languages */}
          <div className="mb-2.5">
            <div className="text-[13px] font-bold uppercase my-2 border-b-[1.5px] border-black pb-0.5 tracking-wide">
              LANGUAGES
            </div>
            <div className="text-[10px] leading-relaxed">
              <strong>Dutch:</strong> Native speaker | <strong>English:</strong> Professional working proficiency
            </div>
          </div>
        </div>
      </div>
    </>
  );
}