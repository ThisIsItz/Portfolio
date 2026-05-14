import { useEffect, useState } from 'react'

type Cloud = {
  id: string
  size: number
  top: number
  duration: number
  delay: number
  opacity: number
}

const createCloudLayer = (
  prefix: string,
  count: number,
  topMin: number,
  topMax: number,
  sizeMin: number,
  sizeMax: number,
  durationMin: number,
  durationMax: number,
  opacityMin: number,
  opacityMax: number
) => {
  const clouds: Cloud[] = []

  for (let index = 0; index < count; index += 1) {
    const duration = durationMin + Math.random() * (durationMax - durationMin)

    clouds.push({
      id: `${prefix}-${index}`,
      size: sizeMin + Math.random() * (sizeMax - sizeMin),
      top: topMin + Math.random() * (topMax - topMin),
      duration,
      delay: -(duration / count) * index,
      opacity: opacityMin + Math.random() * (opacityMax - opacityMin)
    })
  }

  return clouds
}

export const CloudBackground = () => {
  const [clouds, setClouds] = useState<Cloud[]>([])

  useEffect(() => {
    const generateClouds = () => {
      const baseCount = Math.max(6, Math.floor(window.innerWidth / 220))

      const nearClouds = createCloudLayer(
        'near',
        baseCount,
        14,
        56,
        140,
        220,
        42,
        56,
        0.5,
        0.68
      )

      const farClouds = createCloudLayer(
        'far',
        Math.max(4, Math.floor(baseCount * 0.7)),
        8,
        40,
        100,
        160,
        60,
        78,
        0.32,
        0.5
      )

      setClouds([...farClouds, ...nearClouds])
    }

    generateClouds()
    window.addEventListener('resize', generateClouds)

    return () => {
      window.removeEventListener('resize', generateClouds)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-linear-to-b from-sky-200 via-sky-100 to-white" />
      <div className="absolute inset-x-0 top-0 h-56 bg-linear-to-b from-white/40 to-transparent" />

      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="cloud animate-cloud-drift"
          style={{
            width: `${cloud.size}px`,
            height: `${cloud.size * 0.4}px`,
            top: `${cloud.top}%`,
            opacity: cloud.opacity,
            animationDuration: `${cloud.duration}s`,
            animationDelay: `${cloud.delay}s`
          }}
        />
      ))}
    </div>
  )
}
