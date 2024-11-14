// app/page.js
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import PopularCoursesSection from '../components/PopularCoursesSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <PopularCoursesSection />
    </div>
  );
}
