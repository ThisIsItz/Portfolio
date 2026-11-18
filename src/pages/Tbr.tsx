import { useEffect, type ReactNode } from 'react'
import {
  Ban,
  Camera,
  Check,
  Dices,
  Heart,
  Palette,
  PencilLine,
  ScanBarcode,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  type LucideIcon
} from 'lucide-react'
import { FaGooglePlay } from 'react-icons/fa'
import '@/styles/tbr.css'

export const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=dev.itziar.tbr'
export const PRIVACY_POLICY_URL =
  'https://itziarurbieta.notion.site/Privacy-Policy-TBR-3ce1096e5d548048a7f6e46044906eb8'

// Absolute so the credit link still works if this page is served on its own.
const PORTFOLIO_URL = 'https://itziarurbieta.dev'
const PAGE_TITLE = 'TBR: Your To-Be-Read List | Itziar Urbieta'
const FRAUNCES_STYLESHEET =
  'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&display=swap'

interface Screenshot {
  src: string
  alt: string
}

const screenshots: Screenshot[] = [
  {
    src: '/tbr/library.jpg',
    alt: 'My TBR library screen listing saved books with search, filters and sorting'
  },
  {
    src: '/tbr/search.jpg',
    alt: 'Search results for Sarah J. Maas with an Add button on each book'
  },
  {
    src: '/tbr/spin.jpg',
    alt: 'Book Picker spinning through covers to pick a random book'
  },
  {
    src: '/tbr/details.jpg',
    alt: 'Book details screen with cover, description, genres and personal notes'
  }
]

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Search,
    title: 'Find any book',
    description:
      'Type a title or an author and add it to your list in one tap.'
  },
  {
    icon: ScanBarcode,
    title: 'Scan the barcode',
    description:
      "Point your camera at the back of a book and it's on your list in seconds."
  },
  {
    icon: PencilLine,
    title: 'Add it your way',
    description:
      "Can't find it? Add it by hand, with your own cover photo, genres and notes."
  },
  {
    icon: SlidersHorizontal,
    title: 'Find the right book',
    description:
      'Filter by genre, author, language or length, and view your list as cards, a list or a grid.'
  },
  {
    icon: ShoppingCart,
    title: 'Buy it in a tap',
    description:
      'Ready to read it? Open it in your favorite bookshop, picked for your country.'
  },
  {
    icon: Ban,
    title: 'No ads, no account',
    description:
      'Nothing gets in the way of your list. No sign-up, and your books stay on your phone.'
  }
]

const freeFeatures = [
  'Unlimited books in your list',
  'No ads',
  'Search by title or author',
  'ISBN barcode scanning',
  'Manual add with your own cover',
  'Filters, sorting and three views',
  'Notes, genres and store links',
  'Light and dark mode, English and Spanish',
  'Backup and restore'
]

const proFeatures: Feature[] = [
  {
    icon: Camera,
    title: 'Add a book from its cover',
    description:
      "Take a photo of a book's cover, or pick one from your gallery. TBR recognizes the book and fills in the title, author and details for you."
  },
  {
    icon: Dices,
    title: 'Book Picker',
    description:
      "Can't decide what to read next? Spin through your list, with filters if you like, and let chance choose."
  },
  {
    icon: Palette,
    title: 'Color themes',
    description:
      'Pick from five colors for the app, in both light and dark mode.'
  }
]

const GooglePlayButton = () => (
  <a
    href={GOOGLE_PLAY_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Get TBR on Google Play (opens in a new tab)"
    className="inline-flex items-center gap-3 rounded-full bg-[var(--tbr-green)] px-6 py-3 text-white transition-transform duration-300 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--tbr-green)]"
  >
    <FaGooglePlay className="size-5" aria-hidden="true" />
    <span className="text-left leading-tight">
      <span className="block text-xs opacity-85">Get it on</span>
      <span className="block text-base font-semibold">Google Play</span>
    </span>
  </a>
)

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="tbr-display mb-12 text-center text-3xl font-bold text-[var(--tbr-green-deep)] md:text-4xl">
    {children}
  </h2>
)

export const Tbr = () => {
  useEffect(() => {
    const previousTitle = document.title
    document.title = PAGE_TITLE
    window.scrollTo(0, 0)
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <div className="tbr-page min-h-screen overflow-x-hidden">
      <link rel="stylesheet" href={FRAUNCES_STYLESHEET} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-[var(--tbr-green)] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <main id="main-content" tabIndex={-1} className="focus:outline-hidden">
        <section id="hero" className="px-4 pt-20 pb-20">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <img
              src="/tbr/icon.png"
              alt="TBR app icon"
              width={112}
              height={112}
              className="mx-auto size-28 rounded-3xl border border-[var(--tbr-border)] opacity-0 animate-fade-in"
            />
            <h1 className="tbr-display text-7xl font-bold text-[var(--tbr-green-deep)] md:text-8xl opacity-0 animate-fade-in-delay-1">
              TBR
            </h1>
            <p className="text-sm font-semibold tracking-[0.2em] text-[var(--tbr-green)] uppercase opacity-0 animate-fade-in-delay-1">
              For book lovers
            </p>
            <p className="tbr-display mx-auto max-w-xl text-balance text-2xl font-semibold md:text-3xl opacity-0 animate-fade-in-delay-2">
              Never lose track of a book you want to read.
            </p>
            <div className="flex flex-col items-center gap-3 pt-2 opacity-0 animate-fade-in-delay-3">
              <GooglePlayButton />
              <p className="text-sm text-[var(--tbr-muted)]">
                Free · No ads · Pro is a one-time purchase
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="screenshots-heading" className="px-4 pb-24">
          <div className="mx-auto max-w-5xl">
            <h2 id="screenshots-heading" className="sr-only">
              Screenshots
            </h2>
            <ul className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
              {screenshots.map((screenshot) => (
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
            <SectionTitle>Everything your TBR needs</SectionTitle>
            <ul className="grid grid-cols-1 gap-5 text-left md:grid-cols-2">
              {features.map(({ icon: Icon, title, description }) => (
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
            <SectionTitle>Free, with an optional Pro</SectionTitle>
            <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2">
              <div className="rounded-2xl border border-[var(--tbr-border)] bg-[var(--tbr-surface)] p-8">
                <h3 className="tbr-display mb-1 text-2xl font-bold">Free</h3>
                <p className="mb-6 text-[var(--tbr-muted)]">
                  Everything you need to keep your list.
                </p>
                <ul className="space-y-3">
                  {freeFeatures.map((feature) => (
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
                  <h3 className="tbr-display text-2xl font-bold">Pro</h3>
                  <span className="rounded-full bg-[var(--tbr-green-soft)] px-2.5 py-0.5 text-xs font-bold tracking-wide text-[var(--tbr-green-deep)]">
                    ONE-TIME
                  </span>
                </div>
                <p className="mb-6 text-[var(--tbr-muted)]">
                  No subscription. Unlocks for good:
                </p>
                <ul className="space-y-6">
                  {proFeatures.map(({ icon: Icon, title, description }) => (
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
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="privacy" className="px-4 py-20">
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <h2 className="tbr-display text-3xl font-bold text-[var(--tbr-green-deep)] md:text-4xl">
              Your books, your phone
            </h2>
            <p className="text-[var(--tbr-muted)]">
              TBR doesn't ask you to sign up. Your list lives on your device,
              not in an account. Read the privacy policy to see exactly what
              the app shares and why.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GooglePlayButton />
              <a
                href={PRIVACY_POLICY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-[var(--tbr-green)] px-6 py-3 font-semibold text-[var(--tbr-green)] transition-colors hover:bg-[var(--tbr-green-soft)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--tbr-green)]"
              >
                Privacy policy
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--tbr-border)] px-4 py-8 text-center">
        <p className="text-sm text-[var(--tbr-muted)]">
          Made with{' '}
          <Heart
            className="inline size-4 -translate-y-px fill-[var(--tbr-green)] text-[var(--tbr-green)]"
            aria-label="love"
          />{' '}
          by{' '}
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
