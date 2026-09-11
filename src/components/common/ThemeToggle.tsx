import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/hooks/use-theme'

interface ThemeToggleProps {
  className?: string
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { isDark, toggleTheme } = useTheme()
  const [showAttractor, setShowAttractor] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return localStorage.getItem('theme-toggle-engaged') !== 'true'
  })

  const handleToggle = () => {
    toggleTheme()

    if (!showAttractor || typeof window === 'undefined') {
      return
    }

    localStorage.setItem('theme-toggle-engaged', 'true')
    setShowAttractor(false)
  }

  return (
    <button
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={handleToggle}
      className={cn(
        'group relative isolate rounded-full p-2 transition-all duration-300 focus-ring',
        showAttractor &&
          'motion-safe:animate-[theme-nudge_2.8s_ease-in-out_infinite] motion-reduce:animate-none',
        className
      )}
    >
      {showAttractor && (
        <>
          <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/25 motion-safe:animate-ping" />
          <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/20 motion-safe:animate-ping [animation-delay:450ms]" />
        </>
      )}

      {isDark ? (
        <Sun className="size-6 text-yellow-300 transition-transform duration-200 group-hover:scale-110" />
      ) : (
        <Moon className="size-6 text-blue-900 transition-transform duration-200 group-hover:scale-110" />
      )}
    </button>
  )
}
