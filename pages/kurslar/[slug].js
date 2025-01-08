"use client";

import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PaymentModal from '@/components/PaymentModal';
import { fetchCourseBySlug, fetchCourses } from '@/utils/api';
import '@/app/globals.css';

export default function CourseDetail({ course, otherCourses }) {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null); // Seçilen paket
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedPackage(null); // Modal kapanırken seçilen paketi sıfırla
  };

  const handleImageModalClose = () => setImageModalOpen(false);

  const openImageModal = (image) => {
    setSelectedImage(image);
    setImageModalOpen(true);
  };

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg); // Seçilen paketi state'e yaz
    setModalOpen(true); // Modal'i aç
  };

  // Eğer sayfa henüz slug almadıysa
  if (router.isFallback) {
    return (
      <div className="container mx-auto text-center py-16">
        <h1 className="text-3xl font-bold text-gray-600">Yükleniyor...</h1>
      </div>
    );
  }

  if (!course) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto text-center py-16">
          <h1 className="text-3xl font-bold text-red-500">404 - Kurs Bulunamadı</h1>
          <p className="text-gray-700 mt-4">
            <Link href="/" className="text-blue-500 underline hover:text-blue-700">
              Anasayfaya
            </Link>{' '}
            dönebilirsiniz.
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="bg-slate-200">
        <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sol: Kurs Detayları */}
          <div className="md:col-span-3">
            {/* Görsel */}
            {course.image?.length > 0 && (
              <Image
                src={`https://strapi-project-xi2f.onrender.com${course.image[0]?.url}`}
                alt={course.title}
                width={800}
                height={450}
                className="rounded-lg mb-6"
              />
            )}

            {/* Başlık */}
            {course.title && (
              <h1 className="text-3xl font-bold text-primaryDark mb-4">{course.title}</h1>
            )}

            {/* Genel Açıklama */}
            {course.description && (
              <p className="text-gray-700 leading-relaxed mb-6">
                {course.description[0]?.children[0]?.text}
              </p>
            )}

            {/* Eğitim Kapsamı */}
            {course.scope && course.scope.length > 0 && (
              <>
                <h2 className="text-2xl font-bold text-primaryDark mb-4">Eğitim Kapsamında</h2>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
                  {course.scope.map((item, index) => (
                    <li key={index}>{item.children[0]?.text}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Kimler Katılmalı */}
            {course.target_audience && (
              <>
                <h2 className="text-2xl font-bold text-primaryDark mb-4">Kimler Katılmalı?</h2>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                  {course.target_audience.map((item, index) => (
                    <li key={index}>{item.children[0]?.text}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Sağ: Sidebar */}
          <div
            className="md:col-span-1 bg-slate-100 p-6 rounded-lg shadow-lg flex flex-col justify-between"
            style={{ maxHeight: '1000px' }}
          >
            {/* Paketler */}
            <div className="mb-4 bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-primaryDark mb-4 flex items-center space-x-2">
                <span>Paketler</span>
              </h2>
              {course.packages?.map((pkg) => (
                <div
                  key={pkg.id}
                  className="mb-4 p-4 border border-gray-300 rounded-lg bg-gray-50"
                >
                  <h3 className="text-lg font-semibold text-primaryDark">{pkg.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{pkg.description}</p>
                  <p className="text-xl font-bold text-accentOrange">{pkg.price} TL</p>
                  <button
                    onClick={() => handleSelectPackage(pkg)} // Paketi seç ve modal'i aç
                    className="mt-2 bg-accentOrange text-white py-1 px-4 rounded-lg font-bold hover:bg-primaryDark transition-all w-full"
                  >
                    Bu Paketi Seç
                  </button>
                </div>
              ))}
            </div>

            {/* Sertifika Örnekleri */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-primaryDark mb-4">Sertifika Örnekleri</h2>
              <Image
                src="/sample-certificate1.png"
                alt="Örnek Sertika"
                width={300}
                height={200}
                className="rounded-lg mb-4 cursor-pointer"
                onClick={() => openImageModal('/sample-certificate1.png')}
              />
              <Image
                src="/sample-certificate2.png"
                alt="Örnek Sertika"
                width={300}
                height={200}
                className="rounded-lg mt-8 cursor-pointer"
                onClick={() => openImageModal('/sample-certificate2.png')}
              />
            </div>

            {/* Diğer Eğitimler */}
            <div>
              <h2 className="text-xl font-bold text-primaryDark mb-4">Diğer Eğitimler</h2>
              <ul className="space-y-2">
                {otherCourses.slice(0, 3).map((otherCourse) => (
                  <li
                    key={otherCourse.id}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    <Link href={`/kurslar/${otherCourse.slug}`} className="flex items-center space-x-4">
                      <span className="text-primaryBlue hover:text-accentOrange font-semibold">
                        {otherCourse.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        course={course}
        selectedPackage={selectedPackage} // Seçilen paketi modal'e gönder
      />

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-lg w-full relative">
            <button
              onClick={handleImageModalClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              ✖
            </button>
            <Image
              src={selectedImage}
              alt="Sertifika"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}

export async function getStaticProps({ params }) {
  const course = await fetchCourseBySlug(params.slug); // Slug üzerinden kurs çek
  const allCourses = await fetchCourses(); // Tüm kursları çek

  if (!course) {
    return { notFound: true }; // Eğer kurs yoksa 404
  }

  const otherCourses = allCourses
    .filter((c) => c.slug !== course.slug) // Mevcut kurs hariç diğer kursları seç
    .sort(() => 0.5 - Math.random())
    .slice(0, 3); // İlk 4 diğer kursu seç

  return {
    props: { course, otherCourses }, // Kurs ve diğer kursları sayfaya gönder
    revalidate: 10, // 10 saniyede bir sayfayı yeniden oluştur
  };
}

export async function getStaticPaths() {
  const courses = await fetchCourses(); // Tüm kursları çek
  const paths = courses.map((course) => ({
    params: { slug: course.slug }, // Slug'ları parametre olarak yollar oluştur
  }));

  return {
    paths, // Dinamik yollar
    fallback: true, // Yollar bulunamazsa fallback modunu etkinleştir
  };
}
