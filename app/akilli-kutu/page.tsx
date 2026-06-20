"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Lang, languages } from "@/app/translations";
import { subpageTranslations } from "@/app/subpageTranslations";

export default function AkilliKutu() {
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
        backLink="/" 
        backText={t("backToHome")} 
        projectId="SMART_BIN"
      />

      <div className="relative z-10 w-full max-w-[1000px] mx-auto min-h-screen flex flex-col pt-24 pb-24 px-6">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold border-2 border-cyber-text bg-white text-cyber-text hover:bg-cyber-text hover:text-white transition-all cursor-pointer shadow-[4px_4px_0px_#0f172a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0f172a]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("backToHome")}</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 border-b-4 border-cyber-text pb-8">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-cyber-text mb-4 uppercase">
            {t("akilliKutuTitle")}
          </h1>
          <p className="text-cyber-muted font-mono text-sm uppercase">
            {t("akilliKutuSub")}
          </p>
          <div className="mt-8 border-2 border-cyber-text p-2 bg-white shadow-[8px_8px_0px_#e2e8f0]">
            <img 
              src="/image_cbe063.jpg" 
              alt="Akıllı Çöp Kovası Projesi Kapak Görseli" 
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </header>

        {/* Main Content Area */}
        <div className="space-y-12">
          
          {/* YouTube Video Section */}
          <section className="bg-white border-2 border-cyber-text p-6 md:p-8 shadow-[6px_6px_0px_#06b6d4]">
            <h2 className="text-xl sm:text-2xl font-black text-cyber-text mb-4 uppercase border-b-2 border-cyber-border pb-2">
              {t("videoTitle")}
            </h2>
            <p className="text-cyber-muted mb-6 text-sm">
              {t("videoDesc")}
            </p>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-none border border-cyber-border bg-black shadow-inner">
              <iframe 
                className="absolute top-0 left-0 w-full h-full border-none"
                src="https://www.youtube.com/embed/A3j0wSeXWXM" 
                title="Raspberry Pi Pico 2 W ile Akıllı Çöp Kovası Yapımı" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              />
            </div>
          </section>

          {/* About Section */}
          <section className="bg-white border-2 border-cyber-text p-6 md:p-8 shadow-[6px_6px_0px_#0f172a]">
            <h2 className="text-xl sm:text-2xl font-black text-cyber-text mb-4 uppercase border-b-2 border-cyber-border pb-2">
              {t("aboutTitle")}
            </h2>
            <div className="space-y-4 text-cyber-text text-sm sm:text-base leading-relaxed">
              <p>
                {t("aboutDesc1")}
              </p>
              <p>
                {t("aboutDesc2")}
              </p>
            </div>
          </section>

          {/* Components Section */}
          <section className="bg-white border-2 border-cyber-text p-6 md:p-8 shadow-[6px_6px_0px_#ff4d00]">
            <h2 className="text-xl sm:text-2xl font-black text-cyber-text mb-4 uppercase border-b-2 border-cyber-border pb-2">
              {t("componentsUsed")}
            </h2>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <span><strong>{t("microcontroller")}</strong> Raspberry Pi Pico 2 W (RP2350 Dual-Core)</span>
              </li>
              <li className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <span><strong>{t("sensor")}</strong> {t("sensorDesc")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <span><strong>{t("motor")}</strong> {t("motorDesc")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <span><strong>{t("other")}</strong> {t("otherDesc")}</span>
              </li>
            </ul>
          </section>

          {/* Schematic Section */}
          <section className="bg-white border-2 border-cyber-text p-6 md:p-8 shadow-[6px_6px_0px_#4f46e5]">
            <h2 className="text-xl sm:text-2xl font-black text-cyber-text mb-4 uppercase border-b-2 border-cyber-border pb-2">
              {t("schematicTitle")}
            </h2>
            <div className="border border-cyber-border p-2 bg-gray-50 my-6">
              <img 
                src="/23123.jpg" 
                alt="Devre Şeması ve Pinout" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div className="overflow-x-auto border-2 border-cyber-text shadow-[4px_4px_0px_#0f172a] bg-white">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-100 border-b-2 border-cyber-text font-mono">
                    <th className="p-3 font-bold uppercase">{t("tableComponent")}</th>
                    <th className="p-3 font-bold uppercase">{t("tablePin")}</th>
                    <th className="p-3 font-bold uppercase">{t("tablePico")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-3 font-bold border-r border-gray-200" rowSpan={4}>HC-SR04 Sensor</td>
                    <td className="p-3 font-mono">VCC</td>
                    <td className="p-3">{t("externalPower")}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">GND</td>
                    <td className="p-3">{t("commonGround")}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">Trig</td>
                    <td className="p-3">GP15 (Pin 20)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">Echo</td>
                    <td className="p-3">GP14 (Pin 19)</td>
                  </tr>
                  <tr className="border-t-2 border-cyber-text">
                    <td className="p-3 font-bold border-r border-gray-200" rowSpan={3}>MG995 Servo Motor</td>
                    <td className="p-3 font-mono">VCC (Red)</td>
                    <td className="p-3">{t("externalPower")}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">GND (Brown)</td>
                    <td className="p-3">{t("commonGround")}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">Signal (Orange/Yellow)</td>
                    <td className="p-3">GP13 (Pin 17)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Steps Section */}
          <section className="bg-white border-2 border-cyber-text p-6 md:p-8 shadow-[6px_6px_0px_#0f172a]">
            <h2 className="text-xl sm:text-2xl font-black text-cyber-text mb-4 uppercase border-b-2 border-cyber-border pb-2">
              {t("stepTitle")}
            </h2>
            <ol className="list-decimal pl-6 space-y-4 text-sm sm:text-base leading-relaxed">
              <li>
                <strong>{t("step1Title")}</strong>{" "}
                {t("step1Desc")}
              </li>
              <li>
                <strong>{t("step2Title")}</strong>{" "}
                {t("step2Desc")}
              </li>
              <li>
                <strong>{t("step3Title")}</strong>{" "}
                {t("step3Desc")}
              </li>
              <li>
                <strong>{t("step4Title")}</strong>{" "}
                {t("step4Desc")}
              </li>
              <li>
                <strong>{t("step5Title")}</strong>{" "}
                {t("step5Desc")}
              </li>
            </ol>
          </section>

          {/* MicroPython Code Section */}
          <section className="bg-white border-2 border-cyber-text p-6 md:p-8 shadow-[6px_6px_0px_#06b6d4]">
            <h2 className="text-xl sm:text-2xl font-black text-cyber-text mb-4 uppercase border-b-2 border-cyber-border pb-2">
              MicroPython Code
            </h2>
            <pre className="bg-[#282c34] text-[#abb2bf] p-4 sm:p-6 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed border border-cyber-border">
<code>{`from machine import Pin, PWM, time_pulse_us
import time

# Pin Tanımlamaları
trig = Pin(15, Pin.OUT)  # GP15 (Pin 20)
echo = Pin(14, Pin.IN)   # GP14 (Pin 19)
servo = PWM(Pin(13))     # GP13 (Pin 17)
servo.freq(50)           # Servo motorlar 50Hz frekans ile çalışır

# Servo Açı Ayarları (Kendi kovanıza göre kalibre edebilirsiniz)
KAPALI_POZISYON = 2100  # Çöp kovasının kapalı olduğu açı
ACIK_POZISYON = 4500    # Çöp kovasının açık olduğu açı

# Başlangıç durumu
servo.duty_u16(KAPALI_POZISYON)
print("Akıllı Çöp Kovası Başlatıldı. Kapak Kapalı.")
time.sleep(1)

# Başlangıçta motoru boşa alarak cızırtıyı kes
servo.duty_u16(0)

def mesafe_olc():
    # Sensöre tetikleme sinyali gönder
    trig.value(0)
    time.sleep_us(2)
    trig.value(1)
    time.sleep_us(10)
    trig.value(0)
    
    # Yankı süresini ölç (Zaman aşımı: 30000 us)
    sure = time_pulse_us(echo, 1, 30000)
    
    # Eğer sinyal gelmezse veya hata olursa
    if sure < 0:
        return 999
        
    # Süreyi santimetreye (cm) çevir
    mesafe = (sure * 0.0343) / 2
    return mesafe

while True:
    try:
        olculen_mesafe = mesafe_olc()
        
        # Eğer okunan mesafe 2 ile 20 cm arasındaysa (el yaklaştıysa)
        if 2 < olculen_mesafe < 20:
            print(f"El Algılandı! Mesafe: {olculen_mesafe:.1f} cm -> Kapak AÇILIYOR...")
            servo.duty_u16(ACIK_POZISYON)  # Kapağı aç
            
            # Kapağın açık kalma süresi (3 Saniye)
            time.sleep(3)
            
            print("Kapak KAPATILIYOR...")
            servo.duty_u16(KAPALI_POZISYON) # Kapağı kapat
            time.sleep(1) # Kapanması için bekle
            
            # Kapanma sonrası motoru boşa alarak cızırtıyı kes (Stall önleme)
            servo.duty_u16(0)
            
        time.sleep(0.1) # Hızlı döngüden kaçınmak için
        
    except Exception as e:
        print("Sistem Hatası:", e)
        time.sleep(1)`}</code>
            </pre>
          </section>

          {/* Warnings Section */}
          <section className="bg-white border-2 border-cyber-text p-6 md:p-8 shadow-[6px_6px_0px_#ff4d00]">
            <h2 className="text-xl sm:text-2xl font-black text-cyber-text mb-4 uppercase border-b-2 border-cyber-border pb-2">
              {t("warningTitle")}
            </h2>
            <div className="space-y-4">
              <div className="bg-[#fff3cd] border-l-4 border-[#ffc107] p-4 text-cyber-text text-sm">
                <strong>{t("warning1Title")}</strong>{" "}
                {t("warning1Desc")}
              </div>
              <div className="bg-[#fff3cd] border-l-4 border-[#ffc107] p-4 text-cyber-text text-sm">
                <strong>{t("warning2Title")}</strong>{" "}
                {t("warning2Desc")}
              </div>
              <div className="bg-[#fff3cd] border-l-4 border-[#ffc107] p-4 text-cyber-text text-sm">
                <strong>{t("warning3Title")}</strong>{" "}
                {t("warning3Desc")}
              </div>
            </div>
          </section>

          {/* Improvements Section */}
          <section className="bg-white border-2 border-cyber-text p-6 md:p-8 shadow-[6px_6px_0px_#4f46e5]">
            <h2 className="text-xl sm:text-2xl font-black text-cyber-text mb-4 uppercase border-b-2 border-cyber-border pb-2">
              {t("improvementTitle")}
            </h2>
            <div className="space-y-4">
              <div className="bg-[#e0f7fa] border-l-4 border-[#00bcd4] p-4 text-cyber-text text-sm">
                <strong>{t("improvement1Title")}</strong>{" "}
                {t("improvement1Desc")}
              </div>
              <div className="bg-[#e0f7fa] border-l-4 border-[#00bcd4] p-4 text-cyber-text text-sm">
                <strong>{t("improvement2Title")}</strong>{" "}
                {t("improvement2Desc")}
              </div>
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
            <span>{t("backToHome")}</span>
          </Link>
        </div>

      </div>
    </>
  );
}
