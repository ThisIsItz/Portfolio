import type { ReactNode } from 'react'

export interface ProjectLink {
  href: string
  ariaLabel: string
  icon: ReactNode
}

interface ProjectCardProps {
  name: string
  description: string
  image: string
  imageClassName?: string
  imageHeightClassName?: string
  imageFramed?: boolean
  imageHoverScaleClassName?: string
  badge?: string
  links: ProjectLink[]
  tags: string[]
}

export const ProjectCard = ({
  name,
  description,
  image,
  imageClassName,
  imageHeightClassName = 'h-48',
  imageFramed = false,
  imageHoverScaleClassName,
  badge,
  links,
  tags
}: ProjectCardProps) => {
  const hoverScale =
    imageHoverScaleClassName ??
    (imageFramed ? 'group-hover:scale-105' : 'group-hover:scale-110')

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col">
      <div
        className={`${imageHeightClassName} overflow-hidden border-b border-border ${imageFramed ? 'bg-white p-4' : 'bg-secondary/30'}`}
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className={`w-full h-full transition-transform duration-500 ${imageFramed ? 'object-contain' : 'object-cover'} ${hoverScale} ${imageClassName ?? ''}`}
        />
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="text-xl font-semibold">{name}</h3>
          {badge && (
            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary">
              {badge}
            </span>
          )}
        </div>
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
        <div className="flex justify-end gap-4 mt-auto">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              title={link.ariaLabel}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
