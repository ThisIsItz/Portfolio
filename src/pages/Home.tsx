import { HeroSection } from '@/components/sections/HeroSection'
import { Navbar } from '@/components/common/Navbar'
import { StarBackground } from '@/components/common/StarBackground'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillSection } from '@/components/sections/SkillSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/common/Footer'

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
