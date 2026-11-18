import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { GOOGLE_PLAY_URL, PRIVACY_POLICY_URL, Tbr } from '@/pages/Tbr'

const renderTbr = () =>
  render(
    <ThemeProvider>
      <Tbr />
    </ThemeProvider>
  )

describe('Tbr', () => {
  it('links to the app on Google Play in a new tab', () => {
    renderTbr()

    const playLinks = screen.getAllByRole('link', {
      name: /get tbr on google play/i
    })
    expect(playLinks.length).toBeGreaterThan(0)
    for (const link of playLinks) {
      expect(link).toHaveAttribute('href', GOOGLE_PLAY_URL)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })

  it('links to the privacy policy', () => {
    renderTbr()

    expect(
      screen.getByRole('link', { name: /privacy policy/i })
    ).toHaveAttribute('href', PRIVACY_POLICY_URL)
  })

  it('sets a page title for the app', () => {
    renderTbr()

    expect(document.title).toMatch(/^TBR/)
  })

  it('credits the author with a link to the portfolio', () => {
    renderTbr()

    expect(
      screen.getByRole('link', { name: 'Itziar Urbieta' })
    ).toHaveAttribute('href', 'https://itziarurbieta.dev')
  })
})
