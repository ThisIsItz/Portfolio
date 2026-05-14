import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/contexts/ThemeContext'

interface ThemeToggleProps {
  className?: string
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
      className={cn(
        'group rounded-full p-2 transition-colors duration-300 focus:outline-hidden',
        className
      )}
    >
      {isDark ? (
        <Sun className="size-6 text-yellow-300 transition-transform duration-200 group-hover:scale-110" />
      ) : (
        <Moon className="size-6 text-blue-900 transition-transform duration-200 group-hover:scale-110" />
      )}
    </button>
  )
}
