"use client";

import React, { useState, useEffect } from "react";
import { 
  GraduationCap, Mail, Fingerprint, Cpu, Link as LinkIcon, 
  ShieldAlert, Layout, ArrowRight, ShieldCheck, Award 
} from "lucide-react";

export default function Home() {
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
      
      {/* Subtle technical accents (Plus signs at intersections) */}
      <div className="fixed top-[160px] left-[160px] w-2 h-2 text-accent-cyan opacity-40 z-0 pointer-events-none font-mono leading-none">+</div>
      <div className="fixed top-[320px] right-[240px] w-2 h-2 text-accent-orange opacity-40 z-0 pointer-events-none font-mono leading-none">+</div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto min-h-screen flex flex-col pt-20 md:pt-24 px-6 sm:px-12">
        
        {/* Language Switcher & Navigation Header */}
        <nav className="fixed top-6 right-6 sm:right-12 z-50 flex items-center gap-4 bg-white/80 backdrop-blur-md border border-cyber-border p-1 shadow-sm">
          <button 
            onClick={toggleLang}
            className="group relative px-4 py-2 font-mono text-xs font-bold tracking-widest text-cyber-text overflow-hidden border-r border-cyber-border hover:text-white transition-colors cursor-pointer"
          >
            <span className="relative z-10">{lang === "en" ? "TR" : "EN"}</span>
            <span className="absolute inset-0 bg-accent-orange translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
          </button>
          <div className="px-4 py-2 text-[10px] font-mono text-gray-400 uppercase tracking-widest hidden sm:block">
            Region: GLOBAL / TR-EN
          </div>
        </nav>

        {/* MASSIVE TYPOGRAPHIC HERO (Anti-Safe Harbor Layout) */}
        <header className="mb-16 md:mb-32 relative animate-fade-in-up">
          {/* Left-aligned heavy text taking up most of the space */}
          <div className="w-full xl:w-[90%] relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-cyber-border bg-white text-xs font-mono text-cyber-text tracking-widest shadow-sm rounded-none">
              <span className="w-2 h-2 rounded-none bg-accent-orange animate-pulse"></span>
              <span>{t("STATUS: ACTIVE / SYS.ADMIN", "DURUM: AKTİF / SİST.ADMİN")}</span>
            </div>
            
            {/* Breaking the grid with massive typography */}
            <h1 className="text-4xl sm:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.8] text-cyber-text mb-4 uppercase drop-shadow-sm mix-blend-darken">
              Özgür <br className="hidden sm:block"/> 
              <span className="text-cyber-text">Can <span className="text-accent-orange">AKA</span></span>
            </h1>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-12 items-start md:items-center">
              <div className="max-w-xl text-cyber-muted text-lg md:text-xl font-light leading-relaxed border-l-2 border-accent-orange pl-6">
                <strong className="font-bold text-cyber-text">
                  {t("Senior Cybercrime Investigator & AI Strategist.", "Kıdemli Siber Suçlar Araştırmacısı & Yapay Zeka Stratejisti.")}
                </strong><br /> 
                <span>
                  {t(
                    "13 years of field experience in the police force; designing digital security architectures with forensics, threat intelligence, and AI integration.",
                    "Emniyet teşkilatında 13 yıllık saha deneyimi; adli bilişim, tehdit istihbaratı ve yapay zeka entegrasyonu ile dijital güvenlik mimarileri tasarlıyor."
                  )}
                </span>
              </div>
            </div>
          </div>
          
          {/* Floating element breaking horizontal flow (Profile Image) */}
          <div className="relative mt-8 md:mt-0 md:absolute md:right-0 md:top-auto md:-bottom-12 w-32 md:w-48 h-32 md:h-48 border-[1px] border-cyber-border bg-white shadow-xl flex items-center justify-center p-2 z-20 hover:-translate-y-2 transition-transform duration-500 group">
            <div className="w-full h-full relative overflow-hidden bg-cyber-light">
              <img 
                src="assets/images/profile.png" 
                alt="Özgür Can Aka" 
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700"
              />
            </div>
            <div className="absolute bottom-2 right-2 bg-white px-1 text-[10px] font-mono text-cyber-text font-bold z-30">ID:0x00F</div>
          </div>
        </header>

        {/* LAYERS: About & Skills Data (Brutalist Table/Grid Structure) */}
        <main className="grid grid-cols-1 xl:grid-cols-12 gap-12 mb-32 z-10 w-full animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          
          {/* Left Column: Details */}
          <div className="xl:col-span-4 flex flex-col gap-12">
            {/* Academic */}
            <section className="border-t border-cyber-border pt-6">
              <h3 className="text-xs font-mono font-bold tracking-widest text-cyber-text mb-6 uppercase flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> // <span>{t("Academic Profile & Background", "Akademik Profil & Geçmiş")}</span>
              </h3>
              <ul className="space-y-6">
                <li className="group">
                  <h4 className="font-semibold text-cyber-text text-sm">
                    {t("Management Information Systems (MIS)", "Yönetim Bilişim Sistemleri (MIS)")}
                  </h4>
                  <p className="text-xs font-mono text-cyber-muted mt-1 group-hover:text-accent-orange transition-colors">
                    {t("Master's Degree [Active]", "Yüksek Lisans [Aktif]")}
                  </p>
                </li>
                <li className="group border-l-[1px] border-cyber-border pl-4 ml-1">
                  <h4 className="font-semibold text-cyber-text text-sm">
                    {t("Public Relations and Publicity", "Halkla İlişkiler ve Tanıtım")}
                  </h4>
                  <p className="text-xs font-mono text-cyber-muted mt-1">
                    {t("Bachelor's Degree | Erzurum Ataturk Uni.", "Lisans | Erzurum Atatürk Uni.")}
                  </p>
                </li>
                <li className="group border-l-[1px] border-cyber-border pl-4 ml-1">
                  <h4 className="font-semibold text-cyber-text text-sm">
                    {t("Justice", "Adalet")}
                  </h4>
                  <p className="text-xs font-mono text-cyber-muted mt-1">
                    {t("Associate Degree | Anadolu Uni.", "Önlisans | Anadolu Uni.")}
                  </p>
                </li>
                <li className="group border-l-[1px] border-cyber-border pl-4 ml-1">
                  <h4 className="font-semibold text-cyber-text text-sm">
                    {t("Police Vocational School", "Polis Meslek Yüksekokulu")}
                  </h4>
                  <p className="text-xs font-mono text-cyber-muted mt-1">
                    {t("Graduation: 2010", "Mezuniyet: 2010")}
                  </p>
                </li>
              </ul>
            </section>

            {/* Languages & Tools (Raw Data representation) */}
            <section className="bg-white border border-cyber-border p-6 shadow-sm">
              <h3 className="text-xs font-mono font-bold tracking-widest text-cyber-text mb-4 uppercase text-center bg-gray-100 py-1">
                {t("Operational Metadata", "Operasyonel Veriler")}
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-mono text-cyber-muted">
                <div className="py-2 border-b border-gray-100 uppercase">LANG_TR: <span className="text-cyber-text">{t("NATIVE", "ANA DİL")}</span></div>
                <div className="py-2 border-b border-gray-100 uppercase">LANG_EN: <span className="text-cyber-text">{t("PRO", "İLERİ")}</span></div>
                <div className="py-2 border-b border-gray-100 col-span-2 uppercase">DEU_PROF: <span className="text-accent-indigo font-bold">65/100</span></div>
                <div className="py-1 col-span-2 flex items-center gap-2 mt-2">
                  <Mail className="w-3 h-3 text-accent-cyan" /> ozgurcanaka@gmail.com
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Skills Brutalist Blocks */}
          <div className="xl:col-span-8">
            <section className="h-full border border-cyber-border bg-white p-8 md:p-12 shadow-[8px_8px_0px_#e2e8f0]">
              <h3 className="text-2xl font-bold text-cyber-text mb-8">{t("Core Domain Expertise", "Saha Hakimiyeti & Uzmanlık Alanları")}</h3>
              
              <div className="flex flex-col relative gap-8 border-l-[3px] border-cyber-text ml-4 md:ml-12 py-8">
                
                {/* Skill 1 */}
                <div className="relative group w-full max-w-xl left-6 md:left-12 hover:translate-x-4 transition-transform duration-300">
                  <div className="absolute top-1/2 -left-6 md:-left-12 w-6 md:w-12 h-px bg-cyber-text"></div>
                  <div className="border-2 border-cyber-text p-6 bg-white shadow-[6px_6px_0px_#ff4d00] relative">
                    <div className="absolute -top-3 -right-3 bg-black text-white font-mono text-[10px] px-2 py-1 font-bold">SEC.01</div>
                    <h4 className="font-black text-cyber-text mb-2 flex items-center gap-3 uppercase tracking-tight text-lg">
                      <Fingerprint className="w-5 h-5 text-accent-orange" /> <span>{t("Forensics & OSINT", "Adli Bilişim & OSINT")}</span>
                    </h4>
                    <p className="text-sm text-cyber-muted font-medium leading-relaxed">
                      {t(
                        "Cybercrime analysis, digital footprint tracking (OSINT), and generating evidence-based intelligence within digital forensic framework. 10+ years in Law Enforcement.",
                        "Siber suç analizleri, dijital ayak izi taramaları (OSINT) ve adli bilişim (Digital Forensic Investigation) çerçevesinde kanıta dayalı istihbarat üretimi. Emniyette 10+ yıl."
                      )}
                    </p>
                  </div>
                </div>

                {/* Skill 2 */}
                <div className="relative group w-full max-w-xl left-12 md:left-24 hover:translate-x-4 transition-transform duration-300">
                  <div className="absolute top-1/2 -left-12 md:-left-24 w-12 md:w-24 h-px bg-cyber-text"></div>
                  <div className="border-2 border-cyber-text p-6 bg-white shadow-[6px_6px_0px_#06b6d4] relative">
                    <div className="absolute -top-3 -right-3 bg-black text-white font-mono text-[10px] px-2 py-1 font-bold">SEC.02</div>
                    <h4 className="font-black text-cyber-text mb-2 flex items-center gap-3 uppercase tracking-tight text-lg">
                      <Cpu className="w-5 h-5 text-accent-cyan" /> AI-Driven Automation
                    </h4>
                    <p className="text-sm text-cyber-muted font-medium leading-relaxed">
                      {t(
                        "Designing AI-based workflow automations. Speed-focused system (Prompting/Agentic) development for data analysis, strategy, and operational efficiency.",
                        "Yapay zeka tabanlı iş akışı otomasyonlarının tasarımı. Veri analizinde hız, strateji ve operasyonel verimlilik odaklı sistem (Prompting/Agentic) geliştirimi."
                      )}
                    </p>
                  </div>
                </div>

                {/* Skill 3 */}
                <div className="relative group w-full max-w-xl left-6 md:left-8 hover:translate-x-4 transition-transform duration-300">
                  <div className="absolute top-1/2 -left-6 md:-left-8 w-6 md:w-8 h-px bg-cyber-text"></div>
                  <div className="border-2 border-cyber-text p-6 bg-white shadow-[6px_6px_0px_#4f46e5] relative">
                    <div className="absolute -top-3 -right-3 bg-black text-white font-mono text-[10px] px-2 py-1 font-bold">SEC.03</div>
                    <h4 className="font-black text-cyber-text mb-2 flex items-center gap-3 uppercase tracking-tight text-lg">
                      <LinkIcon className="w-5 h-5 text-accent-indigo" /> Blockchain Forensics
                    </h4>
                    <p className="text-sm text-cyber-muted font-medium leading-relaxed">
                      {t(
                        "Cryptographic analysis, tracking decentralized crime chains, and anonymous account tracing. Analytical approach against modern financial cyber threats.",
                        "Kriptografik analiz, merkeziyetsiz suç zinciri izleme ve anonim hesap dökümleri. Modern finansal siber tehditlere karşı analitik yaklaşım."
                      )}
                    </p>
                  </div>
                </div>
                
                {/* Skill 4 */}
                <div className="relative group w-full max-w-xl left-0 md:left-2 hover:translate-x-4 transition-transform duration-300">
                  <div className="absolute top-1/2 left-0 md:-left-2 w-0 md:w-2 h-px bg-cyber-text"></div>
                  <div className="border-2 border-cyber-text p-6 bg-white shadow-[6px_6px_0px_#111] relative">
                    <div className="absolute -top-3 -right-3 bg-black text-white font-mono text-[10px] px-2 py-1 font-bold">SEC.04</div>
                    <h4 className="font-black text-cyber-text mb-2 flex items-center gap-3 uppercase tracking-tight text-lg">
                      <ShieldAlert className="w-5 h-5 text-gray-800" /> Cyber Risk Management
                    </h4>
                    <p className="text-sm text-cyber-muted font-medium leading-relaxed">
                      {t(
                        "Corporate and individual cyber security risk management. Practical secure web technology development and awareness of vulnerability analysis.",
                        "Kurumsal ve bireysel siber güvenlik risk yönetimi. Güvenli web teknolojileri (HTML/CSS) kodlama pratiği ve zafiyet analizi farkındalığı."
                      )}
                    </p>
                  </div>
                </div>

              </div>
            </section>
          </div>
          
        </main>

        {/* HORIZONTAL PROJECT SHOWCASE (Editorial/Magazine flow) */}
        <section id="project" className="mb-32 w-full animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="border-y border-cyber-border py-4 mb-16 flex items-center justify-between">
            <h3 className="text-3xl font-black text-cyber-text uppercase tracking-tighter">{t("Production", "Üretim")}</h3>
            <span className="text-xs font-mono text-cyber-muted uppercase">{t("Selected Work . 2026", "Seçili İşler . 2026")}</span>
          </div>

          {/* The Showcase Item: OxWord */}
          <div className="relative bg-white border border-cyber-border p-4 md:p-12 hover:border-black transition-colors shadow-sm overflow-hidden flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Graphic/Visual Area */}
            <div className="w-full lg:w-1/2 order-2 lg:order-2 relative group mt-8 lg:mt-0">
              
              {/* Main Image Box */}
              <div className="relative w-full border border-cyber-border shadow-[8px_8px_0px_#f8fafc] overflow-hidden bg-cyber-light">
                <div className="absolute top-3 left-3 px-2 py-1 bg-black/80 text-white text-[10px] font-mono font-bold tracking-widest z-10 backdrop-blur-sm uppercase">SYS_IMG_VIEW</div>
                <img 
                  src="oxword_resimler/9.png" 
                  alt="OxWord Mobile Dashboard" 
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                />
              </div>
              
              {/* App Icon Absolute positioned */}
              <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-24 h-24 md:w-32 md:h-32 rounded-[2rem] border-[4px] border-white shadow-xl bg-white z-20 overflow-hidden group-hover:rotate-[6deg] group-hover:-translate-y-2 transition-all duration-500">
                <img src="oxword_resimler/ikon.png" alt="OxWord Icon" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Typographic & Text Side */}
            <div className="w-full lg:w-1/2 order-1 flex flex-col items-start gap-6">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-black text-white text-xs font-mono uppercase font-bold tracking-widest">{t("Mobile Release", "Mobil Yayın")}</div>
                <div className="px-3 py-1 border border-cyber-border text-xs font-mono text-cyber-muted">EdTech / AI</div>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-cyber-text tracking-tighter leading-none m-0 uppercase">OxWord.</h2>
              
              <p className="text-lg md:text-xl font-medium text-cyber-muted max-w-lg mt-4">
                <span className="text-accent-orange font-bold">Oxford 5000</span>{" "}
                <span>
                  {t(
                    "list-based fully gamified interactive dictionary, vocabulary learning, and training module platform.",
                    "listesiyle tamamen oyunlaştırılmış etkileşimli bir sözlük, kelime öğrenme ve antrenman modülü platformu."
                  )}
                </span>
              </p>
              
              <p className="text-sm text-cyber-text leading-relaxed mt-2 border-l-2 border-gray-200 pl-4 py-2">
                {t(
                  "A modern Android application equipped with smart testing regimes, gap-filling activities, and special memory repetitions, designed to keep the user active during mobile education processes.",
                  "Mobil eğitim süreçlerinde kullanıcıyı aktif tutmak için tasarlanmış, akıllı test rejimleri, boşluk doldurma etkinlikleri ve özel hafıza tekrarları ile donatılmış modern Android uygulaması."
                )}
              </p>

              <div className="grid grid-cols-2 gap-4 w-full border-t border-b border-cyber-border py-4 my-4 font-mono text-xs uppercase">
                <div>
                  <span className="text-gray-400 block mb-1 uppercase">PLATFORM</span>
                  <span className="font-bold">Android, Google Play</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1 uppercase">TECH STACK</span>
                  <span className="font-bold uppercase">Ionic, TypeScript</span>
                </div>
              </div>

              <a 
                href="https://play.google.com/store/apps/details?id=com.ozgur.oxword&hl=tr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative inline-flex items-center justify-center bg-transparent border-2 border-cyber-text px-8 py-4 font-bold text-cyber-text overflow-hidden mt-4 hover:border-accent-orange transition-all duration-300 w-full sm:w-auto uppercase cursor-pointer"
              >
                <span className="absolute inset-0 bg-accent-orange translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></span>
                <div className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a1.189 1.189 0 01-.19-.138A1.503 1.503 0 013 21v-3.793L7.207 13l2.829-2.828L5.793 6 3 3V1.5A1.5 1.5 0 013.81 1.09c.47-.468 1.144-.57 1.701-.219zM15 13.207l1.793 1.793-12.983 6.942L6.112 17H6l9-3.793zm1.5-1.5L20 10l-1.5-1v2.707L16.5 11.707zm3.111-4.63l-13.818-6.14.735-.742L18 8v.754l1.611 2.323z"/></svg>
                  <span>{t("Review Application (Play Store)", "Uygulamayı İncele (Play Store)")}</span>
                </div>
              </a>
            </div>
          </div>

          {/* The Showcase Item: Akıllı Kutu (Pico Projesi) */}
          <div className="relative bg-white border border-cyber-border p-4 md:p-12 hover:border-black transition-colors shadow-sm overflow-hidden flex flex-col lg:flex-row gap-12 items-center mt-12">
            
            <div className="w-full lg:w-1/2 order-2 lg:order-1 relative group mt-8 lg:mt-0">
              
              <div className="relative w-full border border-cyber-border shadow-[8px_8px_0px_#e2e8f0] overflow-hidden bg-cyber-light">
                <div className="absolute top-3 left-3 px-2 py-1 bg-black/80 text-white text-[10px] font-mono font-bold tracking-widest z-10 backdrop-blur-sm uppercase">IOT_SYS_ARCH</div>
                <img 
                  src="image_cbe063.jpg" 
                  alt="Smart Bin Project" 
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-left-8 w-20 h-20 md:w-28 md:h-28 border-[3px] border-cyber-text shadow-[6px_6px_0px_#06b6d4] bg-white z-20 flex items-center justify-center group-hover:rotate-[-6deg] group-hover:-translate-y-2 transition-all duration-500">
                <Cpu className="w-10 h-10 md:w-14 md:h-14 text-accent-cyan" />
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-start gap-6">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-black text-white text-xs font-mono uppercase font-bold tracking-widest">{t("Hardware & IoT", "Donanım & IoT")}</div>
                <div className="px-3 py-1 border border-cyber-border text-xs font-mono text-cyber-muted">SDLC / YBS</div>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-cyber-text tracking-tighter leading-none m-0 uppercase">{t("Smart Bin.", "Akıllı Kutu.")}</h2>
              
              <p className="text-lg md:text-xl font-medium text-cyber-muted max-w-lg mt-4">
                <span className="text-accent-cyan font-bold">Raspberry Pi Pico 2 W</span>{" "}
                <span>
                  {t(
                    "based autonomous and contactless smart trash can project.",
                    "tabanlı otonom ve temassız akıllı çöp kovası projesi."
                  )}
                </span>
              </p>
              
              <p className="text-sm text-cyber-text leading-relaxed mt-2 border-l-2 border-gray-200 pl-4 py-2">
                {t(
                  "An IoT hardware system developed strictly adhering to the System Development Life Cycle (SDLC) stages, resolving electronic bottlenecks such as stall currents and voltage mismatches.",
                  "Sistem Geliştirme Yaşam Döngüsü (SDLC) aşamalarına sadık kalınarak geliştirilmiş, stall akımı ve voltaj uyuşmazlığı gibi elektronik darboğazları çözen otonom donanım sistemi."
                )}
              </p>

              <div className="grid grid-cols-2 gap-4 w-full border-t border-b border-cyber-border py-4 my-4 font-mono text-xs uppercase">
                <div>
                  <span className="text-gray-400 block mb-1 uppercase">{t("CORE", "ÇEKİRDEK")}</span>
                  <span className="font-bold">RP2350, MicroPython</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1 uppercase">{t("COMPONENTS", "BİLEŞENLER")}</span>
                  <span className="font-bold uppercase">HC-SR04, MG995 Servo</span>
                </div>
              </div>

              <a 
                href="/akilli-kutu" 
                className="group relative inline-flex items-center justify-center bg-transparent border-2 border-cyber-text px-8 py-4 font-bold text-cyber-text overflow-hidden mt-4 hover:border-black transition-all duration-300 w-full sm:w-auto uppercase cursor-pointer"
              >
                <span className="absolute inset-0 bg-accent-cyan translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></span>
                <div className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                  <ArrowRight className="w-5 h-5" />
                  <span>{t("View Project Detail", "Proje Detayını İncele")}</span>
                </div>
              </a>
            </div>
          </div>

          {/* The Showcase Item: Multi-View Dashboard */}
          <div className="relative bg-white border border-cyber-border p-4 md:p-12 mt-12 hover:border-black transition-colors shadow-sm overflow-hidden flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="w-full lg:w-1/2 order-2 lg:order-2 relative group mt-8 lg:mt-0">
              <div className="relative w-full border border-cyber-border shadow-[8px_8px_0px_#f8fafc] overflow-hidden bg-cyber-light">
                <div className="absolute top-3 right-3 px-2 py-1 bg-black/80 text-accent-cyan text-[10px] font-mono font-bold tracking-widest z-10 backdrop-blur-sm uppercase">SYS_WEB_EXT</div>
                <img 
                  src="assets/images/IMRGOkSkS1gMQ.png" 
                  alt="Multi-View Dashboard Plugin" 
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                />
              </div>
              
              {/* App Icon Absolute positioned */}
              <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-20 h-20 md:w-28 md:h-28 border-[3px] border-cyber-text shadow-[6px_6px_0px_#06b6d4] bg-white z-20 flex items-center justify-center group-hover:rotate-[6deg] group-hover:-translate-y-2 transition-all duration-500">
                <Layout className="w-10 h-10 md:w-14 md:h-14 text-accent-cyan" />
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 flex flex-col items-start gap-6">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-black text-white text-xs font-mono uppercase font-bold tracking-widest">{t("Chrome Extension", "Chrome Eklentisi")}</div>
                <div className="px-3 py-1 border border-cyber-border text-xs font-mono text-cyber-muted">Productivity / Utility</div>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-cyber-text tracking-tighter leading-none m-0 uppercase">Multi-View.</h2>
              
              <p className="text-lg md:text-xl font-medium text-cyber-muted max-w-lg mt-4">
                <span className="text-accent-cyan font-bold">Dynamic Dashboard</span>{" "}
                <span>
                  {t(
                    "that transforms a single browser tab into a multi-panel command center for feeds, galleries, and news.",
                    "ile tek bir tarayıcı sekmesini akışlar, galeriler ve haberler için çoklu panel komuta merkezine dönüştürün."
                  )}
                </span>
              </p>
              
              <p className="text-sm text-cyber-text leading-relaxed mt-2 border-l-2 border-gray-200 pl-4 py-2">
                {t(
                  "A robust Chrome extension allowing users to tile multiple web pages simultaneously. Equipped with auto-refresh intervals, sleek dark mode UI, and customizable layouts.",
                  "Kullanıcıların birden fazla web sayfasını aynı anda yerleştirmesine olanak tanıyan sağlam bir Chrome eklentisi. Otomatik yenileme aralıkları, şık karanlık mod arayüzü ve özelleştirilebilir düzenler ile donatılmıştır."
                )}
              </p>

              <div className="grid grid-cols-2 gap-4 w-full border-t border-b border-cyber-border py-4 my-4 font-mono text-xs uppercase">
                <div>
                  <span className="text-gray-400 block mb-1 uppercase">PLATFORM</span>
                  <span className="font-bold">Chrome Web Store</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1 uppercase">TECH STACK</span>
                  <span className="font-bold uppercase">Vanilla JS, HTML/CSS</span>
                </div>
              </div>

              <a 
                href="/multi-view" 
                className="group relative inline-flex items-center justify-center bg-transparent border-2 border-cyber-text px-8 py-4 font-bold text-cyber-text overflow-hidden mt-4 hover:border-accent-cyan transition-all duration-300 w-full sm:w-auto uppercase cursor-pointer"
              >
                <span className="absolute inset-0 bg-accent-cyan translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></span>
                <div className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                  <Layout className="w-5 h-5" />
                  <span>{t("View Project Details", "Proje Detaylarını İncele")}</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Minimal Brutalist Footer */}
        <footer className="mt-auto border-t-[4px] border-cyber-text pt-8 pb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-sm">
              <h3 className="text-2xl font-black tracking-tighter mb-4 text-cyber-text uppercase">{t("Connect.", "İletişim.")}</h3>
              <p className="text-sm text-cyber-muted font-mono mb-6 uppercase">
                {t(
                  "Consultancy on intelligence analysis, digital operation architecture, and cyber security authorities.",
                  "İstihbarat analizleri, dijital operasyon mimarisi ve siber güvenlik otoriteleri hakkında danışmanlık."
                )}
              </p>
              
              {/* Authority/Trust Signals */}
              <div className="flex flex-col gap-2 mb-6 md:mb-0">
                <div className="flex items-center gap-3 text-[10px] font-mono text-cyber-muted font-bold border border-cyber-border py-2 px-3 bg-white w-max">
                  <ShieldCheck className="w-4 h-4 text-accent-cyan" />
                  <span>{t("VERIFIED CYBER EXPERT &bull; 13+ YEARS EXP", "DOĞRULANMIŞ SİBER UZMAN &bull; 13+ YIL TECRÜBE")}</span>
                </div>
                <div className="flex items-center gap-3 text-[10px] font-mono text-cyber-muted font-bold border border-cyber-border py-2 px-3 bg-white w-max">
                  <Award className="w-4 h-4 text-accent-orange" />
                  <span>{t("CYBERCRIME INVESTIGATOR & AI STRATEGIST", "SİBER SUÇLAR ARAŞTIRMACISI & AI STRATEJİSTİ")}</span>
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
