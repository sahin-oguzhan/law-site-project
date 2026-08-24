import Link from 'next/link';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

const newsList = [
  {
    id: 1,
    title: 'Ticaret Hukukunda Emsal Teşkil Eden Yeni Karar',
    excerpt:
      'Müvekkillerimiz lehine sonuçlanan son ticari davada, sektördeki diğer şirketler için emsal niteliği taşıyan önemli bir sonuca ulaşıldı.',
    href: '',
  },
  {
    id: 2,
    title: 'İş Hukuku Süreçlerinde İşveren Sorumlulukları',
    excerpt:
      'Yeni yasal düzenlemeler ışığında işverenlerin dikkat etmesi gereken kritik hususlar ve sözleşme güncellemeleri hakkında detaylı rehber.',
    href: '',
  },
  {
    id: 3,
    title: 'Ceza Hukukunda Soruşturma Evresi ve Haklar',
    excerpt:
      'Soruşturma aşamasında şüpheli hakları, ifade alma süreçleri ve avukatın rolü üzerine bilmeniz gereken temel hukuki adımlar.',
    href: '',
  },
  {
    id: 4,
    title: 'Vergi Hukukunda İhtilafların Çözüm Yolları',
    excerpt:
      'Vergi daireleri ile yaşanan uyuşmazlıklarda uzlaşma müessesesi ve vergi mahkemelerinde dava açma süreçlerinin incelenmesi.',
    href: '',
  },
];

export default function News() {
  return (
    <section className="w-full bg-[#EFECE8] py-20 lg:py-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end lg:mb-24">
          <div className="flex flex-col lg:max-w-[60%]">
            <span className="font-dmserif mb-4 text-sm font-medium text-gray-800 lg:text-base">
              Haberler
            </span>
            <h2 className="font-dmserif text-[32px] leading-[1.15] tracking-tight text-gray-900 sm:text-[40px] lg:text-[48px]">
              Güncel Haberler ve Blog Yazıları
            </h2>
          </div>

          <Link
            href="/haberler"
            className="group font-dmserif flex w-fit items-center gap-2 text-base text-gray-800 transition-opacity hover:opacity-70"
          >
            Tümünü Gör
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
          {newsList.map((news) => (
            <article
              key={news.id}
              className="flex flex-col gap-6 sm:flex-row sm:items-center lg:gap-8"
            >
              <div className="relative flex aspect-4/5 w-full shrink-0 items-center justify-center bg-[#D6D6D6]/60 text-gray-400 transition-colors hover:bg-[#D6D6D6]/80 sm:w-[45%]">
                <ImageIcon size={48} strokeWidth={1} />
              </div>

              <div className="flex flex-1 flex-col py-2">
                <h3 className="font-dmserif mb-4 text-[24px] leading-tight text-gray-900 sm:text-[26px]">
                  {news.title}
                </h3>

                <hr className="mb-4 w-full border-t border-gray-300" />

                <p className="font-dmSans mb-6 line-clamp-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                  {news.excerpt}
                </p>

                <Link
                  href={news.href}
                  className="font-dmSans w-fit bg-[#1A2433] px-7 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#2a374d]"
                >
                  Hemen Oku
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
