"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Lang, languages } from "@/app/translations";
import { subpageTranslations } from "@/app/subpageTranslations";

export default function PrivacyPolicy() {
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("portfolio-lang");
    if (savedLang) {
      if (languages.some((l) => l.code === savedLang)) {
        setLang(savedLang as Lang);
      }
    }
  }, []);

  const selectLang = (code: Lang) => {
    setLang(code);
    localStorage.setItem("portfolio-lang", code);
  };

  const t = (key: keyof typeof subpageTranslations) => {
    if (!mounted) return subpageTranslations[key].en;
    return subpageTranslations[key][lang] || subpageTranslations[key].en;
  };

  return (
    <>
      {/* Light Mode Technical Grid Background Effect */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.2] pointer-events-none mix-blend-multiply" 
        style={{
          backgroundImage: "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(to right, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      <Navbar 
        lang={lang} 
        selectLang={selectLang} 
        backLink="/multi-view" 
        backText={t("backToProject")} 
        projectId="MV_PRIVACY"
      />

      <div className="relative z-10 w-full max-w-[800px] mx-auto min-h-screen flex flex-col pt-24 pb-24 px-6">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/multi-view" 
            className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold border-2 border-cyber-text bg-white text-cyber-text hover:bg-cyber-text hover:text-white transition-all cursor-pointer shadow-[4px_4px_0px_#0f172a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0f172a]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("backToProject")}</span>
          </Link>
        </div>

        {/* Content */}
        <main className="bg-white border-2 border-cyber-text p-8 md:p-12 shadow-[8px_8px_0px_#0f172a]">
          <h1 className="text-3xl font-black text-cyber-text mb-2 uppercase border-b-4 border-cyber-text pb-4">
            {t("privacyPolicy")}
          </h1>
          <p className="text-xs font-mono text-cyber-muted mb-8 uppercase">{t("lastUpdated")}</p>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-cyber-text">
            <p>
              {t("privacyIntro")}
            </p>

            <h2 className="text-lg sm:text-xl font-bold uppercase text-cyber-text border-b border-cyber-border pb-2 pt-4">
              {t("sec1Title")}
            </h2>
            <p>
              {t("sec1Desc")}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>{t("configData")}</strong></li>
              <li><strong>{t("authData")}</strong></li>
            </ul>

            <h2 className="text-lg sm:text-xl font-bold uppercase text-cyber-text border-b border-cyber-border pb-2 pt-4">
              {t("sec2Title")}
            </h2>
            <p>
              {t("sec2Desc")}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>{t("storagePerm")}</strong></li>
              <li><strong>{t("notifPerm")}</strong></li>
              <li><strong>{t("netRequestPerm")}</strong></li>
            </ul>

            <h2 className="text-lg sm:text-xl font-bold uppercase text-cyber-text border-b border-cyber-border pb-2 pt-4">
              {t("sec3Title")}
            </h2>
            <p>
              {t("sec3Desc")}
            </p>

            <h2 className="text-lg sm:text-xl font-bold uppercase text-cyber-text border-b border-cyber-border pb-2 pt-4">
              {t("sec4Title")}
            </h2>
            <p>
              {t("sec4Desc")}
            </p>
          </div>

          <footer className="mt-12 pt-6 border-t border-cyber-border text-center text-xs font-mono text-cyber-muted uppercase">
            {t("allRights")}
          </footer>
        </main>

      </div>
    </>
  );
}
