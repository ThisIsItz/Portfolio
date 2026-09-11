import { ArrowUp } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="relative py-4 px-4 bg-card border-t border-border flex flex-wrap justify-between items-center">
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Itziar Urbieta. All rights reserved.
      </p>

      <a
        href="#hero"
        aria-label="Back to top"
        className="p-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors focus-ring"
      >
        <ArrowUp size={16} aria-hidden="true" />
      </a>
    </footer>
  )
}
