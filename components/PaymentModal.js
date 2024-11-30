"use client";

import { useState } from "react";
import { createOrder } from "@/utils/api"; // API'den createOrder fonksiyonunu çağırıyoruz.

export default function PaymentModal({ isOpen, onClose, course }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tc, setTc] = useState(""); // TC Kimlik No
  const [dob, setDob] = useState(""); // Doğum Tarihi
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
        userName: name,          // "userName" backend'in beklediği isim
        userEmail: email,        // "userEmail" backend'in beklediği isim
        userPhone: phone,        // "userPhone" backend'in beklediği isim
        userTC: tc,              // "userTC" backend'in beklediği isim
        userBirthDate: dob,      // "userBirthDate" backend'in beklediği isim
        course: course.slug,     // Backend kurs slug'ı bekliyor
        paymentId: "abc12345xyv" // Test için statik bir ödeme ID'si
      };

      console.log("Gönderilen veri:", orderData);

      const response = await createOrder(orderData);

      console.log("Sipariş oluşturuldu:", response);
      alert("Siparişiniz başarıyla alındı!");
      onClose();
    } catch (error) {
      console.error("Sipariş oluşturulamadı:", error.response?.data || error.message);
      setError(error.response?.data?.error?.message || "Bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // Modal dışına tıklanınca kapatma
    >
      <div
        className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()} // Modal içeriğine tıklamayı durdur
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">Sipariş Bilgileri</h2>
        <p className="text-gray-700 mb-4">
          <strong>{course?.title}</strong> kursunu satın almak üzeresiniz.
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Adınız Soyadınız</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">E-posta</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Telefon</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">TC Kimlik No</label>
          <input
            type="text"
            value={tc}
            onChange={(e) => setTc(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Doğum Tarihi</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          {loading ? "İşlem Yapılıyor..." : "Siparişi Tamamla"}
        </button>
      </div>
    </div>
  );
}
