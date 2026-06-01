import Hero from "../sections/Hero";
import AboutSection from "../sections/AboutSection";
import FeaturedProjectSection from "../sections/FeaturedProjectSection";
import JourneySection from "../sections/JourneySection";
function Home() {
  return (
    <main className="bg-[#030712] text-white">
      <Hero />

      <div className="pt-12">
        <AboutSection />
      </div>

      <div className="pt-12">
            <FeaturedProjectSection />
      </div>

      <div className="pt-12">
        <JourneySection />
      </div>
    </main>
  );
}

export default Home;