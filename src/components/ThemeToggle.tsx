import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <button
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setIsDarkMode((prev) => !prev)}
    >
      {isDarkMode ? (
        <Sun className="size-6 text-yellow-300" />
      ) : (
        <Moon className="size-6 text-blue-900" />
      )}
    </button>
  )
}
