import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/common/Footer'

describe('Footer', () => {
  it('shows the current year in the copyright line', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
  })

  it('links back to the top of the page', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: /back to top/i })
    expect(link).toHaveAttribute('href', '#hero')
  })
})
