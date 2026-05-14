import { CloudBackground } from '@/components/common/CloudBackground'
import { StarBackground } from '@/components/common/StarBackground'
import { useTheme } from '@/contexts/ThemeContext'

export const AppBackground = () => {
  const { isDark } = useTheme()

  return isDark ? <StarBackground /> : <CloudBackground />
}
