"use client";

import { useState } from "react";
import { createOrder } from "@/utils/api";

export default function PaymentModal({ isOpen, onClose, course, selectedPackage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tc, setTc] = useState("");
  const [dob, setDob] = useState("");
  const [isChecked, setIsChecked] = useState(false); // Onay kutusu kontrolü
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    tc: "",
    dob: "",
    general: "",
  });

  const handlePayment = async () => {
    const newErrors = {
      name: name ? "" : "Adınızı giriniz.",
      email: email ? "" : "E-posta adresinizi giriniz.",
      phone: phone ? "" : "Telefon numaranızı giriniz.",
      tc: tc ? "" : "TC Kimlik Numaranızı giriniz.",
      dob: dob ? "" : "Doğum tarihinizi giriniz.",
      general: !isChecked ? "Lütfen Gizlilik Politikası ve Kullanım Şartlarını kabul ediniz." : "",
    };

    setError(newErrors);

    // Eğer herhangi bir hata varsa işlemi durdur
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    setLoading(true);

    try {
      const orderData = {
        userName: name,
        userEmail: email,
        userPhone: phone,
        userTC: tc,
        userBirthDate: dob,
        course: course.slug,
        package: {
          id: selectedPackage?.id,
          title: selectedPackage?.title,
          price: selectedPackage?.price,
        },
        paymentId: "abc12345xyv",
      };

      console.log("Gönderilen Sipariş Verisi:", orderData);

      const response = await createOrder(orderData);

      alert("Kayıt olma işleminiz başarıyla tamamlandı!");
      onClose();
    } catch (error) {
      console.error("API Hatası:", error.response?.data || error.message);
      setError((prev) => ({ ...prev, general: "Bir hata oluştu, lütfen tekrar deneyin." }));
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
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Kurs Kayıt Bilgileri</h2>
        <p className="text-gray-700 mb-4">
          <strong>{course?.title}</strong> kursunun <strong>{selectedPackage?.title}</strong> paketine kayıt olmak üzeresiniz.
        </p>
        <p className="text-gray-700 mb-4">
          Paket Ücreti: <strong>{selectedPackage?.price} TL</strong>
        </p>

        {/* Kullanıcı Bilgileri */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Adınız Soyadınız*</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md text-black ${error.name ? "border-red-500" : "border-gray-300"}`}
          />
          {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">E-posta*</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md text-black ${error.email ? "border-red-500" : "border-gray-300"}`}
          />
          {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Telefon*</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md text-black ${error.phone ? "border-red-500" : "border-gray-300"}`}
          />
          {error.phone && <p className="text-red-500 text-sm mt-1">{error.phone}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">TC Kimlik No*</label>
          <input
            type="text"
            value={tc}
            onChange={(e) => setTc(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md text-black ${error.tc ? "border-red-500" : "border-gray-300"}`}
          />
          {error.tc && <p className="text-red-500 text-sm mt-1">{error.tc}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Doğum Tarihi*</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md text-black ${error.dob ? "border-red-500" : "border-gray-300"}`}
          />
          {error.dob && <p className="text-red-500 text-sm mt-1">{error.dob}</p>}
        </div>

        {/* Onay Kutusu */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="mr-2"
            />
            <span className="text-sm text-gray-700">
              <a
                href="/gizlilik-politikasi"
                target="_blank"
                className="text-blue-500 underline"
              >
                Gizlilik Politikası
              </a>
              {" ve "}
              <a
                href="/kullanim-sartlari"
                target="_blank"
                className="text-blue-500 underline"
              >
                Kullanım Şartlarını
              </a>{" "}
              kabul ediyorum.
            </span>
          </label>
        </div>
        {error.general && <p className="text-red-500 mb-4">{error.general}</p>}

        <button
          onClick={handlePayment}
          disabled={loading || !isChecked} // isChecked kontrolü
          className={`w-full py-2 px-4 rounded-md font-bold transition-all ${loading || !isChecked
            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
            : "bg-accentOrange text-white hover:bg-primaryDark"
            }`}
        >
          {loading ? "İşlem Yapılıyor..." : "Kayıt Ol"}
        </button>
      </div>
    </div>
  );
}
