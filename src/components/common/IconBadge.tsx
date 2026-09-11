import { LucideIcon } from 'lucide-react'

interface IconBadgeProps {
  icon: LucideIcon
}

export const IconBadge = ({ icon: Icon }: IconBadgeProps) => (
  <div className="p-3 rounded-full bg-primary/10 shrink-0">
    <Icon className="size-6 text-primary" />
  </div>
)
