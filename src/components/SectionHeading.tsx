interface SectionHeadingProps {
  prefix: string
  highlight: string
  className?: string
}

export const SectionHeading = ({
  prefix,
  highlight,
  className = 'mb-12'
}: SectionHeadingProps) => {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold text-center ${className}`}>
      {prefix}
      <span className="text-primary"> {highlight}</span>
    </h2>
  )
}
