import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="font-dmserif relative mx-auto flex w-full max-w-[1600px] flex-col justify-center px-6 pt-8 pb-16 lg:h-[calc(100dvh-80px)] lg:flex-row lg:items-center lg:overflow-hidden lg:px-12 lg:py-0">
      <div className="z-10 flex w-full shrink-0 flex-col items-center text-center lg:w-[48%] lg:items-start lg:gap-20 lg:text-left">
        <span className="font-dmSans mb-3 text-xs font-semibold tracking-widest text-[#A69B6D] uppercase lg:hidden">
          Hukuki Danışmanlık & Temsil
        </span>

        <h1 className="text-[clamp(2.2rem,6vw,6.5rem)] leading-[1.05] tracking-tight text-[#1A2433] lg:leading-[0.98]">
          <span className="block lg:whitespace-nowrap">Hak ve Adalet İçin</span>
          <span className="mt-2 block lg:mt-1 lg:whitespace-nowrap">
            <span className="text-[#A69B6D]">Sayın</span> Hukuk Bürosu
          </span>
        </h1>

        <p className="font-dmSans mt-5 max-w-md text-sm leading-relaxed text-[#5A6578] lg:hidden">
          Müvekkillerimize şeffaf, sonuç odaklı ve güvenilir kurumsal
          danışmanlık ile dava takibi hizmeti sunuyoruz.
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row lg:mt-10 lg:justify-start">
          <Link
            href="/iletisim"
            className="font-dmSans inline-flex w-full items-center justify-center bg-[#172230] px-9 py-4 text-xs font-medium tracking-wider text-white uppercase shadow-sm transition-colors hover:bg-[#233348] sm:w-auto"
          >
            Danışmanlık Al
          </Link>
          <Link
            href="/calisma-alanlarimiz"
            className="font-dmSans inline-flex w-full items-center justify-center border border-[#172230]/20 px-8 py-4 text-xs font-medium tracking-wider text-[#1A2433] uppercase transition-colors hover:bg-[#172230]/5 sm:w-auto lg:hidden"
          >
            Alanlarımız
          </Link>
        </div>
      </div>

      <div className="relative hidden h-full max-h-[75vh] flex-1 items-center justify-center lg:-ml-[18%] lg:flex xl:-ml-[22%]">
        <Image
          src="/hero.jpg"
          alt="Adalet Heykeli - Sayın Hukuk Bürosu"
          width={1392}
          height={929}
          priority
          className="h-full max-h-[75vh] w-auto object-contain object-right"
          sizes="(max-width: 1024px) 0px, 65vw"
        />
      </div>
    </section>
  );
}
