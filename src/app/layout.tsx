import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sayın Hukuk Bürosu',
  description: 'Kurumsal Hukuk ve Danışmanlık Hizmetleri',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
