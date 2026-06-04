import { useRef } from 'react'
import { useInView } from 'motion/react'

export function useScrollAnimation<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return { ref, isInView }
}
