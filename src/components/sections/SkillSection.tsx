import { cn } from '@/lib/utils'
import { useState } from 'react'
import { SectionHeading } from '@/components/common/SectionHeading'

const skillFilters = ['all', 'frontend', 'backend', 'testing', 'tools'] as const

type SkillFilter = (typeof skillFilters)[number]
type SkillCategory = Exclude<SkillFilter, 'all'>

interface Skills {
  name: string
  category: SkillCategory
}

const skills: Skills[] = [
  { name: 'HTML/CSS', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Vue', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Shadcn UI', category: 'frontend' },
  { name: 'React Native', category: 'frontend' },
  { name: 'Zustand', category: 'frontend' },
  { name: 'Redux', category: 'frontend' },
  { name: 'TanStack Query', category: 'frontend' },
  { name: 'TanStack Table', category: 'frontend' },
  { name: 'Accessibility', category: 'frontend' },
  { name: 'Go', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Jest', category: 'testing' },
  { name: 'Vitest', category: 'testing' },
  { name: 'React Testing Library', category: 'testing' },
  { name: 'Cypress', category: 'testing' },
  { name: 'Storybook', category: 'frontend' },
  { name: 'Figma', category: 'tools' },
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'AWS', category: 'tools' },
  { name: 'Claude', category: 'tools' },
  { name: 'GitHub Copilot', category: 'tools' },
  { name: 'Codex', category: 'tools' }
]

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState<SkillFilter>('all')

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading prefix="My" highlight="Skills" />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillFilters.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={cn(
                'px-5 py-2 rounded-full transition-colors duration-300. capitalize',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/90 text-foreground border border-border shadow-xs hover:bg-secondary'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, i) => (
            <div
              key={i}
              className="bg-card p-4 rounded-lg shadow-xs card-hover"
            >
              <div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
