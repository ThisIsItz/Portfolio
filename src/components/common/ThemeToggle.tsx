import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/contexts/ThemeContext'

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
      className={cn(
        'fixed max-sm:hidden top-5 right-5 z-50 rounded-full p-2 transition-colors duration-300',
        'focus:outline-hidden'
      )}
    >
      {isDark ? (
        <Sun className="size-6 text-yellow-300" />
      ) : (
        <Moon className="size-6 text-blue-900" />
      )}
    </button>
  )
}
