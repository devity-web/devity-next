'use client';

import {CodeXml} from 'lucide-react';
import {LanguageDropdown} from './language-dropdown';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0B]/80 backdrop-blur-md border-b border-white/[0.08]">
      <div className="container mx-auto h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CodeXml className="w-6 h-6 text-brand" />
          <span className="text-xl font-bold bg-gradient-to-r from-brand to-brandSecondary bg-clip-text text-transparent">
            DEVITY
          </span>
        </div>

        <LanguageDropdown />
      </div>
    </header>
  );
}
