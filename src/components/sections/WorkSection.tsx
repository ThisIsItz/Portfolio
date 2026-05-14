import { ArrowRight, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'

interface Project {
  id: number
  name: string
  description: string
  image: string
  imageClassName?: string
  url: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Shed Suite',
    description:
      'Description of Shed Suite, a project management tool for software teams.',
    image: 'projects/shedsuite.png',
    imageClassName: 'scale-125 group-hover:scale-135 object-center',
    url: 'https://shedsuite.com',
    tags: ['React', 'TypeScript', 'GraphQL', 'Go', 'PostgreSQL']
  },
  {
    id: 4,
    name: 'Layer Z',
    description: 'Description of Layer Z.',
    image: 'projects/layerz.jpeg',
    url: 'https://layerz.com/',
    tags: ['Vue', 'TypeScript']
  },
  {
    id: 2,
    name: 'Alitu',
    description: 'Description of Alitu, a podcast editing and production tool.',
    image: 'projects/alitu.jpg',
    url: 'https://alitu.com',
    tags: ['React', 'TypeScript', 'GraphQL', 'Apollo', 'PostgreSQL']
  },
  {
    id: 3,
    name: 'Clubview',
    description:
      'Description of Clubview, a social networking platform for clubs and organizations.',
    image: 'projects/clubview.jpg',
    url: 'https://clubview.io',
    tags: ['React', 'TypeScript', 'Node.js']
  }
]

export const WorkSection = () => {
  return (
    <section id="work" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading prefix="Selected" highlight="Work" className="mb-4" />

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of commercial products I’ve contributed to, with a focus
          on clean, scalable interfaces, attention to detail, performance, and
          user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${project.imageClassName ?? ''}`}
                />
              </div>

              <div className="p-6 ">
                <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 ">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary/20 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <a
                    href={project.url}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="brand-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ThisIsItz"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
