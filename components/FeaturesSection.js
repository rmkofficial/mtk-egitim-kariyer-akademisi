// components/FeaturesSection.js
import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="bg-slate-200 py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Başlık */}
        <h2 className="text-lg text-accentOrange font-semibold mb-2">Hayallerinize Ulaşmanın Anahtarı</h2>
        <h3 className="text-3xl font-bold text-primaryDark mb-12">MTK Eğitim Kariyer Akademisi</h3>

        {/* Özellik Kartları */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Kart 1 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/laptop.gif"
              alt="Dijital Eğitimler"
              width={100}
              height={100}
              className="mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Dijital Eğitimler</h4>
            <p className="text-gray-600 text-xl">
              Dilediğiniz yerden ve zamanda erişebileceğiniz dijital eğitimlerle öğrenmeye devam edin.
            </p>
          </div>

          {/* Kart 2 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/diploma.gif"
              alt="Sertifika Programları"
              width={100}
              height={100}
              className="mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Sertifika Programları</h4>
            <p className="text-gray-600 text-xl">
              Eğitimlerimizin sonunda uluslararası geçerliliğe sahip sertifikalarla fark yaratın.
            </p>
          </div>

          {/* Kart 3 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/career-ladder.gif"
              alt="Sektör Odaklı Eğitimler"
              width={100}
              height={100}
              className="mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Sektör Odaklı Eğitimler</h4>
            <p className="text-gray-600 text-xl">
              Sektöre özel içeriklerle bilgi birikiminizi artırarak rekabette öne geçin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
