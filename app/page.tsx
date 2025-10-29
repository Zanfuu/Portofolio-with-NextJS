import HomeSection from '../components/sections/home-sections';
import AboutSection from '../components/sections/about-sections';
import SkillsSection from '../components/sections/skills-sections';
import ProjectsSection from '../components/sections/projects-sections';
import ExperienceSection from '../components/sections/experiences-sections';
import CertificatesSection from '../components/sections/certificates-sections';
import Contact from '../components/layouts/contact';
// deploy ci/cd
export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificatesSection />
      <Contact />
    </div>
  );
}
