import { LucideIcon } from 'lucide-react'
import { IconBadge } from '@/components/common/IconBadge'

interface ContactItemProps {
  icon: LucideIcon
  label: string
  value: string
  href?: string
}

export const ContactItem = ({
  icon,
  label,
  value,
  href
}: ContactItemProps) => {
  return (
    <div className="flex items-start space-x-4">
      <IconBadge icon={icon} />
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
