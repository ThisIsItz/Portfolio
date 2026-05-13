import { LucideIcon } from 'lucide-react'

interface ContactItemProps {
  icon: LucideIcon
  label: string
  value: string
  href?: string
}

export const ContactItem = ({
  icon: Icon,
  label,
  value,
  href
}: ContactItemProps) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Icon className="size-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-medium">{label}</h4>
        {href ? (
          <a
            href={href}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-muted-foreground">{value}</p>
        )}
      </div>
    </div>
  )
}
