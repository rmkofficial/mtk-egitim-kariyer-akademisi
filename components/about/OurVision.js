import Image from 'next/image';

export default function OurVision() {
    return (
        <section className="bg-slate-100 py-16">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Sol: Resim */}
                <div className="md:w-1/2">
                    <Image
                        src="/who-we-are.gif"
                        alt="Biz Kimiz"
                        width={500}
                        height={500}
                    />
                </div>
                {/* Sağ: Yazılar */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-primaryDark mb-4">Vizyonumuz</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Geleceğin iş dünyasına hazırlık için en iyi eğitim içeriklerini sunarak, bireylerin kariyerlerini en üst seviyeye taşımalarını sağlamak.
                    </p>
                </div>
            </div>
        </section>
    );
}
