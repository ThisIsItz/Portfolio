import { HeroSection } from '@/components/sections/HeroSection'
import { AppBackground } from '@/components/common/AppBackground'
import { Navbar } from '@/components/common/Navbar'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillSection } from '@/components/sections/SkillSection'
import { WorkSection } from '@/components/sections/WorkSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/common/Footer'

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AppBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
