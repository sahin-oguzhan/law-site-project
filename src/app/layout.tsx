import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans } from 'next/font/google';
import './globals.css';

const dmSerifFont = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dmSerif',
  display: 'swap',
});

const dmSansFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmSans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sayın Hukuk Bürosu',
  description: 'Kurumsal Hukuk ve Danışmanlık Hizmetleri',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${dmSansFont.variable} ${dmSerifFont.variable}`}
    >
      <body className="font-dmSerif min-h-screen bg-[#ECE8E1] text-[#1A2433] antialiased">
        {children}
      </body>
    </html>
  );
}
