import Link from 'next/link';
import { Phone, MapPin, Mail, Landmark } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A2433]">
      <div className="mx-auto w-full max-w-360 px-6 lg:px-12">
        <div className="flex w-full items-center justify-center border-b border-white/10 py-12">
          <Link href="/" className="flex items-center gap-3">
            <Landmark className="h-8 w-8 text-white" strokeWidth={1.5} />
            <span className="font-dmserif text-2xl tracking-wide text-white">
              Sayın Hukuk
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="flex flex-col gap-6 lg:col-span-1">
            <h3 className="font-dmserif text-lg text-white">Hakkımızda</h3>
            <p className="font-dmSans text-sm leading-relaxed text-white/70">
              Müvekkillerimize şeffaf, sonuç odaklı ve güvenilir kurumsal
              danışmanlık ile dava takibi hizmeti sunuyoruz.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                aria-label="Instagram"
                className="text-white/70 transition-colors hover:text-white"
              >
                <svg
                  className="h-5 w-5 fill-none stroke-current"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-dmserif text-lg text-white">Alanlarımız</h3>
            <nav className="font-dmSans flex flex-col gap-4 text-sm text-white/70">
              <Link
                href="/calisma-alanlarimiz"
                className="w-fit transition-colors hover:text-white"
              >
                Ceza & Ağır Ceza Hukuku
              </Link>
              <Link
                href="/calisma-alanlarimiz"
                className="w-fit transition-colors hover:text-white"
              >
                Ticaret & Şirketler Hukuku
              </Link>
              <Link
                href="/calisma-alanlarimiz"
                className="w-fit transition-colors hover:text-white"
              >
                İdare & Vergi Hukuku
              </Link>
              <Link
                href="/calisma-alanlarimiz"
                className="w-fit transition-colors hover:text-white"
              >
                İş & Sosyal Güvenlik Hukuku
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-dmserif text-lg text-white">Sayfalar</h3>
            <nav className="font-dmSans flex flex-col gap-4 text-sm text-white/70">
              <Link
                href="/avukatlarimiz"
                className="w-fit transition-colors hover:text-white"
              >
                Avukatlarımız
              </Link>
              <Link
                href="/hukuki-danismanlik"
                className="w-fit transition-colors hover:text-white"
              >
                Hukuki Danışmanlık
              </Link>
              <Link
                href="/makaleler"
                className="w-fit transition-colors hover:text-white"
              >
                Makaleler / Haberler
              </Link>
              <Link
                href="/iletisim"
                className="w-fit transition-colors hover:text-white"
              >
                İletişim
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-dmserif text-lg text-white">Kurumsal</h3>
            <nav className="font-dmSans flex flex-col gap-4 text-sm text-white/70">
              <Link
                href="/kullanim-kosullari"
                className="w-fit transition-colors hover:text-white"
              >
                Kullanım Koşulları
              </Link>
              <Link
                href="/gizlilik-politikasi"
                className="w-fit transition-colors hover:text-white"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="/kvkk"
                className="w-fit transition-colors hover:text-white"
              >
                KVKK Aydınlatma Metni
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-1">
            <h3 className="font-dmserif text-lg text-white">İletişim</h3>
            <div className="font-dmSans flex flex-col gap-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0" />
                <a
                  href="tel:+900000000000"
                  className="transition-colors hover:text-white"
                >
                  +90 (000) 000 00 00
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>Adres</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0" />
                <a
                  href="mailto:info@sayinhukuk.com"
                  className="transition-colors hover:text-white"
                >
                  Eposta
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="font-dmSans flex w-full items-center justify-center border-t border-white/10 py-8 text-center text-xs text-white/50 sm:text-sm">
          <p>
            Copyright © {new Date().getFullYear()} Sayın Hukuk Bürosu. Tüm
            Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
