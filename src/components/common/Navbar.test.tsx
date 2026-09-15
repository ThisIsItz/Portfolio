import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Navbar } from '@/components/common/Navbar'

const renderNavbar = () =>
  render(
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  )

describe('Navbar', () => {
  it('starts with the mobile menu closed', () => {
    renderNavbar()

    const menuButton = screen.getByRole('button', { name: /open menu/i })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('mobile-menu')).toHaveAttribute(
      'aria-hidden',
      'true'
    )
  })

  it('opens the mobile menu on click and exposes it to assistive tech', async () => {
    const user = userEvent.setup()
    renderNavbar()

    await user.click(screen.getByRole('button', { name: /open menu/i }))

    expect(
      screen.getByRole('button', { name: /close menu/i })
    ).toHaveAttribute('aria-expanded', 'true')
    expect(document.getElementById('mobile-menu')).toHaveAttribute(
      'aria-hidden',
      'false'
    )
  })
})
