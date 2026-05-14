import { Briefcase, Code, Download, User } from 'lucide-react'
import cvPdf from '@/assets/Itziar-Urbieta-CV.pdf'
import { AboutFeatureCard } from '@/components/common/AboutFeatureCard'
import { SectionHeading } from '@/components/common/SectionHeading'

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading prefix="About" highlight="Me" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Frontend Developer and problem solver
            </h3>
            <p className="text-muted-foreground">
              I'm a Frontend Engineer with 7+ years of experience building SaaS
              products, admin dashboards, and internal tools while working with
              remote teams.
            </p>

            <p className="text-muted-foreground">
              I enjoy solving complex UI problems, improving user workflows, and
              building maintainable frontend applications in fast-moving product
              environments.
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
              title="Frontend Development"
              description="Building maintainable, user-facing features across modern SaaS products and internal platforms."
            />

            <AboutFeatureCard
              icon={Briefcase}
              title="Dashboards & Internal Tools"
              description="Experienced with data-heavy interfaces, complex tables, filters, admin workflows, and business tools."
            />

            <AboutFeatureCard
              icon={User}
              title="Product-Focused UI"
              description="Turning product requirements and user workflows into clear, practical, and easy-to-use interfaces."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
