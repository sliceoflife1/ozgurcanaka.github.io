"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Video, Cpu, Download, ShieldCheck, Mail, Award } from "lucide-react";

export default function MultiView() {
  const [lang, setLang] = useState<"tr" | "en">("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("portfolio-lang");
    if (savedLang === "tr" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === "en" ? "tr" : "en";
    setLang(newLang);
    localStorage.setItem("portfolio-lang", newLang);
  };

  const t = (en: string, tr: string) => {
    if (!mounted) return en;
    return lang === "en" ? en : tr;
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

      <div className="relative z-10 w-full max-w-[1400px] mx-auto min-h-screen flex flex-col pt-20 md:pt-24 px-6 sm:px-12">
        
        {/* Language Switcher & Navigation Header */}
        <nav className="fixed top-6 right-6 sm:right-12 z-50 flex items-center gap-4 bg-white/80 backdrop-blur-md border border-cyber-border p-1 shadow-sm">
          <Link 
            href="/" 
            className="px-4 py-2 font-mono text-xs font-bold tracking-widest text-cyber-text border-r border-cyber-border hover:bg-cyber-text hover:text-white transition-colors uppercase"
          >
            {t("< BACK", "< GERİ")}
          </Link>
          <button 
            onClick={toggleLang}
            className="group relative px-4 py-2 font-mono text-xs font-bold tracking-widest text-cyber-text overflow-hidden border-r border-cyber-border hover:text-white transition-colors cursor-pointer"
          >
            <span className="relative z-10">{lang === "en" ? "TR" : "EN"}</span>
            <span className="absolute inset-0 bg-accent-orange translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
          </button>
          <div className="px-4 py-2 text-[10px] font-mono text-gray-400 uppercase tracking-widest hidden sm:block">
            Project_ID: MV_DASHBOARD
          </div>
        </nav>

        {/* Project Hero Header */}
        <header className="mb-16 relative animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-cyber-border bg-white text-xs font-mono text-cyber-text tracking-widest shadow-sm rounded-none">
            <span className="w-2 h-2 rounded-none bg-accent-cyan animate-pulse"></span>
            <span>{t("STATUS: LIVE", "DURUM: AKTİF")}</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-black tracking-tighter leading-[0.9] text-cyber-text mb-4 uppercase drop-shadow-sm mix-blend-darken">
            MULTI-VIEW <br/> 
            <span className="text-accent-cyan">DASHBOARD.</span>
          </h1>
          
          <p className="max-w-2xl text-cyber-muted text-lg md:text-xl font-light leading-relaxed border-l-2 border-accent-cyan pl-6 mt-8">
            <strong className="font-bold text-cyber-text">
              {t("A Chrome Extension for Ultimate Multitasking.", "Gelişmiş Çoklu Görev için Bir Chrome Eklentisi.")}
            </strong><br /> 
            <span>
              {t(
                "Monitor multiple feeds, auto-refresh panels, and organize your digital workflow efficiently.",
                "Birden fazla akışı izleyin, panelleri otomatik yenileyin ve dijital iş akışınızı verimli bir şekilde düzenleyin."
              )}
            </span>
          </p>
        </header>

        {/* Main Content Area */}
        <main className="w-full flex flex-col gap-16 mb-32 z-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          
          {/* Big Hero Image Section */}
          <section className="w-full relative group">
            <div className="border-[1px] border-cyber-border shadow-[12px_12px_0px_#cbd5e1] p-2 bg-white group-hover:shadow-[8px_8px_0px_#06b6d4] transition-shadow duration-500">
              <div className="absolute -top-4 -left-4 bg-black text-white font-mono text-xs px-3 py-1 font-bold z-20">VISUAL_ASSET</div>
              <div className="overflow-hidden bg-cyber-light w-full">
                <img 
                  src="/assets/images/promo_marquee_1_1280.png" 
                  alt="Multi-View Dashboard Mockup" 
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                />
              </div>
            </div>
          </section>

          {/* Video & Features Split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 border-t-[1px] border-cyber-border pt-12">
            
            {/* Video Player */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h3 className="text-xs font-mono font-bold tracking-widest text-cyber-text uppercase flex items-center gap-2">
                <Video className="w-4 h-4 text-accent-cyan" /> // <span>{t("System Demonstration", "Sistem Gösterimi")}</span>
              </h3>
              
              <div className="border-[1px] border-cyber-border p-2 bg-white shadow-sm relative">
                <div className="absolute top-0 left-0 w-2 h-2 bg-black"></div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-black"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-black"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-black"></div>
                
                <div className="relative w-full pb-[56.25%] bg-black overflow-hidden">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src="https://www.youtube.com/embed/OQ0y6DZrXJw?autoplay=0&rel=0&modestbranding=1" 
                    title="Multi-View Dashboard Video" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Features & Tech Stack */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <h3 className="text-xs font-mono font-bold tracking-widest text-cyber-text uppercase flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent-orange" /> // <span>{t("Technical Specifications", "Teknik Özellikler")}</span>
              </h3>
              
              <div className="border-2 border-cyber-text p-6 bg-white shadow-[6px_6px_0px_#111]">
                <ul className="space-y-6">
                  <li className="group border-l-2 border-accent-cyan pl-4">
                    <h4 className="font-bold text-cyber-text text-md uppercase">{t("Dynamic Tiling System", "Dinamik Döşeme Sistemi")}</h4>
                    <p className="text-sm text-cyber-muted mt-2">
                      {t(
                        "Split your browser window into resizable, independent panels to monitor diverse web sources in real-time.",
                        "Farklı web kaynaklarını gerçek zamanlı izlemek için tarayıcı pencerenizi yeniden boyutlandırılabilir, bağımsız panellere bölün."
                      )}
                    </p>
                  </li>
                  <li className="group border-l-2 border-accent-cyan pl-4">
                    <h4 className="font-bold text-cyber-text text-md uppercase">{t("Auto-Refresh Logic", "Otomatik Yenileme Mantığı")}</h4>
                    <p className="text-sm text-cyber-muted mt-2">
                      {t(
                        "Customizable timer intervals for each panel. Automatically reload pages to stay updated without manual intervention.",
                        "Her panel için özelleştirilebilir zamanlayıcı aralıkları. Manuel müdahale olmadan güncel kalmak için sayfaları otomatik olarak yeniden yükleyin."
                      )}
                    </p>
                  </li>
                  <li className="group border-l-2 border-accent-cyan pl-4">
                    <h4 className="font-bold text-cyber-text text-md uppercase">{t("Stealth Dark Mode UI", "Karanlık Mod Arayüzü")}</h4>
                    <p className="text-sm text-cyber-muted mt-2">
                      {t(
                        "A highly polished, distraction-free interface optimized for long monitoring sessions and productivity.",
                        "Uzun izleme oturumları ve üretkenlik için optimize edilmiş, son derece parlak, dikkat dağıtmayan bir arayüz."
                      )}
                    </p>
                  </li>
                </ul>
              </div>

              <a 
                href="https://chromewebstore.google.com/detail/multi-view-dashboard/jmkhjcdcmejccfblfkhljjplbndnhhhh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative inline-flex items-center justify-center bg-cyber-text px-6 py-4 font-bold text-white overflow-hidden hover:text-black transition-all duration-300 uppercase shadow-sm mt-4 cursor-pointer"
              >
                <span className="absolute inset-0 bg-accent-cyan -translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300 ease-in-out z-0"></span>
                <div className="relative z-10 flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  <span>{t("Install Extension", "Eklentiyi Kur")}</span>
                </div>
              </a>

              <div className="text-center mt-2">
                <Link 
                  href="/multi-view/privacy" 
                  className="font-mono text-xs text-cyber-muted hover:text-accent-cyan underline"
                >
                  {t("Privacy Policy", "Gizlilik Politikası")}
                </Link>
              </div>
            </div>

          </section>
        </main>

        {/* Minimal Brutalist Footer */}
        <footer className="mt-auto border-t-[4px] border-cyber-text pt-8 pb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-sm">
              <h3 className="text-2xl font-black tracking-tighter mb-4 text-cyber-text uppercase">{t("Connect.", "İletişim.")}</h3>
              <p className="text-sm text-cyber-muted font-mono mb-6 uppercase">
                {t(
                  "Consultancy on intelligence analysis, digital operation architecture, and cyber security authorities.",
                  "İstihbarat analizleri, dijital operasyon mimarisi ve siber güvenlik otoriteleri hakkında danışmanlık."
                )}
              </p>
              
              <div className="flex flex-col gap-2 mb-6 md:mb-0">
                <div className="flex items-center gap-3 text-[10px] font-mono text-cyber-muted font-bold border border-cyber-border py-2 px-3 bg-white w-max">
                  <ShieldCheck className="w-4 h-4 text-accent-cyan" />
                  <span>{t("VERIFIED CYBER EXPERT &bull; 13+ YEARS EXP", "DOĞRULANMIŞ SİBER UZMAN &bull; 13+ YIL TECRÜBE")}</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 md:gap-8 font-mono text-sm font-bold flex-wrap uppercase">
              <a href="mailto:ozgurcanaka@gmail.com" className="relative group tracking-wider hover:text-accent-orange transition-colors uppercase">
                <span className="inline-block transform group-hover:-translate-y-1 transition-transform uppercase">E_MAIL</span>
              </a>
              <a href="https://www.linkedin.com/in/%C3%B6zg%C3%BCr-can-aka-5817783ab/" target="_blank" rel="noopener noreferrer" className="relative group tracking-wider hover:text-accent-indigo transition-colors uppercase">
                <span className="inline-block transform group-hover:-translate-y-1 transition-transform uppercase">LINKEDIN</span>
              </a>
              <a href="https://github.com/sliceoflife1" target="_blank" rel="noopener noreferrer" className="relative group tracking-wider hover:text-accent-cyan transition-colors uppercase">
                <span className="inline-block transform group-hover:-translate-y-1 transition-transform uppercase">GITHUB</span>
              </a>
              <a href="https://www.youtube.com/channel/UCTn6hFc2abZK-NvC9nAS7mQ" target="_blank" rel="noopener noreferrer" className="relative group tracking-wider hover:text-accent-orange transition-colors uppercase">
                <span className="inline-block transform group-hover:-translate-y-1 transition-transform uppercase">YOUTUBE</span>
              </a>
            </div>
          </div>
          
          <div className="w-full flex justify-between items-center mt-24 text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]">
            <span>© 2026 // ÖZGÜR CAN AKA</span>
            <span>SYS_READY // V.3.0 // i18n_ENABLED</span>
          </div>
        </footer>
      </div>
    </>
  );
}
