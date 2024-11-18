import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { courses } from '../../data/courses';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/app/globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function CourseDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Gelen ID'ye göre kursu bul
  const course = courses.find((course) => course.id === parseInt(id, 10));

  if (!course) {
    // Kurs bulunamazsa Next.js'in 404 sayfasını göster
    return (
      <>
        <Navbar />
        <div className="container mx-auto text-center py-16">
          <h1 className="text-3xl font-bold text-red-500">404 - Kurs Bulunamadı</h1>
          <p className="text-gray-700 mt-4">
            <Link href="/" className="text-blue-500 underline hover:text-blue-700">anasayfaya</Link> dönebilirsiniz.
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-primaryDark mb-4">{course.title}</h1>
        <Image src={course.image} alt={course.title} width={600} height={400} />
        <p className="text-gray-700 mt-6">Burada kurs detayları olacak.</p>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
