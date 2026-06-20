"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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

      <div className="relative z-10 w-full max-w-[800px] mx-auto min-h-screen flex flex-col pt-12 pb-24 px-6">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/multi-view" 
            className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold border-2 border-cyber-text bg-white text-cyber-text hover:bg-cyber-text hover:text-white transition-all cursor-pointer shadow-[4px_4px_0px_#0f172a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0f172a]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Project</span>
          </Link>
        </div>

        {/* Content */}
        <main className="bg-white border-2 border-cyber-text p-8 md:p-12 shadow-[8px_8px_0px_#0f172a]">
          <h1 className="text-3xl font-black text-cyber-text mb-2 uppercase border-b-4 border-cyber-text pb-4">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-cyber-muted mb-8 uppercase">Last Updated: April 29, 2026</p>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-cyber-text">
            <p>
              This Privacy Policy describes how the <strong>Multi-View Dashboard Beta</strong> extension handles user information. Our primary philosophy is privacy-by-design: we believe your data belongs to you.
            </p>

            <h2 className="text-lg sm:text-xl font-bold uppercase text-cyber-text border-b border-cyber-border pb-2 pt-4">
              1. Data Collection and Usage
            </h2>
            <p>
              The Multi-View Dashboard Beta extension <strong>does not collect, store, or transmit any personal data</strong> to external servers. All operations are performed locally within your browser.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Configuration Data:</strong> Your dashboard layouts, added URLs, and preferences are stored locally using the <code>chrome.storage</code> API.</li>
              <li><strong>Authentication:</strong> The extension does not see or store your login credentials for the websites you embed. Sessions are managed directly by your browser.</li>
            </ul>

            <h2 className="text-lg sm:text-xl font-bold uppercase text-cyber-text border-b border-cyber-border pb-2 pt-4">
              2. Permissions
            </h2>
            <p>
              Our extension requests the following permissions for these specific reasons:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Storage:</strong> To save your dashboard settings locally.</li>
              <li><strong>Notifications:</strong> To show real-time alerts from your monitored sites.</li>
              <li><strong>DeclarativeNetRequest:</strong> To allow websites to be displayed within the dashboard's iframes by managing security headers.</li>
            </ul>

            <h2 className="text-lg sm:text-xl font-bold uppercase text-cyber-text border-b border-cyber-border pb-2 pt-4">
              3. Third-Party Websites
            </h2>
            <p>
              The dashboard allows you to embed third-party websites (like X, Instagram, or news sites). These sites have their own privacy policies. We recommend reviewing them, as we do not have control over their content or data practices.
            </p>

            <h2 className="text-lg sm:text-xl font-bold uppercase text-cyber-text border-b border-cyber-border pb-2 pt-4">
              4. Contact
            </h2>
            <p>
              If you have any questions about this Privacy Policy, you can contact the developer through the official GitHub repository or Chrome Web Store support page.
            </p>
          </div>

          <footer className="mt-12 pt-6 border-t border-cyber-border text-center text-xs font-mono text-cyber-muted uppercase">
            &copy; 2026 Multi-View Dashboard Beta - All Rights Reserved.
          </footer>
        </main>

      </div>
    </>
  );
}
