import Link from 'next/link'; // Next.js Link bileşeni
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primaryBlue text-white py-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo ve Kısa Açıklama */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">MTK</h2>
          <p className="text-gray-400">
            MTK Eğitim Kariyer Akademisi, kariyerinizi ileriye taşımak için eğitim ve sertifika programları sunar.
          </p>
        </div>

        {/* Hızlı Linkler */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-accentOrange transition">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-accentOrange transition">
                Eğitimler
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accentOrange transition">
                Kurumsal
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accentOrange transition">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h4 className="text-lg font-semibold mb-4">İletişim</h4>
          <ul className="space-y-2">
            <li className="text-gray-400">Adres: İstanbul, Türkiye</li>
            <li className="text-gray-400">Telefon: +90 555 555 5555</li>
            <li className="text-gray-400">E-posta: info@mtkegitim.com</li>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Bizi Takip Edin</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accentOrange transition"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accentOrange transition"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accentOrange transition"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accentOrange transition"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
        <p>© 2024 MTK Eğitim Kariyer Akademisi. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
}
