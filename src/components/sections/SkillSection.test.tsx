import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SkillSection } from '@/components/sections/SkillSection'

describe('SkillSection', () => {
  it('shows every skill and marks "all" as the active filter by default', () => {
    render(<SkillSection />)

    expect(screen.getByRole('button', { name: 'all' })).toHaveAttribute(
      'aria-pressed',
      'true'
    )
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Go')).toBeInTheDocument()
    expect(screen.getByText('Cypress')).toBeInTheDocument()
  })

  it('filters skills by category and updates aria-pressed', async () => {
    const user = userEvent.setup()
    render(<SkillSection />)

    await user.click(screen.getByRole('button', { name: 'backend' }))

    expect(screen.getByRole('button', { name: 'backend' })).toHaveAttribute(
      'aria-pressed',
      'true'
    )
    expect(screen.getByRole('button', { name: 'all' })).toHaveAttribute(
      'aria-pressed',
      'false'
    )

    // backend skill is shown
    expect(screen.getByText('Go')).toBeInTheDocument()
    // frontend-only skill is no longer shown
    expect(screen.queryByText('React')).not.toBeInTheDocument()
  })
})
