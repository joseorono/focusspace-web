import { useCallback, useEffect, useMemo, useRef, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

export interface DotPatternProps {
  className?: string
  children?: ReactNode
  dotSize?: number
  gap?: number
  baseColor?: string
  glowColor?: string
  proximity?: number
  glowIntensity?: number
  waveSpeed?: number
}

interface Dot {
  x: number
  y: number
  baseOpacity: number
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  return match
    ? {
        r: Number.parseInt(match[1], 16),
        g: Number.parseInt(match[2], 16),
        b: Number.parseInt(match[3], 16),
      }
    : { r: 0, g: 0, b: 0 }
}

export function DotPattern({
  className,
  children,
  dotSize = 2,
  gap = 24,
  baseColor = '#404040',
  glowColor = '#22d3ee',
  proximity = 120,
  glowIntensity = 1,
  waveSpeed = 0.5,
}: DotPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<Dot[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number | null>(null)
  const startTimeRef = useRef(Date.now())

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor])
  const glowRgb = useMemo(() => hexToRgb(glowColor), [glowColor])

  const buildGrid = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current

    if (!canvas || !container) return

    const rect = container.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    const cellSize = dotSize + gap
    const cols = Math.ceil(rect.width / cellSize) + 1
    const rows = Math.ceil(rect.height / cellSize) + 1

    const offsetX = (rect.width - (cols - 1) * cellSize) / 2
    const offsetY = (rect.height - (rows - 1) * cellSize) / 2

    const dots: Dot[] = []

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        dots.push({
          x: offsetX + col * cellSize,
          y: offsetY + row * cellSize,
          baseOpacity: 0.3 + Math.random() * 0.2,
        })
      }
    }

    dotsRef.current = dots
  }, [dotSize, gap])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)

    const { x: mouseX, y: mouseY } = mouseRef.current
    const proximitySq = proximity * proximity
    const time = (Date.now() - startTimeRef.current) * 0.001 * waveSpeed

    for (const dot of dotsRef.current) {
      const deltaX = dot.x - mouseX
      const deltaY = dot.y - mouseY
      const distanceSq = deltaX * deltaX + deltaY * deltaY

      const wave = Math.sin(dot.x * 0.02 + dot.y * 0.02 + time) * 0.5 + 0.5
      const waveOpacity = dot.baseOpacity + wave * 0.15
      const waveScale = 1 + wave * 0.2

      let opacity = waveOpacity
      let scale = waveScale
      let red = baseRgb.r
      let green = baseRgb.g
      let blue = baseRgb.b
      let glow = 0

      if (distanceSq < proximitySq) {
        const distance = Math.sqrt(distanceSq)
        const t = 1 - distance / proximity
        const easedT = t * t * (3 - 2 * t)

        red = Math.round(baseRgb.r + (glowRgb.r - baseRgb.r) * easedT)
        green = Math.round(baseRgb.g + (glowRgb.g - baseRgb.g) * easedT)
        blue = Math.round(baseRgb.b + (glowRgb.b - baseRgb.b) * easedT)

        opacity = Math.min(1, waveOpacity + easedT * 0.7)
        scale = waveScale + easedT * 0.8
        glow = easedT * glowIntensity
      }

      const radius = (dotSize / 2) * scale

      if (glow > 0) {
        const gradient = ctx.createRadialGradient(
          dot.x,
          dot.y,
          0,
          dot.x,
          dot.y,
          radius * 4,
        )
        gradient.addColorStop(
          0,
          `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, ${glow * 0.4})`,
        )
        gradient.addColorStop(
          0.5,
          `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, ${glow * 0.1})`,
        )
        gradient.addColorStop(1, `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, 0)`)

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, radius * 4, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      ctx.beginPath()
      ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${opacity})`
      ctx.fill()
    }

    animationRef.current = requestAnimationFrame(draw)
  }, [proximity, baseRgb, glowRgb, dotSize, glowIntensity, waveSpeed])

  useEffect(() => {
    buildGrid()

    const container = containerRef.current
    if (!container) return

    const resizeObserver = new ResizeObserver(buildGrid)
    resizeObserver.observe(container)

    return () => resizeObserver.disconnect()
  }, [buildGrid])

  useEffect(() => {
    animationRef.current = requestAnimationFrame(draw)

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [draw])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn('absolute inset-0 overflow-hidden bg-night', className)}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(3, 14, 24, 0.04) 0%, rgba(3, 14, 24, 0.1) 45%, rgba(3, 14, 24, 0.3) 100%)',
        }}
      />

      {children ? <div className="relative z-10 h-full w-full">{children}</div> : null}
    </div>
  )
}
