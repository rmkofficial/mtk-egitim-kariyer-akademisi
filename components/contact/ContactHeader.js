import Image from 'next/image';

export default function ContactHeader() {
    return (
        <section className="relative bg-slate-100">
            {/* Arka Plan Görseli */}
            <div className="absolute inset-0">
                <Image
                    src="/background-contact.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-20"
                    priority
                />
            </div>

            {/* İçerik */}
            <div className="relative container mx-auto px-6 md:px-12 py-40 text-center">
                <h1 className="text-4xl font-bold text-primaryDark mb-4">İletişim</h1>
                <p className="text-sm text-gray-600">
                    <span className="text-accentOrange font-medium">MTK Akademi</span>
                </p>
            </div>
        </section>
    );
}
