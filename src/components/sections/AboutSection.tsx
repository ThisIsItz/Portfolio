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
              Senior Frontend Engineer focused on real impact
            </h3>
            <p className="text-muted-foreground">
              I'm a Frontend Engineer with 7+ years of experience shipping
              React and TypeScript products for growing SaaS companies, from a
              platform behind $1.7B in sales to dashboards used by every club
              in the English Football League.
            </p>

            <p className="text-muted-foreground">
              I originally trained in veterinary medicine before moving into
              software, and that background still shows in how I work:
              careful, detail oriented, and comfortable owning a problem from
              requirements through to release. These days I build faster with
              AI coding tools like Claude Code and GitHub Copilot, while
              keeping ownership of the decisions that actually matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="brand-button">
                Get In Touch
              </a>
              <a
                href={cvPdf}
                download
                className="font-grotesk flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
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
