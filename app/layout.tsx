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
    icon: "/favicon.ico",
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
