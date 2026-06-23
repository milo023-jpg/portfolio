import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ToolingSection } from "@/components/sections/tooling";
import { ProjectsSection } from "@/components/sections/projects";
import { CurrentlyBuildingSection } from "@/components/sections/currently-building";
import { EducationSection } from "@/components/sections/education";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ToolingSection />
        <ProjectsSection />
        <CurrentlyBuildingSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
