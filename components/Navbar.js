"use client";

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll olayını izleyerek navbar’ın sabitlenme durumunu güncelle
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`bg-white shadow-xl p-4 ${isSticky ? 'fixed top-0 left-0 w-full z-50' : 'relative'}`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Sol Taraf: MTK Yazısı */}
        <div className="text-3xl font-bold text-[#2f3b69]">MTK</div>

        {/* Orta Menü - Yalnızca Büyük Ekranlarda Görünür */}
        <nav className="hidden md:flex flex-grow justify-center space-x-14">
          <a
            href="#"
            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-[#2f3b69] underline-offset-4"
          >
            Anasayfa
          </a>
          <a
            href="#"
            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-[#2f3b69] underline-offset-4"
          >
            Kurumsal
          </a>
          <a
            href="#"
            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-[#2f3b69] underline-offset-4"
          >
            Eğitimler
          </a>
          <a
            href="#"
            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-[#2f3b69] underline-offset-4"
          >
            İletişim
          </a>
        </nav>

        {/* Sağda Hamburger Menü - Yalnızca Küçük Ekranlarda Görünür */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {/* Hamburger Icon - Açık/Kapalı Duruma Göre İkonu Değiştir */}
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobil Menü - Yalnızca Hamburger Menü Açıldığında Görünür */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md z-10">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-yellow-500 underline-offset-4">
              Anasayfa
            </a>
            <a href="#" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-yellow-500 underline-offset-4">
              Kurumsal
            </a>
            <a href="#" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-yellow-500 underline-offset-4">
              Eğitimler
            </a>
            <a href="#" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-yellow-500 underline-offset-4">
              İletişim
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
