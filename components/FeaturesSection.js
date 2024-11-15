// components/FeaturesSection.js
import { FaChalkboardTeacher, FaCertificate, FaLaptop } from 'react-icons/fa';

export default function FeaturesSection() {
    return (
        <section className="bg-slate-200 py-16">
            <div className="container mx-auto px-6 md:px-12 text-center">
                {/* Başlık */}
                <h2 className="text-lg text-accentOrange font-semibold mb-2">Online Eğitimin Tek Adresi</h2>
                <h3 className="text-3xl font-bold text-primaryDark mb-12">MTK Egitim Kariyer Akademisi</h3>

                {/* Özellik Kartları */}
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {/* Kart 1 */}
                    <div className="bg-purple-100 rounded-lg p-8 flex flex-col items-center shadow-lg">
                        <FaLaptop className="text-purple-600 text-4xl mb-4" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Online Eğitimler</h4>
                        <p className="text-gray-600">
                            Zirve Online ile dilediğiniz zaman ve mekandan bağımsız tüm eğitimleri kesintisiz izleyebilirsiniz.
                        </p>
                    </div>

                    {/* Kart 2 */}
                    <div className="bg-yellow-100 rounded-lg p-8 flex flex-col items-center shadow-lg">
                        <FaCertificate className="text-yellow-600 text-4xl mb-4" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Sertifikaya Sahip Ol</h4>
                        <p className="text-gray-600">
                            Tüm eğitimlerimizin sonunda sertifika sahibi olabilirsiniz. Sertifikanızı CV&apos;nize ekleyebilirsiniz.
                        </p>
                    </div>

                    {/* Kart 3 */}
                    <div className="bg-blue-100 rounded-lg p-8 flex flex-col items-center shadow-lg">
                        <FaChalkboardTeacher className="text-blue-600 text-4xl mb-4" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Uzman Eğitmenler</h4>
                        <p className="text-gray-600">
                            Alanında uzman eğitmenlerimiz ile kapsamlı, güncel, interaktif ve uygulamalı eğitimlerimize hemen başlayın.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
