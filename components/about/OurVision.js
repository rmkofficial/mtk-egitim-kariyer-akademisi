import Image from 'next/image';

export default function OurVision() {
    return (
        <section className="bg-slate-200 py-8">
            <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
                {/* Sol: Resim */}
                <div className="md:w-1/2">
                    <Image
                        src="/our-vision.gif"
                        alt="Vizyonumuz"
                        width={500}
                        height={500}
                        className="rounded-lg"
                        priority
                    />
                </div>
                {/* Sağ: Yazılar */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-primaryDark mb-4">Vizyonumuz</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Eğitim alanında lider bir marka olarak, bireylerin potansiyellerini keşfetmelerine ve kariyerlerini ileriye taşımalarına rehberlik etmek en büyük hedefimizdir. Global değişim ve dönüşüm süreçlerine ayak uydurarak, iş dünyasının ihtiyaçlarına uygun ve geleceği şekillendiren eğitim içerikleri sunmayı vizyon edindik. Öğrenmeyi bir yaşam boyu süren bir yolculuk olarak gören bireylerin ilk tercihi olmayı hedefliyoruz.
                    </p>
                </div>
            </div>
        </section>
    );
}
