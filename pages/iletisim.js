import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import SocialMedia from '@/components/contact/SocialMedia';
import '@/app/globals.css';
import WhatsAppButton from '../components/WhatsAppButton';


export default function Contact() {
    return (
        <>
            <Head>
                <title>İletişim | MTK Eğitim Kariyer Akademisi</title>
                <meta name="description" content="MTK Eğitim Kariyer Akademisi ile iletişime geçin. Adres, telefon ve e-posta bilgilerimiz burada." />
            </Head>
            <Navbar />
            <main className="bg-slate-100">
                <ContactHeader />
                <ContactInfo />
                <ContactForm />
                <SocialMedia />
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
