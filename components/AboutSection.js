// components/AboutSection.js
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section className="bg-slate-200 py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">

        {/* Sol Taraf: İllüstrasyon */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <Image src="/illustration-about.gif" alt="Eğitim İllüstrasyonu" width={500} height={500} />
        </div>

        {/* Sağ Taraf: Başlık, Açıklama ve Liste */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-sm text-accentOrange font-semibold mb-2">Hayallerinize Ulaşmanın Anahtarı</h3>
          <h2 className="text-3xl font-bold text-primaryDark mb-4">MTK Eğitim Kariyer Akademisi</h2>
          <p className="text-gray-600 mb-6">
            Eğitim ihtiyaçlarınıza özel olarak seçilmiş içeriklerle, profesyonel gelişiminize katkı sağlıyoruz.
          </p>

          {/* Liste */}
          <ul className="space-y-6">
            <li className="flex items-center space-x-2 text-left">
              <FaStar className="text-accentOrange text-3xl" />
              <span className="text-gray-700 text-lg">Dilediğiniz yerden eğitimlere erişim sağlayın.</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaStar className="text-accentOrange text-3xl" />
              <span className="text-gray-700 text-lg">Sertifika ile kariyerinizde fark yaratın.</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaStar className="text-accentOrange text-3xl" />
              <span className="text-gray-700 text-lg">Eğitim içerikleri sürekli güncellenir.</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaStar className="text-accentOrange text-3xl" />
              <span className="text-gray-700 text-lg">Her seviyeye uygun kurslar mevcuttur.</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaStar className="text-accentOrange text-3xl" />
              <span className="text-gray-700 text-lg">Yer ve zamandan bağımsız öğrenim fırsatı.</span>
            </li>
          </ul>

          {/* Buton */}
          <div className="mt-6">
            <a href="#" className="inline-block bg-accentOrange text-white py-3 px-6 rounded-full font-semibold hover:bg-primaryDark">
            Kurslara Göz Atın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
