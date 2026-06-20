"use client";

import React, { useState } from "react";
import Link from "next/link";
import { languages, Lang } from "@/app/translations";

interface NavbarProps {
  lang: Lang;
  selectLang: (code: Lang) => void;
  backLink?: string;
  backText?: string;
  projectId?: string;
}

export default function Navbar({
  lang,
  selectLang,
  backLink,
  backText = "BACK",
  projectId,
}: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const activeLangName = languages.find((l) => l.code === lang)?.name || "EN";

  return (
    <nav
      onMouseLeave={() => setDropdownOpen(false)}
      className="fixed top-6 right-6 sm:right-12 z-50 flex items-center gap-4 bg-white/80 backdrop-blur-md border border-cyber-border p-1 shadow-sm font-mono text-xs"
    >
      {backLink && (
        <Link
          href={backLink}
          className="px-4 py-2 font-bold tracking-widest text-cyber-text border-r border-cyber-border hover:bg-cyber-text hover:text-white transition-colors uppercase cursor-pointer"
        >
          {backText}
        </Link>
      )}

      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="px-4 py-2 font-bold tracking-widest text-cyber-text hover:bg-cyber-text hover:text-white transition-colors cursor-pointer flex items-center gap-2 border border-cyber-border bg-white"
        >
          <span>LANG: {activeLangName}</span>
          <span className="text-[8px]">{dropdownOpen ? "▲" : "▼"}</span>
        </button>
        
        {dropdownOpen && (
          <div className="absolute right-0 mt-1 bg-white border border-cyber-text shadow-[4px_4px_0px_#0f172a] z-50 py-1 min-w-[120px] max-h-[250px] overflow-y-auto">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  selectLang(l.code);
                  setDropdownOpen(false);
                }}
                className={`w-full text-left px-4 py-2 hover:bg-cyber-text hover:text-white transition-colors cursor-pointer block ${
                  lang === l.code
                    ? "bg-accent-orange/10 font-bold text-accent-orange"
                    : "text-cyber-text"
                }`}
              >
                {l.name}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="px-4 py-2 text-[10px] text-gray-400 uppercase tracking-widest hidden sm:block">
        {projectId ? `Project_ID: ${projectId}` : "Region: GLOBAL"}
      </div>
    </nav>
  );
}
