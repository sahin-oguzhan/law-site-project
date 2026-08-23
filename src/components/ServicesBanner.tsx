import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  { title: 'Ceza & Ağır Ceza Hukuku', href: '/calisma-alanlarimiz' },
  { title: 'Ticaret & Şirketler Hukuku', href: '/calisma-alanlarimiz' },
  { title: 'İdare & Vergi Hukuku', href: '/calisma-alanlarimiz' },
  { title: 'İş & Sosyal Güvenlik Hukuku', href: '/calisma-alanlarimiz' },
];

export default function ServicesBanner() {
  return (
    <section className="w-full bg-[#1A2433]">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center justify-between gap-8 px-6 py-10 lg:flex-row lg:gap-8 lg:px-12 lg:py-14">
        <div className="flex w-full flex-col lg:w-[55%]">
          <div className="relative aspect-21/7 w-[85%] overflow-hidden lg:w-[82%]">
            <Image
              src="/services-banner.png"
              alt="Hukuki Hizmetler - Sayın Hukuk Bürosu"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 85vw, 50vw"
            />
          </div>

          <div className="relative z-10 -mt-7 ml-[35%] sm:-mt-10 lg:-mt-12">
            <h2 className="font-dmserif text-[24px] leading-[1.15] tracking-tight text-white sm:text-[36px] lg:text-[48px]">
              <span className="block">Hukuk Büronuz Olmaya</span>
              <span className="block">Hazır Profesyonel</span>
              <span className="block">Hizmetler</span>
            </h2>
          </div>
        </div>

        <div className="flex w-full flex-col lg:w-[40%]">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group flex items-center justify-between border-b border-white/20 py-3.5 transition-colors last:border-b-0 hover:border-white"
            >
              <span className="font-dmSans text-[18px] tracking-wide text-white transition-transform group-hover:translate-x-1 sm:text-[20px]">
                {service.title}
              </span>
              <ArrowRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
