import Image from 'next/image';

export default function AboutHeader() {
    return (
        <section className="relative bg-slate-100">
            {/* Arka Plan Görseli */}
            <div className="absolute inset-0">
                <Image
                    src="/background-about.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-20"
                />
            </div>

            {/* İçerik */}
            <div className="relative container mx-auto px-6 md:px-12 py-40 text-center">
                <h1 className="text-4xl font-bold text-primaryDark mb-4">Biz Kimiz</h1>
                <p className="text-sm text-gray-600">
                    <span className="text-accentOrange font-medium">MTK Akademi</span> / Biz Kimiz
                </p>
            </div>
        </section>
    );
}
