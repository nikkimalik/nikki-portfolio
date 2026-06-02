import Hero from "../sections/Hero";
import AboutSection from "../sections/AboutSection";
import FeaturedProjectSection from "../sections/FeaturedProjectSection";
import JourneySection from "../sections/JourneySection";
import SkillsSection from "../sections/SkillsSection";
import Lab from "./Lab";
import Contact from "./Contact";

function Home() {
  return (
    <main className="bg-[#030712] text-[#F9FAFB]">
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

      <div className="pt-12">
        <SkillsSection />
      </div>

      <div className="pt-12">
        <Lab />
      </div>

      <div className="pt-12">
        <Contact />
      </div>
    </main>
  );
}

export default Home;
