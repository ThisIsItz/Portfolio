import { Briefcase, Code, Download, User } from 'lucide-react'
import cvPdf from '@/assets/Itziar-Urbieta-CV.pdf'
import { AboutFeatureCard } from '@/components/AboutFeatureCard'

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Frontend Developer and problem solver
            </h3>
            <p className="text-muted-foreground">
              I'm a Senior Frontend Engineer with 7+ years of experience
              building web applications, SaaS products, admin dashboards, and
              internal tools.
            </p>
            <p className="text-muted-foreground">
              I have a strong background in React, TypeScript, GraphQL, Next.js,
              and Go, with experience across data-heavy interfaces, complex
              tables, legacy migrations, and product-focused UI development.
            </p>
            <p className="text-muted-foreground">
              I'm experienced working remotely with US and UK teams in
              fast-moving product environments, and I'm always learning and
              improving how I build software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href={cvPdf}
                download
                className="flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                <Download className="size-4" />
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <AboutFeatureCard
              icon={Code}
              title="Web Development"
              description="Add some text here"
            />
            <AboutFeatureCard
              icon={User}
              title="User Experience"
              description="Add some text here"
            />
            <AboutFeatureCard
              icon={Briefcase}
              title="Project Management"
              description="Add some text here"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
