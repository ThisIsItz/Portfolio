import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  name: string
  description: string
  image: string
  imageClassName?: string
  imageHeightClassName?: string
  url: string
  linkAriaLabel: string
  tags: string[]
}

export const ProjectCard = ({
  name,
  description,
  image,
  imageClassName,
  imageHeightClassName = 'h-48',
  url,
  linkAriaLabel,
  tags
}: ProjectCardProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col">
      <div
        className={`${imageHeightClassName} overflow-hidden bg-secondary/30 border-b border-border`}
      >
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${imageClassName ?? ''}`}
        />
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-end mt-auto">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={linkAriaLabel}
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            <ExternalLink size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  )
}
