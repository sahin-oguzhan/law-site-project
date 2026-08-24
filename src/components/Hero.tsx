import Image from 'next/image';
import Link from 'next/link';

const heroContent = {
  titlePart1: 'Hak ve Adalet İçin',
  highlightText: 'Sayın',
  titlePart2: 'Hukuk Bürosu',
  buttonText: 'Danışmanlık Al',
  buttonHref: '/iletisim',
  imageSrc: '/hero.jpg',
  imageAlt: 'Adalet Heykeli - Sayın Hukuk Bürosu',
};

export default function Hero() {
  return (
    <>
      {/* Mobile & Tablet */}
      <section className="font-dmserif relative mx-auto flex w-full max-w-5xl flex-col justify-center px-4 py-8 sm:px-8 sm:py-12 lg:hidden">
        <div className="grid w-full grid-cols-1 items-center">
          <div className="relative col-start-1 row-start-1 aspect-16/10 w-full overflow-hidden sm:aspect-16/8">
            <Image
              src={heroContent.imageSrc}
              alt={heroContent.imageAlt}
              fill
              priority
              className="object-cover object-right"
              sizes="(max-width: 1024px) 100vw, 0px"
            />
          </div>

          <div className="z-10 col-start-1 row-start-1 flex flex-col items-start p-4 sm:p-8">
            <h1 className="text-[clamp(1.25rem,4.5vw,2.5rem)] leading-[1.08] tracking-tight text-[#1A2433]">
              <span className="block whitespace-nowrap">
                {heroContent.titlePart1}
              </span>
              <span className="mt-1 block whitespace-nowrap">
                <span className="text-[#A69B6D]">
                  {heroContent.highlightText}
                </span>{' '}
                {heroContent.titlePart2}
              </span>
            </h1>

            <div className="mt-4 flex w-auto flex-row items-center justify-start sm:mt-6">
              <Link
                href={heroContent.buttonHref}
                className="font-dmSans inline-flex w-auto items-center justify-center bg-[#172230] px-4 py-2.5 text-[11px] font-medium tracking-wider text-white uppercase shadow-sm transition-colors hover:bg-[#233348] sm:px-6 sm:py-3 sm:text-xs"
              >
                {heroContent.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop */}
      <section className="font-dmserif relative mx-auto hidden h-[calc(100dvh-80px)] w-full max-w-[1600px] flex-row items-center overflow-hidden px-12 py-0 lg:flex">
        <div className="z-10 flex w-[48%] shrink-0 flex-col items-start gap-20 text-left">
          <h1 className="text-[clamp(2.2rem,6vw,6.5rem)] leading-[0.98] tracking-tight text-[#1A2433]">
            <span className="block whitespace-nowrap">
              {heroContent.titlePart1}
            </span>
            <span className="mt-1 block whitespace-nowrap">
              <span className="text-[#A69B6D]">
                {heroContent.highlightText}
              </span>{' '}
              {heroContent.titlePart2}
            </span>
          </h1>

          <div className="mt-10 flex w-auto flex-row items-center justify-start">
            <Link
              href={heroContent.buttonHref}
              className="font-dmSans inline-flex w-auto items-center justify-center bg-[#172230] px-9 py-4 text-xs font-medium tracking-wider text-white uppercase shadow-sm transition-colors hover:bg-[#233348]"
            >
              {heroContent.buttonText}
            </Link>
          </div>
        </div>

        <div className="relative -ml-[18%] flex h-full max-h-[75vh] flex-1 items-center justify-center xl:-ml-[22%]">
          <Image
            src={heroContent.imageSrc}
            alt={heroContent.imageAlt}
            width={1392}
            height={929}
            priority
            className="h-full max-h-[75vh] w-auto object-contain object-right"
            sizes="65vw"
          />
        </div>
      </section>
    </>
  );
}
