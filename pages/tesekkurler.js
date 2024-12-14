import Link from "next/link";
import '@/app/globals.css';

export default function Tesekkurler() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-primaryDark mb-4">Teşekkürler!</h1>
                <p className="text-gray-700 mx-10">
                    Mesajınızı aldık. En kısa sürede sizinle iletişime geçeceğiz.
                </p>
                <Link
                    href="/"
                    className="inline-block mt-6 bg-primaryBlue text-white py-2 px-4 rounded-md font-semibold hover:bg-primaryDark transition-all"
                >
                    Anasayfaya Dön
                </Link>
            </div>
        </div>
    );
}
