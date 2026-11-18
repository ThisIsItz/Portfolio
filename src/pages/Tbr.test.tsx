import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { PRIVACY_POLICY_URL, Tbr } from '@/pages/Tbr'
import { TBR_CONTENT, type TbrLocale } from '@/pages/tbrContent'

const renderTbr = (locale: TbrLocale = 'en') =>
  render(
    <MemoryRouter>
      <Tbr locale={locale} />
    </MemoryRouter>
  )

describe('Tbr', () => {
  it('links to the app on Google Play in a new tab', () => {
    renderTbr()

    const playLinks = screen.getAllByRole('link', {
      name: /get tbr on google play/i
    })
    expect(playLinks.length).toBeGreaterThan(0)
    for (const link of playLinks) {
      expect(link).toHaveAttribute('href', TBR_CONTENT.en.googlePlayUrl)
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

  it('renders the Spanish version with a Spanish store link and page language', () => {
    renderTbr('es')

    expect(document.documentElement.lang).toBe('es')
    expect(
      screen.getAllByRole('link', { name: /descarga tbr en google play/i })[0]
    ).toHaveAttribute('href', TBR_CONTENT.es.googlePlayUrl)
    expect(TBR_CONTENT.es.googlePlayUrl).toContain('hl=es')
  })

  it('marks the current language in the switcher', () => {
    renderTbr('es')

    expect(screen.getByRole('link', { name: 'Español' })).toHaveAttribute(
      'aria-current',
      'page'
    )
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute(
      'href',
      '/tbr'
    )
  })

  it('declares both language versions for search engines', () => {
    renderTbr()

    const alternates = Array.from(
      document.head.querySelectorAll('link[rel="alternate"]')
    ).map((link) => link.getAttribute('hreflang'))
    expect(alternates).toEqual(['en', 'es'])
  })
})
