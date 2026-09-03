"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const isDark = () => document.documentElement.classList.contains("dark");

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  function toggle() {
    const next = !isDark();
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="flex items-center gap-3 text-xs text-neutral-500 transition-colors hover:text-black dark:hover:text-white"
    >
      <span className="relative inline-flex h-4 w-7 items-center rounded-full border border-current">
        <span
          className={`absolute h-2.5 w-2.5 rounded-full bg-current transition-transform ${
            dark ? "translate-x-3.5" : "translate-x-0.5"
          }`}
        />
      </span>
      <span>{dark ? "Dark" : "Light"}</span>
    </button>
  );
}
