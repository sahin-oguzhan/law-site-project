'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Landmark, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#ECE8E1]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
        <Link href="/" className="group flex items-center gap-2">
          <Landmark className="h-7 w-7 stroke-[1.75] text-[#1A2433]" />
          <span className="font-dmserif text-2xl font-bold tracking-wide text-[#1A2433]">
            Sayın Hukuk
          </span>
        </Link>

        <nav className="font-dmSans hidden items-center gap-10 text-lg font-medium tracking-tight text-[#2C3E50] lg:flex">
          <Link
            href="/"
            className="transition-colors hover:font-bold hover:text-[#1A2433]"
          >
            Hakkımızda
          </Link>
          <Link
            href="/"
            className="transition-colors hover:font-bold hover:text-[#1A2433]"
          >
            Çalışma Alanlarımız
          </Link>
          <Link
            href="/"
            className="transition-colors hover:font-bold hover:text-[#1A2433]"
          >
            Avukatlarımız
          </Link>
          <Link
            href="/"
            className="transition-colors hover:font-bold hover:text-[#1A2433]"
          >
            Makaleler
          </Link>
          <Link
            href="/"
            className="transition-colors hover:font-bold hover:text-[#1A2433]"
          >
            Hukuki Danışmanlık
          </Link>
          <Link
            href="/"
            className="transition-colors hover:font-bold hover:text-[#1A2433]"
          >
            İletişim
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menüyü Aç/Kapat"
          className="rounded-lg p-2 text-[#1A2433] transition-colors hover:bg-black/5 lg:hidden"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 flex w-full flex-col gap-6 border-b border-[#1A2433]/10 bg-[#ECE8E1] px-8 py-8 shadow-xl lg:hidden">
          <nav className="font-dmSans flex flex-col gap-5 text-xl font-medium tracking-tight text-[#2C3E50]">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="transition-colors hover:font-bold hover:text-[#1A2433]"
            >
              Hakkımızda
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="transition-colors hover:font-bold hover:text-[#1A2433]"
            >
              Çalışma Alanlarımız
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="transition-colors hover:font-bold hover:text-[#1A2433]"
            >
              Makaleler
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="transition-colors hover:font-bold hover:text-[#1A2433]"
            >
              Hukuki Danışmanlık
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="transition-colors hover:font-bold hover:text-[#1A2433]"
            >
              İletişim
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
