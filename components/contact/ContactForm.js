export default function ContactForm() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12 bg-slate-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-primaryDark mb-4">Bize Ulaşın</h2>
        <form
          action="https://formsubmit.co/mtkakademi@gmail.com" // FormSubmit URL'si
          method="POST" // POST isteği
          className="space-y-6"
        >
          {/* FormSubmit için zorunlu güvenlik alanı */}
          <input type="hidden" name="_captcha" value="false" /> {/* CAPTCHA devre dışı */}
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/tesekkurler" // Gönderim sonrası yönlendirme URL'si
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Adınız"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue text-gray-900"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-posta"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue text-gray-900"
              required
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Mesajınız"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue text-gray-900"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primaryBlue text-white py-3 px-6 rounded-md font-semibold hover:bg-primaryDark"
          >
            Gönder
          </button>
        </form>
      </div>
    </section>
  );
}
