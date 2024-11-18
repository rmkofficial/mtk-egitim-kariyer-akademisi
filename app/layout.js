// app/layout.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton'; // WhatsApp Buton Bileşeni
import './globals.css';

export const metadata = {
  title: 'MTK Eğitim Kariyer Akademisi',
  description: 'Kariyerinizi geliştirmek için eğitim kursları',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          <Navbar />

          {/* Sayfa İçeriği */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <Footer />

          {/* WhatsApp Butonu */}
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
