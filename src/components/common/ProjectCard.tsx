import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ProjectCardProps {
  name: string
  description: string
  image: string
  imageClassName?: string
  imageHeightClassName?: string
  imageFramed?: boolean
  imageHoverScaleClassName?: string
  url: string
  isInternalLink?: boolean
  linkAriaLabel: string
  tags: string[]
}

const linkClassName =
  'text-foreground/80 hover:text-primary transition-colors duration-300'

export const ProjectCard = ({
  name,
  description,
  image,
  imageClassName,
  imageHeightClassName = 'h-48',
  imageFramed = false,
  imageHoverScaleClassName,
  url,
  isInternalLink = false,
  linkAriaLabel,
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
          {isInternalLink ? (
            <Link
              to={url}
              aria-label={linkAriaLabel}
              className={linkClassName}
            >
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          ) : (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={linkAriaLabel}
              className={linkClassName}
            >
              <ExternalLink size={20} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
