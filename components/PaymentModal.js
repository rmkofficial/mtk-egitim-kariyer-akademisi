"use client";

import React from 'react';

export default function PaymentModal({ isOpen, onClose, course }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    ✖
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center">Ödeme İşlemi</h2>
                <p className="text-gray-700 mb-4 text-center">
                    <strong>{course?.title}</strong> kursunu satın almak üzeresiniz.
                </p>
                <p className="text-lg font-semibold text-accentOrange mb-6 text-center">
                    Ücret: {course?.price} TL
                </p>
                <form>
                    <label className="block mb-2 font-medium text-gray-700">Kart Numarası</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-accentOrange"
                        placeholder="**** **** **** ****"
                        maxLength={16}
                    />
                    <label className="block mb-2 font-medium text-gray-700">Son Kullanma Tarihi</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-accentOrange"
                        placeholder="MM/YY"
                        maxLength={5}
                    />
                    <label className="block mb-2 font-medium text-gray-700">CVV</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-accentOrange"
                        placeholder="***"
                        maxLength={3}
                    />
                    <button
                        type="submit"
                        className="w-full bg-accentOrange text-white py-2 px-4 rounded-lg font-bold hover:bg-primaryDark transition-all"
                    >
                        Ödeme Yap
                    </button>
                </form>
            </div>
        </div>
    );
}
