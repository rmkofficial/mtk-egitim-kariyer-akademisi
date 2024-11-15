// components/AboutSection.js
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

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
          <h3 className="text-sm text-accentOrange font-semibold mb-2">Online Eğitimin Adresi</h3>
          <h2 className="text-3xl font-bold text-primaryDark mb-4">Zirve ONLINE</h2>
          <p className="text-gray-600 mb-6">
            Profesyonel bir ekip ve uzun yılların verdiği tecrübe ile, siz değerli öğrencilerimize en iyi eğitim ve öğretim hizmetini sunmak için buradayız. Öğrencilerimizin mutluluğu, bizlerin mutluluğudur.
          </p>

          {/* Liste */}
          <ul className="space-y-4 text-left">
            <li className="flex items-center">
              <FaCheckCircle className="text-accentOrange mr-2" />
              <span className="text-gray-700">Ömür Boyu Erişim</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-accentOrange mr-2" />
              <span className="text-gray-700">Yer ve Zaman Bağımsız</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-accentOrange mr-2" />
              <span className="text-gray-700">Alanında Uzman Eğitmenler</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-accentOrange mr-2" />
              <span className="text-gray-700">Güncel Eğitim İçeriği</span>
            </li>
          </ul>

          {/* Buton */}
          <div className="mt-6">
            <a href="#" className="inline-block bg-accentOrange text-white py-3 px-6 rounded-full font-semibold hover:bg-primaryDark">
              Hemen Başvur
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
