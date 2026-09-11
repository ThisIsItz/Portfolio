import { ArrowLeft, Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@/contexts/ThemeContext'

export const NotFound = () => {
  const navigate = useNavigate()
  const { isDark } = useTheme()

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl animate-pulse motion-reduce:animate-none ${isDark ? 'bg-primary/20' : 'bg-primary/10'}`}
        />
        <div
          className={`absolute bottom-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse motion-reduce:animate-none animation-delay-2000 ${isDark ? 'bg-primary/15' : 'bg-primary/5'}`}
        />
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-2xl mx-auto">
        <div className="space-y-4">
          <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent animate-fade-in">
            404
          </div>
          <h1 className="text-4xl md:text-5xl font-bold opacity-0 animate-fade-in-delay-1">
            Page Not Found
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto opacity-0 animate-fade-in-delay-2">
            Looks like this page took a wrong turn. Don't worry, I'll help you
            find your way back.
          </p>
        </div>
        <div className="flex justify-center opacity-0 animate-fade-in-delay-3">
          <button
            onClick={() => navigate('/')}
            className="brand-button flex items-center gap-2 px-6 py-3"
          >
            <Home size={18} />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}
