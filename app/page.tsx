import HomeSection from '../components/sections/home-sections';
import AboutSection from '../components/sections/about-sections';
import SkillsSection from '../components/sections/skills-sections';
import ProjectsSection from '../components/sections/projects-sections';
import ExperienceSection from '../components/sections/experiences-sections';
import CertificatesSection from '../components/sections/certificates-sections';
import Contact from '../components/layouts/contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-200 via-blue-300 to-purple-400 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors">
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
