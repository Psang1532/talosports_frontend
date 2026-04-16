'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    function check() {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) {
          el.classList.add('visible')
        }
      })
    }
    window.addEventListener('scroll', check, { passive: true })
    check()
    return () => window.removeEventListener('scroll', check)
  }, [])

  return null
}
