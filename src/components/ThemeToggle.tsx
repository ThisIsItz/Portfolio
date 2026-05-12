import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
    document.documentElement.classList.toggle('dark')
  }
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? (
        <Sun className="size-6 text-yellow-300" />
      ) : (
        <Moon className="size-6 text-blue-900" />
      )}
    </button>
  )
}
