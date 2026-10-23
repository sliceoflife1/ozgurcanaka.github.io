"use client";

import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Globe, ShieldCheck, Users, Calendar, 
  FileText, Briefcase, MessageSquare, Database, ExternalLink 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Lang, languages, homeTranslations } from "@/app/translations";
import { subpageTranslations } from "@/app/subpageTranslations";

const emptySubscribe = () => () => {};

export default function YbsToplulugu() {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("portfolio-lang");
    if (saved && languages.some((l) => l.code === saved)) {
      return saved as Lang;
    }
    return "en";
  });

  const selectLang = (code: Lang) => {
    setLang(code);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio-lang", code);
    }
  };

  const tSub = (key: keyof typeof subpageTranslations) => {
    if (!mounted) return subpageTranslations[key]?.en || "";
    return subpageTranslations[key]?.[lang] || subpageTranslations[key]?.en || "";
  };

  const tHome = (key: keyof typeof homeTranslations) => {
    if (!mounted) return homeTranslations[key]?.en || "";
    return homeTranslations[key]?.[lang] || homeTranslations[key]?.en || "";
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

      {/* Subtle technical accents */}
      <div className="fixed top-[160px] left-[160px] w-2 h-2 text-accent-cyan opacity-40 z-0 pointer-events-none font-mono leading-none">+</div>
      <div className="fixed top-[320px] right-[240px] w-2 h-2 text-accent-orange opacity-40 z-0 pointer-events-none font-mono leading-none">+</div>

      <Navbar 
        lang={lang} 
        selectLang={selectLang} 
        backLink="/" 
        backText={tSub("backToHome")} 
        projectId="YBS_COMMUNITY"
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto min-h-screen flex flex-col pt-24 pb-24 px-6 sm:px-12">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold border-2 border-cyber-text bg-white text-cyber-text hover:bg-cyber-text hover:text-white transition-all cursor-pointer shadow-[4px_4px_0px_#0f172a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0f172a]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{tSub("backToHome")}</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className="mb-14 border-b-4 border-cyber-text pb-10 animate-fade-in-up">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyber-border bg-white text-xs font-mono text-cyber-text tracking-widest shadow-sm rounded-none w-max">
              <span className="w-2 h-2 rounded-none bg-accent-orange animate-pulse"></span>
              <span>{tHome("status")}{" // SYS_DEU_YBS"}</span>
            </div>

            {/* Official Logo Badge */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 p-1 border-2 border-cyber-text bg-white shadow-[4px_4px_0px_#06b6d4] flex items-center justify-center">
                <img 
                  src="/ybs-toplulugu/ybsa-logo.png" 
                  alt="DEÜ YBSA Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="font-mono text-xs">
                <div className="font-bold text-cyber-text">DEÜ YBSA</div>
                <div className="text-[10px] text-cyber-muted">Yönetim Bilişim Sistemleri Ağı</div>
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-cyber-text mb-4 uppercase">
            {tSub("ybsSubpageTitle")}
          </h1>
          
          <p className="text-accent-orange font-bold text-lg sm:text-xl font-mono uppercase mb-4">
            {tSub("ybsSubpageHeroTag")}
          </p>

          <p className="text-cyber-muted text-base sm:text-lg leading-relaxed max-w-3xl border-l-2 border-accent-orange pl-4 mt-2">
            {tSub("ybsSubpageHeroDesc")}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a 
              href="https://deuybs.org.tr/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative inline-flex items-center justify-center bg-cyber-text px-6 py-3 font-bold text-white overflow-hidden hover:text-black transition-all duration-300 uppercase shadow-[4px_4px_0px_#ff4d00] cursor-pointer"
            >
              <span className="absolute inset-0 bg-accent-orange -translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300 ease-in-out z-0"></span>
              <div className="relative z-10 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>{tHome("launchDeuYbs")}</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </div>
            </a>

            <a 
              href="https://github.com/sliceoflife1/YBSToplulugu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative inline-flex items-center justify-center bg-white border-2 border-cyber-text px-6 py-3 font-bold text-cyber-text overflow-hidden hover:text-white transition-all duration-300 uppercase shadow-[4px_4px_0px_#0f172a] cursor-pointer"
            >
              <span className="absolute inset-0 bg-cyber-text -translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300 ease-in-out z-0"></span>
              <div className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>{tSub("ybsRepoButton")}</span>
              </div>
            </a>
          </div>

          {/* Banner Asset */}
          <div className="mt-10 border-2 border-cyber-text p-2 bg-white shadow-[8px_8px_0px_#e2e8f0]">
            <img 
              src="/ybs-toplulugu/hero-preview.png" 
              alt="DEÜ YBS Topluluğu Platform Arayüzü" 
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </header>

        {/* Content Sections */}
        <div className="space-y-12 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>

          {/* Modules Grid */}
          <section className="bg-white border-2 border-cyber-text p-6 md:p-10 shadow-[6px_6px_0px_#ff4d00]">
            <h2 className="text-xl sm:text-2xl font-black text-cyber-text mb-6 uppercase border-b-2 border-cyber-border pb-3 flex items-center gap-2">
              <Users className="w-6 h-6 text-accent-orange" />
              <span>{tSub("ybsModulesTitle")}</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Module 1: Talent Hub */}
              <div className="border border-cyber-border p-5 bg-cyber-light flex flex-col justify-between hover:border-black transition-colors">
                <div>
                  <div className="w-10 h-10 border-2 border-cyber-text bg-white flex items-center justify-center font-mono font-bold text-sm mb-4 shadow-[3px_3px_0px_#06b6d4]">
                    <Briefcase className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <h3 className="font-bold text-cyber-text text-base uppercase mb-2">
                    {tSub("ybsTalentHubTitle")}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyber-muted leading-relaxed">
                    {tSub("ybsTalentHubDesc")}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 font-mono text-[11px] text-gray-500 uppercase">
                  MOD_ID: TALENT_HUB
                </div>
              </div>

              {/* Module 2: Mentorship */}
              <div className="border border-cyber-border p-5 bg-cyber-light flex flex-col justify-between hover:border-black transition-colors">
                <div>
                  <div className="w-10 h-10 border-2 border-cyber-text bg-white flex items-center justify-center font-mono font-bold text-sm mb-4 shadow-[3px_3px_0px_#ff4d00]">
                    <Calendar className="w-5 h-5 text-accent-orange" />
                  </div>
                  <h3 className="font-bold text-cyber-text text-base uppercase mb-2">
                    {tSub("ybsMentorshipTitle")}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyber-muted leading-relaxed">
                    {tSub("ybsMentorshipDesc")}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 font-mono text-[11px] text-gray-500 uppercase">
                  MOD_ID: MENTOR_SYNC
                </div>
              </div>

              {/* Module 3: PDF CV Generator */}
              <div className="border border-cyber-border p-5 bg-cyber-light flex flex-col justify-between hover:border-black transition-colors">
                <div>
                  <div className="w-10 h-10 border-2 border-cyber-text bg-white flex items-center justify-center font-mono font-bold text-sm mb-4 shadow-[3px_3px_0px_#4f46e5]">
                    <FileText className="w-5 h-5 text-accent-indigo" />
                  </div>
                  <h3 className="font-bold text-cyber-text text-base uppercase mb-2">
                    {tSub("ybsPdfCvTitle")}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyber-muted leading-relaxed">
                    {tSub("ybsPdfCvDesc")}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 font-mono text-[11px] text-gray-500 uppercase">
                  MOD_ID: REACT_PDF
                </div>
              </div>

            </div>
          </section>

          {/* Security & RLS Architecture Section */}
          <section className="bg-white border-2 border-cyber-text p-6 md:p-10 shadow-[6px_6px_0px_#06b6d4]">
            <h2 className="text-xl sm:text-2xl font-black text-cyber-text mb-4 uppercase border-b-2 border-cyber-border pb-3 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-accent-cyan" />
              <span>{tSub("ybsSecurityArchitecture")}</span>
            </h2>
            
            <p className="text-sm sm:text-base text-cyber-text leading-relaxed mb-6">
              {tSub("ybsSecurityDesc")}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 font-mono text-center text-xs">
              <div className="border border-cyber-border p-3 bg-gray-50">
                <span className="block font-bold text-cyber-text">STUDENT</span>
                <span className="text-[10px] text-cyber-muted">Öğrenci</span>
              </div>
              <div className="border border-cyber-border p-3 bg-gray-50">
                <span className="block font-bold text-cyber-text">ALUMNI</span>
                <span className="text-[10px] text-cyber-muted">Mezun / Mentör</span>
              </div>
              <div className="border border-cyber-border p-3 bg-gray-50">
                <span className="block font-bold text-cyber-text">FACULTY</span>
                <span className="text-[10px] text-cyber-muted">Akademisyen</span>
              </div>
              <div className="border border-cyber-border p-3 bg-gray-50">
                <span className="block font-bold text-cyber-text">EMPLOYER</span>
                <span className="text-[10px] text-cyber-muted">Onaylı Kurum</span>
              </div>
              <div className="border border-cyber-border p-3 bg-gray-50">
                <span className="block font-bold text-cyber-text">MODERATOR</span>
                <span className="text-[10px] text-cyber-muted">Topluluk Yön.</span>
              </div>
              <div className="border border-cyber-border p-3 bg-gray-50">
                <span className="block font-bold text-accent-orange">SYS_ADMIN</span>
                <span className="text-[10px] text-accent-orange font-bold">Tam Yetki</span>
              </div>
            </div>
          </section>

          {/* Tech Stack Specs Table */}
          <section className="bg-white border-2 border-cyber-text p-6 md:p-10 shadow-[6px_6px_0px_#0f172a]">
            <h2 className="text-xl sm:text-2xl font-black text-cyber-text mb-6 uppercase border-b-2 border-cyber-border pb-3 flex items-center gap-2">
              <Database className="w-6 h-6 text-cyber-text" />
              <span>{tSub("ybsTechStackTitle")}</span>
            </h2>

            <div className="overflow-x-auto border-2 border-cyber-text shadow-[4px_4px_0px_#0f172a] bg-white">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-100 border-b-2 border-cyber-text font-mono">
                    <th className="p-3 font-bold uppercase">Katman</th>
                    <th className="p-3 font-bold uppercase">Teknoloji</th>
                    <th className="p-3 font-bold uppercase">Mimari Görev / Rol</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-3 font-bold border-r border-gray-200">Full-Stack Framework</td>
                    <td className="p-3 font-mono font-bold text-accent-orange">Next.js 16 (Turbopack)</td>
                    <td className="p-3">React 19 Server Components, App Router & Hızlı SSR/SSG Çıktısı</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border-r border-gray-200">Database & Auth</td>
                    <td className="p-3 font-mono font-bold text-accent-cyan">Supabase & PostgreSQL</td>
                    <td className="p-3">Row Level Security (RLS), GoTrue Authentication & JSONB CV Mimarisi</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border-r border-gray-200">Styling & UI</td>
                    <td className="p-3 font-mono font-bold">Tailwind CSS v4 & Motion</td>
                    <td className="p-3">Sleek dark/light theme, brutalist ve modern bileşen hiyerarşisi</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border-r border-gray-200">Form & Validation</td>
                    <td className="p-3 font-mono font-bold">React Hook Form & Zod</td>
                    <td className="p-3">İstemci ve sunucu taraflı tip güvenli, katı veri doğrulaması</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border-r border-gray-200">Internationalization</td>
                    <td className="p-3 font-mono font-bold">Next-intl</td>
                    <td className="p-3">Çok dilli küresel topluluk standardı (Türkçe & İngilizce tam destek)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border-r border-gray-200">PDF Generator</td>
                    <td className="p-3 font-mono font-bold">@react-pdf/renderer</td>
                    <td className="p-3">İstemci tarafında otomatik dinamik profesyonel CV çıktısı üretimi</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border-r border-gray-200">Deployment & Cloud</td>
                    <td className="p-3 font-mono font-bold">Vercel Edge Network</td>
                    <td className="p-3">deuybs.org.tr alan adı üzerinde küresel CDN ve CI/CD entegrasyonu</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Showcase Banner Section - Infographic Poster */}
          <section className="bg-white border-2 border-cyber-text p-6 md:p-10 shadow-[6px_6px_0px_#4f46e5]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-cyber-border pb-4 mb-8 gap-4">
              <h2 className="text-xl sm:text-2xl font-black text-cyber-text uppercase flex items-center gap-2 m-0">
                <MessageSquare className="w-5 h-5 text-accent-indigo" />
                <span>Platform Görsel Vitrini</span>
              </h2>
              <span className="text-xs font-mono text-cyber-muted uppercase tracking-widest">INFOGRAPHIC_POSTER // 7 ÇEKİRDEK MODÜL</span>
            </div>

            <div className="max-w-lg mx-auto border-2 border-cyber-text p-3 bg-gray-50 shadow-[8px_8px_0px_#0f172a] hover:shadow-[12px_12px_0px_#4f46e5] transition-all duration-300">
              <img 
                src="/ybs-toplulugu/platform-showcase.jpg" 
                alt="DEÜ YBS Topluluğu 7 Çekirdek Modül ve Platform Ekosistemi" 
                className="w-full h-auto object-contain rounded-none"
              />
            </div>
          </section>

        </div>

        {/* Footer Back Link */}
        <div className="mt-16 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold border-2 border-cyber-text bg-white text-cyber-text hover:bg-cyber-text hover:text-white transition-all cursor-pointer shadow-[4px_4px_0px_#0f172a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0f172a]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{tSub("backToHome")}</span>
          </Link>
        </div>

      </div>
    </>
  );
}
