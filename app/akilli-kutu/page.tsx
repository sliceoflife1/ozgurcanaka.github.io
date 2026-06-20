"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, AlertTriangle, Hammer, Wrench } from "lucide-react";

export default function AkilliKutu() {
  const [lang, setLang] = useState<"tr" | "en">("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("portfolio-lang");
    if (savedLang === "tr" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

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

      <div className="relative z-10 w-full max-w-[1000px] mx-auto min-h-screen flex flex-col pt-12 pb-24 px-6">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold border-2 border-cyber-text bg-white text-cyber-text hover:bg-cyber-text hover:text-white transition-all cursor-pointer shadow-[4px_4px_0px_#0f172a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0f172a]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("Back to Home", "Ana Sayfaya Dön")}</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 border-b-4 border-cyber-text pb-8">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-cyber-text mb-4 uppercase">
            {t("Smart Bin with Raspberry Pi Pico 2 W", "Raspberry Pi Pico 2 W ile Akıllı Çöp Kovası")}
          </h1>
          <p className="text-cyber-muted font-mono text-sm uppercase">
            {t(
              "Autonomous, contactless and hygienic IoT project designed with System Development Life Cycle (SDLC).",
              "Sistem Geliştirme Yaşam Döngüsü (SDLC) ile tasarlanmış otonom, temassız ve hijyenik IoT projesi."
            )}
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
              {t("Project Overview Video", "Proje İnceleme Videosu")}
            </h2>
            <p className="text-cyber-muted mb-6 text-sm">
              {t(
                "You can watch the hardware setup, solutions to technical challenges (servo jitter, insufficient current) and system working demo in the video below:",
                "Projenin donanımsal kurulumunu, karşılaşılan teknik zorlukların (servo cızırtısı, akım yetersizliği) nasıl çözüldüğünü ve sistemin çalışma anını aşağıdaki YouTube videomuzdan izleyebilirsiniz:"
              )}
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
              {t("About the Project", "Proje Hakkında")}
            </h2>
            <div className="space-y-4 text-cyber-text text-sm sm:text-base leading-relaxed">
              <p>
                {t(
                  "Increasing hygiene standards in public and private work spaces is critical to prevent diseases transmitted through contact. The main goal of this project is to design an autonomous 'Smart Trash Can' that completely eliminates physical contact.",
                  "Toplu yaşam alanlarında ve kişisel çalışma ortamlarında hijyen standartlarının artırılması, temas yoluyla bulaşan hastalıkların önlenmesi açısından kritiktir. Bu projenin temel amacı, fiziksel teması tamamen ortadan kaldıran otonom bir 'Akıllı Çöp Kovası' tasarlamaktır."
                )}
              </p>
              <p>
                {t(
                  "The system is powered by the Raspberry Pi Pico 2 W board, featuring the new-generation dual-core RP2350 microcontroller. An ultrasonic sensor is used to detect approaching hands, and a high-torque servo motor moves the lid.",
                  "Sistem, yeni nesil RP2350 mikrodenetleyici çipine sahip olan Raspberry Pi Pico 2 W kartı kullanılarak hayata geçirilmiştir. El yaklaşmasını algılamak için ultrasonik sensör, kapağı hareket ettirmek için ise yüksek torklu bir servo motor kullanılmıştır."
                )}
              </p>
            </div>
          </section>

          {/* Components Section */}
          <section className="bg-white border-2 border-cyber-text p-6 md:p-8 shadow-[6px_6px_0px_#ff4d00]">
            <h2 className="text-xl sm:text-2xl font-black text-cyber-text mb-4 uppercase border-b-2 border-cyber-border pb-2">
              {t("Components Used", "Kullanılan Malzemeler")}
            </h2>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <span><strong>{t("Microcontroller:", "Mikrodenetleyici:")}</strong> {t("Raspberry Pi Pico 2 W (RP2350 Dual-Core)", "Raspberry Pi Pico 2 W (RP2350 Çift Çekirdekli)")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <span><strong>{t("Sensor:", "Sensör:")}</strong> HC-SR04 {t("Ultrasonic Distance Sensor", "Ultrasonik Mesafe Sensörü")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <span><strong>{t("Motor:", "Motor:")}</strong> MG995 {t("High Torque (10 kg·cm) Servo Motor", "Yüksek Torklu (10 kg·cm) Servo Motor")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <span><strong>{t("Other:", "Diğer:")}</strong> {t("Breadboard, Jumper wires, external 5V power supply (stripped USB cable), trash can.", "Breadboard, Jumper kablolar, harici 5V güç kaynağı (kesilmiş USB kablosu), çöp kovası.")}</span>
              </li>
            </ul>
          </section>

          {/* Schematic Section */}
          <section className="bg-white border-2 border-cyber-text p-6 md:p-8 shadow-[6px_6px_0px_#4f46e5]">
            <h2 className="text-xl sm:text-2xl font-black text-cyber-text mb-4 uppercase border-b-2 border-cyber-border pb-2">
              {t("Schematic and Pin Connections", "Devre Şeması ve Pin Bağlantıları")}
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
                  <tr className="bg-gray-100 border-b-2 border-cyber-text">
                    <th className="p-3 font-mono font-bold uppercase">{t("Component", "Bileşen")}</th>
                    <th className="p-3 font-mono font-bold uppercase">{t("Pin / Lead", "Pin / Uç")}</th>
                    <th className="p-3 font-mono font-bold uppercase">{t("Pico 2 W Connection", "Pico 2 W Bağlantısı")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-3 font-bold border-r border-gray-200" rowSpan={4}>HC-SR04 Sensor</td>
                    <td className="p-3 font-mono">VCC</td>
                    <td className="p-3">{t("External 5V Power Supply", "Harici 5V Güç Kaynağı")}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">GND</td>
                    <td className="p-3">{t("Common Ground (Pico Pin 3 - GND)", "Ortak Şase (Pico Pin 3 - GND)")}</td>
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
                    <td className="p-3">{t("External 5V Power Supply", "Harici 5V Güç Kaynağı")}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">GND (Brown)</td>
                    <td className="p-3">{t("Common Ground (Pico Pin 3 - GND)", "Ortak Şase (Pico Pin 3 - GND)")}</td>
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
              {t("Step by Step Construction", "Adım Adım Yapılışı")}
            </h2>
            <ol className="list-decimal pl-6 space-y-4 text-sm sm:text-base leading-relaxed">
              <li>
                <strong>{t("Setting up Power Infrastructure:", "Güç Altyapısının Kurulması:")}</strong>{" "}
                {t(
                  "Since the MG995 servo motor draws high current, the Pico's own USB output will be insufficient. Strip an old USB cable, connect the Red (5V) and Black (GND) wires to the breadboard's power rails.",
                  "MG995 servo motor yüksek akım çektiği için Pico'nun kendi USB çıkışı yetersiz kalacaktır. Eski bir USB kablosunu kesin, içindeki Kırmızı (5V) ve Siyah (GND) kabloları breadboard'un güç hatlarına bağlayın."
                )}
              </li>
              <li>
                <strong>{t("Common Ground Configuration:", "Ortak Şase (Common Ground):")}</strong>{" "}
                {t(
                  "For stable operation, physically connect one of the GND pins of the Pico 2 W (e.g. Pin 3) to the negative (-) rail of the external power supply on the breadboard.",
                  "Sistemin istikrarlı çalışması için Pico 2 W'nun GND pinlerinden birini (örn. 3. Pin), breadboard'daki harici güç kaynağının eksi (-) hattına fiziksel olarak bağlayın."
                )}
              </li>
              <li>
                <strong>{t("Connecting Components:", "Bileşenlerin Bağlanması:")}</strong>{" "}
                {t(
                  "Connect the HC-SR04 distance sensor and the MG995 servo motor using jumper wires, strictly adhering to the pinout table and schematic.",
                  "Yukarıdaki pin tablosuna ve devre şemasına sadık kalarak HC-SR04 mesafe sensörünü ve MG995 servo motoru jumper kablolar yardımıyla bağlayın."
                )}
              </li>
              <li>
                <strong>{t("Mechanical Assembly and Calibration:", "Mekanik Montaj ve Kalibrasyon:")}</strong>{" "}
                {t(
                  "Place the servo motor onto the hinge mechanism of the trash can. Remove the horn of the servo motor before running the code, power the system, and wait for the motor to reach position '0'. Then attach the horn while the trash can lid is fully closed.",
                  "Servo motoru çöp kovasının menteşe mekanizmasına yerleştirin. Kodu çalıştırmadan önce servo motorun kolunu sökün, sisteme güç verip motorun '0' konumuna gelmesini bekleyin. Ardından çöp kovasının kapağı tam kapalıyken kolu takın."
                )}
              </li>
              <li>
                <strong>{t("Flashing Software:", "Yazılımın Yüklenmesi:")}</strong>{" "}
                {t(
                  "Download Thonny IDE. Connect your Pico and install the MicroPython Firmware. Copy the code below and save it on your device with the name main.py.",
                  "Thonny IDE'yi bilgisayarınıza indirin. Pico'yu bağlayıp MicroPython Firmware'ini kurun. Aşağıdaki kodları kopyalayıp main.py adıyla cihazınıza kaydedin."
                )}
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
              {t("Critical Pitfalls to Consider", "⚠️ Dikkat Edilmesi Gereken Kritik Noktalar")}
            </h2>
            <div className="space-y-4">
              <div className="bg-[#fff3cd] border-l-5 border-[#ffc107] p-4 text-cyber-text text-sm">
                <strong>{t("1. Servo Jitter (Stall Current):", "1. Servo Motor Cızırtısı (Stall Akımı):")}</strong>{" "}
                {t(
                  "High-torque motors draw current continuously and make a jittering noise when they hit mechanical limits. The servo.duty_u16(0) line in the code puts the motor to sleep after the lid closes, resolving this noise and saving energy.",
                  "Yüksek torklu motorlar mekanik sınıra dayandıklarında sürekli akım çekerek cızırtı yaparlar. Kodda yer alan servo.duty_u16(0) komutu, kapak kapandıktan sonra motoru uyutarak bu sinir bozucu sesi keser ve enerji tasarrufu sağlar. Bu kodu silmeyin."
                )}
              </div>
              <div className="bg-[#fff3cd] border-l-5 border-[#ffc107] p-4 text-cyber-text text-sm">
                <strong>{t("2. Power Failure and Resetting:", "2. Güç Yetmezliği ve Resetlenme:")}</strong>{" "}
                {t(
                  "The MG995 motor can draw more than 1 Amp when loaded. The 3.3V or USB (VBUS) pins of the Pico cannot provide this power. To prevent device crashes/resets, always power the motor with an external 5V source (like a phone charger).",
                  "MG995 motor yüke bindiğinde 1 Amperden fazla güç çekebilir. Pico'nun 3.3V veya USB (VBUS) pinleri bu gücü sağlayamaz. Cihazınızın çökmemesi/resetlenmemesi için motoru mutlaka harici bir 5V (telefon adaptörü vb.) ile besleyin."
                )}
              </div>
              <div className="bg-[#fff3cd] border-l-5 border-[#ffc107] p-4 text-cyber-text text-sm">
                <strong>{t("3. Common Ground Requirement:", "3. Ortak Şase (Common Ground):")}</strong>{" "}
                {t(
                  "If you do not connect the GND of the external power source with the GND of the Pico, the system will not function and you cannot receive sensor data.",
                  "Harici güç kaynağının GND'si ile Pico'nun GND'sini birleştirmezseniz, sistem çalışmaz ve sensörden veri alamazsınız."
                )}
              </div>
            </div>
          </section>

          {/* Improvements Section */}
          <section className="bg-white border-2 border-cyber-text p-6 md:p-8 shadow-[6px_6px_0px_#4f46e5]">
            <h2 className="text-xl sm:text-2xl font-black text-cyber-text mb-4 uppercase border-b-2 border-cyber-border pb-2">
              {t("Future Improvements and Bottlenecks", "🛠️ Eksikler ve İyileştirilmesi Gereken Noktalar")}
            </h2>
            <div className="space-y-4">
              <div className="bg-[#e0f7fa] border-l-5 border-[#00bcd4] p-4 text-cyber-text text-sm">
                <strong>{t("Voltage Divider Requirement:", "Voltaj Bölücü (Voltage Divider) İhtiyacı:")}</strong>{" "}
                {t(
                  "In this version of the project, the HC-SR04 sensor is directly connected to the Pico. However, the sensor runs on 5V and sends 5V back on the Echo pin. Pico 2 W's GPIO pins can tolerate max 3.3V. Although this works in short-term projects, it can damage the processor in the long run. A voltage divider consisting of 1K and 2K resistors should be added in future versions.",
                  "Projenin bu sürümünde HC-SR04 mesafe sensörü doğrudan Pico'ya bağlanmıştır. Ancak sensör 5V ile çalışır ve Pico'ya (Echo pini üzerinden) 5V geri dönüş yapar. Pico 2 W'nun GPIO pinleri maksimum 3.3V tolere edebilir. Kısa vadeli projelerde bu çalışsa da uzun vadede işlemciyi yakabilir. Gelecek sürümlerde araya 1KΩ ve 2KΩ dirençlerden oluşan bir voltaj bölücü devre eklenmelidir."
                )}
              </div>
              <div className="bg-[#e0f7fa] border-l-5 border-[#00bcd4] p-4 text-cyber-text text-sm">
                <strong>{t("Mechanical Fatigue:", "Mekanik Yorgunluk:")}</strong>{" "}
                {t(
                  "The movement range (angles) of the motor can stretch the physical mechanism over time. In future steps, if drift occurs, calibration should be updated by adjusting the KAPALI_POZISYON and ACIK_POZISYON values.",
                  "Motorun hareket alanı (açılar) zamanla fiziksel mekanizmayı esnetebilir. İlerleyen süreçlerde, açılarda sapma yaşanırsa KAPALI_POZISYON ve ACIK_POZISYON değerlerinde ufak oynamalar yapılarak kalibrasyon yenilenmelidir."
                )}
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
            <span>{t("Back to Home", "Ana Sayfaya Dön")}</span>
          </Link>
        </div>

      </div>
    </>
  );
}
