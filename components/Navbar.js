"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // Next.js Image bileşeni
import Link from "next/link"; // Next.js Link bileşeni

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    <header
      className={`bg-white shadow-xl px-4 ${
        isSticky ? "fixed top-0 left-0 w-full z-50" : "relative"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Sol Taraf: Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
          <Image
            src="/logo.png" // Logo dosyasının yolu
            alt="MTK Logo"
            width={80} // Logonun genişliği
            height={80} // Logonun yüksekliği
          />
          </Link>
        </div>

        {/* Orta Menü - Yalnızca Büyük Ekranlarda Görünür */}
        <nav className="hidden md:flex flex-grow justify-center space-x-14">
          <Link
            href="/"
            className="text-lg font-medium text-primaryBlue hover:text-primaryDark transition duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-accentOrange underline-offset-4"
          >
            Anasayfa
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium text-primaryBlue hover:text-primaryDark transition duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-accentOrange underline-offset-4"
          >
            Kurumsal
          </Link>
          <Link
            href="/courses"
            className="text-lg font-medium text-primaryBlue hover:text-primaryDark transition duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-accentOrange underline-offset-4"
          >
            Eğitimler
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium text-primaryBlue hover:text-primaryDark transition duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-accentOrange underline-offset-4"
          >
            İletişim
          </Link>
        </nav>

        {/* Sağda Hamburger Menü - Yalnızca Küçük Ekranlarda Görünür */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
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
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-20">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="text-lg font-medium text-primaryBlue hover:text-primaryDark transition duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-accentOrange underline-offset-4"
            >
              Anasayfa
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium text-primaryBlue hover:text-primaryDark transition duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-accentOrange underline-offset-4"
            >
              Kurumsal
            </Link>
            <Link
              href="/courses"
              className="text-lg font-medium text-primaryBlue hover:text-primaryDark transition duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-accentOrange underline-offset-4"
            >
              Eğitimler
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium text-primaryBlue hover:text-primaryDark transition duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-accentOrange underline-offset-4"
            >
              İletişim
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
