import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectCard } from '@/components/common/ProjectCard'

const baseProps = {
  name: 'Anchor: Breathe',
  description: 'A simple breathing app.',
  image: 'apps/anchor.png',
  links: [
    {
      href: 'https://play.google.com/store/apps/details?id=dev.itziar.anchor',
      ariaLabel: 'View Anchor: Breathe on Google Play (opens in a new tab)',
      icon: <span />
    }
  ],
  tags: ['React Native', 'TypeScript']
}

describe('ProjectCard', () => {
  it('crops the image with a bigger hover zoom by default', () => {
    render(<ProjectCard {...baseProps} />)

    const img = screen.getByRole('img', { name: baseProps.name })
    expect(img).toHaveClass('object-cover')
    expect(img).toHaveClass('group-hover:scale-110')
    expect(img).not.toHaveClass('object-contain')
  })

  it('shows the full image in a white frame with a smaller hover zoom when framed', () => {
    render(<ProjectCard {...baseProps} imageFramed />)

    const img = screen.getByRole('img', { name: baseProps.name })
    expect(img).toHaveClass('object-contain')
    expect(img).toHaveClass('group-hover:scale-105')
    expect(img).not.toHaveClass('object-cover')
  })

  it('lets an explicit hover scale override the framed/unframed default', () => {
    render(
      <ProjectCard
        {...baseProps}
        imageFramed
        imageHoverScaleClassName="group-hover:scale-100"
      />
    )

    const img = screen.getByRole('img', { name: baseProps.name })
    expect(img).toHaveClass('group-hover:scale-100')
    expect(img).not.toHaveClass('group-hover:scale-105')
  })

  it('renders an accessible external link with the right target and rel', () => {
    render(<ProjectCard {...baseProps} />)

    const [{ href, ariaLabel }] = baseProps.links
    const link = screen.getByRole('link', { name: ariaLabel })
    expect(link).toHaveAttribute('href', href)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders every tag', () => {
    render(<ProjectCard {...baseProps} />)

    expect(screen.getByText('React Native')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('renders every link, each opening in a new tab', () => {
    render(
      <ProjectCard
        {...baseProps}
        links={[
          { href: 'https://play.google.com/tbr', ariaLabel: 'Google Play', icon: <span /> },
          { href: '/tbr', ariaLabel: 'Website', icon: <span /> }
        ]}
      />
    )

    expect(screen.getByRole('link', { name: 'Google Play' })).toHaveAttribute('target', '_blank')
    expect(screen.getByRole('link', { name: 'Website' })).toHaveAttribute('href', '/tbr')
    expect(screen.getByRole('link', { name: 'Website' })).toHaveAttribute('target', '_blank')
  })

  it('shows the badge when given one', () => {
    render(<ProjectCard {...baseProps} badge="500+ downloads" />)

    expect(screen.getByText('500+ downloads')).toBeInTheDocument()
  })
})
