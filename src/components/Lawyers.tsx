import { User } from 'lucide-react';

const lawyers = [
  {
    name: 'Av. [İsim Soyisim]',
    role: 'Kurucu Avukat',
  },
  {
    name: 'Av. [İsim Soyisim]',
    role: 'Yönetici Avukat',
  },
];

export default function Lawyers() {
  return (
    <section className="w-full bg-[#EFECE8] py-20 lg:py-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-10 lg:mb-24 lg:flex-row lg:items-end">
          <div className="flex flex-col lg:max-w-[55%]">
            <span className="font-dmSerif mb-4 text-lg font-medium text-gray-800 lg:mb-6">
              Avukatlarımız
            </span>
            <h2 className="font-dmSerif text-[36px] leading-[1.15] tracking-tight text-gray-900 sm:text-[44px] lg:text-[52px]">
              Daha Fazla Tecrübeye Sahip Profesyonel Avukatlar ve Danışmanlar
            </h2>
          </div>

          <div className="lg:max-w-[35%]">
            <p className="font-dmSans text-base leading-relaxed text-gray-600 sm:text-lg">
              Sayın Hukuk Bürosu olarak, müvekkillerimize en iyi hukuki
              danışmanlık ve avukatlık hizmetini sunmak için alanında uzman,
              deneyimli ve dinamik kadromuzla yanınızdayız.
            </p>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-24">
          {lawyers.map((lawyer, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-6 flex aspect-square w-full max-w-85 items-center justify-center bg-[#D6D6D6]/50 text-gray-400 transition-colors hover:bg-[#D6D6D6]/80">
                <User size={64} strokeWidth={1} />
              </div>

              <h3 className="font-dmSerif mb-1.5 text-2xl tracking-wide text-gray-900 sm:text-3xl">
                {lawyer.name}
              </h3>
              <p className="font-dmSans text-sm text-gray-600 sm:text-base">
                {lawyer.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
