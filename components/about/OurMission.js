import Image from 'next/image';

export default function OurMission() {
  return (
    <section className="bg-slate-100 py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Sol: Yazılar */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-primaryDark mb-4">Misyonumuz</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            En kaliteli ve güncel eğitim programlarıyla bireylerin kariyer hedeflerine ulaşmasına destek olmak ve
            uluslararası geçerliliği olan sertifikalar sunmak.
          </p>
        </div>
        {/* Sağ: Resim */}
        <div className="md:w-1/2">
                    <Image
                        src="/our-mission.gif"
                        alt="Biz Kimiz"
                        width={500}
                        height={500}
                    />
                </div>
      </div>
    </section>
  );
}
