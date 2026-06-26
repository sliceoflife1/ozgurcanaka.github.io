import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Özgür Can Aka | Senior Cybercrime Investigator & AI Strategist",
  description: "Kıdemli Siber Suçlar Araştırmacısı ve Yapay Zeka Stratejisti Özgür Can Aka'nın profesyonel portfolyosu. Siber Güvenlik, Adli Bilişim, Blockchain ve AI Çözümleri.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Özgür Can Aka | Senior Cybercrime Investigator & AI Strategist",
    description: "Kıdemli Siber Suçlar Araştırmacısı ve Yapay Zeka Stratejisti Özgür Can Aka'nın profesyonel portfolyosu. Siber Güvenlik, Adli Bilişim, Blockchain ve AI Çözümleri.",
    url: "https://ozgurcanaka.me",
    siteName: "Özgür Can Aka Portfolio",
    images: [
      {
        url: "https://ozgurcanaka.me/assets/images/profile.png",
        width: 800,
        height: 800,
        alt: "Özgür Can Aka Profile Image",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Özgür Can Aka | Senior Cybercrime Investigator & AI Strategist",
    description: "Kıdemli Siber Suçlar Araştırmacısı ve Yapay Zeka Stratejisti Özgür Can Aka'nın profesyonel portfolyosu. Siber Güvenlik, Adli Bilişim, Blockchain ve AI Çözümleri.",
    images: ["https://ozgurcanaka.me/assets/images/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${firaCode.variable} scroll-smooth bg-white`}
    >
      <body className="bg-cyber-light text-cyber-text font-sans antialiased selection:bg-accent-orange selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
