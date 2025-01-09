import Head from "next/head";
import '@/app/globals.css';

export default function GizlilikPolitikasi() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Head>
                <title>Gizlilik Politikası | MTK Eğitim Kariyer Akademisi</title>
                <meta
                    name="description"
                    content="MTK Eğitim Kariyer Akademisi'nin gizlilik politikası hakkında bilgi edinin. Verilerinizin nasıl korunduğunu öğrenin."
                />
            </Head>
            <div className="container mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-center text-primaryDark mb-8">
                    Gizlilik Politikası
                </h1>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        MTK Eğitim Kariyer Akademisi olarak, kullanıcılarımızın gizliliğine büyük önem
                        veriyoruz. Bu Gizlilik Politikası, web sitemizi kullandığınızda kişisel
                        bilgilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
                    </p>

                    <h2 className="text-2xl font-semibold text-primaryDark mb-4">1. Toplanan Bilgiler</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Hizmetlerimizi sağlamak için şu bilgileri toplayabiliriz:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Adınız ve soyadınız</li>
                        <li>E-posta adresiniz</li>
                        <li>Telefon numaranız</li>
                        <li>Doğum tarihiniz</li>
                        <li>TC Kimlik numaranız</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-primaryDark mb-4">
                        2. Bilgilerin Kullanımı
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Topladığımız bilgileri şu amaçlarla kullanabiliriz:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Hizmetlerimizi sağlamak ve iyileştirmek</li>
                        <li>İletişim kurmak ve destek sağlamak</li>
                        <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-primaryDark mb-4">3. Bilgi Güvenliği</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Kişisel bilgilerinizin güvenliği bizim için çok önemlidir. Verilerinizi korumak için
                        uygun güvenlik önlemleri alıyoruz. Ancak, internet üzerinden bilgi aktarımının %100
                        güvenli olmadığını unutmayın.
                    </p>

                    <h2 className="text-2xl font-semibold text-primaryDark mb-4">4. Üçüncü Taraflarla Paylaşım</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Kişisel bilgilerinizi yalnızca aşağıdaki durumlarda üçüncü taraflarla paylaşabiliriz:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Yasal zorunluluklar doğrultusunda</li>
                        <li>Hizmet sağlamak için iş ortaklarımızla</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-primaryDark mb-4">
                        5. Politika Değişiklikleri
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Gizlilik Politikamızda zaman zaman değişiklik yapabiliriz. Güncellemeler bu sayfada
                        yayınlanacaktır.
                    </p>

                    <h2 className="text-2xl font-semibold text-primaryDark mb-4">6. İletişim</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Gizlilik politikamız hakkında sorularınız varsa, bizimle{" "}
                        <a
                            href="mailto:mtkakademi@gmail.com"
                            className="text-blue-500 underline hover:text-blue-700"
                        >
                            mtkakademi@gmail.com
                        </a>{" "}
                        adresi üzerinden iletişime geçebilirsiniz.
                    </p>
                </div>
            </div>
        </div>
    );
}
