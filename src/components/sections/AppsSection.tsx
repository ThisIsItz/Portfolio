import { ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'

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
    imageClassName: 'object-top',
    url: 'https://play.google.com/store/apps/details?id=dev.itziar.fichapp',
    tags: ['React Native', 'TypeScript', 'Expo', 'Supabase']
  }
]

export const AppsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading prefix="Side" highlight="Projects" className="mb-4" />

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Personal apps I've designed, built, and published on my own, end to
          end.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, i) => (
            <div
              key={i}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-64 overflow-hidden bg-secondary/30">
                <img
                  src={app.image}
                  alt={app.name}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${app.imageClassName ?? ''}`}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{app.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {app.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {app.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${app.name} on Google Play (opens in a new tab)`}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
