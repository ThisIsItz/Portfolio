import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ThemeToggle } from '@/components/common/ThemeToggle'

const renderThemeToggle = () =>
  render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  )

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  afterEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('starts in light mode and offers to switch to dark mode', () => {
    renderThemeToggle()

    expect(
      screen.getByRole('button', { name: /switch to dark mode/i })
    ).toBeInTheDocument()
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('switches to dark mode on click, updating the label and localStorage', async () => {
    const user = userEvent.setup()
    renderThemeToggle()

    await user.click(screen.getByRole('button', { name: /switch to dark mode/i }))

    expect(
      screen.getByRole('button', { name: /switch to light mode/i })
    ).toBeInTheDocument()
    expect(document.documentElement).toHaveClass('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
  })

  it('switches back to light mode on a second click', async () => {
    const user = userEvent.setup()
    renderThemeToggle()

    const button = screen.getByRole('button', { name: /switch to dark mode/i })
    await user.click(button)
    await user.click(screen.getByRole('button', { name: /switch to light mode/i }))

    expect(
      screen.getByRole('button', { name: /switch to dark mode/i })
    ).toBeInTheDocument()
    expect(document.documentElement).not.toHaveClass('dark')
    expect(localStorage.getItem('theme')).toBe('light')
  })
})
