import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/905468969783" // WhatsApp numaranız buraya
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 z-50"
        >
            {/* WhatsApp İkonu */}
            <FaWhatsapp className="text-3xl" />

            {/* Yazı */}
            <span className="text-sm font-semibold">WhatsApp İletişim Hattı</span>
        </a>
    );
}
