import { CloudBackground } from '@/components/common/CloudBackground'
import { StarBackground } from '@/components/common/StarBackground'
import { useTheme } from '@/hooks/use-theme'

export const AppBackground = () => {
  const { isDark } = useTheme()

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
          isDark ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <StarBackground />
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
          isDark ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <CloudBackground />
      </div>

      <div
        className={`absolute rounded-full blur-3xl transition-all duration-[1400ms] ease-in-out ${
          isDark
            ? 'h-52 w-52 top-[80px] right-10 bg-blue-100/18 opacity-70'
            : 'h-60 w-60 top-[64px] right-6 bg-amber-200/38 opacity-72'
        }`}
      />

      <div
        className={`absolute rounded-full transition-all duration-[1400ms] ease-in-out ${
          isDark
            ? 'h-16 w-16 top-[104px] right-16 bg-slate-600/90 shadow-[inset_-8px_-8px_0_0_rgba(15,23,42,0.65),inset_3px_3px_0_0_rgba(255,255,255,0.25)]'
            : 'h-20 w-20 top-[88px] right-12 bg-amber-100/95 shadow-[0_0_34px_rgba(251,191,36,0.40)]'
        }`}
      />
    </div>
  )
}
