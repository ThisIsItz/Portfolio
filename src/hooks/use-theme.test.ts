import { describe, expect, it, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useTheme } from '@/hooks/use-theme'

describe('useTheme', () => {
  it('throws a clear error when used outside a ThemeProvider', () => {
    // React logs the thrown render error to console; silence it for this test.
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    expect(() => renderHook(() => useTheme())).toThrow(
      'useTheme must be used within a ThemeProvider'
    )

    consoleError.mockRestore()
  })
})
