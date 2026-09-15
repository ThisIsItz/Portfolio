import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectCard } from '@/components/common/ProjectCard'

const baseProps = {
  name: 'Anchor: Breathe',
  description: 'A simple breathing app.',
  image: 'apps/anchor.png',
  url: 'https://play.google.com/store/apps/details?id=dev.itziar.anchor',
  linkAriaLabel: 'View Anchor: Breathe on Google Play (opens in a new tab)',
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

    const link = screen.getByRole('link', { name: baseProps.linkAriaLabel })
    expect(link).toHaveAttribute('href', baseProps.url)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders every tag', () => {
    render(<ProjectCard {...baseProps} />)

    expect(screen.getByText('React Native')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })
})
