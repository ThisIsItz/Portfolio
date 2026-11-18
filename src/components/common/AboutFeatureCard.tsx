import { LucideIcon } from 'lucide-react'
import { IconBadge } from '@/components/common/IconBadge'

interface AboutFeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export const AboutFeatureCard = ({
  icon,
  title,
  description
}: AboutFeatureCardProps) => {
  return (
    <div className="gradient-border p-6 card-hover">
      <div className="flex items-start gap-4">
        <IconBadge icon={icon} />
        <div className="text-left">
          <h4 className="font-semibold text-xl">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}
