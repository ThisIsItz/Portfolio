import { LucideIcon } from 'lucide-react'

interface AboutFeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export const AboutFeatureCard = ({
  icon: Icon,
  title,
  description
}: AboutFeatureCardProps) => {
  return (
    <div className="gradient-border p-6 card-hover">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Icon className="size-6 text-primary" />
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-lg">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}
