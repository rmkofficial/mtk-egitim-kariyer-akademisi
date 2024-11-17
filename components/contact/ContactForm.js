export default function ContactForm() {
    return (
        <section className=" py-16">
            <div className="container mx-auto px-6 md:px-12 bg-slate-200 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-primaryDark mb-4">Bize Ulaşın</h2>
                <form action="#" method="POST" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Adınız"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="E-posta"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue"
                            required
                        />
                    </div>
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Mesajınız"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className=" w-full bg-primaryBlue text-white py-3 px-6 rounded-md font-semibold hover:bg-primaryDark"
                    >
                        Gönder
                    </button>
                </form>
            </div>
        </section>
    );
}
