import { HeroSection } from '@/components/sections/HeroSection'
import { AppBackground } from '@/components/common/AppBackground'
import { Navbar } from '@/components/common/Navbar'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillSection } from '@/components/sections/SkillSection'
import { WorkSection } from '@/components/sections/WorkSection'
import { AppsSection } from '@/components/sections/AppsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/common/Footer'

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:rounded-md focus:bg-primary focus:text-primary-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Skip to content
      </a>
      <AppBackground />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="focus:outline-hidden">
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <WorkSection />
        <AppsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
