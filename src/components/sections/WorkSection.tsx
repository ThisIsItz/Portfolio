import { ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ProjectCard } from '@/components/common/ProjectCard'

interface Project {
  name: string
  description: string
  image: string
  imageClassName?: string
  url: string
  tags: string[]
}

const projects: Project[] = [
  {
    name: 'Shed Suite',
    description:
      'Built admin dashboards, internal tools, complex tables, filters, and frontend/backend integrations for a business management platform whose customers have sold over 250,000 sheds worth $1.7B.',
    image: 'projects/shedsuite.png',
    imageClassName: 'scale-125 group-hover:scale-135 object-center',
    url: 'https://shedsuite.com',
    tags: ['React', 'TypeScript', 'TanStack Query', 'Go', 'PostgreSQL']
  },
  {
    name: 'Layer Z',
    description:
      'Helped build the MVP from 0 to first release, creating dashboard interfaces and no-code overlay configuration tools that drove around 20% higher engagement in early deployments.',
    image: 'projects/layerz.jpeg',
    url: 'https://layerz.com/',
    tags: ['Vue', 'TypeScript']
  },
  {
    name: 'Alitu',
    description:
      'Built frontend features, improved podcast editing workflows, and collaborated on a major UI overhaul for a platform used to launch over 10,000 podcasts.',
    image: 'projects/alitu.jpg',
    url: 'https://alitu.com',
    tags: ['React', 'TypeScript', 'GraphQL', 'Apollo', 'PostgreSQL']
  },
  {
    name: 'Clubview',
    description:
      'Built financial analytics and benchmarking dashboards used by all 72 English Football League clubs.',
    image: 'projects/clubview.jpg',
    url: 'https://clubview.io',
    tags: ['React', 'TypeScript', 'Node.js']
  }
]

export const WorkSection = () => {
  return (
    <section id="work" className="pt-24 pb-12 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading prefix="Selected" highlight="Work" className="mb-4" />

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of commercial products I’ve contributed to, with a focus
          on clean, scalable interfaces, attention to detail, performance, and
          user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              name={project.name}
              description={project.description}
              image={project.image}
              imageClassName={project.imageClassName}
              links={[
                {
                  href: project.url,
                  ariaLabel: `Visit ${project.name} (opens in a new tab)`,
                  icon: <ExternalLink size={20} aria-hidden="true" />
                }
              ]}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
