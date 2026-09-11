import { ArrowDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export const HeroSection = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const handleScroll = () => {
      setVisible(false)
      clearTimeout(timeout)
      timeout = setTimeout(() => setVisible(true), 800)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pb-24"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className=" text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>{' '}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Itziar
            </span>{' '}
            <span className="opacity-0 animate-fade-in-delay-2">Urbieta</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Frontend Engineer building clean, scalable interfaces for complex
            products.
          </p>

          <div className="opacity-0 animate-fade-in-delay-4">
            <a href="#work" className="brand-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce motion-reduce:animate-none transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        <span className="text-small text-muted-foreground mb-2"> Scroll</span>
        <ArrowDown className="size-5 text-primary" />
      </div>
    </section>
  )
}
