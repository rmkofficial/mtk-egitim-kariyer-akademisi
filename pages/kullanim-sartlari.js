import Head from "next/head";
import '@/app/globals.css';

export default function KullanimSartlari() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Kullanım Şartları | MTK Eğitim Kariyer Akademisi</title>
        <meta
          name="description"
          content="MTK Eğitim Kariyer Akademisi'nin kullanım şartları hakkında bilgi edinin. Web sitemizi kullanmadan önce dikkatlice okuyun."
        />
      </Head>
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-primaryDark mb-8">
          Kullanım Şartları
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 leading-relaxed mb-6">
            MTK Eğitim Kariyer Akademisi web sitesine hoş geldiniz. Web sitemizi kullanmadan
            önce lütfen aşağıdaki kullanım şartlarını dikkatlice okuyunuz.
          </p>

          <h2 className="text-2xl font-semibold text-primaryDark mb-4">1. Kabul</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Web sitemize erişerek ve kullanarak bu kullanım şartlarını kabul etmiş
            sayılırsınız. Bu şartları kabul etmiyorsanız lütfen web sitemizi kullanmayınız.
          </p>

          <h2 className="text-2xl font-semibold text-primaryDark mb-4">2. Hizmetler</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Web sitemiz, kullanıcılarımıza eğitim içerikleri, kurs kayıtları ve diğer
            hizmetler sunmaktadır. Hizmetlerimizden faydalanmak için gerekli bilgileri
            doğru bir şekilde sağlamanız gerekmektedir.
          </p>

          <h2 className="text-2xl font-semibold text-primaryDark mb-4">
            3. Kullanıcı Yükümlülükleri
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Web sitemizi sadece yasal amaçlarla kullanmalısınız.</li>
            <li>Yanıltıcı veya yanlış bilgi sağlamaktan kaçınmalısınız.</li>
            <li>Web sitemizin işleyişini bozacak herhangi bir girişimde bulunmamalısınız.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primaryDark mb-4">4. Fikri Mülkiyet</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Web sitemizdeki içerik, tasarım, logo ve diğer tüm materyaller MTK Eğitim
            Kariyer Akademisi&apos;ne aittir. Bu materyalleri izinsiz kullanmanız yasaktır.
          </p>

          <h2 className="text-2xl font-semibold text-primaryDark mb-4">5. Ücretlendirme</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Kurs kayıtları ve diğer hizmetler için belirlenen ücretler, web sitemizde açıkça
            belirtilmiştir. MTK Eğitim Kariyer Akademisi, ücretlendirmelerde değişiklik
            yapma hakkını saklı tutar.
          </p>

          <h2 className="text-2xl font-semibold text-primaryDark mb-4">
            6. Sorumluluk Reddi
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Web sitemizi kullanımınız sırasında oluşabilecek herhangi bir zarardan MTK Eğitim
            Kariyer Akademisi sorumlu tutulamaz.
          </p>

          <h2 className="text-2xl font-semibold text-primaryDark mb-4">7. Şartların Güncellenmesi</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bu kullanım şartları zaman zaman güncellenebilir. Güncellenen şartlar bu sayfada
            yayınlanacak ve web sitesini kullanmaya devam ederek bu şartları kabul etmiş
            sayılacaksınız.
          </p>

          <h2 className="text-2xl font-semibold text-primaryDark mb-4">8. İletişim</h2>
          <p className="text-gray-700 leading-relaxed">
            Kullanım şartlarımız hakkında sorularınız varsa, bizimle{" "}
            <a
              href="mailto:mtkakademi@gmail.com"
              className="text-blue-500 underline hover:text-blue-700"
            >
              mtkakademi@gmail.com
            </a>{" "}
            adresinden iletişime geçebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
