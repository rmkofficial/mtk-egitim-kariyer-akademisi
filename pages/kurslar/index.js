import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import '@/app/globals.css';

export default function AllCourses({ courses }) {
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const coursesPerPage = 9;

    // Filtrelenmiş kursları al
    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    // Gösterilecek kursları hesapla
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
    const displayedCourses = filteredCourses.slice(
        (currentPage - 1) * coursesPerPage,
        currentPage * coursesPerPage
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Navbar />
            <section className="bg-slate-100 py-16">
                <div className="container mx-auto px-6 text-center">
                    {/* Başlık */}
                    <h2 className="text-lg text-accentOrange font-semibold mb-2">
                        MTK Eğitim Kariyer Akademisi
                    </h2>
                    <h3 className="text-3xl font-bold text-primaryDark mb-6">
                        Tüm Eğitimler
                    </h3>

                    {/* Arama Çubuğu */}
                    <div className="mb-8">
                        <input
                            type="text"
                            placeholder="Kurs Ara..."
                            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accentOrange"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* Kurslar Izgarası */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedCourses.length > 0 ? (
                            displayedCourses.map((course) => (
                                <div
                                    key={course.id}
                                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                                >
                                    <Link href={`/kurslar/${course.slug}`}>
                                        <div className="relative w-full h-64 cursor-pointer">
                                            <Image
                                                src={`https://strapi-project-xi2f.onrender.com${course.image[0]?.url}`}
                                                alt={course.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="hover:opacity-90 transition duration-300"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                                {course.title}
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                Detaylar için tıklayın.
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-700">
                                Aradığınız kriterlere uygun bir kurs bulunamadı.
                            </p>
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-8 flex justify-center items-center space-x-4">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                                (pageNumber) => (
                                    <button
                                        key={pageNumber}
                                        onClick={() => handlePageChange(pageNumber)}
                                        className={`px-4 py-2 rounded-lg ${pageNumber === currentPage
                                            ? 'bg-accentOrange text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            }`}
                                    >
                                        {pageNumber}
                                    </button>
                                )
                            )}
                        </div>
                    )}
                </div>
            </section>
            <Footer />
            <WhatsAppButton />
        </>
    );
}

// getStaticProps ile Strapi'den veri çekiyoruz
export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/courses?populate=*`);
    const data = await res.json();


    return {
        props: {
            courses: data.data || [], // Verileri burada kurslar olarak geçiriyoruz
        },
        revalidate: 10, // Her 10 saniyede bir yeniden oluştur
    };
}
