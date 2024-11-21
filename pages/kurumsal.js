import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHeader from '@/components/about/AboutHeader';
import WhoWeAre from '@/components/about/WhoWeAre';
import OurVision from '@/components/about/OurVision';
import OurMission from '@/components/about/OurMission';
import '@/app/globals.css';
import WhatsAppButton from '../components/WhatsAppButton';

export default function About() {
  return (
    <>
      <Head>
        <title>Hakkımızda | MTK Eğitim Kariyer Akademisi</title>
        <meta name="description" content="MTK Eğitim Kariyer Akademisi'nin vizyonu, misyonu ve tarihçesi hakkında bilgi alın." />
      </Head>
      <Navbar />
      <main className="">
        {/* Header Bileşeni */}
        <AboutHeader />

        {/* Biz Kimiz */}
        <WhoWeAre />

        {/* Vizyonumuz */}
        <OurVision />

        {/* Misyonumuz */}
        <OurMission />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
