// components/HeroSection.js
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        
        {/* Sol Taraf: Başlık ve Alt Metin */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Yeni Nesil Öğretimde <br /> Zirve&apos;de Ol
          </h1>
          <p className="text-gray-600 mb-6">
            Kariyerinizi ve Kişisel Gelişiminizi Zirve Online&apos;a taşıyın, sertifika sahibi olun.
          </p>
          <a href="#" className="inline-block bg-yellow-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-yellow-600">
            Hemen Başvur
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
