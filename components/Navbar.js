"use client";

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Sol Taraf: MTK Yazısı */}
        <div className="text-2xl font-bold text-blue-600">
          MTK
        </div>

        {/* Orta Menü - Yalnızca Büyük Ekranlarda Görünür */}
        <nav className="hidden md:flex flex-grow justify-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Anasayfa
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Kurumsal
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Eğitimler
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
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
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Anasayfa
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Kurumsal
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Eğitimler
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              İletişim
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
