import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ProjectCard } from '@/components/common/ProjectCard'

interface AppProject {
  name: string
  description: string
  image: string
  imageClassName?: string
  url: string
  tags: string[]
}

const apps: AppProject[] = [
  {
    name: 'Anchor: Breathe',
    description:
      'A simple breathing app designed to help you slow down and reconnect with the present moment.',
    image: 'apps/anchor.png',
    imageClassName: 'object-center',
    url: 'https://play.google.com/store/apps/details?id=dev.itziar.anchor',
    tags: ['React Native', 'TypeScript', 'Expo']
  },
  {
    name: 'FichApp',
    description:
      'A shift-tracking app for care work: clock in and out with one tap, review your full history, and share it with a family group.',
    image: 'apps/fichapp.png',
    imageClassName: 'object-center',
    url: 'https://play.google.com/store/apps/details?id=dev.itziar.fichapp',
    tags: ['React Native', 'TypeScript', 'Expo', 'Supabase']
  }
]

export const AppsSection = () => {
  return (
    <section id="projects" className="pt-12 pb-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading prefix="Side" highlight="Projects" className="mb-4" />

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Personal apps I've designed, built, and published on my own, end to
          end.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, i) => (
            <ProjectCard
              key={i}
              name={app.name}
              description={app.description}
              image={app.image}
              imageClassName={app.imageClassName}
              imageHeightClassName="h-64"
              url={app.url}
              linkAriaLabel={`View ${app.name} on Google Play (opens in a new tab)`}
              tags={app.tags}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="brand-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ThisIsItz"
          >
            Check My Github <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
