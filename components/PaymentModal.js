"use client";

import { useState } from "react";
import { createOrder } from "@/utils/api";

export default function PaymentModal({ isOpen, onClose, course, selectedPackage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tc, setTc] = useState("");
  const [dob, setDob] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);
  
    // Boş alanları kontrol et
    if (!name || !email || !phone || !tc || !dob) {
      setError("Lütfen tüm alanları doldurun.");
      setLoading(false);
      return;
    }
  
    try {
      const orderData = {
        userName: name,
        userEmail: email,
        userPhone: phone,
        userTC: tc,
        userBirthDate: dob,
        course: course.slug, // Kursun slug bilgisi
        package: {
          id: selectedPackage?.id, // Seçilen paketin ID'si
          title: selectedPackage?.title, // Seçilen paketin başlığı
          price: selectedPackage?.price, // Seçilen paketin fiyatı
        },
        paymentId: "abc12345xyv", // Test için statik bir ödeme ID'si
      };
  
      // Backend'e POST isteği
      const response = await createOrder(orderData);
  
      // Sipariş başarılı olduğunda
      alert("Siparişiniz başarıyla alındı!");
      onClose();
    } catch (error) {
      // Hata durumunda
      setError(error.response?.data?.error?.message || "Bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };
  

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Sipariş Bilgileri</h2>
        <p className="text-gray-700 mb-4">
          <strong>{course?.title}</strong> kursunun <strong>{selectedPackage?.title}</strong> paketini satın almak üzeresiniz.
        </p>
        <p className="text-gray-700 mb-4">
          Paket Ücreti: <strong>{selectedPackage?.price} TL</strong>
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Adınız Soyadınız</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">E-posta</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Telefon</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">TC Kimlik No</label>
          <input
            type="text"
            value={tc}
            onChange={(e) => setTc(e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Doğum Tarihi</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-black"
          />
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-accentOrange text-white py-2 px-4 rounded-md hover:bg-primaryDark"
        >
          {loading ? "İşlem Yapılıyor..." : "Siparişi Tamamla"}
        </button>
      </div>
    </div>
  );
}
