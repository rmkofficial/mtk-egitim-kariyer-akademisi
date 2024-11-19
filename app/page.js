import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import PopularCoursesSection from '@/components/PopularCoursesSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { fetchPopularCourses } from '@/utils/api';

export default async function Home() {
  // Strapi'den popüler kursları çekiyoruz
  const popularCourses = await fetchPopularCourses();

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <PopularCoursesSection popularCourses={popularCourses} />
      <WhatsAppButton />
    </>
  );
}
