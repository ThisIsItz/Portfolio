import { ArrowUp } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="relative py-6 px-4 bg-card border-t border-border mt-12 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Itziar Urbieta. All rights reserved.
      </p>

      <a
        href="#hero"
        aria-label="Back to top"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors focus-ring"
      >
        <ArrowUp aria-hidden="true" />
      </a>
    </footer>
  )
}
