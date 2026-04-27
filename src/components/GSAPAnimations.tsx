'use client'

import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function GSAPAnimations() {
  const pathname = usePathname()

  useGSAP(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill())

    // Scroll reveals — elements outside the hero (below fold)
    const revealEls = gsap.utils.toArray<HTMLElement>('.reveal').filter(
      (el) => !el.closest('.hero')
    )
    revealEls.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        }
      )
    })

    // Stagger groups outside hero
    const staggerGroups = gsap.utils.toArray<HTMLElement>('.reveal-stagger').filter(
      (el) => !el.closest('.hero')
    )
    staggerGroups.forEach((group) => {
      const children = Array.from(group.children) as HTMLElement[]
      gsap.fromTo(children,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0,
          duration: 0.75, ease: 'power3.out', stagger: 0.09,
          scrollTrigger: { trigger: group, start: 'top 85%', once: true },
        }
      )
    })

  }, { dependencies: [pathname], revertOnUpdate: true })

  return null
}
