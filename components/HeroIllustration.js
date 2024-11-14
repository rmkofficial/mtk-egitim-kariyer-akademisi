// components/HeroIllustration.js
import Image from 'next/image';

export default function HeroIllustration() {
  return (
    <div className="w-full max-w-md mx-auto relative bg-gray-100">
      
      {/* Dekoratif Şekiller */}
      <div className="absolute top-0 left-0 bg-purple-500 h-16 w-16 rounded-full opacity-50 transform -translate-x-6 -translate-y-6"></div>
      <div className="absolute bottom-0 right-0 bg-blue-500 h-20 w-20 rounded-full opacity-50 transform translate-x-6 translate-y-6"></div>
      
      {/* İllüstrasyon */}
      <Image src="/illustration.gif" alt="Hero Illustration" layout="responsive" width={500} height={500} className="relative z-10" />
    </div>
  );
}
