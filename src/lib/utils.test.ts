import { describe, expect, it } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn', () => {
  it('joins plain class names together', () => {
    expect(cn('flex', 'items-center')).toBe('flex items-center')
  })

  it('drops falsy values', () => {
    expect(cn('flex', false, undefined, null, '', 'gap-2')).toBe('flex gap-2')
  })

  it('applies conditional classes based on truthiness', () => {
    const isActive = true
    expect(cn('btn', isActive && 'btn-active')).toBe('btn btn-active')
    expect(cn('btn', !isActive && 'btn-active')).toBe('btn')
  })

  it('resolves conflicting Tailwind utilities, keeping the last one', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
    expect(cn('text-sm text-muted-foreground', 'text-lg')).toBe(
      'text-muted-foreground text-lg'
    )
  })
})
