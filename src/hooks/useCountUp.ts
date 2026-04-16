'use client'

import { useEffect, useRef } from 'react'

export function useCountUp(ref: React.RefObject<HTMLElement | null>, target: string) {
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const m = target.trim().match(/^(\$?)([0-9.]+)([KBM+%,]*)$/)
    if (!m) return
    const [, prefix, numStr, suffix] = m
    const targetNum = parseFloat(numStr)
    const isFloat = suffix === 'B' || numStr.includes('.')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || animated.current) return
        animated.current = true
        const duration = 1600
        const start = performance.now()
        function update(now: number) {
          const p = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          const val = targetNum * ease
          el!.textContent =
            prefix +
            (isFloat ? val.toFixed(1) : Math.floor(val).toLocaleString()) +
            suffix
          if (p < 1) requestAnimationFrame(update)
        }
        requestAnimationFrame(update)
      })
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, target])
}

export function useScrollReveal() {
  useEffect(() => {
    function checkReveal() {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) {
          el.classList.add('visible')
        }
      })
    }
    window.addEventListener('scroll', checkReveal, { passive: true })
    checkReveal()
    return () => window.removeEventListener('scroll', checkReveal)
  }, [])
}