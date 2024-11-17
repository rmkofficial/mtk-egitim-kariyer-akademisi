import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function ContactInfo() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* Adres */}
                <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center space-y-4 p-6 border rounded-lg shadow-md hover:bg-accentOrange hover:text-white transition-all duration-300 ease-in-out min-h-[200px]"
                >
                    <FaMapMarkerAlt className="text-primaryBlue text-3xl hover:text-white" />
                    <h2 className="text-lg font-semibold text-primaryBlue hover:text-white">Adres</h2>
                    <p className="text-primaryBlue hover:text-white">İstanbul, Türkiye</p>
                </a>

                {/* Telefon */}
                <a
                    href="tel:+905555555555"
                    className="flex flex-col items-center justify-center space-y-4 p-6 border rounded-lg shadow-md hover:bg-accentOrange hover:text-white transition-all duration-300 ease-in-out min-h-[200px]"
                >
                    <FaPhoneAlt className="text-primaryBlue text-3xl hover:text-white" />
                    <h2 className="text-lg font-semibold text-primaryBlue hover:text-white">Telefon</h2>
                    <p className="text-primaryBlue hover:text-white">+90 555 555 5555</p>
                </a>

                {/* E-posta */}
                <a
                    href="mailto:info@mtkegitim.com"
                    className="flex flex-col items-center justify-center space-y-4 p-6 border rounded-lg shadow-md hover:bg-accentOrange hover:text-white transition-all duration-300 ease-in-out min-h-[200px]"
                >
                    <FaEnvelope className="text-primaryBlue text-3xl hover:text-white" />
                    <h2 className="text-lg font-semibold text-primaryBlue hover:text-white">E-posta</h2>
                    <p className="text-primaryBlue hover:text-white">info@mtkegitim.com</p>
                </a>
            </div>
        </section>
    );
}
