// components/HeroSection.js
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-slate-100 py-16 relative overflow-hidden">
      {/* Dekoratif Şekiller */}
      <div className="absolute top-10 left-10 bg-primaryDark h-32 w-32 rounded-full opacity-60 transform rotate-45 z-10"></div>
      <div className="absolute top-1/4 left-1/3 bg-primaryBlue h-32 w-32 rounded-full opacity-20 z-0"></div>
      <div className="absolute bottom-10 right-10 bg-accentOrange h-20 w-20 rounded-full opacity-30 transform rotate-45 z-20"></div>
      <div className="absolute bottom-20 left-20 bg-accentOrange h-28 w-28 rounded-full opacity-50 z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        
        {/* Sol Taraf: Başlık ve Alt Metin */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="md:text-6xl text-4xl font-bold text-gray-800 mb-4">
          Kariyer Gelişiminizde Yeni Bir Sayfa Açın
          </h1>
          <p className="text-gray-600 mb-6 text-lg md:text-2xl">
          Kendinizi geliştirmek ve kariyerinize yön vermek için doğru yerdesiniz.
          </p>
          <a href="#" className="inline-block bg-accentOrange text-white py-3 px-6 rounded-full font-semibold hover:bg-primaryDark">
          Kurslara Göz Atın
          </a>
        </div>

        {/* Sağ Taraf: İllüstrasyon */}
        <div className="md:w-1/2 flex items-center justify-center relative">
          <Image src="/illustration-hero.gif" alt="Hero Illustration" width={500} height={500} />
        </div>
      </div>
    </section>
  );
}
