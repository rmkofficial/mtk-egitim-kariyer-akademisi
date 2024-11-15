// components/PopularCoursesSection.js
import Image from 'next/image';

const courses = [
  { id: 1, title: 'ANNE-BEBEK YOGASI EĞİTİCİ EĞİTİMİ', image: '/course1.jpg' },
  { id: 2, title: 'DOĞUMA HAZIRLIK EĞİTİMİ (DOULA)', image: '/course2.jpg' },
  { id: 3, title: 'HAMİLE YOGASI VE HAMİLE MASAJI EĞİTİCİ EĞİTİMİ', image: '/course3.jpg' },
  { id: 4, title: 'BEBEK SPA VE BEBEK MASAJI EĞİTİMİ', image: '/course4.jpg' },
  { id: 5, title: 'BEBEK VE ÇOCUKLARDA İLK YARDIM EĞİTİMİ', image: '/course5.jpg' },
  { id: 6, title: 'EMZİRME DANIŞMANLIĞI EĞİTİCİ EĞİTİMİ', image: '/course6.jpg' },
  { id: 7, title: 'YENİDOĞAN BAKIMI EĞİTİMİ', image: '/course7.jpg' },
  { id: 8, title: 'TEMEL YOGA EĞİTİMİ', image: '/course8.jpg' },
  { id: 9, title: 'DİKSİYON VE HİTABET EĞİTİMİ', image: '/course9.jpg' },
];

export default function PopularCoursesSection() {
  return (
    <section className="bg-[#f3f4f6] py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Başlık */}
        <h2 className="text-lg text-accentOrange font-semibold mb-2">Zirve Online</h2>
        <h3 className="text-3xl font-bold text-primaryDark mb-12">Popüler Eğitimler</h3>

        {/* Kart Izgarası */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-64">
                <Image src={course.image} alt={course.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h4>
                <button className="mt-4 inline-block bg-accentOrange text-white py-2 px-4 rounded-full font-semibold hover:bg-primaryDark">
                  İncele
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tüm Eğitimler Butonu */}
        <div className="mt-8">
          <a href="#" className="inline-block bg-accentOrange text-white py-3 px-6 rounded-full font-semibold hover:bg-primaryDark">
            Tüm Eğitimler
          </a>
        </div>
      </div>
    </section>
  );
}
