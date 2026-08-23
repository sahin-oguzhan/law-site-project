import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section className="relative mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="flex flex-row items-center justify-between gap-4 sm:gap-8 lg:justify-center lg:gap-14">
        <div className="relative aspect-square w-[42%] shrink-0 sm:w-[45%] md:w-[380px] lg:w-[440px]">
          <Image
            src="/about.jpg"
            alt="Adalet Terazisi - Sayın Hukuk Bürosu"
            fill
            className="object-cover shadow-sm"
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 440px"
          />
        </div>

        <div className="h-44 w-px bg-[#1A2433]/20 sm:h-72 lg:h-96" />

        <div className="flex flex-1 flex-col justify-center text-left">
          <span className="font-dmSans text-xs font-semibold tracking-wider text-[#1A2433] sm:text-sm lg:text-base">
            Hakkımızda
          </span>

          <h2 className="font-dmSerif mt-2 text-lg leading-tight tracking-wide text-[#1A2433] sm:mt-4 sm:text-3xl lg:text-5xl lg:leading-[1.15]">
            Hukuki Yükünüzü Hafifletmek ve Çözüm Üretmek İçin Buradayız
          </h2>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center text-center sm:mt-16">
        <p className="font-dmSans text-xs leading-relaxed text-[#5A6578] sm:text-sm">
          Sayın Hukuk Bürosu olarak, adaletin ve hukukun üstünlüğü ilkesi
          doğrultusunda müvekkillerimizin haklarını titizlikle savunuyoruz.
          Kurumsal ve bireysel uyuşmazlıklarda yenilikçi stratejiler
          geliştirerek şeffaf, etkili ve sonuç odaklı çözümler sunuyoruz.
        </p>

        <p className="font-dmSans mt-4 text-xs leading-relaxed text-[#5A6578] sm:text-sm">
          Geniş uzmanlık alanımız ve deneyimli kadromuzla, karmaşık hukuki
          süreçleri sadeleştiriyor ve en doğru hukuki zeminde temsil edilmenizi
          sağlıyoruz. Her aşamada güvenilirlik ve mesleki etik ilkelerinden
          taviz vermeden yanınızdayız.
        </p>

        <div className="mt-8 sm:mt-10">
          <Link
            href="/hakkimizda"
            className="font-dmSans inline-flex items-center justify-center bg-[#172230] px-9 py-3.5 text-xs font-medium tracking-wider text-white uppercase shadow-sm transition-colors hover:bg-[#233348]"
          >
            Detaylı Bilgi
          </Link>
        </div>
      </div>
    </section>
  );
}
