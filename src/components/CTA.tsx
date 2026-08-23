import Link from 'next/link';

const ctaData = {
  title: 'Hukuki Süreçlerinizde Güvenilir ve Profesyonel Çözüm Ortağınız',
  description:
    'Haklarınızı korumak ve hukuki süreçlerinizi en etkin şekilde yönetmek için uzman ekibimizle iletişime geçin, profesyonel danışmanlık hizmeti alın.',
  buttonText: 'Hemen İletişime Geçin',
  buttonHref: '/iletisim',
};

export default function CTA() {
  return (
    <section className="w-full bg-[#1A2433] py-10 lg:py-14">
      <div className="mx-auto flex w-full max-w-240 flex-col items-center px-6 text-center lg:px-8">
        <h2 className="font-dmSerif mb-4 text-[28px] leading-[1.15] tracking-tight text-white sm:text-[36px] lg:text-[44px]">
          {ctaData.title}
        </h2>

        <p className="font-dmSans mb-6 max-w-180 text-sm leading-relaxed text-white/80 sm:text-base">
          {ctaData.description}
        </p>

        <Link
          href={ctaData.buttonHref}
          className="font-dmSans inline-flex items-center justify-center bg-[#8C7A5B] px-7 py-3.5 text-xs font-semibold tracking-wider text-white uppercase transition-all hover:bg-[#7A694C] active:scale-[0.98] sm:text-sm"
        >
          {ctaData.buttonText}
        </Link>
      </div>
    </section>
  );
}
