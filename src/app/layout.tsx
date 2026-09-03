import type { Metadata } from "next";
import localFont from "next/font/local";
import { SITE } from "@/portfolio/data";
import "./globals.css";

const proggy = localFont({
  src: "../fonts/ProggyCleanSZ.ttf",
  variable: "--font-proggy",
  display: "block",
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

// Applies the saved theme (or the system preference) before first paint.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={proggy.variable}
      >
        {children}
      </body>
    </html>
  );
}
