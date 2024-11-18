// components/PopularCoursesSection.js
import Link from 'next/link';
import Image from 'next/image';
import { popularCourses } from '../data/courses';
import { slugify } from '@/utils/slugify'; // Slugify fonksiyonunu ekledik

export default function PopularCoursesSection() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-lg text-accentOrange font-semibold mb-2">MTK Eğitim Kariyer Akademisi</h2>
        <h3 className="text-3xl font-bold text-primaryDark mb-12">Popüler Eğitimler</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Link href={`/courses/${slugify(course.title)}`}>
                <div className="relative w-full h-64 cursor-pointer">
                  <Image src={course.image} alt={course.title} layout="fill" objectFit="cover" />
                </div>
                <div className="p-6 cursor-pointer">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h4>
                  <button className="mt-4 inline-block bg-accentOrange text-white py-2 px-4 rounded-full font-semibold hover:bg-primaryDark">
                    İncele
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/courses"
            className="inline-block bg-accentOrange text-white py-3 px-6 rounded-full font-semibold hover:bg-primaryDark"
          >
            Tüm Eğitimler
          </Link>
        </div>
      </div>
    </section>
  );
}
