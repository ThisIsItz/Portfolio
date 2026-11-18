import {
  Ban,
  Camera,
  Dices,
  Palette,
  PencilLine,
  ScanBarcode,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  type LucideIcon
} from 'lucide-react'

export type TbrLocale = 'en' | 'es'

export const TBR_LOCALES: TbrLocale[] = ['en', 'es']

export const TBR_PATH_BY_LOCALE: Record<TbrLocale, string> = {
  en: '/tbr',
  es: '/tbr/es'
}

const GOOGLE_PLAY_BASE_URL =
  'https://play.google.com/store/apps/details?id=dev.itziar.tbr'

export interface TbrFeature {
  icon: LucideIcon
  title: string
  description: string
}

interface Screenshot {
  src: string
  alt: string
}

export interface TbrContent {
  pageTitle: string
  languageName: string
  googlePlayUrl: string
  skipToContent: string
  iconAlt: string
  tagline: string
  label: string
  playBadgeTop: string
  playAriaLabel: string
  availability: string
  screenshotsHeading: string
  screenshots: Screenshot[]
  featuresTitle: string
  features: TbrFeature[]
  pricingTitle: string
  freeTitle: string
  freeSubtitle: string
  freeFeatures: string[]
  proTitle: string
  proBadge: string
  proSubtitle: string
  proFeatures: TbrFeature[]
  privacyTitle: string
  privacyBody: string
  privacyLink: string
  opensInNewTab: string
  madeWith: string
  love: string
  by: string
}

export const TBR_CONTENT: Record<TbrLocale, TbrContent> = {
  en: {
    pageTitle: 'TBR: Your To-Be-Read List | Itziar Urbieta',
    languageName: 'English',
    googlePlayUrl: GOOGLE_PLAY_BASE_URL,
    skipToContent: 'Skip to content',
    iconAlt: 'TBR app icon',
    label: 'For book lovers',
    tagline: 'Never lose track of a book you want to read.',
    playBadgeTop: 'Get it on',
    playAriaLabel: 'Get TBR on Google Play (opens in a new tab)',
    availability: 'Free · No ads · Pro is a one-time purchase',
    screenshotsHeading: 'Screenshots',
    screenshots: [
      {
        src: '/tbr/library.jpg',
        alt: 'My TBR screen listing saved books with search, filters and sorting'
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
    ],
    featuresTitle: 'Everything your TBR needs',
    features: [
      {
        icon: Search,
        title: 'Find any book',
        description:
          'Type a title or an author and add it to your list instantly.'
      },
      {
        icon: ScanBarcode,
        title: 'Scan the barcode',
        description:
          "Point your camera at the back of a book and it's on your list in seconds."
      },
      {
        icon: PencilLine,
        title: 'Add it by hand',
        description:
          "Can't find it? Enter the details yourself, with your own cover photo, genres and notes."
      },
      {
        icon: SlidersHorizontal,
        title: 'Find the right book',
        description:
          'Filter by any mix of genre, author, language and length, and choose how to see your list: cards, list or grid.'
      },
      {
        icon: ShoppingCart,
        title: 'Store links',
        description:
          'Ready to read it? Find it at your favorite online store without searching for it.'
      },
      {
        icon: Ban,
        title: 'No ads, no account',
        description:
          'No ads interrupting you and no sign-up. Your books stay on your phone.'
      }
    ],
    pricingTitle: 'Free, with an optional Pro',
    freeTitle: 'Free',
    freeSubtitle: 'Everything you need to keep your list.',
    freeFeatures: [
      'Unlimited books in your list',
      'No ads',
      'Search by title or author',
      'ISBN barcode scanning',
      'Manual add with your own cover',
      'Filters, sorting and three views',
      'Notes, genres and store links',
      'Light and dark mode, English and Spanish',
      'Backup and restore'
    ],
    proTitle: 'Pro',
    proBadge: 'One-time',
    proSubtitle: 'No subscription. Unlocks for good:',
    proFeatures: [
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
          "Can't decide what to read next? Spin the wheel with the books on your list, with filters if you like, and let chance choose."
      },
      {
        icon: Palette,
        title: 'Color themes',
        description:
          'Pick from five colors for the app, in both light and dark mode.'
      }
    ],
    privacyTitle: 'Your books, your phone',
    privacyBody:
      "TBR doesn't ask you to sign up. Your list lives on your device, not in an account. Read the privacy policy to see exactly what the app shares and why.",
    privacyLink: 'Privacy policy',
    opensInNewTab: '(opens in a new tab)',
    madeWith: 'Made with',
    love: 'love',
    by: 'by'
  },
  es: {
    pageTitle: 'TBR: tu lista de libros pendientes | Itziar Urbieta',
    languageName: 'Español',
    googlePlayUrl: `${GOOGLE_PLAY_BASE_URL}&hl=es`,
    skipToContent: 'Saltar al contenido',
    iconAlt: 'Icono de la app TBR',
    label: 'Para amantes de los libros',
    tagline: 'Que no se te escape ningún libro que quieras leer.',
    playBadgeTop: 'Disponible en',
    playAriaLabel: 'Descarga TBR en Google Play (se abre en una pestaña nueva)',
    availability: 'Gratis · Sin anuncios · Pro es un pago único',
    screenshotsHeading: 'Capturas de pantalla',
    screenshots: [
      {
        src: '/tbr/es/library.jpg',
        alt: 'Pantalla Mi TBR con la lista de libros guardados, búsqueda, filtros y orden'
      },
      {
        src: '/tbr/es/search.jpg',
        alt: 'Resultados de búsqueda de Sarah J. Maas con un botón Añadir en cada libro'
      },
      {
        src: '/tbr/es/spin.jpg',
        alt: 'Selector de libros girando entre portadas para elegir un libro al azar'
      },
      {
        src: '/tbr/es/details.jpg',
        alt: 'Ficha de un libro con portada, descripción, géneros y notas personales'
      }
    ],
    featuresTitle: 'Todo lo que tu TBR necesita',
    features: [
      {
        icon: Search,
        title: 'Encuentra cualquier libro',
        description:
          'Escribe un título o un autor y añádelo a tu lista al momento.'
      },
      {
        icon: ScanBarcode,
        title: 'Escanea el código de barras',
        description:
          'Apunta la cámara a la contraportada y en segundos estará en tu lista.'
      },
      {
        icon: PencilLine,
        title: 'Añádelo a mano',
        description:
          '¿No lo encuentras? Escribe tú los datos, con tu propia foto de portada, géneros y notas.'
      },
      {
        icon: SlidersHorizontal,
        title: 'Da con el libro perfecto',
        description:
          'Filtra por género, autor, idioma y/o extensión, y elige cómo ver tu lista: en tarjetas, en lista o en cuadrícula.'
      },
      {
        icon: ShoppingCart,
        title: 'Enlace a la tienda',
        description:
          '¿Te apetece leerlo ya? Encuéntralo en tu tienda online favorita sin tener que buscarlo.'
      },
      {
        icon: Ban,
        title: 'Sin anuncios ni cuentas',
        description:
          'Sin anuncios que te interrumpan y sin registros. Tus libros se quedan en tu móvil.'
      }
    ],
    pricingTitle: 'Gratis, con un Pro opcional',
    freeTitle: 'Gratis',
    freeSubtitle: 'Todo lo que necesitas para llevar tu lista.',
    freeFeatures: [
      'Libros ilimitados en tu lista',
      'Sin anuncios',
      'Búsqueda por título o autor',
      'Escáner del código de barras (ISBN)',
      'Añadir a mano con tu propia portada',
      'Filtros, orden y tres vistas',
      'Notas, géneros y enlaces a tiendas',
      'Modo claro y oscuro, en español e inglés',
      'Copia de seguridad y restauración'
    ],
    proTitle: 'Pro',
    proBadge: 'Pago único',
    proSubtitle: 'Sin suscripción. Lo desbloqueas para siempre:',
    proFeatures: [
      {
        icon: Camera,
        title: 'Añade un libro desde su portada',
        description:
          'Haz una foto de la portada o elige una de tu galería. TBR reconoce el libro y rellena el título, el autor y los detalles por ti.'
      },
      {
        icon: Dices,
        title: 'Selector de libros',
        description:
          '¿No sabes qué leer ahora? Haz girar la ruleta con los libros de tu lista, con filtros si quieres, y deja que el azar elija.'
      },
      {
        icon: Palette,
        title: 'Temas de color',
        description:
          'Elige entre cinco colores para la app, en modo claro y oscuro.'
      }
    ],
    privacyTitle: 'Tus libros, en tu móvil',
    privacyBody:
      'TBR no te pide que te registres. Tu lista vive en tu dispositivo, no en una cuenta. Lee la política de privacidad para ver exactamente qué comparte la app y por qué.',
    privacyLink: 'Política de privacidad',
    opensInNewTab: '(se abre en una pestaña nueva)',
    madeWith: 'Hecho con',
    love: 'amor',
    by: 'por'
  }
}
