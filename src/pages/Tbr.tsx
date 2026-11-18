import { useEffect, type ReactNode } from 'react'
import { Check, Heart } from 'lucide-react'
import { FaGooglePlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {
  TBR_CONTENT,
  TBR_LOCALES,
  TBR_PATH_BY_LOCALE,
  type TbrContent,
  type TbrLocale
} from '@/pages/tbrContent'
import '@/styles/tbr.css'

export const PRIVACY_POLICY_URL =
  'https://itziarurbieta.notion.site/Privacy-Policy-TBR-3ce1096e5d548048a7f6e46044906eb8'

// Absolute so these links still work if this page is served on its own.
const PORTFOLIO_URL = 'https://itziarurbieta.dev'
const FRAUNCES_STYLESHEET =
  'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&display=swap'

const usePageMetadata = (locale: TbrLocale, content: TbrContent) => {
  useEffect(() => {
    const root = document.documentElement
    const previousTitle = document.title
    const previousLang = root.lang
    document.title = content.pageTitle
    root.lang = locale

    const alternateLinks = TBR_LOCALES.map((alternateLocale) => {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hreflang = alternateLocale
      link.href = `${PORTFOLIO_URL}${TBR_PATH_BY_LOCALE[alternateLocale]}`
      document.head.appendChild(link)
      return link
    })

    return () => {
      document.title = previousTitle
      root.lang = previousLang
      alternateLinks.forEach((link) => link.remove())
    }
  }, [locale, content.pageTitle])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [locale])
}

const GooglePlayButton = ({ content }: { content: TbrContent }) => (
  <a
    href={content.googlePlayUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={content.playAriaLabel}
    className="inline-flex items-center gap-3 rounded-full bg-[var(--tbr-green)] px-6 py-3 text-white transition-transform duration-300 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--tbr-green)]"
  >
    <FaGooglePlay className="size-5" aria-hidden="true" />
    <span className="text-left leading-tight">
      <span className="block text-[0.65rem] font-medium tracking-wide uppercase opacity-85">
        {content.playBadgeTop}
      </span>
      <span className="block text-base font-semibold tracking-wide">
        Google Play
      </span>
    </span>
  </a>
)

const LanguageSwitcher = ({ locale }: { locale: TbrLocale }) => (
  <nav aria-label="Language" className="flex justify-end gap-1 text-sm">
    {TBR_LOCALES.map((option) => {
      const isCurrent = option === locale
      return (
        <Link
          key={option}
          to={TBR_PATH_BY_LOCALE[option]}
          hrefLang={option}
          lang={option}
          aria-current={isCurrent ? 'page' : undefined}
          aria-label={TBR_CONTENT[option].languageName}
          className={`rounded-full px-2.5 py-1 font-semibold uppercase transition-colors focus-visible:outline-2 focus-visible:outline-[var(--tbr-green)] ${
            isCurrent
              ? 'bg-[var(--tbr-green-soft)] text-[var(--tbr-green-deep)]'
              : 'text-[var(--tbr-muted)] hover:text-[var(--tbr-green)]'
          }`}
        >
          {option}
        </Link>
      )
    })}
  </nav>
)

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="tbr-display mb-12 text-center text-3xl font-bold text-[var(--tbr-green-deep)] md:text-4xl">
    {children}
  </h2>
)

export const Tbr = ({ locale = 'en' }: { locale?: TbrLocale }) => {
  const content = TBR_CONTENT[locale]
  usePageMetadata(locale, content)

  return (
    <div className="tbr-page min-h-screen overflow-x-hidden">
      <link rel="stylesheet" href={FRAUNCES_STYLESHEET} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-[var(--tbr-green)] focus:px-4 focus:py-2 focus:text-white"
      >
        {content.skipToContent}
      </a>

      <header className="px-4 pt-4">
        <LanguageSwitcher locale={locale} />
      </header>

      <main id="main-content" tabIndex={-1} className="focus:outline-hidden">
        <section id="hero" className="px-4 pt-10 pb-14">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <img
              src="/tbr/icon.png"
              alt={content.iconAlt}
              width={80}
              height={80}
              className="mx-auto size-20 rounded-2xl opacity-0 animate-fade-in"
            />
            <h1 className="tbr-display text-7xl font-bold text-[var(--tbr-green-deep)] md:text-8xl opacity-0 animate-fade-in-delay-1">
              TBR
            </h1>
            <p className="text-sm font-semibold tracking-[0.2em] text-[var(--tbr-green)] uppercase opacity-0 animate-fade-in-delay-1">
              {content.label}
            </p>
            <p className="tbr-display mx-auto max-w-3xl text-balance text-2xl font-semibold md:text-3xl opacity-0 animate-fade-in-delay-2">
              {content.tagline}
            </p>
            <div className="flex flex-col items-center gap-5 pt-4 opacity-0 animate-fade-in-delay-3">
              <GooglePlayButton content={content} />
              <p className="text-sm text-[var(--tbr-muted)]">
                {content.availability}
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="screenshots-heading" className="px-4 pb-24">
          <div className="mx-auto max-w-5xl">
            <h2 id="screenshots-heading" className="sr-only">
              {content.screenshotsHeading}
            </h2>
            <ul className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
              {content.screenshots.map((screenshot) => (
                <li key={screenshot.src}>
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    loading="lazy"
                    decoding="async"
                    width={621}
                    height={1104}
                    className="h-auto w-full rounded-2xl border border-[var(--tbr-border)]"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="features" className="px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionTitle>{content.featuresTitle}</SectionTitle>
            <ul className="grid grid-cols-1 gap-5 text-left md:grid-cols-2">
              {content.features.map(({ icon: Icon, title, description }) => (
                <li
                  key={title}
                  className="flex items-start gap-4 rounded-2xl border border-[var(--tbr-border)] bg-[var(--tbr-surface)] p-6"
                >
                  <span className="shrink-0 rounded-full bg-[var(--tbr-green-soft)] p-3">
                    <Icon
                      className="size-6 text-[var(--tbr-green-deep)]"
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <h3 className="tbr-display text-lg font-semibold">
                      {title}
                    </h3>
                    <p className="text-[var(--tbr-muted)]">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="pricing" className="px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionTitle>{content.pricingTitle}</SectionTitle>
            <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2">
              <div className="rounded-2xl border border-[var(--tbr-border)] bg-[var(--tbr-surface)] p-8">
                <h3 className="tbr-display mb-1 text-2xl font-bold">
                  {content.freeTitle}
                </h3>
                <p className="mb-6 text-[var(--tbr-muted)]">
                  {content.freeSubtitle}
                </p>
                <ul className="space-y-3">
                  {content.freeFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 size-5 shrink-0 text-[var(--tbr-green)]"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border-2 border-[var(--tbr-green)] bg-[var(--tbr-surface)] p-8">
                <div className="mb-1 flex items-center gap-3">
                  <h3 className="tbr-display text-2xl font-bold">
                    {content.proTitle}
                  </h3>
                  <span className="rounded-full bg-[var(--tbr-green-soft)] px-2.5 py-0.5 text-xs font-bold tracking-wide text-[var(--tbr-green-deep)] uppercase">
                    {content.proBadge}
                  </span>
                </div>
                <p className="mb-6 text-[var(--tbr-muted)]">
                  {content.proSubtitle}
                </p>
                <ul className="space-y-6">
                  {content.proFeatures.map(
                    ({ icon: Icon, title, description }) => (
                      <li key={title} className="flex items-start gap-4">
                        <span className="shrink-0 rounded-full bg-[var(--tbr-green-soft)] p-2.5">
                          <Icon
                            className="size-5 text-[var(--tbr-green-deep)]"
                            aria-hidden="true"
                          />
                        </span>
                        <div>
                          <h4 className="tbr-display font-semibold">{title}</h4>
                          <p className="text-sm text-[var(--tbr-muted)]">
                            {description}
                          </p>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="privacy" className="px-4 py-20">
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <h2 className="tbr-display text-3xl font-bold text-[var(--tbr-green-deep)] md:text-4xl">
              {content.privacyTitle}
            </h2>
            <p className="text-[var(--tbr-muted)]">{content.privacyBody}</p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GooglePlayButton content={content} />
              <a
                href={PRIVACY_POLICY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-[var(--tbr-green)] px-6 py-3 font-semibold text-[var(--tbr-green)] transition-colors hover:bg-[var(--tbr-green-soft)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--tbr-green)]"
              >
                {content.privacyLink}
                <span className="sr-only"> {content.opensInNewTab}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--tbr-border)] px-4 py-8 text-center">
        <p className="text-sm text-[var(--tbr-muted)]">
          {content.madeWith}{' '}
          <Heart
            className="inline size-4 -translate-y-px fill-[var(--tbr-green)] text-[var(--tbr-green)]"
            aria-label={content.love}
          />{' '}
          {content.by}{' '}
          <a
            href={PORTFOLIO_URL}
            className="font-semibold text-[var(--tbr-green)] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--tbr-green)]"
          >
            Itziar Urbieta
          </a>{' '}
          &middot; &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}
