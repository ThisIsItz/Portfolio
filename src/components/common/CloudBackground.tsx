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
      delay: -Math.random() * duration,
      opacity: opacityMin + Math.random() * (opacityMax - opacityMin)
    })
  }

  return clouds
}

export const CloudBackground = () => {
  const [clouds, setClouds] = useState<Cloud[]>([])

  useEffect(() => {
    const generateClouds = () => {
      const viewportWidth = window.innerWidth
      const viewportArea = window.innerWidth * window.innerHeight

      const nearDurationRange =
        viewportWidth < 640
          ? [34, 48]
          : viewportWidth < 1200
            ? [46, 64]
            : [60, 86]

      const farDurationRange =
        viewportWidth < 640
          ? [48, 68]
          : viewportWidth < 1200
            ? [62, 86]
            : [78, 108]

      const nearCount =
        viewportWidth < 640
          ? 2
          : viewportWidth < 900
            ? 3
            : Math.min(7, Math.max(4, Math.round(viewportArea / 220000)))

      const farCount =
        viewportWidth < 640
          ? 1
          : viewportWidth < 900
            ? 2
            : Math.max(2, Math.round(nearCount * 0.6))

      const nearClouds = createCloudLayer(
        'near',
        nearCount,
        14,
        56,
        140,
        220,
        nearDurationRange[0],
        nearDurationRange[1],
        0.5,
        0.68
      )

      const farClouds = createCloudLayer(
        'far',
        farCount,
        8,
        40,
        100,
        160,
        farDurationRange[0],
        farDurationRange[1],
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
          className="cloud animate-cloud-drift motion-reduce:animate-none"
          style={{
            width: `${cloud.size}px`,
            height: `${cloud.size * 0.4}px`,
            left: `${-(cloud.size * 1.35)}px`,
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
